---
tags: 
  - um_stripe_api_version
  - filters
  - Validates the Stripe API keys when receiving the Webhook Payload This invokes the admin notice when keys are invalid.
  - hooks
---
# um\_stripe\_api\_version
Validates the Stripe API keys when receiving the Webhook Payload This invokes the admin notice when keys are invalid.
``` php:no-line-numbers
apply_filters( 'um_stripe_api_version',  )
```
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_stripe_api_version', 'um_12202024_stripe_api_version', 10, 0 );
function um_12202024_stripe_api_version(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

