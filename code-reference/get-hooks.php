<?php 

class UM_Hooks_Comment{

    protected static $comment = '';

    protected static $hooks = [];

    protected static $arr_files  = [];

    protected static $total_hooks = 0;

    public $filename = '';

    /**
     * Build Path
     */
    protected const BUILD_HOOKS_TEMPLATE_PATH = 'build/hooks/';

    function __construct( $file, $token_type = 'unknown', $files = [], $debug = false, $override_hook_name = false, $raw_hook_name2 = '', $arr_hooks_scanned = array() ){
        
        if( ! file_exists( $file ) ) { echo "file not found"; return; }

        $tokens             = token_get_all(file_get_contents( $file ));
        $count              = count( $tokens );
        $functions          = array();
        $ignore_functions   = array();
        $token_type         = '';
        $found_hooks        = array();
        $total_actions      = 0;
        $total_filters      = 0;
        
         
        $hname_raw = md5( $raw_hook_name2 );

        self::$hooks[ $hname_raw ] = array(
            'title' => $raw_hook_name2,
            'type' => $token_type,
            'hash_name' => $hname_raw,
            'hook'  => $raw_hook_name2,
            'raw_hook_name' => $raw_hook_name2,
        );
        self::$arr_files[ $hname_raw ] = $files['files'];
        $this->populate( $hname_raw );

        foreach ($tokens as $index => $token) {

            if( isset( $token[1] ) ){
                if ('do_action' === $token[1]) {
                    $next = 0;
                    $hooker = [];

                    $chain = true;
                    $final_index = 0;
                    while( $chain ){
                        $next++;
                        if( isset( $tokens[ $index + $next ] ) ){
                            $h = $tokens[ $index + $next ];
                            $line = 0;
                            
                            if( isset( $token[2] ) ){
                                $line = $token[2];
                            }
                            
                            if( isset( $h ) ){
                                if( is_array( $h ) ){
                                    $hooker[ ]  = $h[1];
                                }else{
                                    $hooker[ ]  = $h;
                                  
                                }
                            }

                            if( ! is_array( $h ) && strpos( $h, ";" ) > -1 ){
                               
                                $final_index = $index;
                                $hname = implode("", $hooker );
                               
                                $hname = str_replace(['(',')',';'], '', $hname );
                                $hname = explode( ",", $hname )[0];
                                $hname = str_replace(['"','\''], '', $hname );
                                $hname = trim( $hname );
                                
                                $hname_raw = md5( $hname );

                                //self::$hooks[ $hname_raw ] = array();
                                self::$hooks[ $hname_raw ]['raw_hook_name'] = $hname;
                                self::$hooks[ $hname_raw ]['hook'] = "do_action" . implode("", $hooker );
                                self::$hooks[ $hname_raw ]['type'] = 'action';
                                self::$arr_files[ $hname_raw ][ $file . '.' . $line ] = array( 'line' => $line, 'path' => $file );
                                $chain = false;

                                
                            }

                           
                        }
                    }
                    $total_actions++;

                    // Get Comment Doc
                    $doloop = true;
                    $halt_once = false;
                    $prev = 0;
                    while( $doloop ){
                        $prev++;
                        if( isset( $tokens[ $final_index - $prev ] ) ){
                            $h = $tokens[ $final_index - $prev ];
                            $h0 = '';
                            if( is_array( $h ) ){
                                $h = $h[1];
                                $h0 = $h[0];
                            }

                            if( strpos( $h, "UM hook" ) > -1 || strpos( $h0, "UM hook" ) > -1 ){
                                $doloop = false;
                                 preg_match("/\* @title.*\n/is", $h, $matches);
                               
                                self::$hooks[ $hname_raw ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                               
                              
                            }

                           if( $prev > 20 ) {
                               $doloop = false;
                           }
                            

                        }
                    } // while loop

                    // Retry looking for Code Comments
                    $doloop = true;
                    $prev = 0;
                    $halt_once = false;
                    if( empty( self::$hooks[ $hname_raw ]['comment'] ) ){
                        while( $doloop ){
                        
                            if( isset( $tokens[ $final_index - $prev ] ) ){
                                $h = $tokens[ $final_index - $prev ];
                                $h0 = '';
                                if( is_array( $h ) ){
                                    $h = $h[1];
                                    $h0 = $h[0];
                                }
                            
                                if( ! $halt_once && ( strpos( $h, "*/" ) <= -1 || strpos( $h0, "*/" ) <= -1 || strpos( $h, ";" ) > -1 ||  strpos( $h, "}" ) > -1 ) ){
                                    $halt_once = true;
                                    $doloop = false;
                                }

                                if( strpos( $h, "UM hook" ) > -1 || strpos( $h0, "UM hook" ) > -1 ){
                                    $doloop = false;
                                    preg_match("/\* @title.*\n/is", $h, $matches);
                                
                                    self::$hooks[ $hname_raw ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                                
                                }

                            }
                            $prev++;
                        } // while loop

                    }

                    $this->populate( $hname_raw );
                    
                   
                } elseif ('apply_filters' === $token[1]) {
                    $next_filter = 0;
                    $hooker = [];
                    $chain = true;
                    $final_index = 0;

                
                    while( $chain ){
                        $next_filter++;
                        if( isset( $tokens[ $index + $next_filter ] ) ){
                            $h = $tokens[ $index + $next_filter ];
                            $line = 0;
                            
                            if( isset( $token[2] ) ){
                                $line = $token[2];
                            }

                            if( isset( $h ) ){
                                if( is_array( $h ) ){
                                    $hooker[ ]  = $h[1];
                                }else{
                                    $hooker[ ]  = $h;
                                  
                                }
                            }
                            
                          
                            if( ! is_array( $h ) && strpos( $h, ";" ) > -1 ){

                                $final_index = $index;
                                
                                $hname = implode("", $hooker );
                               
                                $hname = str_replace(['(',')',';'], '', $hname );
                                $hname = explode( ",", $hname )[0];
                                $hname = str_replace(['"','\''], '', $hname );
                                $hname = trim( $hname );

                                $hname_raw = md5( $hname );

                                //self::$hooks[ $hname_raw ] = array();
                                self::$hooks[ $hname_raw ]['raw_hook_name'] = $hname;
                                self::$hooks[ $hname_raw ]['hook'] = "apply_filters" . implode("", $hooker );
                                self::$hooks[ $hname_raw ]['type'] = 'filter';
                                self::$arr_files[ $hname_raw ][ $file . '.' . $line ] = array( 'line' => $line, 'path' => $file );
                                $chain = false;
                               

                            }

                            
                        }
                    } // while
                    $total_filters++;

                    // Get Comment Doc
                    $doloop = true;
                    $prev = 0;
                    $halt_once = false;
                    while( $doloop ){
                       
                        if( isset( $tokens[ $final_index - $prev ] ) ){
                            $h = $tokens[ $final_index - $prev ];
                            $h0 = '';
                            if( is_array( $h ) ){
                                $h = $h[1];
                                $h0 = $h[0];
                            }
                           
                            if( strpos( $h, "UM hook" ) > -1 || strpos( $h0, "UM hook" ) > -1 ){
                                $doloop = false;
                                 preg_match("/\* @title.*\n/is", $h, $matches);
                               
                                self::$hooks[ $hname_raw ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                              
                            }

                            if( $prev > 20 ) $doloop = false;

                        }
                        $prev++;
                    } // while loop

                    // Retry looking for Code Comments
                    $doloop = true;
                    $prev = 0;
                    $halt_once = false;
                    if( empty( self::$hooks[ $hname_raw ]['comment'] ) ){
                        while( $doloop ){
                        
                            if( isset( $tokens[ $final_index - $prev ] ) ){
                                $h = $tokens[ $final_index - $prev ];
                                $h0 = '';
                                if( is_array( $h ) ){
                                    $h = $h[1];
                                    $h0 = $h[0];
                                }
                            
                                if( ! $halt_once && ( strpos( $h, "*/" ) <= -1 || strpos( $h0, "*/" ) <= -1 || strpos( $h, ";" ) > -1 ||  strpos( $h, "}" ) > -1 ) ){
                                    $halt_once = true;
                                    $doloop = false;
                                }

                                if( strpos( $h, "UM hook" ) > -1 || strpos( $h0, "UM hook" ) > -1 ){
                                    $doloop = false;
                                    preg_match("/\* @title.*\n/is", $h, $matches);
                                
                                    self::$hooks[ $hname_raw ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                                
                                }

                            }
                            $prev++;
                        } // while loop
                    }

                    $this->populate( $hname_raw );
                      
                   
                 
                }//
            }
        }
        self::$total_hooks++;
     
        if( self::$total_hooks >= count( $arr_hooks_scanned ) ){
           
            foreach( self::$hooks as $hook => $h_data ){
             
                if( $debug === false && in_array( $h_data['type'], ['filter','action'] )  ){
                    if( $h_data ['has_comment'] == true && !empty( $h_data ['comment'] ) ){
                        $this->mdx( $h_data  );
                        
                    }else{
                       
                        $this->mdx_blank( $h_data );
                    
                    }
                }
            }
        }

            
       

        return self::$hooks;
        

    }

    public function populate( $hname_raw ){

        $type = 'unknown';
        if( isset( self::$hooks[ $hname_raw ]['type'] ) ){
            $type = self::$hooks[ $hname_raw ]['type'];
        } 

        $hook_name = 'unknown';
        if( isset( self::$hooks[ $hname_raw ]['hook'] )  ){
            $hook_name = self::$hooks[ $hname_raw ]['hook'];
        }

        $comment = '';
        if( isset( self::$hooks[ $hname_raw ]['comment'] )  && ! empty( self::$hooks[ $hname_raw ]['comment'] ) ){
            $comment = self::$hooks[ $hname_raw ]['comment'];
            self::$comment = $comment;
        }

        $line = '';
        if( isset( self::$hooks[ $hname_raw ]['line'] )  ){
            $line = self::$hooks[ $hname_raw ]['line'];
        }

        $title = '';

        if( $this->get_title() ){
            $title = $this->get_title();
        }

        if( empty( $title ) && isset( self::$hooks[ $hname_raw ]['raw_hook_name'] )  ){
            $title = self::$hooks[ $hname_raw ]['raw_hook_name'];
        }

        if( empty( $title ) ){
            $title = self::$hooks[ $hname_raw ]['hash_name'];
        }


        self::$hooks[ $hname_raw ] = array(
            'title' => $title,
            'vars'  => $this->get_vars(),
            'since' => $this->get_since(),
            'usage' => $this->get_usage(),
            'desc'  => $this->get_desc(),
            'php_examples' => $this->get_php_example(),
            'js_examples' => $this->get_js_example(),
            'files'  => self::$arr_files[ $hname_raw ],
            'type'   => $type,
            'hook'   => $hook_name,
            'has_comment' => (bool)$comment,
            'comment' => $comment,
            'hash_name' => $hname_raw,
            'raw_hook_name' => self::$hooks[ $hname_raw ]['raw_hook_name'],
        
        );
   
    }

    public function get_hooks(){
        return self::$hooks;
    }

    public function get_hook_data( $hook ){
        if( ! isset( self::$hooks[ $hook ] ) || (isset( self::$hooks[ $hook ]['has_comment'] ) && self::$hooks[ $hook ]['has_comment'] == false ) ){ 
            return array(
                'since' => '1.0',
                'desc' => 'No descriptions available',
                'filename' => $this->filename,
            );
        }
        
        self::$hooks[ $hook ]['filename'] = $this->filename;

        return self::$hooks[ $hook ];
    }

    public function get_title(){
        $exp = explode("* ", self::$comment );
        foreach( $exp as $str ){
            if( strpos( $str, "@title" ) > -1 ){
                $title = explode( "@title ", $str );
                return trim($title[1]);
            }
        }
        return;
    }

    public function get_vars(){
        $exp = explode("* ", self::$comment );
        $vars = [];
        $var_imp = '';
        foreach( $exp as $str ){
            if( strpos( $str, "\"var\":" ) > -1 ){
               $var_imp .= $str;
            }
        }
        
        preg_match_all("/{([^}]*)}/", $var_imp, $matches );

        if( isset( $matches[0] ) ){
            foreach( $matches[0] as $vv ){
                    $m = str_replace(['}','{'], "", $vv );
                    if( is_object( json_decode( "{".$m."}" ) ) ){
                        $vars[ ] = json_decode( "{".$m."}" );
                    }
            }
        }


        return $vars;
    }


    public function get_since(){
        $exp = explode("* ", self::$comment );
        foreach( $exp as $str ){
            if( strpos( $str, "[\"Since:" ) > -1 ){
                $since = preg_replace('/[^0-9\.]/', "", $str );
                return $since;
            }
        }
        return;
    }


    public function get_usage(){
        $exp = explode("* ", self::$comment );
        $usage = '';
        $start = false;
        foreach( $exp as $str ){

             if( strpos( $str, "@usage" ) > -1 ){
                $start = true;
            }

            if( $start ){
                $usage .= $str;
            }

            if( $start && ( strpos( $str, "?>" ) > -1 || strpos( $str, "@example" ) > -1 ) ){
                $start = false;
            }
        }

        $usage = str_replace( ["<?php "," ?>","@usage", "@example"], "", $usage );
        return $usage;
    }

    public function get_desc(){
        $exp = explode("* ", self::$comment );
        foreach( $exp as $str ){
            if( strpos( $str, "@description" ) > -1 ){
                $desc = explode( "@description ", $str );
                if( isset( $desc[1] ) ){
                    return $desc[1];
                }
            }
        }

        return;
    }

    public function get_php_example(){
        $exp = explode("* ", self::$comment );
        $php_example = '';
        $start = false;
        foreach( $exp as $str ){

             if( strpos( $str, "@example" ) > -1 ){
                $start = true;
            }

            if( $start ){
                $php_example .= $str;
            }

            if( $start == true && strpos( $str, "?>" ) > -1 ){
                $start = false;
            }
        }

        $php_example = str_replace( ["<?php"," ?>", "@example"], "", $php_example );

        return $php_example;
    }

    public function get_js_example(){
        $exp = explode("* ", self::$comment );
        $php_example = '';
        $start = false;
        foreach( $exp as $str ){

             if( strpos( $str, "<script" ) > -1 ){
                $start = true;
            }

            if( $start ){
                $php_example .= $str;
            }

            if( strpos( $str, "</script>" ) > -1 ){
                $start = false;
            }
        }

        return $php_example;
    }

    public function mdx( $hook_data ){

        $vars_table = '';
        if( ! empty( $hook_data['vars'] ) ){
            $vars_table .= "#### Parameters
            ";
            $vars_table .= '
<table className="table-auto mt-2 border dark:border-gray-500 p-5 text-sm text-left">
<thead>
<tr>
<th  className="px-3">Name</th>
<th  className="px-3">Type</th>
<th  className="px-3">Description</th>
</tr>
</thead>
<tbody>';

            foreach( $hook_data['vars'] as $ii => $obj ){
               $vars_table .= '
               <tr >
               <td className="px-3 py-2">`' . $obj->var . '`</td>
               <td className="px-3 py-2">' . $obj->type . '</td>
               <td className="px-3 py-2 text-sm">' . htmlentities( $obj->desc ) . '</td>
               </tr>';
            }
            $vars_table .= '
</tbody>
</table>';    
        }
    
        $the_files = array();
        if( isset( $hook_data['files'] )  ){
            $arr_files_added = array();
            foreach(  $hook_data['files'] as $kf => $ff ){

                if( in_array( $ff['path'], $arr_files_added ) ) continue;

                $arr_files_added[ ] = $ff['path'];
                $path = str_replace( "ultimatemember", "", $ff['path'] );
                $the_path = str_replace("//","/", $path . '#L' . $ff['line'] );
                
                global $argv;
                $version = $argv[1];
                $github_file_url = "https://github.com/ultimatemember/ultimatemember/tree/{$version}{$the_path}";
                $github_file_url = str_replace( "{$version}//", "{$version}/", $github_file_url );
                   
                $file_source = '<Link href="' . $github_file_url . '">' . $ff['path'] . '</Link>';
                $hook_file_line = '<Link href="' . $github_file_url . '">line ' . $ff['line'] . '</Link>';
                $the_files[ ] = '  - ' . $file_source . ' ' . $hook_file_line;
            }
        }

$since = '1.0';
if( !empty( $hook_data['since'] ) ){
    $since = $hook_data['since'];
}

$code_snippets = '';

if( ! empty( $hook_data['php_examples'] ) && ! empty( $hook_data['js_examples'] ) ){
$code_snippets = '

#### Usage Example

<Tabs items={[\'PHP\', \'Javascript\']}>
  <Tab>
    ```php
    ' . trim( $hook_data['php_examples'] ) . '
    ```
  </Tab>
   <Tab>
    ```js
    ' . trim( $hook_data['js_examples'] ) . '
    ```
  </Tab>
</Tabs>';
}elseif( ! empty( $hook_data['php_examples'] ) && empty( $hook_data['js_examples'] ) ){
$code_snippets = '

#### Usage Example

<Tabs items={[\'PHP\']}>
    <Tab>
    ```php
    ' . trim( $hook_data['php_examples'] ) . '
    ```
    </Tab>
</Tabs>';
}elseif( empty( $hook_data['php_examples'] ) && ! empty( $hook_data['js_examples'] ) ){
$code_snippets = '

### Usage Example

<Tabs items={[\'Javascript\']}>
    <Tab>
    ```php
    ' . trim( $hook_data['js_examples'] ) . '
    ```
    </Tab>
</Tabs>';
}

$output = 'import { Tabs, Tab, Callout } from \'nextra-theme-docs\' 
import Link from \'next/link\'
import UMBreadCrumb from \'../../../../components/UMBreadCrumb\'

<UMBreadCrumb type="'.$hook_data['type'].'"/>

### ' . ucfirst($hook_data['type'] ) . ' Hook    
    
```
' . trim( $hook_data['hook'] ) . '
```

#### Description
    <div class="description">
        ' . $hook_data['desc'] . '
    </div>

'.$vars_table.'

#### Since
<div class="description">
' . $since . '
</div>

#### Source
'. implode("
", $the_files ) .'

'. $code_snippets;

 
    if( ! file_exists( self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ) ){
        mkdir( self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'], 0777, true);
    }
   
    $filename = $this->getSlug( $hook_data['raw_hook_name'] );
    
    if( empty( $filename ) ) return;

    $file = fopen(self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ."/" . $filename .".html", "w") or die("Unable to open file!");
    fwrite($file, $output );
    fclose($file);

    return $filename;

    }


    public function mdx_blank( $hook_data, $raw_hook_name2 = '' ){
        $file_source = '';
        $the_files = array();
        if( isset( $hook_data['files'] ) ){
            $arr_files_added = array();
            foreach(  $hook_data['files'] as $kf => $ff ){
                
                if( in_array( $ff['path'], $arr_files_added ) ) continue;

                $arr_files_added[ ] = $ff['path'];

                $path = str_replace( "ultimatemember", "", $ff['path'] );
                $the_path = str_replace("//","/", $path . '#L' . $ff['line'] );
                
                global $argv;
                $version = $argv[1];
                $github_file_url = "https://github.com/ultimatemember/ultimatemember/tree/{$version}{$the_path}";
                $github_file_url = str_replace( "{$version}//", "{$version}/", $github_file_url );
                   
                $file_source = '<Link href="' . $github_file_url . '">' . $ff['path'] . '</Link>';
                $hook_file_line = '<Link href="' . $github_file_url . '">line ' . $ff['line'] . '</Link>';
                $the_files[ ] = '  - ' .  $file_source . ' ' . $hook_file_line;
            }
        }
$since = '1.0';
if( !empty( $hook_data['since'] ) ){
    $since = $hook_data['since'];
}

$output = 'import { Tabs, Tab, Callout } from \'nextra-theme-docs\' 
import Link from \'next/link\'
import UMBreadCrumb from \'../../../../components/UMBreadCrumb\'

<UMBreadCrumb type="'.$hook_data['type'].'"/>

### ' . ucfirst($hook_data['type'] ) . ' Hook    
    
```
' . trim( $hook_data['hook'] ) . '
```

#### Description
    <div class="description">
     Nothing to display.
    </div>

#### Since
<div class="description">
' . $since  . '
</div>

#### Source
'. implode("
", $the_files ) .'

';


    if( ! file_exists( self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ) ){
        mkdir( self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'], 0777, true);
    }

    $filename = $this->getSlug( $hook_data['raw_hook_name'] );
   
    if( file_exists( self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ."/" . $filename .".html" ) ) return;
   
    if( empty( $filename ) ) return;

    $file = fopen(self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ."/" . $filename .".html", "w") or die("Unable to open file!");
    fwrite($file, $output );
    fclose($file);
    
    
    return $filename;

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
        $url = str_replace('//', '/', $url);

        return $url;
    }

    /**
     * Get the Slug 
     */
    public function getSlug( $title ){
        
        $filename = trim( strtolower( $title ) );
        $filename = str_replace("]}", "__", $filename);
        $filename = str_replace("[\$", "__", $filename);
        $filename = str_replace("{\$", "", $filename);
        $filename = str_replace("\$", "", $filename);
        $filename = str_replace(["[","]"], "_", $filename);
        $filename = str_replace("}", "", $filename);
        $filename = str_replace(" ", "_", $filename);
        $filename = str_replace(">", "", $filename);
        $filename = str_replace("__.", "", $filename);
        $filename = str_replace("___", "__", $filename);
        $filename = rtrim( $filename, "-" );

        $this->filename = $filename;

        return $filename;
    }

} // EndClass

