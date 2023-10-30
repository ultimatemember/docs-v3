---
---
# Password Strength Estimator
### Overview

 The password strength estimator plugin is based on this GitHub repository:  [https://github.com/dropbox/zxcvbn](https://github.com/dropbox/zxcvbn)  from “ [zxcvbn](https://github.com/dropbox/zxcvbn) .” The plugin will determine and indicate the strength of the password. Once you have installed and activated the plugin, it will automatically appear in the Register Form password field, in the new password field in the Account &gt; change password tab, and in the Reset Password. You can read the plugin installation guide  [here.](/docs-v3/extended/article/1663-download-installation-of-the-basic-extensions)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6337021c9f7c1931ee005603/file-EXDL4wy08J.png)

### 3 Password Strength Indications

 Three indications will appear under the password field:

##### 1. Score: Worst, Bad, Weak, Good, and Strong

```
add_filter("um_pass_strength_show_score","__return_false");
```

##### 2. Warning: There will be different warnings that will appear, and it depends on the weakness of the password.

 To disable this and hide the indication, you can use the code below: ```
add_filter("um_pass_strength_show_warning","__return_false");
```

#####  3. Suggestions: There will be different suggestions that will appear, and it depends on the input.

 To disable this and hide the indication, you can use the code below: ```
add_filter("um_pass_strength_show_suggestions","__return_false");
```

 <strong>Note: The suggestions and warnings that will appear will depend on the complexity &amp; weakness of the password a user inputs.</strong>

##### Password Strength Estimator in Register Form

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6336fe089f7c1931ee0055dd/file-5QoC1C6trB.png)

##### Password Strength in Account &gt; change password tab.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/633700143f38fe1e4686294b/file-izqG9y1niy.png)

##### Password Strength Estimator in Reset Password

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63370512e1c306062a1d341c/file-6RrFi5cREU.png)