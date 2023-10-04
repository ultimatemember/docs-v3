---
layout: UMLayout
tags: 
  - um_stripe_webhook_name
  - filters
  - Modify Stripe Webhook name
  - hooks
---
# um\_stripe\_webhook\_name
Modify Stripe Webhook name
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'um_stripe_webhook_name',  )
```
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_webhook_name', 'um_1042023_stripe_webhook_name ', 10, 0 )
function um_1042023_stripe_webhook_name(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

