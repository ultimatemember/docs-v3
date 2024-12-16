---
tags: 
  - um_stripe_filter__is_subscribed_query
  - filters
  - Filter Subcriptions query
  - hooks
---
# um\_stripe\_filter\_\_is\_subscribed\_query
Filter Subcriptions query
<Badge text="Since 1.4.3" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'um_stripe_filter__is_subscribed_query', $args )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$args</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >array</span>
<div style="margin-left:10px;padding: 10px 5px">Query Arguements.</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_stripe_filter__is_subscribed_query', 'um_12162024_stripe_filter__is_subscribed_query', 10, 1 );
function um_12162024_stripe_filter__is_subscribed_query( $args ){
  return $args;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

