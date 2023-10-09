---
layout: UMLayout
---
# Stripe FAQ - How Do Subscriptions Handle Staging Sites and Migrations?
<p>
	 When working on Staging Sites and planning on migrating to another site or live site, you need to check the following:</p><ol>
	
<li>The Stripe Webhook should match the URL of your live or staging site( see <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys" target="_blank">Webhook Settings</a> ). You can check the Webhook URL in Ultimate <strong>Member > Settings > Extensions > Stripe.</strong></li>	
<li>Stripe Pages should be created in<strong> WP-Admin > Pages </strong>and assigned in <strong>Ultimate Member > Settings > General Pages<br>
	</strong></li>	
<li>Stripe API Keys should be set in<strong> Ultimate Member > Settings > Extensions > Stripe</strong>. </li>	
<li>Stripe Plans are built with a Custom Post Type ( umm_stripe ), which means that this can be imported with popular import posts/pages plugins.</li></ol>
