# Import Existing Subscription Prices from your Account
<p>
	To save you time, Ultimate Member added a feature where you can simply import the created or existing subscription&nbsp;prices from your&nbsp;Stripe&nbsp;account.&nbsp;When you import the prices, it adds a role to each status automatically. The default role in each subscription status is the role that is set in WP Admin &gt; Settings &gt; General &gt; New User Default Role.</p><ul>
	
<li>Go to wp-admin&gt;Ultimate Member&gt; Settings&gt; Extensions&gt;Stripe.&nbsp;</li>	
<li>Click the&nbsp;<strong>"Import Prices from your Stripe Account"</strong> button.<br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649e9496cfd7fe604a7fe4c2/file-u3NDUZKQpd.png">
	</p></li>	
<li>
	
<p>
		Once finished importing, It will display all the existing subscription prices you have created in Stripe.
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6470c805549b2b747a06a359/file-WBW0iOKPE4.png">
	</p></li>	
<li> When you import prices from the Stripe.com account, it should create Stripe Plans automatically and they are ready to use. Go to wp-admin&gt; Ultimate Member&gt; Stripe Plans. You can see here the following:
	
<ul>
		
<li>Plan ID -&nbsp;&nbsp;You can use this to set the Stripe field's default selected plan in the Register form via the Form Builder</li>		
<li>Mode -&nbsp;The Sandbox with the orange icons means that the Prices were created in Test Mode.</li>	</ul></li>	
<li><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6470c88d06d1de0f8f3de92d/file-rVQp0kI94F.png"></li>	
<li>When you try to edit the Stripe Plan, you will also notice that the Stripe Type/Mode and Stripe Price are locked. This is done to avoid interfering with the Site's and Stripe.com's subscriptions.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6470cdc901fe745c0ae9825b/file-8TizAdTPs3.png">
	</p></li>
	
<li>
	<div>
		You can still create your Stripe Plans manually in UM &gt; Stripe Plans &gt; Add New.&nbsp; For more info, go to this 
		<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices">article.</a> <br>
	</div></li></ul>
