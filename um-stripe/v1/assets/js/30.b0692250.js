(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{309:function(e){e.exports=JSON.parse('{"$schema":"https://raw.githubusercontent.com/wp-hooks/generator/0.9.0/schema.json","hooks":[{"name":"um_stripe_webhook_payload_event_init","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Catch Stripe\'s Webhook Payload Events","long_description":"When Stripe sends a Webhook payload to the site, this hook is fired.","tags":[{"name":"since","content":"1.0.0"},{"name":"param","content":"Payload objects","types":["object"],"variable":"$event"}],"long_description_html":"<p>When Stripe sends a Webhook payload to the site, this hook is fired.</p>"},"args":1},{"name":"umm_stripe_status_active","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscriptions has been active.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_active","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the charge has active","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_active","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the payments have been succesfully made.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_active","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the payments have been succesfully made.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_active","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the charge has active.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_canceled","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscriptions has been cancelled.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_cancelled"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_incomplete","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `incomplete`","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_incomplete"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_incomplete","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the charge has incomplete.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_incomplete"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_incomplete_expired","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the charge has expired","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_expired"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_onetime_refunded","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the charge is refunded.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_active"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_past_due","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `pass due`","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_past_due"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_past_due","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `pass due`","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_past_due"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_pause","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscriptions has been pause","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_pause"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_revoked","file":"includes/common/class-stripe.php","type":"action","doc":{"description":"Fires once a subscription & account status has been revoked from a WP account.","long_description":"","tags":[{"name":"since","content":"1.0.0"},{"name":"param","content":"The WordPress User ID of the previous Stripe Customer account owner","types":["integer"],"variable":"$old_user_id"},{"name":"param","content":"Role slug of the Canceled or Refunded event.","types":["string"],"variable":"$role_inactive"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_trialing","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `trialing`","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_trialing"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_trialing","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscriptions has been trialing","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_trialing"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_trialing","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `trialing`.","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_trialing"}],"long_description_html":""},"args":2},{"name":"umm_stripe_status_unpaid","file":"includes/common/class-request-handler.php","type":"action","doc":{"description":"Triggers when the subscription is `unpaid`","long_description":"","tags":[{"name":"param","content":"the user ID.","types":["integer"],"variable":"$um_user_id"},{"name":"param","content":"the user Role.","types":["string"],"variable":"$role_unpaid"}],"long_description_html":""},"args":2}]}')},319:function(e,t,s){"use strict";s.r(t);var n=s(309),a={data:()=>({items:n.hooks})},r=s(14),i=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",e._l(e.items,(function(s){return t("div",[t("h2",{attrs:{id:s.name}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"+s.name}},[e._v("#")]),e._v(e._s(s.name))]),e._v(" "),t("p",[e._v(e._s(s.doc.description))])])})),0)}),[],!1,null,null,null);t.default=i.exports}}]);