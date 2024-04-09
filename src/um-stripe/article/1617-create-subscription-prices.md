---
---
# Create Subscription Prices
### <strong>Overview</strong>

 Stripe allows you to create subscription prices for your subscription shortcode. This way, you can create multiple subscribe buttons with different prices or Stripe Plan options in the Register form.

 If you have existing subscription prices, you can simply  [import them from the stripe settings](/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account)  but if you have not created any prices yet, do the following steps below:

<strong>Note:</strong> If you are seeking information about the pricing models supported by the Stripe extension, please consult our Stripe FAQ article titled  ["What Pricing Models are supported in the Stripe extension?"](https://secure.helpscout.net/docs/561c9e86c697916fa4a83eb9/article/6523e5cf17267470d391679b/)  This article provides details on the various pricing models that can be utilized with the Stripe extension.

1. To create a new subscription/product price, go to  [https://dashboard.stripe.com/](https://dashboard.stripe.com/)  and on the side menu, click on the '<strong>+More'</strong> tab and click on <strong>Product Catalog</strong> under Manage your products ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba4e817507a5314cbc0c0e/file-egnNmwOvIM.png)
2. On the Product Catalog page, Click the " + <strong>Add product</strong>" button to display the form.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba4fea7507a5314cbc0c11/file-bP7KCBfysm.png)
3. Add the <strong>"Name</strong>", "<strong>Description(optional)</strong>" and "<strong>Image(optional)</strong> of your product<strong>.</strong> ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba7606ed989b06acd56691/file-WCfjzlMhac.png)
4. In the Price Information, the UM Stripe module supports <strong>Recurring Prices</strong> and <strong>One-time</strong> <strong>Prices</strong> as the Pricing Models ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba793d7507a5314cbc0c62/file-tMV9ENAHcp.png)
5. Suppose you have selected Recurring as your pricing model. In that case, you can choose the following  <strong>Billing Period</strong> from the drop-down menu: <strong>Daily, Weekly, Monthly, Every 3 months,</strong> <strong>Every 6 months,</strong> <strong>Yearly,</strong> &amp; <strong>Custom. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba8804a7493b27a932f81b/file-j2mRHUuvUp.png)</strong>
6. Create multiple pricing options per product by clicking the <strong>'+Add another price'</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba89a7ed989b06acd566ba/file-uRXanAH3MX.png)
7. For an alternative pricing structure, you have the flexibility to choose the <strong>'One-time'</strong> option. This empowers your users to decide between recurring or one-time payments for their purchases or subscriptions. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba8bc3ed989b06acd566c2/file-R5um8DHFr0.png)
8. After saving the product, proceed to  [import prices from your Stripe Account](/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account)  by navigating to <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe.</strong>
9. Once the import process is complete, the newly created prices will appear in the Stripe Plans form at <strong>WP-Admin &gt; Ultimate Member &gt; Stripe Plans</strong>. Simply hover your mouse over the desired Stripe Plan and click on <strong>'Edit'.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba9389ed989b06acd566d4/file-AZiexNBIzm.png)</strong>
10. You'll find the product type and associated price you established with Stripe listed under <strong>Subscription Price</strong>. These details are locked to prevent any conflicts.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba968d7507a5314cbc0ca1/file-X5ztcIylse.png)
11. The corresponding ' <strong>one-time'</strong> price configured in Stripe will be showcased in the Subscription Price field.

 <strong>EXT:  [SHORTCODE REFERENCE](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)</strong>