---
---
# Content Restriction
 The <strong>Stripe Content Restriction</strong> feature settings allow you to restrict the access of users to posts, pages, tags, and taxonomies by the following:

- <strong>Restrict Acces by Stripe Plans</strong> - The UM Stripe Plans settings are designed to attach a Stripe Price to role settings and automatically switch users’ roles based on the subscription status of a customer. This is to maintain the capability to restrict content by Stripe Plan and WP roles with UM Content Restriction settings for Pages, Posts, Taxes, and Categories. Since most plugins and the WP core itself heavily rely on the WP roles to restrict features and functionalities, this feature is ideal for this case and to remain compatible.
- <strong>Restrict Acces by Stripe Prices</strong> - The UM Stripe prices allows you to restrict content by multiple Stripe Prices which can cover many membership levels with this restriction settings, and one of them is allowing a specific customer to access a dedicated content for him/her.

 You need to enable the "Content Restriction" settings for the post types and taxonomies in  <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6441482337fd073d73d6d0cd/file-EjtGsP9Szi.png)

#### <strong>Restrict Post</strong> 

- Go to wp-admin&gt; Posts
- Add a new post, or edit an existing post
- Enable " <strong>Restrict access to this post?</strong>" under Ultimate Member: Content Restriction. It will display other content restriction settings.
- Select <strong>“Logged in users”</strong> in the option “Who can see this post?”, the Stripe restrictions will only show when you select logged-in users.
- Enable the <strong>"Restrict Access by Stripe Plans"</strong> by clicking on the check box beside it.
- The <strong>"Select Stripe Plans to allow access to this post"</strong>  feature enables you to choose which <strong>Stripe plans</strong> provide access to a post for users who have either subscribed to or purchased the selected Stripe plan.
- The <strong>"Select Stripe Prices to allow access to this post"</strong> feature enables you to choose from the dropdown list of <strong>Stripe Prices</strong>, thereby allowing access to the post for users who have subscribed to or purchased the corresponding product with the selected stripe prices.
- <strong>Can user subscribed to this plan view the content if they do not have the correct permission?</strong> - This allows you to select whether if a subscriber can view the content or not. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6538394fd8bb8c0afe6e13ef/file-JMVsPUgTVD.png)

 For example, the selected stripe plan in the image below is Basic – CAD$ 3.00 / month. The users who are subscribed to this plan will be the only ones who can access or view the post. You can select multiple plans by clicking on the stripe plan list while the <strong>ctrl</strong> or <strong>cmd</strong> keys is pressed.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653839d4d8bb8c0afe6e13f0/file-TZO5bbERmI.png)

 By default, Ultimate Member can restrict your content by user roles, and with the Stripe extension, you can restrict content by both Stripe Plans and User Roles or just Stripe Plans which allows you to override the selected user roles in the restriction settings by Stripe Plans.

 For example, when a logged-in user has the role <strong>"Subscriber"</strong> and tries to access a post/page that has a content restriction that only allows users with the role <strong>"Premium"</strong>, the user won't be able to access it, but if the "Subscriber" user has subscribed to a Stripe Plan, you can override the user role with specific Stripe Plans in the restriction settings. Just choose <strong>"</strong><strong>Yes, as long as a user is subscribed to this plan, they can view the content regardless of their user role"</strong> in the option <strong>"Can user subscribed to this plan view the content if they do not have the correct role permission?".</strong>

 If you have selected <strong>Stripe prices</strong> from the <strong>"</strong><strong>Select Stripe Prices to allow access to this post"</strong> option, like the example in the image below. The users or subscribers who have purchased with the selected Stripe price will be able to access the post regardless of their subscribed Stripe plan and role.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65383a4a5d28e52158f520e8/file-HbJYwxJQu2.png)

 <strong>Custom Post Type</strong>

 If you have installed other plugins that generated or created your own custom post type, you can also use the Stripe-Content Restriction. You need to enable it in <strong>Access settings</strong>. The "Content Restriction" settings of the custom post types or taxonomies will appear on the list in wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content.

- In the example below, we have installed and activated the WooCommerce plugin. The WooCommerce custom post types and taxonomies are displayed in <strong>"Enable the "Content Restriction" setting for post types"</strong> and <strong>"Enable the "Content Restriction" settings for taxonomies"</strong>
- Check the checkboxes to enable it.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6446952b35387a4818397414/file-2t7FZM07rW.png)
- Go to your Custom Post/Product/Page, click edit or add new
- Enable <strong>"Restrict access to this post?"</strong> under Ultimate Member: Content Restriction
- Select <strong>“Logged-in users”</strong> in the option “Who can see this post?”
- Enable <strong>"Restrict Access by Stripe Plans"</strong>
- Select Stripe Plans from <strong>"Select Stripe Plans to allow access to this post"</strong>
- Select Stripe Prices from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to allow users to access post based on purchased prices
- Select permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6539c3d26a23f959ef28c9b4/file-xNZcIjv2tH.png)</strong>

#### <strong>Restrict Page</strong>  


- Go to wp-admin&gt; Pages
- Add a new page or edit an existing page
- Enable <strong>"Restrict access to this post?"</strong> under Ultimate Member: Content Restriction
- Select <strong>“Logged-in users” i</strong>n the option “Who can see this post?”
- Scroll down and enable <strong>"Restrict Access by Stripe Plans"</strong>
- Select <strong>Stripe Plans</strong> in <strong>"Select Stripe Plans to allow access to this post"</strong>
- Select <strong>Stripe Prices</strong> from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to allow users to access page based on purchased prices
- Select permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission?" ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6538394fd8bb8c0afe6e13ef/file-JMVsPUgTVD.png)</strong>
    
    #### Restrict Post Tag
    
    
    - Go to wp-admin&gt; Posts&gt;Tags
    - Add a new tag or edit an existing tag
    - Enable <strong>"Restrict access to this post?"</strong> under Ultimate Member: Content Restriction
    - Select <strong>“Logged-in users”</strong> in the option “Who can see this post?”
    - Scroll down and enable <strong>"Restrict Access by Stripe Plans"</strong>
    - Select Stripe Plans in <strong>"Select Stripe Plans to allow access to this post"</strong>
    - Select Stripe Prices from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to allow users to access page based on purchased prices
    - Select a permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "</strong>
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65383fca5d28e52158f520ee/file-wsYBmuh0kw.png)