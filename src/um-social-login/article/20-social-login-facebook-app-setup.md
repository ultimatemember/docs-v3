---
---
# Social Login: Facebook App Setup
###  Overview

 This document provides instructions on properly setting up a Facebook application so that users can log in/register via Facebook on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via Facebook.

### Creating a new app

 You need to create a Facebook app to allow users to log in to your site with their Facebook account. To create a new Facebook app, please do the following:

1. Go to the Facebook Developers site:  [https://developers.facebook.com/](https://developers.facebook.com/) .
2. If you are not logged in, log in to the site using your Facebook account details.
3. Once logged in, go to '<strong>My Apps'.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1f82c05bc62438dd2b75d/file-gVYwMtdjLN.png)</strong>
4. Click on the '<strong>Create App'</strong> button. It will lead you to the app creations page.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7920351f0473afc686bac/file-dk2UAz64U6.png)
    
     A message will appear that there's a new way to create apps with Meta, click the ' <strong>C</strong><strong>reate App'</strong> button to continue.

### Create an App

1. On this page, in the Add use case tab, select <strong>"Authenticate and request data from users with Facebook Login"</strong> from the suggested use case , and then click on the '<strong>Next'</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a79a4951f0473afc686bb7/file-lXD2uGANpQ.png)
2. In the Login type tab, select <strong>"No, I'm not building a game"</strong> as your login type, so you will not be redirected to the gaming setup, then click the '<strong>Next'</strong> button to proceed.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a79be4126ef46c7032ea4c/file-UdSN2UpPQ9.png)
3. Fill out the <strong>App Name</strong> and <strong>App Contact Email</strong>. Then click the <strong>Create App</strong> button.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae84b833fd8c767f4f89b1/file-8i6qvVD28n.png)
    
     <strong>Note:</strong> After clicking the '<strong>Create App'</strong> button, you may be presented with a security check.
4. Upon successful creation, a message window will appear that your app has been created. Click the '<strong>Go to Dashboard'</strong> button to proceed to the dashboard.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae820833fd8c767f4f89aa/file-6wlO0t7jV9.png)


Create and Publish app
----------------------

### Customize this app

1. In the dashboard, click on the <strong>'Customize adding a Facebook Login button'</strong> to set up your product.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7b9d0a45534249a235d87/file-CItnsBUQC0.png)
2. Scroll down to the <strong>Permissions</strong> section and add <strong>'</strong><strong>public\_profile'</strong> and <strong>'</strong><strong>email'</strong> permissions by clicking on the <strong>'Add'</strong> button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65a7b86e51f0473afc686bd5/file-MFLi5kMH7v.png)
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

### Prepare and submit for App Review

 <strong>Note</strong>: Additional steps may be necessary. Ensure that all required verifications and data handling questions, if applicable, are completed before submitting this application to App Review. If you do not have a Facebook business account, please follow the instructions provided here on how to create one:  [https://www.facebook.com/business/help/1710077379203657](https://www.facebook.com/business/help/1710077379203657) .

1. In the <strong>Prepare and submit for App Review</strong>, click on <strong>'Review and complete testing requirements'</strong>, it will redirect you to <strong>Graph API Explorer</strong>.  
      <strong>![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae421fc231e622d44b39cd/file-A6OgehQ7Wu.png)</strong>
2. On the right section of the Graph API explorer add the <strong>public\_profile</strong> and <strong>email.</strong> To add a permission go to <strong>permission</strong> <strong>&gt; User data permissions&gt; email. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae4628c231e622d44b39d0/file-wmlZ5HMvfr.png)</strong>
3. Once added, click on <strong>Generate Access Token</strong> and <strong>Submit</strong> buttons,
4. Go back to your App's Dashboard, and click on <strong>Business Verification</strong>, it will redirect you to the verification page. This is where you can add your business account.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae5598c231e622d44b39dc/file-K3fSXX2DfW.png)
5. This step is necessary to obtain access to user data, commonly referred to as advanced access in certain applications. Completion of this process is restricted to individuals with full control of a Business Account. For further information on business verification, please refer to this article:  [ https://www.facebook.com/business/help/2058515294227817?id=180505742745347](https://www.facebook.com/business/help/2058515294227817?id=180505742745347)  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae57a298aa997ae83164ec/file-EWCMREqZLB.png)
6. Once, you have successfully added a verified business account. Return to the App Dashboard or from the side menu, click on <strong>Review&gt;Data handling questions</strong>. It will redirect you to data handling questions where you need to answer questions about data handling. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae59b0bcd27426da814e66/file-zJUD363Lzl.png)
7. To begin, select  <strong>"Answer questions about data handling,"</strong> and a window will promptly appear. Within the <strong>Usage Check</strong> tab, carefully review and confirm the data usage permissions and features you have added. Utilize the checkboxes to express your confirmation and agreement, and subsequently, click on the <strong>confirm</strong> button to proceed. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae605898aa997ae83164f5/file-ljdN0CsrJ7.png)
8. Now in the <strong>Data Handling tab</strong>, In order to obtain access to permissions, kindly provide information regarding your data handling practices. This is a mandatory step for App Review and the subsequent launch of your app. Answer the questions and click <strong>S</strong><strong>ubmit</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae66e633fd8c767f4f897e/file-zogRweubOT.png)

### Publish

1. Go to the <strong>Publish</strong> tab from the side navigation menu. Then click on the <strong>'Go to app settings'</strong>.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae69b633fd8c767f4f8983/file-L1RrSXejUI.png)
2. You must fill in the following information: <strong>Privacy Policy URL, Terms of Service URL, User data deletion</strong> and you can also include an app icon to make the app appear more professional. Then click the <strong>'Save</strong> <strong>changes'</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ae7b9398aa997ae8316516/file-JCDZSKm7DQ.png)
3. Ensure all required settings are completed and use cases are reviewed before you click on the <strong>'Publish'</strong> button, the app can’t be published if the requirements are incomplete.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1d33cffe4f977717bb1ae/file-gwBk29AyvP.png) <strong>Note:</strong> After clicking the 'Publish' button, you may be presented with a security check.
4. After successfully publishing your app, a confirmation message will be displayed indicating that it is now available for the public to use. To proceed to the next step, simply click the  <strong>'Done'</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1d49105bc62438dd2b752/file-sUwLmksrmf.png)

### App ID &amp; App secret

 With your app successfully published, the next step is to integrate Facebook with Ultimate Member. To achieve this, you'll need both the  <strong>App ID</strong> and <strong>App Secret.</strong>

1. In the side navigation menu, navigate t <strong>o App settings &gt; Basic</strong>. Here, you'll find both the App ID and App Secret.
    
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1d91487e88924b5fa2101/file-omiTPNulYs.png)
2. <strong>Copy the App ID and App Secret</strong>, then proceed to <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login &gt; Facebook Social Connect</strong>. Paste the copied values into the respective fields and finalize the process by clicking the <strong>'Save Changes'</strong> button. 
    
      <strong>![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1e1354b18e475714bf30f/file-yc5zSgGfwZ.png)</strong>

### Test Integration

 If you enabled the settings listed below, Facebook buttons will be integrated into your site's account page,registration page, login page.   


  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1ea6bffe4f977717bb1b5/file-KQiG5bYPqD.png)

 <strong>Social Account Tab</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1ed2805bc62438dd2b758/file-Vz9usu2JJ7.png)

 <strong>Show social connect on registration form</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1f3e9ffe4f977717bb1be/file-dhSMxFP0Tj.png)

 <strong>Show social connect on login forms</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b1f58187e88924b5fa2111/file-itk1ACWwJI.png)