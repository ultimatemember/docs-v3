# CLI Integration
<h3>Overview</h3><p>
	This article provides instructions on how to integrate the Stripe CLI to test our Ultimate Member Stripe extension on your local computer. The integration will help&nbsp;ensure that your webhook endpoint is working properly before going live.&nbsp;</p><h3>Setup</h3><h3></h3><ul>
	
<li><strong><a href="https://stripe.com/docs/stripe-cli">Install Stripe CLI</a> </strong>and log in&nbsp;to authenticate your account.
	</li>	
<li>	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6493fc42885de842a5d8c9e1/file-TuXnARK8wV.png" alt="" style="display: block; margin: auto;">Check if the pairing code matches the Stripe CLI login command.&nbsp;
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6493fd06885de842a5d8c9e3/file-giMVkHREeh.png" style="width: 453.778px;" alt="">When&nbsp;the verification is successful, the account id will appear in the command.
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649432b11c43322e9690de73/file-pMzTADIQTF.png" alt="">
	</li></ul><h4>1. Forward events to a local webhook endpoint</h4><ul>
	
<li>To send all Stripe events in test mode to your local webhook endpoint, use the <code>--forward-to</code> flag. Use the <code> --skip-verify</code> flag to disable HTTPS certificate verification.
	
<ul>
		
<li><strong>Command Line: &nbsp;</strong><strong>stripe listen --forward-to "localhost:8000/?umm-stripe-webhook=true"</strong></li>		
<li>
		
<p>
			<strong>Output:</strong><code style="">Ready! Your webhook signing secret is '{{WEBHOOK_SIGNING_SECRET}}' (^C to quit)</code>
		</p><p>
			<strong>
			</strong>
		</p><p>
			<strong>
			<strong>Example:<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649434c9c5d2b53344e729ae/file-rBgBPcK9Lo.png" style="width: 1078.78px;" alt=""></strong></strong>
		</p></li>	</ul></li>	
<li>Copy the Webhook secret and add it in the /wp-config.php file before the "That's all" code comment:&nbsp;&nbsp;</li>
	<pre>define( 'UM_STRIPE_DEV_LOCAL', 'whsec_5741b47f3f9faabd935713136e08a47e3f6e7d3b78e501787e9891838d2' );

/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) { 
    define( 'ABSPATH', __DIR__ . '/' );
}
	</pre><p>
		&nbsp;When the aforementioned constant is defined or added to that file, the following message appears in&nbsp; 
		<strong>wp-admin&gt;Ultimate Member&gt;Settings&gt;Extensions&gt;Stripe</strong>:<br>
	</p><p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649454351c43322e9690deab/file-8qLOCDnCB4.png" style="width: 906.778px;" alt="">
	</p><ul>
		
<li>
		
<p style="">
			<strong style="font-weight: bold;">Optional:&nbsp;</strong>To forward specific events in a comma-separated list, use the <code style="">--events</code> flag
		</p><p style="font-weight: bold;">
		</p><ul>
			
<li><strong>Command Line: </strong><br>
			<be style=""><code style="">stripe listen --events payment_intent.created,customer.created,payment_intent.succeeded,charge.succeeded,checkout.session.completed,charge.failed --forward-to localhost:8000/?umm-stripe-webhook=true</code></be></li>			<strong></strong>
		</ul></li>		
<p style="font-weight: bold;">
		</p><p style="font-weight: bold;">
			<strong></strong>
		</p><p style="font-weight: bold;">
		</p><li>
		
<p style="">
			<strong>Optional:&nbsp;</strong>Use the <code style="">--load-from-webhooks-api</code> and&nbsp;<code style="">--forward-to</code> flags if you've already registered your endpoint on Stripe.
		</p><ul>
			
<li><strong>Command Line:</strong>&nbsp;<be>
			<code>stripe listen --load-from-webhooks-api --forward-to localhost:5000</code></be></li>		</ul></li>	</ul><p>
		<strong>
		<strong>	</strong>
		</strong>
	</p><p>
		<strong>	</strong>
	</p></ul><p>
	With this command, events are&nbsp;sent to your public&nbsp;webhook endpoint on Stripe-registered and&nbsp;will be forwarded to your local webhook endpoint. The path is appended to your local webhook endpoint in the 
	<code style="">--forward-to</code>&nbsp;the path once the path has been loaded, parsed and its registered events have been taken into account. Use the 
	<code style="">{{WEBHOOK_SIGNING_SECRET}}</code> from the initial output of the <code style="">listen</code> commands when&nbsp;validating webhook signatures.</p><h4><strong>2.&nbsp;Trigger events to test your webhooks integration<br><ul>
	
<li><span style="background-color: initial;">To simulate the event that happens after a client payment is successful for the <a href="https://stripe.com/docs/api/checkout/sessions/create">Create a session API</a> in the <a href="https://stripe.com/docs/checkout/quickstart">Prebuilt Checkout page</a>, run the <code>stripe trigger checkout.session.completed</code> command.</span>
	
<ul>
		
<li><span style="background-color: initial;">
		<div style="">
			Command Line:&nbsp;
			<code style="font-weight: normal;">stripe trigger checkout.session.completed</code>
		</div></span></li>	</ul></li></ul></strong><p><strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p><p>
	<strong></strong></p></h4>
