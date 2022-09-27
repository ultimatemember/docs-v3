<?php include_once "get-hooks.php";

$test = new UM_Hooks_Comment( 'ultimatemember/includes/core/class-access.php', 'filter', array(), true );
//var_dump( $test->get_hooks() );