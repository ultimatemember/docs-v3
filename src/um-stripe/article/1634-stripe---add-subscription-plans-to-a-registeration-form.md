---
---
# Add Subscription Plans to a Registration Form
 Before adding a Stripe plan to a registration form, ensure that you've read and set up the required details in the following documentation articles:

- [Setting up Webhook and Test/Public Keys](/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys)
- [Setting up Stripe Success and Cancel Payment Pages](/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages)
- [Create Subscription Prices](/docs-v3/um-stripe/article/1617-create-subscription-prices)

### Add Stripe subscription plan to a registration form

 To add a Stripe subscription plan to a registration form, do the following steps:

- Go to <strong>wp-admin &gt; Ultimate Member &gt; Forms &gt; Edit/Add a Registration form.</strong> Click on the " <strong>plus(</strong><strong>+)</strong> " icon to show the Fields Manager where you can select which necessary fields to include in your registration form.   
       
    <strong>Note:</strong> When there's no Password field in the Register forms, the  [placeholder](/docs-v3/um-stripe/article/1340-placeholders-for-email-templates)  tag `{action_url}` must be used or added in your  ['account welcome email'](/docs-v3/um-stripe/article/42-emails-tab#email_templates)  to allow users to set their password. Similarly, when using the direct subscribe URL or the Payment Links with Stripe, these placeholder tag can also be used in the Welcome Email templates.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6ff4a1280097516451b78/file-KWTfSQHKIb.png)
- Click <strong>"Stripe Plans"</strong> in the Predefined Fields section of the Fields Manager. You may also add a predefined field called <strong>"Stripe Billing Email"</strong> if you want to add an option where this email field’s value will be used as the billing email for the Stripe Account. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b700801280097516451b7a/file-VOhzFYuWY0.png)
- Edit the '<strong>Stripe Plans'</strong> field by clicking the <strong>'</strong><strong>Pencil icon.' ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b7084b270765339befc7a7/file-UHBd5vqD9T.png)</strong>
- There are <strong>three (3) stripe plan types</strong> available for displaying the field in a registration form:
    1. <strong>Stripe Plan ( Hidden )</strong> - The Stripe Plan is hidden in the Register form. Once the form is submitted, the plan will be assigned to the user and redirected to the Stripe checkout page.
    2. <strong>Single Plan ( Visible )</strong> - Displays a single plan as a radio field.
    3. <strong>Multiple Plan Options</strong> - Displays multiple plan options as radio fields. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/647717017360c921d3f9cee3/file-wnYmvg4fRq.png)
- The title and subscription prices are from the product created on Stripe.com. The Stripe Prices dropdown field is populated by the subscription plans created in WP-Admin &gt; Ultimate Member &gt; Stripe Plans or the imported Stripe plans. The optional Default Value should be the Subscription Plan ID created in WP-Admin &gt; Ultimate Member &gt; Stripe Plans. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b703ec52a6af5def3c8eba/file-Ovo3PXpCeU.png)
- Once the field settings and the registration form are saved, add the Register form shortcode to a page to display it. Visit the Register page on your site. The subscription plans field in the front end should look like the image below.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b709171280097516451b7c/file-suaJmrwWtA.png)

> <strong>NOTE:</strong> When a user tries to register with their selected plan, they will be redirected to the Stripe Checkout external page to pay the subscription price. Users will be logged in automatically on the site before redirecting them to the Stripe Checkout external page. If the user is successfully subscribed, they will be redirected back to the site on the  [Payment Successful page](/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages)  and If they didn't subscribe to a plan, they will be linked back to the site on the  [Cancel page](/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages) .

### Redirect Users to the Payment Successful Page Upon a Successful Subscription

 To redirect your users to the Payment Successful page, <strong>you must add the URL of the Payment Successful page with the required parameter</strong> to the Registration Options of your user role. Here are the steps to set up the redirection to the Payment Successful page:

1. Go to wp-admin&gt;Pages&gt;Edit <strong>Payment successful — UM Payment successful</strong> page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b959ac7507a5314cbc0b6d/file-n2b3CUt4fN.png)
2. On the page settings&gt;Summary, you can find the page URL, copy it, and save it for later.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b95b408e1d144482a9fba8/file-WDGkAu4dcR.png)
3. Go to wp-admin&gt;Ultimate Member&gt; User Roles&gt; Edit a user role&gt; Scroll down to <strong>Registration Options</strong>.
4. Set the <strong>'Action to be taken after registration'</strong> option to <strong>'Redirect to URL'</strong>
5. The 'Set Custom Redirect URL' setting will become available. In the field provided, paste the payment successful page URL and add the required parameter:  
     `?umm_stripe_sid=UM_STRIPE_CHECKOUT_SID ` (e.g.  [domain.com/payment-successful/?umm\_stripe\_sid=UM\_STRIPE\_CHECKOUT\_SID](http://domain.com/payment-successful/?umm_stripe_sid={CHECKOUT_SESSION_ID}) ).   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bbba577507a5314cbc0db5/file-k2TZ7ixPkf.png)
    
     <strong>Note:</strong> UM Stripe requires adding an extra parameter to the payment successful page URL. This is to prevent subscribers or members from seeing a blank page. Make sure that this  [parameter](/docs-v3/um-stripe/article/1899-stripe-placeholders-attribute)  is included in the URL.
6. Update the role and test the redirection to confirm that it is working correctly.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b95f1b7507a5314cbc0b75/file-l0AG2W5A4S.png)