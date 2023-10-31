---
---
# Test your integration with Stripe test clocks
 Ultimate Member Stripe extension integrates the stripe checkout page, and customer billing features, allowing users to pay, subscribe and manage plans. Once you set up this extension, you must test its integrity.

 Before testing your integration, make sure you've read and setup the required details in the following documentation before you proceed:

- [Setting up Webhook and Test/Public Keys](/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys)
- [Setting up Stripe Success and Cancel Payment Pages](/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages)
- [Create Subscription Prices](/docs-v3/um-stripe/article/1617-create-subscription-prices)
- [Shortcodes &amp; Subscription Events](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)
- [Add Subscription Plans to a Register Form](/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-registeration-form)
- [Create &amp; Test Customer Billings](/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings)

> <strong>Note:</strong> Use the Stripe CLI to simulate Stripe events in your local environment. You must add the parameter <strong>/?umm-stripe-webhook=true</strong> in the localhost URL e.g.  <strong>[http://localhost:4242/?umm-stripe-webhook=true](http://localhost:4242/?umm-stripe-webhook=true)</strong>  as your local webhook URL.
> 
>  To learn more about the Stripe CLI, please see this doc article:  [/docs-v3/um-stripe/article/1864-stripe-cli-integration](/docs-v3/um-stripe/article/1864-stripe-cli-integration)

 The <strong>Stripe Test Clocks</strong> are easier ways to test your Billing integration. It helps to simulate test cases of your billing resources like subscriptions. With the Stripe test clock, you can advance the time in test mode to avoid waiting for a few days, weeks, or even a year to check and test the integration of your billings.   
   
 For more details about Stripe test clocks and how to use them, you can go to this link:  [https://stripe.com/docs/billing/testing/test-clocks](https://stripe.com/docs/billing/testing/test-clocks)

 To see if the integration is working we suggest you create roles in <strong>wp-admin&gt; Ultimate Member&gt; User Roles</strong> so you can set in <strong>wp-admin&gt;Ultimate Member&gt; Stripe Plans&gt; Edit a plan</strong> and see what happens when a subscription is active, unpaid, paused, past due, canceled or trialing.

###  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65203aeeed8c6d2f1cffe18c/file-hz19TMVPIo.png) Testing Integration with Stripe Test Clocks

 Go to your  [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard)  and set it to test mode.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be3e01c43322e9690e38f/file-YNcAe1bx4l.png)

 Below are the steps you need to do to test your integration:

1. <strong>Create a test clock</strong>  
    
    - Go to the Billing tab and click on the <strong>Test</strong> <strong>clocks</strong> tab.
    - Click on the <strong>+New simulation</strong> button.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be79c1c43322e9690e394/file-YBb4UCyGAZ.png)
    - Enter a name for the simulation and then set the Test clock time. It will be the starting date and time of your simulation. Click the <strong>Create</strong> button to continue.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649be8e1c5d2b53344e72eee/file-ZxUUuuZtx0.png)
    - Once created, copy the <strong>Test Clock ID</strong> in the upper right corner. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649bea178bdb973f12e4618a/file-7WO6sd87Zs.png)
    - Go to <strong>wp-admin&gt;Ultimate Member&gt; Settings&gt; Extension&gt;Stripe</strong>
    - Enable Sandbox/Test Mode
    - Enable the Test Clock and paste the <strong>Test Clock ID</strong> in the field. This will create a Stripe customer for the Test clock
    - Click Save Changes ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539b2b6e4e85872dc27773f/file-UTHbIETL6x.png)
2. <strong>Set up your testing simulation</strong> Create a customer you need for a test case for your simulation. 
    - <strong>Creating Customer</strong>
    
    
    
    - Go to wp-admin&gt; Users, and create a new customer or subscriber account. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65203f54c00c2b65208e1efb/file-m79tfOPVRd.png)
    - Go to Stripe Dashboard&gt; Billing&gt;  [Test clocks](https://dashboard.stripe.com/test/test-clocks) &gt; Select and click on the test clocks simulation you've created.
    - Under the <strong>Clock Objects</strong>, you'll find here the customer you've created in wp-admin&gt;Users. Ensure that the customer email is the same as the one registered on your site. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649bf997e832b96f633ab3c4/file-hrden3ifVm.png)  <strong>Note: The customer created in wp-admin&gt;Users will only appear in test clocks if the Test Clocks option is enabled and the test clock ID is entered in wp-admin&gt;Ultimate Member&gt;Settings&gt;Extensions&gt;Stripe. Make sure to enable these settings first before creating a user.</strong>

### <strong>Test Cases</strong> 

 Before you proceed with this test, please ensure you have read  [How to use test clocks](https://stripe.com/docs/billing/testing/test-clocks#how-to-use-test-clocks) .

- ### <strong>Trial &amp; Subscription</strong>
    
    
    - Follow the steps above on how to create a customer then login to your site in another browser using the customer you've created.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1dfdcfd7fe604a7fe35e/file-oyjSyxUWHD.png)
    - Then go to the <strong>Checkout page</strong> and select or click the subscribed button that links to the Stripe Plan you've set up with a free trial.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png)
    - Enter the payment details. For testing, you can use this Credit Card Number <strong>4242 4242 4242 4242</strong>. For the Year and Month, use <strong>4/42</strong>; for the CCV, use <strong>424</strong>. Then click on the <strong>Start trial</strong> button. Once the subscription is successful, you'll get redirected to the Stripe success page of your site.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2d1b74f970393a8b0887/file-B0RRpMvXlr.png)
    - Now go to your <strong>Stripe Dashboard&gt;Billing&gt; Test clocks&gt;</strong> Select your test clocks simulation and click on the user with the trial subscription.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d38e7cfd7fe604a7fe372/file-1pygW0NFDs.png)
    - You'll see in the customer's overview that the subscription is on trial, then in the <strong>invoices</strong> section, you'll see that an <strong>invoice of $0.00</strong> is generated due to the free trial. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d3e3774f970393a8b088d/file-QEvuXRqk6P.png)
    - Go to <strong>wp-admin&gt;Users</strong> and check if the role and the status have changed to Trialing. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650afa5be249755d2f85c394/file-rKZOAjlct6.png)
- #### <strong>Pause &amp; Resume</strong>
    
    #### Pause
    
    - Log in to your site using the subscriber account with <strong>Trial Subscription</strong> in another browser. Then go to the Customer Portal Page and click the  [Manage billing button](/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings) . It automatically redirects users to the Stripe Customer Billing/Portal page.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1f23b71911316e4000cd/file-mmtna4ypbv.png)
    - Click on the <strong>Cancel Plan</strong> button. You'll be redirected to <strong>Billing&gt;Cancel or Pause</strong>. Under the current plan, select <strong>Pause Subscription</strong>, and click the <strong>Pause Plan</strong> button.  
         Take notice that in this example, the Plan Subscription will automatically renew after <strong>one year;</strong> therefore, we'll test it later using a test clock.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d46a21f9ba00c2bcf970e/file-A5gRAVSgpk.png)
    - Go to Stripe Dashboard&gt; Billings&gt; Test Clocks&gt; Select your test clocks simulation&gt; click on the customer with a <strong>paused plan.</strong> You'll see in the customer's <strong>Overview&gt; Subscriptions</strong> that the collection is paused. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4544b71911316e4000ed/file-hUX9yseHtQ.png)
    - Go to wp-admin&gt;Users and check if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650afb4ce249755d2f85c395/file-ldlqBmMzAX.png)
    
    #### Resume
    
    - Go to Billing&gt; Test Clocks&gt; Select your test clock simulation and click on the <strong>Advance time</strong> button.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4d8d1f9ba00c2bcf9710/file-bg4srJuk3i.png)
    - As we mentioned earlier, the resume time of the subscription paused plan is after 1 year, so we'll advance the time to a year. The clock time date is <strong>June 28, 2023,</strong> so we'll advance it to <strong>June 28, 2024</strong>. Once you've selected the date, click on the <strong>Advance</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d4ebdf39eb10e8e84b8d1/file-Ve6iarPqMg.png)
    - It'll then display the clock time that has advanced, click the customer whose subscription plan has been resumed.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d6d2dcfd7fe604a7fe3a0/file-3OdMezwE2Y.png)
    - In the customer's overview, the subscription becomes active because the plan has been resumed. You can see in the Payments and Invoices that the payment for the 1st year was canceled and void because the subscription plan was paused.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d6ec4b71911316e40010b/file-4uQj5w5Q7R.png)
    - Go to <strong>wp-admin&gt; Users</strong> and check if the role and status have changed.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650afc388a815002c99863c0/file-q1XjBC6usa.png)
- ### Cancel
    
    
    - To test the cancel integration, log in to your site in another browser using the customer's account with an <strong>active subscription,</strong> then go to the <strong>Customer Billing Portal</strong> and click on the <strong>Manage billing</strong> button.  
          <strong>![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d1f23b71911316e4000cd/file-mmtna4ypbv.png)</strong>
    - Click on the <strong>Cancel Plan</strong> button. You'll be redirected to <strong>Billing&gt;Cancel or Pause</strong>. Under the current plan, select the <strong>Cancel subscription,</strong> then click the <strong>Cancel plan</strong> button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d74dbf39eb10e8e84b8fc/file-yyyqt4Gsf1.png)
    - Go to Stripe Dashboard&gt; Billings&gt; Test Clocks&gt; Select your test clocks simulation&gt; click on the customer with a canceled plan. You'll see in the customer's Overview&gt; Subscriptions and Payments that the subscription is canceled. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d7625cfd7fe604a7fe3a8/file-BEoCOXLjDu.png)
    - Go to wp-admin&gt;Users and check if the role and status have changed.   
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650afced8a815002c99863c2/file-ur9DR5RW0O.png)
- ### <strong>Past Due</strong> 
    
    
    - Log in to your site in another browser using the customer's account you've created in wp-admin&gt;Users. Then go to the <strong>Checkout page</strong> and subscribe to a plan with a free trial using these payment details: Credit Card Number <strong>4000 0000 0000 3220</strong>, expiring <strong>3/24</strong>, and CCV <strong>232</strong>.   
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d7e94f39eb10e8e84b90a/file-j3K1180MxN.png)
    - A 3D secure popup window will appear. To continue, click the <strong>"Complete"</strong> button.
    - Once the Subscription Trial is Active, go to <strong>Billing&gt; Test Clocks&gt; Select your test clock simulation&gt; Click on the customer with an active trial subscription.</strong> You will see that the subscription status is in Trial mode and will end on <strong>July 1</strong>.
    - Click on the <strong>Advance time</strong> button and set the clock to the day after the end date of the trial. In this example, we have set the time to <strong>July 2</strong>.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d80e61f9ba00c2bcf974b/file-ukGXeAdaQk.png)
    - Once the clock time has been advanced, the payment failed, the customer was not charged because the card is declined, so the status will be <strong>Past Due.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d85b4cfd7fe604a7fe3be/file-lQueAWPVxR.png)</strong>
    - You can check in <strong>wp-admin&gt;Users</strong> if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/652046b7dfdf44337125d9d7/file-6WMJeSIQ8u.png)
- ### <strong>Unpaid</strong>
    
    
    - If all retries scheduled for the customer's subscription payment have failed instead of <strong>canceled subscription status</strong>, you can change the settings and turn it into an <strong>unpaid subscription status</strong>.
    - Go to:  [https://dashboard.stripe.com/settings/billing/automatic](https://dashboard.stripe.com/settings/billing/automatic) . In the settings, scroll to <strong>Manage failed payments&gt; Subscription status &gt; If all retries for a payment fail &gt; Mark the subscription unpaid. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/640889579c8683055bad3991/file-zvelcOD6o5.png)</strong>
    - <strong>Unpaid Subscription Setup</strong>
        - Log in to your site in another browser using the customer's account you've created in <strong>wp-admin&gt;Users</strong>. Then go to the Checkout page and subscribe to a plan with a free trial using these payment details: Credit Card Number: <strong>4000000000000341,</strong> exp: <strong>3/24 CCV: 232 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d2c08cfd7fe604a7fe368/file-sKO4ZyvNkU.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8a3d74f970393a8b08ca/file-ebZyySLYao.png)</strong>
        - Go to <strong>Billing&gt; Test Clocks&gt; Select your test clock simulation&gt; Click on the customer with an active trial subscription</strong>. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8bf6f39eb10e8e84b920/file-coQQeqzJoG.png)
        - You will see that the subscription status is in Trial mode and will end on <strong>July 1</strong>. Click on the Advance time button and set the clock to the day after the end date of the trial. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d8f0cb71911316e400142/file-rvCFipRBXC.png)
        - In this example, we have set the date to <strong>July 2, 2023</strong>. The subscription is now <strong>Past due</strong> because of the failed payment, so the invoice shows that it's retrying. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d9146cfd7fe604a7fe3d0/file-KyBxZsPJzy.png)
        - The charge retry schedule will be displayed if you hover your mouse over the <strong>Retrying</strong> notice.  
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d93291f9ba00c2bcf9765/file-thjB4pp679.png)
        - You'll get the <strong>Unpaid subscription</strong> status <strong>after 3 to 7 retries of failed payment charges</strong>. To test, keep advancing the time after the scheduled invoice date. The images below show the events for which we advanced the time or day multiple times and got the unpaid subscription status when we advanced the time/date to <strong>August 2, 2023</strong>, a month after the scheduled invoice<strong>(July 1)</strong> ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d974fb71911316e40014f/file-V40gpu9poe.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/649d981f1f9ba00c2bcf976e/file-2uNmhlnbvS.png)
        - You can check in <strong>wp-admin&gt;Users</strong> if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650affc69446233b93528037/file-12OIAFc2wA.png)