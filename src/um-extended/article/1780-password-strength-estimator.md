---
---
# Password Strength Estimator
### Overview

 The UM Password Strength Estimator plugin is built upon the foundation of the "  [zxcvbn](https://github.com/dropbox/zxcvbn) " GitHub repository, accessible at  [https://github.com/dropbox/zxcvbn](https://github.com/dropbox/zxcvbn) . Utilizing the capabilities of "zxcvbn," this plugin is designed to accurately assess and visually indicate the strength of user passwords. By integrating this feature into the Ultimate Member framework, the plugin enhances security measures by offering real-time insights into the strength of passwords chosen by users during registration, password changes, and password resets.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654cd89e6e5cdb01c2a32df2/file-JKnpVZaU10.png)

### Integration and activation

- Upon installation and activation, the plugin seamlessly integrates into key password fields: 
    - Register Form password field.
    - New password field in the Account &gt; change password tab.
    - Reset Password field.

### Password Strength Indicators

####  Three crucial indicators provide insights into password strength:

1. <strong>Score:</strong>
    - Indicates password strength on a scale from Worst to Strong (Worst, Bad, Weak, Good, and Strong).
    - To hide the score, utilize the provided filter: `add_filter("um_pass_strength_show_score","__return_false");`.
2. <strong>Warning</strong>: 
    - Displays warnings based on the password's weakness.
    - Can be disabled using the filter: `add_filter("um_pass_strength_show_warning","__return_false");`.
3. <strong>Suggestions</strong>: 
    - Offers suggestions based on password input complexity.
    - To disable it, use the filter: `add_filter("um_pass_strength_show_suggestions","__return_false");`.

 <strong>Note</strong>: Suggestions and warnings depend on the complexity and weakness of the user-inputted password.

### Visual Representation

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654cdbb5687c016dc15b73ec/file-h7rL0P92Aq.png)

 This plugin enhances password security awareness by providing users with valuable feedback on the strength of their chosen passwords, contributing to a more secure and informed user experience.