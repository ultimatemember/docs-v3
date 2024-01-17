---
tags: 
  - um_stripe_webhook_name
  - filters
  - Modify Stripe Webhook name
  - hooks
---
# um\_stripe\_webhook\_name
Modify Stripe Webhook name
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'um_stripe_webhook_name', $webhook_name )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$webhook_name</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Webhook Name for the Stripe Webhook URL.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_stripe_webhook_name', 'um_01172024_stripe_webhook_name', 10, 1 );
function um_01172024_stripe_webhook_name( $webhook_name ){
  return $webhook_name;
}
```
<div class='hook-sep'></div>



### Related Snippets

- [ Change the default webhook name `umm-stripe-webhook`](../snippets/cd9f5f3a765a2ec4ac68b2806f5c3706)


