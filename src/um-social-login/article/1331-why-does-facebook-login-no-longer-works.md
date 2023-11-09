---
---
# Why does Facebook login no longer works: Graph returned an error: Can't Load URL
 Starting from March 2018, Facebook API developers turned the "Use Strict Mode for Redirect URIs" option On by default. So to make the UM Social Login extension compatible, put additional URI without the "/?provider=facebook" from the redirect URIs e.g. "https://www.ultimatemember.com/login/" and keep the existing ones.

 This means that you should have these redirect URIs in the "Valid OAuth redirect URIs section"

```
	https://your-site-url/login/
	https://your-site-url/login/?provider=facebook
	https://your-site-url/register/
	https://your-site-url/register/?provider=facebook
	https://your-site-url/account/social/
	https://your-site-url/account/social/?provider=facebook
```