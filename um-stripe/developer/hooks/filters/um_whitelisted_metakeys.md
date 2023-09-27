---
layout: UMLayout
tags: 
  - um_whitelisted_metakeys
  - filters
  - Filters whitelisted usermeta keys that can be stored inside DB after UM Form submission.
  - hooks
---
# um\_whitelisted\_metakeys
Filters whitelisted usermeta keys that can be stored inside DB after UM Form submission.
<Badge text="Since 2.6.7" vertical="middle" />
``` php
apply_filters( 'um_whitelisted_metakeys', $whitelisted_metakeys, $form_data )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$whitelisted_metakeys</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >\um_ext\um_stripe\common\{array}</span>
<div style="margin-left:10px;padding: 10px 5px">Whitelisted usermeta keys.</div>
</div>
<div style='padding: 10px 0px 10px;'>
<strong>$form_data</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >\um_ext\um_stripe\common\{array}</span>
<div style="margin-left:10px;padding: 10px 5px">UM form data.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_whitelisted_metakeys', 'um_09272023_whitelisted_metakeys ', 10, 2 )
function um_09272023_whitelisted_metakeys( $whitelisted_metakeys, $form_data ){
  return $whitelisted_metakeys;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

