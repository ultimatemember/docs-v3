---
---
# Social Login: Instagram App Setup (with Instagram Basic Display API)
### Overview

 This document provides instructions on how to properly setup a Instagram application so that users can login/register via Instagram on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to login via Instagram.

 <strong>Note: Instagram no longer supports the Login API. Facebook/Meta developers encourage to use their Facebook App for Login instead. We will remove Instagram from the Social Login extension.</strong>

 <strong>Note:</strong> Starting October 15, 2019, new client registration and permission review on Instagram API platform are discontinued in favor of the  [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/) . If you registered your application before October 15, you should use Instagram API. See instruction  [Instagram App Setup](/docs-v3/um-social-login/article/191-instagram-app-setup) .

  <strong>Сontents</strong>

- [Instagram App creation and setup](#app_setup)
- [Configure extension`s settings](#configure)
- [App Review &amp; Live Mode](#review)

### Instagram App creation and setup <a name="">\#</a>

 You have to create an Instagram application to use the Ultimate Member Social Login extension.

#### Step 1: Create a Facebook App

 Go to  [<strong>developers.facebook.com</strong>](https://developers.facebook.com/) , click My Apps, and create a new app. Once you have created the app and are in the App Dashboard, navigate to \[Settings &gt; Basic\], scroll to the bottom of page, and click <strong>Add Platform</strong>.

  ![](https://lh6.googleusercontent.com/z9PH_6U2VuvXVpbgUUj3cmziGK-U4GNQDltGTtt4AQZU0-eJ5xDY6etl6Tmgs56UHh3k-AhpalkywWRaaztOshY8tdFtStp5Dw2He0noEbk37uwvdNKElpj4ZuaGry9Ct1OYUTXT)

 Choose Website, add your website’s URL, and save your changes.

  ![](https://lh3.googleusercontent.com/T3lRK1YtnvLiEhvNCiGfbGvhTnaqkVm6URqNOWAxJD_YpMdyqufA3NsRhHBueKU3C6I7RpaGkihO7nAWIyd_w0DOyT6vi6ldCZjv3vE6qSlpnzpALkfaki7xizu_RPHeV_A8eAhN)

#### Step 2: Configure Instagram Basic Display

 Click <strong>Products</strong>, locate the <strong>Instagram</strong> product, and click <strong>Set Up</strong> to add it to your app.

  ![](https://lh6.googleusercontent.com/eH2kJon1WdNSBOUhMoKZmQJoNihp96KFpbBhB09NARloU97RArN_H8G_PI24Zh5aSHyePff9NWCdQEWEOdNziNnjCgkafaSazW4ODDEe9ADWG3lzX-2lShr20cto4mwmMVuPVCsU)

 Click <strong>Basic Display</strong>, scroll to the bottom of the page, then click <strong>Create New App</strong>.

  ![](https://lh4.googleusercontent.com/-ZHzsFqCyf68DGQNTTDVbqiiTpMeSPuH0YkFbrAFDKyYazKOPptFRnjwVOQyVwiKiM4afDIPz53fk8cp1m-v1n-ilztrZQmtPKMphPC-XmaR6LW00-ekptqjG9uvTDOXuLp9E0CM)

 In the form that appears, complete each section using the guidelines below.

- <strong>Display Name</strong> - Enter the name of the Facebook app you just created.
- <strong>Valid OAuth Redirect URIs</strong> - Enter your website’s URL. There are three dedicated URI that can capture redirect parameters, for example: 
    - <strong>[https://www.exampledomain.com/login/?provider=instagram](https://www.exampledomain.com/?um-connect-instagram=true)</strong>
    - <strong>[https://www.exampledomain.com/register/?provider=instagram](https://www.exampledomain.com/?um-connect-instagram=true)</strong>
    - <strong>[https://www.exampledomain.com/account/social/?provider=instagram](https://www.exampledomain.com/?um-connect-instagram=true)</strong>
- <strong>Deauthorize Callback URL</strong> - Enter your website’s URL again.
- <strong>Data Deletion Request Callback URL</strong> - Enter your website’s URL once again.

#### Step 3: Add an Instagram Test User

 Navigate to \[Roles &gt; Roles\] and scroll down to the <strong>Instagram Testers</strong> section. Click <strong>Add Instagram Testers</strong> and enter your Instagram account’s username and send the invitation.

  ![](https://lh5.googleusercontent.com/IM7vHbVNINz0vK4LUvmuWOsIDOaLuo1JqllY1swieyvthxfSMbDXc9xzN8beBy2VhNPlguMkOh0ls9tb7PlvzXtxgvgtCGdpZwmfYmHVbR6YHbIyR35ZeNZxWR9EvREC4yxcrV4z)

 Open a new web browser and go to  [www.instagram.com](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F%3Ffbclid%3DIwAR36MKBPQzrqs7tF0JtynwsarH5kNE2xkD5_UY1yQ1oQTWhpw9Zy61bVTEY&h=AT1aj2BVPedWPAz1NF2_yY_QSFSJvltyW_JqweAKiZl3pmWUwffF9Nd8Q6t2pum8a7A-9YIMgdFDCYl1LYOoHqc4Jbsf5zqrJ-nhNlJUG2QzgKZYFrRa7SucJbo920CajRmyIA)  and sign into your Instagram account that you just invited. Navigate to \[Profile &gt; Edit Profile &gt; Authorized Applications &gt; Tester Invites\] and accept the invitation.

  ![](https://lh3.googleusercontent.com/k5YV2JrUNX01-yGL0T0NbYoc3Db65RJpnuMoHwvx_6Jhq5u6e2dBZw2IAvJI2e8x90MPanXXsPeFdKUn9pCAWYh5NCa61s1GtTFb1VYJm3FPf_M5aDgenD_oun3imZRPbss4-KMl)

 Your Instagram account is now eligible to be accessed by your Facebook app while it is in  [Development Mode](https://developers.facebook.com/docs/apps#development-mode) .

### Configure extension`s settings <a name="configure">\#</a>

 Go to extensions`s settings page \[Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login, enable Instagram Social Connect, and paste API keys using the guidelines below.

- Enable Instagram Social Connect
- Client ID - paste your Instagram App ID displayed in \[App Dashboard &gt; Products &gt; Instagram &gt; Basic Display\].
- Client Secret - paste your Instagram App Secret displayed in \[App Dashboard &gt; Products &gt; Instagram &gt; Basic Display\].

 \[Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login \]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc6bff52c7d3a7e9ae3bd74/file-SWBKNx1WJ6.png)

 \[App Dashboard &gt; Products &gt; Instagram &gt; Basic Display\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc6c2cb2c7d3a7e9ae3bd89/file-Z8nPiia0dP.png)

 <strong>Note:</strong>  [Instagram User access tokens](https://developers.facebook.com/docs/instagram-basic-display-api/overview#instagram-user-access-tokens)  are short-lived access tokens and are <strong>only valid for 1 hour</strong>. To update access token click <strong>Update</strong>.

### App Review &amp; Live Mode <a name="review">\#</a>

 Before you can switch your app to  [Live Mode](https://developers.facebook.com/docs/apps#live-mode) , you may have to go through  [App Review](https://developers.facebook.com/docs/apps/review) . The process allows us to verify who you are and how you will be using the data that your app will be accessing.