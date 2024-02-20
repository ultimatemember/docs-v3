---
---
# Display Subscription Status, Invoices and Active Subscriptions in the Admin screen
 The Stripe Extension has features that display subscription status, invoices, and active subscriptions on the admin screen. This article will explain how to use the features.

#### Display Subscription Status

 When you have successfully set up your Stripe Extension, go to <strong>wp-admin &gt; Users</strong>. Here you'll see the following subscription statuses for your users:

| <strong>Active</strong> | displays when the user's subscription is active |
|---|---|
| <strong>Inactive</strong> | displays when the user's subscription is inactive |
| <strong>Trialing</strong> | displays when the user's subscription is trialing |
| <strong>Canceled</strong> | displays when the user's subscription is canceled |
| <strong>Revoked</strong> | displays when the user's subscription has been revoked after assigning the Stripe customer to another WP account |
| <strong>Unpaid</strong> | displays when the user's subscription is unpaid |
| <strong>Past Due</strong> | displays when the user's subscription is past due |
| <strong>Paused</strong> | displays when the user's subscription is paused |

 The " <strong>View on Stripe"</strong> link under each status opens a new tab to your customer's Stripe overview page

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6c5761280097516451b67/file-6FSaN0cQG0.png)

#### Invoices and Active Subscriptions

 When you edit a user with an <strong>active subscription status</strong> in <strong>wp-admin &gt; Users</strong>, you'll be able to see the user's or customer's subscriptions and invoices table under the <strong>Ultimate Member Stripe</strong> section.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6c64430c1875e8e0675bb/file-GTSL8Mb5xw.png)

 The invoice table will only display the most recent invoices, not all. You need to click the  <strong>"Manage on Stripe"</strong> link, which will open a new tab to the customer overview on Stripe.com.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6c7011280097516451b6a/file-KW4C8CGO3c.png)

 <strong>Note: You may test or create a simulation of how the statuses change when testing your integration with Stripe test clocks. See</strong>  [/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks](/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks)  <strong>for more information.</strong>