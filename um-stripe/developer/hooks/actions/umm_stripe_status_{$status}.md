---
layout: UMLayout
tags: 
  - umm_stripe_status_{$status}
  - actions
  - Assign Role based on the role set in the Stripe Plan settings.
  - hooks
---
# umm\_stripe\_status\_{$status}
Assign Role based on the role set in the Stripe Plan settings.
``` php
do_action( 'umm_stripe_status_{$status}', $user_id, $rolethe )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$user_id</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >integer</span>
<div style="margin-left:10px;padding: 10px 5px">the user ID.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$rolethe</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">user Role.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_action( 'umm_stripe_status_{$status}', 'um_09272023_stripe_status_{$status} ', 10, 2 )
function um_09272023_stripe_status_{$status}( $user_id, $rolethe ){
 // do something
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

