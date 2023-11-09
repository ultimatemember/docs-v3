---
---
# User Meta Shortcode
Overview
--------

 This plugin will enable you to add a shortcode functionality to render <strong>User Meta</strong> data in posts or pages. For the installation guide of this plugin, you can read it  [here](/docs-v3/um-extended/article/1889-installation) .

Short Code
----------

 ` [um_user user_id="" meta_key="" ]`

- <strong>meta\_key -</strong> This key is used to store and retrieve the field's value in the WordPress database. It's like a unique identifier for that specific piece of information. You can find it in the field settings in UM form builder in wp-admin&gt;UM&gt;Forms&gt;Edit Form&gt;Edit a field. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654c68cb6e5cdb01c2a32d95/file-6naolUIOhQ.png)
- <strong>user\_id -</strong> This attribute is a user ID.The `user_id` is a reference to the unique identifier assigned to each user in the WordPress database. You can see it in wp-admin&gt;Users&gt;Hover only on user edit&gt; check the browser's status.   
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e17bbb1adf855680c79d35/file-70Rl46PioP.png)


 Sample Usage in a post
-----------------------

 <strong>\[um\_user user\_id="120" meta\_key="first\_name" \]</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e17df41adf855680c79d40/file-tJOwpFrQhW.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/61e17e0279a38f5473fd3f6c/file-derZdfYIty.png)