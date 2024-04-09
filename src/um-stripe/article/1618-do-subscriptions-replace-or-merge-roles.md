---
---
# Stripe FAQ - Do Subscriptions Replace or Merge Roles?
 When a subscription status changes in the Stripe Plan, it typically assigns a new role to a user in addition to their existing role. However, if you prefer to change roles instead of combining them, you can enable an option to do so. To enable this option, navigate to  <strong>WP-Admin &gt; Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe</strong>, and enable the <strong>"Replace existing roles when a subscription status changes"</strong> setting.

 By default, when the status of a Stripe subscription changes, the extension combines the new role with any existing roles. This means that users will have both their old and new roles. If you enable the <strong>"Replace existing roles when a subscription status changes</strong><strong>"</strong> option, it will remove the existing roles and assign only the new role when a subscription status changes.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660ae0768f8fca7f5efd37ee/file-iPWOYInObz.png)

> <strong>Note:</strong> This will replace all roles when "replace existing roles" is enabled/checked. If you're using an Administrator account, the role will not change. It's best to use a subscriber account as a test account.