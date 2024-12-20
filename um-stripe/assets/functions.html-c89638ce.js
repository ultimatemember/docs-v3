import{_ as t,o as n,c as a,a as s}from"./app-1c7faa4a.js";const i={};function d(o,e){return n(),a("div",null,e[0]||(e[0]=[s(`<h1 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h1><h2 id="um-stripe-activation-hook" tabindex="-1"><a class="header-anchor" href="#um-stripe-activation-hook" aria-hidden="true">#</a> <code>um_stripe_activation_hook()</code></h2><p>Activation hook</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_activation_hook</span><span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre></div><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h3><p>Handles the processes on plugin activation.</p><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0.0</code><br></td></tr></tbody></table><h2 id="um-stripe-check-dependencies" tabindex="-1"><a class="header-anchor" href="#um-stripe-check-dependencies" aria-hidden="true">#</a> <code>um_stripe_check_dependencies()</code></h2><p>Check Core dependencies</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_check_dependencies</span><span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre></div><h3 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1" aria-hidden="true">#</a> Description</h3><p>This handles the Ultimate Member core dependencies and validation of plugin requirements.</p><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0.0</code><br></td></tr></tbody></table><h2 id="um-stripe-dependencies" tabindex="-1"><a class="header-anchor" href="#um-stripe-dependencies" aria-hidden="true">#</a> <code>um_stripe_dependencies()</code></h2><p>Show error notice for older PHP versions</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_dependencies</span><span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre></div><h3 id="description-2" tabindex="-1"><a class="header-anchor" href="#description-2" aria-hidden="true">#</a> Description</h3><p>Displays the required PHP version in the admin screen.</p><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0.0</code><br></td></tr></tbody></table><h2 id="um-stripe-extend-license-settings" tabindex="-1"><a class="header-anchor" href="#um-stripe-extend-license-settings" aria-hidden="true">#</a> <code>um_stripe_extend_license_settings()</code></h2><p>Extend license settings</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_extend_license_settings</span><span class="token punctuation">(</span> <span class="token keyword type-hint">array</span> <span class="token variable">$settings</span> <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre></div><table><thead><tr><th>Parameter</th><th>Type(s)</th><th>Description</th></tr></thead><tbody><tr><td><code>$settings</code></td><td><strong><code>array</code></strong></td><td>core and extension settings.</td></tr></tbody></table><h3 id="description-3" tabindex="-1"><a class="header-anchor" href="#description-3" aria-hidden="true">#</a> Description</h3><blockquote><p>No description.</p></blockquote><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0.0</code><br></td></tr></tbody></table><h2 id="um-stripe-init" tabindex="-1"><a class="header-anchor" href="#um-stripe-init" aria-hidden="true">#</a> <code>um_stripe_init()</code></h2><p>Create class variable</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_init</span><span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre></div><h3 id="description-4" tabindex="-1"><a class="header-anchor" href="#description-4" aria-hidden="true">#</a> Description</h3><p>Initialize the Stripe API class.</p><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0</code><br></td></tr></tbody></table><h2 id="um-stripe-plugins-loaded" tabindex="-1"><a class="header-anchor" href="#um-stripe-plugins-loaded" aria-hidden="true">#</a> <code>um_stripe_plugins_loaded()</code></h2><p>Load plugin languages.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">um_stripe_plugins_loaded</span><span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre></div><h3 id="description-5" tabindex="-1"><a class="header-anchor" href="#description-5" aria-hidden="true">#</a> Description</h3><p>Loads the language files.</p><table><thead><tr><th style="text-align:center;"></th><th></th></tr></thead><tbody><tr><td style="text-align:center;"><em><strong>Since</strong></em></td><td><code>v1.0.0</code><br></td></tr></tbody></table><hr><div class="page-edit"><div class="last-updated"><span class="prefix">Auto-generated at: </span><span class="time">2024-12-20, 1:00 PM</span></div></div>`,40)]))}const c=t(i,[["render",d],["__file","functions.html.vue"]]);export{c as default};
