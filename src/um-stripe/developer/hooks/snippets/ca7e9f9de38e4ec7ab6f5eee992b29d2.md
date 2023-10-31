---
title: Send admin email notification
---
# Send admin email notification

This code snippet sends an admin notificaiton when there's a newly created Stripe customer.
``` php
add_action( 'um_stripe_webhook_payload_event_init', 'um_09202023_stripe_webhook_payload_event_init ', 10, 1 )
function um_09202023_stripe_webhook_payload_event_init( $event ){
 
		// Handle the event.
			switch ( $event->type ) {
				/**
				 * Event type
				 */
				case 'customer.created':
               $headers[] = 'From: Me Myself <me@example.net>';
               $headers[] = 'Cc: Ultimate Mebmber<stripe@ultimatemember.com>';

               $to = 'me@yoursitedomain.com';
               $subject = 'New Stripe Customer created from your site ' . site_url();
               $message = 'Hi, there\'s a new customer created!' . '\n';
               $message =. 'Customer\'s Email address: ' . $customer->email;

               wp_mail( $to, $subject, $message, $headers );
            break;
         }
}
```


You can check the Stripe Webhook event types in this [doc article](/article/1607-stripe-setting-up-webhook-and-test-public-keys.html).