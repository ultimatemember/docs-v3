---
---
# Social Login 2.3 Setup
Overview
--------

 This document provides instructions on how to set up the Social login extension so users can sign-up/login to your site via Social Accounts and how to enable the error logs:

- [General Settings](#general_settings)
- [Shortcodes](#shortcodes)
- [Social Registration Forms](#forms)
- [Profile Data Import](#import)
- [Account Page](#account)
- [Error Debugging](#error-debugging)

App creation and setup  [\#](#create_application) 
--------------------------------------------------

 For social login to work correctly, you need to create an app on each social network so your site can be linked to the app. We have created separate docs for each app setup:

- [Facebook](/docs-v3/um-social-login/article/20-social-login-facebook-app-setup)
- [Google](/docs-v3/um-social-login/article/141-social-login-google-app-setup)
- [X (formerly Twitter)](/docs-v3/um-social-login/article/140-social-login-twitter-app-setup)
- [Instagram](/docs-v3/um-social-login/article/1363-social-login-instagram-app-setup-with-instagram-basic-display-ap)
- [LinkedIn](/docs-v3/um-social-login/article/142-social-login-linkedin-app-setup)
- [GitHub](/docs-v3/um-social-login/article/1532-social-login-github-app-setup)
- [WordPress.com](/docs-v3/um-social-login/article/1533-social-login-wordpress-app-setup)
- [Discord ( v2.3.15+ )](/docs-v3/um-social-login/article/1763-social-login-discord-app-setup)
- [TwitchTV( v2.3.15+ )](/docs-v3/um-social-login/article/1760-social-login-twitchtv-app-setup)

### Link apps to your site

 Once you have created each app, you will need to copy over the App ID/Key and the secret key and paste them into the social network tabs on the settings page.

General settings  [\#](#general_settings) 
------------------------------------------

 The general settings tab for the social login extension allows you to:

- Turn on/off the social tab on the account page
- Show the social login buttons by default on the default register form
- Show the social login buttons by default on the default login form

### Social Networks settings

 Each social network has a setting that can activate/deactivate that particular network. Once the setting is turned on you'll see fields where you must add API Keys for the social login to work.

Shortcodes  [\#](#shortcodes) 
------------------------------

 The social login extension allows you to place social login buttons anywhere on your site using shortcodes. You can create multiple social login shortcodes for a different output on your site depending on where you want to add the buttons.

 The general settings for each shortcode allow you to:

- Assign a specific role to a user on registration via Social Login
- Show Social Buttons to logged-in users only
- Keep users logged in
- Choose the integration type for the Social buttons: Login only, Register only, or Both ( default ).
- If you add the social login shortcode on a custom page for users to log and configure the user role settings and set the redirection after the login to a custom URL, the redirection won't work because the social login shortcode is for dynamic page only it'll only reload the current page where the shortcode is added.

### Creating a new social login shortcode

 To create a social login shortcode, click on social login in the Ultimate Member menu and click the Add new button. On the new social login page, you can decide which buttons to show and apply some styling options that will alter how the buttons appear on your site. To output the buttons on your site, you must copy the shortcode and add it to your site.

 Go to <strong>wp-admin &gt; Ultimate Member &gt; Social Login&gt;Edit or add social login shortcode.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045a534baf3c02bf197f74/file-P1zD444WEG.png)

 wp-admin &gt; Appearance &gt; Widgets

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045b514baf3c02bf197f76/file-LGl7ASjSzz.png)

Social Registration Forms  [\#](#forms) 
----------------------------------------

 When a user tries to register on your site using the social login buttons, they will be taken to the social network site to accept the app permissions, and if they accept, they will be redirected back to your site, where they will see an overlay that shows the <strong>Social Registration</strong> form.

 This form is needed to collect and add required user details (for example, X(formerly Twitter) does not pass over a user's email address) so the user can complete the registration process. Once a social network account is connected to a user on your site, the user will be logged in immediately when they come back to your site (as long as they are logged in to the social network on that browser).

 The <strong>Social Registration</strong> form is automatically added to the forms list when you activate the plugin. You can edit this form on <strong>wp-admin &gt; Ultimate Member &gt; Forms</strong>.

 There are two ways to process data from Social Network Apps to register a user on your site: <strong>one-step process</strong> or <strong>two-step process</strong>.

| ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc195332c7d3a7e9ae386da/file-cg7uEAA3v8.png) Two-step process | ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc193ec2c7d3a7e9ae386c6/file-ZXmJvg150n.png) One-step process |
|---|---|

### Two-Step Process

 There are instances where users can check the fields that will be submitted to your site during the registration process - The two-Step process enables users to check the details and allows them to edit the form or add extra fields to fill out before submitting the <strong>Social Registration</strong> form.

### One-Step Process 

 You can choose this process if you want to register a user automatically without showing the <strong>Social Registration</strong> form fields on the overlay. This allows users to register and then login automatically on successful registration.

 When one of the Social Networks does not pass a user's email address or Email Address has already been used on the site, there are 4 options to choose from which you can use to continue the Registration process:

- Link Accounts &amp; Login immediately
- Link Accounts &amp; Redirect to Login Page
- Allow new account creation with a generated Email Address
- Do not link accounts &amp; prevent account creation

 There's also an option to show a Splash Screen to display pre-loading content or Image loader on the overlay during the registration process.

 <strong>Note</strong>: To synchronize fields using the 1-step process with a specific registration form, you must enable the <strong>"Use this form in the overlay"</strong> option and set it to <strong>"Yes."</strong>

 In the one-step process of social login with Ultimate Member, users are registered and logged in automatically without having to set a password during the registration process. This approach is designed to streamline the user experience and make it easier for users to sign up and access the site quickly.

 <strong>Here's how it works:</strong>

1. <strong>Social Login Initiation:</strong> When a user chooses to log in with a social account (e.g., Facebook, Google) on your site, Ultimate Member's one-step process kicks in.
2. <strong>Authentication and Registration:</strong> The user is redirected to the chosen social network's login page, where they authenticate their account. Once authenticated, the social network provides necessary user information to Ultimate Member.
3. <strong>Automatic Registration:</strong> Ultimate Member automatically registers the user on your WordPress site using the information provided by the social network. This registration process includes creating a new user account in the WordPress database.
4. <strong>Immediate Login:</strong> After registration is successful, Ultimate Member automatically logs the user in to their newly created account. This means the user can access the site's features and content without the need to log in again manually.
5. <strong>Password Setting:</strong> Since  [no password is set](/docs-v3/um-social-login/article/1927-setting-passwords-in-ultimate-member-register-forms)  during the registration process, users are prompted to set a password after registration. This is typically done through a link provided in the Welcome Email. This email with a  [placeholder](/docs-v3/um-social-login/article/1340-placeholders-for-email-templates)  is a notification sent to users, typically after registration, that contains a dynamic placeholder tag like `{action_url}`. This placeholder tag is crucial when no password field is present during registration, such as in a one-step social login process. The `{action_url}` placeholder generates a link in the email that allows users to set their password. Users can click on this link to be redirected to a page where they can securely set their password, ensuring a smooth registration process and access to their account.

####  Benefits of One-Step Process:

- <strong>Simplified Registration:</strong> Users can sign up quickly and easily without the need to fill out a lengthy registration form.
- <strong>Instant Access</strong>: Users can access the site immediately after registration, enhancing the overall user experience.

Profile data import  [\#](#import) 
-----------------------------------

 <strong>Sync Register form Fields from Social Network fields</strong> ( since version 2.3 )

 Social Login adds a field option in the form builder that synchronizes the specific data from the Social Networks to populate the field value on the Registration process. Please note that not all Social Networks return the same data e.g. Instagram doesn't pass an Email Address, but Facebook returns it with Email Permissions in the Facebook application.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc185082c7d3a7e9ae385c9/file-4gj9lew7F0.png)

 Please see the  [List of Sync Field options](/docs-v3/um-social-login/article/1536-social-login---list-of-sync-field-options-in-form-builder)  and  [Sync Field with extended options](/docs-v3/um-social-login/article/1506-social-login-sync-social-register-form-fields-with-extend-option) .

### Profile photo import

 The social login extension will import a user's profile photo from their social network profile as the profile photo on your site. The most recently connected social network will be the photo used (e.g., if a user registers with X, it will show their X profile photo, but if on the account page they connect to Facebook, then their Facebook profile photo will become the profile photo on your site).

Account page  [\#](#account) 
-----------------------------

 The social login extension adds a new tab to the user account page called "social connect." Users can connect/disconnect their social networks from their accounts on this tab.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045c609446233b93527c0d/file-nPNrt4oldo.png)

 Error Debugging  [\#](#error-debugging) 
-----------------------------------------

 This option allows developers to see any errors when testing the social authorization. To enable this option go to <strong>wp-admin &gt; UM &gt; Settings &gt; Extensions &gt; Social Login</strong> and see "<strong>Enable Debug Logging"</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b4ef79bb3605c394c17a/file-6l5X3PLznT.png)

 Click on the check box to enable it, then click on the highlighted link to view the error logs.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b5c6a3bd51396505441c/file-vv4gUNg7pP.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b638c35bbc3e190ae809/file-oSKyUs33CE.png)