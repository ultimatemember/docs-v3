---
---
# Social Login - List of Sync Field Options in Form Builder
 <strong>Basic Profile Info</strong>

 On User Authentication, when a user has successfully authenticated via a social network, the plugin pulls the user data from the social network to the site and sync with register form fields.

 <strong>Data Members:</strong>

 | Field Name | Type | Short description |
|---|---|---|
| identifier | String | The Unique user’s ID on the connected provider. Can be an integer for some providers, Email, URL, etc. |
| profileURL | String | URL link to a profile page on the IDp website |
| webSiteURL | String | User website, blog, web page, |
| photoURL | String | URL link to user photo or avatar |
| displayName | String | User dispalyName provided by the IDp or a concatenation of first and last name. |
| description | String | A short about\_me |
| firstName | String | User’s first name |
| lastName | String | User’s last name |
| gender | String | User’s gender. Values are ‘female’, ‘male’ or NULL |
| language | String | User’s language |
| age | Integer | User’s age, note that we don’t calculate it. We return it as it is. |
| birthDay | Integer | The day in the month in which the person was born. |
| birthMonth | Integer | The month in which the person was born. |
| birthYear | Integer | The year in which the person was born. |
| email | String | User email. Not all of IDp grant access to the user email |
| emailVerified | String | Verified user email. Note: not all of IDp grant access to verified user email. |
| phone | String | User’s phone number |
| address | String | User’s address |
| country | String | User’s country |
| region | String | User’s state or region |
| city | String | User’s city |
| zip | Integer | Postal code or zip code. |
| extend | Array | An extra data is related to the user (e.g followers). |