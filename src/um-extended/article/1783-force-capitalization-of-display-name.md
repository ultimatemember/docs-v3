---
---
# Force Capitalization of Display Name
### Overview

 This plugin addresses the common issue of inconsistent text or letter formatting in user display names. Users often forget to adhere to proper cases, leading to variations in lowercase, uppercase, proper case, or mixed case letters. To enforce uniformity, this plugin globally mandates the capitalization of display names, even accounting for special prepositions. By doing so, it ensures a standardized and professional appearance across user profiles, enhancing the overall presentation of names on your platform.


### Mixed-Case Display Name Example

 Consider the scenario where a user registers with a first name written in mixed-case letters. The mixed-case representation of the user's first name will be mirrored across various sections, including the profile form, account form, and member directory. This can lead to inconsistencies in the display of user information.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f3ce800e96206bf000ffb/file-JhEvC49vfn.png)

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f3e902d28585006d0177f/file-VEKepLu4mv.png)

### Automated Capitalization

 Upon activation, the Force Capitalize Display Names Plugin seamlessly automates the capitalization process for all display names within the UM Profile Form, Account Form, and Member Directory. This automated functionality ensures a uniform and polished presentation of user names across these key sections of the platform. Users no longer need to manually adjust their display names, as the plugin takes care of capitalization, maintaining consistency and enhancing the overall aesthetic appeal of user information on the website.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/654f4151687c016dc15b761f/file-vqxbW7nYFW.png)

### Supports special prepositions

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