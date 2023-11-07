---
editLink: false
pageClass: phpdoc-api-generated-page


---

# Classes
        
##  `UM_Extended`   <Badge text="final"/>  

Extended






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |


### <span style="display: none;">\UM_Extended</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended</span> Methods
  
:::tip <a id="UM_Extended::__call" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __call ( )   
-----

Call function

```php:no-line-numbers
public function __call( string $name, array $arguments ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$name` | **`string`** | Function name. |
| `$arguments` | **`array`** | Function args. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended::add_method" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_method ( )   
-----

Dynamically Register Method

```php:no-line-numbers
public function add_method( string $name, array $method ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$name` | **`string`** | Function name. |
| `$method` | **`array`** | Function. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended::instance" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> instance ( )  <Badge text="static" type="warn"/>  
-----

Main UM_Extended Instance

```php:no-line-numbers
public static function instance(  ) : \UM
```


***Description:***

Ensures only one instance of UM is loaded or can be loaded.

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0`<br />|
| **See also** |`\UM()`   <br /> |



***Returns:***

- Main instance


:::

  
:::tip <a id="UM_Extended::um_extended_construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_extended_construct ( )   
-----

Dynamically load extensions.

```php:no-line-numbers
public function um_extended_construct(  ) : void
```


***Description:***

Directory name and class should match patterns:
e.g. directory 'um-user-shortcode' should have a class `UM_Extended_User_Shortcode`

| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended</span> Properties
  
:::warning <a id="UM_Extended::$instance" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $instance  <Badge text="static" type="warn"/>  
-----

Instance


```php:no-line-numbers
protected static $instance;
```

***Types:***
- `\UM_Extended`


| | |
|:--------:| ----------- |


:::

  
:::tip <a id="UM_Extended::$classes" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $classes   
-----

Core object


```php:no-line-numbers
public $classes = array();
```

***Types:***
- `array`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_Extended</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_API`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|


### <span style="display: none;">\UM_Extended_API</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_API</span> Methods
  
:::tip <a id="UM_Extended_API::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::dev_refresh_runtime" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> dev_refresh_runtime ( )   
-----

Adds the RefreshRuntime.

```php:no-line-numbers
public function dev_refresh_runtime(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_API::disable_all_active" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> disable_all_active ( )   
-----

Disable All Active extensions

```php:no-line-numbers
public function disable_all_active(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::extended_menu" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> extended_menu ( )   
-----

Register Menu

```php:no-line-numbers
public function extended_menu(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::extension_activate" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> extension_activate ( )   
-----

Activate Extension

```php:no-line-numbers
public function extension_activate(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::extension_deactivate" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> extension_deactivate ( )   
-----

Deactivate Extension

```php:no-line-numbers
public function extension_deactivate(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::extensions" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> extensions ( )   
-----

Get Extensions

```php:no-line-numbers
public function extensions(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::get_active_extensions" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_active_extensions ( )   
-----

Get Active Extensions

```php:no-line-numbers
public function get_active_extensions(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::danger <a id="UM_Extended_API::get_dev_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_dev_url ( )   
-----

Return the dev URL.

```php:no-line-numbers
private function get_dev_url(  ) : string
```



| | |
|:--------:| ----------- |
| ***Since*** |`v4.1.9`<br />|



***Returns:***

The dev URL.


:::

  
:::danger <a id="UM_Extended_API::get_manifest" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> get_manifest ( )   
-----

Get the manifest to load assets from.

```php:no-line-numbers
private function get_manifest(  ) : array
```



| | |
|:--------:| ----------- |
| ***Since*** |`v4.1.9`<br />|



***Returns:***

An array of files.


:::

  
:::tip <a id="UM_Extended_API::js_handle" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> js_handle ( )   
-----

Get the JS asset handle.

```php:no-line-numbers
public function js_handle( string $asset = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$asset` <Badge text="optional" type="warn"/>| **`string`** | The asset to find the handle for. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|



***Returns:***

The asset handle.


:::

  
:::danger <a id="UM_Extended_API::js_preload_imports" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> js_preload_imports ( )   
-----

Preload JS imports.

```php:no-line-numbers
private function js_preload_imports( string $url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | The asset to load imports for. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_API::live_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> live_url ( )   
-----

Live Plugin URL

```php:no-line-numbers
public function live_url( string $asset ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$asset` | **`string`** | Asset name. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_API::load_manifest" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> load_manifest ( )   
-----

Load Asset from Manifest

```php:no-line-numbers
public function load_manifest( string $asset, boolean $css_dependencies = false ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$asset` | **`string`** | The asset name. |
| `$css_dependencies` <Badge text="optional" type="warn"/>| **`boolean`** | Whether dependencies are CSS. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_API::register_js" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> register_js ( )   
-----

Register the JS to enqueue.

```php:no-line-numbers
public function register_js( string $asset, array $dependencies = array(), mixed $data = null, string $object_name = 'um_extended' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$asset` | **`string`** | The script to load. |
| `$dependencies` <Badge text="optional" type="warn"/>| **`array`** | An array of dependencies. |
| `$data` <Badge text="optional" type="warn"/>| **`mixed`** | Any data to be localized. |
| `$object_name` <Badge text="optional" type="warn"/>| **`string`** | The object name to use when localizing. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_API::register_styles" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> register_styles ( )   
-----

Register the CSS to enqueue.

```php:no-line-numbers
public function register_styles( string $asset, string $handle ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$asset` | **`string`** | The script to load. |
| `$handle` | **`string`** | Handle name. |


| | |
|:--------:| ----------- |
| ***Since*** |`v2.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_API::script_loader_tag" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> script_loader_tag ( )   
-----

Filter the script loader tag if this is our script.

```php:no-line-numbers
public function script_loader_tag( string $tag, string $handle = '', string $src = '' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$tag` | **`string`** | The tag that is going to be output. |
| `$handle` <Badge text="optional" type="warn"/>| **`string`** | The handle for the script. |
| `$src` <Badge text="optional" type="warn"/>| **`string`** | The source. |


| | |
|:--------:| ----------- |
| ***Since*** |`v4.1.9`<br />|



***Returns:***

The modified tag.


:::

  
:::tip <a id="UM_Extended_API::settings_page" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> settings_page ( )   
-----

Settings page

```php:no-line-numbers
public function settings_page(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_API</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_API</span> Properties
  
:::danger <a id="UM_Extended_API::$domain" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $domain   
-----

Domain


```php:no-line-numbers
private $domain = '127.0.0.1';
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::danger <a id="UM_Extended_API::$port" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $port   
-----

Port


```php:no-line-numbers
private $port = '5173';
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::

  
:::danger <a id="UM_Extended_API::$assets" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $assets   
-----

Port


```php:no-line-numbers
private $assets = array('settings');
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_Extended_API</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_WPCLI\Commands\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_WPCLI\Commands\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_WPCLI\Commands\Core</span> Methods
  
:::tip <a id="UM_WPCLI-Commands-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Core::test_security_settings" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> test_security_settings ( )   
-----

Test Security Settings.

```php:no-line-numbers
public function test_security_settings( array $args, array $assoc_args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | Command arguments. |
| `$assoc_args` | **`array`** | Associated arguments. |

***Description:***

Command: wp um security test user=<user_id>

| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Core::test_security_settings_affected_users" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> test_security_settings_affected_users ( )   
-----

Test Affected Users by Banned Capabilities
Command: wp um security affected users

```php:no-line-numbers
public function test_security_settings_affected_users(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Core::test_security_settings_total_flagged_accounts" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> test_security_settings_total_flagged_accounts ( )   
-----

Total Flagged accounts
Command: wp um security flagged users interval=<today|last_hour>

```php:no-line-numbers
public function test_security_settings_total_flagged_accounts( array $args, array $assoc_args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | Command arguments. |
| `$assoc_args` | **`array`** | Associated arguments. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_WPCLI\Commands\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_WPCLI\Commands\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_WPCLI\Commands\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_WPCLI\Commands\Developer`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_WPCLI\Commands\Developer</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_WPCLI\Commands\Developer</span> Methods
  
:::tip <a id="UM_WPCLI-Commands-Developer::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct( string $file = null ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$file` <Badge text="optional" type="warn"/>| **`string`** | Filename. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Developer::create_core_files" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> create_core_files ( )   
-----

Create core file

```php:no-line-numbers
public function create_core_files( string $namespace, string $directory, string $root_plugin_dir, string $plugin_root_dir ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$namespace` | **`string`** | Namespace. |
| `$directory` | **`string`** | Directory path. |
| `$root_plugin_dir` | **`string`** | Root Plugin directory. |
| `$plugin_root_dir` | **`string`** | Plugin roo directory without path. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Developer::handle" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> handle ( )   
-----

Scaffold

```php:no-line-numbers
public function handle( string $namespace, string $directory, string $output = 'composer.json' ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$namespace` | **`string`** | Namespace. |
| `$directory` | **`string`** | Directory source. |
| `$output` <Badge text="optional" type="warn"/>| **`string`** | File output. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_WPCLI-Commands-Developer::scaffold" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> scaffold ( )   
-----

Create Scaffold
Command: wp um dev scaffold \<namespace\>

```php:no-line-numbers
public function scaffold( array $args, array $assoc_args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$args` | **`array`** | Command arguments. |
| `$assoc_args` | **`array`** | Associated arguments. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_WPCLI\Commands\Developer</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_WPCLI\Commands\Developer</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_WPCLI\Commands\Developer</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_WPCLI\Commands\Stripe`    

Class Stripe to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_WPCLI\Commands\Stripe</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_WPCLI\Commands\Stripe</span> Methods
  
:::tip <a id="UM_WPCLI-Commands-Stripe::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_WPCLI\Commands\Stripe</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_WPCLI\Commands\Stripe</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_WPCLI\Commands\Stripe</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Block_Emails\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Block_Emails\Core</span> Constants
    
:::tip API_URL   
-----

CDN API URL

```php:no-line-numbers
API_URL = 'https://rawcdn.githack.com/disposable/disposable-email-domains/master/domains.json';
```

**Type:** **`mixed`**


| | |
|:--------:| ----------- |


:::


### <span style="display: none;">\UM_Extended_Block_Emails\Core</span> Methods
  
:::tip <a id="UM_Extended_Block_Emails-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct( string $file ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$file` | **`string`** | Name of the File. |


| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_Block_Emails-Core::merge_disposable_emails" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> merge_disposable_emails ( )   
-----

Merge Disposble Emails with Blocked Emails

```php:no-line-numbers
public function merge_disposable_emails( string $emails ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$emails` | **`string`** | Existing emails. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Block_Emails-Core::plugin_activation" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> plugin_activation ( )   
-----

Sync list on plugin activation

```php:no-line-numbers
public function plugin_activation(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_Block_Emails-Core::settings" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> settings ( )   
-----

Add settings for Disposable Email Domains

```php:no-line-numbers
public function settings( array $fields ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` | **`array`** | Fields Settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Block_Emails-Core::update_blacklist" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> update_blacklist ( )   
-----

Update Disposable Email Providers

```php:no-line-numbers
public function update_blacklist(  ) : void
```



| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|




:::


#### <span style="display: none;">\UM_Extended_Block_Emails\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Block_Emails\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Block_Emails\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Browser_Detect\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Browser_Detect\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Browser_Detect\Core</span> Methods
  
:::tip <a id="UM_Extended_Browser_Detect-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Browser_Detect-Core::add_predefined_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_predefined_fields ( )   
-----

Add Predefined fields

```php:no-line-numbers
public function add_predefined_fields( array $predefined_fields ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$predefined_fields` | **`array`** | Predefined fields. |


| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|



***Returns:***

$predefined_fields


:::

  
:::tip <a id="UM_Extended_Browser_Detect-Core::render_hidden_field" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> render_hidden_field ( )   
-----

Render Hidden Field

```php:no-line-numbers
public function render_hidden_field( string $output, array $data ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$output` | **`string`** | HTML output. |
| `$data` | **`array`** | Field Data. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Browser_Detect\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Browser_Detect\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Browser_Detect\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Capitalize_Name\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Capitalize_Name\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Capitalize_Name\Core</span> Methods
  
:::tip <a id="UM_Extended_Capitalize_Name-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::admin_notices" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> admin_notices ( )   
-----

Display required server module

```php:no-line-numbers
public function admin_notices(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::apply_capitalization" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> apply_capitalization ( )   
-----

Apply capitlization to the Display Name globally

```php:no-line-numbers
public function apply_capitalization( string $name ) : \UM_Extended_Capitalize_Name\string`
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$name` | **`string`** | Name of a User. |


| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|




:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::column_content" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> column_content ( )   
-----

Adds Display Name in the column

```php:no-line-numbers
public function column_content( string $value, string $column_name, integer $user_id ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$value` | **`string`** | Column value. |
| `$column_name` | **`string`** | Column name. |
| `$user_id` | **`integer`** | the user ID in the loop. |


| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|



***Returns:***

$value modified value.


:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::display_name_column" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> display_name_column ( )   
-----

Adds Custom Column To Users List Table

```php:no-line-numbers
public function display_name_column( array $columns ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$columns` | **`array`** | User table columns. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::hooks" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> hooks ( )   
-----

Apply Capitalization

```php:no-line-numbers
public function hooks(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Capitalize_Name-Core::validate_names" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> validate_names ( )   
-----

Validate Names with different cases

```php:no-line-numbers
public function validate_names( string $name, string $encoding = 'UTF-8' ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$name` | **`string`** | Name. |
| `$encoding` <Badge text="optional" type="warn"/>| **`string`** | String encoding. |


| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|




:::


#### <span style="display: none;">\UM_Extended_Capitalize_Name\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Capitalize_Name\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Capitalize_Name\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Country_Flag\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Country_Flag\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Country_Flag\Core</span> Methods
  
:::tip <a id="UM_Extended_Country_Flag-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Country_Flag-Core::display_flag" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> display_flag ( )   
-----

Display Country Flag.

```php:no-line-numbers
public function display_flag(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Country_Flag-Core::enqueue_library" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> enqueue_library ( )   
-----

Enqueue Country Flag library.

```php:no-line-numbers
public function enqueue_library(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Country_Flag-Core::plugin_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> plugin_url ( )   
-----

Get Plugin URL

```php:no-line-numbers
public function plugin_url(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Country_Flag\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Country_Flag\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Country_Flag\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Cover_Photo\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Cover_Photo\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Cover_Photo\Core</span> Methods
  
:::tip <a id="UM_Extended_Cover_Photo-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::cover_photo_script" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> cover_photo_script ( )   
-----

Clear cover photo cache

```php:no-line-numbers
public function cover_photo_script(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::delete_cover_photo_from_account" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> delete_cover_photo_from_account ( )   
-----

Delete cover photo via the account form

```php:no-line-numbers
public function delete_cover_photo_from_account(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::field_settings_type_min_height" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> field_settings_type_min_height ( )   
-----

Min Height field option

```php:no-line-numbers
public function field_settings_type_min_height( string $edit_mode_value ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$edit_mode_value` | **`string`** | Field value. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::field_settings_type_min_width" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> field_settings_type_min_width ( )   
-----

Min Width field option

```php:no-line-numbers
public function field_settings_type_min_width( string $edit_mode_value ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$edit_mode_value` | **`string`** | Field value. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::modify_field_option" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> modify_field_option ( )   
-----

Add columns in field settings

```php:no-line-numbers
public function modify_field_option( array $fields ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` | **`array`** | Field settings. |


| | |
|:--------:| ----------- |



***Returns:***

$fields


:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::photo_name" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> photo_name ( )   
-----

Change filename

```php:no-line-numbers
public function photo_name( string $dir, string $filename, string $ext ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$dir` | **`string`** | Directory name. |
| `$filename` | **`string`** | Uploading file name. |
| `$ext` | **`string`** | Extension of the uploading file. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::predefined_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> predefined_fields ( )   
-----

Add new predefined field "Cover Photo" in UM Form Builder.

```php:no-line-numbers
public function predefined_fields( array $arr ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$arr` | **`array`** | field array settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::set_temp_user_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_temp_user_id ( )   
-----

Set Temporary user id

```php:no-line-numbers
public function set_temp_user_id(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::um_registration_set_cover_photo" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_registration_set_cover_photo ( )   
-----

Multiply Cover Photo with different sizes

```php:no-line-numbers
public function um_registration_set_cover_photo( integer $user_id, array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | the user ID. |
| `$args` | **`array`** | Field settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::um_user_pre_updating_files_array" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_user_pre_updating_files_array ( )   
-----

Remove cover photo field from the default uploader for Profile forms

```php:no-line-numbers
public function um_user_pre_updating_files_array( array $files ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$files` | **`array`** | Files. |


| | |
|:--------:| ----------- |



***Returns:***

$files


:::

  
:::tip <a id="UM_Extended_Cover_Photo-Core::upload_handler" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> upload_handler ( )   
-----

Set handler callback for filename

```php:no-line-numbers
public function upload_handler( array $override_handler ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$override_handler` | **`array`** | WP Media uploader handler. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Cover_Photo\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Cover_Photo\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Cover_Photo\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Cron_Delete\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Cron_Delete\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Cron_Delete\Core</span> Methods
  
:::tip <a id="UM_Extended_Cron_Delete-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cron_Delete-Core::delete_users_awaiting_email" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> delete_users_awaiting_email ( )   
-----

Delete Users awating email

```php:no-line-numbers
public function delete_users_awaiting_email(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Cron_Delete\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Cron_Delete\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Cron_Delete\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Cronjob_Activation_Email\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Cronjob_Activation_Email\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Cronjob_Activation_Email\Core</span> Methods
  
:::tip <a id="UM_Extended_Cronjob_Activation_Email-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Cronjob_Activation_Email-Core::resend_activation_notify" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> resend_activation_notify ( )   
-----

Resend email confirmation link to those users with expired secret hash

```php:no-line-numbers
public function resend_activation_notify(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Cronjob_Activation_Email\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Cronjob_Activation_Email\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Cronjob_Activation_Email\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Dummy_Accounts\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Dummy_Accounts\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Dummy_Accounts\Core</span> Methods
  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::admin_addon_hook" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> admin_addon_hook ( )   
-----

Admin Form hook

```php:no-line-numbers
public function admin_addon_hook( string $hook ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$hook` | **`string`** | Form hook. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::admin_init" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> admin_init ( )   
-----

Admin Init

```php:no-line-numbers
public function admin_init(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::admin_menu" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> admin_menu ( )   
-----

Register Admin Menu

```php:no-line-numbers
public function admin_menu(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::content" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> content ( )   
-----

Menu content

```php:no-line-numbers
public function content(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::disable_emails" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> disable_emails ( )   
-----

Disable Email handler

```php:no-line-numbers
public function disable_emails(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::render_form" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> render_form ( )   
-----

Admin Render Form

```php:no-line-numbers
public function render_form(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Dummy_Accounts\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Dummy_Accounts\Core</span> Properties
  
:::tip <a id="UM_Extended_Dummy_Accounts-Core::$content" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $content   
-----

Content


```php:no-line-numbers
public $content;
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_Extended_Dummy_Accounts\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Fields_Counter\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Fields_Counter\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Fields_Counter\Core</span> Methods
  
:::tip <a id="UM_Extended_Fields_Counter-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Fields_Counter-Core::assets" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> assets ( )   
-----

Register Assets

```php:no-line-numbers
public function assets(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Fields_Counter-Core::field_length_limit" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> field_length_limit ( )   
-----

Add field attributes

```php:no-line-numbers
public function field_length_limit( array $field_atts, string $key, array $data ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$field_atts` | **`array`** | Field attributes. |
| `$key` | **`string`** | Field key / meta key. |
| `$data` | **`array`** | Field data. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Fields_Counter-Core::plugin_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> plugin_url ( )   
-----

Get Plugin URL

```php:no-line-numbers
public function plugin_url(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Fields_Counter\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Fields_Counter\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Fields_Counter\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Math_Captcha\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Math_Captcha\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Math_Captcha\Core</span> Methods
  
:::tip <a id="UM_Extended_Math_Captcha-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Math_Captcha-Core::captcha_field" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> captcha_field ( )   
-----

Render Captcha Field

```php:no-line-numbers
public function captcha_field(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Math_Captcha-Core::captcha_validate" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> captcha_validate ( )   
-----

Validate Captcha

```php:no-line-numbers
public function captcha_validate( array $post_form ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$post_form` | **`array`** | Form data. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Math_Captcha\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Math_Captcha\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Math_Captcha\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Pass_Strength\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Pass_Strength\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Pass_Strength\Core</span> Methods
  
:::tip <a id="UM_Extended_Pass_Strength-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Pass_Strength-Core::enqueue_assets" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> enqueue_assets ( )   
-----

Enqueue Assets

```php:no-line-numbers
public function enqueue_assets(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Pass_Strength-Core::plugin_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> plugin_url ( )   
-----

Get Plugin URL

```php:no-line-numbers
public function plugin_url(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Pass_Strength\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Pass_Strength\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Pass_Strength\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Profile_Photo\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Profile_Photo\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Profile_Photo\Core</span> Methods
  
:::tip <a id="UM_Extended_Profile_Photo-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::delete_profile_photo_from_account" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> delete_profile_photo_from_account ( )   
-----

Delete Profile Photo via the account form

```php:no-line-numbers
public function delete_profile_photo_from_account(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::field_settings_type_min_height" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> field_settings_type_min_height ( )   
-----

Min Height field option

```php:no-line-numbers
public function field_settings_type_min_height( string $edit_mode_value ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$edit_mode_value` | **`string`** | Field value. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::field_settings_type_min_width" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> field_settings_type_min_width ( )   
-----

Min Width field option

```php:no-line-numbers
public function field_settings_type_min_width( string $edit_mode_value ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$edit_mode_value` | **`string`** | Field value. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::modify_field_option" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> modify_field_option ( )   
-----

Add columns in field settings

```php:no-line-numbers
public function modify_field_option( array $fields ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` | **`array`** | Field settings. |


| | |
|:--------:| ----------- |



***Returns:***

$fields


:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::photo_name" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> photo_name ( )   
-----

Change filename

```php:no-line-numbers
public function photo_name( string $dir, string $filename, string $ext ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$dir` | **`string`** | Directory name. |
| `$filename` | **`string`** | Uploading file name. |
| `$ext` | **`string`** | Extension of the uploading file. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::predefined_fields" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> predefined_fields ( )   
-----

Add new predefined field "Profile Photo" in UM Form Builder.

```php:no-line-numbers
public function predefined_fields( array $arr ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$arr` | **`array`** | field array settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::profile_photo_script" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> profile_photo_script ( )   
-----

Clear Profile Photo cache

```php:no-line-numbers
public function profile_photo_script(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::set_temp_user_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_temp_user_id ( )   
-----

Set Temporary user id

```php:no-line-numbers
public function set_temp_user_id(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::um_registration_set_profile_photo" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_registration_set_profile_photo ( )   
-----

Multiply Profile Photo with different sizes

```php:no-line-numbers
public function um_registration_set_profile_photo( integer $user_id, array $args ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | the user ID. |
| `$args` | **`array`** | Field settings. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::um_user_pre_updating_files_array" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_user_pre_updating_files_array ( )   
-----

Remove Profile Photo field from the default uploader for Profile forms

```php:no-line-numbers
public function um_user_pre_updating_files_array( array $files ) : array
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$files` | **`array`** | Files. |


| | |
|:--------:| ----------- |



***Returns:***

$files


:::

  
:::tip <a id="UM_Extended_Profile_Photo-Core::upload_handler" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> upload_handler ( )   
-----

Set handler callback for filename

```php:no-line-numbers
public function upload_handler( array $override_handler ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$override_handler` | **`array`** | WP Media uploader handler. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Profile_Photo\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Profile_Photo\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Profile_Photo\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Regenerate_Thumbnails\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Regenerate_Thumbnails\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Regenerate_Thumbnails\Core</span> Methods
  
:::tip <a id="UM_Extended_Regenerate_Thumbnails-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Regenerate_Thumbnails-Core::add_submenu" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_submenu ( )   
-----

Add Submenu

```php:no-line-numbers
public function add_submenu(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Regenerate_Thumbnails-Core::menu_content" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> menu_content ( )   
-----

Form

```php:no-line-numbers
public function menu_content(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Regenerate_Thumbnails-Core::process_resize" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> process_resize ( )   
-----

Regenerate Thumbnails

```php:no-line-numbers
public function process_resize(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Regenerate_Thumbnails\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Regenerate_Thumbnails\Core</span> Properties
  
:::tip <a id="UM_Extended_Regenerate_Thumbnails-Core::$processed_users" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> $processed_users   
-----

Processed Users


```php:no-line-numbers
public $processed_users = '';
```

***Types:***
- `mixed`


| | |
|:--------:| ----------- |


:::


#### <span style="display: none;">\UM_Extended_Regenerate_Thumbnails\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Set_Password\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Set_Password\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Set_Password\Core</span> Methods
  
:::tip <a id="UM_Extended_Set_Password-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Set_Password-Core::add_email_template_placeholder" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_email_template_placeholder ( )   
-----

Add set password placeholder tag

```php:no-line-numbers
public function add_email_template_placeholder( array $placeholders ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$placeholders` | **`array`** | Placeholder array. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Set_Password-Core::change_password_set_message" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> change_password_set_message ( )   
-----

Add custom message for Login

```php:no-line-numbers
public function change_password_set_message( string $success, string $key ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$success` | **`string`** | Success Message. |
| `$key` | **`string`** | Message key. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Set_Password-Core::password_has_changed" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> password_has_changed ( )   
-----

Redirect with parameter to set Password text

```php:no-line-numbers
public function password_has_changed( integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | User ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Set_Password-Core::set_password_add_replace_placeholder" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_password_add_replace_placeholder ( )   
-----

Generate set password link for placeholder

```php:no-line-numbers
public function set_password_add_replace_placeholder( array $replace_placeholders ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$replace_placeholders` | **`array`** | . |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Set_Password-Core::set_password_text" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> set_password_text ( )   
-----

Set Password text

```php:no-line-numbers
public function set_password_text(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Set_Password\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Set_Password\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Set_Password\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_User_Shortcode\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_User_Shortcode\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_User_Shortcode\Core</span> Methods
  
:::tip <a id="UM_Extended_User_Shortcode-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_User_Shortcode-Core::shortcode" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> shortcode ( )   
-----

Returns a user meta value
Usage [um_user user_id="" meta_key="" ] // leave user_id empty if you want to retrive the current user's meta value.

```php:no-line-numbers
public function shortcode( array $atts ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$atts` | **`array`** | shortcode attributes. |

***Description:***

meta_key is the field name that you've set in the UM form builder
You can modify the return meta_value with filter hook 'um_user_shortcode_filter__{$meta_key}'

| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_User_Shortcode\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_User_Shortcode\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_User_Shortcode\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Vcard\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Vcard\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Vcard\Core</span> Methods
  
:::tip <a id="UM_Extended_Vcard-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Vcard-Core::add_field" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> add_field ( )   
-----

Add Vcard predefined field.

```php:no-line-numbers
public function add_field( array $fields ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$fields` | **`array`** | predefined fields array. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Vcard-Core::generate" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> generate ( )   
-----

Generate VCard on profile update

```php:no-line-numbers
public function generate( integer $user_id ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$user_id` | **`integer`** | The current user's ID. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Vcard-Core::image_encode" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> image_encode ( )   
-----

Image Encode

```php:no-line-numbers
public function image_encode( string $path ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$path` | **`string`** | Vcard File path. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Vcard\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Vcard\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Vcard\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_Extended_Yoast_Seo\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_Extended_Yoast_Seo\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_Extended_Yoast_Seo\Core</span> Methods
  
:::tip <a id="UM_Extended_Yoast_Seo-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::author_link" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> author_link ( )   
-----

Change author URLs to UM Profile URLs in Author archive sitemap

```php:no-line-numbers
public function author_link( string $link, integer $author_id, string $author_nicename ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$link` | **`string`** | Author Link. |
| `$author_id` | **`integer`** | Author ID. |
| `$author_nicename` | **`string`** | Author Name. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::change_opengraph_image_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> change_opengraph_image_url ( )   
-----

Change Twitter/Open Graph Image URL

```php:no-line-numbers
public function change_opengraph_image_url( string $url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | Open Graph Image URL. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::change_opengraph_type" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> change_opengraph_type ( )   
-----

Change Open Graph Type to Profile

```php:no-line-numbers
public function change_opengraph_type( string $type ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$type` | **`string`** | Open Graph Type. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::opengraph_title" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> opengraph_title ( )   
-----

Change OpenGraph/Twitter Title to UM Profile Title.

```php:no-line-numbers
public function opengraph_title( string $name ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$name` | **`string`** | Open graph title. |

***Description:***

Go to UM > Settings > Misc > see "User Profile Title" & "User Profile Dynamic Meta Description"

| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::opengraph_url" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> opengraph_url ( )   
-----

Change Open Graph URL to UM Profile URL

```php:no-line-numbers
public function opengraph_url( string $url ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | Open Graph URL. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::profile_dynamic_meta_desc" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> profile_dynamic_meta_desc ( )   
-----

Add extra meta tags not available from Yoast SEO to the User Profile Page

```php:no-line-numbers
public function profile_dynamic_meta_desc(  ) : void
```



| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::sitemap_exclude_author" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> sitemap_exclude_author ( )   
-----

Add all UM Profiles to Author archive sitemap

```php:no-line-numbers
public function sitemap_exclude_author( array $users ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$users` | **`array`** | Users. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::um_custom_wpseo_opengraph_site" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> um_custom_wpseo_opengraph_site ( )   
-----

Change Twitter site/creator account to UM field twitter value

```php:no-line-numbers
public function um_custom_wpseo_opengraph_site( string $site ) : void
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$site` | **`string`** | Site creator/account. |


| | |
|:--------:| ----------- |




:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::user_yoast_canonical" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> user_yoast_canonical ( )   
-----

Change canonical URL to UM Profile URL

```php:no-line-numbers
public function user_yoast_canonical( string $url ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$url` | **`string`** | Canonical URL. |


| | |
|:--------:| ----------- |



***Returns:***

$url


:::

  
:::tip <a id="UM_Extended_Yoast_Seo-Core::wpseo_get_twitter_id" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> wpseo_get_twitter_id ( )   
-----

Get twitter ID from string URL

```php:no-line-numbers
public function wpseo_get_twitter_id( string $id ) : string
```

| Parameter | Type(s) | Description |
|-----------|------|-------------|
| `$id` | **`string`** | Twitter ID. |


| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_Extended_Yoast_Seo\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_Extended_Yoast_Seo\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_Extended_Yoast_Seo\Core</span> Inherited properties
> This class has not inherited properties.
        
##  `UM_WPCLI\Core`    

Class Core to handle all plugin initialization.






|     |     |
| ---:|:--- |
| **Extends** |_Nothing_|
| **Implements** |_Nothing_|
| **Uses** |_Nothing_|

| | |
|:--------:| ----------- |
| ***Since*** |`v1.0.0`<br />|


### <span style="display: none;">\UM_WPCLI\Core</span> Constants
> This class has not constants.

### <span style="display: none;">\UM_WPCLI\Core</span> Methods
  
:::tip <a id="UM_WPCLI-Core::__construct" style="display: block; position: relative; top: -5rem; visibility: hidden;"></a> __construct ( )   
-----

Init

```php:no-line-numbers
public function __construct(  ) : void
```



| | |
|:--------:| ----------- |




:::


#### <span style="display: none;">\UM_WPCLI\Core</span> Inherited methods
> This class has not inherited methods.

### <span style="display: none;">\UM_WPCLI\Core</span> Properties
> This class has not properties.

#### <span style="display: none;">\UM_WPCLI\Core</span> Inherited properties
> This class has not inherited properties.

--------

<div class="page-edit">
    <div class="last-updated">
        <span class="prefix">Auto-generated at: </span>
        <span class="time">2023-11-07, 1:11 PM</span>
    </div>
</div>



