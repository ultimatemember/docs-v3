---
---
# Social Login: VKontakte App Setup
### Overview

 This document provides instructions on how to properly setup a VKontakte application so that users can login/register via VKontakte on your site. You will need to purchase the  [social login extension](https://ultimatemember.com/extensions/social-login/)  [ ](https://ultimatemember.com/extensions/social-login/) if you want users to login via VKontakte.

### Creating a new app

 To allow users to login to your site with their VKontakte account you need to create a vKontakte app. To create a new VK app please do the following:

- Go to the VK developers page:  [http://new.vk.com/dev](http://new.vk.com/dev)
- After logging in, click the “Create an Application” button ![](https://lh4.googleusercontent.com/S_erL9Ksj2ME7QOhsaM88V8GjaUKkN6JQwmqVc1kmbpXTMNv0oQ-uZjrWM_XZyFAB614Xe6D5Ey3rG3TNsvAvWCSwJyK0-JV9iBZL5zhrPTvX3t4f4dj2fw-DdsGUvwB3JJ-HNxI)
- Enter your own Title, and select “Website” for Category. ![](https://lh5.googleusercontent.com/PZV3gM6FOTqusIdOJj8iWzp2Ebe927HHvLEnM1AS07DuyvNCxkvvJ9VU5uqFOF4eD1gGJTrRCL6vPEPddCrDWcmtPMTYCyEwtCLJ2jSqyJH-kCfdoQNMV4xXNCUbrOx6vD1EpIm1)
- Enter and confirm the code via Mobile ![](https://lh5.googleusercontent.com/_ZokHctJLbF5H5gzv1lbeiAJkhMNzI4lS8Q7pfWYki34w8soV7ehyUgRJYM0IcuowiTv0j4QzN2pHnt6O8t7baAVMSG1dEe2bkh3VBW6FOh_tEt-SUTUOeXblEZw8Vq5itSaLhZG)
- After you’ve confirmed the code, go to your app &gt; settings. You will need to add your site domain as Base Domain. You will also need to add those page URLs that have the social login buttons e.g.  [https://www.yoursite.com/login/](https://www.yoursite.com/login/)  or  [https://www.yoursite.com/register/](https://www.yoursite.com/register/)   ![](https://lh5.googleusercontent.com/6zKY3X1iPBPfY5bxiXeeaZXqfZk9N9rQ91n5c2FVZkGzZHnz56CG-i6HQB64mJFKymjKhvNuCezpwYyKA7geUU2jMhRmRVAKdpNBTZF2OQ0qfpTSiQ-dNF2-59fSro_NuZc13Ms6)
- Now, you can add the Application ID and Secure Key in WP Admin &gt; Ultimate Member &gt; Settings &gt; Extensions &gt; Social login. Turn On 'VK Social Connect' and enter the API Key ( Application Id ) and API Secret ( Secure Key). Save the settings and test the Social Login using VK button.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/5b17e6010428632c466a9b35/file-yh20WrrF97.jpg)