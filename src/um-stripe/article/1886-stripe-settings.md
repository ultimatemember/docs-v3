---
---
# Stripe Settings
### Overview

 Effortless online payments are a cornerstone of e-commerce and digital businesses. The Stripe Settings put the power of secure, customizable payment processing at your fingertips. With these settings, you can fine-tune your Stripe integration to suit your business needs, enabling seamless, reliable transactions.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539cd81e4e85872dc27774c/file-hrj6mkvnb4.png)

### Stripe Settings

 To begin the configuration of your settings, navigate to <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Extension &gt; Stripe</strong>. Below, you will discover the following settings:

- <strong>Sandbox/Test mode</strong> - This setting enables you to turn on or off the mode. Checking the box enables the test mode, and unchecking turns it off. 
    - If checked or enabled, it will be in test mode. The Test Publishable key &amp; Test secret key will appear below this setting.
    - If unchecked or disabled, it will be on live mode. Live Publishable Key &amp; Live Restricted key will appear below this setting. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539d37fe4e85872dc27774e/file-p6Ww0fEBFO.gif)
- <strong>Test Publishable Key</strong> - This setting is a field where you can paste the test publishable key. 
    - <strong>Live Publishable Key</strong> - This setting is a field where you can paste the live publishable key.
- <strong>Test Secret Key</strong> - This setting is a field where you can paste the test secret key. It is recommended to use a Secret Key for local or staging sites for testing purposes. 
    - <strong>Live Restricted Key</strong> - This setting is a field where you can paste the live restricted key. It is recommended that you use a Restricted Key for live sites.
- <strong>Buttons</strong>
    - <strong>Connect with Stripe</strong> -When you enter the keys in their designated fields, this button becomes available. When clicked, it triggers the Stripe extension to create a new webhook endpoint for your Stripe account settings.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539e1e76a23f959ef28c9b8/file-znIY5sLyKY.png) If connected successfully, it will display these buttons:  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539e4596a23f959ef28c9b9/file-WkDKUKRJPa.png) 
        - <strong>Disconnect Stripe Account</strong> - If clicked, this will disconnect your site from your Stripe account.
        - <strong>Import Prices from your Stripe account</strong> - Clicking this button will initiate the import of the prices you've created from your Stripe account. When you import Stripe prices, the imported prices will be showcased in a scroll box, and it will establish Ultimate Member Stripe Plans. Each plan will come with unique settings for assigning roles based on subscription status. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539ed274d16353d6b29266c/file-xugWscQ8me.png)
- <strong>Webhook Endpoints</strong> - Once you click the "Connect with Stripe" button, the webhook endpoint will be automatically integrated into your Stripe account. If this process does not succeed, you have the option to copy the webhook endpoint within this setting.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539ef666a23f959ef28c9bc/file-bdCUzIlTAz.png)
- <strong>Replace existing roles when subscription status has changed -</strong> By default, the Stripe module merges the user's role when subscription statuses change. You have the option to modify this behavior to replace roles instead of merging them in this setting. If you enabled or checked this setting, will replace <strong>all</strong> roles. If you are logged in as an administrator, the role will remain unaffected.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539f3c06a23f959ef28c9be/file-duhhvH2Guc.png)
- <strong>Test Clock</strong> - This setting needs to be enabled if you're  [testing your integration with Stripe test clocks](https://ultimatemember.github.io/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks) , because it will create the Stripe customer for your test clock. If checked or enabled, a field will appear; it is for the test clock ID.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539f5d503e87e076b635f03/file-AvVG4ZO976.png)
- <strong>Disable Activity Logs</strong> - This feature logs all users' activities related to the subscriptions and onboarding process of User Registrations with Stripe fields or direct Subscribe URL.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539f6ac6a23f959ef28c9bf/file-WTOYYic3XK.png)
- <strong>Stripe Embedded Checkout</strong> - This setting allows you to host Stripe’s checkout form on your site instead of using the initial version’s checkout feature that redirects users to the Stripe-hosted checkout page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539f75be4e85872dc27775a/file-mdVNK0rnaV.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539fa4a03e87e076b635f04/file-PZaL2Wpoh5.png)