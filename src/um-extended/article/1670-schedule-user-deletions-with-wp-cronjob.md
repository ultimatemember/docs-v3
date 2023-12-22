---
---
# Schedule User Deletions with WP Cronjob
Overview
--------

 Empower your WordPress site management with the Ultimate Member plugin:

- Scheduled User Deletions: Automate user deletions using WP Cronjob.
- Flexible Scheduling: Set your own schedule for user deletions.
- Filter Hooks: Manage user statuses with customizable filter hooks.

 With this plugin, you gain the ability to schedule user deletions using WP Cronjob. Once activated, you have the flexibility to set the schedule for when user deletions will take place. Additionally, the plugin provides filter hooks to manage the status of users, offering a customizable and efficient solution for user management on your WordPress site.

Available filter hooks:
-----------------------

- `um_cron_delete_users_after` - default: `5 days ago midnight`. See  [WP\_User\_Query](https://developer.wordpress.org/reference/classes/wp_user_query/#date-parameters)  [](https://developer.wordpress.org/reference/classes/wp_query/#date-parameters)
- `um_cron_delete_users_status` - default: `awaiting_email_confirmation`. Enum: `approved`, `awaiting_admin_review`, `awaiting_email_confirmation`, `inactive`, `rejected`.
- `um_cron_delete_users_recurrence` - default: `daily`. Enum: `daily`,`hourly`,`twicedaily`,`weekly`