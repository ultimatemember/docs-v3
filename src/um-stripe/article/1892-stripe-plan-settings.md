---
---
# UM Stripe Plan Settings
 This article serves as a comprehensive guide for configuring the Ultimate Member Stripe Plan Settings, ensuring seamless and tailored integration with your Stripe.com products or subscriptions.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65831cad15d4597b5fb2052e/file-S7XWS04DQm.png)

 In the <strong>wp-admin&gt;Ultimate Member&gt;Stripe Plans&gt; Add or Edit a plan</strong>, you have the options to set up the following:

- Plan Title - The plan or product title will be in the option in the Stripe Plan field which will be displayed in the form.
- Setup Subscription -This is where you can configure the following options:
   
  
 |  | <strong>Description</strong> |
|---|---|
| <strong>Type</strong> | This option allows you to choose your preferred subscription plan type. If prices are imported from your Stripe account, it only displays the product payment type, and you'll be unable to edit it. If you set up the Stripe Plan in Ultimate Member, you can choose whether your product is recurring or one-time.     <strong>Recurring:</strong> This streamlines subscription-based payments effortlessly with automated scheduling    <strong>One-time</strong>: Securely processes individual transactions, perfect for single purchases, donations, or unique financial interactions. |
| <strong>Subscription price</strong> | This option allows you to select from the Imported Subscription Price from your Stripe Account. If prices are imported from your Stripe account, it only displays the product prices you've created in Stripe, and you'll be unable to select from the prices. If you set up the Stripe Plan in Ultimate Member, you can choose which imported subscription price you prefer. |
| Roles: | Assign a role to each  [Stripe Events](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference) . |
| <strong>Active Role</strong> | This option enables you to choose the role to assign when a subscription is <strong>active</strong> |
| <strong>Unpaid Role</strong> | This option enables you to choose the role to assign when a subscription is <strong>unpaid</strong> |
| <strong>Paused Role</strong> | This option enables you to choose the role to assign when a subscription is <strong>paused</strong> |
| <strong>Past Due Role</strong> | This option enables you to choose the role to assign when a subscription is <strong>past due</strong> |
| <strong>Canceled Role</strong> | This option enables you to choose the role to assign when a subscription is <strong>canceled</strong> |
| <strong>Trialling Role</strong> | This option enables you to choose the role to assign when a subscription is on <strong>trial</strong> |
| <strong>Trial Periods</strong> | This option enables you to specify the trial period duration in days for your subscription plan. It determines the default number of trial days when enrolling a customer, activating the trial functionality of the subscription plan. This setting will always override any trials associated with a subscribed plan. Ensure the trial end value is set to a minimum of 2 days. |
| <strong>Display Promotion Code field on Stripe Checkout form</strong> | When enabled, customers can enter a promotion code on the Stripe Checkout form. However, if the pricing model for your product in Stripe.com is set to 'customer chooses price' with an adjustable amount enabled in the Price settings, this option will be disabled during the checkout process |

 The image below illustrates how the Promotion Code functions in the Stripe Checkout Form:

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65831ae52e3a566b03b69bce/file-mGLK2Dm6ox.png)

- <strong>Create Section</strong> - In this section, you have the option to set the Stripe Plan as a draft, edit, create, update, or delete. 
    - <strong>Status</strong>: You can select and set the status of your plan to publish, pending review, or draft.
    - <strong>Visibility</strong> -You can select and set the visibility of your plan to public, password-protected, or private.
    - <strong>Publish</strong> - You can select to publish the plan immediately or edit the published date and time.
- <strong>Shortcode Section</strong> - The  [shortcode](/docs-v3/um-stripe/article/1616-stripe-shortcodes-reference)  generates a button for customers to check out and subscribe to your Stripe plan.
- <strong>Subscribe URL Section</strong> - The URLs are auto-generated once you import the price from your Stripe account. The URL will redirect users to the Stripe Checkout with your Stripe plan. 
    - <strong>Short</strong> - This subscribe URL includes the stripe plan ID e.g.  [https://ultimate-member-32612-8491614.umsites.net?um\_stripe\_plan\_id=51](https://ultimate-member-32612-8491614.umsites.net/?um_stripe_plan_id=51)
    - <strong>Hashed</strong> - This subscribe URL is a hashed URL to prevent the post\_id from being exposed. The created Stripe Checkout Page, when you activated the UM Stripe plugin, is to hold the generated hashed as a Subscribe URL. e.g. [ https://ultimate-member-32612-8491614.umsites.net/stripe/](https://ultimate-member-32612-8491614.umsites.net/stripe/)  [OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ](https://um.x/checkout/OTg3MmVkOWZjMjJmYzE4MmQzNzFjM2U5ZWQzMTYwOTQ)

---

### Customize the slug of the Subscribe URL

 The default URL slug is yoursitedomain.com/ stripe/--random hash ID--/. To customize the slug of the Subscribe URL, do the following steps:

- Go to <strong>wp-Admin &gt; Pages &gt;Hover to UM Stripe Checkout page&gt; Click on "Quick Edit</strong>" ![]()
- Type your preferred slug in the field.  
      ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db292c00c2b65208e1c82/file-VQ0SaN8bsz.png)
- Click the Update button to save. When you visit the page, you'll notice the modified slug in the Stripe Checkout URL. If there is no URL parameter or if the URL parameter is wrong, the page will be inaccessible and will redirect to the homepage. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/651db77a42d97d1c0459145f/file-yZAx80VqBx.png)