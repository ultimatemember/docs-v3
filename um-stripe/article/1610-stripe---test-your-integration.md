---
layout: UMLayout
---
# Test your integration
<p>
	Sandbox/Test Mode allows you to process subscriptions and simulate different payment responses using 
	<a href="https://stripe.com/docs/testing#cards">Stripe.com Test Cards</a>. Toggle the Sandbox/Test Mode checkbox and ensure the API Keys are listed in the<strong> Ultimate Member > Settings > Extensions > Stripe</strong>. After that, click the Subscription button or add a Stripe Subscription Plan field to a Register form to redirect you to the Stripe Checkout page and then add the test card details.  </p><p>
	 To test the integration, ensure that you've read and setup the required details in the following documentation before you proceed:</p><ul>
	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys">Setting up Webhook and Test/Public Keys</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages">Setting up Stripe Success and Cancel Payment Pages</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices">Create Subscription Prices</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">Shortcodes & Subscription Events</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-register-form">Add Subscription Plans to a Register Form</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings">Create & Test Customer Billings</a></li></ul><blockquote>
	
<p>
		<strong>Note: </strong> Use the Stripe CLI to simulate Stripe events in your local environment. You must add the parameter `/?umm-stripe-webhook=true` in the localhost URL, e.g., `http://localhost:4242/?umm-stripe-webhook=true` as your local webhook URL.
	</p><p>
		<em>To learn more about the Stripe CLI, please see this doc article:  </em><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1864-stripe-cli-integration">https://ultimatemember.github.io/docs-v3/um-stripe/article/1864-stripe-cli-integration</a>
	</p></blockquote><blockquote>
	<strong>Recommendation:</strong> Stripe has a Test Clock feature where you can simulate the Stripe events by advancing time. Please see this article: <u></u><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks"> https://ultimatemember.github.io/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks</a>
</blockquote><p class="callout-yellow">
	<strong>Warning: When testing, please use a<u> subscriber account </u>instead of an <u>administrator account</u>. When you use an administrator account, it won't remove the roles assigned to it, and this is to prevent you from being locked out as admin.</strong></p><h3>Testing the Subscription Statuses and Assigning Roles </h3><ol>
	
<li>
	Using your Admin account, add a new user with a subscriber role.
	</li>	
<li>Open the<strong> WP Admin > Users</strong> page with your Admin account and see the Role column. <em>Keep this browser window open during testing.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649edbf974f970393a8b0a00/file-2eXi6IFc5Y.png" alt=""><br>
	</em></li>	
<li>Add the <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference" target="_blank">Stripe shortcode</a> to a Page or the Stripe Plan predefined field to a Register form.</li>	
<li>Using a different browser, log in to the site using the subscriber account. <br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649eddfcf39eb10e8e84ba62/file-V1EGtoMXAn.png" style="width: 359.6px;" alt="">
	</p></li>	
<li>Using the Subscriber account, go to the page where you've added the Stripe shortcode. </li>	
<li>Click on the Stripe button to proceed to the checkout page. A user must be logged in for the redirection to work when using the Stripe button. It automatically redirects users to the external checkout page using the Registration form with the Stripe plans field.</li>	
<li>Use the Test Credit Cards from  <a href="https://stripe.com/docs/testing#cards">Stripe.com Test Cards</a> to pay the subscription plan. For testing, you can use this Credit Card Number <strong>4242 4242 4242 4242</strong>. For the Year and Month, use <strong>4/42; for</strong> the CCV, use <strong>424</strong>.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ee2c374f970393a8b0a06/file-8gx9X67rxS.png" style="width: 625.6px;" alt="">
	</p></li>	
<li>When the payment processing is successful with the test account, you can go to the other browser with the Admin account and then check the <strong>WP Admin > Users</strong> and see if the test subscriber's role has changed. The role set to <strong>active</strong> in the Stripe Subscription settings should be assigned to this user. <br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ee3fe1f9ba00c2bcf989c/file-9F6WiGdN6l.png" alt="">
	</p></li>	
<li>Now to test if <strong>pause</strong> and <strong>resume </strong>roles are getting assigned to the test subscriber account, use the subscriber account and then go to the <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings">Customer Billing</a> page and click on the button to proceed to the Stripe Customer Billing/Portal page. Click the<strong> "Cancel Plan"</strong> button.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ee54274f970393a8b0a09/file-KZwhxErhy6.png" alt="">
	</p></li>	
<li> Choose <strong>"Pause Subscription" </strong>then click the<strong> "Pause plan" </strong>button. Using the Admin account, check in <strong>WP Admin > Users </strong>if the role has changed. Ensure that the <strong>"pause"</strong> attribute has a role for it to work.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ee62dcfd7fe604a7fe507/file-CMBQ5NtK4e.png" alt="">
	</p><p>
		<strong>Note:  </strong>We created the roles in wp-admin>Ultimate Member>User Roles to demonstrate the integration; the subscription status in the Role column is not the actual status but a role.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d461ff39eb10e8e84b8cb/file-IqR4IkY2Fn.png" alt="">
	</p></li>	
<li>On the same Stripe Customer Portal/Billing page, click on <strong>"Resume Plan."</strong> Again, check if the test account's user role has changed in the <strong>WP Admin > Users. <br>
	</strong>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ee994cfd7fe604a7fe510/file-WfMnj5LIzj.png" alt=""><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef0b674f970393a8b0a20/file-odVXhHYRkk.png" alt="">
	</p></li>	
<li>In the subscriber's account go Customer Billing Portal page>Manage Billings>Click the <strong>"Cancel"</strong> button to test the<strong> "Cancel Plan"</strong> role. Select "<strong>Cancel Subscription"</strong> and click on the<strong> "Cancel plan"</strong> button. Check in wp-admin>Users if the role has changed. <br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef1c3f39eb10e8e84ba8f/file-xyYeSdhTfQ.png" style="width: 374.6px;" alt=""><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef2d4f39eb10e8e84ba90/file-0KwBJgkIus.png" alt="">
	</p></li>	
<li>Use the user's account and subscribe to a plan with Free Trial using this Credit Card Number <strong>4000 0000 0000 3220. </strong>For the Year and Month, use <strong>3/24; for</strong> the CCV, use <strong>232. </strong>This is to test the <strong>"Past Due" </strong>role<strong>, </strong>A popup 3D secure will show. Click the <strong>"Complete"</strong> button. 
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef87c74f970393a8b0a31/file-vcNzqtcD3b.png" style="width: 584.6px;" alt="">
	</p><ul>
		
<li>Once the customer has subscribed, go to <a href="https://dashboard.stripe.com/test/customers">https://dashboard.stripe.com/test/customers</a></li>		
<li>Look for the customer and click on it. You'll be redirected to the customer's overview.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef617f39eb10e8e84ba97/file-ocVHXsv7iq.png" alt="">
		</li>		
<li>Under the <strong>Subscriptions</strong>, click the pencil icon to "<strong>Update subscription."<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef95474f970393a8b0a32/file-2okdqoxgpv.png" alt=""></strong></li>		
<li>Scroll down to the Subscription schedule, then change the <strong>Free Trial days</strong> value to <strong>0. </strong>Click on the "<strong>Update subscription"</strong> button.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649ef9ecb71911316e4002a2/file-tb7pAJhBTP.png" alt=""><strong></strong></li>		
<li>A 3D secure popup window will appear. To continue, click the <strong>"Update subscription" </strong>button.<br>
		<br>
		<strong></strong><strong></strong></li>		
<li>After the update, check if the role changed to past due.<br>
		<strong><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649efa9d1f9ba00c2bcf98c0/file-OA7uFHFiMs.png" alt="">wp-admin>Users<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649efb58f39eb10e8e84ba9e/file-1Vlobtm5jK.png" alt=""></strong></li>	</ul></li>	
<li>To Test the <strong>"Trialing"</strong> role, the shortcode must have the "trial_period_days" attribute with a minimum value of 2 days, <strong>e.g., trial_period_days = 2. </strong>Once the attribute is added, click the subscribe button to proceed to the checkout page. Use this Credit Card Number <strong>4242 4242 4242 4242</strong>. For the Year and Month, use <strong>4/42; </strong>for the CCV, use <strong>424</strong>.</li></ol><blockquote class="callout-blue">
	<strong>Note: When the trial period ends, it will automatically set the subscription status to "active." Ensure that the "active" attribute has a role assigned to it so that the subscriber's role will be changed.</strong>
</blockquote>
