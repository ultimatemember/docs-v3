import{_ as s,o as a,c as t,a as p}from"./app-1c7faa4a.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="add-or-remove-extra-roles-from-wp-account-upon-subscription-activation-or-cancellation" tabindex="-1"><a class="header-anchor" href="#add-or-remove-extra-roles-from-wp-account-upon-subscription-activation-or-cancellation" aria-hidden="true">#</a> Add or Remove extra roles from wp account upon subscription activation or cancellation</h1><p>This code snippet adds and removes extra role <code>subscriber</code> from wp account upon subscription activation or cancellation</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_status_active&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_03222024_stripe_swap_roles&#39;</span><span class="token punctuation">,</span> <span class="token number">999999</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;umm_stripe_status_canceled&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;um_03222024_stripe_swap_roles&#39;</span><span class="token punctuation">,</span> <span class="token number">999999</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">um_03222024_stripe_swap_roles</span><span class="token punctuation">(</span> <span class="token variable">$um_user_id</span><span class="token punctuation">,</span> <span class="token variable">$role_active</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
 
    <span class="token variable">$stripe</span>        <span class="token operator">=</span> <span class="token function">UM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">Stripe_API</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">stripe_api</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$customer_id</span>   <span class="token operator">=</span> <span class="token function">UM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">Stripe_API</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">request_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">customer_id</span><span class="token punctuation">;</span>
    <span class="token variable">$subscriptions</span> <span class="token operator">=</span> <span class="token variable">$stripe</span><span class="token operator">-&gt;</span><span class="token property">subscriptions</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;limit&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;customer&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$customer_id</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$extra_role</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;subscriber&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// Remove &#39;subscriber&#39; role when active subscriptions is more than 1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">isset</span><span class="token punctuation">(</span> <span class="token variable">$subscriptions</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">count</span><span class="token punctuation">(</span> <span class="token variable">$subscriptions</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">UM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">remove_role</span><span class="token punctuation">(</span> <span class="token variable">$um_user_id</span><span class="token punctuation">,</span> <span class="token function">sanitize_key</span><span class="token punctuation">(</span> <span class="token variable">$extra_role</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Add &#39;subscriber role when active subscriptions is less than or equal to 1</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">isset</span><span class="token punctuation">(</span> <span class="token variable">$subscriptions</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">count</span><span class="token punctuation">(</span> <span class="token variable">$subscriptions</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token function">get_user_by</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;ID&#39;</span><span class="token punctuation">,</span> <span class="token variable">$um_user_id</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">add_role</span><span class="token punctuation">(</span> <span class="token variable">$extra_role</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const l=s(o,[["render",e],["__file","e2c3d12ec774f6a6383ca9abb5f2011e.html.vue"]]);export{l as default};
