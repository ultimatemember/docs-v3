---
tags: 
  - umm_stripe_status_pause
  - actions
  - Triggers when the subscriptions has been pause
  - hooks
---
# umm\_stripe\_status\_pause
Triggers when the subscriptions has been pause
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_status_pause', $um_user_id, $role_pause )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$um_user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$role_pause</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'umm_stripe_status_pause', 'um_1172023_stripe_status_pause', 10, 2 );
function um_1172023_stripe_status_pause( $um_user_id, $role_pause ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

