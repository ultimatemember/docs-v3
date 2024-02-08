---
---
# Import Existing Subscription Prices from your Stripe Account
 To save you time, Ultimate Member added a feature where you can simply import the created or existing subscription prices from your Stripe account. When you import the prices, it adds a role to each status automatically. The default role in each subscription status is the role that is set in <strong>WP Admin &gt; Settings &gt; General &gt; New User Default Role</strong>. Ensure that you have read the  [Stripe - Setting up Webhook and Test/Public Keys article](/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys)  before you proceed with the steps below.

 The following steps will guide you on how to import your existing subscription prices from your Stripe account:

- Go to <strong>wp-admin&gt;Ultimate Member&gt; Settings&gt; Extensions&gt;Stripe.</strong>
- Click the <strong>"Import Prices from your Stripe Account"</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6e9131280097516451b76/file-J0CN3UAIMN.png)
- Once the import is done, It will display all the existing subscription prices you have created in Stripe.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6ea1620e3b82eb738e108/file-AsoMN245C0.png)
- When you import prices from the Stripe.com account, it should create Stripe Plans automatically and be ready to use. Go to <strong>wp-admin&gt; Ultimate Member&gt; Stripe Plans</strong>. You can see here the following: 
    - <strong>Plan ID</strong> - You can use this to set the Stripe field's default selected plan in the Register form via the Form Builder
    - <strong>Type</strong> - This column displays whether the plan is a one-time or recurring subscription.
    - <strong>Price</strong> - This column displays the price of the subscription plan.
    - <strong>Mode</strong> - This column displays the mode in which your prices were imported. The Sandbox displays orange icons indicating that prices were created or imported in Test Mode. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6ef0e270765339befc79f/file-BXP6icxS50.png)
- When you try to edit the Stripe Plan, you will also notice that the <strong>Stripe Type/Mode</strong> and <strong>Stripe Price</strong> are <strong>locked</strong>. This is done to avoid interfering with the Site's and Stripe.com's subscriptions.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6f307270765339befc7a1/file-AUUY1YkK9L.png)
- You can still create your Stripe Plans manually in  <strong>UM &gt; Stripe Plans &gt; Add New.</strong> For more info, read this  [article.](/docs-v3/um-stripe/article/1617-create-subscription-prices)