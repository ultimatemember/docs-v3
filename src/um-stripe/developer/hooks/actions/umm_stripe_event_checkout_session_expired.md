---
tags: 
  - umm_stripe_event_checkout_session_expired
  - actions
  - Triggers when the checkout session has expired.
  - hooks
---
# umm\_stripe\_event\_checkout\_session\_expired
Triggers when the checkout session has expired.
<Badge text="Since 1.4.1" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_event_checkout_session_expired', $checkout_session, $payment_mode )
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

``` php:no-line-numbers
add_action( 'umm_stripe_event_checkout_session_expired', 'um_12202024_stripe_event_checkout_session_expired', 10, 2 );
function um_12202024_stripe_event_checkout_session_expired( $checkout_session, $payment_mode ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

