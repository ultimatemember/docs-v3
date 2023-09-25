# FAQ - How Do Subscriptions Handle Staging Sites and Migrations?
<p>
	When working in Staging Sites and plans on migrating to another site or live site, you need to check the following:</p><ol>
	
<li>The Stripe Webhook should match the URL of your live or staging site( see <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys">Webhook Settings</a> ). You can check the Webhook URL in&nbsp;Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe.</li>	
<li>Stripe Pages should be created in WP-Admin Pages and assigned in the Ultimate Member &gt; Settings &gt; General Pages.</li>	
<li>Stripe API Keys should be set in Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe</li></ol>
