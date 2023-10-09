---
layout: UMLayout
title: Modify Checkout Sessions configuration
---
# Modify Checkout Sessions configuration

This filter hook allows you to modify the Stripe Checkout Session's Configuration before it redirects the user to the Stripe Checkout page.

``` php
add_filter( 'um_stripe_checkout_sessions_create_args', 'um_1092023_stripe_checkout_sessions_create_args ', 10, 6 )
function um_1092023_stripe_checkout_sessions_create_args( $args, $mode, $umm_subscription_id, $umm_price_id, $user_id, $customer_id ){

  // Modify the payment method for checkout.
  $args['payment_method_types'] = array( 'grabpay' , 'link' );

  // Change Cancel URL
  $args['cancel_url' ] = "http://yourdomain.com/my-cancel-page/";
  return $args;
}
```