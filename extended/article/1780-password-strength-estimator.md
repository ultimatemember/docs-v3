---
title: Password Strength Estimator 
layout: UMLayout
---
# Password Strength Estimator


### Overview
<p>
	 The password strength estimator plugin is based on  this GitHub repository: 
	<a href="https://github.com/dropbox/zxcvbn">https://github.com/dropbox/zxcvbn</a> from “<a href="https://github.com/dropbox/zxcvbn">zxcvbn</a>.” The plugin will determine and indicate the strength of the password. Once you have installed and activated the plugin, it will automatically appear in the Register Form password field, in the new password field in the Account > change password tab, and in the Reset Password. You can read the plugin installation guide <a href="https://ultimatemember.github.io/Extended/article/1663-download-installation-of-the-basic-extensions">here.</a></p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6337021c9f7c1931ee005603/file-EXDL4wy08J.png"></p>

### 3 Password Strength Indications
<p>
	 Three indications will appear under the password field:</p><h5>1. Score:  Worst, Bad, Weak, Good, and Strong</h5>
<pre>add_filter("um_pass_strength_show_score","__return_false");
</pre><h5>2. Warning: There will be different warnings that will appear, and it depends on the weakness of the password.</h5>
 To disable this and hide the indication, you can use the code below:
<pre>add_filter("um_pass_strength_show_warning","__return_false");
</pre><h5> 3. Suggestions: There will be different suggestions that will appear, and it depends on the input.</h5>
 To disable this and hide the indication, you can use the code below:
<pre>add_filter("um_pass_strength_show_suggestions","__return_false");
</pre><p class="callout-blue">
	<strong>Note: The suggestions and warnings that will appear will depend on the complexity & weakness of the password a user inputs.</strong></p><h5>Password Strength Estimator in Register Form</h5><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6336fe089f7c1931ee0055dd/file-5QoC1C6trB.png" style="width: 427px;"></p><h5>Password Strength in Account > change password tab.</h5><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/633700143f38fe1e4686294b/file-izqG9y1niy.png" style="width: 585px;" alt=""></p><h5>Password Strength Estimator in Reset Password</h5><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63370512e1c306062a1d341c/file-6RrFi5cREU.png" style="width: 441px;"></p>
