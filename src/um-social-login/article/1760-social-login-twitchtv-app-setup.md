---
---
# Social Login: TwitchTV App Setup
### Overview

 You can let your user login or register via TwitchTV on your site using the Ultimate Member  [social login extension](https://ultimatemember.com/extensions/social-login/) . This document will be your guide on how to set up TwitchTV App on your site.

#### Creating a new app

 You need to create a TwitchTV app to allow users to log in to your site with their TwitchTV account. Do the following to create a new app:

1. Go to TwitchTV Developers site:  [https://dev.twitch.tv/login](https://dev.twitch.tv/login)
2. Login to TwitchTV, and make sure that your Two-Factor Authentication is enabled. A user must have a two-factor auth enabled to be able to register the application.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63bea0f0d0b6de7e3be2abe4/file-FOnavvY1BG.png)
3. Once logged in, you will be redirected to your console. Click on <strong>Applications</strong> or <strong>Register Your Application</strong>
  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e37332c35bbc3e190aeae7/file-LBk6SLS0d7.png)

5. In the Developer Applications, click on the <strong>"+ Register Your Application"</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e373d9b828a850e9e62756/file-FnJ0BuaOl8.png)
6. To register your application, you need to type the <strong>application name</strong>, the <strong>OAuth Redirect URLs,</strong> and <strong>Select Category</strong> 
    - In the <strong>OAuth Redirect URLs,</strong> you need to enter your site's login, register, and account's social tab URLs into the field, for example: 
        - [https://www.exampledomain.com/login/?provider=twitchtv](https://www.exampledomain.com/login/?provider=twitchtv)
        - [https://www.exampledomain.com/register/?provider=twitchtv](https://www.exampledomain.com/register/?provider=twitchtv)
        - [https://www.exampledomain.com/account/social/?provider=twitchtv](https://www.exampledomain.com/account/social/?provider=twitchtv)
    - Select <strong>Website Integration</strong> from the dropdown menu of the <strong>Category</strong>
    - Once you're done setting up your app registration, click the <strong>"Create"</strong> button   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e378c686b3a9744247201b/file-d6HJro50VS.png)   
           
           
         fghi
7. When the app is registered, it will be displayed below the Developer Applications. Click on the <strong>"Manage"</strong> button   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3827486b3a9744247203d/file-5ztwxe7zf1.png)
8. Copy the <strong>Client ID</strong> and <strong>Client Secret.</strong> You need to click the "New Secret" button if no Client Secret is shown.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e384c7b828a850e9e62788/file-cEucquNUGe.png)
9. Go to <strong>Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login &gt; TwitchTV Social Connect</strong> and paste the <strong>Client ID</strong> &amp; <strong>Client Secret</strong> in the fields. Don't forget to click the <strong>"Save Changes"</strong> button below to save. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3860fc35bbc3e190aeb27/file-t4iCghNKDR.png)

 Your users can now connect, log in, or register their TwitchTV account to your site.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65032b09e249755d2f85be5a/file-9LGvicz5HF.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e40194a3bd5139650549e5/file-JRxGmL0vFl.png)