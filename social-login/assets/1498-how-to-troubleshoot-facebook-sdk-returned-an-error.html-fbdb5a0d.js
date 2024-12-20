import{_ as r,r as s,o as t,c as l,d as i,a,b as n,e as d}from"./app-f0e55044.js";const c={},u={href:"http://wpengine.zendesk.com/requests",target:"_blank",rel:"noopener noreferrer"};function m(p,e){const o=s("ExternalLinkIcon");return t(),l("div",null,[e[3]||(e[3]=i(`<h1 id="how-to-troubleshoot-facebook-sdk-returned-an-error" tabindex="-1"><a class="header-anchor" href="#how-to-troubleshoot-facebook-sdk-returned-an-error" aria-hidden="true">#</a> How to troubleshoot Facebook: SDK returned an error</h1><p>The &quot;UM Social login - Facebook: SDK returned an error&quot; Facebook login error is usually caused by aggressive server page caching but it can be easily resolved by requesting to set up a special cache exception for Ultimate member pages.</p><p>These pages should be excluded:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/login
/register
/account/social
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wp-engine" tabindex="-1"><a class="header-anchor" href="#wp-engine" aria-hidden="true">#</a> WP-Engine</h4><p>Social login on WP-Engine requires special cache exception for the Ultimate member pages.</p>`,6)),a("p",null,[e[1]||(e[1]=n("To do this, simply submit a support ticket to WP Engine via their ")),a("a",u,[e[0]||(e[0]=n("support portal")),d(o)]),e[2]||(e[2]=n(" and ask them to exclude Ultimate member pages from the cache."))]),e[4]||(e[4]=i(`<p>Feel free to copy and paste this sample ticket:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi,
My site runs Ultimate member plugin and we are having some issues with page caching and
social login. The Ultimate member team has instructed us to ask you to place a cache exception 
on the following pages:

add your site URL /login
add your site URL /register
add your site URL /account/social

Could you please add the following URLs to the exception list?
   	
Thanks!
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const b=r(c,[["render",m],["__file","1498-how-to-troubleshoot-facebook-sdk-returned-an-error.html.vue"]]);export{b as default};
