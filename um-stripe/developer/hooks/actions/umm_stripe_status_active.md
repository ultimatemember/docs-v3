---
layout: UMLayout
title: umm_stripe_status_active | Hooks
tags: 
  - umm_stripe_status_active
  - actions
  - hooks
---
Triggers when the charge has active.
``` php
do_action( 'umm_stripe_status_active', $um_user_id, $role_active )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 20px 0px 10px;'>
<strong>$um_user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 20px 0px 10px;'>
<strong>$role_active</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">the user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_action( 'umm_stripe_status_active', 'um_09202023_stripe_status_active ', 10, 2 )
function um_09202023_stripe_status_active( $um_user_id, $role_active ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found
