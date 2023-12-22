---
---
# Enable Profile Photo uploader in Register and Account forms
Overview
--------

 This plugin seamlessly integrates the functionality for users to upload their profile photos directly within the Register and Account Forms. With a user-friendly setup, this feature enhances the registration and account creation process by enabling individuals to personalize their profiles right from the start. Upon installation and activation, users gain the convenience of uploading their profile pictures seamlessly, contributing to a more engaging and visually appealing user experience.

### Setting Up Profile Photo Upload in Register Form

 Follow these steps to integrate profile photo upload functionality in the Register Form after activating the plugin:

1. Navigate to wp-admin &gt; Ultimate Member &gt; Forms &gt; Edit Registration Form.
2. Click on the "<strong>+</strong>" sign button to add a new field using UM Form Builder.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f50ba8fd0677319115f26/file-oN9NLrK546.png)
3. In the Fields Manager window, select "<strong>Profile Photo</strong>" from the pre-defined fields.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f51676e5cdb01c2a3301a/file-UMZPupgTbD.png)
4. After adding the "Profile Photo" field, click on the <strong>"Update"</strong> button to save the changes.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f524500e96206bf001000/file-4Icm2MlnDO.png)

 With this configuration, users will be able to upload their profile photos seamlessly during the registration process, contributing to a more personalized and visually enriched user profile.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f54d7687c016dc15b7624/file-sbCHrzqyzY.png)

### Setting Up Profile Photo Upload in Account Form 

 To enable and support the Profile Photo uploader in the Account Form, use the provided code snippet:

```
add_filter( 'um_account_tab_general_fields', 'um_011921_add_profile_photo_uploader', 10, 2 );
function um_011921_add_profile_photo_uploader( $args, $shortcode_args ) {
    $args = 'register_profile_photo,' . $args;
    return $args;
}
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f568600e96206bf001001/file-AcOmUsoqHx.png)

 <strong>Note: If you have encountered any issues, go to this  [article](/docs-v3/um-extended/article/114-photo-uploads-not-working) .</strong>