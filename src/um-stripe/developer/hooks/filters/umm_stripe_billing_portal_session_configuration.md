---
tags: 
  - umm_stripe_billing_portal_session_configuration
  - filters
  - Filter billing portal session configuration before creating the Stripe billing portal.
  - hooks
---
# umm\_stripe\_billing\_portal\_session\_configuration
Filter billing portal session configuration before creating the Stripe billing portal.
<Badge text="Since 1.0.8" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'umm_stripe_billing_portal_session_configuration', $args )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$args</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >array</span>
<div style="margin-left:10px;padding: 10px 5px">Stripe billing portal session's configurations.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'umm_stripe_billing_portal_session_configuration', 'um_0492024_stripe_billing_portal_session_configuration', 10, 1 );
function um_0492024_stripe_billing_portal_session_configuration( $args ){
  return $args;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

