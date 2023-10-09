---
layout: UMLayout
---
# Stripe - Add Subscription Plans to a Registration Form
<p>
	 Before adding a Stripe plan to a registration form, ensure that you've read and set up the required details in the following documentation articles:</p><ul>
	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys" target="_blank">Setting up Webhook and Test/Public Keys</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages" target="_blank">Setting up Stripe Success and Cancel Payment Pages</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices" target="_blank">Create Subscription Prices</a></li></ul><p>
	 To add a Stripe subscription plan to a registration form, go to 
	<strong>WP Admin > Ultimate Member > Forms > Edit/Add a Registration form.</strong> Click on the " <strong>plus(</strong><strong>+)</strong> " icon to show the Fields Manager.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f9015b188a9d242a7d5efd/file-byXinfFcVn.png" style="width: 699px;" alt=""></p><p>
	Click 
	<strong>"Stripe Plans"</strong> in the Predefined Fields section of the Fields Manager. You may also add a predefined field called <strong>"Stripe Billing Email" </strong>if you want to add an option where this email field’s value will be used as the billing email for the Stripe Account.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6477124d936c7945969ed386/file-XziKAiWqHD.png" style="width: 666.6px;" alt=""></p><p>
	 Edit the Stripe Subscriptions field by clicking the 
	<strong>Pencil icon</strong> to display the field settings</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/647715e57360c921d3f9cee2/file-pH6QG9xjqG.png" style="width: 653.6px;" alt=""></p><p>
	There are three (3) stripe plan types available for displaying the field in a registration form:</p><ol>
	
<li><strong>Stripe Plan ( Hidden ) </strong>- The Stripe Plan is hidden in the Register form. Once the form is submitted, the plan will be assigned to the user and redirected to the Stripe checkout page.</li>	
<li><strong>Single Plan ( Visible )</strong> - Displays a single plan as a radio field.</li>	
<li><strong>Multiple Plan Options </strong>- Displays multiple plan options as radio fields.</li></ol><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/647717017360c921d3f9cee3/file-wnYmvg4fRq.png" style="width: 653.6px;" alt=""></p><p>
	The title and subscription prices are from the product created on Stripe.com. The Stripe Prices dropdown field is populated by the subscription plans created in 
	<strong style="background-color: initial;">WP-Admin > Ultimate Member > Stripe Plans </strong>or the imported Stripe plans. The optional Default Value should be the Subscription Plan ID created in WP-Admin > Ultimate Member > Stripe Plans.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6475a1d9549b2b747a06a52c/file-VECvyP0F4o.png" style="width: 454.6px;" alt=""></p><p>
	Once the field settings and the registration form are saved, visit the Register page or add the Register form shortcode to a page to display it. The subscription plans field in the front end should look like the image below.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64b64f28c2f5ed048130c6e4/file-Hzg2SmkQcx.png"></p><blockquote>
	<strong>NOTE: </strong>When a user tries to register with their selected plan, they will be redirected to the Stripe Checkout external page to pay the subscription price. Users will be logged in automatically on the site before redirecting them to the Stripe Checkout external page. If the user is successfully subscribed, they will be redirected back to the site on the 
	<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages" target="_blank">Success page</a> and If they didn't subscribe to a plan, they will be linked back to the site on the 
	<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages">Cancel page</a>.
</blockquote>
