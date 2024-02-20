---
---
# How to Create Stripe Pages Manually?
 Upon installing the Stripe extension on your WordPress website, a notification will appear at the top of your wp-admin page, providing information about the necessary pages to be created. To generate these pages, click on the <strong>"Create Pages"</strong> button. After completing this step, the Stripe Pages (Success, Cancel, Already Subscribed, Stripe Checkout URL, and Customer Portal pages) will be automatically added in the wp-admin&gt;Pages. For further explanation about the pages and detailed instructions for setting them up, please refer to this  [article](/docs-v3/um-stripe/article/1609-stripe---setting-up-stripe-success-and-cancel-payment-pages) .

Create Stripe Pages Manually
----------------------------

 If these pages haven't been generated automatically or if you've unintentionally deleted the Stripe pages, you can explore the steps outlined below as an alternative solution:

### Already subscribed page

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Already subscribed'</strong>
3. In the content area, add the default text and shortcode for the customer portal button: ```
    You already have a subscription. You can view/manage your existing subscription via your [ultimatemember_stripe_customer_portal type="link" label="customer portal"].
    	
    ```
4. Click the <strong>'Publish</strong>' button to save the page.

### <strong>Customer Portal page</strong>

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Customer Portal'</strong>
3. Click the <strong>'Publish'</strong> button to save the page.

### <strong>Payment canceled page</strong>

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Payment canceled'</strong>
3. In the content area, add the default text or customize it to your preference: ```
    The transaction has been cancelled. No payment has been taken.
    	
    ```
4. Click the <strong>'Publish'</strong> button to save the page.

### Payment successful page

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Payment successful'</strong>
3. In the content area, add the default content, which is the  [shortcode](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)  to display the user's order details: ```
    [ultimatemember_stripe_checkout_order_details]
    	
    ```
4. Click the <strong>'Publish'</strong> button to save the page.

### Stripe Checkout URL page

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Stripe Checkout URL'</strong>
3. Click the <strong>'Publish'</strong> button to save the page.

### Payment Checkout Page

1. Go to wp-admin&gt;Pages. Click on the <strong>'Add new page'</strong> button.
2. Add the page title <strong>'Payment Checkout'</strong>
3. In the content area, add the default content, which is the shortcode to display the checkout form within your site. This integration empowers users to finalize their purchases seamlessly, directly on your site, without needing to navigate away.:```
    [ultimatemember_stripe_checkout_order_details] 	
    ```
4. Click the <strong>'Publish'</strong> button to save the page.

 After you have manually created all the required Stripe pages, assign the pages in <strong>WP Admin &gt; UM &gt; Settings &gt; General &gt; Pages</strong>

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65b4c51e30c1875e8e067575/file-etUumfKj6X.png)