---
---
# Social Login Common Issues
 <strong>Version 2.3+</strong>

 The Social Login extension uses 1-step and 2-step processes for the first time registrations. When a user clicks on a social network button to register they will be redirected to the social network site to confirm permissions and then return back to your website's previous page URL as Redirect a URI of your apps where a social overlay should show which includes the social registration form( for 2-step process ) so users can complete the registration.

  <strong>1. Social Overlay/Fields not showing up</strong>

 If you do not see the overlay or fields on it when you are returned to your site and instead just see a white overlay page, please go to your registration form <strong>WP-admin &gt; Ultimate Member &gt; Forms &gt; Your registration form</strong> and turn ON "<strong>Use this form in the overlay</strong>" this will show your form in the overlay.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5b17bccb0428632c466a9935/file-HIEhbVPpvd.jpg)

  <strong>2. Getting Redirect URI Mismatch Errors</strong>

 If you're getting an SDK/API error or Mismatch Redirect URI errors, please read the common issues and solutions below:

 a .Your hosting provider has a `register\_globals` that's turned on. Please ask your hosting provider to turn it off. Once the hosting provider has confirmed this is off, please check the issue again.

 b. API callback and site URL settings doesn't match the current site domain and its protocol ( http or https ). Also, check if your site URL returns www or non-www that could cause mismatch Redirect URIs set in your Apps.

 c. You entered Invalid API credentials in the Ultimate Member social connects settings.

 d. There's a Javascript error that's affecting the overlay script. Please check the browser's console to check for any errors from the theme and other plugins.

 e. There's a caching plugin or varnish/memcache installed on your host. We recommend to exclude those pages where Social Login buttons are added. Also, try clearing the cache/memcache after your install the Social Login extension and pages.

 f. Check for broken links or images that causing a 404 page. It duplicates the authentication request that causes 'state' doesn't match.

 g. Your theme/plugin has incompatibility issues with Social Login's Sessions. We recommend that you do a  [ theme/plugin conflict test](http://docs.ultimatemember.com/article/96-how-to-do-a-plugin-theme-conflict-test) .

  <strong>3. Unable to Request App Access Permissions</strong>

 If users are getting the message <strong>"We were unable to request application access permissions."</strong> on app authentication, there's a possible cache issue with your site/server. If you have a Varnish Cache or Cache plugin installed on your site/server, please try excluding the following cookie from the cache: <strong>PHPSESSID</strong>

 <strong>4. Looping Register Form on submission after Request Application Access Permissions</strong>

- If you're using the One-Step Process option, you need to remove the following fields from the Register Form: 
    - ReCaptcha
    - Terms &amp; Conditions / Privacy Policy
    - Password Fields
- Fields should be synced with the SSO fields in the field settings:  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5e624cd32c7d3a7e9ae8c84e/file-kShCDJQg6T.png)