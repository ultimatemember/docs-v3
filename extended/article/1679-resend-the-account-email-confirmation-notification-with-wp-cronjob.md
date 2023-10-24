---
title: Resend the Account Email Confirmation notification with WP Cronjob 
layout: UMLayout
---
# Resend the Account Email Confirmation notification with WP Cronjob


## Overview
<p>
	 This plugin allows you to resend the Account Email Confirmation notification with WP Cronjob when the activation link has expired. For the installation of this plugin, you can read this <a href="https://ultimatemember.github.io/Extended/article/1663-download-installation-of-the-basic-extensions">guide</a>.</p>

## Setup
<p>
	 Activate the plugin and set <strong> </strong>the<strong> </strong><strong>Activation link lifetime </strong>in <strong>wp-admin></strong><strong> Ultimate Member > Settings > General> Users.</strong> Activation link lifetime is required, it is the expiration time for user activation links in activation emails. You need to set a time in seconds for how long the link can last or you can leave the field empty to have a non-expiring activation link.</p><p>
	 <img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e6f0ee68cd260cc2d31e0a/file-N1dbBlZMSD.png"></p>

## Filter Hook
<p>When the plugin is activated, it will automatically send an email confirmation and the default time to trigger for resending the email is daily or 24 hours. You can customize or change the WP Cronjob schedule to trigger the resending of email confirmation notifications by using the code below:</p><ul>
	
<li>default: <code>daily</code>. Enum: <code>daily</code>,<code>hourly</code>,<code>twicedaily</code>,<code>weekly</code></li></ul>
<div>
	<pre>add_filter("um_cron_resend_activation_link_recurrence","um_cron_resend_activation_link_recurrence"); 
function um_cron_resend_activation_link_recurrence( $recurrence ){      

return "hourly"; 
}
	</pre></div><p class="callout-blue">
	 <strong>Note: We recommend creating a child theme for customization. You can paste it into y</strong><strong>our child-theme’s functions.php or use the “Code Snippets” plugin.</strong></p><p class="callout-yellow">
	 <strong>Warning: We have created this code example to provide guidance and to make it easier for you to implement this code into your website. However, we are not able to provide any support when it comes to customizing the plugin. If you need help implementing this code, please hire a developer.</strong></p>
