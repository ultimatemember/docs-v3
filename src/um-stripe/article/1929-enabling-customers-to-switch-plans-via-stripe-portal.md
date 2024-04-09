---
---
# Enable Users to Switch Stripe Plan or Prices
Overview
--------

 This documentation provides instructions on enabling customers to switch <strong>Stripe plan prices</strong> through the Stripe portal using the Ultimate Member Stripe extension. It also details the process of changing a UM Stripe Plan using a "Switch to this Plan URL" field. This feature allows users who are already subscribed to a UM Stripe Plan to upgrade or downgrade their plan while ensuring that proration works correctly.

 <strong>Note:</strong> The switching Stripe prices option only applies to recurring Stripe plans. There are limitations when switching prices via the Customer Portal. For detailed information, please refer to the  [Customer Portal Limitations](https://docs.stripe.com/customer-management#customer-portal-limitations)  documentation.

Enable Customers to Switch Stripe Prices
----------------------------------------

1. Go to `wp-admin > Ultimate Member > Stripe Plans > Edit a Recurring Stripe plan`.
2. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d45edf8a6115b43e5aaef/file-tcctZGRiO3.png) n the setup subscription settings, scroll down to the <strong>'Users who have subscribed to this plan can switch to any of the chosen Stripe Prices'</strong> option.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d47b250568305fcb28df7/file-2P7vlI5ijr.png)
3. Click "Add New Stripe Prices" to select prices that customers can switch to.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d4a3c33a24a257be3c829/file-d3nc1xAB0t.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d8aff61880b0280f71c63/file-9bEhbZSZb2.png)
4. Save the changes by clicking on the <strong>"Update"</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d4d59d00a8f46829b7863/file-2K89vbLJGo.png)

### Test the Switch of Stripe Prices

 To test the switch of Stripe prices, follow these steps:

1. Register as a new user: 
    - Open a new browser window and navigate to the registration page of your site.
    - Fill out the required information, select your desired subscription plan, for example, <strong>"Standard Plan - $19.99/month,"</strong> and then submit the form. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d71e361880b0280f71c43/file-tZphIeiIFM.png)
2. After successfully checking out, access the Customer Portal by clicking on the <strong>"Customer Portal"</strong> button in the order details.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d8bbc2cd7af38b25f6d32/file-Gnc2BOgefD.png)
3. Once in the Customer Portal, to switch subscription plans: 
    - Click on <strong>"Update plan."</strong> ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d8cf2fddde40d3e3f70fc/file-oxRpAyJoCU.png)
    - From the available options, select a new price and click on the <strong>"Continue"</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d8d7579bc5063a245a7e4/file-1FTEE2CcYz.png)
    - To confirm your selection, click on the <strong>"Confirm"</strong> button. Any necessary proration will be applied automatically. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d947dfddde40d3e3f7104/file-r0RFo2YS7T.png)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d95747e41074545482ef0/file-iwdlzpojIG.png)
4. In `wp-admin > Users`, you can see in the subscription status column that the price has been updated. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660d9a5e79bc5063a245a7ee/file-G0LWa5F9jn.png)

---

Enable Customers to Switch Stripe Plans via the Switch Plan URL
---------------------------------------------------------------

 To enable your customers to switch between Stripe Plans, ensure that you have a test account already subscribed to a plan. For example, Jane Doe is currently subscribed to the premium plan, making her a premium customer with an active subscription status.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660da75961880b0280f71c76/file-589XAvjK5X.png)

 When Jane Doe decides to upgrade or downgrade her subscription plan, she should use the 'Switch to this Plan URL', for instance:  [https://ultimate-member-32659-7891496.umsites.net/stripe/YThmMTVlZGE4MGM1MGFkYjBlNzE5NDNhZGM4MDE1Y2Y?switch=1](https://ultimate-member-32659-7891496.umsites.net/stripe/YThmMTVlZGE4MGM1MGFkYjBlNzE5NDNhZGM4MDE1Y2Y?switch=1) .

 You can find this URL in your WordPress admin panel by navigating to `wp-admin>Ultimate Member > Stripe Plans > Edit a Stripe plan.` Within the Subscribe URL section, locate the <strong>'Switch to this Plan URL'</strong> field, which contains the switch plan URL.To facilitate Jane Doe's upgrade to a Platinum Membership, simply copy the 'Switch to this Plan URL' of the Platinum Membership plan.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660daf4d2cd7af38b25f6d45/file-0pK3WP9WkJ.png)

 Add the switch plan URL to a post or page on your website. Alternatively, you can incorporate the URL into a button for a visually appealing and seamless experience on your site. The example image below is a post that contains the <strong>"Switch to this Plan URL"</strong> of the Platinum Membership plan.

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660dae462cd7af38b25f6d42/file-8KkJbJMoGR.png)  When the user clicks or visits the link or the Plan URL, they will be redirected to the confirmation page to switch or update their current plan to their desired plan. (e.g. Premium Plan switch to Platinum Membership Plan) 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660db16d79bc5063a245a7fc/file-wXGfVKxSYa.png)

 Once the user confirms the switch, they will be redirected back to the site. By default, they will be redirected to the Profile page. However, if the Switch URL is used with an anchor or button tag, they will be redirected back to the page where the anchor or button was added. To redirect back to a specific page, add a `redirect_to` parameter in the Switch URL. Example: `https://um.x/checkout/NTFkOTJiZTFjNjBkMWRiMWQyZTVlN2EwN2RhNTViMjY?switch=1&<strong>redirect_to</strong>=https://um.x/account/`

 To check if the switching is a success, go to wp-admin&gt;Users and check if the Subscription Status and Role have changed.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660db3cefddde40d3e3f7114/file-E84Am2ja2d.png)