---
---
# Stripe Parameters
 Parameters are used to pass information from one page to another. This is a common practice in web development and it's an important part of the integration between Ultimate Member and Stripe. It has several purposes:

1. <strong>Data Transfer:</strong> The parameter allows you to pass data (in this case, the Stripe checkout session ID) from the page that initiated the payment process to the "stripe-payment-successful" page. This way, the successful payment page can retrieve and use this information.
2. <strong>Dynamic Content:</strong> By using parameters, you can dynamically generate content on the "stripe-payment-successful" page based on the specific checkout session ID. This is particularly useful when you want to display transaction details or other relevant information related to a specific payment.
3. <strong>Server-Side Processing:</strong> The server handling the "stripe-payment-successful" page can use the provided session ID to retrieve additional details from the server side (such as payment confirmation, transaction history, etc.).
4. <strong>Tracking and Analytics</strong>: Parameters can also be used for tracking purposes, helping you understand the flow of users and their interactions on your site.

 Ultimate Member Stripe Extension requires these parameters to integrate Stripe with Ultimate Member:

| <strong>Parameters Attribute</strong> | <strong>Description</strong> |
|---|---|
| `?umm_stripe_sid={CHECKOUT_SESSION_ID}` | This checkout URL parameter attribute is added to the Stripe success page URL of your website, in the Stripe payment link setting to redirect your customers to your website. You can read more info  [here](/docs-v3/um-stripe/article/1885-stripe-support-payment-link-for-checkout) .        Example:  [https://yoursite.com/stripe-payment-successful/<strong>?umm\_stripe\_sid={CHECKOUT\_SESSION\_ID}</strong>](https://yoursite.com/stripe-payment-successful/?umm_stripe_sid={CHECKOUT_SESSION_ID}) |
| `um_stripe_custom_checkout` | This parameter is added in the client reference ID, in the URL parameters of your product payment link. |
| `?client_reference_id=um_stripe_custom_checkout` | This parameter is used to make the payment link compatible with the UM Stripe extension. It is added to the payment link of your product.         Example:  [https://buy.stripe.com/test\_3cs3dk77sf2o5tmfYZ](https://buy.stripe.com/test_3cs3dk77sf2o5tmfYZ) <strong>?client\_reference\_id=um\_stripe\_custom\_checkout</strong> |
| `client-reference-id="um_stripe_custom_checkout”` | This attribute must be added to the Buy button code when adding the code to your site. |
| `?umm_stripe_sid=UM_STRIPE_CHECKOUT_SID` | To ensure that users are redirected to the success page after successfully purchasing a product or subscription from your registration form, you need to add this parameter attribute to the payment successful page URL in the registration options. For a detailed guide on how to set up the redirection, please refer to this  [article](/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-registeration-form) .        Example:  [https://ultimate-member-32680-6296830.umsites.net/payment-successful/](https://ultimate-member-32680-6296830.umsites.net/payment-successful/) <strong>?umm\_stripe\_sid=UM\_STRIPE\_CHECKOUT\_SID</strong> |