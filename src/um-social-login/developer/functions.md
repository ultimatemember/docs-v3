---
editLink: false
pageClass: phpdoc-api-generated-page


---

# Functions

        
##  `um_account_content_hook_social()`    

Add content to account tab

```php:no-line-numbers
function um_account_content_hook_social( string $output ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$output` | **`string`** | HTML output. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_init_social_login()`    

Create class variable

```php:no-line-numbers
function um_init_social_login(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|


        
##  `um_keep_signed_in()`    

Keep user signed in?

```php:no-line-numbers
function um_keep_signed_in(  ) : boolean
```



### Description

> No description.

| | |
|:--------:| ----------- |


### Returns

$session|$cookie

        
##  `um_profile_completeness_skip_field()`    

Profile Completeness integration

```php:no-line-numbers
function um_profile_completeness_skip_field( string $skip, string $key, string $result ) : boolean
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$skip` | **`string`** | Skip field. |
| `$key` | **`string`** | Field key. |
| `$result` | **`string`** | Result completeness. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_remove_user_role()`    

Maybe other extension uses this?

```php:no-line-numbers
function um_remove_user_role( string $role ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$role` | **`string`** | The role slug. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_do_login()`    

Do login process

```php:no-line-numbers
function um_social_do_login( string $provider, integer $user_id, object $user_profile, object $connect, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_id` | **`integer`** | User ID. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$connect` | **`object`** | um_ext\um_social_login\core\Social_Login_Connect Connect Class. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_do_login_error_not_linked()`    

Auth Window close and redirect to return Url with errors

```php:no-line-numbers
function um_social_do_login_error_not_linked( string $provider, object $user_profile, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provide slug. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_do_redirect_after_login()`    

Redirect users after login with custom redirect_to url

```php:no-line-numbers
function um_social_do_redirect_after_login( string $provider ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_do_register_error()`    

Register Error

```php:no-line-numbers
function um_social_do_register_error( string $provider, object $user_profile, object $connect, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$connect` | **`object`** | um_ext\um_social_login\core\Social_Login_Connect Connect Class. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_doing_shortcode_process()`    

Show registration overlay via shortcode

```php:no-line-numbers
function um_social_doing_shortcode_process( string $provider, boolean $has_linked, object $user_profile, object $connect, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$has_linked` | **`boolean`** | Whethere the Social account is linked. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$connect` | **`object`** | um_ext\um_social_login\core\Social_Login_Connect Connect Class. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_link_user_to_social()`    

Link account to user

```php:no-line-numbers
function um_social_link_user_to_social( string $provider, object $user_profile, string $return_url, boolean $has_linked_account = false ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$return_url` | **`string`** | Return URL. |
| `$has_linked_account` <Badge text="optional" type="warn"/>| **`boolean`** | Whether the provider account is linked. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_link_user_to_social_error()`    

Link account to user error

```php:no-line-numbers
function um_social_link_user_to_social_error( string $provider, object $user_profile, string $return_url, boolean $has_linked_account = false ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$return_url` | **`string`** | Return URL. |
| `$has_linked_account` <Badge text="optional" type="warn"/>| **`boolean`** | Whether the provider account is linked. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_login_account_tab()`    

Add tab to account page

```php:no-line-numbers
function um_social_login_account_tab( array $tabs ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$tabs` | **`array`** | Tabs settings. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_activation_hook()`    

Activate hook

```php:no-line-numbers
function um_social_login_activation_hook(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_add_buttons()`    

Modal field settings

```php:no-line-numbers
function um_social_login_add_buttons( array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | Field settings. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_add_register_metabox()`    

Creates the form metaboxes

```php:no-line-numbers
function um_social_login_add_register_metabox(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_callback_url()`    

Set Login callback url for Single-callback network/provider

```php:no-line-numbers
function um_social_login_callback_url( string $callback_url, string $provider ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$callback_url` | **`string`** | Callback URL. |
| `$provider` | **`string`** | Provider slug. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_check_dependencies()`    

Check dependencies

```php:no-line-numbers
function um_social_login_check_dependencies(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_connect_url()`    

Set Connect Url for Single-callback network/provider

```php:no-line-numbers
function um_social_login_connect_url( string $connect_url, string $provider ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$connect_url` | **`string`** | Connect URL. |
| `$provider` | **`string`** | Provider slug. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_custom_error()`    

Custom error

```php:no-line-numbers
function um_social_login_custom_error( string $msg, string $error_type ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$msg` | **`string`** | Error message. |
| `$error_type` | **`string`** | Error Type. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_custom_success()`    

Custom Success message in Account > Social

```php:no-line-numbers
function um_social_login_custom_success( string $msg, string $success_type ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$msg` | **`string`** | Error message. |
| `$success_type` | **`string`** | Error Type. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_dependencies()`    

UM old version is active

```php:no-line-numbers
function um_social_login_dependencies(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_do_close_oauth_window()`    

Authenticated User - oAuth Window Close

```php:no-line-numbers
function um_social_login_do_close_oauth_window( string $provider, string $return_url, object $user_profile ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$return_url` | **`string`** | Return URL. |
| `$user_profile` | **`object`** | Hybridauth Response. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_login_doing_close_oauth_window()`    

Authenticate user - OAuth Window close

```php:no-line-numbers
function um_social_login_doing_close_oauth_window( string $provider, string $return_url, object $user_profile ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$return_url` | **`string`** | Return URL. |
| `$user_profile` | **`object`** | Hybridauth Response. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_login_extend_scan_files()`    

Scan templates from extension

```php:no-line-numbers
function um_social_login_extend_scan_files( array $scan_files ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$scan_files` | **`array`** | Template Scanned files. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_get_path_template()`    

Get template paths

```php:no-line-numbers
function um_social_login_get_path_template( array $located, string $file ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$located` | **`array`** | Located templates. |
| `$file` | **`string`** | File name. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_get_user_profile__discord()`    

Set default avatar when there's no avvatar from getUserProfile()

```php:no-line-numbers
function um_social_login_get_user_profile__discord( object $user_profile, \class $hybridauth, string $access_token ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_profile` | **`object`** | User Profile object. |
| `$hybridauth` | **`\class`** | Hybridauth class. |
| `$access_token` | **`string`** | Access token. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_get_user_profile__facebook()`    

Add access token to the profile photo URL to support Facebook App's development mode.

```php:no-line-numbers
function um_social_login_get_user_profile__facebook( object $user_profile, \class $hybridauth, string $access_token ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_profile` | **`object`** | User Profile object. |
| `$hybridauth` | **`\class`** | Hybridauth class. |
| `$access_token` | **`string`** | Access token. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_get_user_profile__google()`    

Change Avatar size

```php:no-line-numbers
function um_social_login_get_user_profile__google( object $user_profile, \class $hybridauth, string $access_token ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_profile` | **`object`** | User Profile object. |
| `$hybridauth` | **`\class`** | Hybridauth class. |
| `$access_token` | **`string`** | Access token. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_get_user_profile__twitter()`    

Clear Last name

```php:no-line-numbers
function um_social_login_get_user_profile__twitter( object $user_profile, \class $hybridauth, string $access_token ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_profile` | **`object`** | User Profile object. |
| `$hybridauth` | **`\class`** | Hybridauth class. |
| `$access_token` | **`string`** | Access token. |


### Description

Twitter has no last name

| | |
|:--------:| ----------- |


        
##  `um_social_login_license_settings()`    

Extend license settings.

```php:no-line-numbers
function um_social_login_license_settings( array $settings ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$settings` | **`array`** | Settings data. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_mycred_hooks()`    

UM myCRED integration

```php:no-line-numbers
function um_social_login_mycred_hooks( array $installed, string $point_type ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$installed` | **`array`** | Hooks. |
| `$point_type` | **`string`** | Hook type. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_mycred_notification_tpl_default()`    

Register hooks & template

```php:no-line-numbers
function um_social_login_mycred_notification_tpl_default( string $notification_tpl, string $hook, array $hook_data, array $um_hooks ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$notification_tpl` | **`string`** | Template name. |
| `$hook` | **`string`** | Notification hook. |
| `$hook_data` | **`array`** | Hook data. |
| `$um_hooks` | **`array`** | Ultimate Member core hooks. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_mycred_references()`    

Add Social Login connect hook

```php:no-line-numbers
function um_social_login_mycred_references( array $hooks ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$hooks` | **`array`** | MyCred hooks references. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_mycred_settings_award()`    

Extend myCRED settings

```php:no-line-numbers
function um_social_login_mycred_settings_award( array $settings ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$settings` | **`array`** | Settings data. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_mycred_settings_deduct()`    

Extend myCRED settings

```php:no-line-numbers
function um_social_login_mycred_settings_deduct( array $settings ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$settings` | **`array`** | Settings data. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_networks()`    

Social Networks settings

```php:no-line-numbers
function um_social_login_networks( array $networks ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$networks` | **`array`** | Array of Social Networks. |


### Description

> No description.

| | |
|:--------:| ----------- |


### Returns

$networks Array of Social Networks.

        
##  `um_social_login_plugins_loaded()`    

Add languages

```php:no-line-numbers
function um_social_login_plugins_loaded(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_redirect_in_message_button()`    

UM Private Messaging - Message button redirect URL.

```php:no-line-numbers
function um_social_login_redirect_in_message_button( string $current_url, integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$current_url` | **`string`** | Current page URL. |
| `$user_id` | **`integer`** | User ID. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_remove_profile_photo()`    

Remove synced profile photo

```php:no-line-numbers
function um_social_login_remove_profile_photo( integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_return_url()`    

Set Login Return Url for Single-callback network/provider

```php:no-line-numbers
function um_social_login_return_url( string $return_url, string $provider ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$return_url` | **`string`** | Return URL. |
| `$provider` | **`string`** | Provider slug. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_save_extra_fields()`    

Save extra fields

```php:no-line-numbers
function um_social_login_save_extra_fields( integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_settings()`    

Extend settings

```php:no-line-numbers
function um_social_login_settings( array $settings ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$settings` | **`array`** | Settings data. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_synced_profile_photo()`    

Sync user profile photo

```php:no-line-numbers
function um_social_login_synced_profile_photo( string $url, integer $user_id ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | Avatar URL. |
| `$user_id` | **`integer`** | User ID. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_login_user_photo_menu_edit()`    

Avatar view

```php:no-line-numbers
function um_social_login_user_photo_menu_edit( array $items ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$items` | **`array`** | Menu items. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_oauth_window_error_user_denied()`    

Auth Window close and redirect to return Url with errors

```php:no-line-numbers
function um_social_oauth_window_error_user_denied( string $provider, string $return_url, object $user_profile ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provide slug. |
| `$return_url` | **`string`** | Return URL. |
| `$user_profile` | **`object`** | Hybridauth Response. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_one_step_process_matched_email()`    

Validate email address registration

```php:no-line-numbers
function um_social_one_step_process_matched_email( string $provider, boolean $has_linked, object $user_profile, object $connect, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$has_linked` | **`boolean`** | Whethere the Social account is linked. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$connect` | **`object`** | um_ext\um_social_login\core\Social_Login_Connect Connect Class. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_social_register_hidden_fields()`    

Add hidden type fields in Register Form

```php:no-line-numbers
function um_social_register_hidden_fields( array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | Form settings. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2.0`<br />|


        
##  `um_social_set_redirect_to_page()`    

Set cookie for the redirection URL

```php:no-line-numbers
function um_social_set_redirect_to_page(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_social_show_register_overlay()`    

Show registration overlay via regular register form

```php:no-line-numbers
function um_social_show_register_overlay( string $provider, object $user_profile, object $connect, string $return_url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_profile` | **`object`** | Hybridauth Response. |
| `$connect` | **`object`** | um_ext\um_social_login\core\Social_Login_Connect Connect Class. |
| `$return_url` | **`string`** | Return URL. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_sso_compatibility_wp_mail_smtp()`    

WP Mail SMTP Compatible

```php:no-line-numbers
function um_sso_compatibility_wp_mail_smtp(  ) : void
```



### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_sso_disable_fields()`    

Disable SSO fields when users cannot edit the field

```php:no-line-numbers
function um_sso_disable_fields( string $disabled, array $data ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$disabled` | **`string`** | Disabled value. |
| `$data` | **`array`** | field data. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_sso_edit_field_register_hidden()`    

Make all fields hidden for one-step process

```php:no-line-numbers
function um_sso_edit_field_register_hidden( string $output, array $data ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$output` | **`string`** | HTML output. |
| `$data` | **`array`** | Field settings. |


### Description

> No description.

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_sso_github_config()`    

Change API field keys

```php:no-line-numbers
function um_sso_github_config( array $config ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$config` | **`array`** | Network Config. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_sso_github_settings()`    

Change API field keys

```php:no-line-numbers
function um_sso_github_settings( array $networks ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$networks` | **`array`** | Networks. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_sso_make_fields_hidden()`    

Make register fields hidden for One-step process

```php:no-line-numbers
function um_sso_make_fields_hidden( array $fields = array(), integer $base_form_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` <Badge text="optional" type="warn"/>| **`array`** | Fields data. |
| `$base_form_id` | **`integer`** | Form ID. |


### Description

> No description.

| | |
|:--------:| ----------- |


        
##  `um_sso_register_auto_approved()`    

Auto approves users after registration complete.

```php:no-line-numbers
function um_sso_register_auto_approved( integer $user_id, array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |
| `$args` | **`array`** | Field settings. |


### Description

Overrides the Registration Options set in User Roles settings

| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


        
##  `um_sso_returned_raw_data()`    

Add fallback for first and last name

```php:no-line-numbers
function um_sso_returned_raw_data( string $key, string $sso_sync_value, array $field, object $profile, string $provider ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` | **`string`** | Field key. |
| `$sso_sync_value` | **`string`** | Field key. |
| `$field` | **`array`** | Field data. |
| `$profile` | **`object`** | Profile Data. |
| `$provider` | **`string`** | Provider slug. |


### Description

> No description.

| | |
|:--------:| ----------- |




--------

<div class="page-edit">
    <div class="last-updated">
        <span class="prefix">Auto-generated at: </span>
        <span class="time">2023-11-07, 1:11 PM</span>
    </div>
</div>



