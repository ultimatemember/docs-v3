---
---
# Social Login: LinkedIn App Setup
### Overview

 This document provides instructions on correctly setting up a LinkedIn application so that users can log in/register via LinkedIn on your site. You will need to purchase our  [social login extension](https://ultimatemember.com/extensions/social-login/)  if you want users to log in via LinkedIn.

<strong>Notice:</strong> LinkedIn API is now offering a way for your app to authenticate members using OpenID Connect. The old LinkedIn API for Login has been deprecated. With this update, the feature <strong>"Sign In with LinkedIn using OpenID Connect"</strong> should be enabled in your LinkedIn App settings under the Product tab. To use the old LinkedIn API connection(3-legged OAuth Flow), please use the code snippet below:```

add_filter( 'um_social_login_linkedin__config', 'um_social_login_linkedin_backward_compatibility__config' );
function um_social_login_linkedin_backward_compatibility__config( $config ) {
    $config['provider'] = 'LinkedIn';
    $config['scope'] = array( 'r_liteprofile', 'r_emailaddress' ); // Add 'w_member_social' in the array if you have the permission to use it.
    return $config;
}
```

### Creating a new app

 You need to create a LinkedIn app to allow users to log in to your site with their LinkedIn accounts. To create a new LinkedIn app, please do the following:

- Go to the LinkedIn developer site:  [https://developer.linkedin.com/](https://developer.linkedin.com/) .
- Click the “Create App” button on the banner.
- To correctly create the application, please fill in the application sections, which are explained below.

### Create an app

- <strong>Application Name –</strong> Enter a name for your application.
- <strong>Company name –</strong> Select an existing company or choose a New Company. If you select the new company, you will be asked to enter a company name.
- <strong>Description –</strong> Enter a name for your application.
- <strong>Business Email –</strong> Enter your email address.
- <strong>Legal terms</strong> - Read the terms of service and check the box to confirm that you have read and agree to the terms.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef21bc4578be67333c65dd/file-cs5L0S9IKI.png)

### Products

 Once you have clicked on the <strong>Create app</strong> button, you'll be redirected to the Products tab.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef20ebc89aad45b096b5f9/file-P4oe4VdbAO.png)

 Scroll down the product list until you find <strong>Sign In with LinkedIn using OpenID</strong> <strong>Connect</strong> and click the <strong>Request Access</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef22e54578be67333c65de/file-uj0v4PvVoU.png)

 Read the terms; if you agree with the terms, click on the checkbox and proceed by clicking on the <strong>Request Access</strong> button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef238c1ffdf4375f16c192/file-Wvai2S0c0f.png)

### <strong>Auth</strong>



 Go to the Auth tab and add Redirect URLs.   


  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef27e6c89aad45b096b5ff/file-mmUcJurwMm.png)

### OAuth 2.0 settings

 In the redirects URLs, you just need to enter your site's login, register, and account's social tab URLs with <strong>/?provider=linkedin</strong> in the end e.g.:

  [http://www.mydomain.com/login/?provider=linkedin](http://www.mydomain.com/)

  [http://www.mydomain.com/register/?provider=linkedin](http://www.mydomain.com/)

  [http://www.mydomain.com/account/social/?provider=linkedin](http://www.mydomain.com/)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef28d2c89aad45b096b602/file-U8x3ru775m.png)

### <strong>Scopes</strong>

 The <strong>OAuth 2.0 scopes</strong> will appear a few seconds after you have added and updated the redirect URLs in OAuth 2.0 Settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2963c89aad45b096b604/file-4UO3T9sKY4.png)



### Application details

 If the app is successfully created, you will see the following details. You will need to copy the <strong>API Key</strong> and <strong>Secret Key</strong> and add them to the <strong>Ultimate member &gt; Settings &gt; Extensions &gt; Social Login &gt; LinkedIn Social Connect.</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2a0ec89aad45b096b606/file-QOl8MsAGcy.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2b05e82ed15ede51f708/file-f41DKmQCgr.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65031ce34baf3c02bf197e2e/file-kV5Xx0GCg0.png)