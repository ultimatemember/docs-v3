---
tags: 
  - um_stripe_webhook_payload_event_init
  - actions
  - Catch Stripe's Webhook Payload Events
  - hooks
---
# um\_stripe\_webhook\_payload\_event\_init
Catch Stripe's Webhook Payload Events
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
do_action( 'um_stripe_webhook_payload_event_init', $event )
```
<div class='hook-sep'></div>

### Description

When Stripe sends a Webhook payload to the site, this hook is fired.
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$event</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >object</span>
<div style="margin-left:10px;padding: 10px 5px">Payload objects</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'um_stripe_webhook_payload_event_init', 'um_0362024_stripe_webhook_payload_event_init', 10, 1 );
function um_0362024_stripe_webhook_payload_event_init( $event ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

- [ Attach a function to Stripe webhook payload](../snippets/6431e93969ce8c812de31ce35a49f39a)
- [ Send admin email notification](../snippets/ca7e9f9de38e4ec7ab6f5eee992b29d2)


