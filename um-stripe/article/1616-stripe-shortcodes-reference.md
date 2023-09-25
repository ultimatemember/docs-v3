---
layout: UMLayout
---
# Shortcodes & Subscription Events
<h2>Stripe Customer Portal Shortcode</h2><p>
	 Customers need to have the ability to manage their subscription plans. This shortcode creates a button that redirects customers to the external page of the Stripe Customer Portal to manage subscriptions. A user must be logged in for the redirection to work.</p>
<pre>[ultimatemember_stripe_customer_portal]
</pre><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ac3de15e8de2d9d3257d5/file-pIY84HGI1R.png"></p><h2>
Stripe Order Details Shortcode</h2><p>
	This shortcode displays the order details, billing information, and subscription status for the customer. It allows them to review the information they've provided. The order details will be displayed only when the user has completed the Stripe checkout process from the Stripe checkout page.</p>
<pre>[ultimatemember_stripe_checkout_order_details]
</pre><h2><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ad229e249755d2f85c36a/file-HKaDIgydPe.png"></p></h2><h2>
Stripe Checkout Shortcode</h2>
<div>
	Customers need a way to subscribe to your site and access restricted pages and content based on the role assigned to them. With the Stripe module's shortcode, you can create Subscribe buttons so that customers can select them and proceed to the Stripe Checkout page for payment, and then assign roles based on the Subscription events.
</div><div>
	The following example shortcode generates a button for customers to check out and subscribe. A user must be logged in for the redirection to work.
</div><pre>[ultimatemember_stripe_checkout label="$2 CAD/month" id="123"]
</pre><h4> Here is the list of shortcode attributes:</h4><hr><h3> <strong>label</strong> </h3><p>
	 This attribute is required and is displayed on a page. e.g. 
	<strong>label = "CAD 3.00 / month"<br>
	</strong></p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6475df6867106052aab4ccf1/file-52z4Q9PXLF.png" alt="" style="display: block; margin: auto;"></p><h2><strong>id </strong></h2><p>
	The Stripe Plan ID has been generated in wp-admin > Ultimate Member > Stripe Plans > Add or Edit a Plan. When you create a Stripe plan, the shortcode will be displayed in the Stripe plan settings.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6475e34b549b2b747a06a567/file-XkX7HnXT3I.png" alt="" style="display: block; margin: auto;"></p><h3>type</h3>
<div>
	<ul>
		<li>button - Shows a button element</li>
		<li>link - Shows anchor HTML element</li>
		<li>url - Shows a URL string</li>
	</ul>
	<div>
		Note: When a user is already subscribed to a plan, this shortcode will show
	</div></div>
<div>
	<pre>You're already subscribed
	</pre></div>
<div>
	To modify the text, you can use this filter hook:
</div><div>
	<pre><?php 
add_filter("umm_stripe_already_subscribed_text", function( $text ) {      
return esc_attr( "You're subscribed to a plan!" );
});  
?>
	</pre></div><h3>class </h3><p>
	Add custom classes to the button or anchor element.</p>
<pre>[ultimatemember_stripe_checkout label="$2 CAD/month" class="my-class-button"]
</pre><h3>payment_method_types</h3><p>
	This attribute overrides the payment method type on the Stripe checkout page. </p><ul>
	
<li>Default value( when the attribute is not added to the shortcode): <code>card</code></li></ul><p>
	This can have multiple attribute values separated by a comma. e.g. 
	<code>card,alipay,grab</code></p><h4>A list of valid payment method types includes:</h4>
<table>
<tbody>
<tr>
	<td>
		<li>acss_debit </li>
		<li>affirm</li>
		<li>afterpay_clearpay</li>
		<li>alipay</li>
		<li>au_becs_debit</li>
		<li>bacs_debit</li>
		<li>bancontact</li>
		<li>blik</li>
		<li>boleto</li>
		<li>card</li>
		<li>card_present</li>
		<li>cashapp</li>
		<li>eps</li>
		<li>fpx</li>
		<li>giropay</li>
	</td>
	<td>
		<li>grabpay</li>
		<li>ideal</li>
		<li>klarna</li>
		<li>konbini</li>
		<li>link</li>
		<li>oxxo</li>
		<li>p24</li>
		<li>paynow</li>
		<li>pix</li>
		<li>promptpay</li>
		<li>sepa_debit</li>
		<li>sofort</li>
		<li>us_bank_account</li>
		<li>wechat_pay</li>
		<li>zip</li>
	</td>
</tr>
</tbody>
</table><blockquote class="callout-blue">
	<strong>Note:</strong> Each payment method type has to be enabled and configured in the Stripe <a href="https://dashboard.stripe.com/settings/payment_methods"><strong>payment method settings.</strong></a>
</blockquote><hr><h4>Stripe Subscription Events</h4><p>
	Stripe Events enables your site to automatically change or merge a user's role. You can create a Stripe Plan and assign a role to each Stripe Event in WP-Admin > Ultimate Member > Stripe Plans. For more details, please see this 
	<a href="https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses">doc article</a> on stripe.com</p><h4>Here's a list of Stripe Events:</h4><hr><h3> <strong>active</strong> </h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is active. A subscription moves into  
	<code>past due</code> if the initial payment attempt fails. Once the first invoice is paid, the subscription moves into an <code>active</code> state. If the first invoice is not paid within 23 hours, the subscription transitions to <code>incomplete_expired</code>. </p><p>
	 A subscription that is currently in a trial period is  
	<code>trialing</code> and moves to <code>active</code> when the trial period is over.</p><hr><h3> <strong>unpaid</strong></h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is unpaid.</p><p>
	 If subscription collection charges automatically, It becomes  
	<code>past_due</code> when payment to renew it fails and <code>canceled</code> or <code>unpaid</code>(depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.</p><p>
	 If subscription collection sends an invoice, it becomes  
	<code>past_due </code>when its invoice is not paid by the due date and <code>canceled</code> or <code>unpaid</code> if it is still not paid by an additional deadline after that. Note that when a subscription has a status of <code>unpaid</code>, no subsequent invoices will be attempted (invoices will be created but then immediately automatically closed). After receiving updated payment information from a customer, you may reopen and pay their closed invoices.</p><hr><h3> <strong>trialing</strong> </h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is trialing. This is only triggered when the attribute 
	<strong>trial_period_days</strong> is set in the WP Admin > Ultimate Member > Stripe Plans settings.</p><hr><h3> <strong>pause</strong> </h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is paused. When a subscription is resumed, and the subscription is trialing, it will assign the role set in the 
	<strong>trialing</strong> attribute. If the subscription is not trialing, it will assign the role set in the <strong>active</strong> attribute.</p><hr><h3> <strong>past_due</strong> </h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is 
	<strong>past due</strong>.</p><hr><h3></h3><h3> <strong>canceled</strong> </h3><p>
	 This attribute holds a role that will be assigned to customers when their subscription is 
	<strong>canceled</strong>. <br>
	Stripe will change the role to canceled with the following cases:</p><ul>
	
<li>When a customer cancels the subscription immediately</li>	
<li>Or at the end of the period when the subscription is canceled automatically by Stripe</li></ul><hr><h3> <strong>trial_period_days </strong></h3><p>
	 The default number of trial days when subscribing a customer to a plan. This attribute enables the trialing functionality of the subscription plan. This will always overwrite any trials that might apply via a subscribed plan.</p><hr><h2>NEXT: <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1610-stripe---test-your-integration" style="font-family: inherit; font-size: 21px;">Test Your Integration</a></h2>
