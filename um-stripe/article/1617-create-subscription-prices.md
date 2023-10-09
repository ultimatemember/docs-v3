---
layout: UMLayout
---
# Create Subscription Prices


### Overview
<p>
		 Stripe allows you to create subscription prices for your subscription shortcode. This way, you can create multiple subscribe buttons with different prices or Stripe Plan options in the Register form.</p><p>
	If you have existing subscription prices, you can simply 
	<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account" target="_blank">import them from the stripe settings</a> but if you have not created any prices yet, do the following steps below:</p><p>
	 1. To create a new subscription/product price, go to 
	<a href="https://dashboard.stripe.com/" target="_blank">https://dashboard.stripe.com/</a> and click "<strong>Products</strong>" from the menu tabs.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f622a1188a9d242a7d5be0/file-GGEqHQjhzS.png" alt="" style="display: block; margin: auto;"></p><p>
	 2. Click the " +
	<strong>Add product</strong>" button to display the form.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62388188a9d242a7d5be2/file-1U2CzmwMRx.png" alt="" style="display: block; margin: auto;"></p><p>
	 3. Add the 
	<strong>"Name</strong>", "<strong>Description(optional)</strong>" and "<strong>Image(optional)."</strong></p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f624c5188a9d242a7d5be5/file-GKKvbGkpLj.png" alt="" style="display: block; margin: auto;"></p><p>
	 4. In the Price Information, UM Stripe module supports 
	<strong>Recurring Prices </strong>and <strong>One-time</strong> <strong>Prices </strong>as the Pricing Models.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62882c490cd5d5b96a1bf/file-Z7je1dsxgQ.png" alt="" style="display: block; margin: auto;"></p><p>
	Suppose you have selected Recurring as your pricing model. In that case, you can choose the following
	<strong> Billing Period </strong>from the drop-down menu: <strong>Daily, Weekly, Monthly, Every 3 months, </strong><strong style="background-color: initial;">Every 6 months, </strong><strong style="background-color: initial;">Yearly, </strong>&<strong style="background-color: initial;"> </strong><strong style="background-color: initial;">Custom.</strong></p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984c0e92cb8c175b469163/file-mMF221HUQF.png" style="width: 323px; float: left; margin: 0px 10px 10px 0px;" alt=""></p><p>
	Create multiple pricing options per product by clicking the 
	<b style="background-color: initial;">"+Add another price" </b>button. </p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/629848cc5732000792520c02/file-cSlCGFPq85.png" alt="" style="display: block; margin: auto;">This way, you can create an option for your users to choose whether they want recurring or one-time payments.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984bb95732000792520c0e/file-Det8o1q8E1.png" style="width: 476px; display: block; margin: auto;" alt=""></p>
<div>
	<p>
	5. Once the product is saved, you need to <strong><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account">import the prices from your Stripe Account</a> </strong>in <strong>wp-admin> Ultimate Member> Settings>Extension>Stripe</strong>. Once the import is done, the created Prices will be displayed in the Stripe Plans form in
		<strong style="background-color: initial;"> WP-</strong><strong style="background-color: initial;">Admin > Ultimate</strong><strong style="background-color: initial;"> Member</strong><strong style="background-color: initial;"> > Stripe Plans. </strong>
	</p>
</div><p>
	Hover your mouse over the Stripe Plan and click on edit.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d92b142d97d1c0459142f/file-8hfScHYbCc.png"></p><p>
	You will see the product type and price you created with Stripe under the Subscription Price. These are locked to avoid conflict. If you have selected One-time from type, the one-time price you have created in Stripe will be displayed in Subscription Price.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651d94f005231a0b51d23376/file-DckD8Q6zKx.png"></p>

### UM Stripe Plan Settings
<ol>
	
<li><strong>Title</strong> - Add or edit the title of your Stripe plan.</li>	
<li><strong>Setup Subscription</strong>
	
<ol>
		
<li><strong>Type </strong>- If prices are imported from your Stripe account, it only displays the product payment type, and you'll be unable to edit it. If you set up the Stripe Plan in Ultimate Member, you can choose whether your product is <strong>recurring</strong> or <strong>one-time</strong>.</li>		
<li><strong>Subscription Price </strong>- If prices are imported from your Stripe account, it only displays the product prices you've created in Stripe, and you'll be unable to select from the prices. If you set up the Stripe Plan in Ultimate Member, you can choose which imported subscription price you prefer.</li>	</ol></li>	
<li><strong>Roles</strong> - Assign a role to each <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">Stripe Events</a>.</li>	
<li><strong>Shortcode</strong> - The <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">shortcode</a> generates a button for customers to check out and subscribe to your Stripe plan.</li>	
<li><strong>Subscribe URL </strong>- The URLs are auto-generated once you import the price from your stripe account. The URL will redirect users to the Stripe Checkout with your Stripe plan.
	
<ol>
		
<li><strong>Short </strong>- This subscribe URL includes the stripe plan ID e.g. <a href="https://ultimate-member-32612-8491614.umsites.net?um_stripe_plan_id=51">https://ultimate-member-32612-8491614.umsites.net?um_stripe_plan_id=51</a></li>		
<li><strong>Hashed</strong> - This subscribe URL is a hashed URL to prevent the post_id from being exposed. The created Stripe Checkout Page when you activated the UM Stripe plugin is to hold the generated hashed as a Subscribe URL. e.g.<a href="https://ultimate-member-32612-8491614.umsites.net/stripe/"> https://ultimate-member-32612-8491614.umsites.net/stripe/<a href="https://um.x/checkout/OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ">OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ</a></a></li>	</ol></li></ol>

### Customize the slug of the Subscribe URL
<p>
	The default URL slug is yoursitedomain.com/
	<strong>stripe</strong>/<random hash>. To customize the slug of the Subscribe URL, do the following steps:</p><ul>
	
<li>Go to<strong> wp-Admin > Pages >Hover to UM Stripe Checkout page> Click on "Quick Edit"<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db1f9ed8c6d2f1cffdf15/file-eleEKK6C3y.png"></strong></li>	
<li>Type your preferred slug in the field.<br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db292c00c2b65208e1c82/file-VQ0SaN8bsz.png">
	</p></li>	
<li>Click the <strong>U</strong><strong>pdate</strong> button to save. When you visit the page, you'll notice the modified slug in the Stripe Checkout URL. If there is no URL parameter or if the URL parameter is wrong, the page will be inaccessible and will redirect to the homepage.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db77a42d97d1c0459145f/file-yZAx80VqBx.png">
	</p></li></ul><p>
	<strong>NEXT: <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference" target="_blank">SHORTCODE REFERENCE</a></strong></p>
