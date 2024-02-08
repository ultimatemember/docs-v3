---
---
# Restricted by Active Subscription
Overview
--------

 We are introducing the latest enhancement to our Stripe restriction feature – the <strong>"Active Subscription Only</strong>" option. With this update, users who are subscribed to a plan or pricing tier but have an inactive subscription will no longer have access to restricted pages, posts, taxonomies, media, or tags. The restriction is specifically tied to an active subscription status.

 By default, irrespective of their subscription status (active, inactive, or canceled), users who have subscribed to a plan or pricing tier can view restricted pages through Stripe. However, the newly added "Active Subscription Only" option allows you to enforce restrictions exclusively for users with an active subscription, ensuring more precise control over access to your content.

 We recommend reading the  [Stripe Content Restriction article](https://ultimatemember.github.io/docs-v3/um-stripe/article/1805-stripe-content-restriction.html)  first to understand this document better.

 To enable the <strong>Active Subscription Only</strong> feature, go to the content you want to restrict and allow access to only users who have active subscriptions.

1. Go to <strong>wp-admin &gt; Pages</strong> and either add a new page or edit an existing one. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2a05a270765339befc5c5/file-dIjgl6jnxF.png)
2. In the page settings, scroll down to <strong>'Ultimate Member: Content Restriction'</strong> and activate the <strong>'Restrict Access to this post'</strong> option.
3. From the <strong>"Who can access this post?"</strong> dropdown, select <strong>'Logged in users.'</strong> The Stripe restriction feature will only appear if you choose 'logged-in users.'
4. If you wish to implement content restrictions based on Stripe plans, enable the <strong>'Restrict Access by Stripe Plans'</strong> option. Enabling this will reveal additional settings for Stripe content restrictions.
5. To restrict access to users with an active subscription only, enable the <strong>'Active Subscription Only'</strong> setting.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2aa4030c1875e8e0673ef/file-xbRQf322iL.png)

### Here is an example of how the functionality works:

 To explain how the functionality works, we have created different user roles in wp-admin&gt;Ultimate Member&gt; User Roles. These roles include  <strong>Active</strong> <strong>Subscriber</strong>, <strong>Canceled Subscriber</strong>, <strong>Past Due Subscriber</strong>, <strong>Paused Subscriber</strong>, <strong>Trialing Subscriber</strong>, and <strong>Unpaid Subscriber</strong>.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2bb4030c1875e8e06740b/file-ST2qWXYyln.png)

 We have also set these roles in <strong>wp-admin&gt;Ultimate Member&gt; Stripe Plans for the 'Basic Plan - $9.99/month'</strong> that we have imported.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2bfdc12800975164519c7/file-vsvrMkyBRr.png)

 We have created a page titled  <strong>"Blog"</strong> and configured its content restriction settings as explained in the section above.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2c929270765339befc5fd/file-uYvFp2naKQ.png)

 Both users Jane Doe and Jay Hugh are subscribed to the Basic Plan and have an <strong>active subscription</strong>, making them both <strong>Active Subscribers</strong>.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2c71752a6af5def3c8d0d/file-CszdNRPJ5v.png)

 Therefore, they can access and view the contents on the Blog page.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2cfe112800975164519d0/file-o4RlwZUnxA.png)

 When Jane Doe pauses her subscription, her subscription status changes to  <strong>Paused</strong> and her role becomes <strong>Paused Subscriber</strong>. As a result, she no longer has access to the Blog page.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b2d7d952a6af5def3c8d1d/file-VRKoeUAWUK.png)