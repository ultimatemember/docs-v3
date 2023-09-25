# Test your integration with test clocks
<p>
	Ultimate Member Stripe extension integrates the stripe&nbsp;checkout page, and customer billing features,&nbsp;allowing users to pay, subscribe and manage plans. Once you set up this extension, you must test its integrity.</p><p>
	Before testing your integration, make sure you've read and setup the required details in the following documentation before you proceed:</p><ul>
	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys" target="_blank">Setting up Webhook and Test/Public Keys</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1609-stripe-setting-up-stripe-success-and-failed-payment-pages" target="_blank">Setting up Stripe Success and Cancel Payment&nbsp;Pages</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1617-create-subscription-prices" target="_blank">Create Subscription Prices</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference" target="_blank">Shortcodes &amp; Subscription Events</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-register-form" target="_blank">Add Subscription Plans to a Register Form</a></li>	
<li><a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings" target="_blank">Create &amp; Test Customer Billings</a></li></ul><blockquote>
	
<p>
		<b style="font-style: normal;">Note:</b> Use the Stripe CLI to simulate Stripe events in your local environment. You must add the parameter&nbsp;`<b style="font-style: normal;">/?umm-stripe-webhook=true</b>` in the localhost URL e.g. `<b style="font-style: normal;"><a href="http://localhost:4242/?umm-stripe-webhook=true" target="_blank">http://localhost:4242/?umm-stripe-webhook=true</a></b>` as your local webhook URL.
	</p><p>
		To learn more about the Stripe CLI, please see this doc article:  
		<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1864-stripe-cli-integration" target="_blank">https://ultimatemember.github.io/docs-v3/um-stripe/article/1864-stripe-cli-integration</a>
	</p></blockquote><p>
	The 
	<strong>Stripe Test Clocks</strong>&nbsp;are easier ways to test your Billing integration. It helps to simulate test cases of your billing resources like subscriptions. With the Stripe test clock, you can advance the time in test mode to avoid waiting for a few days,&nbsp;weeks, or even a year to check and test the integration of your billings. <br>
	<br>
	For more details about Stripe test clocks and how to use them, you can go to this link: 
	<a href="https://stripe.com/docs/billing/testing/test-clocks" target="_blank">https://stripe.com/docs/billing/testing/test-clocks</a></p><p>
	To see if the integration is working we suggest you create roles in&nbsp;
	<strong>wp-admin&gt; Ultimate Member&gt; User Roles</strong> so you can set in <strong>wp-admin&gt;Ultimate Member&gt; Stripe Plans&gt; Edit a plan</strong> and see what happens when a subscription is active, unpaid, paused, past due, canceled or trialing.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be2c58bdb973f12e46186/file-DgYe5G7ZYE.png" alt=""></p><h3>Testing Integration with Stripe Test Clocks</h3><p>
	Go to your&nbsp;
	<a href="https://dashboard.stripe.com/test/dashboard" target="_blank">Stripe Dashboard</a> and set it to test mode.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be3e01c43322e9690e38f/file-YNcAe1bx4l.png" alt=""></p><p>
	Below are the steps you need to do to test your integration:</p><ol>
	
<li><strong>Create a test clock</strong><br>
	
<ul>
		
<li>Go to the<strong> </strong>Billing tab and click on the&nbsp;<strong>Test</strong>&nbsp;<strong>clocks&nbsp;</strong>tab.</li>		
<li>Click on the <strong style="background-color: initial;">+New simulation</strong>&nbsp;button.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be79c1c43322e9690e394/file-YBb4UCyGAZ.png" alt="" style="display: block; margin: auto;"></li>		
<li>Enter a name for the simulation and then set the Test clock&nbsp;time. It will be the starting date and time of your simulation. Click the<strong> Create</strong> button to continue.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be8e1c5d2b53344e72eee/file-ZxUUuuZtx0.png" style="width: 414.6px;" alt=""></li>		
<li>Once created, copy the<strong> Test Clock ID</strong> in the upper right corner.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649bea178bdb973f12e4618a/file-7WO6sd87Zs.png" style="background-color: initial;" alt=""></li>		
<li>Go to&nbsp;<strong>wp-admin&gt;Ultimate Member&gt; Settings&gt; Extension&gt;Stripe</strong></li>		
<li>Enable&nbsp;Sandbox/Test Mode</li>		
<li>Enable the&nbsp;Test Clock&nbsp;and paste the&nbsp;<strong>Test Clock ID&nbsp;</strong>in the field.&nbsp;&nbsp;This will create a Stripe customer for the Test clock</li>		
<li>Click Save Changes<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649becf9c5d2b53344e72ef1/file-KpoDHOTQtd.png" alt=""></li>	</ul></li>	
<li><strong>Set up your testing simulation<br>
	</strong>Create a customer you need for a test case for your simulation.
	
<ul>
		
<li><strong>Creating Customer</strong></li>	</ul><ol>
		
<ul>
			
<li>Go to wp-admin&gt; Users, and create a new customer or subscriber account.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649bef1c8bdb973f12e46191/file-qEZpB7VPNK.png" alt="">
			</li>
			
<li>
			<div>
			Go to&nbsp;Stripe Dashboard&gt; Billing&gt; 
				<a href="https://dashboard.stripe.com/test/test-clocks">Test clocks</a>&gt; Select and click on the test clocks simulation you've created.&nbsp;
			</div></li>
			
<li>
			<div>
			Under the 
				<strong>Clock Objects</strong>, you'll find here the customer you've created in wp-admin&gt;Users.&nbsp;&nbsp;Ensure that the customer email is the same as the one registered on your site.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649bf997e832b96f633ab3c4/file-hrden3ifVm.png" alt=""><class "callout-blue"="" ""=""><strong>&nbsp;Note: The customer created in wp-admin&gt;Users will only appear in test clocks if the Test Clocks option is enabled and the test clock ID is entered in wp-admin&gt;Ultimate Member&gt;Settings&gt;Extensions&gt;Stripe. Make sure to enable these settings first before creating a user.</strong>
				</class>
			</div></li>		</ul></ol></li></ol><h3><b style="background-color: initial;">Test Cases<br>
</b></h3><p>
	Before you proceed with this test, please ensure you have read 
	<a href="https://stripe.com/docs/billing/testing/test-clocks#how-to-use-test-clocks" target="_blank">How to use test clocks</a>.&nbsp;</p><ul>
	
<li>
	
<h3><strong>Trial &amp; Subscription</strong></h3><ul>
		
<li>Follow the steps above on how to create a customer then login to your site in another browser using the customer you've created.
		
<p>
			<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1dfdcfd7fe604a7fe35e/file-oyjSyxUWHD.png" style="width: 433.778px;" alt="">
		</p></li>		
<li>Then go to the <strong>Checkout page&nbsp;</strong>and select or click the subscribed button that links to the Stripe Plan you've set up with a free trial.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png" alt=""></li>		
<li>Enter the payment details. For testing, you can use this Credit Card Number <strong>4242 4242 4242 4242</strong>. For the Year and Month, use <strong>4/42</strong>; for the CCV, use <strong>424</strong>. Then click on the <strong>Start trial </strong>button.&nbsp; Once the subscription is successful, you'll get redirected to the Stripe success page of your site.
		
<p>
			<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2d1b74f970393a8b0887/file-B0RRpMvXlr.png" style="width: 680.778px;" alt="">
		</p></li>		
<li>Now go to your <strong>Stripe Dashboard&gt;Billing&gt; Test clocks&gt;</strong> Select your test clocks simulation and click on the user with the trial subscription.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d38e7cfd7fe604a7fe372/file-1pygW0NFDs.png" alt=""></li>		
<li>You'll see in the customer's overview that the subscription is on trial, then in the <strong>invoices </strong>section, you'll see that an <strong>invoice of $0.00</strong> is generated due to the free trial.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d3e3774f970393a8b088d/file-QEvuXRqk6P.png" alt=""></li>		
<li>Go to <strong>wp-admin&gt;Users</strong> and check if the role and the status have changed to Trialing.&nbsp;<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d3f4e74f970393a8b088e/file-ZuaLJX0j0V.png" alt=""></li>	</ul></li>	
<li>
	
<ul>
		
<h4><strong style="background-color: initial; font-family: inherit; font-size: 18px;">Pause &amp; Resume</strong></h4><h4>Pause</h4><li>Log in to your site using the subscriber account with <strong>Trial Subscription</strong> in another browser. Then go to the Customer Portal Page and click the <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings">Manage billing button</a>. It automatically redirects users to the Stripe Customer Billing/Portal page.&nbsp;<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1f23b71911316e4000cd/file-mmtna4ypbv.png" style="width: 704.778px;" alt=""></li>		
<li>Click on the<strong> Cancel Plan</strong> button. You'll be redirected to<strong> Billing&gt;Cancel or Pause</strong>. Under the current plan, select<strong> Pause Subscription</strong>, and click the <strong>Pause Plan</strong> button.<br>
		Take notice that in this example, the Plan Subscription will automatically renew after&nbsp;
		<strong>one year;</strong>&nbsp;therefore, we'll test it later using a test clock.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d46a21f9ba00c2bcf970e/file-A5gRAVSgpk.png" alt=""></li>		
<li>Go to Stripe Dashboard&gt; Billings&gt; Test Clocks&gt; Select your test clocks simulation&gt; click on the customer with a&nbsp;<strong>paused plan. </strong>You'll see in the customer's <strong>Overview&gt; Subscriptions </strong>that the collection is paused.<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4544b71911316e4000ed/file-hUX9yseHtQ.png" alt=""></li>		
<li>Go to wp-admin&gt;Users and check if the role and status have changed.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d461ff39eb10e8e84b8cb/file-IqR4IkY2Fn.png" alt=""></li>	</ul><ul>
		
<h4>Resume</h4><li>Go to Billing&gt; Test Clocks&gt; Select your test clock simulation and click on the <strong>Advance time</strong>&nbsp;button.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4d8d1f9ba00c2bcf9710/file-bg4srJuk3i.png" alt=""></li>		
<li>As we mentioned earlier, the resume time of the subscription paused plan is after 1 year, so we'll advance the time to a year. The clock time date is <strong>June 28, 2023,</strong> so we'll advance it to <strong>June 28, 2024</strong>. Once you've selected the date, click on the <strong>Advance </strong>button.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4ebdf39eb10e8e84b8d1/file-Ve6iarPqMg.png" style="width: 577.778px;" alt=""></li>		
<li>It'll then display the clock time that has advanced, click the customer whose subscription plan has been resumed.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d6d2dcfd7fe604a7fe3a0/file-3OdMezwE2Y.png" alt=""></li>		
<li>In the customer's overview, the subscription becomes active because the plan has been resumed. You can see in the Payments and Invoices that the payment for the 1st year was canceled and void because the subscription plan was paused.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d6ec4b71911316e40010b/file-4uQj5w5Q7R.png" alt=""></li>		
<li>Go to <strong>wp-admin&gt; Users</strong> and check if the role and status have changed.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d70a0b71911316e40010c/file-IZ4YOvdahw.png" alt=""></li>	</ul></li>	
<li>
	
<h3>Cancel</h3><ul>
		
<li>To test the cancel integration, log in to your site in another browser using the customer's account with an <strong>active subscription,</strong> then go to the&nbsp;<strong>Customer Billing Portal </strong>and click on the <strong>Manage billing</strong>&nbsp;button.<br>
		<strong></strong><strong><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1f23b71911316e4000cd/file-mmtna4ypbv.png" style="width: 657.778px;" alt=""></strong></li>		
<li>Click on the <strong>Cancel Plan</strong> button. You'll be redirected to<strong> Billing&gt;Cancel or Pause</strong>. Under the current plan, select the <strong>Cancel subscription,</strong>&nbsp;then click the <strong>Cancel plan</strong>&nbsp;button.&nbsp;<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d74dbf39eb10e8e84b8fc/file-yyyqt4Gsf1.png" alt=""></li>		
<li>Go to Stripe Dashboard&gt; Billings&gt; Test Clocks&gt; Select your test clocks simulation&gt; click on the customer with a canceled plan. You'll see in the customer's Overview&gt; Subscriptions and Payments that the subscription is canceled.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d7625cfd7fe604a7fe3a8/file-BEoCOXLjDu.png" style="width: 1061px;" alt=""></li>
		
<li>
		<div>
			Go to wp-admin&gt;Users and check if the role and status have changed.
			<br>
			<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d7707b71911316e40011b/file-RIYjEZydjf.png" style="width: 1027px;" alt="">
		</div></li>	</ul></li>	
<li>
	
<h3><strong>Past Due&nbsp;</strong></h3><ul>
		
<li>Log in to your site in another browser using the customer's account you've created in wp-admin&gt;Users. Then go&nbsp;to the <strong>Checkout page</strong>&nbsp;and subscribe to a plan with a free trial using these payment details: Credit Card Number&nbsp;<strong>4000 0000 0000 3220</strong>,&nbsp;expiring&nbsp;<strong>3/24</strong>, and CCV&nbsp;<strong>232</strong>.&nbsp;<br>
		<strong></strong><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png" style="width: 863px;" alt=""><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d7e94f39eb10e8e84b90a/file-j3K1180MxN.png" style="width: 895px;" alt=""></li>		
<li>&nbsp;A 3D secure popup window will appear. To continue, click the&nbsp;<strong style="background-color: initial;">"Complete"</strong>&nbsp;button.&nbsp;</li>		
<li>Once the Subscription Trial is Active, go to <strong style="background-color: initial;">Billing&gt; Test Clocks&gt; Select your test clock simulation&gt; Click on the customer with an active trial subscription. </strong>You will see that the subscription status is in Trial mode and will end on <strong>July 1</strong>.&nbsp;</li>		
<li>Click&nbsp;on the <strong style="background-color: initial;">Advance time</strong> button and set the clock to the day after the end date of the trial. In this example, we have set the time to <strong>July 2</strong>.<br>
		<strong></strong><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d80e61f9ba00c2bcf974b/file-ukGXeAdaQk.png" alt=""></li>		
<li>&nbsp;Once the clock time has been advanced, the payment failed, the customer was not charged because the card is declined, so the status will be <strong>Past Due.<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d85b4cfd7fe604a7fe3be/file-lQueAWPVxR.png" alt=""></strong></li>		
<li>You can check in<strong> wp-admin&gt;Users</strong> if the role and status have changed.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649eb133f39eb10e8e84ba3f/file-3xjNNJVKh5.png" alt="">
		</li>	</ul></li>	
<li>
	
<h3><strong>Unpaid</strong></h3><ul>
		
<li>If all retries scheduled for the customer's subscription payment have failed&nbsp;instead of&nbsp;<strong>canceled subscription status</strong>, you can change the settings and turn it into an&nbsp;<strong>unpaid subscription status</strong>.</li>		
<li>Go to:  <a href="https://dashboard.stripe.com/settings/billing/automatic">https://dashboard.stripe.com/settings/billing/automatic</a>. In the settings, scroll to <strong>Manage failed payments&gt; Subscription status &gt; If all retries for a payment fail &gt; Mark the subscription unpaid.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/640889579c8683055bad3991/file-zvelcOD6o5.png" alt=""></strong></li>		
<li><strong>Unpaid Subscription Setup</strong>
		
<ul>
			
<li>Log in to your site in another browser using the customer's account you've created in<strong> wp-admin&gt;Users</strong>. Then go&nbsp;to the&nbsp;Checkout page&nbsp;and subscribe to a plan with a free trial using these payment details:&nbsp;Credit Card Number:<strong> 4000000000000341,</strong> exp:<strong> 3/24&nbsp;CCV: 232<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png" style="width: 850px;" alt=""><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8a3d74f970393a8b08ca/file-ebZyySLYao.png" style="width: 725px;" alt=""><br>
			</strong></li>			
<li>Go to <strong>Billing&gt; Test Clocks&gt; Select your test clock simulation&gt; Click on the customer with an active trial subscription</strong>.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8bf6f39eb10e8e84b920/file-coQQeqzJoG.png" style="width: 971px;" alt=""></li>			
<li>You will see that the subscription status is in Trial mode and will end on&nbsp;<strong>July 1</strong>. Click on the&nbsp;Advance time button&nbsp;and set the clock to the day after the end date of the trial.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8f0cb71911316e400142/file-rvCFipRBXC.png" style="width: 1084px;" alt=""></li>			
<li>In this example, we have set the date to&nbsp;<strong>July 2, 2023</strong>. The subscription is now&nbsp;<strong>Past due </strong>because of the failed payment, so the invoice shows that it's retrying.<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d9146cfd7fe604a7fe3d0/file-KyBxZsPJzy.png" alt=""></li>			
<li>The charge retry schedule will be displayed if you hover your mouse over the <strong>Retrying</strong> notice.<br>
			<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d93291f9ba00c2bcf9765/file-thjB4pp679.png" alt=""></li>			
<li>You'll get the<strong>&nbsp;Unpaid subscription</strong>&nbsp;status&nbsp;<strong>after&nbsp;3 to 7&nbsp;retries&nbsp;of failed payment&nbsp;charges</strong>. To test, keep advancing the time after the scheduled invoice date. The images below show the&nbsp;events for which we advanced the time or day multiple times and got the&nbsp;unpaid subscription&nbsp;status&nbsp; when we advanced the time/date to<strong>&nbsp;August 2, 2023</strong>, a month after the scheduled invoice<strong>(July 1)</strong><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d974fb71911316e40014f/file-V40gpu9poe.png" alt=""><img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d981f1f9ba00c2bcf976e/file-2uNmhlnbvS.png" alt=""></li>			
<li>
			
<p style="">
				You can check in&nbsp;
				<strong>wp-admin&gt;Users</strong> if the role and status have changed.<br>
				<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649dc92d1f9ba00c2bcf97af/file-yYAmi2I6lb.png" alt="">
			</p><p>
				<strong></strong><span style="background-color: initial;"><br>
				</span>
			</p></li>		</ul></li>	</ul></li></ul>
