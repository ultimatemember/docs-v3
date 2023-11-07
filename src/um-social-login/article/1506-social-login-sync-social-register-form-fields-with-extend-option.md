---
---
# Social Login - Sync Social Register form fields with Extend option
 To see the full list of Sync Field options, please see this  [documentation](/docs-v3/um-social-login/article/1536-social-login---list-of-sync-field-options-in-form-builder) .  
  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6ba7ab2c7d3a7a4d77ef34/file-gPRbcBGkSy.png)

#### Sync register fields with custom data on the social authentication process

 Modify the field value on the social authentication process before the final submission with the filter hook below:

#### <strong>Filter Hook:</strong> um\_social\_profile\_\_custom\_data\_{$field\_meta\_key} 

```
- $sso_value  string   default value
- $profile    object   response object from Social Network API callback
- $form_id    integer  current Social Form ID
- $fields     array    field settings
```

 <strong>Example:</strong>

```
/**
 * Modify followers count before submission
 */
add_filter("um_social_profile__custom_data_followers_status","um_sso_field_value_followers_status", 10, 4 );
function um_sso_field_value_followers_status( $sso_value, $profile, $form_id, $fields  ){
  $sso_value = $profile->data['followed_by'] + 5000; 
  return $sso_value;
}
```