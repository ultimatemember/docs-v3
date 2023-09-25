---
layout: UMLayout
title: umm_stripe_predefined_pages_restricted | Hooks
tags: 
  - umm_stripe_predefined_pages_restricted
  - filters
  - hooks
---
Restrict predefined pages.
``` php
apply_filters( 'umm_stripe_predefined_pages_restricted', $is_restricted_page )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 20px 0px 10px;'>
<strong>$is_restricted_page</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >bool</span>
<div style="margin-left:10px;padding: 10px 5px">Whether the page is restricted</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'umm_stripe_predefined_pages_restricted', 'um_09252023_stripe_predefined_pages_restricted ', 10, 1 )
function um_09252023_stripe_predefined_pages_restricted( $is_restricted_page ){
  return $is_restricted_page;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

