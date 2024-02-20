---
---
# UTM Parameters
 UTM parameters, or Urchin Tracking Module parameters, are a set of five URL parameters used in online marketing to track the effectiveness of campaigns across different traffic sources and publishing platforms. Originally developed by Urchin, a web statistics analysis program acquired by Google in 2005, these parameters are now commonly used with Google Analytics.

 UTM parameters help marketers identify the specific sources and campaigns that drive traffic to their websites. By appending these parameters to URLs, marketers can track user behavior and campaign performance in their analytics tools.

 Marketers use UTM parameters to differentiate between different marketing campaigns and traffic sources. They can create custom URLs with UTM parameters using tools like the Google Analytics Campaign URL Builder. These custom URLs are then used in marketing materials such as emails, social media posts, and ads.

 UTM parameters allow marketers to track various metrics in their analytics tools, such as the number of clicks, conversions, and revenue generated by each campaign. This data helps marketers understand which campaigns are most effective and where they should focus their efforts.

 <strong>UTM Parameters:</strong>

- utm\_source: Identifies the source of the traffic, such as a search engine or website.
- utm\_medium: Identifies the medium of the traffic, such as organic search or paid advertising.
- utm\_campaign: Identifies the specific campaign that the traffic is associated with.
- utm\_content: Identifies the specific content or ad variant that the user clicked on.
- utm\_term: Identifies the keywords associated with paid search campaigns.

 <strong>Example URL with UTM Parameters:</strong>

- <a>https://www.example.com/page?utm\_source=facebook&amp;utm\_medium=cpc&amp;utm\_campaign=spring\_sale&amp;utm\_content=ad\_variant\_A&amp;utm\_term=running\_shoes</a>

 <strong>Explanation:</strong>

- <strong>utm\_source:</strong> Indicates that the traffic source is Facebook.
- <strong>utm\_medium:</strong> Specifies that the medium of the traffic is CPC (Cost Per Click), indicating paid advertising.
- <strong>utm\_campaign:</strong> Identifies the campaign as "spring\_sale," indicating it is related to a spring sale promotion.
- <strong>utm\_content:</strong> Specifies the content or variant of the ad as "ad\_variant\_A."
- <strong>utm\_term:</strong> Indicates the keyword associated with the ad as "running\_shoes."

 <strong>Usage:</strong>

- This URL is used in a Facebook ad campaign promoting a spring sale for running shoes. Marketers can track the performance of this specific ad variant and campaign by analyzing the data collected through these UTM parameters in their analytics tools.

 The code snippet below is used to populate UTM values in the Ultimate Member Register forms, both for manual and social register forms:

 ```
add_action( 'init', 'um_sso_populate_utm_fields_session', 1 ); 
function um_sso_populate_utm_fields_session() {
 	if( isset( $_REQUEST['utm_content'] ) ) {        
	$_SESSION['um_sso_utm_session'][ 'utm_content' ] = esc_attr( $_REQUEST['utm_content'] );
	 }  	

	if( isset( $_REQUEST['utm_source'] ) ) { 		
		$_SESSION['um_sso_utm_session'][ 'utm_source' ] = esc_attr( $_REQUEST['utm_source'] );	 	
	}  	

	if( isset( $_REQUEST['utm_campaign'] ) ) {        
	$_SESSION['um_sso_utm_session'][ 'utm_campaign' ] = esc_attr( $_REQUEST['utm_campaign'] );	 	
	}  	

	if( isset( $_REQUEST['url_parameters'] ) ) { 		
		$_SESSION['um_sso_utm_session'][ 'url_parameters' ] = esc_attr( $_REQUEST['url_parameters'] );	 	 
	}  
}  

add_action( 'um_before_register_fields', 'um_sso_utm_fields_populate' ); 
function um_sso_utm_fields_populate( ) {  	

	$_SESSION['um_social_profile'][ 'utm_content' ] = $_SESSION['um_sso_utm_session'][ 'utm_content' ]; 	
	$_SESSION['um_social_profile'][ 'utm_source' ] = $_SESSION['um_sso_utm_session'][ 'utm_source' ]; 	
	$_SESSION['um_social_profile'][ 'utm_campaign' ] = $_SESSION['um_sso_utm_session'][ 'utm_campaign' ]; 	
	$_SESSION['um_social_profile'][ 'url_parameters' ] = $_SESSION['um_sso_utm_session'][ 'url_parameters' ]; 
}
	
```



 <strong>Functionality:</strong>

 The code snippet uses sessions to store UTM parameters (utm_content, utm_source, utm_campaign, url_parameters) from the request. It populates these UTM parameters into the $_SESSION['um_social_profile'] array, which is used to populate the UTM hidden fields in the register forms.

 This code snippet can be added to the functions.php file of your theme or in the code snippet plugin. It allows Ultimate Member to capture UTM parameters from URLs and populate them in the registration forms, aiding in tracking user traffic sources.