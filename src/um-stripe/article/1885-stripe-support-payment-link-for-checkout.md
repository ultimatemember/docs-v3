---
---
# Support Payment Link for Checkout
 <strong>Overview</strong>

 In the previous version, customers could subscribe to a Stripe Plan in a few different ways: through UM Register Forms, a direct subscribe URL (found in WP Admin &gt; Ultimate Member &gt; Stripe Plans), and a Subscribe button using a UM Stripe shortcode.

 With the introduction of Stripe's Payment Link feature, we gain access to enhanced button settings that enable us to display icons of supported payment methods, select specific line items, customize quantities, modify the button's appearance, and even include a <strong>`client_reference_id`</strong> to associate it with a UM Stripe Plan. Additionally, this feature allows us to assign user roles based on each subscription status.

> Note: The payment links only support subscription-based payments. Further details are provided below.

### <strong>Setup</strong>

 To set up the Stripe Payment Link, you have to follow the steps below:

1. Go to your  [Stripe dashboard](https://dashboard.stripe.com/) .
2. On the side navigation menu, click on '+<strong>More'</strong> to show more stripe products and features.
3. Under Accept Payments, click '<strong>Payment links'</strong>.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c28c8dffa21909875f0976/file-J9gawW37l5.png)
4. You’ll then be redirected to the  [payment links](https://dashboard.stripe.com/test/payment-links)  page. Click on the '<strong>+Create test payment link'</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2934cfbf333026591a0ef/file-7JcmpxGg61.png)
5. On the <strong>Create a payment link</strong> page, <strong>select the type of your payment</strong> link, in this example we have selected <strong>'Products or subscriptions.'</strong> In the <strong>payment page</strong> tab, below the product, choose whether you want to add a new product or select an existing one.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2986bfbf333026591a0fd/file-DWegAATQoE.png)
6. Now, in the <strong>after-payment</strong> tab below the confirmation page, select “<strong>Don’t show confirmation page”</strong> and add the Stripe success page URL of your website, including this checkout URL  [parameter](/docs-v3/um-stripe/article/1899-stripe-placeholders-attribute) : `?umm_stripe_sid={CHECKOUT_SESSION_ID}` (e.g  [https://yoursite.com/stripe-payment-successful/?umm\_stripe\_sid={CHECKOUT\_SESSION\_ID}](https://yoursite.com/stripe-payment-successful/?umm_stripe_sid={CHECKOUT_SESSION_ID}) ). Click the <strong>'Create link'</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c29da40a12eb325db17692/file-FK4SjkmDzX.png)
7. After clicking the create link button, you’ll be redirected to the payment link page for your product. If you use the link as is, it will not directly go to the Stripe Checkout page and will not connect with Ultimate Member.
8. Click on the drop-down button to view the URL parameters option, and click on it to add a parameter. You have to use the parameter below to make the payment link compatible with the UM Stripe extension: 
    - `?client_reference_id=um_stripe_custom_checkout`
    
    > <strong>Note:</strong> This only supports the Subscription products. One-time payment doesn’t create Stripe customer through the Payment Link’s checkout.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a391feff244b88aaecc1/file-sHdi6szLWo.png)
9. Select the <strong>client reference ID</strong> from the options and enter the parameter `um_stripe_custom_checkout` in the field. The URL below is the payment link that you can copy and use.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a5058106ae1c4ab6f33a/file-LX1GSk0dkS.png)
10. After copying the Payment Link, you have the flexibility to paste it wherever you prefer, whether it's within a button or a direct URL link. Clicking on the payment link will then seamlessly redirect you to the Stripe Checkout page, displaying the product price.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a66fffa21909875f0998/file-w2lkmUPXad.png)   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a74f0a12eb325db176a2/file-0SZ33pM5KX.png)

### Customize Payment Link Button

1. On your product payment link page, click on the <strong>Buy button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a82cfeff244b88aaecc7/file-9tLSJQtjFu.png)</strong>
2. You can configure the buttons if you want them to be button-type or card-type.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2ab24fbf333026591a11b/file-irEf3SolDx.png)
3. Copy the Buy button code.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2a912ffa21909875f099b/file-5iC2WEtdYM.png)
4. Paste the code to your site,but you must add the attributes: 
    - `client-reference-id="um_stripe_custom_checkout”`
    
     Example:
    
     ```
    <script async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    
    <stripe-buy-button
      buy-button-id="buy_btn_1OgwRZHPd2HMKvM3NSGL5KrO"
      publishable-key="pk_test_51MnimtHPd2HMKvM3spM4adoI3RO4DbdRKU05zh4PsF0ZugoVCf53XDKgKnJGJNvd4vHOR3fjiRawBX223hj0Rjbj00RyUJsTtg"
    >
     client-reference-id="um_stripe_custom_checkout”
    </stripe-buy-button>
    	
    ```
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2aa51fbf333026591a11a/file-PqAap1MlwO.png)
5. Once you have pasted the code to your site, the button should redirect you to the stripe checkout page with the product price.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c2aca38106ae1c4ab6f345/file-nFD5C3QOY6.png)