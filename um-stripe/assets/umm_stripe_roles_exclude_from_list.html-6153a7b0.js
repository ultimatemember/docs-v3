import{_ as n,r as t,o as p,c as o,b as a,d as l,e as r,a as i}from"./app-1c7faa4a.js";const c={};function d(u,s){const e=t("Badge");return p(),o("div",null,[s[0]||(s[0]=a("h1",{id:"umm-stripe-roles-exclude-from-list",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#umm-stripe-roles-exclude-from-list","aria-hidden":"true"},"#"),l(" umm_stripe_roles_exclude_from_list")],-1)),s[1]||(s[1]=a("p",null,"Exclude protected roles from the List",-1)),r(e,{text:"Since 1.0.0",vertical:"middle"}),s[2]||(s[2]=i(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">apply_filters</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_roles_exclude_from_list&#39;</span><span class="token punctuation">,</span> <span class="token variable">$um_wp_roles</span> <span class="token punctuation">)</span>
</code></pre></div><div class="hook-sep"></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><div style="padding:10px 0px 10px;"><strong>$um_wp_roles</strong> <span style="color:red;font-size:12px;padding:0px 5px 0px 5px;">array</span><div style="margin-left:10px;padding:10px 5px;">WP Roles slugs</div></div><div class="hook-sep"></div><h3 id="sample-usage" tabindex="-1"><a class="header-anchor" href="#sample-usage" aria-hidden="true">#</a> Sample Usage</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">add_filter</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_roles_exclude_from_list&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_12202024_stripe_roles_exclude_from_list&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">um_12202024_stripe_roles_exclude_from_list</span><span class="token punctuation">(</span> <span class="token variable">$um_wp_roles</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$um_wp_roles</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hook-sep"></div><h3 id="related-snippets" tabindex="-1"><a class="header-anchor" href="#related-snippets" aria-hidden="true">#</a> Related Snippets</h3><p>Nothing was found</p>`,10))])}const m=n(c,[["render",d],["__file","umm_stripe_roles_exclude_from_list.html.vue"]]);export{m as default};
