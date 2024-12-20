import{_ as r,r as n,o as l,c,d as a,a as o,b as t,e as i}from"./app-f0e55044.js";const h={},d={href:"/docs-v3/um-social-login/article/20-social-login-facebook-app-setup",target:"_blank",rel:"noopener noreferrer"},p={href:"/docs-v3/um-social-login/article/141-social-login-google-app-setup",target:"_blank",rel:"noopener noreferrer"},g={href:"/docs-v3/um-social-login/article/140-social-login-twitter-app-setup",target:"_blank",rel:"noopener noreferrer"},u={href:"/docs-v3/um-social-login/article/1363-social-login-instagram-app-setup-with-instagram-basic-display-ap",target:"_blank",rel:"noopener noreferrer"},m={href:"/docs-v3/um-social-login/article/142-social-login-linkedin-app-setup",target:"_blank",rel:"noopener noreferrer"},f={href:"/docs-v3/um-social-login/article/1532-social-login-github-app-setup",target:"_blank",rel:"noopener noreferrer"},w={href:"/docs-v3/um-social-login/article/1533-social-login-wordpress-app-setup",target:"_blank",rel:"noopener noreferrer"},b={href:"/docs-v3/um-social-login/article/1763-social-login-discord-app-setup",target:"_blank",rel:"noopener noreferrer"},y={href:"/docs-v3/um-social-login/article/1760-social-login-twitchtv-app-setup",target:"_blank",rel:"noopener noreferrer"},k={href:"/docs-v3/um-social-login/article/1927-setting-passwords-in-ultimate-member-register-forms",target:"_blank",rel:"noopener noreferrer"},v={href:"/docs-v3/um-social-login/article/1340-placeholders-for-email-templates",target:"_blank",rel:"noopener noreferrer"},S={href:"/docs-v3/um-social-login/article/1536-social-login---list-of-sync-field-options-in-form-builder",target:"_blank",rel:"noopener noreferrer"},T={href:"/docs-v3/um-social-login/article/1506-social-login-sync-social-register-form-fields-with-extend-option",target:"_blank",rel:"noopener noreferrer"};function x(A,e){const s=n("ExternalLinkIcon");return l(),c("div",null,[e[28]||(e[28]=a('<h1 id="social-login-2-3-setup" tabindex="-1"><a class="header-anchor" href="#social-login-2-3-setup" aria-hidden="true">#</a> Social Login 2.3 Setup</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>This document provides instructions on how to set up the Social login extension so users can sign-up/login to your site via Social Accounts and how to enable the error logs:</p><ul><li><a href="#general_settings">General Settings</a></li><li><a href="#shortcodes">Shortcodes</a></li><li><a href="#forms">Social Registration Forms</a></li><li><a href="#import">Profile Data Import</a></li><li><a href="#account">Account Page</a></li><li><a href="#error-debugging">Error Debugging</a></li></ul><h2 id="app-creation-and-setup" tabindex="-1"><a class="header-anchor" href="#app-creation-and-setup" aria-hidden="true">#</a> App creation and setup <a href="#create_application">#</a></h2><p>For social login to work correctly, you need to create an app on each social network so your site can be linked to the app. We have created separate docs for each app setup:</p>',6)),o("ul",null,[o("li",null,[o("a",d,[e[0]||(e[0]=t("Facebook")),i(s)])]),o("li",null,[o("a",p,[e[1]||(e[1]=t("Google")),i(s)])]),o("li",null,[o("a",g,[e[2]||(e[2]=t("X (formerly Twitter)")),i(s)])]),o("li",null,[o("a",u,[e[3]||(e[3]=t("Instagram")),i(s)])]),o("li",null,[o("a",m,[e[4]||(e[4]=t("LinkedIn")),i(s)])]),o("li",null,[o("a",f,[e[5]||(e[5]=t("GitHub")),i(s)])]),o("li",null,[o("a",w,[e[6]||(e[6]=t("WordPress.com")),i(s)])]),o("li",null,[o("a",b,[e[7]||(e[7]=t("Discord ( v2.3.15+ )")),i(s)])]),o("li",null,[o("a",y,[e[8]||(e[8]=t("TwitchTV( v2.3.15+ )")),i(s)])])]),e[29]||(e[29]=a('<h3 id="link-apps-to-your-site" tabindex="-1"><a class="header-anchor" href="#link-apps-to-your-site" aria-hidden="true">#</a> Link apps to your site</h3><p>Once you have created each app, you will need to copy over the App ID/Key and the secret key and paste them into the social network tabs on the settings page.</p><h2 id="general-settings" tabindex="-1"><a class="header-anchor" href="#general-settings" aria-hidden="true">#</a> General settings <a href="#general_settings">#</a></h2><p>The general settings tab for the social login extension allows you to:</p><ul><li>Turn on/off the social tab on the account page</li><li>Show the social login buttons by default on the default register form</li><li>Show the social login buttons by default on the default login form</li></ul><h3 id="social-networks-settings" tabindex="-1"><a class="header-anchor" href="#social-networks-settings" aria-hidden="true">#</a> Social Networks settings</h3><p>Each social network has a setting that can activate/deactivate that particular network. Once the setting is turned on you&#39;ll see fields where you must add API Keys for the social login to work.</p><h2 id="shortcodes" tabindex="-1"><a class="header-anchor" href="#shortcodes" aria-hidden="true">#</a> Shortcodes <a href="#shortcodes">#</a></h2><p>The social login extension allows you to place social login buttons anywhere on your site using shortcodes. You can create multiple social login shortcodes for a different output on your site depending on where you want to add the buttons.</p><p>The general settings for each shortcode allow you to:</p><ul><li>Assign a specific role to a user on registration via Social Login</li><li>Show Social Buttons to logged-in users only</li><li>Keep users logged in</li><li>Choose the integration type for the Social buttons: Login only, Register only, or Both ( default ).</li><li>If you add the social login shortcode on a custom page for users to log and configure the user role settings and set the redirection after the login to a custom URL, the redirection won&#39;t work because the social login shortcode is for dynamic page only it&#39;ll only reload the current page where the shortcode is added.</li></ul><h3 id="creating-a-new-social-login-shortcode" tabindex="-1"><a class="header-anchor" href="#creating-a-new-social-login-shortcode" aria-hidden="true">#</a> Creating a new social login shortcode</h3><p>To create a social login shortcode, click on social login in the Ultimate Member menu and click the Add new button. On the new social login page, you can decide which buttons to show and apply some styling options that will alter how the buttons appear on your site. To output the buttons on your site, you must copy the shortcode and add it to your site.</p><p>Go to <strong>wp-admin &gt; Ultimate Member &gt; Social Login&gt;Edit or add social login shortcode.</strong></p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045a534baf3c02bf197f74/file-P1zD444WEG.png" alt=""></p><p>wp-admin &gt; Appearance &gt; Widgets</p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045b514baf3c02bf197f76/file-LGl7ASjSzz.png" alt=""></p><h2 id="social-registration-forms" tabindex="-1"><a class="header-anchor" href="#social-registration-forms" aria-hidden="true">#</a> Social Registration Forms <a href="#forms">#</a></h2><p>When a user tries to register on your site using the social login buttons, they will be taken to the social network site to accept the app permissions, and if they accept, they will be redirected back to your site, where they will see an overlay that shows the <strong>Social Registration</strong> form.</p><p>This form is needed to collect and add required user details (for example, X(formerly Twitter) does not pass over a user&#39;s email address) so the user can complete the registration process. Once a social network account is connected to a user on your site, the user will be logged in immediately when they come back to your site (as long as they are logged in to the social network on that browser).</p><p>The <strong>Social Registration</strong> form is automatically added to the forms list when you activate the plugin. You can edit this form on <strong>wp-admin &gt; Ultimate Member &gt; Forms</strong>.</p><p>There are two ways to process data from Social Network Apps to register a user on your site: <strong>one-step process</strong> or <strong>two-step process</strong>.</p><table><thead><tr><th><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc195332c7d3a7e9ae386da/file-cg7uEAA3v8.png" alt=""> Two-step process</th><th><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc193ec2c7d3a7e9ae386c6/file-ZXmJvg150n.png" alt=""> One-step process</th></tr></thead></table><h3 id="two-step-process" tabindex="-1"><a class="header-anchor" href="#two-step-process" aria-hidden="true">#</a> Two-Step Process</h3><p>There are instances where users can check the fields that will be submitted to your site during the registration process - The two-Step process enables users to check the details and allows them to edit the form or add extra fields to fill out before submitting the <strong>Social Registration</strong> form.</p><h3 id="one-step-process" tabindex="-1"><a class="header-anchor" href="#one-step-process" aria-hidden="true">#</a> One-Step Process</h3><p>You can choose this process if you want to register a user automatically without showing the <strong>Social Registration</strong> form fields on the overlay. This allows users to register and then login automatically on successful registration.</p><p>When one of the Social Networks does not pass a user&#39;s email address or Email Address has already been used on the site, there are 4 options to choose from which you can use to continue the Registration process:</p><ul><li>Link Accounts &amp; Login immediately</li><li>Link Accounts &amp; Redirect to Login Page</li><li>Allow new account creation with a generated Email Address</li><li>Do not link accounts &amp; prevent account creation</li></ul><p>There&#39;s also an option to show a Splash Screen to display pre-loading content or Image loader on the overlay during the registration process.</p><p><strong>Note</strong>: To synchronize fields using the 1-step process with a specific registration form, you must enable the <strong>&quot;Use this form in the overlay&quot;</strong> option and set it to <strong>&quot;Yes.&quot;</strong></p><p>In the one-step process of social login with Ultimate Member, users are registered and logged in automatically without having to set a password during the registration process. This approach is designed to streamline the user experience and make it easier for users to sign up and access the site quickly.</p><p><strong>Here&#39;s how it works:</strong></p>',33)),o("ol",null,[e[19]||(e[19]=o("li",null,[o("strong",null,"Social Login Initiation:"),t(" When a user chooses to log in with a social account (e.g., Facebook, Google) on your site, Ultimate Member's one-step process kicks in.")],-1)),e[20]||(e[20]=o("li",null,[o("strong",null,"Authentication and Registration:"),t(" The user is redirected to the chosen social network's login page, where they authenticate their account. Once authenticated, the social network provides necessary user information to Ultimate Member.")],-1)),e[21]||(e[21]=o("li",null,[o("strong",null,"Automatic Registration:"),t(" Ultimate Member automatically registers the user on your WordPress site using the information provided by the social network. This registration process includes creating a new user account in the WordPress database.")],-1)),e[22]||(e[22]=o("li",null,[o("strong",null,"Immediate Login:"),t(" After registration is successful, Ultimate Member automatically logs the user in to their newly created account. This means the user can access the site's features and content without the need to log in again manually.")],-1)),o("li",null,[e[11]||(e[11]=o("strong",null,"Password Setting:",-1)),e[12]||(e[12]=t(" Since ")),o("a",k,[e[9]||(e[9]=t("no password is set")),i(s)]),e[13]||(e[13]=t(" during the registration process, users are prompted to set a password after registration. This is typically done through a link provided in the Welcome Email. This email with a ")),o("a",v,[e[10]||(e[10]=t("placeholder")),i(s)]),e[14]||(e[14]=t(" is a notification sent to users, typically after registration, that contains a dynamic placeholder tag like ")),e[15]||(e[15]=o("code",null,"{action_url}",-1)),e[16]||(e[16]=t(". This placeholder tag is crucial when no password field is present during registration, such as in a one-step social login process. The ")),e[17]||(e[17]=o("code",null,"{action_url}",-1)),e[18]||(e[18]=t(" placeholder generates a link in the email that allows users to set their password. Users can click on this link to be redirected to a page where they can securely set their password, ensuring a smooth registration process and access to their account."))])]),e[30]||(e[30]=a('<h4 id="benefits-of-one-step-process" tabindex="-1"><a class="header-anchor" href="#benefits-of-one-step-process" aria-hidden="true">#</a> Benefits of One-Step Process:</h4><ul><li><strong>Simplified Registration:</strong> Users can sign up quickly and easily without the need to fill out a lengthy registration form.</li><li><strong>Instant Access</strong>: Users can access the site immediately after registration, enhancing the overall user experience.</li></ul><h2 id="profile-data-import" tabindex="-1"><a class="header-anchor" href="#profile-data-import" aria-hidden="true">#</a> Profile data import <a href="#import">#</a></h2><p><strong>Sync Register form Fields from Social Network fields</strong> ( since version 2.3 )</p><p>Social Login adds a field option in the form builder that synchronizes the specific data from the Social Networks to populate the field value on the Registration process. Please note that not all Social Networks return the same data e.g. Instagram doesn&#39;t pass an Email Address, but Facebook returns it with Email Permissions in the Facebook application.</p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5dc185082c7d3a7e9ae385c9/file-4gj9lew7F0.png" alt=""></p>',6)),o("p",null,[e[25]||(e[25]=t("Please see the ")),o("a",S,[e[23]||(e[23]=t("List of Sync Field options")),i(s)]),e[26]||(e[26]=t(" and ")),o("a",T,[e[24]||(e[24]=t("Sync Field with extended options")),i(s)]),e[27]||(e[27]=t(" ."))]),e[31]||(e[31]=a('<h3 id="profile-photo-import" tabindex="-1"><a class="header-anchor" href="#profile-photo-import" aria-hidden="true">#</a> Profile photo import</h3><p>The social login extension will import a user&#39;s profile photo from their social network profile as the profile photo on your site. The most recently connected social network will be the photo used (e.g., if a user registers with X, it will show their X profile photo, but if on the account page they connect to Facebook, then their Facebook profile photo will become the profile photo on your site).</p><h2 id="account-page" tabindex="-1"><a class="header-anchor" href="#account-page" aria-hidden="true">#</a> Account page <a href="#account">#</a></h2><p>The social login extension adds a new tab to the user account page called &quot;social connect.&quot; Users can connect/disconnect their social networks from their accounts on this tab.</p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65045c609446233b93527c0d/file-nPNrt4oldo.png" alt=""></p><h2 id="error-debugging" tabindex="-1"><a class="header-anchor" href="#error-debugging" aria-hidden="true">#</a> Error Debugging <a href="#error-debugging">#</a></h2><p>This option allows developers to see any errors when testing the social authorization. To enable this option go to <strong>wp-admin &gt; UM &gt; Settings &gt; Extensions &gt; Social Login</strong> and see &quot;<strong>Enable Debug Logging&quot;</strong></p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b4ef79bb3605c394c17a/file-6l5X3PLznT.png" alt=""></p><p>Click on the check box to enable it, then click on the highlighted link to view the error logs.</p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b5c6a3bd51396505441c/file-vv4gUNg7pP.png" alt=""></p><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62e2b638c35bbc3e190ae809/file-oSKyUs33CE.png" alt=""></p>',11))])}const P=r(h,[["render",x],["__file","1531-social-login-2-3-setup.html.vue"]]);export{P as default};