---
tags: 
  - umm_stripe_status_{$status}
  - actions
  - Assign Role based on the role set in the Stripe Plan settings.
  - hooks
---
# umm\_stripe\_status\_{$status}
Assign Role based on the role set in the Stripe Plan settings.
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_status_{$status}', $user_id, $role )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$role</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'umm_stripe_status_{$status}', 'um_11162023_stripe_status___status_', 10, 2 );
function um_11162023_stripe_status___status_( $user_id, $role ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

