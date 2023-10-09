---
layout: UMLayout
tags: 
  - umm_stripe_session_completed
  - actions
  - Triggers when the checkout session is completed.
  - hooks
---
# umm\_stripe\_session\_completed
Triggers when the checkout session is completed.
``` php
do_action( 'umm_stripe_session_completed', $checkout_session, $payment_mode )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$checkout_session</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >object</span>
<div style="margin-left:10px;padding: 10px 5px">Checkout Session Object</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$payment_mode</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Payment Mode.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_action( 'umm_stripe_session_completed', 'um_1092023_stripe_session_completed ', 10, 2 )
function um_1092023_stripe_session_completed( $checkout_session, $payment_mode ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

