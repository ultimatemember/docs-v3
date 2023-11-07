---
---
# Social Login: Discord App Setup
### Overview

 This document provides instructions on how to properly set up a Discord application so that users can connect via Discord on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in or register via Discord.

### Creating a new app

 You need to create a Discord app to allow users to log in to your site with their Discord account. To create a new app, please do the following:

1. Go to the Discord developer site and log in: [ https://discord.com/developers/applications](https://discord.com/developers/applications)   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3eeac79bb3605c394c6b8/file-YBApbyllmo.png)
2. [](https://discord.com/developers/applications) Once logged in, you will be redirected to Developer Portal&gt; Applications, then click on the <strong>"New Application</strong>" button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3efe779bb3605c394c6bd/file-w6tpXfRPZ8.png)
3. Enter the name of your app and click the <strong>"Create"</strong> button  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3f057c35bbc3e190aed2b/file-IFJwKXeW90.png)
4. Enter the details of your application, and don't forget to save changes.   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3f23286b3a97442472262/file-N2f8Tosn7r.png)
5. Go to <strong>Settings&gt;</strong> <strong>OAuth2,</strong> add a single Callback/Redirect URL( See screenshot below ):
    
    
    - [https://yoursiteURL/login/?provider=discord e.g. https://ultimatemember.com/login/?provider=discord  
         ](https://yoursiteURL/login/?provider=github)   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3f49279bb3605c394c6e3/file-wJRyFX1Gpu.png)
6. Then copy the <strong>Client ID</strong> and <strong>Client Secret.</strong> You must click the "<strong>Reset Secret</strong>" button if no Client Secret is shown.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3fe33c35bbc3e190aed91/file-KtBSWOYHCb.png)
7. Go to <strong>Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login &gt;Discord Social Connect.</strong>
    - <strong>Paste the Client ID and the Client Secret ID</strong> in the Discord Social Connect fields. Don't forget to save changes.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e3fd9979bb3605c394c735/file-eaOpS1BpB7.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650324d5e249755d2f85be51/file-KHU2cp3b4W.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e4033fc35bbc3e190aedae/file-kxF7ZrMU7q.png)