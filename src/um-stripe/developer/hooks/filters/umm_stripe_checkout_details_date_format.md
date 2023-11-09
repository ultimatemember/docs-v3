---
tags: 
  - umm_stripe_checkout_details_date_format
  - filters
  - Change date format in Checkout details
  - hooks
---
# umm\_stripe\_checkout\_details\_date\_format
Change date format in Checkout details
<Badge text="Since 1.0.3" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'umm_stripe_checkout_details_date_format', $date_format )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$date_format</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Default: F d, Y</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'umm_stripe_checkout_details_date_format', 'um_1192023_stripe_checkout_details_date_format', 10, 1 );
function um_1192023_stripe_checkout_details_date_format( $date_format ){
  return $date_format;
}
```
<div class='hook-sep'></div>



### Related Snippets

- [ Change Date Format in Checkout Details page.](../snippets/c4d6f7b94d60655478ea8ee05f6d2be3)


