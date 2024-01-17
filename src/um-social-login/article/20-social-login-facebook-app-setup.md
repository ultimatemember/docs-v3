---
---
# Social Login: Facebook App Setup
###  Overview

 This document provides instructions on properly setting up a Facebook application so that users can log in/register via Facebook on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via Facebook.

### Creating a new app


1. You need to create a Facebook app to allow users to log in to your site with their Facebook account. To create a new Facebook app, please do the following:
2. Go to the Facebook Developers site:  [https://developers.facebook.com/](https://developers.facebook.com/) .
3. If you are not logged in, log in to the site using your Facebook account details.
4. Once logged in, go to '<strong>My Apps'. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/658582f225778b0d0faef23a/file-dhm4KEL7l6.png)</strong>
5. Click on the '<strong>Create App'</strong> button. It will lead you to the app creations page.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7920351f0473afc686bac/file-dk2UAz64U6.png)
    
     A message will appear that there's a new way to create apps with Meta, click the ' <strong>C</strong><strong>reate App'</strong> button to continue.

### Create an App

1. On this page, in the Add use case tab, select <strong>"Authenticate and request data from users with Facebook Login"</strong> from the suggested use case , and then click on the '<strong>Next'</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a79a4951f0473afc686bb7/file-lXD2uGANpQ.png)
2. In the Login type tab, select <strong>"No, I'm not building a game"</strong> as your login type, so you will not be redirected to the gaming setup, then click the '<strong>Next'</strong> button to proceed.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a79be4126ef46c7032ea4c/file-UdSN2UpPQ9.png)
3. Fill out the <strong>App Name</strong> and <strong>App Contact Email</strong>. Then click the <strong>Create App</strong> button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a79d8df1393916b8ea16d3/file-Ifpl5AtZMU.png)  <strong>Note:</strong> After clicking the '<strong>Create App'</strong> button, you may be presented with a security check.
4. Upon successful creation, a message window will appear that your app has been created. Click the '<strong>Go to Dashboard'</strong> button to proceed to the dashboard.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7a0ce51f0473afc686bbe/file-Qp0AUBnaiH.png)


Create and Publish app
----------------------

### Customize this app

1. In the dashboard, click on the <strong>'Customize adding a Facebook Login button'</strong> to set up your product.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7b9d0a45534249a235d87/file-CItnsBUQC0.png)
2. Scroll down to the <strong>Permissions</strong> section and add <strong>'</strong><strong>public\_profile'</strong> and <strong>'</strong><strong>email'</strong> permissions by clicking on the <strong>'Add'</strong> button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7b86e51f0473afc686bd5/file-MFLi5kMH7v.png) <strong>Note:</strong> Additional steps might be required. Make sure all required verifications and data handling questions (if applicable) are complete before submitting this app to App Review.
3. After you have added the permissions, go to settings by clicking on the <strong>'Go to settings'</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7bbcbf1393916b8ea16ef/file-FN69YTJUXX.png)
4. In the <strong>Client OAuth Settings,</strong> you need to enter your site's login, register, and account's social tab URIs into the field <strong>"Valid OAuth redirect URIs."</strong> Add the custom page URL if you use the social login shortcode on the custom page. We recommend adding additional URLs with the parameters "<strong>return\_provider</strong>" and "<strong>provider</strong>" See the example below: 
    - [https://www.yoursitedomain.com/](https://www.yoursitedomain.com/)
    - [https://www.yoursitedomain.com/?provider=facebook](https://www.yoursitedomain.com/?provider=facebook)
    - [https://www.yoursitedomain.com/?return\_provider=facebook](https://www.yoursitedomain.com/?return_provider=facebook)
    - [https://www.yoursitedomain.com/login/](https://www.yoursitedomain.com/login/)
    - [https://www.yoursitedomain.com/login/?provider=facebook](https://www.yoursitedomain.com/login/?provider=facebook)
    - [https://www.yoursitedomain.com/login/?return\_provider=facebook](https://www.yoursitedomain.com/login/?return_provider=facebook)
    - [https://www.yoursitedomain.com/register/](https://www.yoursitedomain.com/register/)
    - [https://www.yoursitedomain.com/register/?provider=facebook](https://www.yoursitedomain.com/register/?provider=facebook)
    - [https://www.yoursitedomain.com/register/?return\_provider=facebook](https://www.yoursitedomain.com/register/?return_provider=facebook)
    - [https://www.yoursitedomain.com/account/social/](https://www.yoursitedomain.com/account/social/)
    - [https://www.yoursitedomain.com/account/social/?provider=facebook](https://www.yoursitedomain.com/account/social/?provider=facebook)
    - [https://www.yoursitedomain.com/account/social/?return\_provider=facebook](https://www.yoursitedomain.com/account/social/?return_provider=facebook)   
          ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7c43af1393916b8ea16f2/file-0G74WBol8g.png)
5. After you have saved the changes, go back to Customize and click on <strong>'Go to quickstart' ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7c5b2126ef46c7032ea6d/file-Ytqw5zjBx0.png)</strong>
6. Select the <strong>Web platform</strong> for your app, then add your <strong>Site URL</strong>, then click the <strong>"Save"</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7c861a45534249a235d92/file-aZP3TPULIY.png)

###  Prepare and submit for App Review

###   
Basic App Settings 

1. After you've completed creating the app, you have to set the basic settings, go to <strong>App</strong> <strong>Settings&gt; Basic</strong>.This tab contains the <strong>App ID</strong> and <strong>App Secret</strong>. Both must be copied and pasted later into the <strong>Ultimate Member&gt; Settings&gt;Extension&gt;Social Login&gt;Facebook Social Connect tab</strong>.
2. You must fill in the following information: <strong>Privacy Policy URL</strong>, <strong>Terms of Service URL</strong>, <strong>User data deletion</strong> and you can also include an app icon to make the app appear more professional. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6585a740dcdba22513abb043/file-QRpnD4eWD3.png)
3. Verify your business to be able to request advanced access for the permissions and features in App Review.
4. When you scroll down the page, you will find the Website section. Add your <strong>Site URL</strong>, then click the <strong>"Save Changes"</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6585a7e315d4597b5fb2081f/file-tEXS3Eempa.png)

###  Advanced App Settings

1. Go to <strong>App Settings&gt; Advanced.</strong> On this page, you can set your app restrictions and security.
2. <strong>App Restrictions</strong> - You can restrict your app to a specific age range and countries if your site references alcohol or an adult nature site
3. <strong>Security</strong> - These are optional if you wish to make the app more secure.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6585a9a425778b0d0faef25e/file-2uosfbUoUw.png)

### Setting up the app

1. Head to the app's navigation menu. Then go to <strong>App Review &gt; Requests.</strong>
2. When you click on the Request Permissions or Features button, you'll be redirected to Facebook Login Use Cases. You can set the permissions for scopes here.
3. Add <strong>public\_profile</strong> and <strong>email permission</strong> by clicking on the "<strong>Request advance access</strong>" buttons.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6585a468d0cad521927aabda/file-kvg8bZlCqW.png)

### Facebook Login Settings

1. Go to <strong>Products&gt; Added Products&gt;Facebook Login &gt;Settings</strong>
2. <strong>Client OAuth Settings</strong> - You need to enter your site's login, register, and account's social tab URIs into the field "<strong>Valid OAuth redirect URIs</strong>." Add the custom page URL if you use the social login shortcode on the custom page. We recommend adding additional URLs with the parameter "<strong>return\_provider</strong>" and "<strong>provider</strong>," see example: 
    - [https://www.yoursitedomain.com/](https://www.yoursitedomain.com/)
    - [https://www.yoursitedomain.com/?provider=facebook](https://www.yoursitedomain.com/?provider=facebook)
    - [https://www.yoursitedomain.com/?return\_provider=facebook](https://www.yoursitedomain.com/?return_provider=facebook)
    - [https://www.yoursitedomain.com/login/](https://www.yoursitedomain.com/login/)
    - [https://www.yoursitedomain.com/login/?provider=facebook](https://www.yoursitedomain.com/login/?provider=facebook)
    - [https://www.yoursitedomain.com/login/?return\_provider=facebook](https://www.yoursitedomain.com/login/?return_provider=facebook)
    - [https://www.yoursitedomain.com/register/](https://www.yoursitedomain.com/register/)
    - [https://www.yoursitedomain.com/register/?provider=facebook](https://www.yoursitedomain.com/register/?provider=facebook)
    - [https://www.yoursitedomain.com/register/?return\_provider=facebook](https://www.yoursitedomain.com/register/?return_provider=facebook)
    - [https://www.yoursitedomain.com/account/social/](https://www.yoursitedomain.com/account/social/)
    - [https://www.yoursitedomain.com/account/social/?provider=facebook](https://www.yoursitedomain.com/account/social/?provider=facebook)
    - [https://www.yoursitedomain.com/account/social/?return\_provider=facebook](https://www.yoursitedomain.com/account/social/?return_provider=facebook)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64886b06969cec658daaf88f/file-TW0lw1bRKW.png)

### Go Live

 To make the app live, you need to go to the navigation menu and click on <strong>"Go Live"</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64886bda969cec658daaf890/file-ECwS8pRuvt.png)

 <strong>Note: Before switching to live mode, you must complete all the requirements.</strong>

 When you complete the requirements, make sure to click on the "Go Live" button on the bottom right corner of the page.

####  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64887332969cec658daaf8a2/file-Ztfdf4iGEc.png) 



#### <strong>App Setup Complete</strong>

1. After you've done all of that, the app is complete. Add the  <strong>App ID</strong> and <strong>App Secret</strong> to the Ultimate Member Settings Facebook tab.
2. <strong>Go to Meta for Developers &gt; Settings&gt; Basic</strong> then Copy the App ID and App Secret. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488760a969cec658daaf8a8/file-A9KE7QcpR8.png)
3. Go to <strong>Ultimate Member&gt; Settings&gt;Extension&gt;Social Login&gt;Facebook Social Connect tab</strong>, and paste the <strong>App ID</strong> and <strong>App Secret</strong> in the Facebook Social Connect App ID and App Secret fields. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648876361211660f0912d949/file-CoQe7ENK5r.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6503289805bf840172c6ea17/file-bxnBkU3fS1.png)