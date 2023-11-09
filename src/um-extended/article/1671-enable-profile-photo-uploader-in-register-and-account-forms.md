---
---
# Enable Profile Photo uploader in Register and Account forms
Overview
--------

 This plugin will allow users to upload their profile photos in the Register and Account Forms. You can read the installation guide  [here.](/docs-v3/um-extended/article/1663-download-installation-of-the-basic-extensions)

Set up in Register Form
-----------------------

 Once the plugin is activated, you need to add the pre-defined field  <strong>"Profile Photo"</strong> to the Register form via UM Form Builder.

 Go to <strong>wp-admin&gt; Ultimate Member&gt; Forms&gt; Edit Registration Form</strong>

 Click on the plus " <strong>+</strong>" sign button to add a field.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e057d31adf855680c797fb/file-GkMp0FMAQJ.png)

 The Fields Manager window will appear then select <strong>"Profile Photo"</strong> from the pre-defined fields.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e0599fc73ba12e69a4fa77/file-Vldc3U0gTf.png)

 Once added, click on the <strong>"Update"</strong> button to save changes.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e05a6fb54d116b7c397182/file-jE8Pp6FwCv.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e8255a39e5d05141b60c9e/file-3Qd7Z50dN5.png)

<strong>Set up in the Account Form</strong>
-------------------------------------------

 It is required to set the <strong>Profile Photo Uploader</strong> first in the Register Form, and you need to use the code snippet below to enable and support the Profile Photo uploader in the Account Form:

``` add\_filter( 'um\_account\_tab\_general\_fields', 'um\_011921\_add\_profile\_photo\_uploader', 10, 2 ); function um\_011921\_add\_profile\_photo\_uploader( $args, $shortcode\_args ) { $args = 'register\_profile\_photo,' . $args; return $args; } ```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e8374f68cd260cc2d324f0/file-APyMykMmSl.png)

 <strong>Note: If you have encountered any issues, go to this  [article](/docs-v3/um-extended/article/114-photo-uploads-not-working) .</strong>