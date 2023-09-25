---
layout: UMLayout
---
# Setting up Success, Cancel Payment and Already Subscribed Pages
<div>
	<p>
		When you activate the Stripe extension from 
		<strong>wp-admin>Plugins</strong>, a notification on top will appear, showing you the pages that need to be created. When you click the<strong> "Create Pages"</strong> button, the Stripe Pages, which are the <strong>Success</strong><strong>, </strong><strong>Cancel,</strong> and<strong> Already Subscribed</strong> Pages, will be created automatically and assigned to the page settings.
	</p>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649daa89cfd7fe604a7fe3f8/file-L8HXGD6oiW.png">
	</p>
	<p>
		Go to 
		<strong>wp-admin> Pages</strong> to check if the pages are successfully created.
	</p>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649daa9d1f9ba00c2bcf9783/file-nscOM9Ktil.png">
	</p>
</div>
<p>
	 When a user attempts to subscribe and is then redirected to the Stripe Checkout page, there are three pages the user will be redirected to:
</p>
<ul>
	<li><strong>Payment Successful Page </strong>- The user will be redirected to this page when the payment is successful, completed, or the subscription starts trialing. The default content of this page is a <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">shortcode</a> that displays the user's order details.<br>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e6005542e1f64bf8026347/file-bp07TfeACR.png">
	</p>
	</li>
	<li><strong>Payment Canceled Page</strong> - The user will be redirected to this page<strong> </strong>when a user clicks on the logo of your store or the back button on the Stripe Checkout Page.<br>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e601f393a47f35db9dbd80/file-tmS66hUDTp.png" style="width: 623.6px;"><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e6049d42e1f64bf802634d/file-hmVo1WtOJE.png">
	</p>
	</li>
	<li><strong>Already Subscribed Page </strong>- This page is a landing page when a user tries to subscribe with a direct Subscribe URL but they are already subscribed, so they will be redirected to this page.<br>
	<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64e604b06ca77422d09644a9/file-RwsgSdcSao.png">
	</p>
	</li>
</ul>
<p>
	 To set the Success, Canceled, and Already Subscribed Pages, go to 
	<strong>WP Admin > Ultimate Member > Settings > General > Pages.<br>
	</strong>
</p>
<p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649dacad74f970393a8b0905/file-RwgNVvJSMH.png">
</p>
<strong>NEXT: <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices">Create Subscription Prices</a></strong>
