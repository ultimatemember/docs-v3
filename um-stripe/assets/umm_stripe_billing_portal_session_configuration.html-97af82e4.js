import{_ as e,r as t,o as i,c as p,b as s,d as o,e as r,a as l}from"./app-1c7faa4a.js";const c={};function u(d,n){const a=t("Badge");return i(),p("div",null,[n[0]||(n[0]=s("h1",{id:"umm-stripe-billing-portal-session-configuration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#umm-stripe-billing-portal-session-configuration","aria-hidden":"true"},"#"),o(" umm_stripe_billing_portal_session_configuration")],-1)),n[1]||(n[1]=s("p",null,"Filter billing portal session configuration before creating the Stripe billing portal.",-1)),r(a,{text:"Since 1.0.8",vertical:"middle"}),n[2]||(n[2]=l(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">apply_filters</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_billing_portal_session_configuration&#39;</span><span class="token punctuation">,</span> <span class="token variable">$args</span> <span class="token punctuation">)</span>
</code></pre></div><div class="hook-sep"></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><div style="padding:10px 0px 10px;"><strong>$args</strong> <span style="color:red;font-size:12px;padding:0px 5px 0px 5px;">array</span><div style="margin-left:10px;padding:10px 5px;">Stripe billing portal session&#39;s configurations.</div></div><div class="hook-sep"></div><h3 id="sample-usage" tabindex="-1"><a class="header-anchor" href="#sample-usage" aria-hidden="true">#</a> Sample Usage</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">add_filter</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_billing_portal_session_configuration&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_12202024_stripe_billing_portal_session_configuration&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">um_12202024_stripe_billing_portal_session_configuration</span><span class="token punctuation">(</span> <span class="token variable">$args</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$args</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hook-sep"></div><h3 id="related-snippets" tabindex="-1"><a class="header-anchor" href="#related-snippets" aria-hidden="true">#</a> Related Snippets</h3><p>Nothing was found</p>`,10))])}const _=e(c,[["render",u],["__file","umm_stripe_billing_portal_session_configuration.html.vue"]]);export{_ as default};