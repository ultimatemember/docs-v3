---
---
# Stripe CLI Integration
### Overview

 This article provides instructions on how to integrate the Stripe CLI to test our Ultimate Member Stripe extension on your local computer. The integration will help ensure that your webhook endpoint is working properly before going live.

### Setup


- <strong>[Install Stripe CLI](https://stripe.com/docs/stripe-cli)</strong> and log in to authenticate your account.
- ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6493fc42885de842a5d8c9e1/file-TuXnARK8wV.png) Check if the pairing code matches the Stripe CLI login command.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6493fd06885de842a5d8c9e3/file-giMVkHREeh.png)
- When the verification is successful, the account ID will appear in the command.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649432b11c43322e9690de73/file-pMzTADIQTF.png)

#### 1. Forward events to a local webhook endpoint

- To send all Stripe events in test mode to your local webhook endpoint, use the `--forward-to` flag. Use the ` --skip-verify` flag to disable HTTPS certificate verification. 
    - <strong>Command Line:</strong> <strong>stripe listen --forward-to "localhost:8000/?umm-stripe-webhook=true"</strong>
    - <strong>Output:</strong>`Ready! Your webhook signing secret is '{{WEBHOOK_SIGNING_SECRET}}' (^C to quit)`
        
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649434c9c5d2b53344e729ae/file-rBgBPcK9Lo.png)
- Copy the Webhook secret and add it in the /wp-config.php file before the "That's all" code comment:
 
```
define( 'UM_STRIPE_DEV_LOCAL', 'whsec_5741b47f3f9faabd935713136e08a47e3f6e7d3b78e501787e9891838d2' );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) { 
    define( 'ABSPATH', __DIR__ . '/' );
}
	
```

 When the aforementioned constant is defined or added to that file, the following message appears in <strong>wp-admin&gt;Ultimate Member&gt;Settings&gt;Extensions&gt;Stripe</strong>:

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649454351c43322e9690deab/file-8qLOCDnCB4.png)

- <strong>Optional:</strong> To forward specific events in a comma-separated list, use the `--events` flag
    
    
    - <strong>Command Line:</strong>   
         `stripe listen --events payment_intent.created,customer.created,payment_intent.succeeded,charge.succeeded,checkout.session.completed,charge.failed --forward-to localhost:8000/?umm-stripe-webhook=true`
- <strong>Optional:</strong> Use the `--load-from-webhooks-api` and `--forward-to` flags if you've already registered your endpoint on Stripe.
    
    
    - <strong>Command Line:</strong>  `stripe listen --load-from-webhooks-api --forward-to localhost:5000`

 With this command, events are sent to your public webhook endpoint on Stripe-registered and will be forwarded to your local webhook endpoint. The path is appended to your local webhook endpoint in the `--forward-to` the path once the path has been loaded, parsed and its registered events have been taken into account. Use the `WEBHOOK_SIGNING_SECRET` from the initial output of the `listen` commands when validating webhook signatures.

 2. Trigger events to test your webhooks integration

- To simulate the event that happens after a client payment is successful for the  [Create a session API](https://stripe.com/docs/api/checkout/sessions/create)  in the  [Prebuilt Checkout page](https://stripe.com/docs/checkout/quickstart) , run the `stripe trigger checkout.session.completed` command.
    - Command Line: `stripe trigger checkout.session.completed`