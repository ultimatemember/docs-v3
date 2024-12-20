import{_ as a,r as o,o as n,c as d,a as t,b as s,d as i,e as l}from"./app-81765434.js";const h={},u={href:"https://github.com/dropbox/zxcvbn",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/dropbox/zxcvbn",target:"_blank",rel:"noopener noreferrer"};function p(c,e){const r=o("ExternalLinkIcon");return n(),d("div",null,[e[5]||(e[5]=t("h1",{id:"password-strength-estimator",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#password-strength-estimator","aria-hidden":"true"},"#"),s(" Password Strength Estimator")],-1)),e[6]||(e[6]=t("h3",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),s(" Overview")],-1)),t("p",null,[e[2]||(e[2]=s('The UM Password Strength Estimator plugin is built upon the foundation of the " ')),t("a",u,[e[0]||(e[0]=s("zxcvbn")),i(r)]),e[3]||(e[3]=s(' " GitHub repository, accessible at ')),t("a",g,[e[1]||(e[1]=s("https://github.com/dropbox/zxcvbn")),i(r)]),e[4]||(e[4]=s(' . Utilizing the capabilities of "zxcvbn," this plugin is designed to accurately assess and visually indicate the strength of user passwords. By integrating this feature into the Ultimate Member framework, the plugin enhances security measures by offering real-time insights into the strength of passwords chosen by users during registration, password changes, and password resets.'))]),e[7]||(e[7]=l('<p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654cd89e6e5cdb01c2a32df2/file-JKnpVZaU10.png" alt=""></p><h3 id="integration-and-activation" tabindex="-1"><a class="header-anchor" href="#integration-and-activation" aria-hidden="true">#</a> Integration and activation</h3><ul><li>Upon installation and activation, the plugin seamlessly integrates into key password fields: <ul><li>Register Form password field.</li><li>New password field in the Account &gt; change password tab.</li><li>Reset Password field.</li></ul></li></ul><h3 id="password-strength-indicators" tabindex="-1"><a class="header-anchor" href="#password-strength-indicators" aria-hidden="true">#</a> Password Strength Indicators</h3><h4 id="three-crucial-indicators-provide-insights-into-password-strength" tabindex="-1"><a class="header-anchor" href="#three-crucial-indicators-provide-insights-into-password-strength" aria-hidden="true">#</a> Three crucial indicators provide insights into password strength:</h4><ol><li><strong>Score:</strong><ul><li>Indicates password strength on a scale from Worst to Strong (Worst, Bad, Weak, Good, and Strong).</li><li>To hide the score, utilize the provided filter: <code>add_filter(&quot;um_pass_strength_show_score&quot;,&quot;__return_false&quot;);</code>.</li></ul></li><li><strong>Warning</strong>: <ul><li>Displays warnings based on the password&#39;s weakness.</li><li>Can be disabled using the filter: <code>add_filter(&quot;um_pass_strength_show_warning&quot;,&quot;__return_false&quot;);</code>.</li></ul></li><li><strong>Suggestions</strong>: <ul><li>Offers suggestions based on password input complexity.</li><li>To disable it, use the filter: <code>add_filter(&quot;um_pass_strength_show_suggestions&quot;,&quot;__return_false&quot;);</code>.</li></ul></li></ol><p><strong>Note</strong>: Suggestions and warnings depend on the complexity and weakness of the user-inputted password.</p><h3 id="visual-representation" tabindex="-1"><a class="header-anchor" href="#visual-representation" aria-hidden="true">#</a> Visual Representation</h3><p><img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654cdbb5687c016dc15b73ec/file-h7rL0P92Aq.png" alt=""></p><p>This plugin enhances password security awareness by providing users with valuable feedback on the strength of their chosen passwords, contributing to a more secure and informed user experience.</p>',10))])}const w=a(h,[["render",p],["__file","1780-password-strength-estimator.html.vue"]]);export{w as default};
