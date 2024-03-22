import{_ as o,r as s,o as t,c as r,a as n,b as e,e as l,d as a}from"./app-7067195d.js";const d={},c=a(`<h1 id="how-to-troubleshoot-facebook-sdk-returned-an-error" tabindex="-1"><a class="header-anchor" href="#how-to-troubleshoot-facebook-sdk-returned-an-error" aria-hidden="true">#</a> How to troubleshoot Facebook: SDK returned an error</h1><p>The &quot;UM Social login - Facebook: SDK returned an error&quot; Facebook login error is usually caused by aggressive server page caching but it can be easily resolved by requesting to set up a special cache exception for Ultimate member pages.</p><p>These pages should be excluded:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/login
/register
/account/social
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wp-engine" tabindex="-1"><a class="header-anchor" href="#wp-engine" aria-hidden="true">#</a> WP-Engine</h4><p>Social login on WP-Engine requires special cache exception for the Ultimate member pages.</p>`,6),u={href:"http://wpengine.zendesk.com/requests",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>Feel free to copy and paste this sample ticket:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi,
My site runs Ultimate member plugin and we are having some issues with page caching and
social login. The Ultimate member team has instructed us to ask you to place a cache exception 
on the following pages:

add your site URL /login
add your site URL /register
add your site URL /account/social

Could you please add the following URLs to the exception list?
   	
Thanks!
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(p,v){const i=s("ExternalLinkIcon");return t(),r("div",null,[c,n("p",null,[e("To do this, simply submit a support ticket to WP Engine via their "),n("a",u,[e("support portal"),l(i)]),e(" and ask them to exclude Ultimate member pages from the cache.")]),h])}const g=o(d,[["render",m],["__file","1498-how-to-troubleshoot-facebook-sdk-returned-an-error.html.vue"]]);export{g as default};
