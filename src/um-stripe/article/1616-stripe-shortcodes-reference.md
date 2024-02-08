---
---
# Stripe Shortcodes
Shortcodes in plugins serve to dynamically display content, extend functionality, customize features, integrate with other plugins or themes, and simplify complex tasks by allowing users to easily insert specific plugin features into their website content with minimal coding knowledge. As such, here are the Stripe shortcodes to simplify the integration of Stripe into your site.

Stripe Customer Portal Shortcode
--------------------------------

 Customers need to have the ability to manage their subscription plans. This shortcode creates a button that redirects customers to the external page of the Stripe Customer Portal to manage subscriptions. A user must be logged in for the redirection to work.

```
[ultimatemember_stripe_customer_portal]
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bace3f7507a5314cbc0cf1/file-8ErFDhlRvD.png)

---

Stripe Order Details Shortcode
------------------------------

 This shortcode displays the order details, billing information, and subscription status for the customer. It allows them to review the information they've provided. The order details will be displayed only when the user has completed the Stripe checkout process from the Stripe checkout page.

```
[ultimatemember_stripe_checkout_order_details]
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bacf19ed989b06acd56722/file-atrbImGjh9.png)

---

Stripe Checkout Shortcode
-------------------------

 Customers need a way to subscribe to your site and access restricted pages and content based on the role assigned to them. With the Stripe module's shortcode, you can create Subscribe buttons so that customers can select them and proceed to the Stripe Checkout page for payment, and then assign roles based on the Subscription events. 

 The following example shortcode generates a button for customers to check out and subscribe. A user must be logged in for the redirection to work. 

```
[ultimatemember_stripe_checkout label="Annual VIP Membership – $ 299.99/year" id="38"]
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bacd1ca7493b27a932f870/file-m4YveRVF20.png)

#### ---



Stripe Show Content Shortcode
-----------------------------

 Shortcodes to Display Active and Inactive Subscription Content or Messages

 The shortcodes below allow you to display specific content or messages for users with active and inactive subscriptions:

```
[ultimatemember_stripe_show_content] content [/ultimatemember_stripe_show_content]
```

 The default of this shortcode displays the content within the shortcode to users with an active subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c12e62feff244b88aaeb82/file-q74W7Iji4A.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c12e89fbf3330265919fad/file-DcTOhXNkLt.png)

 It's important to note that if UM Content Restrictions are not enabled, it's recommended to use these shortcodes. This ensures a seamless and effective display of content based on the specified plans or prices.If you want to display or show specific content for active and inactive users in a single post or page, you need to add the following attributes in the shortcode:

#### For active subscription

 Add this attribute `show_for="active"` in the shortcode as shown in the example below to show the content for active users.

```
[ultimatemember_stripe_show_content show_for="active"]  

Hello active Members 

[/ultimatemember_stripe_show_content]
```

#### For inactivate subscription

 Add this attribute `show_for="inactive"` in the shortcode as shown in the example below to show the content for the inactive users.

```
[ultimatemember_stripe_show_content show_for="inactive"]    

Hello inactive Members  

[/ultimatemember_stripe_show_content]
```

 <strong>Sample Usage:</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c1e5b6fbf3330265919ff0/file-4b0aix5r7B.png)

 When utilizing the provided shortcode above, you can enhance its functionality by integrating it with attributes <strong>Prices</strong> and <strong>Plans</strong>, separating them with a comma. In instances where both plans and prices are configured, the content will be visible only if a member possesses any of the plans or prices specified in the attributes. 



```
[ultimatemember_stripe_show_content show_for="active" plans="123,456,789" prices="165"]

Hello Active Members by Plans/Prices

[/ultimatemember_stripe_show_content]
```

 <strong>Sample Usage:</strong> 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c1f365fbf3330265919ff6/file-gOSqLZTVdK.png)

 If you have enabled <strong>Restrict Access by Stripe Plans</strong> and <strong>Active Subscription only</strong> in the <strong>Ultimate Member: Content Restriction</strong>, it's recommended to add the `template=1` attribute in the show content shortcode.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c23515fbf333026591a037/file-bFm3t6e3um.png)

 This shortcode can also be integrated into PHP code, such as within a template or widget.

```
[ultimatemember_stripe_show_content template=1]  content  [/ultimatemember_stripe_show_content]
```

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c23428ffa21909875f08c8/file-rruXzrWVE7.png)

 When the attribute is used, the filter to be applied is the <strong>'Active Subscription only'</strong>. If you have not selected any plans or prices from the <strong>'Select Stripe Plans/Prices to allow access to this post'</strong> option, the content is displayed and become accessible for users with active subscription. While users with inactive subscription might see any of the following messages. These notices or messages are intended exclusively for use with UM Content Restrictions &gt; Restrict Access by Stripe Plans&gt; Active Subscription only.

1. "Your current subscription plan does not provide access to this {post type/taxonomy name}. Please upgrade or subscribe to a different plan to view this `{post type/taxonomy name}`"
2. "Your current subscription plan is not allowed to access this {post type/taxonomy name}. Please upgrade or subscribe to a different plan to view this `{post type/taxonomy name}`."
 
 `{post type/taxonomy name}` will be replaced automatically. If an archive page is restricted, it will be replaced with "Please upgrade or subscribe to a different plan to view this category " etc. 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c23221feff244b88aaec06/file-aAl795aTLh.png)

 If you've chosen a Stripe plan or prices from the <strong>'Select Stripe Plans/Prices to allow access to this post'</strong> option, only users who have subscribed to the plan or purchased the prices will be able to view the content. The logic operates on an OR basis, meaning if a plan is not selected but prices are, users who have purchased the price will still have access to the content, and vice versa.



####  List of shortcode attributes:

 | <strong>Attributes</strong> | <strong>Description &amp; Example</strong> |
|---|---|
| <strong>label</strong> | This attribute is required and is displayed on a page. e.g. label =  <strong>"CAD 3.00 / month"</strong> ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6475df6867106052aab4ccf1/file-52z4Q9PXLF.png) |
| <strong>id</strong> | The Stripe Plan ID has been generated in wp-admin &gt; Ultimate Member &gt; Stripe Plans &gt; Add or Edit a Plan. When you create a Stripe plan, the shortcode will be displayed in the Stripe plan settings.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dbb29ed8c6d2f1cffdf26/file-IVhGzqfqP9.png) |
| <strong>type</strong> | - <strong>button</strong> - Shows a button element - <strong>link</strong> - Shows anchor HTML element - <strong>url</strong> - Shows a URL string    <strong>Note:</strong> When a user is already subscribed to a plan, this text will show:   ``` You're already subscribed 			 ```       To modify the text, you can use this filter hook:  ``` <?php  add_filter("umm_stripe_already_subscribed_text", function( $text ) {       return esc_attr( "You're subscribed to a plan!" ); });   ?> 				 ``` |
| <strong>class</strong> | Add custom classes to the button or anchor element.     `[ultimatemember_stripe_customer_portal type="link" label="customer portal"]` |
| <strong>plans</strong> | This attribute is added in the shortcode \[ultimatemember\_stripe\_show\_content\] to determine the display of specific content or messages tailored to users with either an active or inactive subscription, depending on the specified <strong>plan</strong>. |
| <strong>prices</strong> | This attribute is added in the shortcode \[ultimatemember\_stripe\_show\_content\] to determine the display of specific content or messages tailored to users with either an active or inactive subscription, depending on the specified <strong>prices</strong>. |
| <strong>payment\_method\_types</strong> | This attribute overrides the payment method type on the Stripe checkout page.    - Default value( when the attribute is not added to the shortcode): `card` - This can have multiple attribute values separated by a comma. e.g. `card,alipay,grab` |

#### A list of valid payment method types includes:

 | acss\_debit | affirm | afterpay\_clearpay | atdpay | au\_becs\_debit |
|---|---|---|---|---|
| bacs\_debit | bancontact | btdk | boleto | card |
| card\_present | cashapp | eps | fpx | giropay |
| grabpay | ideal | klarna | konbini | tdnk |
| oxxo | p24 | paynow | pix | promptpay |
| sepa\_debit | sofort | us\_bank\_account | wechat\_pay | zip |

> <strong>Note:</strong> Each payment method type has to be enabled and configured in the Stripe  [<strong>payment method settings.</strong>](https://dashboard.stripe.com/settings/payment_methods)

---

 <strong>NEXT:  [Test Your Integration](/docs-v3/um-stripe/article/1610-stripe---test-your-integration)</strong>