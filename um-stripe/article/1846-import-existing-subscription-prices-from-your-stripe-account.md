---
---
# Import Existing Subscription Prices from your Stripe Account
 To save you time, Ultimate Member added a feature where you can simply import the created or existing subscription prices from your Stripe account. When you import the prices, it adds a role to each status automatically. The default role in each subscription status is the role that is set in WP Admin &gt; Settings &gt; General &gt; New User Default Role.

- Go to wp-admin&gt;Ultimate Member&gt; Settings&gt; Extensions&gt;Stripe.
- Click the <strong>"Import Prices from your Stripe Account"</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539c11ce4e85872dc277749/file-1rZKutudr1.png)
- Once finished importing, It will display all the existing subscription prices you have created in Stripe.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dcc0e42d97d1c04591486/file-STa25z50Gg.png)
- When you import prices from the Stripe.com account, it should create Stripe Plans automatically and they are ready to use. Go to wp-admin&gt; Ultimate Member&gt; Stripe Plans. You can see here the following: 
    - Plan ID - You can use this to set the Stripe field's default selected plan in the Register form via the Form Builder
    - Mode - The Sandbox with the orange icons means that the Prices were created in Test Mode. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dccf6c00c2b65208e1ca6/file-lyHpz9FYVN.png)
- When you try to edit the Stripe Plan, you will also notice that the Stripe Type/Mode and Stripe Price are locked. This is done to avoid interfering with the Site's and Stripe.com's subscriptions.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651dd148ed8c6d2f1cffdf4d/file-C20ohBGkpx.png)
- You can still create your Stripe Plans manually in UM &gt; Stripe Plans &gt; Add New. For more info, go to this  [article.](/docs-v3/um-stripe/article/1617-create-subscription-prices)