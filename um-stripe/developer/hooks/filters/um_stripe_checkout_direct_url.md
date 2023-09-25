---
layout: UMLayout
title: um_stripe_checkout_direct_url | Hooks
tags: 
  - um_stripe_checkout_direct_url
  - filters
  - hooks
---
Modify Checkout Direct URL
``` php
apply_filters( 'um_stripe_checkout_direct_url', $site_url )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 20px 0px 10px;'>
<strong>$site_url</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">The current site's URL.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_checkout_direct_url', 'um_09252023_stripe_checkout_direct_url ', 10, 1 )
function um_09252023_stripe_checkout_direct_url( $site_url ){
  return $site_url;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

