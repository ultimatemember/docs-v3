# Create Subscription Prices
<h4>
<strong>Overview</strong></h4><p>
		 Stripe allows you to create subscription prices for your subscription shortcode. This way, you can create multiple subscribe buttons with different prices or Stripe Plan&nbsp;options in the Register form.</p><p>
	If you have existing subscription prices, you can simply 
	<a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1846-import-existing-subscription-prices-from-your-stripe-account" target="_blank">import them from the&nbsp;stripe settings</a> but if you have not created any prices yet, do the following steps below:</p><p>
	 1. To create a new subscription/product price, go to 
	<a href="https://dashboard.stripe.com/">https://dashboard.stripe.com/</a> and click "<strong>Products</strong>" from the menu tabs.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f622a1188a9d242a7d5be0/file-GGEqHQjhzS.png"></p><p>
	 2. Click the " +
	<strong>Add product</strong>" button to display the form.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62388188a9d242a7d5be2/file-1U2CzmwMRx.png"></p><p>
	 3. Add the 
	<strong>"Name</strong>", "<strong>Description(optional)</strong>" and "<strong>Image(optional)."</strong></p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f624c5188a9d242a7d5be5/file-GKKvbGkpLj.png"></p><p>
	 4. In the Price Information, UM Stripe module supports 
	<strong>Recurring Prices </strong>and&nbsp;<strong>One-time</strong>&nbsp;<strong>Prices&nbsp;</strong>as the Pricing Models.</p><p>
	<img class="noBdr" src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63f62882c490cd5d5b96a1bf/file-Z7je1dsxgQ.png"></p><p>
	Suppose you have selected Recurring as your pricing model. In that case, you can choose the following
	<strong>&nbsp;Billing Period&nbsp;</strong>from the drop-down menu:&nbsp;<strong>Daily,&nbsp;Weekly,&nbsp;Monthly, Every 3 months,&nbsp;</strong><strong style="background-color: initial;">Every 6 months,&nbsp;</strong><strong style="background-color: initial;">Yearly,&nbsp;</strong>&amp;<strong style="background-color: initial;">&nbsp;</strong><strong style="background-color: initial;">Custom.</strong></p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984c0e92cb8c175b469163/file-mMF221HUQF.png" style="width: 282px; float: left; margin: 0px 10px 10px 0px;" alt=""></p><p>
	Create multiple pricing per product by clicking the 
	<b style="background-color: initial;">"+Add another price" </b>button.&nbsp;</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/629848cc5732000792520c02/file-cSlCGFPq85.png">&nbsp;This way, you can create an option for your user if they want recurring or one-time payments.</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/62984bb95732000792520c0e/file-Det8o1q8E1.png" style="width: 476px;"></p><p>
	<br>
	5. Once the product is saved, your created Prices will be displayed in the Stripe Plans form in
	<strong> WP-</strong><strong>Admin &gt; Ultimate</strong><strong>&nbsp;Member</strong><strong style="background-color: initial;">&nbsp;&gt; Stripe Plans. </strong>Click on the "<strong style="background-color: initial;">Add New"</strong> button.</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6470d26667106052aab4cb04/file-IzKdmD9Zyq.png"></p><p>
	Simply pick the mode you wish to display. In this example, we picked 
	<strong>Recurring</strong>, and you will see the product price you created with Stripe under the Subscription Price.</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6470d3e001fe745c0ae98261/file-aP8jvVeyuE.png"></p><figure><figcaption>
<br>
</figcaption></figure><p>
	If you have selected 
	<strong>One-time </strong>from type, the one-time price you have created in Stripe will be displayed in Subscription Price.</p><h3></h3><h3>T: <a href="https://ultimatemember.github.io/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference">SHORTCODE REFERENCE</a></h3>
