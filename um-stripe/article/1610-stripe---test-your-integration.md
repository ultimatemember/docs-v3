# Test your integration
<p>
	 Sandbox/Test Mode allows you to process subscriptions&nbsp;and simulate different payment responses using <a href="https://stripe.com/docs/testing#cards">Stripe.com Test Cards</a>. Toggle the &nbsp;Sandbox/Test Mode checkbox and ensure the API Keys are listed in the Ultimate Member &gt; Settings &gt; Extensions &gt; Stripes. After that, click on the Subscription button to redirect you to the Stripe Checkout page and then&nbsp;add the test card details. &nbsp;</p><p>
	 To test the integration, ensure that you've read and setup the required details in the following documentation before you proceed:</p><ul>
	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys">Setting up Webhook and Test/Public Keys</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages">Setting up Stripe Success and Cancel Payment&nbsp;Pages</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices">Create Subscription Prices</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">Shortcode Reference</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings">Create &amp; Test Customer Billings</a></li></ul><blockquote>
  Note: You cannot use the localhost to test the integration so a staging site is mandatory &nbsp;&nbsp; 
	<br>
</blockquote><h3>Testing the Subscription Statuses and Assigning of Roles</h3><ol>
	
<li>Using your Admin account, create a new account with a subscriber role.</li>	
<li>With your Admin account, open the WP Admin &gt; Users page and see the Role column. <em>Keep this browser window open during testing.</em><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/60f53aa7b55c2b04bf6d58ee/file-UrcBd2PrZ3.png" style="width: 613px;"></li>	
<li>Add the Stripe shortcode to a Page.</li>	
<li>Using a different browser, use the subscriber account to log in to the site.&nbsp;</li>	
<li>Using the Subscriber account, go to the page where you added the Stripe shortcode.&nbsp;</li>	
<li>Click on the Stripe button to proceed to the checkout.</li>	
<li>Use the Test Credit Cards from&nbsp; <a href="https://stripe.com/docs/testing#cards">Stripe.com Test Cards</a> to pay the subscription plan</li>	
<li>When the payment process is successful, using the Admin account, check the WP Admin &gt; Users and see if the test subscriber's role has changed. The role set to the <strong>active</strong> attribute in the shortcode should be assigned to this user.</li>	
<li>Now to test if <strong>pause</strong> and <strong>resume </strong>roles are assigning to the test subscriber account, use the subscriber account and then go to the <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings">Customer Billing</a> page and click on the button to proceed to the Stripe Customer Billing/Portal page.<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/60f53d92b55c2b04bf6d5903/file-uFRrZTormi.png"></li>	
<li>Click on the "Cancel Plan" button and then choose "Pause Subscription". Using the Admin account, check if the role has changed in the WP Admin &gt; Users.</li>	
<li>On the same Stripe Customer Portal/Billing page, click on the "Resume Plan". Again, check the test account's user role if it has changed&nbsp;in the WP Admin &gt; Users.<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/60f53e7eb55c2b04bf6d5905/file-6EBzevUu14.png"></li>	
<li>To Test the Cancel plan, just click on the "Cancel Plan" button.</li></ol><h3></h3>
