---
---
# Setting up Webhook and Test/Public Keys
 To get started, first, you must set up the integration by adding your Stripe keys and generating the Webhook URL.

### Test/Publish Keys

 You can retrieve the Test/Publishable Key and Secret Key from the &gt;  [Stripe Dashboard](https://dashboard.stripe.com/)  &gt; Developers &gt; API Keys. Copy the keys and add them within the Stripe plugin settings ( Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe ).

> <strong>Note:</strong> We recommend that you use a <strong>Restricted Key</strong> for live sites and a <strong>Secret Key</strong> for local or staging sites for testing purposes. More details can be found in this  [article](https://stripe.com/docs/keys#limit-access) .  
> - <strong>Restricted Key</strong> for live sites
> - <strong>Test Publishable Key</strong> for the sandbox mode
> - <strong>Live Publishable Key</strong> for live mode

Restricted Key Settings
-----------------------

 We are now using the restricted key instead of the standard secret key. To set your Restricted Key, navigate to <strong>Stripe Dashboard&gt;Developers&gt;Api Key&gt;Restricted Key</strong> and Click <strong>+Edit</strong> or <strong>+Create Restricted Key</strong> button.

 Enter a key name and look for the resource types listed below in the API Keys and configure the necessary API permissions: 

  <strong>Resource Type</strong>   <strong>Permissions</strong>   Customers   Write   Checkout Sessions   Write   Customer portal   Write   Prices   Read   Subscriptions   Read   Webhook Endpoints   Write  Once you're done setting up the restricted key, click the  <strong>"Create Key"</strong> button, at the bottom right to save your settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650a97d99446233b93527fbb/file-CTgXmhPKdu.png)



 Webhook
--------

 Stripe uses webhooks to communicate with your site. It provides information such as the status of the payment or subscription and is used to update the user's role based on subscription events from Stripe's side of things. This also updates the price and product details on your site when you change them on your stripe.com account.

 When you check/uncheck the <strong>"Sandbox/Test Mode"</strong>, you will notice the fields' labels are changing. When checked, the fields will be in test mode, if it is unchecked it means that it is in live mode.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649e7c9dcfd7fe604a7fe4a7/file-BeAy5kC8DH.png)

 In the Stripe settings, you'll find a webhook endpoint ready for you to copy and paste into your Stripe.com account. When you connect with Stripe, it automatically generates the Webhook URL based on the current domain of your site and adds the event hooks to the Webhook settings on your Stripe account. More details are listed below:

- Head to <strong>U</strong><strong>ltimate Member &gt; Settings &gt; Extensions&gt; Stripe</strong>. Beside the Webhook Endpoints section is where you can copy your Webhook endpoint URL or when you have added the API Keys, Press on the <strong>"Connect with stripe"</strong> button, and your Webhook endpoint will be added instantly to your Stripe account settings.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653736309362491a4094aecb/file-7F0W5vyhpe.png)
- When you try to click on <strong>"Connect with Stripe"</strong>, it should validate the Publishable key and Secret key. It will show an error message when they are invalid.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d348642d97d1c045913a2/file-1aCXRBBaU2.png)
- When successfully connected, it should show the  <strong>"Disconnect Stripe account"</strong> and <strong>"Import Prices from your Stripe account"</strong> buttons. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d357905231a0b51d232e8/file-bUpDJLwy2J.png)
- When you attempt to connect with Stripe, the error shown in the image below will appear if the Stripe extension is installed on localhost or your own computer and is utilizing a local domain. For a site to receive the payload or events from the Stripe.com events transactions, the Webhook URL for Stripe must be publicly accessible.  <strong>Even if this webhook creation error occurs, you can still import pricing locally.</strong>  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/646b612637f16f5e28f5e72c/file-bPQiO1aMtK.png)
- Next, in your Stripe Dashboard, go to  [Webhook Setting](https://dashboard.stripe.com/webhooks)  and check if the webhook URL has been added to the webhook endpoint. There may be a delay before it appears, so please wait a few seconds or try to reload the Stripe page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d37d3dfdf44337125d6b8/file-uv47d7EVe0.png)
- To view the events, click the webhook endpoint URL. When you click on the Connect with Stripe button from the previous step above, it auto-generates the following event hooks(17): 
    - charge.expired
    - charge.failed
    - charge.pending
    - charge.refunded
    - charge.succeeded
    - checkout.session.completed
    - checkout.session.expired
    - customer.created
    - customer.deleted
    - customer.subscription.updated
    - customer.subscription.created
    - customer.subscription.deleted
    - customer.subscription.pending\_update\_expired
    - customer.subscription.updated
    - payment\_intent.payment\_failed
    - price.deleted
    - price.updated
    - product.updated
- If the site experiences an error, as seen in the screenshot below, the webhook triggers retries after an hour. If you need a trigger immediately, press the "Resend" button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/646f8dcb1335a10611d0a8c5/file-giLYcPlYl7.png)
- Depending on which you set up first, you can repeat this process for your live Webhook Secret or vice versa.

 <strong>NEXT:  [Setting up Stripe Success and Cancel Payment Pages](../article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages)</strong>