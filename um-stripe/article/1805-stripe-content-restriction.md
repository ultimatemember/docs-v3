# Content Restriction
<p>
	The&nbsp;
	<strong>Stripe Content Restriction</strong> feature settings allow you to restrict the access of users to posts, pages, tags, and taxonomies by Stripe Plans. This article provides instructions on how to use the stripe content restriction. You need to enable the "Content Restriction" settings for the post types and taxonomies in<strong>&nbsp;wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content.</strong></p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6441482337fd073d73d6d0cd/file-EjtGsP9Szi.png" alt="" style="display: block; margin: auto;"></p><h4><strong><br>
Restrict Post
<br>
</strong></h4><ul>
	
<li>Go to wp-admin&gt; Posts</li>	
<li>Add a new post, or edit an existing post&nbsp;</li>	
<li>Enable "
	<strong>Restrict access to this post?</strong>" under&nbsp;Ultimate Member: Content Restriction. It will display other content restriction settings.</li>	
<li>Select <strong>“Logged in users”</strong> in the option “Who can see this post?”, the Stripe restrictions will only show when you select logged-in users.</li>	
<li>Enable the&nbsp;<strong>"Restrict Access by Stripe Plans" </strong>by clicking on the check box beside it. This means you <strong>allow</strong> the users who are subscribed to the selected Stripe Plans from the&nbsp;<strong>"Select Stripe Plans to allow access to this post" </strong>setting<strong>&nbsp;</strong>to access the post.</li>	
<li><strong>Can user subscribed to this plan view the content if they do not have the correct permission? </strong>- This allows you to select whether if a subscriber can view the content or not.
	
<p>
		<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ae798302287021e634b39/file-m5xfpBQt0a.png">
	</p></li></ul><p>
	For example,&nbsp; the selected stripe plan in the image below is&nbsp;UM Premium – CAD$ 3.00 / month. The users who are subscribed to this plan will be the only ones who can access or view the post. You can select multiple plans by clicking&nbsp;on the stripe plan list while the&nbsp;
	<strong style="background-color: initial;">ctrl</strong>&nbsp;or <strong style="background-color: initial;">cmd</strong> keys is pressed.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ae8d88a815002c99863ab/file-n87hHQJKmM.png"></p><p>
	By default, Ultimate Member can restrict your content by user roles, and&nbsp;with the Stripe extension, you can restrict content by both Stripe Plans and User Roles or just Stripe Plans, which&nbsp;allows you to override the selected user roles in the restriction settings by Stripe Plans.&nbsp;</p><p>
	For example, when a logged-in user has the role 
	<strong>"Subscriber"</strong> and tries to access a post/page that has a&nbsp;content restriction that only allows users with the role <strong>"Premium"</strong>, the user won't be able to access it, but if the "Subscriber" user has subscribed to a Stripe Plan, you can override the user role with specific Stripe Plans in the restriction settings. Just choose&nbsp;<strong>"</strong><strong>Yes, as long as a user is subscribed to this plan, they can view the content regardless of their user role"</strong>&nbsp;in the option&nbsp;<strong>"Can user subscribed to this plan view the content if they do not have the correct role permission?".</strong></p><p>
	<strong style="background-color: initial; font-family: inherit; font-size: 18px;">Custom Post Type</strong></p><p>
	If you have installed other plugins that generated or created your own custom post type, you can also use the Stripe-Content Restriction. You need to enable it in 
	<strong>Access settings</strong>.&nbsp;The "Content Restriction" settings of the custom post types or taxonomies&nbsp;will appear on the list in wp-admin &gt; Ultimate Member &gt; Settings &gt; Access &gt; Restriction Content.</p><ul>
	
<li>In the example below, we have installed and activated the WooCommerce plugin. The WooCommerce custom post types and taxonomies are displayed in <strong>"Enable the "Content Restriction" setting for post types" </strong>and <strong>"Enable the "Content Restriction" settings for taxonomies"</strong></li>	
<li>Check the checkboxes to enable it.<br>
	
<p>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6446952b35387a4818397414/file-2t7FZM07rW.png" alt="" style="display: block; margin: auto;">
	</p></li>	
<li>Go to your Custom Post/Product/Page</li>	
<li>Enable&nbsp;<strong>"Restrict access to this post?"</strong>&nbsp;under Ultimate Member: Content Restriction</li>	
<li>Select&nbsp;<strong>“Logged-in users”&nbsp;</strong>in the option “Who can see this post?”</li>	
<li>Enable&nbsp;<strong>"Restrict Access by Stripe Plans"</strong></li>	
<li>Select&nbsp;Stripe Plans&nbsp;from&nbsp;<strong>"Select Stripe Plans to allow access to this post"&nbsp;</strong></li>	
<li>Select permission in <strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "</strong><strong><br>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6477605641346a1a0924600e/file-uiPXkCzhcm.png" alt="" style="display: block; margin: auto;"></strong></li></ul><h4><strong>Restrict Page</strong><strong><br>
</strong></h4><ul>
	
<li>Go to wp-admin&gt; Pages</li>	
<li>Add a new page or edit an existing page</li>	
<li>Enable<strong> "Restrict access to this post?"</strong> under Ultimate Member: Content Restriction</li>	
<li>Select&nbsp;<strong>“Logged-in users”&nbsp;i</strong>n the option “Who can see this post?”</li>	
<li>Scroll down and enable&nbsp;<strong>"Restrict Access by Stripe Plans"</strong></li>	
<li>Select&nbsp;<strong>Stripe Plans</strong> in <strong>"Select Stripe Plans to allow access to this post"</strong>&nbsp;&nbsp;</li>	
<li>
	
<p>
		Select permission in&nbsp;
		<strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650ae798302287021e634b39/file-m5xfpBQt0a.png"></strong>
	</p><p>
		<strong></strong>
	</p><h4>Restrict Post Tag</h4><p>
		<strong>
		</strong>
	</p><ul>
		
<li>Go to wp-admin&gt; Posts&gt;Tags</li>		
<li>Add a new tag or edit an existing tag</li>		
<li>Enable&nbsp;<strong>"Restrict access to this post?"</strong>&nbsp;under Ultimate Member: Content Restriction</li>		
<li>Select&nbsp;<strong>“Logged-in users”</strong>&nbsp;in the option “Who can see this post?”</li>		
<li>Scroll down and enable<strong>&nbsp;"Restrict Access by Stripe Plans"</strong></li>		
<li>Select&nbsp;Stripe Plans&nbsp;in<strong>&nbsp;"Select Stripe Plans to allow access to this post"&nbsp;&nbsp;</strong></li>		
<li>Select a permission in&nbsp;<strong>"Can user subscribed to this plan view the content if they do not have the correct permission? "<br>
		<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650aeacf8a815002c99863ac/file-dvrwpEYtdG.png" style="width: 446px;"><br>
		</strong></li>	</ul></li></ul>