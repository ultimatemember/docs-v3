---
---
# Enable Payment Method
Enabling Payment Methods allows your customers to use popular payment gateways to make payments and subscribe to your site. This document provides instructions on how to enable these popular payment methods, enhancing the flexibility and convenience of your online transactions.

 To enable the payment method in your UM Stripe checkout do the following step below:

1. Go to Stripe <strong>Settings&gt; Payment Methods.</strong> Click the '<strong>Turn on'</strong> button to enable your preferred payment methods. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c537bdddc6d10d8ab293a1/file-vTNGhnXAoX.png)
2. To test, go to wp-admin&gt;Ultimate Member&gt; Stripe Plans&gt; Edit a plan&gt; <strong>Copy the Subscribe URL. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/660e55a879bc5063a245a83e/file-Rq1Apd2eB0.png)</strong>
3. <strong>Paste the subscribe URL</strong> in another browser, it'll redirect you to the checkout page, you'll see here the payment method you have enabled.   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c53a73ddc6d10d8ab293a3/file-eV9nfmmOjs.png)

 By default, payment methods enabled through the Stripe Payment Methods settings on your Stripe account at stripe.com will be displayed on all UM Stripe checkouts. If you need to modify this at the extension/plugin level, you can utilize this filter hook:  [https://ultimatemember.github.io/docs-v3/um-stripe/developer/hooks/snippets/feae4326c6fb8f2616ba43a79c0fb84e.html](https://ultimatemember.github.io/docs-v3/um-stripe/developer/hooks/snippets/feae4326c6fb8f2616ba43a79c0fb84e.html)