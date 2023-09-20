<?php

function um_generate_hooks_files( $type ) {
    $dir = dirname( __FILE__ );
    $string = file_get_contents( $dir . "/hooks/{$type}.json");
    if ($string === false) {
        // deal with error...
    }

    $json_a = json_decode($string, true);
    if ($json_a === null) {
        // deal with error...
    }

    $hooks = $json_a['hooks'];

    foreach( $hooks as $i => $hook ) {
        $myfile = fopen( 'docs/developer/hooks/' . $type . '/' .$hook['name']. ".md", "w") or die("Unable to create file!");
        $txt = '---' . "\n";
        $txt .= 'layout: UMLayout'. "\n";
        $txt .= 'title: '  . $hook['name'] . ' | Hooks' . "\n";
        $txt .= 'tags: ' . "\n";
        $txt .= '  - ' . $hook['name'] . "\n";
        $txt .= '  - ' . $type . "\n";
        $txt .= '  - hooks' . "\n";
        $txt .= '---' . "\n";
        $tags = $hook['doc']['tags'];
        $params = $hook['doc']['tags'];
        $output_tags = array();
        foreach( $tags as $t ) {
            if( isset( $t['variable'] ) ) {
                $output_tags[] = $t['variable'];
            }
        }
        $txt .= $hook['doc']['description']. "\n";
           
        if( 'filters' === $type ) {
           $txt .= "``` php". "\n";
            $txt .= "apply_filters( '" . $hook['name'] . "', " . implode( ', ', $output_tags ) . " )". "\n";
           $txt .= "```". "\n";
        } else {
            $txt .= "``` php". "\n";
            $txt .= "do_action( '" . $hook['name'] . "', " . implode( ', ', $output_tags ) . " )". "\n";
            $txt .= "```". "\n";
        }
        $txt .= "<div class='hook-sep'></div>". "\n\n";
        if( ! empty( $hook['doc']['long_description'] ) ) {
            $txt .= '### Description'. "\n\n";
            $txt .= $hook['doc']['long_description']. "\n";
            $txt .= "<div class='hook-sep'></div>". "\n\n";
        }
        $txt .= '### Parameters'. "\n\n";
        $params = um_get_tag_params( $hook );
        foreach( $params as $p ) {
            $txt .="<div style='padding: 20px 0px 10px;'>". "\n";
            $txt .= '<strong>'.$p['variable']. "</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >" . implode( ",", $p['types'] ) ."</span>". "\n";
            $txt .= '<div style="margin-left:10px;padding: 10px 5px">' . $p['content'] . "</div>". "\n";
            $txt .="</div>". "\n";
        }
        $txt .= "<div class='hook-sep'></div>". "\n\n";
        $example =  um_get_sample_usage( $hook, $type );
        $txt .=  "\n\n". "### Sample Usage". "\n\n";
        $txt .= "``` php" . "\n";
        $txt .= $example. "\n";
        $txt .= "```". "\n";

        $txt .= "<div class='hook-sep'></div>". "\n\n";
        $txt .=  "\n\n". "### Related Snippets". "\n\n";
        $txt .= um_get_snippets( $hook['name'] ). "\n\n";
        
        fwrite($myfile, $txt);
        fclose($myfile);
    } 

}

function um_generate_hooks_page( $type ) {
    $dir = dirname( __FILE__ );
    $string = file_get_contents( $dir . "/hooks/{$type}.json");
    if ($string === false) {
        // deal with error...
    }

    $json_a = json_decode($string, true);
    if ($json_a === null) {
        // deal with error...
    }

    $hooks = $json_a['hooks'];
    $arr_hooks = array();
    $output_hooks = '';
    foreach( $hooks as $i => $hook ) {
        if( ! in_array( $hook['name'], $arr_hooks, true ) ) {
            $arr_hooks[ ] = $hook['name'];
            $since =  um_get_tag_line_content( 'since', $hook );
            if( ! empty(  $since ) ) {
                $since = '<Badge text="Since '.$since.'" vertical="middle" />'. "\n";
            }
            $output_hooks .= '## ['.$hook['name'].'](./' . $type . '/' . $hook['name'].')' . $since . "\n";
            
            $output_hooks .= $hook['doc']['description'] . "\n";
           
        }
    } 


    if( file_exists( 'docs/developer/hooks/'. $type . ".md" ) ) {
        unlink( 'docs/developer/hooks/'. $type . ".md" );
    }

    $myfile = fopen( 'docs/developer/hooks/'. $type . ".md", "w") or die("Unable to create file!");
    $txt = '---'  . "\n";
    $txt .= 'layout: UMLayout'. "\n";
    $txt .= 'sidebarDepth: 0' . "\n";
    $txt .= '---'  . "\n";
    $txt .= "# " . ucfirst( $type )  . "\n";
    $txt .= $output_hooks;
    fwrite($myfile, $txt);
    fclose($myfile);

}


um_generate_hooks_files( 'actions' );
um_generate_hooks_files( 'filters' );
um_generate_hooks_page( 'actions' );
um_generate_hooks_page( 'filters' );


function um_get_tag_line_content( $tag_name, $hook ) {

    $tags = ! empty( $hook['doc']['tags'] ) ? $hook['doc']['tags'] : array();
    foreach( $tags as $t ) {
       
        if( $t['name'] === $tag_name ) {
            return $t['content'];
        }
    }

    return  false;
}

function um_get_tag_params( $hook ) {
    $tags = ! empty( $hook['doc']['tags'] ) ? $hook['doc']['tags'] : array();
    $arr_params = array();
    foreach( $tags as $t ) {
       
        if( $t['name'] === 'param' ) {
            $arr_params[] = $t;
        }
    }

    return $arr_params;
}

function um_get_sample_usage( $hook, $type ) {
    $tags = ! empty( $hook['doc']['tags'] ) ? $hook['doc']['tags'] : array();
    $arr_params = array();
    $arr_vars = array();
    foreach( $tags as $t ) {
       
        if( $t['name'] === 'param' ) {
            $arr_params[] = $t;
            $arr_vars[] = $t['variable'];
        }
    }

    $output = '';
    $func_name = str_replace( 'um_', 'um_' . date("mjY") . '_', $hook['name'] );
    $func_name = str_replace( 'umm_', 'um_' . date("mjY") . '_', $func_name );
     
    if( 'actions' === $type ) {
        $output .= 'add_action( \''. $hook['name'] .'\', \'' . $func_name .' \', 10, ' . count( $arr_params ) .' )' . "\n";
        $output .= 'function ' . $func_name .'( ' . implode( ', ', $arr_vars ) .' ){'. "\n";
        $output .= ' // do something' . "\n";
        $output .= '}';
    }

    if( 'filters' === $type ) {
        $output .= 'add_filter( \''. $hook['name'] .'\', \'' . $func_name .' \', 10, ' . count( $arr_params ) .' )' . "\n";
        $output .= 'function ' . $func_name .'( ' . implode( ', ', $arr_vars ) .' ){'. "\n";
        $output .= '  return ' .  current( $arr_vars ) . ";\n";
        $output .= '}';
    }
    return $output;
}

function um_get_snippets( $hook_name ) {

    if( file_exists( 'docs/ultimatemember/snippets/' . $hook_name ) ) {

        $snippets = glob("docs/ultimatemember/snippets/" . $hook_name . '/*.*');
        $links = '';
        foreach( $snippets as $i => $s ) {
            $contents = file_get_contents( $s );
            $hashed_filename = md5( $s );
            preg_match("/(?<=title:).*/", $contents, $matches);
            $links .= '- ['. $matches[0] .'](/developer/hooks/snippets/'.md5( $s ).')'. "\n";
            $myfile = fopen( 'docs/developer/hooks/snippets/' . $hashed_filename .'.md', "w") or die("Unable to create file!");
            fwrite($myfile, $contents);
            fclose($myfile);
        } 
        return  $links;
    }

    return 'Nothing was found';
}