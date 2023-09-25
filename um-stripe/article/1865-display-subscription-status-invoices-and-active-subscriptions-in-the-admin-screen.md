---
layout: UMLayout
---
# Display Subscription Status, Invoices and Active Subscriptions in the Admin screen
<p>
	The Stripe Extension has features that display subscription status, invoices, and active subscriptions on the admin screen. This article will explain how to use the features.</p><h4>Display Subscription Status</h4><p>
	When you have successfully set up your Stripe Extension, go to 
	<strong>wp-admin > Users</strong>. Here you'll see the following subscription statuses for your users:</p>
<table>
<tbody>
<tr>
	<td>
		<strong>Active</strong>
	</td>
	<td>
		displays when the user's subscription is active
	</td>
</tr>
<tr>
	<td>
		<strong>Inactive</strong>
	</td>
	<td>
		<strong></strong>displays when the user's subscription is inactive
	</td>
</tr>
<tr>
	<td>
		<strong>Trialing</strong>
	</td>
	<td>
		displays when the user's subscription is trialing
	</td>
</tr>
<tr>
	<td>
		<strong>Canceled</strong>
	</td>
	<td>
		displays when the user's subscription is canceled
	</td>
</tr>
<tr>
	<td>
		<strong>Revoked</strong>
	</td>
	<td>
		<strong></strong>displays when the user's subscription has been revoked after assigning the Stripe customer to another WP account
	</td>
</tr>
<tr>
	<td>
		<strong>Unpaid</strong>
	</td>
	<td>
		<strong></strong>displays when the user's subscription is unpaid 
	</td>
</tr>
<tr>
	<td>
		<strong>Past Due</strong>
	</td>
	<td>
		<strong></strong>displays when the user's subscription is past due 
	</td>
</tr>
<tr>
	<td>
		<strong>Paused</strong>
	</td>
	<td>
		displays when the user's subscription is paused
	</td>
</tr>
</tbody>
</table><p>
	The "
	<strong>View on Stripe"</strong> link under each status opens a new tab to your customer's Stripe overview page.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649afde8c5d2b53344e72e26/file-hqPDKXkaAG.png" alt="" style="display: block; margin: auto;"></p><h4>Invoices and Active Subscriptions</h4><p>
	When you edit a user with an 
	<strong>active subscription status </strong>in <strong>wp-admin > Users</strong>, you'll be able to see the user's or customer's subscriptions and invoices table under the<strong> </strong><strong>Ultimate Member Stripe</strong> section.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650b11a4e249755d2f85c3bd/file-A5KmoUMXbs.png"></p><p>
	The invoice table will only display the most recent invoices, not all. You need to click the "Manage on Stripe" link, which will open a new tab to the customer overview on Stripe.com.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650b12fd15e8de2d9d32584f/file-f3OSIYeqjM.png"></p><p class="callout-blue">
	<strong>Note: You may test or create a simulation of how the statuses change when testing your integration with Stripe test clocks. See </strong><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks">https://ultimatemember.github.io/docs-v3/um-stripe/article/1803-test-your-integration-with-stripe-test-clocks</a><strong> for more information.</strong></p>
