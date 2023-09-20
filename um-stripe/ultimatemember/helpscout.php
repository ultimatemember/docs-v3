<?php 
$apikey =  '7844e7373f20e1c533b6a322677f4685e94c7a97';
$apisecret = 'X';

// $data = array(
//     'query' => 'Stripe',
// );
// $docs = um_curl( $apikey, $apisecret, "https://docsapi.helpscout.net/v1/categories/60e68b1905ff892e6bc2ede4/articles", $data );

$doc_article = um_curl( $apikey, $apisecret, "https://docsapi.helpscout.net/v1/articles/60e68b2761c60c534bd6d61f", array( 'draft' => true ) );
//$doc_article = json_decode( $doc_article );
var_dump( $doc_article );


function um_curl( $username, $password, $host, $payload ) {

    $payload = json_encode( $payload );
    $ch = curl_init($host);
    $headers = array(
        'Content-Type:application/json',
        'Authorization: Basic '. base64_encode( $username . ":" .$password ) // <---
    );
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, true );
    curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
    if( ! empty( $payload ) ) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload );
    }
     curl_setopt( $ch,  CURLOPT_RETURNTRANSFER, TRUE );   // return web page
   
    $return = curl_exec($ch);
    curl_close($ch);

    return $return;
}
/*
$docs = json_decode( $docs );
foreach( $docs->articles->items as $article ) {
    $myfile = fopen( 'docs/articles/' . $article->slug . '.md', "w") or die("Unable to create file!");
    $article->name  = str_replace( 'Stripe - ', '', $article->name  );
    $article->name  = str_replace( 'Stripe ', '', $article->name  );
    $contents = '# '. $article->name ."\n";
    $doc_article = um_curl( $apikey, $apisecret, "https://docsapi.helpscout.net/v1/articles/" . $article->id, array( 'draft' => false ) );
    $doc_article = json_decode( $doc_article );
    var_dump( $doc_article, "https://docsapi.helpscout.net/v1/articles/" . $article->id );
   // $contents .= $article->article->text."\n";
    fwrite($myfile, $contents);
    fclose($myfile);
} 
*/