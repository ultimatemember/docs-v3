---
layout: UMLayout
sidebarDepth: 0
---
# Actions
> **Where to put the code?**
>
> Any time you add a custom PHP function to your site, insert it in the Code Snippets plugin (recommended), a child theme's functions.php, or your custom plugin. The [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin is the recommended option. 
>> **IMPORTANT:** Before making any PHP changes, make sure you have FTP access so you can still access your site if there are any mistakes in your code. 
>
> You can find more details in the  [WordPress docs](https://developer.wordpress.org/plugins/hooks/) if you need to get more familiar with using WordPress filters.
## [um_stripe_webhook_payload_event_init](./actions/um_stripe_webhook_payload_event_init)<Badge text="Since 1.0.0" vertical="middle" />

Catch Stripe's Webhook Payload Events
## [um_submit_form_register](./actions/um_submit_form_register)

## [umm_stripe_session_completed](./actions/umm_stripe_session_completed)
Triggers when the checkout session is completed.
## [umm_stripe_status_active](./actions/umm_stripe_status_active)
Triggers when the payments have been succesfully made.
## [umm_stripe_status_canceled](./actions/umm_stripe_status_canceled)
Triggers when the subscriptions has been cancelled.
## [umm_stripe_status_incomplete](./actions/umm_stripe_status_incomplete)
Triggers when the subscription is `incomplete`
## [umm_stripe_status_incomplete_expired](./actions/umm_stripe_status_incomplete_expired)
Triggers when the charge has expired
## [umm_stripe_status_onetime_refunded](./actions/umm_stripe_status_onetime_refunded)
Triggers when the charge is refunded.
## [umm_stripe_status_past_due](./actions/umm_stripe_status_past_due)
Triggers when the subscription is `pass due`
## [umm_stripe_status_pause](./actions/umm_stripe_status_pause)
Triggers when the subscriptions has been pause
## [umm_stripe_status_revoked](./actions/umm_stripe_status_revoked)<Badge text="Since 1.0.0" vertical="middle" />

Fires once a subscription & account status has been revoked from a WP account.
## [umm_stripe_status_trialing](./actions/umm_stripe_status_trialing)
Triggers when the subscriptions has been trialing
## [umm_stripe_status_unpaid](./actions/umm_stripe_status_unpaid)
Triggers when the subscription is `unpaid`
## [umm_stripe_status_{$status}](./actions/umm_stripe_status_{$status})
Assign Role based on the role set in the Stripe Plan settings.
