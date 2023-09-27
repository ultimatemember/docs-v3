---
layout: UMLayout
tags: 
  - umm_stripe_roles_exclude_from_list
  - filters
  - Exclude protected roles from the List
  - hooks
---
# umm\_stripe\_roles\_exclude\_from\_list
Exclude protected roles from the List
<Badge text="Since 1.0.0" vertical="middle" />
``` php
apply_filters( 'umm_stripe_roles_exclude_from_list',  )
```
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'umm_stripe_roles_exclude_from_list', 'um_09272023_stripe_roles_exclude_from_list ', 10, 0 )
function um_09272023_stripe_roles_exclude_from_list(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

