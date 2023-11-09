---
---
# Set Password Link for UM Email Templates
Overview
--------

  [](/docs-v3/um-extended/article/1663-download-installation-of-the-basic-extensions)

 This plugin allows users to set their passwords via email activation after registration. It generates a link within email templates, enabling users to complete the setup. For installation instructions, please refer to this  [document](/docs-v3/um-extended/article/1889-installation) .

Setup
-----

1. Add the following shortcode to generate a "Set Password" link within UM Email Templates:
 ```
{set_password_link}
	
```

3. Go to wp-admin &gt; Ultimate Member &gt; Settings &gt; Email &gt; Account Activation Email. Click on the gear icon to edit the Account Activation Email template.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654a6242398d235676f608f8/file-oJqYc1qJXM.png)
4. Enable the Account Activation Email and then insert the shortcode into the Message Body - Text and customize the email template as needed. Don't forget to click the "Save Changes" button.  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654a659d398d235676f608fd/file-RNeJw4s5Cr.png)
5. After a user registers on your site, they will receive a "Set Password" email. When they click the "Set your password" button, they will be redirected to the password reset page on your site, where they can set and save their new password.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654a68be9c4ad7036dd6f7f6/file-BOECSeacgZ.png)

#### Related Articles:

- [Password Reset doesn't work](/docs-v3/um-extended/article/1518-password-reset-doesnt-work)
- [Custom redirection after Reset Password](/docs-v3/um-extended/article/1694-validate-username-in-email-password-reset-link)