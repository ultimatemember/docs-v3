# Setting up Webhook and Test/Public Keys
<h3>Test/Publish Keys</h3>
<h2>
<p>
	You can retrieve the Test/Publishable Key and Secret Key from the 
	<a href="https://dashboard.stripe.com/" target="_blank">Stripe Dashboard</a> &gt; Developers &gt; API Keys. Copy the keys and add them within the Stripe plugin settings&nbsp;( Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe ).
</p>
</h2>
<p>
	<a href="https://stripe.com/docs/keys#limit-access"></a>
</p>
<p>
	Note: We recommend that you use a&nbsp;
	<strong>Restricted Key </strong>for live sites and a&nbsp;<strong>Secret Key</strong> for local or staging sites for testing purposes.&nbsp;More details can be found in this <a href="https://stripe.com/docs/keys#limit-access" target="_blank">article</a>.
</p>
<ul>
	<li><strong>Restricted Key&nbsp;</strong>for live sites&nbsp;</li>
	<li><strong>Test Publishable Key</strong>&nbsp; for the sandbox mode</li>
	<li><strong>Live Publishable Key</strong> for live mode</li>
</ul>
<h2>Restricted Key Settings</h2>
<div>
	We are now using the restricted key instead of the standard secret key. To set your Restricted Key, navigate to 
	<strong>Stripe Dashboard&gt;Developers&gt;Api Key&gt;Restricted Key</strong> and Click <strong>+Edit</strong> or <strong>+Create Restricted Key</strong> button.
</div>
<div>
	Enter a key name and look for the resource types listed below in the API Keys and configure the necessary API permissions:
</div>
<table>
<tbody>
<tr>
	<td>
		<strong>Resource Type</strong>
	</td>
	<td>
		<strong>Permissions</strong>
	</td>
</tr>
<tr>
	<td>
		Customers
	</td>
	<td>
		Write&nbsp;
	</td>
</tr>
<tr>
	<td>
		Checkout Sessions
	</td>
	<td>
		Write&nbsp;
	</td>
</tr>
<tr>
	<td>
		Customer portal
	</td>
	<td>
		Write
	</td>
</tr>
<tr>
	<td>
		Prices
	</td>
	<td>
		Read
	</td>
</tr>
<tr>
	<td>
		Subscriptions
	</td>
	<td>
		Read
	</td>
</tr>
<tr>
	<td>
		Webhook Endpoints
	</td>
	<td>
		Write
	</td>
</tr>
</tbody>
</table>
<div>
	<p>
		Once you're done setting up the restricted key, click the
		<strong> "Create Key" </strong>button, at the bottom right to save your settings.
	</p>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650a97d99446233b93527fbb/file-CTgXmhPKdu.png" style="width: 613.6px; display: block; margin: auto;" alt="">
	</p>
</div>
<h2> Webhook</h2>
<p>
	Stripe uses webhooks to communicate with your site. It provides information such as the status of the payment or subscription and is used to update the user's role based on subscription events from Stripe's side of things. This also updates the price and product details on your site when you change them on your stripe.com account.
</p>
<p>
	When you check/uncheck the 
	<strong>"Sandbox/Test Mode"</strong>, you will notice the fields' labels are changing. When checked, the fields will be in test mode, if it is unchecked it means that it is in live mode.
</p>
<p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649e7c9dcfd7fe604a7fe4a7/file-BeAy5kC8DH.png" style="width: 517.6px;" alt="">
</p>
<p>
	 In the Stripe settings, you'll find a webhook endpoint ready for you to copy and paste into your Stripe.com account.
</p>
<ul>
	<li>Head to&nbsp;<strong>U</strong><strong>ltimate Member &gt; Settings &gt; Extensions&gt; Stripe</strong>. Beside the&nbsp;Webhook Endpoints section is where you can copy your Webhook endpoint URL or when you have added the API Keys, Press on the&nbsp;<strong>"Connect with stripe" </strong>button, and your Webhook endpoint will be added instantly to your Stripe account settings.
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650aa281b57bfa3b524b136f/file-M8377saI19.png">
	</p>
	</li>
	<li>When you try to click on 
	<strong style="background-color: initial;">"Connect with Stripe"</strong>, it should validate the Publishable key and Secret key. It will show an error message when they are invalid.&nbsp;</li>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650aa146b57bfa3b524b136e/file-kGDfiY7hDa.png">
	<li>
	<div>
		When successfully connected, it should show the
		<strong> "Disconnect Stripe account"</strong> and <strong>"Import Prices from your Stripe account"</strong> buttons.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650aa34996b8220e08ace2e3/file-dyZW46gcRc.png">
	</div>
	</li>
	<li>
	<div>
		<div>
			When you attempt to connect with Stripe, the error shown in the image below will appear if the Stripe extension is installed on localhost or your own computer and is utilizing a local domain. For a site to receive the payload or events from the Stripe.com events transactions, the Webhook URL for Stripe must be publicly accessible.
			<em>&nbsp;</em><em>Even if this webhook creation error occurs, you can still import pricing locally.</em><br>
			<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/646b612637f16f5e28f5e72c/file-bPQiO1aMtK.png" alt="">
		</div>
	</div>
	</li>
	<li>Next, in your Stripe Dashboard, go to <a href="https://dashboard.stripe.com/webhooks" target="_blank">Webhook Setting</a> and check if the webhook URL has been added to the webhook endpoint. There may be a delay before it appears, so please wait a few seconds or try to reload the Stripe page.
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650aa4bcb57bfa3b524b1370/file-GDPcaMr1WL.png">
	</p>
	</li>
	<li>To view the events, click the webhook endpoint URL. When you clicked on the Connect with Stripe button from the previous step above, it auto-generates the following event hooks(17):
	<ul>
		<li>charge.expired</li>
		<li>charge.failed</li>
		<li>charge.pending</li>
		<li>charge.refunded</li>
		<li>charge.succeeded</li>
		<li>checkout.session.completed</li>
		<li>checkout.session.expired</li>
		<li>customer.created</li>
		<li>customer.deleted</li>
		<li>customer.subscription.updated</li>
		<li>customer.subscription.created</li>
		<li>customer.subscription.deleted</li>
		<li>customer.subscription.pending_update_expired</li>
		<li>customer.subscription.updated</li>
		<li>payment_intent.payment_failed</li>
		<li>price.deleted</li>
		<li>price.updated</li>
		<li>product.updated</li>
	</ul>
	</li>
	<li>If the site experiences an error, as seen in the screenshot below, the webhook triggers retries after an hour. If you need a trigger immediately, press the "Resend" button.
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/646f8dcb1335a10611d0a8c5/file-giLYcPlYl7.png" alt="">
	</p>
	</li>
	<li>
	<p>
		Depending on which you set up first, you can repeat this process for your live Webhook Secret or vice versa.
	</p>
	</li>
</ul>
<h3>NEXT: <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages">Setting up Stripe Success and Cancel Payment&nbsp;Pages</a></h3>