---
tags: 
  - umm_stripe_roles_exclude_from_list
  - filters
  - Exclude protected roles from the List
  - hooks
---
# umm\_stripe\_roles\_exclude\_from\_list
Exclude protected roles from the List
<Badge text="Since 1.0.0" vertical="middle" />
``` php:no-line-numbers
apply_filters( 'umm_stripe_roles_exclude_from_list', $um_wp_roles )
```
<div class='hook-sep'></div>

### Parameters

<div style='padding: 10px 0px 10px;'>
<strong>$um_wp_roles</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >array</span>
<div style="margin-left:10px;padding: 10px 5px">WP Roles slugs</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'umm_stripe_roles_exclude_from_list', 'um_12202024_stripe_roles_exclude_from_list', 10, 1 );
function um_12202024_stripe_roles_exclude_from_list( $um_wp_roles ){
  return $um_wp_roles;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

