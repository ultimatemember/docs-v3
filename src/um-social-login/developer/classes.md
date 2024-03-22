---
editLink: false
pageClass: phpdoc-api-generated-page


---

# Classes
        
##  `UM_MyCRED_Social_Login_Connect`    

Class UM_MyCRED_Social_Login_Connect






|     |     |
| ---:|:--- |
| **Extends** |[\\<span style="font-weight: bold;"></span>](classes.html#mycred_hook)|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\UM_MyCRED_Social_Login_Connect</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_MyCRED_Social_Login_Connect</span> Methods
  
:::tip <a id="UM_MyCRED_Social_Login_Connect::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Construct

```php:no-line-numbers
public function __construct( object $hook_prefs, string $type ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$hook_prefs` | **`object`** | Hook Preferences. |
| `$type` | **`string`** | Hook Type. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Connect::preferences" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> preferences ( )   
-----

Add Settings

```php:no-line-numbers
public function preferences(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Connect::run" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> run ( )   
-----

Hook into WordPress

```php:no-line-numbers
public function run(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Connect::sanitise_preferences" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> sanitise_preferences ( )   
-----

Sanitize Preferences

```php:no-line-numbers
public function sanitise_preferences( array $data ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$data` | **`array`** | Mycred Preferencefs data. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Connect::user_connects_social_network" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_connects_social_network ( )   
-----

Check if the user qualifies for points

```php:no-line-numbers
public function user_connects_social_network( string $provider, integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_id` | **`integer`** | User ID. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_MyCRED_Social_Login_Connect</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_MyCRED_Social_Login_Connect</span> Properties
  
:::tip <a id="UM_MyCRED_Social_Login_Connect::$um_hooks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $um_hooks   
-----

Ulimate Member hooks


```php:no-line-numbers
public $um_hooks = array();
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_MyCRED_Social_Login_Connect</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_MyCRED_Social_Login_Disconnect`    

Class UM_MyCRED_Social_Login_Disconnect






|     |     |
| ---:|:--- |
| **Extends** |[\\<span style="font-weight: bold;"></span>](classes.html#mycred_hook)|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\UM_MyCRED_Social_Login_Disconnect</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_MyCRED_Social_Login_Disconnect</span> Methods
  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Construct

```php:no-line-numbers
public function __construct( object $hook_prefs, string $type ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$hook_prefs` | **`object`** | Hook Preferences. |
| `$type` | **`string`** | Hook Type. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::preferences" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> preferences ( )   
-----

Add Settings

```php:no-line-numbers
public function preferences(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::run" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> run ( )   
-----

Hook into WordPress

```php:no-line-numbers
public function run(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::sanitise_preferences" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> sanitise_preferences ( )   
-----

Sanitize Preferences

```php:no-line-numbers
public function sanitise_preferences( array $data ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$data` | **`array`** | Preferences data. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::user_disconnects_social_network" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_disconnects_social_network ( )   
-----

Check if the user qualifies for points

```php:no-line-numbers
public function user_disconnects_social_network( string $provider, integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider slug. |
| `$user_id` | **`integer`** | User ID. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_MyCRED_Social_Login_Disconnect</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_MyCRED_Social_Login_Disconnect</span> Properties
  
:::tip <a id="UM_MyCRED_Social_Login_Disconnect::$um_hooks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $um_hooks   
-----

Ultimate Member hooks


```php:no-line-numbers
public $um_hooks = array();
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_MyCRED_Social_Login_Disconnect</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Social_Login_API`    

Class UM_Social_Login_API






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\UM_Social_Login_API</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Social_Login_API</span> Methods
  
:::tip <a id="UM_Social_Login_API::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

UM_Social_Login_API constructor

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::add_cpt" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_cpt ( )   
-----

Add Custom Post Type

```php:no-line-numbers
public function add_cpt( array $um_cpt ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$um_cpt` | **`array`** | Custom Post Types. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Social_Login_API::admin" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> admin ( )   
-----

Admin class

```php:no-line-numbers
public function admin(  ) : \um_ext\um_social_login\core\Social_Login_Admin()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::ajax" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> ajax ( )   
-----

Ajax class

```php:no-line-numbers
public function ajax(  ) : \um_ext\um_social_login\core\Social_Login_Ajax()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::api_response_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> api_response_fields ( )   
-----

Social network members data

```php:no-line-numbers
public function api_response_fields(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::available_networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> available_networks ( )   
-----

Available networks

```php:no-line-numbers
public function available_networks(  ) : mixed
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::count_users" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> count_users ( )   
-----

Number of connected users

```php:no-line-numbers
public function count_users( integer $id ) : integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$id` | **`integer`** | Provider handler ID. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::create_taxonomies" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> create_taxonomies ( )   
-----

Create a post type

```php:no-line-numbers
public function create_taxonomies(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::default_settings" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> default_settings ( )   
-----

Default settings

```php:no-line-numbers
public function default_settings( array $defaults ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$defaults` | **`array`** | Default settings. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::enqueue" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> enqueue ( )   
-----

Enqueue class

```php:no-line-numbers
public function enqueue(  ) : \um_ext\um_social_login\core\Social_Login_Enqueue()
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Social_Login_API::error_message_handler" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> error_message_handler ( )   
-----

Error Message handler

```php:no-line-numbers
public function error_message_handler( string $err, string $error_code ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$err` | **`string`** | Error. |
| `$error_code` | **`string`** | Error code. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::form_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> form_id ( )   
-----

Get form id

```php:no-line-numbers
public function form_id(  ) : integer
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::generate_unique_username" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> generate_unique_username ( )   
-----

Generate unique username

```php:no-line-numbers
public function generate_unique_username( string $username ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$username` | **`string`** | Username. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::get_network_icon" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_network_icon ( )   
-----

Network Icons

```php:no-line-numbers
public function get_network_icon( string $provider = '' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::get_network_name" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_network_name ( )   
-----

Network Provider name

```php:no-line-numbers
public function get_network_name( string $provider = '' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Network Provider. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::get_single_callback_networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_single_callback_networks ( )   
-----

Available networks with single callback urls

```php:no-line-numbers
public function get_single_callback_networks(  ) : array
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::get_this" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_this ( )   
-----

This class

```php:no-line-numbers
public function get_this(  ) : $this
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::hybridauth" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> hybridauth ( )   
-----

Hybridauth class

```php:no-line-numbers
public function hybridauth(  ) : \um_ext\um_social_login\core\Social_Login_Hybridauth()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> init ( )   
-----

Init

```php:no-line-numbers
public function init(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::init_networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> init_networks ( )   
-----

Init network filter

```php:no-line-numbers
public function init_networks(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::instance" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> instance ( )  <Badge text="static" type="warn"/>  
-----

Set instance

```php:no-line-numbers
public static function instance(  ) : \UM_Social_Login_API
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::query_vars" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> query_vars ( )   
-----

Modify global query vars

```php:no-line-numbers
public function query_vars( array $public_query_vars ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$public_query_vars` | **`array`** | Query vars. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::redirect" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> redirect ( )   
-----

Set Redirect from sessions

```php:no-line-numbers
public function redirect(  ) : array
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::session_start" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> session_start ( )   
-----

Session start

```php:no-line-numbers
public function session_start(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::setup" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> setup ( )   
-----

Setup class

```php:no-line-numbers
public function setup(  ) : \um_ext\um_social_login\core\Social_Login_Setup()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::shortcode" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> shortcode ( )   
-----

Shortcode class

```php:no-line-numbers
public function shortcode(  ) : \um_ext\um_social_login\core\Social_Login_Shortcode()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::show_submit_button" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> show_submit_button ( )   
-----

Get submit button on form

```php:no-line-numbers
public function show_submit_button(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::um_clear_session_after_logout" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_clear_session_after_logout ( )   
-----

Clear session after user logout

```php:no-line-numbers
public function um_clear_session_after_logout(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::um_mycred_social_login_hooks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_mycred_social_login_hooks ( )   
-----

Mycred integration

```php:no-line-numbers
public function um_mycred_social_login_hooks( string $action ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$action` | **`string`** | Action. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::user" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user ( )   
-----

User class

```php:no-line-numbers
public function user( integer $user_id = null ) : \um_ext\um_social_login\core\Social_Login_Users()
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` <Badge text="optional" type="warn"/>| **`integer`** | User ID. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::user_connect" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_connect ( )   
-----

Connect class

```php:no-line-numbers
public function user_connect(  ) : \um_ext\um_social_login\core\Social_Login_Connect()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::user_disconnect" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_disconnect ( )   
-----

Disconnect class

```php:no-line-numbers
public function user_disconnect(  ) : \um_ext\um_social_login\core\Social_Login_Disconnect()
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|




:::

  
:::tip <a id="UM_Social_Login_API::wp_remote_delete" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> wp_remote_delete ( )   
-----

Remote Request with Delete method

```php:no-line-numbers
public function wp_remote_delete( string $url, array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | the URL. |
| `$args` | **`array`** | URL parameters. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.3.13`<br />|




:::


#### <span style="display: none;">\UM_Social_Login_API</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Social_Login_API</span> Properties
  
:::tip <a id="UM_Social_Login_API::$plugin_inactive" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $plugin_inactive   
-----

For backward compatibility with 1.3.x and PHP8.2 compatibility.


```php:no-line-numbers
public $plugin_inactive = false;
```

***Types:***
- `boolean`


| | |
|:--------:| ----------- |


:::

  
:::danger <a id="UM_Social_Login_API::$instance" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $instance  <Badge text="static" type="warn"/>  
-----

Instance


```php:no-line-numbers
private static $instance;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|


:::

  
:::tip <a id="UM_Social_Login_API::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Network Providers


```php:no-line-numbers
public $networks;
```

***Types:***
- `array`


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0`<br />|


:::

  
:::tip <a id="UM_Social_Login_API::$api_response_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $api_response_fields   
-----

API Response fields


```php:no-line-numbers
public $api_response_fields;
```

***Types:***
- `array`


| | |
|:--------:| ----------- |
| ***Since*** |`v2.2`<br />|


:::

  
:::tip <a id="UM_Social_Login_API::$profile" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $profile   
-----

Profile object


```php:no-line-numbers
public $profile;
```

***Types:***
- `array`


| | |
|:--------:| ----------- |
| ***Since*** |`v2.4.4`<br />|


:::

  
:::tip <a id="UM_Social_Login_API::$show_overlay" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $show_overlay   
-----

Show overlay


```php:no-line-numbers
public $show_overlay = false;
```

***Types:***
- `boolean`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="UM_Social_Login_API::$shortcode_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $shortcode_id   
-----

Shortcode ID


```php:no-line-numbers
public $shortcode_id = false;
```

***Types:***
- `boolean`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_Social_Login_API</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Admin`    

Class Social_Login_Admin






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Admin</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Admin</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Social_Login_Admin constructor.

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::add_metabox" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_metabox ( )   
-----

Init the metaboxes

```php:no-line-numbers
public function add_metabox(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::add_metabox_form" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_metabox_form ( )   
-----

Add form metabox

```php:no-line-numbers
public function add_metabox_form(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::add_sso_sync_dropdown_field" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_sso_sync_dropdown_field ( )   
-----

Add dropdown selection

```php:no-line-numbers
public function add_sso_sync_dropdown_field( array $fields ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` | **`array`** | fields data. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::add_sso_sync_field" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_sso_sync_field ( )   
-----

Outputs Sync field

```php:no-line-numbers
public function add_sso_sync_field( string $attributes, integer $form_id = null, array $edit_array = array() ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$attributes` | **`string`** | Field attributes. |
| `$form_id` <Badge text="optional" type="warn"/>| **`integer`** | Form ID. |
| `$edit_array` <Badge text="optional" type="warn"/>| **`array`** | Field Edit data. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::extend_admin_menu" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> extend_admin_menu ( )   
-----

Extends the admin menu

```php:no-line-numbers
public function extend_admin_menu(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::load_metabox" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load_metabox ( )   
-----

Load metabox

```php:no-line-numbers
public function load_metabox(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::load_metabox_form" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load_metabox_form ( )   
-----

Load a form metabox

```php:no-line-numbers
public function load_metabox_form( object $object, array $box ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$object` | **`object`** | Post Object. |
| `$box` | **`array`** | Post Array. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::metabox_content" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> metabox_content ( )   
-----

Metabox content

```php:no-line-numbers
public function metabox_content(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::prepare_metabox" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> prepare_metabox ( )   
-----

Prepare metabox

```php:no-line-numbers
public function prepare_metabox(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::save_metabox_form" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> save_metabox_form ( )   
-----

Save form metabox

```php:no-line-numbers
public function save_metabox_form( string $um_post_id, object $um_post ) : mixed
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$um_post_id` | **`string`** | Post ID. |
| `$um_post` | **`object`** | Post Object. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Admin::set_social_login_form_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_social_login_form_id ( )   
-----

Assign registration form as overlay fields

```php:no-line-numbers
public function set_social_login_form_id( integer $um_post_id, object $um_post ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$um_post_id` | **`integer`** | Post ID. |
| `$um_post` | **`object`** | Post Object. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Admin</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Admin</span> Properties
> This class has not properties.

#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Admin</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Ajax`    

Class Social_Login_Ajax






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Ajax</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Ajax</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Ajax::ajax_change_photo" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> ajax_change_photo ( )   
-----

Change User Avatar via AJAX

```php:no-line-numbers
public function ajax_change_photo(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Ajax</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Ajax</span> Properties
> This class has not properties.

#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Ajax</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Connect`    

Class Social_Login_Connect






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Connect</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Connect</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::check_user_status" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> check_user_status ( )   
-----

Check user status

```php:no-line-numbers
public function check_user_status( integer $user_id ) : integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::email_exists" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> email_exists ( )   
-----

Check that user exists but not connected yet

```php:no-line-numbers
public function email_exists( array $profile, string $provider ) : false|integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$profile` | **`array`** | Profile Email. |
| `$provider` | **`string`** | Network provider. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::form_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> form_id ( )   
-----

Get assigned register form to overlay

```php:no-line-numbers
public function form_id(  ) : integer
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::get_enabled_step_process" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_enabled_step_process ( )   
-----

Get step process option

```php:no-line-numbers
public function get_enabled_step_process( integer $post_id = null ) : integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$post_id` <Badge text="optional" type="warn"/>| **`integer`** | Post ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::get_one_step_matched_email" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_one_step_matched_email ( )   
-----

One step matched email

```php:no-line-numbers
public function get_one_step_matched_email( integer $post_id = null ) : integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$post_id` <Badge text="optional" type="warn"/>| **`integer`** | Post ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::get_show_flash_screen" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_show_flash_screen ( )   
-----

Get show flash screen option

```php:no-line-numbers
public function get_show_flash_screen( integer $post_id = null ) : integer
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$post_id` <Badge text="optional" type="warn"/>| **`integer`** | Post ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::has_account_linked" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> has_account_linked ( )   
-----

Has account linked to provider

```php:no-line-numbers
public function has_account_linked( string $provider, object $obj_user_profile ) : boolean
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Network Provider slug. |
| `$obj_user_profile` | **`object`** | User Profile. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> init ( )   
-----

Init

```php:no-line-numbers
public function init(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::is_connected" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> is_connected ( )   
-----

Is connected

```php:no-line-numbers
public function is_connected( integer $user_id, string $provider ) : boolean
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |
| `$provider` | **`string`** | Provider slug. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::load_overlay" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load_overlay ( )   
-----

Load overlay if needed.

```php:no-line-numbers
public function load_overlay(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.5.3`<br />|




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::load_overlay_assets" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load_overlay_assets ( )   
-----

Load overlay assets

```php:no-line-numbers
public function load_overlay_assets(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::save_user_meta" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> save_user_meta ( )   
-----

Link user to provider

```php:no-line-numbers
public function save_user_meta( integer $user_id = null, array $profile = array(), string $provider = '' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` <Badge text="optional" type="warn"/>| **`integer`** | User ID. |
| `$profile` <Badge text="optional" type="warn"/>| **`array`** | Profile Data. |
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider Slug. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::show_overlay" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> show_overlay ( )   
-----

Show overlay

```php:no-line-numbers
public function show_overlay(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::sync_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> sync_fields ( )   
-----

Sync fields

```php:no-line-numbers
public function sync_fields( integer $um_sso_form_id = null, string $provider = '' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$um_sso_form_id` <Badge text="optional" type="warn"/>| **`integer`** | Form ID. |
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider Slug. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::user_exists" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_exists ( )   
-----

Check if email or username exists

```php:no-line-numbers
public function user_exists( array $profile, string $provider ) : boolean
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$profile` | **`array`** | Profile data. |
| `$provider` | **`string`** | Network Provider. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Connect</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Connect</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Network Providers


```php:no-line-numbers
public $networks;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$form_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $form_id   
-----

Form ID


```php:no-line-numbers
public $form_id;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$user_profile" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $user_profile   
-----

User Profile


```php:no-line-numbers
public $user_profile;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$current_provider" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $current_provider   
-----

Current Provider


```php:no-line-numbers
public $current_provider;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$hybridauth" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $hybridauth   
-----

HybridAuth class


```php:no-line-numbers
public $hybridauth;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$oauth_response" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $oauth_response   
-----

HybridAuth Response


```php:no-line-numbers
public $oauth_response;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$do_action" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $do_action   
-----

SSO Action


```php:no-line-numbers
public $do_action = '';
```

***Types:***
- `mixed`

***Description:***

@var $do_action

| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$if_overlay_provider" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $if_overlay_provider   
-----

A provider for the overlay if needed.


```php:no-line-numbers
public $if_overlay_provider;
```

***Types:***
- `string`


| | |
|:--------:| ----------- |
| ***Since*** |`v2.5.3`<br />|


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$session" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $session   
-----

Storage Session


```php:no-line-numbers
public $session = null;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Connect::$session_has_init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $session_has_init   
-----

Has Session storage loaded


```php:no-line-numbers
public $session_has_init = 0;
```

***Types:***
- `string`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Connect</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Cookie`    

Class Social_Login_Cookie






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |[Hybridauth\Storage\\<span style="font-weight: bold;">StorageInterface</span>](interfaces.html#hybridauth-storage-storageinterface) <br />|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Cookie</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Cookie</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Initiate a new session

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::clear" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> clear ( )   
-----

Clear Cookie

```php:no-line-numbers
public function clear(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::delete" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> delete ( )   
-----

Delete Cookie

```php:no-line-numbers
public function delete( string $key ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` | **`string`** | Cookie Key. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::deleteMatch" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> deleteMatch ( )   
-----

Delete Match Cookie

```php:no-line-numbers
public function deleteMatch( string $key, string $cv = '' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` | **`string`** | Cookie Key. |
| `$cv` <Badge text="optional" type="warn"/>| **`string`** | Cookie Value to match. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::get" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get ( )   
-----

Get cookie

```php:no-line-numbers
public function get( string $key ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` | **`string`** | Cookie Key. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Cookie::set" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set ( )   
-----

Set cookie

```php:no-line-numbers
public function set( string $key, string $value ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` | **`string`** | Cookie Key. |
| `$value` | **`string`** | Cookie Value. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Cookie</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Cookie</span> Properties
  
:::warning <a id="um_ext-um_social_login-core-Social_Login_Cookie::$store_namespace" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $store_namespace   
-----

Namespace


```php:no-line-numbers
protected $store_namespace = 'UM_SSO_STORAGE';
```

***Types:***
- `string`


| | |
|:--------:| ----------- |


:::

  
:::warning <a id="um_ext-um_social_login-core-Social_Login_Cookie::$key_prefix" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $key_prefix   
-----

Key prefix


```php:no-line-numbers
protected $key_prefix = '';
```

***Types:***
- `string`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Cookie</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Disconnect`    

Class Social_Login_Disconnect






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Disconnect</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Disconnect</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Disconnect::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Social_Login_Disconnect constructor.

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Disconnect::init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> init ( )   
-----

Handle disconnect

```php:no-line-numbers
public function init(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Disconnect</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Disconnect</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Disconnect::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Social Network Providers


```php:no-line-numbers
public $networks;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Disconnect</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Enqueue`    

Class Social_Login_Enqueue






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Enqueue</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Enqueue</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Enqueue::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Social_Login_Enqueue constructor.

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Enqueue::wp_enqueue_scripts" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> wp_enqueue_scripts ( )   
-----

Frontend enqueue scripts

```php:no-line-numbers
public function wp_enqueue_scripts(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Enqueue</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Enqueue</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Enqueue::$suffix" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $suffix   
-----

Asset suffix


```php:no-line-numbers
public $suffix;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Enqueue</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Hybridauth`    

Class Social_Login_Hybridauth






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Hybridauth</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Hybridauth</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

__construct

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::connect_user" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> connect_user ( )   
-----

Connect a user with a provider account

```php:no-line-numbers
public function connect_user( string $provider = '', string $callback_url = '', object $sso_session = '', boolean $session_loaded = false ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Provider id. |
| `$callback_url` <Badge text="optional" type="warn"/>| **`string`** | Site's callback URL. |
| `$sso_session` <Badge text="optional" type="warn"/>| **`object`** | Session storage. |
| `$session_loaded` <Badge text="optional" type="warn"/>| **`boolean`** | Session has loaded. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_callback_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_callback_url ( )   
-----

Get Callback URL

```php:no-line-numbers
public function get_callback_url( string $provider = '', string $return_url = false ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Network provider. |
| `$return_url` <Badge text="optional" type="warn"/>| **`string`** | Site's current return URL. |


| | |
|:--------:| ----------- |



***Returns:***

$callback_url Site's current callback URL.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_config" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_config ( )   
-----

Get Config

```php:no-line-numbers
public function get_config( string $provider = '' ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Provider's ID. |


| | |
|:--------:| ----------- |



***Returns:***

$config


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_connect_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_connect_url ( )   
-----

Get Login URL

```php:no-line-numbers
public function get_connect_url( string $provider = '', boolean $is_shortcode = false ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Provider's ID. |
| `$is_shortcode` <Badge text="optional" type="warn"/>| **`boolean`** | determine if social connection is via Shortcode. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_current_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_current_url ( )   
-----

Get current URL

```php:no-line-numbers
public function get_current_url(  ) : string
```



| | |
|:--------:| ----------- |



***Returns:***

$current_url Site's current URL excluding specific parameters.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_disconnect_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_disconnect_url ( )   
-----

Get Disconnect Url

```php:no-line-numbers
public function get_disconnect_url( string $provider = '', string $user_id = null ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Provider ID. |
| `$user_id` <Badge text="optional" type="warn"/>| **`string`** | Current User's ID. |


| | |
|:--------:| ----------- |



***Returns:***

$current_url The current site's URL with extra parameters.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_keys" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_keys ( )   
-----

Get Provider's API keys

```php:no-line-numbers
public function get_keys( array $options ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$options` | **`array`** | API keys. |


| | |
|:--------:| ----------- |



***Returns:***

$arr_keys API Keys setup.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_return_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_return_url ( )   
-----

Get return Url

```php:no-line-numbers
public function get_return_url( string $provider = '', string $callback_url = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Social Provider ID. |
| `$callback_url` <Badge text="optional" type="warn"/>| **`string`** | Site's Callback URL. |


| | |
|:--------:| ----------- |



***Returns:***

$return_url Return URL.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::get_session" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_session ( )  <Badge text="deprecated" type="error"/> 
-----

Get Session

```php:no-line-numbers
public function get_session(  ) : object
```



| | |
|:--------:| ----------- |
| **Deprecated** |since version 2.5.3 <br />|




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> init ( )   
-----

Init

```php:no-line-numbers
public function init(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::jsdump" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> jsdump ( )   
-----

Jsdump browser console for debugging purposes

```php:no-line-numbers
public function jsdump( array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | mixed parameters to dump. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::log_error" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> log_error ( )   
-----

Log errors in a text file

```php:no-line-numbers
public function log_error( string $logs ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$logs` | **`string`** | object response from HybridAuth. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::session" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> session ( )   
-----

A shortcut for the session object.

```php:no-line-numbers
public function session(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.5.3`<br />|




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::wp_init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> wp_init ( )   
-----

WP Init

```php:no-line-numbers
public function wp_init(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Hybridauth</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Hybridauth</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Networks


```php:no-line-numbers
public $networks;
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::$um_session" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $um_session   
-----

Load settions on wp action hook


```php:no-line-numbers
public $um_session;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::$all_networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $all_networks   
-----

Social Networks Providers


```php:no-line-numbers
public $all_networks = array();
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::$available_networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $available_networks   
-----

Active Social Network Providers


```php:no-line-numbers
public $available_networks = array();
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Hybridauth::$called" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $called   
-----

Times connectUser is called


```php:no-line-numbers
public $called = 0;
```

***Types:***
- `integer`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Hybridauth</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Setup`    

Class Social_Login_Setup






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Setup</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Setup</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::run_setup" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> run_setup ( )   
-----

Run setup and register default settings

```php:no-line-numbers
public function run_setup(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::set_default_settings" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_default_settings ( )   
-----

Register default settings

```php:no-line-numbers
public function set_default_settings(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::setup" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> setup ( )   
-----

Setup

```php:no-line-numbers
public function setup(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Setup</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Setup</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::$settings_defaults" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $settings_defaults   
-----

Default Settings


```php:no-line-numbers
public $settings_defaults;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::$core_form_meta" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $core_form_meta   
-----

Core form meta data


```php:no-line-numbers
public $core_form_meta;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Setup::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Social Networks


```php:no-line-numbers
public $networks;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Setup</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Shortcode`    

Class Social_Login_Shortcode






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Shortcode</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Shortcode</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Shortcode::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Social_Login_Shortcode constructor.

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Shortcode::change_registration_role" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> change_registration_role ( )   
-----

Additional arguments for user registration

```php:no-line-numbers
public function change_registration_role( string $role, array $args ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$role` | **`string`** | Role slug. |
| `$args` | **`array`** | Field settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Shortcode::get_meta" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_meta ( )   
-----

Get shortcode post meta

```php:no-line-numbers
public function get_meta( integer $id ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$id` | **`integer`** | post ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Shortcode::load" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load ( )   
-----

Load a module with global function

```php:no-line-numbers
public function load( array $atts ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$atts` | **`array`** | Attributes. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Shortcode::ultimatemember_social_login" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> ultimatemember_social_login ( )   
-----

Social Login Shortcode

```php:no-line-numbers
public function ultimatemember_social_login( array $args = array() ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` <Badge text="optional" type="warn"/>| **`array`** | attributes. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Shortcode</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Shortcode</span> Properties
> This class has not properties.

#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Shortcode</span> Inherited properties
> This class has not inherited properties.
        
##  `um_ext\um_social_login\core\Social_Login_Users`    

Class Social_Login_Users






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Users</span> Constants
> This class has not constants.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Users</span> Methods
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct( integer $user_id = null ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` <Badge text="optional" type="warn"/>| **`integer`** | User ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_date_linked" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_date_linked ( )   
-----

Get Profile Date Linked

```php:no-line-numbers
public function get_date_linked( string $provider = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |



***Returns:***

$value Value.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_display_name" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_display_name ( )   
-----

Get Display Name

```php:no-line-numbers
public function get_display_name( string $provider = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |



***Returns:***

$value Value.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_profile_photo" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_profile_photo ( )   
-----

Get Profile Photo

```php:no-line-numbers
public function get_profile_photo( string $provider = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |



***Returns:***

$value Value.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_profile_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_profile_url ( )   
-----

Get Profile Url

```php:no-line-numbers
public function get_profile_url( string $provider = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |



***Returns:***

$value Value.


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_raw" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_raw ( )   
-----

Get Raw Data

```php:no-line-numbers
public function get_raw( string $provider = '' ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` <Badge text="optional" type="warn"/>| **`string`** | Provider slug. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::get_value" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_value ( )   
-----

Get Value

```php:no-line-numbers
public function get_value( string $key = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$key` <Badge text="optional" type="warn"/>| **`string`** | Field Key. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::has_avatar_linked" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> has_avatar_linked ( )   
-----

Check if user has linked avatar

```php:no-line-numbers
public function has_avatar_linked( string $provider ) : boolean
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$provider` | **`string`** | Provider ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::jsdump" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> jsdump ( )   
-----

Jsdump browser console for debugging purposes

```php:no-line-numbers
public function jsdump( array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | array to convert. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Users</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Users</span> Properties
  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::$networks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $networks   
-----

Networks


```php:no-line-numbers
public $networks;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::$user_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $user_id   
-----

User ID


```php:no-line-numbers
public $user_id = null;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="um_ext-um_social_login-core-Social_Login_Users::$data" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $data   
-----

Data


```php:no-line-numbers
public $data = array();
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\um_ext\um_social_login\core\Social_Login_Users</span> Inherited properties
> This class has not inherited properties.

--------

<div class="page-edit">
    <div class="last-updated">
        <span class="prefix">Auto-generated at: </span>
        <span class="time">2024-03-22, 5:15 AM</span>
    </div>
</div>



