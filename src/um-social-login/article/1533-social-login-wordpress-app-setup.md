---
---
# Social Login: WordPress App Setup
### Overview

 This document provides instructions on properly setting up a WordPress application so that users can log in/register via WordPress on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via WordPress.

### Creating a new app

 You need to create a WordPress app to allow users to log in to your site with their WordPress accounts. To create a new WordPress app, please do the following:

1. Go to the WordPress application management site:  [http://developer.wordpress.com/apps/](http://developer.wordpress.com/apps/) .
2. Click the "<strong>Create New Application</strong>" button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6187593c12c07c18afde52bc/file-kniJxaK41l.png)

 3. Enter the details for the application.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61875eb22b380503dfe0237b/file-xK4ngivUMP.png) 4. Do not forget to add Callback/Redirect URLs( See screenshot below ):

- [https://yoursiteURL/login/?provider=wordpress](https://yoursiteURL/login/?provider=wordpress) , e.g., [ https://ultimatemember.com/login/?provider=wordpress](< https://ultimatemember.com/login/?provider=wordpress>) ,
- [https://yoursiteURL/register/?provider=wordpress](https://yoursiteurl/register/?provider=wordpress) ,e.g.,  [](https://ultimatemember.com/register/)  [https://ultimatemember.com/register/?provider=wordpress](https://ultimatemember.com/register/?provider=wordpress) ,
- [https://yoursiteURL/account/social/?provider=wordpress](https://yoursiteurl/account/social/?provider=wordpress) , e.g.,  [https://ultimatemember.com/account/social/?provider=wordpress](https://ultimatemember.com/account/social/?provider=wordpress)   
       
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61875f0b2b380503dfe0237c/file-LQbzaqAJjY.png)

 5. Read and agree to the Developer Guidelines and click the " <strong>Create</strong>" button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61875b8d2b380503dfe02377/file-yCWILumKCM.png)

 6. After the app was created. You will see a notification.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618762a912c07c18afde52c0/file-iXeqag9XiL.png)

 Go to <strong>My Applications&gt;Your App (e.g My Social Login App.)</strong> You will see the following section on the bottom page.

### Client ID &amp; Secret

 On this page, you will find the <strong>Client Key (API key)</strong> and <strong>Client Secret (API secret)</strong>. You need to copy both of these and add them to your site on the WordPress tab on UM settings page. 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61876489efc78d0553e577c5/file-gOHW97Hd8A.png)


 Go to Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login &gt; WordPress Social Connect . Paste the Client ID &amp; Client Secret in the text fields under WordPress Social Connect and click the "Save Changes" button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65032724e249755d2f85be55/file-6241rvsLKb.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650325d5a38b876318e352b0/file-MOsxWHPenF.png)