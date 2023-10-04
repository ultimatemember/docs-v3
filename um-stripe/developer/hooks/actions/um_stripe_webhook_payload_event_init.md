---
layout: UMLayout
tags: 
  - um_stripe_webhook_payload_event_init
  - actions
  - Catch Stripe's Webhook Payload Events
  - hooks
---
# um\_stripe\_webhook\_payload\_event\_init
Catch Stripe's Webhook Payload Events
<Badge text="Since 1.0.0" vertical="middle" />
``` php
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

``` php
add_action( 'um_stripe_webhook_payload_event_init', 'um_1042023_stripe_webhook_payload_event_init ', 10, 1 )
function um_1042023_stripe_webhook_payload_event_init( $event ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

- [ Attach function to Stripe webhook payload](../snippets/4099d848f325bd33ca9257e24669926f)
- [ Send email notification when Stripe sends a webhook payload](../snippets/f5a3f57fd0295a79763683f875b9320f)


