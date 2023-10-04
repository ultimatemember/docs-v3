---
layout: UMLayout
tags: 
  - umm_stripe_already_subscribed_text
  - filters
  - Modify text that's displayed when a user is already subscribed.
  - hooks
---
# umm\_stripe\_already\_subscribed\_text
Modify text that's displayed when a user is already subscribed.
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'umm_stripe_already_subscribed_text', $subscribed_text )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$subscribed_text</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >string</span>
<div style="margin-left:10px;padding: 10px 5px">Already Subscribed content.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'umm_stripe_already_subscribed_text', 'um_1042023_stripe_already_subscribed_text ', 10, 1 )
function um_1042023_stripe_already_subscribed_text( $subscribed_text ){
  return $subscribed_text;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

