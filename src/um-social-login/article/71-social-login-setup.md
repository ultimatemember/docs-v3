---
---
# Social Login Setup
### Overview

 This document provides instructions on how to set up the Social login extension so users can sign-up/login to your site via Facebook, Twitter, and LinkedIn.

 <strong>Notice:</strong> For Social Login version 2.3+ Setup, please refer to this doc:  [/docs-v3/um-social-login/article/1531-social-login-2-3-setup](/docs-v3/um-social-login/article/1531-social-login-2-3-setup)

### App creation and setup

 For social login to work correctly, you need to create an app on each social network so that your site can be linked to the app. We have created separate docs for each app setup:

> <strong>Important changes in Social Login v1.4.1:</strong>    
>  You need to update the Redirect URIs in the API/App settings. See examples below:   
>  Login Page:  [https://www.ultimatemember.com/login/?provider=google](https://www.ultimatemember.com/login/?provider=google)  or twitter, facebook, linkedin, instagram 
> 
>  Register Page:  [https://www.ultimatemember.com/register/?provider=google](https://www.ultimatemember.com/register/?provider=google)  <strong>or twitter, facebook, linkedin, instagram</strong>
> 
>  Account:  [https://www.ultimatemember.com/account/social/?provider=google](https://www.ultimatemember.com/account/social/?provider=google)  <strong>or twitter, facebook, linkedin, instagram</strong>
> 
>    
>  Since home/landing pages on some WordPress hosting sites have locked up with cache and fails to show the social overlay, we've enabled the extension to handle the form's current page URL as Callback URL instead of using the default home/landing page. This breaks the Redirect URIs restriction in the app settings that only has the home/landing page as the callback URL. Thus, it will return mismatch Redirect URIs error.

- [Facebook App Setup](/docs-v3/um-social-login/article/20-social-login-facebook-app-setup)
- [Twiter App Setup](/docs-v3/um-social-login/article/140-social-login-twitter-app-setup)
- [Linkedin App Setup](/docs-v3/um-social-login/article/142-social-login-linkedin-app-setup)
- [Google+ App Setup](/docs-v3/um-social-login/article/141-social-login-google-app-setup)

### Link apps to your site

 Once you have created each app you will need to copy over the Ap ID/Key and the secret key and paste them into the social network tabs on the settings page.

### General settings

 The general settings tab for the social login extension allows you to:

- Turn on/off the social tab on the account page
- Show the social login buttons by default on the default register form
- Show the social login buttons by default on the default login form
- Change the order that the social login buttons that appear on your site

### Facebook, Twitter, Google &amp; LinkedIn settings tab

 Each social network has its own tab where you can activate/deactivate that particular network. On each of these tabs, you must add the API Keys and secret keys for the social login to work.


### Show social connect on the Login form

 <strong>wp-admin&gt; Ultimate Member&gt; Forms&gt; Edit Login Form</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6422fb10e11bbe23cb6ac87f/file-0bD5W18y6s.png)

####  Social login shortcodes

 The social login extension allows you to place social login buttons anywhere on your site using shortcodes. You can create multiple social login shortcodes so you can have a different output on your site depending on where you want to add the buttons.

#### Creating a new social login shortcode

 To create a social login shortcode, click on social login in the Ultimate Member menu and click the Add new button. On the new social login page, you can decide which buttons to show and apply some styling options that will alter how the buttons appear on your site. To output the buttons on your site, you must copy the shortcode and add it to your site.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6422ff7eb282ac0ba214c049/file-Y3avb2wN9T.png)

 <strong>wp-admin&gt; Appearance&gt; Widgets</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6423018cb282ac0ba214c04d/file-HduaDuBl34.png)

### Social registration forms

 When a user tries to register on your site using the social login buttons, they will be taken to the social network site to accept the app permissions, and if they accept, they will be redirected back to your site, where they will see an overlay that shows the social registration form (this form is automatically added to the forms list when you activate the plugin).

 This <strong>form is required</strong> to collect user details (for example, Twitter does not pass over a user’s email address) so the user can complete the registration process. Once a social network account is connected to a user on your site, the user will be logged in straight away when they come back to your site (as long as they are logged in to the social network on that browser).

 <strong>Note:</strong> To synchronize fields using the 1-step process with a specific registration form, you must enable the <strong>"Use this form in the overlay"</strong> option and set it to <strong>"Yes."</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64230854b282ac0ba214c05b/file-tmBHuHYSVn.png)

### Account page

 The social login extension adds a new tab to the user account page called “social connect.” Users can connect/disconnect their social networks from their accounts on this tab.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64230c13e11bbe23cb6ac89d/file-WtBTvOjAfR.png)

### Profile photo import

 The social login extension will import a user’s profile photo from their social network profile as the profile photo on your site. The most recently connected social network will be the photo that is used (e.g, if a user registers with Twitter, it will show their Twitter profile photo, but if on the account page they connect to Facebook, then their Facebook profile photo will become the profile photo on your site).