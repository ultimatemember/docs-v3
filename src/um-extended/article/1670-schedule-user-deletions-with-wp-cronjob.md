---
---
# Schedule User Deletions with WP Cronjob
Overview
--------

 This plugin allows you to schedule user deletions with  [WP Cronjob](https://developer.wordpress.org/plugins/cron/) , when activated, you can set the schedule of when the users will be deleted and the status of the users with the filter hooks below.

 To install Schedule User Deletions with the WP Cronjob plugin, you can read the guide  [here](/docs-v3/um-extended/article/1663-download-installation-of-the-basic-extensions) .

Available filter hooks:
-----------------------

- `um_cron_delete_users_after` - default: `5 days ago midnight`. See  [WP\_User\_Query](https://developer.wordpress.org/reference/classes/wp_user_query/#date-parameters)  [](https://developer.wordpress.org/reference/classes/wp_query/#date-parameters)
- `um_cron_delete_users_status` - default: `awaiting_email_confirmation`. Enum: `approved`, `awaiting_admin_review`, `awaiting_email_confirmation`, `inactive`, `rejected`.
- `um_cron_delete_users_recurrence` - default: `daily`. Enum: `daily`,`hourly`,`twicedaily`,`weekly`