---
tags: 
  - umm_stripe_status_changed
  - actions
  - Triggers when the status has changed
  - hooks
---
# umm\_stripe\_status\_changed
Triggers when the status has changed
<Badge text="Since 1.0.3" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_status_changed', $status, $um_user_id, $role_cancelled )
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
<strong>$role_cancelled</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'umm_stripe_status_changed', 'um_10312023_stripe_status_changed ', 10, 3 )
function um_10312023_stripe_status_changed( $status, $um_user_id, $role_cancelled ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found
