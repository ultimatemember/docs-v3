---
---
# Content Restriction
 The Stripe Content Restriction feature settings enable you to manage user access to posts, pages, tags, and taxonomies in the following ways:

### Restrict Access by Stripe Plans

 The UM Stripe Plans settings are designed to attach a Stripe Price to role settings and automatically switch users’ roles based on the subscription status of a customer. This is to maintain the capability to restrict content by Stripe Plan and WP roles with UM Content Restriction settings for Pages, Posts, Taxes, and Categories. This feature is particularly beneficial as many plugins and the WP core rely on WP roles for feature and functionality restrictions, making it an ideal solution for compatibility.

### Restrict Access by Stripe Prices

 UM Stripe Prices allow you to restrict content by multiple Stripe Prices, covering various membership levels. This includes granting access to dedicated content for users subscribed to or purchasing specific Stripe Prices.

 To implement these feature and settings, enable "Content Restriction" for post types and taxonomies in  <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65baa108a7493b27a932f846/file-ZOCZBnubnX.png) <strong>Restrict Post</strong>

1. Go to <strong>wp-admin&gt; Posts</strong> and add a new post, or edit an existing post.
2. Enable " <strong>Restrict access to this post?</strong>" under Ultimate Member: Content Restriction.
3. Select <strong>“Logged in users”</strong> in the option “Who can see this post?”, the Stripe restrictions will only show when you select logged-in users.
4. Enable the <strong>"Restrict Access by Stripe Plans"</strong>
5. The <strong>"Select Stripe Plans to allow access to this post"</strong>  feature enables you to choose which <strong>Stripe plans</strong> provide access to a post for users who have either subscribed to or purchased the selected Stripe plan.
6. The <strong>"Select Stripe Prices to allow access to this post"</strong> feature enables you to choose from the dropdown list of <strong>Stripe Prices</strong>, thereby allowing access to the post for users who have subscribed to or purchased the corresponding product with the selected stripe prices.
7. "<strong>Can users subscribed to this plan view the content if they do not have the correct permission?"</strong> - This option allows you to select whether a subscriber can view the content or not.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b727be30c1875e8e0675d6/file-CTpkXZUAuc.png)

### Example

 In the image provided below, the selectedStripe plan is the Basic Plan, priced at $9.99/month. Only users subscribed to this specific plan will have access to view the associated post. For your convenience, you can select multiple plans simultaneously by holding down the <strong>Ctrl</strong> or <strong>Cmd</strong> keys and clicking on the desired prices in the Stripe plan list.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b72ac052a6af5def3c8ec5/file-iAous03AM2.png)

 By default, Ultimate Member offers content restriction based on user roles. With the integration of the Stripe extension, you gain the capability to restrict content using either Stripe Plans, User Roles, or a combination of both. This feature empowers you to override the selected user roles in the restriction settings by prioritizing Stripe Plans.

 For instance, consider a scenario where a logged-in user holds the role <strong>"Member"</strong> but attempts to access a post/page restricted to users with the role <strong>"Subscriber."</strong> In such cases, the user would typically be denied access. However, if the "Member" user has subscribed to a specific Stripe Plan, you can surpass the user role restrictions by specifying certain Stripe Plans in the restriction settings. Simply select <strong>"Yes, as long as a user is subscribed to this plan/price, they can view the content regardless of their user role"</strong> in the option "Can users subscribed to this plan view the content if they do not have the correct role permission?"

 Furthermore, if you have opted to utilize Stripe prices from the " <strong>Select Stripe Prices to allow access to this post"</strong> option, users or subscribers who have purchased the selected Stripe price will gain access to the post, regardless of their subscribed Stripe plan and assigned role.

### Custom Post Type

 To seamlessly integrate additional plugins that introduce custom post types with the Stripe-Content Restriction feature, follow these steps:

1. Navigate to wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content .
2. Enable the settings for your custom post types or taxonomies to activate the integration. 
    - This ensures that content restriction capabilities extend to the specific custom post types or taxonomies introduced by other plugins, providing comprehensive control over access within your site.

#### Example

 In the following example, we've installed and activated the WooCommerce plugin. The WooCommerce custom post types and taxonomies are visible in the sections labeled:

- "Enable the 'Content Restriction' setting for post types."
- "Enable the 'Content Restriction' settings for taxonomies."

 Make sure to tick the checkboxes to activate these settings; UM Content Restriction won't be visible unless these are enabled.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65baacf80b2b8f0dacd7fa18/file-KhcPGUvxWJ.png)

 For custom post types, follow these additional steps:

1. Go to your Custom Post/Product/Page and either edit an existing one or add a new one.
2. Enable <strong>"Restrict access to this post?"</strong> under "Ultimate Member: Content Restriction."
3. Select <strong>"Logged-in users"</strong> in the option "Who can see this post?"
4. Enable <strong>"Restrict Access by Stripe Plans."</strong>
5. Choose the relevant Stripe Plans from <strong>"Select Stripe Plans to allow access to this post."</strong>
6. Optionally, select Stripe Prices from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to grant access based on purchased prices.
7. Specify permissions in <strong>"Can users subscribed to this plan view the content if they do not have the correct permission?"  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bab0b48e1d144482a9fce6/file-VRpzJleDpM.png)</strong>

### <strong>Restrict Page</strong>

- Go to wp-admin&gt; Pages
- Add a new page or edit an existing page
- Enable <strong>"Restrict access to this post?"</strong> under Ultimate Member: Content Restriction
- Select <strong>“Logged-in users” i</strong>n the option “Who can see this post?”
- Scroll down and enable <strong>"Restrict Access by Stripe Plans"</strong>
- Select <strong>Stripe Plans</strong> in <strong>"Select Stripe Plans to allow access to this post"</strong>
- Select <strong>Stripe Prices</strong> from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to allow users to access page based on purchased prices
- Select permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission?" ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bab3760b2b8f0dacd7fa21/file-PdfhdrMuzP.png)</strong>

### Restrict Post Tag 

1. Go to wp-admin&gt; Posts&gt;Tags
2. Add a new tag or edit an existing tag
3. Enable <strong>"Restrict access to this post?"</strong> under Ultimate Member: Content Restriction
4. Select <strong>“Logged-in users”</strong> in the option “Who can see this post?”
5. Scroll down and enable <strong>"Restrict Access by Stripe Plans"</strong>
6. Select Stripe Plans in <strong>"Select Stripe Plans to allow access to this post"</strong>
7. Select Stripe Prices from <strong>"Select Stripe Prices to allow access to this post"</strong> if you want to allow users to access page based on purchased prices
8. Select a permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65bab8d9a7493b27a932f85f/file-ddee7WYbgD.png)