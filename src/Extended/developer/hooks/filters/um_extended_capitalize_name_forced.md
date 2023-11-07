---
tags: 
  - um_extended_capitalize_name_forced
  - filters
  - Force capitalization
  - hooks
---
# um\_extended\_capitalize\_name\_forced
Force capitalization
``` php:no-line-numbers
apply_filters( 'um_extended_capitalize_name_forced',  )
```
<div class='hook-sep'></div>

### Description

By default, this is set to TRUE. This may affect performance of the server. If set to FALSE, display names will capitlized on form submissions instead.
<div class='hook-sep'></div>

### Parameters

<div class='hook-sep'></div>



### Sample Usage

``` php:no-line-numbers
add_filter( 'um_extended_capitalize_name_forced', 'um_1172023_extended_capitalize_name_forced ', 10, 0 )
function um_1172023_extended_capitalize_name_forced(  ){
  return ;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found

