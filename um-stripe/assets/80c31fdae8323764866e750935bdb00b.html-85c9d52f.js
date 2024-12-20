import{_ as n,o as a,c as e,a as t}from"./app-1c7faa4a.js";const i={};function p(c,s){return a(),e("div",null,s[0]||(s[0]=[t(`<h1 id="change-the-already-subscribed-text" tabindex="-1"><a class="header-anchor" href="#change-the-already-subscribed-text" aria-hidden="true">#</a> Change the Already Subscribed Text</h1><p>This text is displayed when a user visits a page where the Stripe shortcode is added and the user is already subscribed to a plan.</p><p>The default text is <code>You&#39;re already subscribed</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">add_filter</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_already_subscribed_text&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_1092023_stripe_already_subscribed_text&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">um_1092023_stripe_already_subscribed_text</span><span class="token punctuation">(</span> <span class="token variable">$subscribed_text</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token variable">$subscribed_text</span> <span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span> <span class="token string double-quoted-string">&quot;Hey, you&#39;ve already subscribed to a plan!&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;your-textdomain&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$subscribed_text</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const u=n(i,[["render",p],["__file","80c31fdae8323764866e750935bdb00b.html.vue"]]);export{u as default};