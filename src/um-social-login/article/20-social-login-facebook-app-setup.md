---
---
# Social Login: Facebook App Setup
###  Overview

 This document provides instructions on properly setting up a Facebook application so that users can log in/register via Facebook on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via Facebook.

### Creating a new app


1. You need to create a Facebook app to allow users to log in to your site with their Facebook account. To create a new Facebook app, please do the following:
2. Go to the Facebook Developers site:  [https://developers.facebook.com/](https://developers.facebook.com/) .
3. If you are not logged in, log in to the site using your Facebook account details.
4. Once logged in, go to <strong>My Apps. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64882478969cec658daaf84e/file-PTdDHXRhpc.png)</strong>
5. Click on <strong>Create App</strong> button. It will lead you to the app creations page.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648826657f8c2575e3544c7e/file-fZVyEJZsc0.png)
    
     You'll be asked here " <strong>Which use case do you want to add to your app?"</strong> Select "<strong>Set up Facebook Login"</strong> then click on the <strong>Next</strong> button to continue. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488277b74c2142995f91c1d/file-7cltB3dtZf.png)
6. Fill out the <strong>App Name</strong>, and <strong>App</strong> <strong>Contact Email</strong>. Then click the <strong>Create App</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64882971969cec658daaf851/file-4lGNeAg1Vk.png)
  <strong><strong>Note</strong>: After clicking the Create App button, you may be presented with a security check</strong> You will then get redirected to the App Dashboard page. On the left-side menu, go to <strong>Products &gt; Added Products.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64883c641211660f0912d8f7/file-cZBtfUEF04.png)   
 Click on <strong>Quickstart</strong> from the <strong>Configure</strong> drop-down in the <strong>Facebook Login</strong> product.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648850465fc2fe6b6dc5fd70/file-o5Y2b4IsLl.png)

 Select the <strong>Web</strong> from the platform if you want to add a Facebook login to your app.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488534e7f8c2575e3544ca0/file-2GkqEQnbOb.png)

 

###   <strong><strong>Note</strong>: Add your website URL to the "Site URL" field as shown in the image below. Then click on the Save &amp; Continue buttons.</strong>  



  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6184d4a764e42a671b633ceb/file-AnoauXkDSn.png)

###  Setting up the app 

 After you've completed creating the app, head to the app's navigation menu. You need to do the steps below before your app setup is complete.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648857ae1211660f0912d916/file-BagLFQ1EHu.png)


#### Go to App Review &gt; Request Permissions and Features

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64885a5f74c2142995f91c4e/file-mSTlisK1y5.png)

 When you click on the <strong>Request Permissions or Features</strong> button, you'll be redirected to Facebook Login Use Cases. You can set the permissions for scopes here. Add <strong>public\_profile</strong> and <strong>email</strong> permission by clicking on the <strong>"Add"</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64885bfb7f8c2575e3544ca9/file-YNcxAftfux.png)

#### Go to Settings &gt; Basic 

 This tab contains the  <strong>App ID</strong> and <strong>App Secret</strong>. Both must be copied and pasted later into the <strong>Ultimate Member&gt; Settings&gt;Extension&gt;Social Login&gt;Facebook Social Connect tab</strong>. You must fill in the following information: <strong>Privacy Policy URL</strong> and <strong>Terms of Service URL</strong>, and you can also include an app icon to make the app appear more professional. 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488601c74c2142995f91c52/file-ePbH5ahNbP.png)

 When you scroll down the page, you will find the  <strong>Website</strong> section. Add your Site URL, then click the "Save Changes" button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64886528969cec658daaf88c/file-yrX1EqH2fm.png)

#### Go to Settings &gt; Advanced 

 <strong>App Restrictions</strong> - You can restrict your app to a specific age range and countries if your site references alcohol or an adult nature site.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488667c5fc2fe6b6dc5fd8b/file-XoMub5ZVnJ.png)

 <strong>Security</strong> - These are optional if you wish to make the app more secure:

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648869767f8c2575e3544cb3/file-yqK41bw7My.png)


#### Go to Products&gt; Added Products&gt;Facebook Login &gt; Configure&gt;Settings

 <strong>Client OAuth Settings</strong> - You need to enter your site's login, register, and account's social tab URIs into the field "<strong>Valid OAuth redirect URIs</strong>." Add the custom page URL if you use the social login shortcode on the custom page.

 We recommend adding additional URLs with the parameter " <strong>return\_provider</strong>" and "<strong>provider</strong>," see example:


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

 

 To make the app live, you need to go to the navigation menu and click on <strong>"Go Live"</strong>  
 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64886bda969cec658daaf890/file-ECwS8pRuvt.png)

 <strong><strong>Note: Before switching to live mode, you must</strong> <strong>complete all the r</strong></strong><strong><strong>equirements.</strong></strong> 

  

 When you complete the requirements, make sure to click on the <strong>"Go Live"</strong> button on the bottom right corner of the page.



####  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64887332969cec658daaf8a2/file-Ztfdf4iGEc.png) <strong>App Setup Complete</strong>

 After you've done all of that, the app is complete. Add the  <strong>App ID</strong> and <strong>App Secret</strong> to the Ultimate Member Settings Facebook tab.  
  <strong>Go to Meta for Developers &gt; Settings&gt; Basic</strong> then Copy the App ID and App Secret.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6488760a969cec658daaf8a8/file-A9KE7QcpR8.png)

 <strong>Go to Ultimate Member&gt; Settings&gt;Extension&gt;Social Login&gt;Facebook Social Connect tab</strong>, and paste the App ID and App Secret in the Facebook Social Connect App ID and App Secret fields.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648876361211660f0912d949/file-CoQe7ENK5r.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6503289805bf840172c6ea17/file-bxnBkU3fS1.png)