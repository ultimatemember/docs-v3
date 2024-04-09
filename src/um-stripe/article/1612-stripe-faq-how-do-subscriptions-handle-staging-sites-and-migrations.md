---
---
# Stripe FAQ - How Do Subscriptions Handle Staging Sites and Migrations?
 When working on Staging Sites and planning on migrating to another site or live site, you need to check the following:

1. The Stripe Webhook should match the URL of your live or staging site( see  [Webhook Settings](/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys)  ). You can check the Webhook URL in <strong>Ultimate</strong> <strong>Member &gt; Settings &gt; Extensions &gt; Stripe.</strong>
2. Stripe Pages should be generated or  <strong>[created in WP-Admin Pages](/docs-v3/um-stripe/article/1900-how-to-create-stripe-pages-manually)</strong> and assigned in <strong>Ultimate Member &gt; Settings &gt; General Pages</strong>
3. Stripe API Keys should be set in <strong>Ultimate Member &gt; Settings &gt; Extensions &gt; Stripe</strong>.
4. Stripe Plans are built with a Custom Post Type ( umm\_stripe ), which means that this can be imported with popular import posts/pages plugins.