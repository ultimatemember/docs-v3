---
layout: UMLayout
title: um_disable_blocks_script | Hooks
tags: 
  - um_disable_blocks_script
  - filters
  - hooks
---
Disable Gutenberg scripts to avoid the conflicts.
``` php
apply_filters( 'um_disable_blocks_script', $disabled )
```
<div class='hook-sep'></div>

### Description

If this is set to true, Stripe Guternberg blocks are disabled.
<div class='hook-sep'></div>

### Parameters

<div style='padding: 20px 0px 10px;'>
<strong>$disabled</strong> <span style='color:red;font-size:12px;padding: 0px 5px 0px 5px' >bool</span>
<div style="margin-left:10px;padding: 10px 5px">Whether the Blocks script is disabled</div>
</div>
<div class='hook-sep'></div>



### Sample Usage

``` php
add_filter( 'um_disable_blocks_script', 'um_09202023_disable_blocks_script ', 10, 1 )
function um_09202023_disable_blocks_script( $disabled ){
  return $disabled;
}
```
<div class='hook-sep'></div>



### Related Snippets

Nothing was found
