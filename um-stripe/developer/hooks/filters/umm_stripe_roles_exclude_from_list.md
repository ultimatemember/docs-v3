---
layout: UMLayout
title: umm_stripe_roles_exclude_from_list | Hooks
tags: 
  - umm_stripe_roles_exclude_from_list
  - filters
  - hooks
---
Exclude protected roles from the List
``` php
apply_filters( 'umm_stripe_roles_exclude_from_list',  )
```
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'umm_stripe_roles_exclude_from_list', 'um_09252023_stripe_roles_exclude_from_list ', 10, 0 )
function um_09252023_stripe_roles_exclude_from_list(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

