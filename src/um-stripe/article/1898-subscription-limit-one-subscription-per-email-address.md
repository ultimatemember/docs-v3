---
---
# Subscription Limit: One Subscription Per Email Address
 In the context of typical website usage, if an account or subscription is already associated with an email address, it would not be possible for an individual to register on the site or subscribe to another subscription using the same email address. The UM Stripe Extension limits the subscription to one email per subscription and requires the use of a unique and valid email address for each subscription.

 Limiting one email per subscription on a website can serve several purposes, addressing various concerns related to user management, security, and fair usage. Here are some common reasons why some sites implement a policy of one email per subscription:

1. <strong>User Identity and Accountability</strong><strong>:</strong>
    - By associating each subscription with a unique email address, you can ensure a clear one-to-one correspondence between users and their accounts. This enhances user identity verification and accountability for actions taken on the platform.
2. <strong>Preventing Duplicate Accounts</strong><strong>:</strong>
    - Restricting one email per subscription helps prevent users from creating multiple accounts using the same email address. This measure is often employed to discourage abuse of promotional offers, free trials, or other benefits tied to new account creation.
3. <strong>Security and Authentication:</strong>
    - Single email subscriptions contribute to a more secure authentication process. Users typically need access to their registered email accounts for account recovery, password resets, and other security-related procedures.
4. <strong>Fair Resource Allocation:</strong>
    - You may limit subscriptions to one email to ensure fair resource allocation. This prevents users from monopolizing resources, such as trial periods or other features, at the expense of other users.
5. <strong>Simplified User Support:</strong>
    - Managing user accounts becomes more straightforward when each email address is associated with a single subscription. This simplifies customer support and communication, reducing the likelihood of confusion regarding user accounts.
6. <strong>Enhancing User Experience:</strong>
    - For users, having a one-email-per-subscription policy can enhance their experience by reducing the likelihood of confusion, login issues, or complications related to managing multiple accounts with the same email address.

### <strong>Situations and Resolutions</strong>

 In this section of the article, we delve into various Situations &amp; Resolutions, presenting potential scenarios you might encounter. Here, we offer comprehensive solutions and answers to address the challenges or questions that may arise.

 <strong>Situation 1:</strong> User <strong>"John Doe"</strong> registers to your site with the email address  [ johndoe@um.net ](mailto: johndoe@um.net )  and has successfully subscribed to your <strong>Basic subscription plan</strong>, so now he has an active subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba4121a7493b27a932f7a9/file-tUoFiTdIeM.png)

 While he was logged in, he decided that he wanted to upgrade his subscription. So he went to the subscription page and subscribed to the <strong>Premium Plan</strong> via the Subscribe URL.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba435a8e1d144482a9fc32/file-ZFD1V4KetI.png)

 When he clicked the button with the Premium Plan subscribe URL, he was redirected to the <strong>Already Subscribed Page</strong> because he already had an existing subscription.

  ![](https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/65ba43ffa7493b27a932f7ab/file-K6EMtpGQhy.png)

 <strong>Resolution 1:</strong> If you don't restrict 1 email to 1 subscription, this is how the Stripe extension handles the process and generates a Stripe customer and WP Account:

- When using the Register form with Stripe plans, a user will be created with a Stripe customer account with the email address field in the Email field. If there's no email field in the UM Register form, a generated email address will be supplied to the Stripe checkout. If the dedicated Stripe billing predefined field is added to the Register form, it will be used to create a Stripe customer account - this separates the Billing Email and WP Account email on registration.
- When an existing WP account tries to checkout via the Stripe button, Payment Link, or Direct Checkout URL, a Stripe Customer account will be generated using their primary email address that's registered to their WP account( user\_email from the wp\_users table )
- When a new user is added to the WP Admin &gt; Users, they will be created with a Stripe customer account and link both accounts together.

   
 <strong>Situation 2:</strong> An unregistered user named <strong>Jane Doe</strong> decided to subscribe to a plan via the subscribe URL, on the checkout page, she then used email John Doe'sJohn Doe's, but this email is already registered under user <strong>John Doe's</strong> account.

 <strong>Resolution 2:</strong>

 All existing and logged-in users will not get any new email address, when using the Stripe checkout shortcode for button or direct URL, it will generate a Stripe customer on the Stripe dashboard if there's none, if there's already a Stripe customer account assigned to the WP user account, it will be used for the checkout process 

 Additional info, when you create a user in the WP Admin &gt; Users screen, it will also create a Stripe customer on account creation and the Stripe customer and WP Account will be linked together