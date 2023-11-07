---
---
# Social Login: Google App Setup
Overview
--------

 This document provides instructions on setting up a Google application so users can login/register via Google on your site using our  [Social Login extension](https://ultimatemember.com/extensions/social-login/) .

Enabling API &amp; App Registration  [\#](#app) 
------------------------------------------------

 To allow users to log in to your site with their Google account, you need to create a Google Cloud project and configure the OAuth. Follow steps below to create a configure your Google Cloud project.

### 1. Sing in to continue to Google Cloud Platform  [\#](#singin) 

 Go to  [https://console.cloud.google.com/](https://console.cloud.google.com/)  and sing in to enter the Google Cloud console.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496ba68885de842a5d8cbf4/file-TMjRKheEx1.png)

### 2. Create a project  [\#](#create_project) 

 Click the project button in the top menu and you'll see the <strong>Select a project</strong> pop-up. Click the <strong>NEW PROJECT</strong> button create a project.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496bf2fc5d2b53344e72bb3/file-VNpQ7Ki8Rf.png)

 Enter the <strong>Project name</strong> and click the <strong>CREATE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496c344046c1478e8c77294/file-leKHYAXMP3.png)

### 3. Start to configure the OAuth consent screen  [\#](#start_configure) 

 Once a project is created, go to <strong>APIs &amp; Services</strong>. Select <strong>Credentials</strong> from the left-side menu then click the <strong>CONFIGURE CONSENT SCREEN</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496c24cc5d2b53344e72bb5/file-KCur84P6ns.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496c2d7c5d2b53344e72bb6/file-omLAfNM9bS.png)

 Choose the <strong>External</strong> in the User Type options, then click the <strong>CREATE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496c3d5046c1478e8c77295/file-mDZ6EL7BON.png)

### 4. Edit app registration  [\#](#app_registration) 

#### 4.1 OAuth consent screen  [\#](#app_registration_oauth) 

 Enter the <strong>App name</strong>, <strong>User support email</strong>, upload <strong>App logo</strong>.

 Enter the <strong>Application home page</strong>, <strong>Application privacy policy link</strong>, <strong>Application terms and service link</strong>.

 Enter your website <strong>domain</strong>.

 Enter your contact <strong>Email addresses</strong>.

 Continue to the next step by clicking the <strong>SAVE AND CONTINUE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496c8fb046c1478e8c77296/file-3vWfHOsexV.png)

#### 4.2 Scopes  [\#](#app_registration_scopes) 

 You'll be on the step <strong>Scopes</strong>. Click the <strong>ADD OR REMOVE SCOPES</strong> button to select the scopes.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496cab7885de842a5d8cbf7/file-j2W5w83y2t.png)

 Select three required API Scopes:

- .../auth/userinfo.email
- .../auth/userinfo.profile
- openid

 Once selected click on the <strong>UPDATE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496cc4a1c43322e9690e074/file-XYfjwkmCe6.png)

 The selected scopes will now appear on the <strong>Your non-sensitive scopes</strong> section.

 Continue to the next step by clicking on the <strong>SAVE AND CONTINUE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496cf03e9352a3c57926f7d/file-SjuHtpIzTF.png)

#### 4.3 Test users  [\#](#app_registration_testers) 

 You'll be on the step <strong>Test users</strong>. On this step you can add Test users to test the social login, or just continue to the next step by clicking the <strong>SAVE AND CONTINUE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496cf66e9352a3c57926f7e/file-ZgZNrSdkGW.png)

#### 4.4 Summary  [\#](#app_registration_summary) 

 You'll be on the step <strong>Summary</strong> that shows you the outline of your app registration. Click the <strong>BACK TO DASHBOARD</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496d177e9352a3c57926f7f/file-RuT8FTkL01.png)

### 5 Create credentials  [\#](#credentials) 

 Select <strong>Credentials</strong> from the left-side menu. Click the <strong>CREATE CREDENTIALS</strong> button and select the <strong>OAuth client ID</strong> item.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496d31f1c43322e9690e076/file-N1QL1Jvibz.png)

 Once clicked, it'll take you to the <strong>Create OAuth client ID</strong> page.

 Select the <strong>Web application</strong> option in the <strong>Application type</strong>. Enter a name of your OAuth 2.0 client in the <strong>Name</strong> field.

 Enter allowed redirect URLs in the <strong>Authorized redirect URIs</strong> section. Enter your website Login page URL, Registration page URL, Account page Social tab URL. Add the custom page URL if you use the social login shortcode on the custom page. Each URL must contain the `provider=google` parameter.

 See example:

- [https://www.yoursitedomain.com/login/?provider=google](https://www.yoursitedomain.com/login/?provider=google)
- [https://www.yoursitedomain.com/register/?provider=google](https://www.yoursitedomain.com/register/?provider=google)
- [https://www.yoursitedomain.com/account/social/?provider=google](https://www.yoursitedomain.com/account/social/?provider=google)

> <strong>Note:</strong> By default, URLs have the "/" symbol at the end of the path. Remove "/" before "?" if your site uses URLs without "/" at the end of the path.

 Click the <strong>CREATE</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496d826e9352a3c57926f80/file-vJTVGTNozn.png)

### 6 Enter your keys  [\#](#enter_keys) 

 Once you click the button, the <strong>OAuth client created</strong> pop-up will appear and you'll see your application keys.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6496d9ed885de842a5d8cbf9/file-o4wThEamoR.png)

 Copy your <strong>Client ID</strong> and <strong>Client Secret</strong> keys and paste them to the <strong>Client ID</strong> and <strong>Client secret</strong> fields under the <strong>Google Social Connect</strong> on the <strong>wp-admin &gt; Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login</strong> page on your website.

 Turn on the <strong>Social Account Tab</strong>, <strong>Show social connect on registration forms</strong> and <strong>Show social connect on login forms</strong> settings to show the social buttons on your website. Click the <strong>Save Changes</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65032286e249755d2f85be48/file-SfcGrwazzH.png)

Test  [\#](#test) 
------------------

 Test the Social Login feature at the Login and Registration pages. If you're encountering issues, please read this article:  [Social Login Common Issues](/docs-v3/um-social-login/article/174-social-login-common-issues) . Contact the support if your application and extension configured by this instruction but does not work properly.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650323179446233b93527ae3/file-ciaYINKJQV.png)