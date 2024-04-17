---
tags: 
  - umm_stripe_status_incomplete_expired
  - actions
  - Triggers when the charge has expired
  - hooks
---
# umm\_stripe\_status\_incomplete\_expired
Triggers when the charge has expired
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
do_action( 'umm_stripe_status_incomplete_expired', $um_user_id, $role_expired )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$um_user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$role_expired</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_action( 'umm_stripe_status_incomplete_expired', 'um_04172024_stripe_status_incomplete_expired', 10, 2 );
function um_04172024_stripe_status_incomplete_expired( $um_user_id, $role_expired ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

