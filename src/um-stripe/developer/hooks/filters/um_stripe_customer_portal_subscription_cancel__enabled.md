---
tags: 
  - um_stripe_customer_portal_subscription_cancel__enabled
  - filters
  - Filter to Enable Subscription Cancellation feature in Customer Portal
  - hooks
---
# um\_stripe\_customer\_portal\_subscription\_cancel\_\_enabled
Filter to Enable Subscription Cancellation feature in Customer Portal
<Badge text="Since 1.2.5" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'um_stripe_customer_portal_subscription_cancel__enabled',  )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong></strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >bool</span>
<div style="margin-left:10px;padding: 10px 5px"></div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_stripe_customer_portal_subscription_cancel__enabled', 'um_12202024_stripe_customer_portal_subscription_cancel__enabled', 10, 1 );
function um_12202024_stripe_customer_portal_subscription_cancel__enabled(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

