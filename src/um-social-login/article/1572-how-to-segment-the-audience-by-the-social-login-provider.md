---
---
# How to segment the audience by the social login provider
This article explains how to configure fields and connections to add social login provider information into the MailChimp audience contact.

Read the article " [MailChimp Setup](/docs-v3/um-social-login/article/82-mailchimp-setup) " to get know basic information about extension " [Ultimate Member - MailChimp](https://ultimatemember.com/extensions/mailchimp/) ". Read the article " [Social Login 2.3 Setup](/docs-v3/um-social-login/article/1531-social-login-2-3-setup) " to get know basic information about extension " [Ultimate Member - Social Login](https://ultimatemember.com/extensions/social-login/) ".

The extension "Ultimate Member - Social Login" saves social provider information in the usermeta with the meta key like "\_uid\_{provider}". You may use these usermeta to get data for the MailChimp audience.

1\) Create text fields in the form builder with proper meta keys. Example:

- \_uid\_facebook
- \_uid\_google
- \_uid\_linkedin

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec79204286306f8076cb3/file-PDQM9Xo03t.png)

<strong>Note:</strong> You may remove these fields from the form if you don't need them there, but don't delete them from the "Fields Manager".

2\) Create the same fields in the MailChimp audience.

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec79e04286306f8076cb4/file-HS2CHbeTXO.png)

3\) Configure fields relationship in the MailChimp connection on the page \[wp-admin &gt; Ultimate Member &gt; MailChimp &gt; Edit\].

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec7a92c7d3a10cbab56eb/file-S1U3Wve4mi.png)

4\) Run the tool "Sync Profiles" on the page \[wp-admin &gt; Ultimate Member &gt; Dashboard\]. You may use slow version to see details.

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec7b304286306f8076cb6/file-bf9Jeyzsht.png)

5\) Look at the MailChimp audience members. You should see social UID in the fields.

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec7e52c7d3a10cbab56f0/file-j3dt4rbgh5.png)

6\) You can use these fields to segment the audience by the social provider.

 ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5f1ec7ef2c7d3a10cbab56f1/file-BdYln2WV3a.png)