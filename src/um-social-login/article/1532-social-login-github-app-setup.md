---
---
# Social Login: Github App Setup
### Overview

 This document provides instructions on properly setting up a GitHub application so users can log in/register via Github on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via GitHub.

### Creating a new app

 You need to create a GitHub app to allow users to log in to your site with their GitHub account. To create a new GitHub app, please do the following:

1. Go to the GitHub application management site:  [https://github.com/settings/applications/new](https://github.com/settings/applications/new)
2. For first-timers, you must register a new application, click the button, and fill in the required information.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6186812a12c07c18afde51f6/file-Uq5SOI78US.png) <strong><strong>Enter the details for the application.</strong></strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63c53e202510956d7c4071c3/file-M36ATxvVZu.png)

 3. Do not forget to add a single Callback/Redirect URL( See screenshot below ):

- [https://yoursiteURL/login/?provider=github](https://yoursiteurl/login/?provider=github)  e.g.  [https://ultimatemember.com/login/?provider=github](https://ultimatemember.com/login/?provider=github)   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6186908864e42a671b63427d/file-7rZtGils1T.png)

 4. Read and agree to the Developer Guidelines and click the “ <strong>Register Application</strong>” button

 5. Go to <strong>Settings&gt; Developer Settings&gt; OAuth Apps</strong> and click on your App.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/618689bc64e42a671b63426b/file-zn9Kj6qyu5.png)

### Client ID &amp; Secret

 On this page, you will find the Client ID (API key) and Client Secret (API secret). If no Client Secret is shown, you need to click the <strong>Generate a new client secret</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61868b6764e42a671b634270/file-ajoiSbetXc.png)

 You need to copy both <strong>Client ID</strong> and <strong>Client secrets</strong> and add them to your site on the Github tab on UM settings page. 

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6186922912c07c18afde520d/file-kJ20zuBGKI.png)



 Go to  <strong>Ultimate Member &gt; Settings &gt; Extensions &gt; Social Login &gt; Github Social Connect.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65032a379446233b93527aed/file-38DU1lZP8d.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65032a43a38b876318e352b4/file-9La2KSNlew.png)