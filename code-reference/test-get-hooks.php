<?php 

include_once "get-hooks.php";

define("UM_DOC_GENERATOR_DEBUG", true );
include_once "generate-hook-docs.php";

$test = new UM_Hooks_Comment( 'ultimatemember/templates/profile/comments-single.php', 'filter', array(), false, false, 'um_user_profile_comment_title' );

// $files['hooks'][] = "ultimatemember/templates/profile/comments-single.php";
// $test = new HookDocsGenerator( );
// $rs = $test::getHooks( $files );

// var_dump( $rs );
// $test::getDelimitedListOutputActionHooks( $rs, $files );

//var_dump(  $test->get_hook_data('f9d300e8126eb07258420ec2fe6874a9')  );