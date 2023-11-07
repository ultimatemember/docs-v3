---
tags: 
  - umm_stripe_predefined_pages_restricted
  - filters
  - Restrict predefined pages.
  - hooks
---
# umm\_stripe\_predefined\_pages\_restricted
Restrict predefined pages.
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'umm_stripe_predefined_pages_restricted', $is_restricted_page )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$is_restricted_page</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >bool</span>
<div style="margin-left:10px;padding: 10px 5px">Whether the page is restricted</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'umm_stripe_predefined_pages_restricted', 'um_1172023_stripe_predefined_pages_restricted ', 10, 1 )
function um_1172023_stripe_predefined_pages_restricted( $is_restricted_page ){
  return $is_restricted_page;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

