---
layout: UMLayout
---
# Stripe’s Plans Customization in Register Forms
<p>
	Customize the Stripe Plans displayed in Registration Forms by using the CSS selectors provided below. Add the code to the current theme's styles.css file or use Customize Settings if the theme supports it. We recommend that you use the UM theme for the best results.</p><h3>
<strong>For Multiple plans:</strong></h3>
<pre>/** Plan Item */
.um .um-stripe-field-multiple_visible .um-stripe-plan-item { 
border-radius: 10px;
border: 1px solid #D0D5DD;
padding: 10px;
color: #475476;
margin-bottom: 15px;
}

/** separator of checkbox and text */
.um .um-stripe-field-multiple_visible .um-stripe-plan-item
.um-stripe-col {
display: inline-block;
vertical-align: top;
}

/** product name **/
.um .um-stripe-field-multiple_visible .um-stripe-plan-item
.um-stripe-product-name { }

/** product price **/
.um .um-stripe-field-multiple_visible .um-stripe-plan-item
.um-stripe-price-title { 
margin-left: 5px
}

/** product description **/
.um .um-stripe-field-multiple_visible .um-stripe-plan-item
.um-stripe-product-desc{
font-size: 12px;
} 

/** active/selected item **/
.um .um-stripe-field-multiple_visible .um-stripe-plan-item.selected { 
background: #f9fafb;
border: 1px solid #475476;
}
</pre><p>
	<img class="callout-blue" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/648818eb7f8c2575e3544c74/file-wFAxDgxJhY.png" alt=""></p><h3>
<strong>For Single Plan:</strong>
</h3>
<div>
	<pre>/** Plan Item */
.um .um-stripe-field-single_visible .um-stripe-plan-item {
color: #475476;
}

/** separator of checkbox and text */
.um .um-stripe-field-single_visible .um-stripe-plan-item
.um-stripe-col { }

/** product name **/
.um .um-stripe-field-single_visible .um-stripe-plan-item
.um-stripe-product-name { }

/** product price **/
.um .um-stripe-field-single_visible .um-stripe-plan-item
.um-stripe-price-title {
font-weight: bold;
margin-top: 10px;
display: block;
 }

/** product description **/
.um .um-stripe-field-single_visible .um-stripe-plan-item
.um-stripe-product-desc{
font-size: 14px;
 }
	</pre></div>
<div>
	<h3>Additional CSS selectors for the price/amount format:</h3>
</div><div>
	<pre>/** Currency **/
.um-stripe-plan-item  .um-stripe-price-title .um-stripe-price-currency{
   color: red;
}
/** Amount **/
.um-stripe-plan-item  .um-stripe-price-title .um-stripe-price-amount{
    color:  blue;
}
/** Every**/
.um-stripe-plan-item  .um-stripe-price-title .um-stripe-price-every{
    color:  green;
}
/** Duration**/
.um-stripe-plan-item  .um-stripe-price-title .um-stripe-price-duration{
    color:  indigo;
}
/** Slash Symbol**/
.um-stripe-plan-item .um-stripe-price-title .um-stripe-price-sep{  }
	</pre></div><p>
	<strong>Note: The CSS selector for the word "every" will not appear on the other plans</strong></p><p>
	<img class="callout-blue" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6491d4a8e9352a3c57926b17/file-NI5qt1TftB.png" alt=""></p>
