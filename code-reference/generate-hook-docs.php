<?php

declare(strict_types=1);

include_once "get-hooks.php";

/**
 * Generate documentation for hooks in WC
 */
class HookDocsGenerator
{

    /**
     * Source path.
     */
    protected const SOURCE_PATH = 'ultimatemember/';

    /**
     * Filter Hooks template path.
     */
    protected const FILTER_HOOKS_TEMPLATE_PATH = 'data/templates/ultimatemember/api/filters.html';

    /**
     * Action Hooks template path.
     */
    protected const ACTION_HOOKS_TEMPLATE_PATH = 'data/templates/ultimatemember/api/actions.html';

    /**
     * Search index path.
     */
    protected const SEARCH_INDEX_PATH = 'data/templates/ultimatemember/api/js/searchIndex.js';

    /**
     * List of files found.
     *
     * @var array
     */
    protected static $found_files = [];

    /**
     * List of action hooks found.
     *
     * @var array
     */
    protected static $found_action_hooks = [];

    /**
     * List of filter hooks found.
     *
     * @var array
     */
    protected static $found_filter_hooks = [];

    /**
     * Get files to scan.
     *
     * @return array
     */
    protected static function getFilesToScan(): array
    {
        $files = [];

        $files['Template Files']     = self::getFiles('*.php', GLOB_MARK, self::SOURCE_PATH . 'templates/');
        $files['Template Functions'] = array( self::SOURCE_PATH . 'includes/um-short-functions.php' );
        $files['Shortcodes']         = self::getFiles('*.php', GLOB_MARK, self::SOURCE_PATH . 'includes/core/class-shortcodes.php');
        $files['Core Classes']       = array_merge(
            self::getFiles('class-*.php', GLOB_MARK, self::SOURCE_PATH . 'includes/core/'),
        );

        return array_filter($files);
    }

    /**
     * Get file URL.
     *
     * @param array $file File data.
     * @return string
     */
    protected static function getFileURL(array $file): string
    {
        $url = str_replace('.php', '#source-view.' . $file['line'], $file['path']);
        $url = str_replace(['_', '/'], '-', $url);
        $url = str_replace('ultimatemember-', '/developer/files/', $url);
        $url = str_replace("//","/", $url );
        return $url;
    }

    /**
     * Get file link.
     *
     * @param array $file File data.
     * @return string
     */
    protected static function getFileLink(array $file): string
    {
        return str_replace("/"," &#8250; ",$file['path'] );
    }

    /**
     * Get files.
     *
     * @param string $pattern Search pattern.
     * @param int    $flags   Glob flags.
     * @param string $path    Directory path.
     * @return array
     */
    protected static function getFiles($pattern, $flags = 0, $path = '')
    {
        if (! $path && ( $dir = dirname($pattern) ) != '.') {
            if ('\\' == $dir || '/' == $dir) {
                $dir = '';
            }

            return self::getFiles(basename($pattern), $flags, $dir . '/');
        }

        $paths = glob($path . '*', GLOB_ONLYDIR | GLOB_NOSORT);
        $files = glob($path . $pattern, $flags);

        if (is_array($paths)) {
            foreach ($paths as $p) {
                $found_files = [];
                $retrieved_files = (array) self::getFiles($pattern, $flags, $p . '/');
                foreach ($retrieved_files as $file) {
                    if (! in_array($file, self::$found_files)) {
                        $found_files[] = $file;
                    }
                }

                self::$found_files = array_merge(self::$found_files, $found_files);

                if (is_array($files) && is_array($found_files)) {
                    $files = array_merge($files, $found_files);
                }
            }
        }
        return $files;
    }

    /**
     * Get hooks.
     *
     * @param array $files_to_scan Files to scan.
     * @return array
     */
    public static function getHooks(array $files_to_scan): array
    {
        $scanned = [];
        $results = [];

        foreach ($files_to_scan as $heading => $files) {
            $hooks_found = [];

            foreach ($files as $f) {
                $current_file       = $f;
                $tokens             = token_get_all(file_get_contents($f));
                $token_type         = false;
                $current_class      = '';
                $current_function   = '';
                $current_comment    = '';

                if (in_array($current_file, $scanned)) {
                    continue;
                }

                $scanned[] = $current_file;

                foreach ($tokens as $index => $token) {
                    if (is_array($token)) {
                        $trimmed_token_1 = trim($token[1]);
                        if (T_DOC_COMMENT == $token[0]) {
                            $token_type = 'comment';
                        } elseif (T_CLASS == $token[0]) {
                            $token_type = 'class';
                        } elseif (T_FUNCTION == $token[0]) {
                            $token_type = 'function';
                        } elseif ('do_action' === $token[1]) {
                            $token_type = 'action';
                        } elseif ('apply_filters' === $token[1]) {
                            $token_type = 'filter';
                        } elseif ($token_type && ! empty($trimmed_token_1)) {
                            switch ($token_type) {
                                case 'class':
                                    $current_class = $token[1];
                                    break;
                                case 'comment':
                                    $current_comment = $token[1];
                                    break;
                                case 'function':
                                    $current_function = $token[1];
                                    break;
                                case 'filter':
                                case 'action':
                                    $hook = trim($token[1], "'");
                                    $hook = str_replace('_FUNCTION_', strtoupper($current_function), $hook);
                                    $hook = str_replace('_CLASS_', strtoupper($current_class), $hook);
                                    $hook = str_replace('$this', strtoupper($current_class), $hook);
                                    $hook = str_replace(array( '.', ' ', ' ', '"', "'", ' ', ')', '(' ), '', $hook);
                                    $hook = preg_replace('/\/\/phpcs:(.*)(\n)/', '', $hook);
                                    $loop = 0;

                                    // Keep adding to hook until we find a comma or colon.
                                    while (1) {
                                        $loop++;
                                        $prev_hook = is_string($tokens[ $index + $loop - 1 ]) ? $tokens[ $index + $loop - 1 ] : $tokens[ $index + $loop - 1 ][1];
                                        $next_hook = is_string($tokens[ $index + $loop ]) ? $tokens[ $index + $loop ] : $tokens[ $index + $loop ][1];

                                        if (in_array($next_hook, array( '.', ' ', ' ', '"', "'", ' ', ')', '(' ))) {
                                            continue;
                                        }

                                        if (in_array($next_hook, array( ',', ';' ))) {
                                            break;
                                        }

                                        $hook_first = substr($next_hook, 0, 1);
                                        $hook_last  = substr($next_hook, -1, 1);

                                        if ('{' === $hook_first || '}' === $hook_last || '$' === $hook_first || ')' === $hook_last || '>' === substr($prev_hook, -1, 1)) {
                                            $next_hook = strtoupper($next_hook);
                                        }

                                       $next_hook = str_replace(array( '.', ' ', ' ', '"', "'", ' ', ')', '(' ), '', $next_hook);

                                        $hook .= $next_hook;
                                    }

                                    $raw_hook_name = trim($hook);
                                    $hook = md5( strtolower( $raw_hook_name ) );

                                    if (isset($hooks_found[ $hook ])) {

                                        $raw_hook_name2 = $raw_hook_name;

                                        $hooks_found[ $hook ]['files'][] = ['path' => $current_file, 'line' => $token[2]];
                                       
                                        if ('action' === $token_type && isset( self::$found_action_hooks[ $hook ]  ) ) {
                                            self::$found_action_hooks[ $hook ]['files'][] = ['path' => $current_file, 'line' => $token[2]];
                                            self::$found_action_hooks[ $hook ]['raw_hook_name2'] = $raw_hook_name2;
                                        }

                                        if ('filter' === $token_type && isset( self::$found_filter_hooks[ $hook ]  ) ) {
                                            self::$found_filter_hooks[ $hook ]['files'][] = ['path' => $current_file, 'line' => $token[2]];
                                            self::$found_filter_hooks[ $hook ]['raw_hook_name2'] = $raw_hook_name2;
                                        }

                                    } else {

                                        if( strpos( $raw_hook_name, "um_" ) <= -1 && strpos( $raw_hook_name, "the_" ) <= -1 ){
                                            continue 2;
                                        }
                                        $raw_hook_name2 = $raw_hook_name;
                                        $raw_hook_name = str_replace("$", "&dollar;", $raw_hook_name );
                                        $raw_hook_name = str_replace("{", "&lcub;", $raw_hook_name );
                                        $raw_hook_name = str_replace("}", "&rcub;", $raw_hook_name );

                                        $hooks_found[ $hook ] = [
                                            'files'    => [['path' => $current_file, 'line' => $token[2] ]],
                                            'class'    => $current_class,
                                            'function' => $current_function,
                                            'type'     => $token_type,
                                          //  'raw'      => implode(" ",$tokens),
                                            'raw_hook_name' => $raw_hook_name,
                                            'raw_hook_name2' => $raw_hook_name2,
                                            'hash_name' =>  $hook,
                                        ];

                                        
                                        if ('action' === $token_type) {
                                            self::$found_action_hooks[ $hook ] = [$hooks_found[ $hook ]];
                                        }

                                        if ('filter' === $token_type) {
                                            self::$found_filter_hooks[ $hook ] = [$hooks_found[ $hook ]];
                                        }
                                    }
                                    break;
                            }
                            $token_type = false;
                        }
                    }
                }
            }

            ksort($hooks_found);
          
            foreach( $hooks_found as $h => $d ) {
                if( strpos( $d['raw_hook_name'], "um_" ) <= -1 ) {
                    unset( $hooks_found[ $h ] );
                    unset( self::$found_action_hooks[ $h ] );
                    unset( self::$found_filter_hooks[ $h ] );
                 
                }
            }
      
           

            if (!empty($hooks_found)) {
                $results[ $heading ] = $hooks_found;
               
            }
           
        }

     
     
        return $results;
    }

    /**
     * Get delimited list output for Filter hooks.
     *
     * @param array $hook_list List of hooks.
     * @param array $files_to_scan List of files to scan.
     * @param string
     */
    protected static function getDelimitedListOutputFilterHooks(array $hook_list, array $files_to_scan): string
    {
        $output = '';

        // Import nextJS link component
        $output .= 'import Link from "next/link" 
        
        ';

        $output .= '<div className="hooks-reference">
        
        # Filter Hooks
        <div className="py-2 pt-0">
        **Ultimate Member Hook** is a feature that allows you to manipulate a procedure without modifying the file on Ultimate Member core. A hook can be applied both to <Link href="/developer/hooks/actions">action (action hook)</Link> and <Link href="/developer/hooks/filters">filter (filter hook)</Link>.
        </div>
        ';
        foreach ($hook_list as $heading => $hooks) {

            $arf = current( $hooks );

            $output .= '<div className="um-single-page rounded-md border-solid border-um-100/10 p-2 mt-2 mb-4 border-2 contrast-more:border-neutral-400"> ';
            $output .= '  
             
            ';
            $output .= '## ' . strtolower( $arf ['raw_hook_name']  ) .' ' ;

            $output .= '  
              
            ';
            $output .= '<div className="phpdocumentor-table-of-contents   ">
            
            ';
            foreach ($hooks as $hook => $details) {

                if( empty( $details['files'] ) ) continue;

              
                $output .= ' <div className="py-5 pt-0">
               
                ';
                $link_list = [];
                $github_file_url = '';
                if( isset( $details['files'] ) ){
                    foreach ($details['files'] as $fl => $file) {
                   
                    $path = str_replace( "ultimatemember", "", $file['path'] );
                    $the_path = str_replace("/"," &#8250; ", $file['path'] );
                    $the_URI = str_replace("//","/", $path . '#L' . $file['line'] );
                    global $argv;
                    $version = $argv[1];
                    $github_file_url = "https://github.com/ultimatemember/ultimatemember/tree/{$version}/"  . $the_URI;
                    $github_file_url = str_replace( "{$version}//", "{$version}/", $github_file_url );

                    $um_hooks_comment = new UM_Hooks_Comment( $file['path'], 'filter', $details, false, false, $arf['raw_hook_name2'] );
                    $uri = $um_hooks_comment->getSlug(  $arf['raw_hook_name2'] );
                    $d = $um_hooks_comment->get_hook_data( $arf['hash_name'] );
                    $d['uri'] = $uri;
                        
                    if( isset( $d['since'] )){
                        $since = $d['since'];
                    }

                    if( isset( $d['desc'] ) ){
                        $desc  = $d['desc'];
                    }

                    $output .= '
                    
                <span className="text-xs font-medium inline-flex items-center px-2.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">since ' . $since . '</span><span className=" text-xs font-medium inline-flex items-center px-2.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">in:&nbsp;' . $the_path . '</span>
                <Link href="' . $github_file_url . '" ><a  className="py-1 px-2 border rounded text-xs float-right mt-2">View on Github</a></Link>
                <Link href="/developer/hooks/filter/' . $d['uri'] . '"><a class="py-1 px-2 border rounded text-xs float-right mt-2 mr-3">View Details</a></Link>
                <div className="mt-1">
                ' . $desc  . '
                </div>
               
               ';                   
                }// Endforeach
    
                } // end if

                $output .= ' 
                    </div>

                </div>

                ';
            }
            $output .= '
            
            </div>
            
            ';
        }

        $output .= '
          

        </div>';

        return $output;
    }


    /**
     * Get delimited list output for Action hooks.
     *
     * @param array $hook_list List of hooks.
     * @param array $files_to_scan List of files to scan.
     * @param string
     */
    public static function getDelimitedListOutputActionHooks(array $hook_list, array $files_to_scan): string
    {

       
        $output = '';

        // Import nextJS link component
        $output .= 'import Link from "next/link" 
        
        ';

        $output .= '<div className="hooks-reference">
        
        # Action Hooks
        <div className="py-2 pt-0">
        **Ultimate Member Hook** is a feature that allows you to manipulate a procedure without modifying the file on Ultimate Member core. A hook can be applied both to <Link href="/developer/hooks/actions">action (action hook)</Link> and <Link href="/developer/hooks/filters">filter (filter hook)</Link>.
        </div>
        ';
        foreach ($hook_list as $heading => $hooks) {

            $output .= '<div className="um-single-page rounded-md border-solid border-um-100/10 p-2 mt-2 mb-4 border-2 contrast-more:border-neutral-400"> ';
            $output .= '  
             
            ';

            $arf = current( $hooks );

            $output .= '## ' . strtolower( $arf['raw_hook_name']  ) .' ' ;

            $output .= '  
             
            ';
            $output .= '<div className="phpdocumentor-table-of-contents  ">
            
            ';
            foreach ($hooks as $hook => $details) {

                if( empty( $details['files'] ) ) continue;
               
                $output .= ' <div className="py-5 pt-0">
                
                ';

                $link_list = [];
                $github_file_url = '';
                if( isset( $details['files'] ) ){
                    foreach ($details['files'] as $fl => $file) {
                   
                    $path = str_replace( "ultimatemember", "", $file['path'] );
                    $the_path = str_replace("/"," &#8250; ", $file['path'] );
                    $the_URI = str_replace("//","/", $path . '#L' . $file['line'] );
                    global $argv;
                    $version = $argv[1];
                    $github_file_url = "https://github.com/ultimatemember/ultimatemember/tree/{$version}/"  . $the_URI;
                    $github_file_url = str_replace( "{$version}//", "{$version}/", $github_file_url );

                    $um_hooks_comment = new UM_Hooks_Comment( $file['path'], 'action', $details, false, false,  $arf['raw_hook_name2'], $hooks );
                    $d = $um_hooks_comment->get_hook_data( $arf['hash_name'] );
                    $uri = $um_hooks_comment->getSlug(  $arf['raw_hook_name2'] );
                    $d['uri'] = $uri;

                    if( isset( $d['since'] )){
                        $since = $d['since'];
                    }

                    if( isset( $d['desc'] ) ){
                        $desc  = $d['desc'];
                    }

                    $output .= '
                    
                <span className="text-xs font-medium inline-flex items-center px-2.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">since ' . $since . '</span><span className=" text-xs font-medium inline-flex items-center px-2.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">in:&nbsp;' . $the_path . '</span>
                <Link href="' . $github_file_url . '" ><a  className="py-1 px-2 border rounded text-xs float-right mt-2">View on Github</a></Link>
                <Link href="/developer/hooks/action/' . $d['uri'] . '"><a class="py-1 px-2 border rounded text-xs float-right mt-2 mr-3">View Details</a></Link>
               <div className="mt-1">
                ' . $desc  . '
                </div>
               
               ';                   
                    }// Endforeach
        
                } // end if

                $output .= ' 
                    </div>

                </div>

                ';
            }
            $output .= '
            
            </div>
            
            ';
        }

        $output .= '
           

        </div>';


        return $output;
    }

    /**
     * Get JS output.
     *
     * @param array $hook_list List of hooks.
     * @param string
     */
    protected static function getJSOutput(array $hook_list): string
    {
        $output = '';

        foreach ($hook_list as $heading => $hooks) {
            foreach ($hooks as $hook => $details) {
                $type    = 'filter' === $details['type'] ? 'Filter' : 'Action';
                $summary = $heading . ' ' . $type;
                $name    = '<strong>' . $type . ' hook: <\/strong>' . $hook;

                foreach ($details['files'] as $file) {
                    $summary .= ' located in ' . str_replace('ultimatemember/', '', $file['path']) . ': ' . $file['line'];

                    $output .= ',{';
                    $output .= 'fqsen: "' . $name . '",';
                    $output .= 'name: "' . $hook . '",';
                    $output .= 'summary: "' . $summary . '",';
                    $output .= 'url: "' . str_replace('../', 'https://ultimatemember.github.io/code-reference/', self::getFileURL($file)) . '"';
                    $output .= '}';
                }
            }
        }

        return $output;
    }

    /**
     * Apply changes to build/.
     */
    public static function applyChanges()
    {
        $files_to_scan = self::getFilesToScan();
        $hook_list     = self::getHooks($files_to_scan);

        if (empty($hook_list)) {
            return;
        }

        $template = file_get_contents(self::FILTER_HOOKS_TEMPLATE_PATH);
        file_put_contents(self::FILTER_HOOKS_TEMPLATE_PATH, "<!-- hooks -->");

        $template = file_get_contents(self::ACTION_HOOKS_TEMPLATE_PATH);
        file_put_contents(self::ACTION_HOOKS_TEMPLATE_PATH, "<!-- hooks -->");

        // Add Filter Hooks
        if (file_exists(self::FILTER_HOOKS_TEMPLATE_PATH)) {
            $output   = self::getDelimitedListOutputFilterHooks(self::$found_filter_hooks, $files_to_scan);
            $template = file_get_contents(self::FILTER_HOOKS_TEMPLATE_PATH);
            $template = str_replace('<!-- hooks -->', $output, $template);
            file_put_contents(self::FILTER_HOOKS_TEMPLATE_PATH, $template);
        }

        // Add Action Hooks
        if (file_exists(self::ACTION_HOOKS_TEMPLATE_PATH)) {
            $output   = self::getDelimitedListOutputActionHooks(self::$found_action_hooks, $files_to_scan);
            $template = file_get_contents(self::ACTION_HOOKS_TEMPLATE_PATH);
            $template = str_replace('<!-- hooks -->', $output, $template);
            file_put_contents(self::ACTION_HOOKS_TEMPLATE_PATH, $template);
        }


        // Add hooks to search index.
        if (file_exists(self::SEARCH_INDEX_PATH)) {
            $output   = self::getJSOutput($hook_list);
            $template = file_get_contents(self::SEARCH_INDEX_PATH);
            $template = str_replace('}];', '}' . $output . '];', $template);
            file_put_contents(self::SEARCH_INDEX_PATH, $template);
        }

        echo "Ultimate Member Docs were generated succesfully :)\n";
    }
}

if( ! defined("UM_DOC_GENERATOR_DEBUG") ){
    HookDocsGenerator::applyChanges();
}
