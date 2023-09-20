---
layout: UMLayout
title: umm_stripe_billing_configuration | Hooks
tags: 
  - umm_stripe_billing_configuration
  - filters
  - hooks
---
Filter billing configuration before creating the Stripe billing portal.
``` php
apply_filters( 'umm_stripe_billing_configuration', $args )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 20px 0px 10px;'>
<strong>$args</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >array</span>
<div style="margin-left:10px;padding: 10px 5px">Stripe billing configurations.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'umm_stripe_billing_configuration', 'um_09202023_stripe_billing_configuration ', 10, 1 )
function um_09202023_stripe_billing_configuration( $args ){
  return $args;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

