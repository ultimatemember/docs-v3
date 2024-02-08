---
---
# Test your integration with Stripe test clocks
 Ultimate Member Stripe extension integrates the stripe checkout page, and customer billing features, allowing users to pay, subscribe, and manage plans. Once you set up this extension, you must test its integrity.

 Before testing your integration, make sure you've read and set the required details in the following documentation before you proceed:

- [Setting up Webhook and Test/Public Keys](/docs-v3/um-stripe/article/1607-stripe-setting-up-webhook-and-test-public-keys)
- [Setting up Stripe Success and Cancel Payment Pages](/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages)
- [Create Subscription Prices](/docs-v3/um-stripe/article/1617-create-subscription-prices)
- [Shortcodes &amp; Subscription Events](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)
- [Add Subscription Plans to a Register Form](/docs-v3/um-stripe/article/1634-stripe---add-subscription-plans-to-a-registeration-form)
- [Create &amp; Test Customer Billings](/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings)

> <strong>Note:</strong> Use the Stripe CLI to simulate Stripe events in your local environment. You must add the parameter <strong>/?umm-stripe-webhook=true</strong> in the localhost URL e.g.  <strong>[http://localhost:4242/?umm-stripe-webhook=true](http://localhost:4242/?umm-stripe-webhook=true)</strong>  as your local webhook URL.
> 
>  To learn more about the Stripe CLI, please see this doc article:  [/docs-v3/um-stripe/article/1864-stripe-cli-integration](/docs-v3/um-stripe/article/1864-stripe-cli-integration)

 The <strong>Stripe Test Clocks</strong> is one of the easiest way to test your Billing integration. It helps to simulate test cases of your billing resources like subscriptions. With the Stripe test clock, you can advance the time in test mode to avoid waiting for a few days, weeks, or even a year to check and test the integration of your billings. For more details about Stripe test clocks and how to use them, you can go to this link:  [https://stripe.com/docs/billing/testing/test-clocks](https://stripe.com/docs/billing/testing/test-clocks)

 To see if the integration is working we suggest you create roles in <strong>wp-admin&gt; Ultimate Member&gt; User Roles</strong> so you can set in <strong>wp-admin&gt;Ultimate Member&gt; Stripe Plans&gt; Edit a plan</strong> and see what happens when a subscription is active, unpaid, paused, past due, canceled or trialing.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b421b252a6af5def3c8e25/file-IRrkB2qEHu.png)

### Testing Integration with Stripe Test Clocks

 To effectively test your integration with Stripe Test Clocks, follow the steps outlined below:

#### 1. Setup Test Environment

- Go to your  [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard)  and set it to test mode. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4cbd352a6af5def3c8e6a/file-aFZCoxOGLn.png)

#### <strong>2. Create a Test Clock</strong>

- Go to the <strong>'Billing'</strong> tab and click on the '<strong>Quick actions'</strong> button<strong>.</strong>
- Click on the '<strong>Create simulation'</strong>  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6256152a6af5def3c8e7d/file-ifsMHRajuB.png)
- It will redirect you to the Subscription page &gt;  [Test Clocks tab.](https://dashboard.stripe.com/test/billing/subscriptions/test-clocks)  Click the <strong>'+New simulation'</strong> button. <strong>![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b62dd230c1875e8e06758a/file-QK5z3vhtHk.png)</strong>
- Set a simulation name and the starting date and time of your simulation. Then click on the <strong>'Create'</strong> button, you may be presented with a security check when you click the button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6305930c1875e8e06758c/file-R9RN3neV6t.png)
- Once created, copy the <strong>Test Clock ID</strong> in the upper right corner.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b632be20e3b82eb738e0d8/file-Y9UBd3fQB5.png)

#### 3. Configure Ultimate Member Settings

- Go to <strong>wp-admin&gt;Ultimate Member&gt; Settings&gt; Extension&gt;Stripe</strong>
- Enable <strong>Sandbox/Test Mode</strong> setting.
- Enable the Test Clock and paste the <strong>Test Clock ID</strong> in the field. This will create a Stripe customer for the Test clock
- Click the '<strong>Save Changes'</strong> button  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b646551280097516451b44/file-sawyZiCffy.png)

#### <strong>4. Setup your Testing Simulation</strong>

- Create a user in <strong>wp-admin &gt; Users</strong>. After creating the user, you can verify that the user is in Test Clock mode in the Subscription status. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b64b3752a6af5def3c8e82/file-FEGsDkRRyF.png)
- Go back to the <strong>Stripe Dashboard &gt; Subscription &gt; Test clocks</strong>. Choose the test clocks simulation you created earlier by clicking on it.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b64ed120e3b82eb738e0db/file-YNawpmrHnM.png)
- Find the customer or user you created in wp-admin &gt; Users in the Clock Objects section. Confirm and ensure that the customer email matches the one registered on your site.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6517e52a6af5def3c8e83/file-m2pH7azLaY.png)
    
     <strong>Note: When creating a customer in wp-admin&gt;Users, the customer will only appear in test clocks if the Test Clocks option is enabled and the test clock ID is entered in wp-admin&gt;Ultimate Member&gt;Settings&gt;Extensions&gt;Stripe. Therefore, it is important to enable these settings before creating a user.</strong>

#### 5. Execute Test Cases

 Before you proceed with this test, please ensure you have read  [How to use test clocks](https://stripe.com/docs/billing/testing/test-clocks#how-to-use-test-clocks) .

- ##### <strong>Trial &amp; Subscription</strong>
    
    
    - Follow the steps above on how to create a customer then login to your site in another browser using the logins of the customer you've created. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b675ba20e3b82eb738e0ea/file-sQM28qIobK.png)
    - Then go to the page where you added the subscription plans and select or click the subscribed button that links to the Stripe Plan you've set up with a free trial. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b67a7d1280097516451b53/file-f5RyIjCw8Z.png)
    - Enter the payment details. For testing, you can use this Credit Card Number <strong>4242 4242 4242 4242</strong>. For the Year and Month, use <strong>4/42</strong>; for the CCV, use <strong>424</strong>. Then click on the '<strong>Start trial'</strong> button. Once the subscription is successful, you'll get redirected to the Stripe success page of your site. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b684b830c1875e8e06759e/file-qiVtD7uRTm.png)
    - Now go to your <strong>Stripe Dashboard&gt;Billing&gt; Subscription&gt; Test clocks&gt;</strong> Select your test clocks simulation and click on the user with the trial subscription.  
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b685dc52a6af5def3c8e97/file-2KuSDfvW2q.png)
    - You'll see in the customer's overview that the subscription is on trial, and then in the <strong>invoices</strong> section, you'll see that an <strong>invoice of $0.00</strong> is generated due to the free trial. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6874152a6af5def3c8e98/file-NBwLbzJgBV.png)
    - Go to <strong>wp-admin&gt;Users</strong> and check if the role and the status have changed to Trialing.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b68a2230c1875e8e06759f/file-LtsPAzBJj9.png)
- ##### Pause &amp; Resume
    
    
    - Pause 
        - Switch to the other browser where you have a user account with a trial subscription. If you're currently on the payment success page, you can click on the Customer Portal button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6907520e3b82eb738e0f0/file-nSsGf6U2XZ.png)
        - If you're not on the payment success page anymore, navigate to the page [ where you added the Customer Portal shortcode](/docs-v3/um-stripe/article/1894-how-to-access-the-stripe-customer-portal-from-the-website) . Once you're on that page, click the  ["Manage billing"](/docs-v3/um-stripe/article/1611-stripe---create-test-customer-billings)  button to manage your billing. This button will automatically redirect you to the Stripe Customer Billing/Portal page.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b691d930c1875e8e0675a2/file-CvdeoTjilQ.png)
        - Click on the <strong>Cancel Plan</strong> button. You'll be redirected to <strong>Billing&gt;Cancel or Pause</strong>. Under the current plan, select <strong>Pause Subscription</strong>, and click the <strong>Pause Plan</strong> button.  
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6937c1280097516451b55/file-svyJjhdpzb.png)
        - Take notice that in this example, the Plan Subscription will automatically renew after <strong>one month;</strong> therefore, we'll test it using the test clock.
        - Go to Stripe Dashboard&gt; Billings&gt; &gt;Subscription&gt;Test Clocks&gt; Select your test clocks simulation&gt; click on the customer with a <strong>paused plan.</strong> You'll see in the customer's <strong>Overview&gt; Subscriptions</strong> that the collection is paused. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6944830c1875e8e0675a3/file-3aJ8UzYRs6.png)
        - Go to <strong>wp-admin&gt;Users</strong> and check if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b69dc930c1875e8e0675a8/file-gKthr0vqzU.png)
    - ##### Resume
        
        
        - On the customer's page in Stripe, you will find a banner at the top with an <strong>'Advance Time'</strong> button. Simply click on this button.  
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b695b052a6af5def3c8e99/file-FgOA5P5AoN.png)
        - As we mentioned earlier, the resume time of the subscription paused plan is after 1 month, so we'll advance the time to a month. The clock time date is <strong>January 28, 2024,</strong> so we'll advance it to <strong>February 28, 2024,</strong> or you can select <strong>"+1 month"</strong> from the shortcut. Once you've selected the date, click on the <strong>Advance</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b696dc30c1875e8e0675a4/file-dRVFwtntPP.png)
        - The clock time has advanced and the customer subscription plan has now resumed, you can see it in the customer's subscription overview. The subscription becomes active because the plan has been resumed. You can see in the Payments and Invoices that the payment for the 1st month was <strong>canceled</strong> and <strong>void</strong> because the subscription plan was <strong>paused</strong>. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6995d52a6af5def3c8e9b/file-LdlCKOi3CE.png)
        - Go to <strong>wp-admin&gt; Users</strong> and check if the role and status have changed. The subscription status has been active again. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b69a1230c1875e8e0675a7/file-8ACNkZrYUm.png)
    - <strong>Canceled</strong>
        - To test the cancel integration, log in to your site in another browser using the customer's account with an <strong>active subscription,</strong> then go to the page where you've added the <strong>Customer Billing Portal</strong> shortcode and click on the <strong>Manage billing</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b691d930c1875e8e0675a2/file-CvdeoTjilQ.png)
        - Click on the <strong>Cancel Plan</strong> button. You'll be redirected to <strong>Billing&gt;Cancel or Pause</strong>. Under the current plan, select the <strong>Cancel subscription,</strong> then click the <strong>Cancel plan</strong> button.   
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b69c9a1280097516451b57/file-NkywQgu6w7.png)
        - In the customer's <strong>Overview&gt; Subscriptions and</strong> Payments the subscription is <strong>canceled</strong>.  
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b69ed51280097516451b58/file-0D8HhHV1Fe.png)
        - Go to wp-admin&gt;Users and check if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b69f4730c1875e8e0675a9/file-DCsQaTTK5X.png)
    - ##### Past Due
        
        
        - Log in to your site in another browser using the customer's account you've created in <strong>wp-admin&gt;Users</strong>. Then go to the page where you added the subscription plans. Subscribe to the plan with a free trial using these payment details: Credit Card Number <strong>4000 0000 0000 3220</strong>, expiring <strong>3/24</strong>, and CCV <strong>232</strong>.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b67a7d1280097516451b53/file-f5RyIjCw8Z.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a260270765339befc78b/file-KfbgkkEtzY.png)
        - A 3D secure popup window will appear. To continue, click the <strong>"Complete"</strong> button.
        - Once the Subscription Trial is Active, go to Stripe dashboard&gt;Customers&gt; click on the <strong>customer with an active trial subscription.</strong> You will see in the customer's overview&gt;subscriptions that the subscription status is in <strong>Trial mode</strong> and will end on <strong>March 2. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a4fd1280097516451b5a/file-L72TAnONyw.png)</strong>
        - Click on the <strong>'</strong><strong>Advance time'</strong> button and set the clock to the day after the end date of the trial. In this example, we have set the time to <strong>March</strong> <strong>3</strong>. Click the <strong>'Advance '</strong> button after setting up the date and time. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a5a6270765339befc78c/file-LehqQjUGFc.png)
        - Once the clock time has been advanced, the payment failed, the customer was not charged because the card is declined, so the status will be <strong>Past Due. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a745270765339befc78e/file-hoKzQMaQpw.png)</strong>
        - You can check in <strong>wp-admin&gt; Users</strong> if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a7cc30c1875e8e0675ac/file-fGGvatnohA.png)
    - <strong>Unpaid</strong>
        
        
        - If all retries scheduled for the customer's subscription payment have failed instead of <strong>canceled subscription status</strong>, you can change the settings and turn it into an <strong>unpaid subscription status</strong>.
        - Go to:  [https://dashboard.stripe.com/settings/billing/automatic](https://dashboard.stripe.com/settings/billing/automatic) . In the settings, scroll to <strong>Manage failed payments&gt; Subscription status &gt; If all retries for a payment fail &gt; Mark the subscription unpaid.</strong> Click the save button. <strong>![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6a9b71280097516451b5b/file-jAKiOK3EHk.png)</strong>
        - Log in to your site in another browser using a test customer's account you've created in <strong>wp-admin&gt;Users</strong>. Then go to the page where you've added the subscription plans and subscribe to a plan with a free trial using these payment details: <strong>Credit Card Number:</strong> <strong>4000000000000341, exp: 3/24 CCV: 232  
              ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b67a7d1280097516451b53/file-f5RyIjCw8Z.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6ad58270765339befc78f/file-1fbCWSCtfi.png)</strong>
        - In Stripe Dashboard, Go to the <strong>Customers tab&gt; Click on the customer with an active trial subscription</strong>. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6ade41280097516451b5c/file-1JLE3FGXcs.png)
        - You will see that the subscription status is in Trial mode and will end on <strong>March 6.</strong> Click on the <strong>'Advance time'</strong> button and set the clock to the day after the end date of the trial. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6afb430c1875e8e0675ad/file-DQ1xJSN4QV.png)
        - In this example, we have set the date to <strong>March 7, 2023</strong>. The subscription is now <strong>Past due</strong> because of the failed payment, so the invoice shows that it's retrying. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b0e930c1875e8e0675ae/file-6SFNf88sHf.png)
        - The charge retry schedule will be displayed if you hover your mouse over the <strong>Retrying</strong> notice ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b14830c1875e8e0675af/file-KOPs80qbLA.png)
        - You'll get the <strong>Unpaid subscription</strong> status <strong>after 3 to 7 retries of failed payment charges</strong>. To test, keep advancing the time after the scheduled invoice date. The images below show the events for which we advanced the time and date multiple times and got the unpaid subscription status when we advanced the time/date to <strong>April 10,</strong> a month after the scheduled invoice<strong>(March 7) ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b34320e3b82eb738e0f9/file-jjPwQNp5Zn.png)</strong>
        - If you scroll down to the <strong>'Recent Activity'</strong> section, you'll find here the multiple failed payments. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b3ee30c1875e8e0675b0/file-qdC8sQ16YD.png)
        - In the <strong>Events and Logs</strong> tab, you can also see in the <strong>Events</strong> the failed attempts of payments. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b58230c1875e8e0675b3/file-vGys1Lxa9e.png)
        - You can check in <strong>wp-admin&gt;Users</strong> if the role and status have changed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b6b62052a6af5def3c8ea8/file-eRPhTw0evY.png)