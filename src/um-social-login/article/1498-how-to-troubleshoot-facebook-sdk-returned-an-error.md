---
---
# How to troubleshoot Facebook: SDK returned an error
 The "UM Social login - Facebook: SDK returned an error" Facebook login error is usually caused by aggressive server page caching but it can be easily resolved by requesting to set up a special cache exception for Ultimate member pages.

 These pages should be excluded:

```
/login
/register
/account/social
```

#### WP-Engine 

 Social login on WP-Engine requires special cache exception for the Ultimate member pages. 

 To do this, simply submit a support ticket to WP Engine via their  [support portal](http://wpengine.zendesk.com/requests)  and ask them to exclude Ultimate member pages from the cache. 

 Feel free to copy and paste this sample ticket:

 ```
Hi,
My site runs Ultimate member plugin and we are having some issues with page caching and
social login. The Ultimate member team has instructed us to ask you to place a cache exception 
on the following pages:

add your site URL /login
add your site URL /register
add your site URL /account/social

Could you please add the following URLs to the exception list?
		
Thanks!
	
```