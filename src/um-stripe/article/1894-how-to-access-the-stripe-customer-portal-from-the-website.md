---
---
# How to Access the Stripe Customer Portal from the Website
 To Access the Stripe Customer Portal from the Website, do the following steps below:

### Stripe Predefined Page - Customer Portal

 In UM Stripe version 1.0.7, there's a newly added feature—the Stripe predefined page created specifically for the <strong>direct</strong> customer portal URL. (e.g.: yoursite.com/<strong>customer-porta</strong>l/) Upon logging in and accessing this page, you will seamlessly be redirected to the Stripe customer portal site.

 The redirection feature is designed exclusively for users who are currently logged in. If the Stripe predefined page is added to the profile menu, it's important to note that <strong>logged-out users</strong> won't experience any redirection. Clicking on the menu will yield no results for them.

 For users who are <strong>logged in</strong>, the experience differs slightly. Although they can click on the menu and initiate the redirection, they won't be able to view the predefined page as intended. Instead, they will be promptly redirected to the Stripe customer portal site.

 Upon activating the extension, a notification in wp-admin will prompt you to create pages. By clicking the <strong>"Create Pages"</strong> button, the customer portal page is automatically generated. For existing Stripe customers upgrading to version 1.0.7, the notification to create pages will reappear. Clicking on it will initiate the generation of the customer portal page.

 To customize the slug of this predefined page, navigate to <strong>UM &gt; Settings &gt; General &gt; Pages. Hover your cursor over 'Customer Portal — UM Customer Portal&gt; click the Quick Edit link</strong>. From there, you can modify the Slug as needed.

### Account Billing Tab

 When the UM Stripe extension is enabled, a new tab named "Billing" is automatically added to the user's account page.

1. To access it on your site, go to <strong>User &gt; Account Settings &gt; Billing tab</strong>.
2. Here, you will find the <strong>Customer Portal button</strong>. The customer portal is a secure, Stripe-hosted page designed for managing your subscription and billing information.
3. Clicking the Customer Portal button will redirect you to the external page of the Stripe Customer Portal, providing you with the necessary tools to handle your subscriptions.

### Add Customer Portal Shortcode to a Page

 As outlined in this  [article](https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference.html) , the customer portal shortcode generates a button, allowing customers to be redirected to the external page of the Stripe Customer Portal for seamless subscription management. Allow your customers with the ability to manage their subscription plans through the following Customer Portal Shortcode: <strong>\[ultimatemember\_stripe\_customer\_portal\]</strong>

#### Steps in adding the shortcode to a page

1. Go to wp-admin&gt;Pages&gt;Add new page.
2. Add a title to your Page, e.g. "Manage my billings" and customize the page to your preference.
3. Add a shortcode block and paste the Customer Portal Shortcode: `[ultimatemember_stripe_customer_portal]`
4. Publish the page.

#### Steps in adding the page to the profile menu

1. Go to wp-admin &gt; Appearance &gt; Menus.
2. In the '<strong>Add Menu Items'</strong> section, under the <strong>Pages,</strong> toggle dropdown, select the page you created by checking the checkboxes (e.g., "Manage my billings")
3. Click the <strong>'Add to Menu'</strong> button. It will then be added to the menu structure.
4. In the menu structure, locate the button part and check the menu settings to determine where you want to add the page (e.g., Primary Menu).
5. Click the <strong>'Save Menu'</strong> button. Then check on your site if the menu has been successfully added.

#### Customer Portal Button on your Website

1. On your site, click on the menu you have added.
2. You'll see the button "Manage Billing", click on the button to test.
3. It should <strong>redirect</strong> you to the external page of the Stripe Customer Portal to manage subscriptions.