---
---
# Setting up Stripe Success, Cancel Payment, Already Subscribed and Stripe Checkout URL Pages
 When you activate the Stripe extension from <strong>wp-admin&gt;Plugins</strong>, a notification on top will appear, showing you the pages that need to be created. When you click the <strong>"Create Pages"</strong> button, the Stripe Pages, which are the <strong>Success</strong><strong>,</strong> <strong>Cancel,</strong> <strong>Already Subscribed</strong> and <strong>Stripe</strong> <strong>Checkout URL</strong> Pages, will be created automatically and assigned to the page settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649daa89cfd7fe604a7fe3f8/file-L8HXGD6oiW.png)

 Go to <strong>wp-admin&gt; Pages</strong> to check if the pages are successfully created

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d4b04c00c2b65208e1bdd/file-lqJ8eYdLyw.png)



 When a user attempts to subscribe and is then redirected to the Stripe Checkout page, there are three pages the user will be redirected to:

- <strong>Payment Successful Page</strong> - The user will be redirected to this page when the payment is successful, completed, or the subscription starts trialing. The default content of this page is a  [shortcode](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)  that displays the user's order details.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e6005542e1f64bf8026347/file-bp07TfeACR.png)
- <strong>Payment Canceled Page</strong> - The user will be redirected to this page when a user clicks on the logo of your store or the back button on the Stripe Checkout Page.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e601f393a47f35db9dbd80/file-tmS66hUDTp.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e6049d42e1f64bf802634d/file-hmVo1WtOJE.png)
- <strong>Already Subscribed Page</strong> - This page is a landing page when a user tries to subscribe with a direct Subscribe URL but they are already subscribed, so they will be redirected to this page.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e604b06ca77422d09644a9/file-RwsgSdcSao.png)
- <strong>Stripe Checkout URL -</strong>This page is designated for the checkout URL that is created or generated after you've created or imported pricing information for a specific plan.

 To set the Success, Canceled, Already Subscribed and Stripe Checkout URL Pages, go to <strong>WP Admin &gt; Ultimate Member &gt; Settings &gt; General &gt; Pages.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65373ebb1ec949354204896a/file-imJZ0U6Uak.png)

 <strong>NEXT:  [Create Subscription Prices](/docs-v3/um-stripe/article/1617-create-subscription-prices)</strong>