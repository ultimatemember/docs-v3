---
layout: UMLayout
title: um_stripe_checkout_sessions_create_args | Hooks
tags: 
  - um_stripe_checkout_sessions_create_args
  - filters
  - hooks
---
Filter array before checkout sessions creation
``` php
apply_filters( 'um_stripe_checkout_sessions_create_args',  )
```
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_stripe_checkout_sessions_create_args', 'um_09252023_stripe_checkout_sessions_create_args ', 10, 0 )
function um_09252023_stripe_checkout_sessions_create_args(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

