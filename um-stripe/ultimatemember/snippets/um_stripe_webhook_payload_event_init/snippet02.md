---
layout: UMLayout
title: Send email notification when Stripe sends a webhook payload
---
# Send email notification when Stripe sends a webhook payload
``` php
add_action( 'um_stripe_webhook_payload_event_init', 'um_09202023_stripe_webhook_payload_event_init ', 10, 1 )
function um_09202023_stripe_webhook_payload_event_init( $event ){
   $event = 'test';
}
```