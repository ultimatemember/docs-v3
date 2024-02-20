---
---
# Social Login: X(formerly Twitter) API v2 Setup
Overview
--------

 This document will provide instructions on how to set up an X(formerly Twitter) application API version 2, so users can register or log in via X on your site. You need to purchase and activate  [social login extension](https://ultimatemember.com/extensions/social-login/)  for this setup to work.

Creating a Project
------------------

 You need to create a project first before you create a new app. Do the following steps below to create a project:

- Go to the Twitter App developer portal:  [https://developer.twitter.com/en/portal/projects-and-app](https://developer.twitter.com/en/portal/projects-and-apps) .
- In the left side menu, below Projects &amp; Apps, click on <strong>Overview.</strong>
- Under the <strong>Elevated Section,</strong> click the "<strong>+ Add Project</strong>" button to add a new project.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6532267b25f8430475024dfe/file-LuCWH6NatK.png)
- Set the name of your project and click on the <strong>Next</strong> button.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653227a51ec9493542048638/file-QhaHd8POtQ.png)
- Select how you intend to use the Twitter developer platform from the drop-down menu, and then click on the <strong>Next</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6532283d9362491a4094ab8b/file-N8S4Daphcm.png)
- Type and describe your project in the text area. Click on the <strong>Next</strong> button. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653228e19362491a4094ab8c/file-d8p4d62lJ9.png)

Creating a new app
------------------

 To create a new Twitter app, you need to do the following steps below:

8. Enter a name for your app. Click the <strong>Next</strong> button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/653229c01ec949354204863e/file-hwGDyBzV20.png)
9. In the Keys &amp; Tokens tab you need to copy the <strong>API key &amp; API key secret</strong> and paste it in the Social Login.   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65323b111ec949354204864f/file-PWrUvYGHiy.png)
10. Go to <strong>Ultimate Member &gt; Settings&gt; Extensions &gt; Social Login&gt; X Social Connect</strong>. Paste the <strong>API Key</strong> in the <strong>Consumer Key</strong> field and the <strong>API Secret Key</strong> in the <strong>Consumer Secret</strong> field, and click on the <strong>Save Changes</strong> button to update.
 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/650302284baf3c02bf197e01/file-NZwirJmpPZ.png) ### Setup App

- You can continue by clicking the <strong>"A</strong><strong>pp settings"</strong> button or you can go back to the Twitter Developer Portal  [https://developer.twitter.com/en/portal/projects-and-apps](https://developer.twitter.com/en/portal/projects-and-apps)
  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65323eb59362491a4094ab9d/file-3lzutQFZEM.png)

- Under the Projects &amp; Apps menu, go to the project you have created and click on your Twitter App's Name.
- In the User authentication settings, click on the <strong>"Set up"</strong> button to open the user authentication settings.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65324047234cd75251327ee7/file-PDzAogrizr.png)

- To enable OAuth 2.0, first, you must select from the three permissions under <strong>App permissions</strong> to enable OAuth 1.0a Authentication and select your app type.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65324dc7234cd75251327efe/file-Oy7HuadFAM.png)
- Now, add your URLs to the callback URLs in the <strong>App info</strong>.   
     Add your Redirect URIs. See the example below: 
    - [https://yoursiteURL/login/](https://yoursiteURL/login/)  e.g.,  [https://ultimatemember.com/login/](https://ultimatemember.com/login/)
    - [](https://ultimatemember.com/login/)  [https://yoursiteURL/register/](https://yoursiteURL/register/)  e.g.,  [https://ultimatemember.com/register/](https://ultimatemember.com/register/)
    - [https://yoursiteURL/account/social/](https://yoursiteURL/account/social/)  e.g.,  [https://ultimatemember.com/account/social/](https://ultimatemember.com/account/social/)
- Don't forget to add URLs for other required fields such as Website URL, Terms of Service, and Privacy Policy. Click the <strong>Save</strong> button when done.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63bc1764bfe3f971fb093f40/file-Cc3lQGapv2.png)

 You can now test and check if the X Login or Register Button Appears in the Login form or Register Form, make sure that the <strong>Show Social Connect login forms or registration forms</strong> are enabled in the Social login settings from wp-admin&gt;Ultimate Member&gt; Settings&gt; Extension&gt; Social login.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65031a259446233b93527ac9/file-rrQ8hYxE0U.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65367e0125f84304750250bc/file-LaoMRqLUSl.png)