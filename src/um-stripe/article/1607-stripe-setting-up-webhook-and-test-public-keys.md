---
---
# Setting up Webhook and Test/Public Keys
 To get started, first, you must set up the integration by adding your Stripe keys and generating the Webhook URL.

### Test/Publish Keys

 You can retrieve the Test/Publishable Key and Secret Key from the &gt;  [Stripe Dashboard](https://dashboard.stripe.com/)  &gt; Developers &gt; API Keys. Copy the keys and add them within the Stripe plugin settings ( Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe )

> <strong>Note:</strong> We recommend that you use a <strong>Restricted Key</strong> for live sites and a <strong>Secret Key</strong> for local or staging sites for testing purposes. More details can be found in this  [article](https://stripe.com/docs/keys#limit-access) .  
> - <strong>Restricted Key</strong> for live sites
> - <strong>Test Publishable Key</strong> for the sandbox mode
> - <strong>Live Publishable Key</strong> for live mode

Restricted Key Settings
-----------------------

 We recommend using the restricted key instead of the standard secret key because the restricted key offers greater security than the secret key. To set your Restricted Key, navigate to <strong>Stripe Dashboard&gt;Developers&gt;Api Key&gt;Restricted Key</strong> and click the <strong>+Edit</strong> or <strong>+Create Restricted Key</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b3e727270765339befc6e3/file-85myrpDcT1.png)

 Enter a key name look for the resource types listed below in the API Keys and configure the necessary API permissions: 

| <strong>Resource Type</strong> | <strong>Permissions</strong> | <strong>Resources</strong> |
|---|---|---|
| Credit notes | Read | Billing resources |
| Customers | Write | Core resources |
| Checkout Sessions | Write | Checkout resources |
| Customer Portal | Write | Billing resources |
| Prices | Read | Billing resources |
| Subscriptions | Read | Billing resources |
| Webhook Endpoints | Write | Webhook resources |
| Tokens | Write | Core/Issuing Resources |

 Once you're done setting up the restricted key, click the <strong>"Create Key"</strong> button, at the bottom right to save your settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65e569a98cb417537bd299ef/file-T1eBcCTtHS.png)



 Webhook
--------

 Stripe uses webhooks to communicate with your site. It provides information such as the status of the payment or subscription and is used to update the user's role based on subscription events from Stripe's side of things. This also updates the price and product details on your site when you change them on your stripe.com account.

 When you check/uncheck the <strong>"Sandbox/Test Mode"</strong>, you will notice the fields' labels are changing. When <strong>checked</strong>, the fields will be in test mode, if it is unchecked it means that it is in live mode.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b3d95152a6af5def3c8dd1/file-4bM75nv5Sb.png)

 In the Stripe settings, you'll find a webhook endpoint ready for you to copy and paste into your Stripe.com account. When you connect with Stripe, it automatically generates the Webhook URL based on the current domain of your site and adds the event hooks to the Webhook settings on your Stripe account. More details are listed below:

- Head to <strong>U</strong><strong>ltimate Member &gt; Settings &gt; Extensions&gt; Stripe</strong>. Beside the Webhook Endpoints section is where you can copy your Webhook endpoint URL or when you have added the API Keys, Press on the <strong>"Connect with stripe"</strong> button, and your Webhook endpoint will be added instantly to your Stripe account settings.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65e4b4826ba1d916ec467329/file-h9fDsMfPVe.png)
- When you try to click on the <strong>"Connect with Stripe"</strong> button, it should validate the <strong>Publishable key</strong> and <strong>Live Restricted or Secret Key</strong>. It will show an error message when they are invalid.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b3ecad20e3b82eb738e03f/file-sBW1ndw4Rq.png)
- If the connection is successful, the <strong>"Disconnect Stripe Account"</strong> and <strong>"Import Prices from your Stripe Account"</strong> buttons should appear. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b40a6020e3b82eb738e059/file-ENGgEYd5JL.png)
- If you are trying to connect with Stripe and have installed the Stripe extension on your localhost or own computer while using a local domain, you may encounter an error (as shown in the image below). To receive the payload or events from Stripe.com events transactions, your site's Webhook URL must be publicly accessible. It's important to note that even if you encounter this webhook creation error, you can still import pricing locally.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b416e1270765339befc708/file-tHbL81sLRs.png)
- Afterward, navigate to your Stripe Dashboard, go to <strong>'Developers',</strong> and access the  [Webhook Settings](https://dashboard.stripe.com/test/webhooks) . Ensure that the webhook URL has been added to the webhook endpoint. Please keep in mind that there might be a delay before it appears, so it's best to wait a few seconds or try to reload the Stripe page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b41a9d20e3b82eb738e071/file-rkxfyjXie4.png)
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
- If you encounter an error on the site, the webhook may trigger retries after an hour. If you need an immediate trigger, click the "Resend" button in the webhook settings by accessing the webhook URL through Stripe Dashboard&gt;Developers&gt;Webhooks&gt;Hosted Endpoints&gt;Webhook URL.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b41d9120e3b82eb738e078/file-UgtWZr0dNq.png)
- Depending on which you set up first, you can repeat this process for your live Webhook Secret or vice versa.

 <strong>NEXT:  [Setting up Stripe Success and Cancel Payment Pages](../article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages)</strong>