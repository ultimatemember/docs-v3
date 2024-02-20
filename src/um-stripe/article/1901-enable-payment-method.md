---
---
# Enable Payment Method
 Providing a payment method is crucial for ensuring a seamless and convenient purchasing experience for customers, expanding market reach, minimizing risks, and staying competitive in the ever-evolving business landscape.

 To enable the payment method in your UM Stripe checkout do the following step below:

1. Go to Stripe <strong>Settings&gt; Payment Methods.</strong> Click the '<strong>Turn on'</strong> button to enable your prefered payment methods. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c537bdddc6d10d8ab293a1/file-vTNGhnXAoX.png)
2. To test, go to wp-admin&gt;Ultimate Member&gt; Stripe Plans&gt; Edit a plan&gt; <strong>Copy the Subscribe URL.</strong>
  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c5391e6573000859631369/file-OHkmQ8oT33.png) 4. <strong>Paste the subscribe URL</strong> in another browser, it'll redirect you to the checkout page, you'll see here the payment method you have enabled.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c53a73ddc6d10d8ab293a3/file-eV9nfmmOjs.png)

 By default, payment methods enabled through the Stripe Payment Methods settings on your Stripe account at stripe.com will be displayed on all UM Stripe checkouts. If you need to modify this at the extension/plugin level, you can utilize this filter hook:  [https://ultimatemember.github.io/docs-v3/um-stripe/developer/hooks/snippets/feae4326c6fb8f2616ba43a79c0fb84e.html](https://ultimatemember.github.io/docs-v3/um-stripe/developer/hooks/snippets/feae4326c6fb8f2616ba43a79c0fb84e.html)