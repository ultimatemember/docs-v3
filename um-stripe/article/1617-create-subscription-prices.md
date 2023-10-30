---
---
# Create Subscription Prices
### <strong>Overview</strong>

 Stripe allows you to create subscription prices for your subscription shortcode. This way, you can create multiple subscribe buttons with different prices or Stripe Plan options in the Register form.

 If you have existing subscription prices, you can simply  [import them from the stripe settings](/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account)  but if you have not created any prices yet, do the following steps below:

 1. To create a new subscription/product price, go to  [https://dashboard.stripe.com/](https://dashboard.stripe.com/)  and click "<strong>Products</strong>" from the menu tabs.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f622a1188a9d242a7d5be0/file-GGEqHQjhzS.png)

 2. Click the " + <strong>Add product</strong>" button to display the form.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62388188a9d242a7d5be2/file-1U2CzmwMRx.png)

 3. Add the <strong>"Name</strong>", "<strong>Description(optional)</strong>" and "<strong>Image(optional)."</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f624c5188a9d242a7d5be5/file-GKKvbGkpLj.png)

 4. In the Price Information, UM Stripe module supports <strong>Recurring Prices</strong> and <strong>One-time</strong> <strong>Prices</strong> as the Pricing Models.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62882c490cd5d5b96a1bf/file-Z7je1dsxgQ.png)

 Suppose you have selected Recurring as your pricing model. In that case, you can choose the following  <strong>Billing Period</strong> from the drop-down menu: <strong>Daily, Weekly, Monthly, Every 3 months,</strong> <strong>Every 6 months,</strong> <strong>Yearly,</strong> &amp; <strong>Custom.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984c0e92cb8c175b469163/file-mMF221HUQF.png)

 Create multiple pricing options per product by clicking the <strong>"+Add another price"</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/629848cc5732000792520c02/file-cSlCGFPq85.png) This way, you can create an option for your users to choose whether they want recurring or one-time payments.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984bb95732000792520c0e/file-Det8o1q8E1.png)

 5. Once the product is saved, you need to  <strong>[import the prices from your Stripe Account](/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account)</strong> in <strong>wp-admin&gt; Ultimate Member&gt; Settings&gt;Extension&gt;Stripe</strong>. Once the import is done, the created Prices will be displayed in the Stripe Plans form in  <strong>WP-</strong><strong>Admin &gt; Ultimate</strong> <strong>Member</strong> <strong>&gt; Stripe Plans.</strong>



 Hover your mouse over the Stripe Plan and click on edit.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d92b142d97d1c0459142f/file-8hfScHYbCc.png)

 You will see the product type and price you created with Stripe under the Subscription Price. These are locked to avoid conflict. If you have selected One-time from type, the one-time price you have created in Stripe will be displayed in Subscription Price.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d94f005231a0b51d23376/file-DckD8Q6zKx.png)

### UM Stripe Plan Settings

1. <strong>Title</strong> - Add or edit the title of your Stripe plan.
2. <strong>Setup Subscription</strong>
    1. <strong>Type</strong> - If prices are imported from your Stripe account, it only displays the product payment type, and you'll be unable to edit it. If you set up the Stripe Plan in Ultimate Member, you can choose whether your product is <strong>recurring</strong> or <strong>one-time</strong>.
    2. <strong>Subscription Price</strong> - If prices are imported from your Stripe account, it only displays the product prices you've created in Stripe, and you'll be unable to select from the prices. If you set up the Stripe Plan in Ultimate Member, you can choose which imported subscription price you prefer.
3. <strong>Roles</strong> - Assign a role to each  [Stripe Events](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference) .
4. <strong>Shortcode</strong> - The  [shortcode](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)  generates a button for customers to check out and subscribe to your Stripe plan.
5. <strong>Subscribe URL</strong> - The URLs are auto-generated once you import the price from your stripe account. The URL will redirect users to the Stripe Checkout with your Stripe plan. 
    1. <strong>Short</strong> - This subscribe URL includes the stripe plan ID e.g.  [https://ultimate-member-32612-8491614.umsites.net?um\_stripe\_plan\_id=51](https://ultimate-member-32612-8491614.umsites.net?um_stripe_plan_id=51)
    2. <strong>Hashed</strong> - This subscribe URL is a hashed URL to prevent the post\_id from being exposed. The created Stripe Checkout Page when you activated the UM Stripe plugin is to hold the generated hashed as a Subscribe URL. e.g. [ https://ultimate-member-32612-8491614.umsites.net/stripe/](https://ultimate-member-32612-8491614.umsites.net/stripe/)  [OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ](https://um.x/checkout/OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ)

### Customize the slug of the Subscribe URL

 The default URL slug is yoursitedomain.com/ <strong>stripe</strong>/--random hash ID--/. To customize the slug of the Subscribe URL, do the following steps:

- Go to <strong>wp-Admin &gt; Pages &gt;Hover to UM Stripe Checkout page&gt; Click on "Quick Edit" ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db1f9ed8c6d2f1cffdf15/file-eleEKK6C3y.png)</strong>
- Type your preferred slug in the field.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db292c00c2b65208e1c82/file-VQ0SaN8bsz.png)
- Click the <strong>U</strong><strong>pdate</strong> button to save. When you visit the page, you'll notice the modified slug in the Stripe Checkout URL. If there is no URL parameter or if the URL parameter is wrong, the page will be inaccessible and will redirect to the homepage.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db77a42d97d1c0459145f/file-yZAx80VqBx.png)

 <strong>NEXT:  [SHORTCODE REFERENCE](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)</strong>