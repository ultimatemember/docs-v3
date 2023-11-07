---
---
# Support Payment Link for Checkout
 <strong>Overview</strong>

 In the previous version, customers could subscribe to a Stripe Plan in a few different ways: through UM Register Forms, a direct subscribe URL (found in WP Admin &gt; Ultimate Member &gt; Stripe Plans), and a Subscribe button using an UM Stripe shortcode.

 With the introduction of Stripe's Payment Link feature, we gain access to enhanced button settings that enable us to display icons of supported payment methods, select specific line items, customize quantities, modify the button's appearance, and even include a <strong>`client_reference_id`</strong> to associate it with a UM Stripe Plan. Additionally, this feature allows us to assign user roles based on each subscription status.

> Note: The payment links only support subscription-based payments. Further details are provided below.

### <strong>Setup</strong>

 To set up the Stripe Payment Link, you have to follow the steps below:

1. Go to your  [Stripe dashboard](https://dashboard.stripe.com/) .
2. On the menu tab, click on <strong>More</strong> to show more stripe products and features.
3. Under Payments, click <strong>Payment Links</strong>.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f4eac5ebc545bcfe0487/file-D6ctqMwDSG.png)
4. You’ll then be redirected to the  [payment links](https://dashboard.stripe.com/test/payment-links)  page. Click on the <strong>+Create test payment link</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f5005d28e52158f52079/file-QJl4C2VFKW.png)
5. On the create page, select the type of your payment link. In the <strong>payment page tab</strong>, below the product, choose whether you want to add a new product or select an existing one.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f59ac5ebc545bcfe048b/file-t7ySDeICqc.png)
6. Now, in the <strong>after payment</strong> tab below the confirmation page, select “<strong>Don’t show confirmation page”</strong> and add the Stripe success page URL of your website, including this checkout URL parameter: `?umm_stripe_sid={CHECKOUT_SESSION_ID}` Example:  [https://yoursite.com/stripe-payment-successful/?umm\_stripe\_sid={CHECKOUT\_SESSION\_ID}](https://yoursite.com/stripe-payment-successful/?umm_stripe_sid={CHECKOUT_SESSION_ID})  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f5fb5929497d15ca1131/file-o2F5qU8niA.png)
7. After clicking the button, you’ll be redirected to the payment link page for your product. If you use the link as is, it will not directly go to the Stripe Checkout page and will not connect with Ultimate Member.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f680d8bb8c0afe6e137f/file-l1rWjEkbXS.png)
8. Click on the drop-down button to view the URL parameters option, and click on it to add a parameter. You have to use the parameter below to make the payment link compatible with the UM Stripe extension: 
    - `client_reference_id=um_stripe_custom_checkout`
    
    > <strong>Note:</strong> This only supports the Subscription products. One-time payment doesn’t create Stripe customer through the Payment Link’s checkout.
9. Select the <strong>client reference ID</strong> from the options and enter the parameter `um_stripe_custom_checkout` in the field. The URL below is the payment link that you can copy and use.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f6a45929497d15ca1133/file-JepZ8xhCHK.png)
10. Once you copy the Payment Link, you can paste it now to your preference. Once the payment link is clicked, it will redirect you to the Stripe Checkout page with the product price.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65394d8103e87e076b635e2e/file-263F6w981Z.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65394db16a23f959ef28c8f9/file-faW0wp6rvG.png)

### Customize Payment Link Button

1. On your product payment link page, click on the <strong>Buy button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f6f4d8bb8c0afe6e1380/file-Y6fr7Y7UgJ.png)</strong>
2. Copy the code to your site, and make sure you add the attributes: 
    - `client-reference-id="um_stripe_custom_checkout”`
    
     Example:
    
     ```
    <script async
    src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
    buy-button-id="buy_btn_1O4iQwHPd2HMKvM3zN5e5MqR"
    publishable-key="pk_test_51MnimtHPd2HMKvM3spM4adoI3RO4DbdRKU05zh4PsF0ZugoVCf53XDKgKnJGJNvd4vHOR3fjiRawBX223hj0Rjbj00RyUJsTtg"
    client-reference-id="um_stripe_custom_checkout"
    </stripe-buy-button>
    	
    ```
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653951ebe4e85872dc277686/file-ehhaKROXP2.png)
3. You can configure the buttons if you want it to be button-type or card-type.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6537f6de5d28e52158f5207d/file-jS0pZp1Obm.png)
4. Once you have paste the code to your site, the button should redirect you the stripe checkout page with the product price.   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539542e973c74752598d9f0/file-HRSbbLzh1H.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65394db16a23f959ef28c8f9/file-faW0wp6rvG.png)