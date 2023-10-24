---
title: Enable Profile Photo uploader in Register and Account forms 
layout: UMLayout
---
# Enable Profile Photo uploader in Register and Account forms


## Overview

<p>
	 This plugin will allow users to upload their profile photos in the Register and Account Forms. You can read the installation guide 
	<a href="https://ultimatemember.github.io/Extended/article/1663-download-installation-of-the-basic-extensions">here.</a>
</p>


## Set up in Register Form

<p>
	 Once the plugin is activated, you need to add the pre-defined field 
	<strong> "Profile Photo"</strong> to the Register form via UM Form Builder.
</p>
<p>
	 Go to 
	<b style="background-color: initial;">wp-admin> Ultimate Member> Forms> Edit Registration Form</b>
</p>
<p>
	 Click on the plus " 
	<strong>+</strong>" sign button to add a field.
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e057d31adf855680c797fb/file-GkMp0FMAQJ.png">
</p>
<p>
	 The Fields Manager window will appear then select  
	<strong>"Profile Photo" </strong>from the pre-defined fields.
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e0599fc73ba12e69a4fa77/file-Vldc3U0gTf.png">
</p>
<p>
	 Once added, click on the 
	<strong>"Update" </strong>button to save changes.
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e05a6fb54d116b7c397182/file-jE8Pp6FwCv.png">
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e8255a39e5d05141b60c9e/file-3Qd7Z50dN5.png" style="width: 484px;">
</p>


## Set up in the Account Form

<p>
	 It is required to set the 
	<strong>Profile Photo Uploader</strong> first<strong> </strong>in the Register Form, and you need to use the code snippet below to enable and support the Profile Photo uploader in the Account Form:
</p>
<p>
```
add_filter( 'um_account_tab_general_fields', 'um_011921_add_profile_photo_uploader', 10, 2 );
function um_011921_add_profile_photo_uploader( $args, $shortcode_args ) {
    $args = 'register_profile_photo,' . $args;
    return $args;
}
```
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e8374f68cd260cc2d324f0/file-APyMykMmSl.png">
</p>
<p class="callout-blue">
	<strong>Note: If you have encountered any issues, go to this 
	<a href="https://ultimatemember.github.io/Extended/article/114-photo-uploads-not-working">article</a>. </strong>
</p>
