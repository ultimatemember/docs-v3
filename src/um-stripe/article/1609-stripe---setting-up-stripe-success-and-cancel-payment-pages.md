---
---
# Setting up Stripe Success, Cancel Payment, Already Subscribed,Customer Portal and Stripe Checkout URL Pages
 Once you have installed the Stripe extension on your WordPress website, a notification will appear on the top of your wp-admin page. This notification will indicate which pages need to be created. To create the required pages, simply click on the <strong>"Create Pages"</strong> button. Once you have completed this step, the Stripe Pages, including the <strong>Success, Cancel, Already Subscribed,</strong> <strong>Stripe Checkout URL</strong> and <strong>Customer Portal</strong> pages will automatically be assigned to the page settings.  


  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b427cd20e3b82eb738e083/file-7jSHQalUOk.png) 

 Go to <strong>wp-admin&gt; Pages</strong> to check if the pages are successfully created.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b42bf720e3b82eb738e088/file-UtaEU5Er7V.png)

 When a user attempts to subscribe and is then redirected to the Stripe Checkout page, there are three pages the user will be redirected to:

- <strong>Payment Successful Page</strong> - The user will be redirected to this page when the payment is successful, and completed, or the subscription starts trialing. The default content of this page is a  [shortcode](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)  that displays the user's order details. For members who subscribe to a plan via the Register form, you must  [set the Success page URL](/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-registeration-form)  in the <strong>User Role settings &gt; Register options</strong>.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4b7b052a6af5def3c8e66/file-bHOA3iv42J.png)
- <strong>Payment Canceled Page</strong> - The user will be redirected to this page when a user clicks on the logo of your store or the back button on the Stripe Checkout Page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4bd8520e3b82eb738e0c9/file-D0mTdlYLSp.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4bd9430c1875e8e067574/file-pr0H6RPn4r.png)
- <strong>Already Subscribed Page</strong> - This page is a landing page when a user tries to subscribe with a direct Subscribe URL but they are already subscribed, so they will be redirected to this page. The default content of this page is a message that the user already has a subscription and a shortcode that displays a customer portal button that links to the Stripe customer portal site  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4c3ce270765339befc754/file-TzQUi34P6o.png)
- <strong>Stripe Checkout URL -</strong>This page is designated for the checkout URL that is created or generated after you've created or imported pricing information for a specific plan.
- <strong>Customer Portal -</strong> This is a dedicated page that's created specifically for the direct customer portal URL, which appears as " [yoursite.com/customer-portal/](http://yoursite.com/customer-portal/) ". If a user who is logged in attempts to access the page or its URL without actually accessing the page, they will be automatically redirected to the Stripe customer portal site. For more information, read this  [article](/docs-v3/um-stripe/article/1894-how-to-access-the-stripe-customer-portal-from-the-website) .

 To set the Success, Canceled, Already Subscribed, Stripe Checkout URL Pages and Customer Portal, go to <strong>WP Admin &gt; Ultimate Member &gt; Settings &gt; General &gt; Pages.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4c51e30c1875e8e067575/file-etUumfKj6X.png)

 <strong>NEXT:  [Create Subscription Prices](/docs-v3/um-stripe/article/1617-create-subscription-prices)</strong>