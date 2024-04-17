---
tags: 
  - umm_stripe_user_plan_changed
  - actions
  - Triggers when the status has changed via Plan Switch
  - hooks
---
# umm\_stripe\_user\_plan\_changed
Triggers when the status has changed via Plan Switch
<Badge text="Since 1.0.8" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_user_plan_changed', $status, $um_user_id, $role_active, $has_switched_plan_id, $previous_plan_id )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$status</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Status name.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$um_user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$role_active</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$has_switched_plan_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the new plan ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$previous_plan_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the previous plan ID.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'umm_stripe_user_plan_changed', 'um_04172024_stripe_user_plan_changed', 10, 5 );
function um_04172024_stripe_user_plan_changed( $status, $um_user_id, $role_active, $has_switched_plan_id, $previous_plan_id ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

