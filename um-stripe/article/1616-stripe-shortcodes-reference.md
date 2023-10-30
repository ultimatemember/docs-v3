---
---
# Shortcodes & Subscription Events
Stripe Customer Portal Shortcode
--------------------------------

 Customers need to have the ability to manage their subscription plans. This shortcode creates a button that redirects customers to the external page of the Stripe Customer Portal to manage subscriptions. A user must be logged in for the redirection to work.

```
[ultimatemember_stripe_customer_portal]
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ac3de15e8de2d9d3257d5/file-pIY84HGI1R.png)

Stripe Order Details Shortcode
------------------------------

 This shortcode displays the order details, billing information, and subscription status for the customer. It allows them to review the information they've provided. The order details will be displayed only when the user has completed the Stripe checkout process from the Stripe checkout page.

```
[ultimatemember_stripe_checkout_order_details]
```


  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ad229e249755d2f85c36a/file-HKaDIgydPe.png)

Stripe Checkout Shortcode
-------------------------

 Customers need a way to subscribe to your site and access restricted pages and content based on the role assigned to them. With the Stripe module's shortcode, you can create Subscribe buttons so that customers can select them and proceed to the Stripe Checkout page for payment, and then assign roles based on the Subscription events. 

 The following example shortcode generates a button for customers to check out and subscribe. A user must be logged in for the redirection to work. 

```
[ultimatemember_stripe_checkout label="$2 CAD/month" id="123"]
```

####  Here is the list of shortcode attributes:

---

###  <strong>label</strong>

 This attribute is required and is displayed on a page. e.g. <strong>label = "CAD 3.00 / month"</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6475df6867106052aab4ccf1/file-52z4Q9PXLF.png)

<strong>id</strong> 
--------------------

 The Stripe Plan ID has been generated in wp-admin &gt; Ultimate Member &gt; Stripe Plans &gt; Add or Edit a Plan. When you create a Stripe plan, the shortcode will be displayed in the Stripe plan settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dbb29ed8c6d2f1cffdf26/file-IVhGzqfqP9.png)

### type

- button - Shows a button element
- link - Shows anchor HTML element
- url - Shows a URL string
 
 Note: When a user is already subscribed to a plan, this shortcode will show 



 ```
You're already subscribed
	
```



 To modify the text, you can use this filter hook: 

 ```
<?php 
add_filter("umm_stripe_already_subscribed_text", function( $text ) {      
return esc_attr( "You're subscribed to a plan!" );
});  
?>
	
```



### class 

 Add custom classes to the button or anchor element.

```
[ultimatemember_stripe_checkout label="$2 CAD/month" class="my-class-button"]
```

### payment\_method\_types

 This attribute overrides the payment method type on the Stripe checkout page.

- Default value( when the attribute is not added to the shortcode): `card`

 This can have multiple attribute values separated by a comma. e.g. `card,alipay,grab`

#### A list of valid payment method types includes:

 1. acss\_debit
2. affirm
3. afterpay\_clearpay
4. alipay
5. au\_becs\_debit
6. bacs\_debit
7. bancontact
8. blik
9. boleto
10. card
11. card\_present
12. cashapp
13. eps
14. fpx
15. giropay
  1. grabpay
2. ideal
3. klarna
4. konbini
5. link
6. oxxo
7. p24
8. paynow
9. pix
10. promptpay
11. sepa\_debit
12. sofort
13. us\_bank\_account
14. wechat\_pay
15. zip
 > <strong>Note:</strong> Each payment method type has to be enabled and configured in the Stripe  [<strong>payment method settings.</strong>](https://dashboard.stripe.com/settings/payment_methods)

---

#### Stripe Subscription Events

 Stripe Events enables your site to automatically change or merge a user's role. You can create a Stripe Plan and assign a role to each Stripe Event in WP-Admin &gt; Ultimate Member &gt; Stripe Plans. For more details, please see this  [doc article](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses)  on stripe.com

#### Here's a list of Stripe Events:

---

###  <strong>active</strong>

 This attribute holds a role that will be assigned to customers when their subscription is active. A subscription moves into `past due` if the initial payment attempt fails. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`.

 A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.

---

###  <strong>unpaid</strong>

 This attribute holds a role that will be assigned to customers when their subscription is unpaid.

 If subscription collection charges automatically, It becomes `past_due` when payment to renew it fails and `canceled` or `unpaid`(depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.

 If subscription collection sends an invoice, it becomes `past_due `when its invoice is not paid by the due date and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created but then immediately automatically closed). After receiving updated payment information from a customer, you may reopen and pay their closed invoices.

---

###  <strong>trialing</strong>

 This attribute holds a role that will be assigned to customers when their subscription is trialing. This is only triggered when the attribute <strong>trial\_period\_days</strong> is set in the WP Admin &gt; Ultimate Member &gt; Stripe Plans settings.

---

###  <strong>pause</strong>

 This attribute holds a role that will be assigned to customers when their subscription is paused. When a subscription is resumed, and the subscription is trialing, it will assign the role set in the <strong>trialing</strong> attribute. If the subscription is not trialing, it will assign the role set in the <strong>active</strong> attribute.

---

###  <strong>past\_due</strong>

 This attribute holds a role that will be assigned to customers when their subscription is <strong>past due</strong>.

---


###  <strong>canceled</strong>

 This attribute holds a role that will be assigned to customers when their subscription is <strong>canceled</strong>.   
 Stripe will change the role to canceled with the following cases:

- When a customer cancels the subscription immediately
- Or at the end of the period when the subscription is canceled automatically by Stripe

---

###  <strong>trial\_period\_days</strong> 

 The default number of trial days when subscribing a customer to a plan. This attribute enables the trialing functionality of the subscription plan. This will always overwrite any trials that might apply via a subscribed plan.

---

<strong>NEXT:  [Test Your Integration](/docs-v3/um-stripe/article/1610-stripe---test-your-integration)</strong>