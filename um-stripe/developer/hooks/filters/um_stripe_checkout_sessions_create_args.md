---
layout: UMLayout
tags: 
  - um_stripe_checkout_sessions_create_args
  - filters
  - Filter array before checkout sessions creation
  - hooks
---
# um\_stripe\_checkout\_sessions\_create\_args
Filter array before checkout sessions creation
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'um_stripe_checkout_sessions_create_args', $args, $mode, $umm_subscription_id, $umm_price_id, $user_id, $customer_id )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$args</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >array</span>
<div style="margin-left:10px;padding: 10px 5px">Stripe Checkout Sessions configurations.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$mode</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Subsription Mode.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$umm_subscription_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">Subscription ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$umm_price_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">Stripe Price.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">WP User ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$customer_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">Stripe Customer ID.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_checkout_sessions_create_args', 'um_1092023_stripe_checkout_sessions_create_args ', 10, 6 )
function um_1092023_stripe_checkout_sessions_create_args( $args, $mode, $umm_subscription_id, $umm_price_id, $user_id, $customer_id ){
  return $args;
}
```
<div class='hook-sep'></div>



### Related Snippets

- [ Modify Checkout Sessions configuration](../snippets/b0a3df939511afe54fb2ee1c59efcede)


