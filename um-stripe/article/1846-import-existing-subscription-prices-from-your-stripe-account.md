---
layout: UMLayout
---
# Import Existing Subscription Prices from your Stripe Account
<p>
	To save you time, Ultimate Member added a feature where you can simply import the created or existing subscription prices from your Stripe account. When you import the prices, it adds a role to each status automatically. The default role in each subscription status is the role that is set in WP Admin > Settings > General > New User Default Role.</p><ul>
	
<li>Go to wp-admin>Ultimate Member> Settings> Extensions>Stripe. </li>	
<li>Click the <strong>"Import Prices from your Stripe Account"</strong> button.
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dcb8b42d97d1c04591484/file-r0mfgyZ1kf.png">
	</p></li>	
<li>
	
<p>
		Once finished importing, It will display all the existing subscription prices you have created in Stripe.
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dcc0e42d97d1c04591486/file-STa25z50Gg.png">
	</p></li>	
<li> When you import prices from the Stripe.com account, it should create Stripe Plans automatically and they are ready to use. Go to wp-admin> Ultimate Member> Stripe Plans. You can see here the following:
	
<ul>
		
<li>Plan ID -  You can use this to set the Stripe field's default selected plan in the Register form via the Form Builder</li>		
<li>Mode - The Sandbox with the orange icons means that the Prices were created in Test Mode.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dccf6c00c2b65208e1ca6/file-lyHpz9FYVN.png"></li>	</ul></li>	
<li>When you try to edit the Stripe Plan, you will also notice that the Stripe Type/Mode and Stripe Price are locked. This is done to avoid interfering with the Site's and Stripe.com's subscriptions.<br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dd148ed8c6d2f1cffdf4d/file-C20ohBGkpx.png">
	</p></li>
	
<li>
	<div>
		You can still create your Stripe Plans manually in UM > Stripe Plans > Add New.  For more info, go to this 
		<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices">article.</a> <br>
	</div></li></ul>
