import{_ as t,r as a,o as l,c as d,a as n,b as i,e as o,d as r}from"./app-f0e55044.js";const c={},m={href:"https://ultimatemember.com/extensions/social-login/",target:"_blank",rel:"noopener noreferrer"};function u(v,e){const s=a("ExternalLinkIcon");return l(),d("div",null,[e[3]||(e[3]=n("h1",{id:"social-login-linkedin-app-setup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#social-login-linkedin-app-setup","aria-hidden":"true"},"#"),i(" Social Login: LinkedIn App Setup")],-1)),e[4]||(e[4]=n("h3",{id:"overview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),i(" Overview")],-1)),n("p",null,[e[1]||(e[1]=i("This document provides instructions on correctly setting up a LinkedIn application so that users can log in/register via LinkedIn on your site. You will need to purchase our ")),n("a",m,[e[0]||(e[0]=i("social login extension")),o(s)]),e[2]||(e[2]=i(" if you want users to log in via LinkedIn."))]),e[5]||(e[5]=r(`<p><strong>Notice:</strong> LinkedIn API is now offering a way for your app to authenticate members using OpenID Connect. The old LinkedIn API for Login has been deprecated. With this update, the feature <strong>&quot;Sign In with LinkedIn using OpenID Connect&quot;</strong> should be enabled in your LinkedIn App settings under the Product tab. To use the old LinkedIn API connection(3-legged OAuth Flow), please use the code snippet below:\`\`\`</p><p>add_filter( &#39;um_social_login_linkedin__config&#39;, &#39;um_social_login_linkedin_backward_compatibility__config&#39; ); function um_social_login_linkedin_backward_compatibility__config( $config ) { $config[&#39;provider&#39;] = &#39;LinkedIn&#39;; $config[&#39;scope&#39;] = array( &#39;r_liteprofile&#39;, &#39;r_emailaddress&#39; ); // Add &#39;w_member_social&#39; in the array if you have the permission to use it. return $config; }</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
### Creating a new app

 You need to create a LinkedIn app to allow users to log in to your site with their LinkedIn accounts. To create a new LinkedIn app, please do the following:

- Go to the LinkedIn developer site:  [https://developer.linkedin.com/](https://developer.linkedin.com/) .
- Click the “Create App” button on the banner.
- To correctly create the application, please fill in the application sections, which are explained below.

### Create an app

- &lt;strong&gt;Application Name –&lt;/strong&gt; Enter a name for your application.
- &lt;strong&gt;Company name –&lt;/strong&gt; Select an existing company or choose a New Company. If you select the new company, you will be asked to enter a company name.
- &lt;strong&gt;Description –&lt;/strong&gt; Enter a name for your application.
- &lt;strong&gt;Business Email –&lt;/strong&gt; Enter your email address.
- &lt;strong&gt;Legal terms&lt;/strong&gt; - Read the terms of service and check the box to confirm that you have read and agree to the terms.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef21bc4578be67333c65dd/file-cs5L0S9IKI.png)

### Products

 Once you have clicked on the &lt;strong&gt;Create app&lt;/strong&gt; button, you&#39;ll be redirected to the Products tab.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef20ebc89aad45b096b5f9/file-P4oe4VdbAO.png)

 Scroll down the product list until you find &lt;strong&gt;Sign In with LinkedIn using OpenID&lt;/strong&gt; &lt;strong&gt;Connect&lt;/strong&gt; and click the &lt;strong&gt;Request Access&lt;/strong&gt; button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef22e54578be67333c65de/file-uj0v4PvVoU.png)

 Read the terms; if you agree with the terms, click on the checkbox and proceed by clicking on the &lt;strong&gt;Request Access&lt;/strong&gt; button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef238c1ffdf4375f16c192/file-Wvai2S0c0f.png)

### &lt;strong&gt;Auth&lt;/strong&gt;



 Go to the Auth tab and add Redirect URLs.   


  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef27e6c89aad45b096b5ff/file-mmUcJurwMm.png)

### OAuth 2.0 settings

 In the redirects URLs, you just need to enter your site&#39;s login, register, and account&#39;s social tab URLs with &lt;strong&gt;/?provider=linkedin&lt;/strong&gt; in the end e.g.:

  [http://www.mydomain.com/login/?provider=linkedin](http://www.mydomain.com/)

  [http://www.mydomain.com/register/?provider=linkedin](http://www.mydomain.com/)

  [http://www.mydomain.com/account/social/?provider=linkedin](http://www.mydomain.com/)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef28d2c89aad45b096b602/file-U8x3ru775m.png)

### &lt;strong&gt;Scopes&lt;/strong&gt;

 The &lt;strong&gt;OAuth 2.0 scopes&lt;/strong&gt; will appear a few seconds after you have added and updated the redirect URLs in OAuth 2.0 Settings.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2963c89aad45b096b604/file-4UO3T9sKY4.png)



### Application details

 If the app is successfully created, you will see the following details. You will need to copy the &lt;strong&gt;API Key&lt;/strong&gt; and &lt;strong&gt;Secret Key&lt;/strong&gt; and add them to the &lt;strong&gt;Ultimate member &amp;gt; Settings &amp;gt; Extensions &amp;gt; Social Login &amp;gt; LinkedIn Social Connect.&lt;/strong&gt;

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2a0ec89aad45b096b606/file-QOl8MsAGcy.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/64ef2b05e82ed15ede51f708/file-f41DKmQCgr.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65031ce34baf3c02bf197e2e/file-kV5Xx0GCg0.png)</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const p=t(c,[["render",u],["__file","142-social-login-linkedin-app-setup.html.vue"]]);export{p as default};
