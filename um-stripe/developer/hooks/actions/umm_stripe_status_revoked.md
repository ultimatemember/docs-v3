---
layout: UMLayout
tags: 
  - umm_stripe_status_revoked
  - actions
  - Fires once a subscription & account status has been revoked from a WP account.
  - hooks
---
# umm\_stripe\_status\_revoked
Fires once a subscription & account status has been revoked from a WP account.
<Badge text="Since 1.0.0" vertical="middle" />
``` php
do_action( 'umm_stripe_status_revoked', $old_user_id, $role_inactive )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$old_user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">The WordPress User ID of the previous Stripe Customer account owner</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$role_inactive</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Role slug of the Canceled or Refunded event.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_action( 'umm_stripe_status_revoked', 'um_1042023_stripe_status_revoked ', 10, 2 )
function um_1042023_stripe_status_revoked( $old_user_id, $role_inactive ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

