---
sidebarDepth: 0
---
# Filters
> **Where to put the code?**
>
> Any time you add a custom PHP function to your site, insert it in the Code Snippets plugin (recommended), a child theme's functions.php, or your custom plugin. The [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin is the recommended option. 
>> **IMPORTANT:** Before making any PHP changes, make sure you have FTP access so you can still access your site if there are any mistakes in your code. 
>
> You can find more details in the  [WordPress docs](https://developer.wordpress.org/plugins/hooks/) if you need to get more familiar with using WordPress action/filters.
## [um_social_login_assigned_form_id](./filters/um_social_login_assigned_form_id)

## [um_social_login_callback_url](./filters/um_social_login_callback_url)

## [um_social_login_callback_url__{$provider}](./filters/um_social_login_callback_url____provider_)

## [um_social_login_connect_url](./filters/um_social_login_connect_url)

## [um_social_login_connect_url__{$provider}](./filters/um_social_login_connect_url____provider_)

## [um_social_login_do_login_error_return_url](./filters/um_social_login_do_login_error_return_url)

## [um_social_login_do_login_error_return_url__{$provider}](./filters/um_social_login_do_login_error_return_url____provider_)

## [um_social_login_get_user_profile](./filters/um_social_login_get_user_profile)

## [um_social_login_networks](./filters/um_social_login_networks)

## [um_social_login_networks_output](./filters/um_social_login_networks_output)

## [um_social_login_return_url](./filters/um_social_login_return_url)

## [um_social_login_return_url__{$provider}](./filters/um_social_login_return_url____provider_)

## [um_social_login_window_process_error_return_url](./filters/um_social_login_window_process_error_return_url)

## [um_social_login_window_process_error_return_url__{$provider}](./filters/um_social_login_window_process_error_return_url____provider_)

## [um_social_login_{$provider}__config](./filters/um_social_login___provider___config)
Example usage: add_filter("um_social_login_{$provider}__config", function( $config ){ $config[          'scope' => ['r_liteprofile', .
## [um_social_profile__custom_data_{$key}](./filters/um_social_profile__custom_data___key_)

