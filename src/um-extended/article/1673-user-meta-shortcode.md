---
---
# User Meta Shortcode
Overview
--------

 This plugin lets you easily display user meta data in your posts or pages using shortcodes. Say goodbye to complex coding – now you can effortlessly showcase personalized information, creating a more engaging user experience on your site.

Short Code
----------

 ` [um_user user_id="" meta_key="" ]`

- <strong>meta\_key -</strong> This key is used to store and retrieve the field's value in the WordPress database. It's like a unique identifier for that specific piece of information. You can find it in the field settings in UM form builder in wp-admin&gt;UM&gt;Forms&gt;Edit Form&gt;Edit a field.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654c68cb6e5cdb01c2a32d95/file-6naolUIOhQ.png)
- <strong>user\_id -</strong> This attribute is a user ID. The `user_id` is a reference to the unique identifier assigned to each user in the WordPress database. You can see it in wp-admin&gt;Users&gt;Hover only on user edit&gt; check the browser's status.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654c8ab86e5cdb01c2a32d9f/file-2iQ0eLr2VR.png)


####  Sample usage in a page

 `[um_user user_id="4" meta_key="first_name" ]`

 Check out the image below to see how the shortcode seamlessly integrates into the WP pages block editor. This visual guide makes it clear and simple to incorporate shortcodes, allowing you to effortlessly enhance your page with the desired user meta data.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654c99302d28585006d014e3/file-XlKCMdcjTc.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654c994e687c016dc15b73a8/file-6NUL4trXpV.png)