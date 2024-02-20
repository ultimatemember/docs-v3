---
---
# Subscription Limit: One Subscription Per Email Address
 In the context of typical website usage, if an account or subscription is already associated with an email address, it would not be possible for an individual to register on the site or subscribe to another subscription using the same email address. The UM Stripe Extension limits the subscription to one email per subscription and requires the use of a unique and valid email address for each subscription.

 Limiting subscriptions to one email per user offers multiple advantages. It enhances user identity verification and accountability by tying each subscription to a unique email address. This measure also prevents abuse of promotional offers and free trials by discouraging the creation of duplicate accounts. Additionally, it contributes to a more secure authentication process, as users typically need access to their registered email accounts for security-related procedures. Furthermore, this policy ensures fair resource allocation and simplifies user account management and support. Ultimately, it improves the user experience by reducing confusion and login issues associated with managing multiple accounts under the same email address.

### Limit Customers to 1 Subscription

 To limit customers to 1 subscription per email address, do the following steps below:

1. Go to Stripe Dashboard&gt;Settings&gt;Payments&gt; [Checkout and Payment links](https://dashboard.stripe.com/settings/checkout)
2. In the Subscription section,enable the  <strong>'Limit customers to 1 subscription'.</strong> For test mode, choose the <strong>'Test mode'</strong> option. For the live site, select <strong>'Your website'</strong> and input your site's login URL into the designated field. ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c528d918ce7f6806c75531/file-QSOQrSDWAf.png)
3. <strong>Save</strong> your settings.

 <strong>Situations and Resolutions</strong>

 In this section of the article, we delve into various Situations &amp; Resolutions, presenting potential scenarios you might encounter. Here, we offer comprehensive solutions and answers to address the challenges or questions that may arise.

 <strong>Situation 1:</strong> User <strong>"John Doe"</strong> registers to your site with the email address  [ johndoe@um.net ](mailto: johndoe@um.net )  and has successfully subscribed to your <strong>Basic subscription plan</strong>, so now he has an active subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba4121a7493b27a932f7a9/file-tUoFiTdIeM.png)

 While he was logged in, he decided that he wanted to upgrade his subscription. So he went to the subscription page and subscribed to the <strong>Premium Plan</strong> via the Subscribe URL.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba435a8e1d144482a9fc32/file-ZFD1V4KetI.png)

 When he clicked the button with the Premium Plan subscribe URL, he was redirected to the  <strong>Already Subscribed Page</strong> because he already had an existing subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba43ffa7493b27a932f7ab/file-K6EMtpGQhy.png)

 <strong>Resolution 1:</strong> If you don't restrict 1 email to 1 subscription, this is how the Stripe extension handles the process and generates a Stripe customer and WP Account:

- When using the Register form with Stripe plans, a user will be created with a Stripe customer account with the email address field in the Email field. If there's no email field in the UM Register form, a generated email address will be supplied to the Stripe checkout. If the dedicated Stripe billing predefined field is added to the Register form, it will be used to create a Stripe customer account - this separates the Billing Email and WP Account email on registration.
- When an existing WP account tries to checkout via the Stripe button, Payment Link, or Direct Checkout URL, a Stripe Customer account will be generated using their primary email address that's registered to their WP account( user\_email from the wp\_users table )
- When a new user is added to the WP Admin &gt; Users, they will be created with a Stripe customer account and link both accounts together.

   
 <strong>Situation 2:</strong> An unregistered user named "<strong>Jane Doe"</strong> attempted to subscribe to a plan via the subscription URL. However, upon reaching the checkout page, she entered the email address '<a>johndoe@um.net</a>', which is already registered under the account of user John Doe. Consequently, Jane will be unable to complete the registration or subscription process using this email address, as it is already associated with an existing subscription. Instead, she will receive an error message indicating that the email address already has an active subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65c52b1518ce7f6806c75539/file-mnBj1d7gOT.png)

 <strong>Resolution 2:</strong>

- All existing and logged-in users will not get any new email address, when using the Stripe checkout shortcode for button or direct URL, it will generate a Stripe customer and different email on the Stripe dashboard if there's none, if there's already a Stripe customer account assigned to the WP user account, it will be used for the checkout process
- Additional info, when you create a user in the WP Admin &gt; Users screen, it will also create a Stripe customer on account creation and the Stripe customer and WP Account will be linked together