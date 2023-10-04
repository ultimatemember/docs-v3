---
layout: UMLayout
tags: 
  - um_stripe_enable_unique_billing_email
  - filters
  - Allow unique billing email
  - hooks
---
# um\_stripe\_enable\_unique\_billing\_email
Allow unique billing email
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'um_stripe_enable_unique_billing_email',  )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong></strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >boolean</span>
<div style="margin-left:10px;padding: 10px 5px"></div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_enable_unique_billing_email', 'um_1042023_stripe_enable_unique_billing_email ', 10, 1 )
function um_1042023_stripe_enable_unique_billing_email(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

