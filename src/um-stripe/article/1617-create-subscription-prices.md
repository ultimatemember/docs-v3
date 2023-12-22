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

 <strong>NEXT:  [SHORTCODE REFERENCE](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)</strong>