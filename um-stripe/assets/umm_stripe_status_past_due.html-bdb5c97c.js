import{_ as t,r as p,o as i,c as o,b as a,d as n,e as d,a as u}from"./app-1c7faa4a.js";const r={};function l(c,s){const e=p("Badge");return i(),o("div",null,[s[0]||(s[0]=a("h1",{id:"umm-stripe-status-past-due",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#umm-stripe-status-past-due","aria-hidden":"true"},"#"),n(" umm_stripe_status_past_due")],-1)),s[1]||(s[1]=a("p",null,[n("Triggers when the subscription is "),a("code",null,"pass due")],-1)),d(e,{text:"Since 1.0.0",vertical:"middle"}),s[2]||(s[2]=u(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">do_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_status_past_due&#39;</span><span class="token punctuation">,</span> <span class="token variable">$um_user_id</span><span class="token punctuation">,</span> <span class="token variable">$role_past_due</span> <span class="token punctuation">)</span>
</code></pre></div><div class="hook-sep"></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><div style="padding:10px 0px 10px;"><strong>$um_user_id</strong> <span style="color:red;font-size:12px;padding:0px 5px 0px 5px;">integer</span><div style="margin-left:10px;padding:10px 5px;">the user ID.</div></div><div style="padding:10px 0px 10px;"><strong>$role_past_due</strong> <span style="color:red;font-size:12px;padding:0px 5px 0px 5px;">string</span><div style="margin-left:10px;padding:10px 5px;">the user Role.</div></div><div class="hook-sep"></div><h3 id="sample-usage" tabindex="-1"><a class="header-anchor" href="#sample-usage" aria-hidden="true">#</a> Sample Usage</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_status_past_due&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_12202024_stripe_status_past_due&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">um_12202024_stripe_status_past_due</span><span class="token punctuation">(</span> <span class="token variable">$um_user_id</span><span class="token punctuation">,</span> <span class="token variable">$role_past_due</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hook-sep"></div><h3 id="related-snippets" tabindex="-1"><a class="header-anchor" href="#related-snippets" aria-hidden="true">#</a> Related Snippets</h3><p>Nothing was found</p>`,11))])}const m=t(r,[["render",l],["__file","umm_stripe_status_past_due.html.vue"]]);export{m as default};
