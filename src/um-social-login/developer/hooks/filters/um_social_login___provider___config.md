---
tags: 
  - um_social_login_{$provider}__config
  - filters
  - Example usage: add_filter("um_social_login_{$provider}__config", function( $config ){ $config[          'scope' => ['r_liteprofile', .
  - hooks
---
# um\_social\_login\_{$provider}\_\_config
Example usage: add_filter("um_social_login_{$provider}__config", function( $config ){ $config[          'scope' => ['r_liteprofile', .
``` php:no-line-numbers
apply_filters( 'um_social_login_{$provider}__config',  )
```
<div class='hook-sep'></div>

### Description

.. ],          'enabled' => true,          'keys' => [                   'key' => '...',                   'secret' => '...',          ]      ],   return $config; });
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_social_login_{$provider}__config', 'um_02202024_social_login___provider___config', 10, 0 );
function um_02202024_social_login___provider___config(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

