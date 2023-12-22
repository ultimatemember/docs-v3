---
---
# Resend the Account Email Confirmation notification with WP Cronjob
Overview
--------

 This plugin simplifies user account management by enabling the <strong>resending of account email confirmation</strong> <strong>notifications</strong> <strong>using WP Cronjob</strong>, specifically designed to address scenarios where activation links have expired. With this feature, you ensure that users have a reliable way to confirm their accounts even after the initial activation link has timed out, contributing to a smoother and more user-friendly registration process on your WordPress site.

Setup
-----

1. Activate the plugin.
2. Set the <strong>Activation link lifetime</strong>: 
    1. Go to wp-admin &gt; Ultimate Member &gt; Settings &gt; General &gt; Users.
    2. Look for the "Activation link lifetime" field.
    3. Input the desired expiration time in seconds for user activation links. Alternatively, leave the field empty for a non-expiring activation link.
3. Save the changes.

 By completing these steps, you customize the activation link lifetime, tailoring it to your specific preferences and ensuring a secure and user-friendly activation process on your WordPress site.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654cc9b76e5cdb01c2a32dda/file-aNlztFvu3W.png)

Filter Hook
-----------

 When the plugin is activated, it will automatically send an email confirmation and the default time to trigger for resending the email is daily or 24 hours. You can customize or change the WP Cronjob schedule to trigger the resending of email confirmation notifications by using the code below:

- default: `daily`. Enum: `daily`,`hourly`,`twicedaily`,`weekly`

 ```
add_filter("um_cron_resend_activation_link_recurrence","um_cron_resend_activation_link_recurrence"); 
function um_cron_resend_activation_link_recurrence( $recurrence ){      

return "hourly"; 
}
	
```



 <strong>Note: We recommend creating a child theme for customization. You can paste it into y</strong><strong>our child-theme’s functions.php or use the “Code Snippets” plugin.</strong>