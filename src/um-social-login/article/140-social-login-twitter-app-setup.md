---
---
# Social Login: X ( formerly Twitter ) App Setup
### Overview

 <strong>Warning: This article has been deprecated since version 2.7.0.</strong>

 This document provides instructions on properly setting up an X(formerly Twitter) application so that users can log in/register via X on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via X.

 <strong>NOTE: The setup for Twitter App version 2 is in this  [article](/docs-v3/um-social-login/article/1699-social-login-setup-for-twitter-api-v2) .</strong>### Creating a new app

 To allow users to log in to your site with their X account, you need to create a Twitter app. To create a new Twitter app, please do the following:

- Go to the Twitter App developer portal:  [https://developer.twitter.com/en/portal/projects-and-app](https://developer.twitter.com/en/portal/projects-and-apps) .

 For first-timers, you must verify your Twitter account. Twitter will ask you how you intend to use the Twitter developer platform. You must submit a standard application for access to the Twitter developer platform.

- Click the "<strong>Overview</strong>" in the left side menu.
- Under the "<strong>Standalone Apps</strong>" click on the <strong>"+ Create App</strong>" button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618903f29ccf62287e5f3d89/file-bExGsVMuSt.png)

- Enter the name of your App and click the <strong>N</strong><strong>ext</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61890c1164e42a671b634524/file-FgyF1kWikJ.png)

- Once the App is created, copy the <strong>API Key</strong> and <strong>API</strong> <strong>Secret Key.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6189087912c07c18afde54e3/file-J7OYMXj1IY.png)</strong>
- Add the keys in the <strong>Social Login.</strong> Go to <strong>Ultimate Member &gt; Settings&gt; Extensions &gt; Social Login&gt; X Social Connect. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650302284baf3c02bf197e01/file-NZwirJmpPZ.png)</strong>
- Go Back to the Twitter Developer Portal  [https://developer.twitter.com/en/portal/projects-and-apps](https://developer.twitter.com/en/portal/projects-and-apps) .
- Under the <strong>Projects &amp; Apps</strong> menu, see the "<strong>Standalone apps</strong>" menu and click on your Twitter App's Name.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618910629ccf62287e5f3dc0/file-8KN3MiSqXq.png)
- <strong>Now, add your URLs to the callback URLs in the Twitter App settings under "Authentication Settings."  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618911ca12c07c18afde54f0/file-ESZkUX8RDw.png)</strong>
    
     First, Edit the Authentication Settings &gt; Enable the options <strong>"Enable 3-legged OAuth"</strong> and <strong>"Request email address from users."  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618912ac9ccf62287e5f3dcb/file-Gi0jEXbze3.png)</strong>
    
     Under the " <strong>Edit the Authentication Settings</strong>," Go to <strong>the Callback URLs</strong> section and then add your Redirect URIs. See the example below:

- [https://yoursiteURL/login/](https://yoursiteurl/login/)  e.g.,  [https://ultimatemember.com/login/](https://ultimatemember.com/login/)
- [https://yoursiteURL/register/](https://yoursiteurl/register/)  e.g.,  [https://ultimatemember.com/register/](https://ultimatemember.com/register/)
- [https://yoursiteURL/account/social/](https://yoursiteurl/account/social/)  e.g.,  [https://ultimatemember.com/account/social/](https://ultimatemember.com/account/social/)   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618915a9efc78d0553e57a31/file-2ThHQgVQib.png)

  <strong>\* Don't forget to add URLs for other required fields such as Website URL, Terms of Service, and Privacy Policy</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61891628efc78d0553e57a32/file-UhWLJ0wxst.png)

  <strong>\* Once you've filled out all the required fields, hit save, and your Social Login for X should be good to test.</strong>

  <strong>\* You can also add your logo and organizational details on this page if you like.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6189174a12c07c18afde5503/file-UYWKKygS6Q.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6502faac4baf3c02bf197df8/file-alKqZCS3FA.png)