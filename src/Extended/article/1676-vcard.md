---
---
# Vcard
Overview
--------

 This extension allows users to generate VCard when they register or save their profile and download the VCard.vcf file. For the installation guide of this plugin, you can read it  [here](/docs-v3/extended/article/1663-download-installation-of-the-basic-extensions) .

 <strong>Note: The VCard file must be generated by updating the User Profile. Until this update, there is no VCard file available.</strong>

 <strong>Download:</strong> In UM  [Extended 1.0.3](https://github.com/ultimatemember/Extended/releases/tag/1.0.3)  under the Assets, click on the Source code(zip) to download the zip file. 

Setup
-----

 After activating the plugin, you must add the predefined field to the Profile Form. Edit the profile form by going to  <strong>wp-admin&gt;Ultimate Member&gt;Forms&gt;Edit Profile Form</strong>. To add a field, click the plus <strong>"+"</strong> sign button in the form builder

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6513c85de201484b1258ae1f/file-LmHFUveo2P.png)

 Select <strong>VCard</strong> in the predefined fields from the fields manager and click the <strong>Update</strong> button to save changes

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6513cab3556a3e3cf18cbea0/file-2OddUqkOzk.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6513ccbd15e8de2d9d325e92/file-NLSTdSbrrs.png)

 When a user registers or saves their profile, a <strong>VCard.vcf</strong> file is generated, and a VCard icon is shown in their profile allowing users to download the file. The VCard or.vcf file may be imported into the Contacts Application on <strong>Mac OS</strong>, <strong>Google Contacts</strong>, and <strong>Outlook on Windows OS</strong>.  
   
 The VCard field will appear or will be generated on the user's profile <strong>only when the user edits and updates</strong> their profile.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6523ddcc42d97d1c045917dd/file-gAOrX5qqyr.png)

 The sample image below is the downloaded Vcard from the site and imported in Google Contacts

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6523dfc0ed8c6d2f1cffe2c3/file-8lGGe989Yu.png)

### Action hook

 You can use the action hook `um_vcard_before_save` to add extra fields to the VCard. See the example below:

 ```
add_action('um_vcard_before_save','um_vcard_add_nickname', 10, 2 ); 
function um_vcard_add_nickname( $vcard_obj, $user_id ){    
	$vcard_obj->add( new Nickname( um_user('nickname' ) ) ); 
}
	
```