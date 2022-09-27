<?php 

class UM_Hooks_Comment{

    protected static $comment = '';

    protected static $hooks = [];

    protected static $arr_files  = [];

    /**
     * Build Path
     */
    protected const BUILD_HOOKS_TEMPLATE_PATH = 'build/hooks/';

    function __construct( $file, $token_type = null, $files = [], $debug = false ){

        if( ! file_exists( $file ) ) echo "file not found"; 

        $tokens             = token_get_all(file_get_contents( $file ));
        $count              = count( $tokens );
        $functions          = array();
        $ignore_functions   = array();
        $token_type         = '';
        $found_hooks        = array();
        $total_actions      = 0;
        $total_filters      = 0;
      

        foreach ($tokens as $index => $token) {

            if( isset( $token[1] ) ){
                if ('do_action' === $token[1]) {
                    $next = 0;
                    $hooker = [];
                
                    $chain = true;
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
                                $hname = implode("", $hooker );
                                $hname = str_replace(['(',')',';'], '', $hname );
                                $hname = explode( ",", $hname )[0];
                                $hname = str_replace(['"','\''], '', $hname );
                                $hname = trim( $hname );
                              
                                self::$hooks[ $hname ] = array();
                                self::$hooks[ $hname ]['hook'] = "do_action" . implode("", $hooker );
                                self::$hooks[ $hname ]['type'] = 'action';
                                self::$arr_files[ $hname ][ $file . '.' . $line ] = array( 'line' => $line, 'path' => $file, 'url' => self::getFileURL( [ 'line' => $line, 'path' => $file ] ) );
                                $chain = false;
                            }
                        }
                    }
                    $total_actions++;

                    // Get Comment Doc
                    $doloop = true;
                    $prev = 0;
                    while( $doloop ){
                        $prev++;
                        if( isset( $tokens[ $index - $prev ] ) ){
                            $h = $tokens[ $index - $prev ];
                            
                            if( is_array( $h ) ){
                                $h = $h[1];
                            }

                            if( strpos( $h, "UM hook" ) > -1 ){
                                $doloop = false;
                                $current_line = $index - $prev;
                                preg_match("/\* @title.*\n/is", $h, $matches);
                                self::$hooks[ $hname ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                            }

                            if( $prev >=20 ) $doloop = false;
                            

                        }
                    } // while loop
                
                } elseif ('apply_filters' === $token[1]) {
                    $next_filter = 0;
                    $hooker = [];
                    $chain = true;
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
                                $hname = implode("", $hooker );
                                $hname = str_replace(['(',')',';'], '', $hname );
                                $hname = explode( ",", $hname )[0];
                                $hname = str_replace(['"','\''], '', $hname );
                                $hname = trim( $hname );
                               
                                self::$hooks[ $hname ] = array();
                                self::$hooks[ $hname ]['hook'] = "apply_filters" . implode("", $hooker );
                                self::$hooks[ $hname ]['type'] = 'filter';
                                self::$arr_files[ $hname ][ $file . '.' . $line ] = array( 'line' => $line, 'path' => $file, 'url' => self::getFileURL( [ 'line' => $line, 'path' => $file ] ) );
                                $chain = false;
                               

                            }

                            
                        }
                    } // while
                    $total_filters++;

                    // Get Comment Doc
                    $doloop = true;
                    $prev = 0;
                    while( $doloop ){
                        $prev++;
                        if( isset( $tokens[ $index - $prev ] ) ){
                            $h = $tokens[ $index - $prev ];
                            
                            if( is_array( $h ) ){
                                $h = $h[1];
                            }

                            if( strpos( $h, "UM hook" ) > -1 ){
                                $doloop = false;
                                $current_line = $index - $prev;
                                preg_match("/\* @title.*\n/is", $h, $matches);
                               
                                self::$hooks[ $hname ]['comment'] = preg_replace('/\t+/', '', $matches[0]);
                            }

                            if( $prev >=20 ) $doloop = false;
                            

                        }
                    } // while loop
                 
                }//
            }
        }

       
       
        foreach( self::$hooks as $hook => $h_data ){


                $type = 'unknown';
                if( isset( self::$hooks[ $hook ]['type'] ) ){
                    $type = self::$hooks[ $hook ]['type'];
                } 

                $hook_name = 'unknown';
                if( isset( self::$hooks[ $hook ]['hook'] )  ){
                    $hook_name = self::$hooks[ $hook ]['hook'];
                }

                $comment = '';
                if( isset( self::$hooks[ $hook ]['comment'] )  ){
                    $comment = self::$hooks[ $hook ]['comment'];
                    self::$comment = $comment;
                }

                $line = '';
                if( isset( self::$hooks[ $hook ]['line'] )  ){
                    $line = self::$hooks[ $hook ]['line'];
                }

                self::$hooks[ $hook ] = array(
                    'title' => $hook,
                    'vars'  => $this->get_vars(),
                    'since' => $this->get_since(),
                    'usage' => $this->get_usage(),
                    'desc'  => $this->get_desc(),
                    'php_examples' => $this->get_php_example(),
                    'js_examples' => $this->get_js_example(),
                    'files'  => self::$arr_files[ $hook ],
                    'type'   => $type,
                    'hook'   => $hook_name,
                    'has_comment' => (bool)$comment,
                    'comment' => $comment,
                
                );
              
            if( $debug === false ){
                if( self::$hooks[ $hook ]['has_comment'] == true ){
                    $this->mdx( self::$hooks[ $hook ] );
                }else{
                   $this->mdx_blank( self::$hooks[ $hook ] );
                }
            }
        }
        
       

        return self::$hooks;
        

    }

    public function get_hooks(){
        return self::$hooks;
    }

    public function get_hook_data( $hook ){

        return '';//self::$hooks[ $hook ];
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
        if( isset( $hook_data['files'] ) ){
            foreach(  $hook_data['files'] as $kf => $ff ){
                $file_source = '<Link href="' . $ff['url'] . '">' . $ff['path'] . '</Link>';
                $hook_file_line = '<Link href="' . $ff['url'] . '">line ' . $ff['line'] . '</Link>';
                $the_files[ ] = '  - '.$file_source .' '. $hook_file_line;
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
    $filename = trim( strtolower( $hook_data['title'] ) );
    $filename = str_replace("{\$", "-var-", $filename);
    $filename = str_replace("\$", "-var-", $filename);
    $filename = str_replace(["[","]"], "-", $filename);
    $filename = str_replace("}", "-", $filename);
    $filename = str_replace(" ", "-", $filename);
    $filename = str_replace(">", "", $filename);
    $filename = rtrim( $filename, "-" );
        
    $file = fopen(self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ."/" . $filename .".html", "w") or die("Unable to open file!");
    fwrite($file, $output );
    fclose($file);

    }


    public function mdx_blank( $hook_data ){
        $file_source = '';
        $the_files =   array();
        if( isset( $hook_data['files'] ) ){
            foreach(  $hook_data['files'] as $kf => $ff ){
                $file_source = '<Link href="' . $ff['url'] . '">' . $ff['path'] . '</Link>';
                $hook_file_line = '<Link href="' . $ff['url'] . '">line ' . $ff['line'] . '</Link>';
                $the_files[ ] = '  - '.$file_source .' '. $hook_file_line;
            }
        }
$since = '1.0';
if( !empty( $hook_data['since'] ) ){
    $since = $hook_data['since'];
}

$output = 'import { Tabs, Tab, Callout } from \'nextra-theme-docs\' 
import Link from \'next/link\'

### ' . ucfirst($hook_data['type'] ) . ' Hook    
    
```
' . trim( $hook_data['hook'] ) . '
```

#### Description
    <div class="description">
     Not available.
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
    $filename = trim( strtolower( $hook_data['title'] ) );
    $filename = str_replace("{\$", "-var-", $filename);
    $filename = str_replace("\$", "-var-", $filename);
    $filename = str_replace(["[","]"], "-", $filename);
    $filename = str_replace("}", "-", $filename);
    $filename = str_replace(" ", "-", $filename);
    $filename = str_replace(">", "", $filename);
    $filename = rtrim( $filename, "-" );
        
    $file = fopen(self::BUILD_HOOKS_TEMPLATE_PATH . $hook_data['type'] ."/" . $filename .".html", "w") or die("Unable to open file!");
    fwrite($file, $output );
    fclose($file);

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

        return $url;
    }

} // EndClass

