---
---
# What's new in UM Social Login 2.3:  One-step Registration Process, New Social Networks, Popup Window Authentication & Profile Avatar improvements
 Since our last minor release in July, we’ve been working on a variety of improvements to Social Login:

- One-step process for users registering via social networks.
- Social Shortcode's integration type settings
- Sync Social Registration form fields
- Opens a new browser window to authenticate Social Network's applications.
- Redesigned Social Network avatars selection to change profile photo in Profile form.
- Added Github, WordPress.com, and 20+ social network providers.

 Ultimate Member 2.3 is a minor release, meaning <strong>it should be fully backward compatible with all Social Login releases since 2.0</strong>. However, it’s still considered best practice and recommended, to backup before updating.

 Here are some more details about what’s new in 2.3

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d666d8d2c7d3a7a4d77beb8/file-jx77YKZ9mm.png)


### One-step process

 The 2-step process is still available as a default option for backward compatibility.

 Additional options are added in the Register form builder to allow the One-step process in the Social Overlay.

 In previous versions, when the first time you try to log in or register via a social network, you will be automatically connected and logged in with the site account that matches your email address in a social network account.

 In version 2.3, we have added an option to have the ability to choose the registration process when emails are matched.

- Link Accounts &amp; Login users Automatically

\- This is the default process since version 2.0.

- Link Accounts &amp; Redirect users to Login Page
- Allow new account creation with a generated email address

\- A new email address will be generated on the registration form process.   
 Example format: <strong>nobody&lt;user\_id&gt;@yoursitedomain.com</strong>.

\- You can modify the email prefixes with the following filter hooks:   
 <strong>+ um\_sso\_generate\_email\_address</strong>  
\- $email\_prefix   
\- $predicted\_user\_id   
\- $site\_url   
  <strong>+ "um\_sso\_generate\_email\_domain"</strong>  
\- $site\_url

- Do not link Accounts &amp; Prevent from account creation  
     - Users will not be able to register or login via the social networks when both email addresses are matched and their social network email is not linked to the site. This will require users to manually log in to connect their Social Network via the Account Page.

 <strong>Splash Screen</strong>

 Version 2.3 has the ability to show a content block in Social Overlay as Splash Screen with an Image Loader for a few seconds. This can be disabled in the Social Register Form settings to keep the users redirected to the next page or process immediately.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6797862c7d3a7a4d77d40b/file-icOzr3PjYj.png)

###  <strong>Social Buttons Shortcode - Integration Type</strong>

 We have improved the social button shortcode to restrict the social integration process. The new options are Login &amp; Register ( default ), Login only &amp; Register only.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6a2c682c7d3a7a4d77eca1/file-AO5sHkpQ3P.png)

###  <strong>Sync Social Registration form fields with Social Network's API response data</strong>

 Assign Social Network fields to Social Register fields to synchronize the values on Registration.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6a2d9e04286350aeeb4aff/file-1u6YSD7dDU.png)

#### <strong>Basic Profile Info</strong>

 On User Authentication, when a user has successfully authenticated via a social network, the plugin pulls the user data from the social network to the site and sync with register form fields.

 <strong>Data Members:</strong>

 | Field Name | Type | Short description |
|---|---|---|
| identifier | String | The Unique user’s ID on the connected provider. Can be an integer for some providers, Email, URL, etc. |
| profileURL | String | URL link to a profile page on the IDp website |
| webSiteURL | String | User website, blog, web page, |
| photoURL | String | URL link to user photo or avatar |
| displayName | String | User dispalyName provided by the IDp or a concatenation of first and last name. |
| description | String | A short about\_me |
| firstName | String | User’s first name |
| lastName | String | User’s last name |
| gender | String | User’s gender. Values are ‘female’, ‘male’ or NULL |
| language | String | User’s language |
| age | Integer | User’s age, note that we don’t calculate it. We return it as it is. |
| birthDay | Integer | The day in the month in which the person was born. |
| birthMonth | Integer | The month in which the person was born. |
| birthYear | Integer | The year in which the person was born. |
| email | String | User email. Not all of IDp grant access to the user email |
| emailVerified | String | Verified user email. Note: not all of IDp grant access to verified user email. |
| phone | String | User’s phone number |
| address | String | User’s address |
| country | String | User’s country |
| region | String | User’s state or region |
| city | String | User’s city |
| zip | Integer | Postal code or zip code. |
| extend | Array | An extra data is related to the user (e.g followers). |



> If you want to use the extend option, please read the documentation in the link:  [Social Login - Extend Options](/docs-v3/um-social-login/article/1506-social-login-sync-social-register-form-fields-with-extend-option)









### Opens a new browser window to authenticate Social Network's applications.

 Log in, register, or connect to a Social Network site via an Account page or any page that has Social Login buttons.

 We have improved the Social Network authentication process for requesting user application permission via a child window browser.

 Like how other plugins such as NextEnd Social Login and other popular Single Sign-On plugins for WordPress implemented the same authentication process via a child window, this allows users to register/login/connect their Social Network accounts without leaving the current page.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6a34f02c7d3a7a4d77ecb1/file-SP9GnrDwYp.png)









### Redesigned Social Network avatars selection to change profile photo in Profile form

 Preview each Social Network avatar in Profile Photo when you hover on it. Just click/tap on the avatar to save the avatar as a profile photo.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5d6a38c004286350aeeb4b0a/file-MN6kdwofnx.png)

### Additional Social Networks: Github, WordPress.com, and 20+ more networks.

 We have added Github and WordPress.com to the supported Social Networks in 2.3. We haven't enabled the settings for other Social Networks that are ready for usage since the latter networks have been requested by many customers.

> If you want to enable other Social Networks, please see the doc to  [enable Social Login settings for hidden Social Networks](/docs-v3/um-social-login/article/1508-social-login-enable-hidden-social-network-settings) .

 Here's a list of supported social network providers and their specifications:

| Adapter Unique Name | Specs | Has 2.3 Settings | Authentication &amp; Basic Profile |  |  |  |
|---|---|---|---|---|---|---|
| Amazon | OAuth2 | No | Yes |
| AOLOpenID | OpenID | No | Yes |
| Authentiq | OAuth2 | No | Yes |
| BitBucket | OAuth2 | No | Yes |
| Blizzard | OAuth2 | No | Yes |
| Discord | OAuth2 | No | Yes |
| Disqus | OAuth2 | No | Yes |
| Dribbble | OAuth2 | No | Yes |
| <strong>Facebook</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |  |  |
| Foursquare | OAuth2 | No | Yes |  |
| <strong>GitHub</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |
| GitLab | OAuth2 | No | Yes |
| <strong>Google</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |  |
| <strong>Instagram</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |
| <strong>LinkedIn</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |  |
| MicrosoftGraph | OAuth2 | No | Yes |  |
| OpenID | OpenID | No | Yes |
| Paypal | OpenID | No | Yes |
| PaypalOpenID | OpenID | No | Yes |
| Reddit | OAuth2 | No | Yes |
| Spotify | OAuth2 | No | Yes |
| StackExchange | OAuth2 | No | Yes |
| StackExchangeOpenID | OpenID | No | Yes |
| Steam | Hybrid | No | Yes |
| SteemConnect | OAuth2 | No | Yes |
| Tumblr | OAuth1 | No | Yes |  |  |
| TwitchTV | OAuth2 | No | Yes |
| <strong>Twitter</strong> | <strong>OAuth1</strong> | <strong>Yes</strong> | <strong>Yes</strong> |  |  |  |
| WeChat | OAuth2 | No | Yes |
| WindowsLive | OAuth2 | No | Yes |  |
| <strong>WordPress</strong> | <strong>OAuth2</strong> | <strong>Yes</strong> | <strong>Yes</strong> |
| Yahoo | OAuth2 | No | Yes |
| YahooOpenID | OpenID | No | Yes |

 For a more complete list of new things,  [see the changelog at the bottom page](https://ultimatemember.com/roadmap/) .