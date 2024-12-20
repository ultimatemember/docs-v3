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
## [um_stripe_api_version](./filters/um_stripe_api_version)
Validates the Stripe API keys when receiving the Webhook Payload This invokes the admin notice when keys are invalid.
## [um_stripe_checkout_sessions_create_args](./filters/um_stripe_checkout_sessions_create_args)<Badge text="Since 1.0.0" vertical="middle" />

Filter array before checkout sessions creation
## [um_stripe_customer_portal_subscription_cancel__enabled](./filters/um_stripe_customer_portal_subscription_cancel__enabled)<Badge text="Since 1.2.5" vertical="middle" />

Filter to Enable Subscription Cancellation feature in Customer Portal
## [um_stripe_enable_unique_billing_email](./filters/um_stripe_enable_unique_billing_email)<Badge text="Since 1.0.0" vertical="middle" />

Allow unique billing email
## [um_stripe_filter__is_subscribed_query](./filters/um_stripe_filter__is_subscribed_query)<Badge text="Since 1.4.3" vertical="middle" />

Filter Subcriptions query
## [um_stripe_webhook_name](./filters/um_stripe_webhook_name)<Badge text="Since 1.0.0" vertical="middle" />

Modify Stripe Webhook name
## [umm_stripe_already_subscribed_text](./filters/umm_stripe_already_subscribed_text)<Badge text="Since 1.0.0" vertical="middle" />

Modify text that's displayed when a user is already subscribed.
## [umm_stripe_billing_configuration](./filters/umm_stripe_billing_configuration)<Badge text="Since 1.0.0" vertical="middle" />

Filter billing configuration before creating the Stripe billing portal.
## [umm_stripe_billing_portal_session_configuration](./filters/umm_stripe_billing_portal_session_configuration)<Badge text="Since 1.0.8" vertical="middle" />

Filter billing portal session configuration before creating the Stripe billing portal.
## [umm_stripe_checkout_details_date_format](./filters/umm_stripe_checkout_details_date_format)<Badge text="Since 1.0.2" vertical="middle" />

Change date format in Checkout details
## [umm_stripe_predefined_pages_restricted](./filters/umm_stripe_predefined_pages_restricted)<Badge text="Since 1.0.0" vertical="middle" />

Restrict predefined pages.
## [umm_stripe_roles_exclude_from_list](./filters/umm_stripe_roles_exclude_from_list)<Badge text="Since 1.0.0" vertical="middle" />

Exclude protected roles from the List
