---
---
# Force Capitalization of Display Name
### Overview

 Most of the time, users forget to type the proper format or case of a text or letters. You might encounter names in lower case, upper case, proper case, or mixed case letters. Still, if you want to require the appropriate format or case of letters, this plugin will help to <strong>force</strong> <strong>the Display Name to be capitalized</strong> with special prepositions globally. You can read the installation guide  [here.](/docs-v3/extended/article/1663-download-installation-of-the-basic-extensions)

### Setup

 In the example below, a user registers with mixed case letters of her first name; it will then be displayed in her profile form, account form, and member directory.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6349689c8a552811521e52a9/file-xfxJkk8U61.png)

 \[Profile Form\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634968ec4d805871ceaa356c/file-rXlbOKAVXG.png)

 \[Account Form\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634969808a552811521e52b1/file-Nr750JBvrk.png)

 \[Member Directory\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634969d2de258f5018eb4583/file-7nAfdSOjdr.png)   
 You need to install and activate the plugin; you can read the installation and activation guide  [here](/docs-v3/extended/article/1663-download-installation-of-the-basic-extensions) . Once activated, it will automatically capitalize all display names in the UM Profile Form, Account Form, and Member Directory.

 \[Profile Form\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63497229927a2c1634dfa76e/file-1Y2UOH9NQ7.png)

 \[Account Form\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634972b9927a2c1634dfa776/file-Cr4tDeBKhK.png)

 \[Member Directory\]

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634972db9471985a5ac5250a/file-Rcc4syMFCT.png)

 The plugin supports special prepositions:

- Some use cases:

  Original   ucwords(strtolower($str)   UM Capitalize($str)   jOÃO DA SILVA   João Da Silva   João da Silva   eduardo dall'agnoll   Eduardo Dall'agnoll   Eduardo Dall'Agnoll   Papa joão xxiii   Papa João Xxiii   Papa João XXIII   Google s/a   Google S/a   Google S/A   paul mccartney   Paul Mccartney   Paul McCartney   nome da empresa ltda   Nome Da Empresa Ltda   Nome da Empresa LTDA   nome da empresa me   Nome Da Empresa Me   Nome da Empresa ME   Mr. o'donnel   Mr. O'donnel   Mr. O'Donnel #### Performance

 By default, this plugin capitalizes the UM Display Name on page load. If you are experiencing performance issues, you can disable this with the following code snippet:

 ```
add_filter("um_extended_capitalize_name_forced","__return_false");
	
```



 If the above code is added, this capitalizes the first name, last name, and display name on the profile/account update. It also works when you create or update the account via WP Admin &gt; Users.

#### Display Name Column

 This plugin adds an extra column to the WP Users List as the default Name has no filter hook to force the capitalization. If you want to disable this, use the following code snippets:

 ```
remove_filter( 'manage_users_custom_column', 'um_extended_capitalize_column_content', 10, 3 ); 
remove_filter( 'manage_users_columns', 'um_extended_add_display_name_column', 1 );
	
```



#### Extend

 <strong>Word Splitters</strong>

- Filter Hook: `um_extended_capitlize_name__word_splitter`
- Default values: `' ', '-', "O’", "L’", "D’", 'St.', 'Mc', "Dall'", "l’", "d’", "a’", "o’"`

 <strong>Lowercase Exceptions</strong>

- Filter Hook: `um_extended_capitlize_name__lowercase_exceptions`
- Default values: `'the', 'van', 'den', 'von', 'und', 'der', 'da', 'of', 'and', "d’", 'das', 'do', 'dos', 'e', 'el`

 <strong>Lowercase Exceptions</strong>

- Filter Hook: `um_extended_capitlize_name__uppercase_exceptions`
- Default values: `'III', 'IV', 'VI', 'VII', 'VIII', 'IX', 'ME', 'EIRELI', 'EPP', 'S/A', 'S.A', 'LTDA'`