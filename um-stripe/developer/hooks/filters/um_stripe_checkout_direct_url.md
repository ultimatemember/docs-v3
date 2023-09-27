---
layout: UMLayout
tags: 
  - um_stripe_checkout_direct_url
  - filters
  - Modify Checkout Direct URL
  - hooks
---
# um\_stripe\_checkout\_direct\_url
Modify Checkout Direct URL
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'um_stripe_checkout_direct_url', $site_url )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$site_url</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">The current site's URL.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_checkout_direct_url', 'um_09272023_stripe_checkout_direct_url ', 10, 1 )
function um_09272023_stripe_checkout_direct_url( $site_url ){
  return $site_url;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

