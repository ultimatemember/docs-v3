---
sidebarDepth: 0
---
# Actions
> **Where to put the code?**
>
> Any time you add a custom PHP function to your site, insert it in the Code Snippets plugin (recommended), a child theme's functions.php, or your custom plugin. The [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin is the recommended option. 
>> **IMPORTANT:** Before making any PHP changes, make sure you have FTP access so you can still access your site if there are any mistakes in your code. 
>
> You can find more details in the  [WordPress docs](https://developer.wordpress.org/plugins/hooks/) if you need to get more familiar with using WordPress action/filters.
## [umm_stripe_status_active](./actions/umm_stripe_status_active)<Badge text="Since 1.0.0" vertical="middle" />

Triggers when the payments have been succesfully made.
## [umm_stripe_status_changed](./actions/umm_stripe_status_changed)<Badge text="Since 1.0.2" vertical="middle" />

Triggers when the status has changed
## [umm_stripe_status_revoked](./actions/umm_stripe_status_revoked)<Badge text="Since 1.0.0" vertical="middle" />

Fires once a subscription & account status has been revoked from a WP account.
## [umm_stripe_status_{$status}](./actions/umm_stripe_status___status_)<Badge text="Since 1.0.0" vertical="middle" />

Assign Role based on the role set in the Stripe Plan settings.
