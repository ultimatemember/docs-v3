---
title: Force Capitalization of Display Name 
layout: UMLayout
---
# Force Capitalization of Display Name


### Overview
<p>
	 Most of the time, users forget to type the proper format or case of a text or letters. You might encounter names in lower case, upper case, proper case, or mixed case letters. Still, if you want to require the appropriate format or case of letters, this plugin will help to 
	<strong>force </strong><strong>the Display Name to be capitalized</strong> with special prepositions globally. You can read the installation guide <a href="https://ultimatemember.github.io/Extended/article/1663-download-installation-of-the-basic-extensions">here.</a></p>

### Setup
<p>
	 In the example below, a user registers with mixed case letters of her first name; it will then be displayed in her profile form, account form, and member directory.</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/6349689c8a552811521e52a9/file-xfxJkk8U61.png" style="width: 485px;"></p><p>
	 [Profile Form]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634968ec4d805871ceaa356c/file-rXlbOKAVXG.png" style="width: 488px;"></p><p>
	 [Account Form]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634969808a552811521e52b1/file-Nr750JBvrk.png" style="width: 490px;"></p><p>
	 [Member Directory]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634969d2de258f5018eb4583/file-7nAfdSOjdr.png" style="width: 507px;"><br>
	 You need to install and activate the plugin; you can read the installation and activation guide 
	<a href="https://ultimatemember.github.io/Extended/article/1663-download-installation-of-the-basic-extensions">here</a>. Once activated, it will automatically capitalize all display names in the UM Profile Form, Account Form, and Member Directory.</p><p>
	 [Profile Form]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/63497229927a2c1634dfa76e/file-1Y2UOH9NQ7.png" style="width: 505px;"></p><p>
	 [Account Form]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634972b9927a2c1634dfa776/file-Cr4tDeBKhK.png" style="width: 506px;"></p><p>
	 [Member Directory]</p><p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/561c96629033600a7a36d662/images/634972db9471985a5ac5250a/file-Rcc4syMFCT.png" style="width: 498px;"></p><p>
	 The plugin supports special prepositions:</p><ul>
	
<li>Some use cases:</li></ul>
<table>
<thead>
<tr>
	<th>
		 Original
	</th>
	<th>
		 ucwords(strtolower($str)
	</th>
	<th>
		 UM Capitalize($str)
	</th>
</tr>
</thead>
<tbody>
<tr>
	<td>
		 jOÃO DA SILVA
	</td>
	<td>
		 João Da Silva
	</td>
	<td>
		 João da Silva
	</td>
</tr>
<tr>
	<td>
		 eduardo dall'agnoll
	</td>
	<td>
		 Eduardo Dall'agnoll
	</td>
	<td>
		 Eduardo Dall'Agnoll
	</td>
</tr>
<tr>
	<td>
		 Papa joão xxiii
	</td>
	<td>
		 Papa João Xxiii
	</td>
	<td>
		 Papa João XXIII
	</td>
</tr>
<tr>
	<td>
		 Google s/a
	</td>
	<td>
		 Google S/a
	</td>
	<td>
		 Google S/A
	</td>
</tr>
<tr>
	<td>
		 paul mccartney
	</td>
	<td>
		 Paul Mccartney
	</td>
	<td>
		 Paul McCartney
	</td>
</tr>
<tr>
	<td>
		 nome da empresa ltda
	</td>
	<td>
		 Nome Da Empresa Ltda
	</td>
	<td>
		 Nome da Empresa LTDA
	</td>
</tr>
<tr>
	<td>
		 nome da empresa me
	</td>
	<td>
		 Nome Da Empresa Me
	</td>
	<td>
		 Nome da Empresa ME
	</td>
</tr>
<tr>
	<td>
		 Mr. o'donnel
	</td>
	<td>
		 Mr. O'donnel
	</td>
	<td>
		 Mr. O'Donnel
	</td>
</tr>
</tbody>
</table><h4>Performance</h4><p>
	 By default, this plugin capitalizes the UM Display Name on page load. If you are experiencing performance issues, you can disable this with the following code snippet:</p>
<div>
	<pre>add_filter("um_extended_capitalize_name_forced","__return_false");
	</pre></div><p>
	 If the above code is added, this capitalizes the first name, last name, and display name on the profile/account update. It also works when you create or update the account via WP Admin > Users.</p><h4>Display Name Column</h4><p>
	 This plugin adds an extra column to the WP Users List as the default Name has no filter hook to force the capitalization. If you want to disable this, use the following code snippets:</p>
<div>
	<pre>remove_filter( 'manage_users_custom_column', 'um_extended_capitalize_column_content', 10, 3 ); 
remove_filter( 'manage_users_columns', 'um_extended_add_display_name_column', 1 );
	</pre></div><h4>Extend</h4><p>
	<strong>Word Splitters</strong></p><ul>
	
<li>Filter Hook: <code>um_extended_capitlize_name__word_splitter</code></li>	
<li>Default values: <code>' ', '-', "O’", "L’", "D’", 'St.', 'Mc', "Dall'", "l’", "d’", "a’", "o’"</code></li></ul><p>
	<strong>Lowercase Exceptions</strong></p><ul>
	
<li>Filter Hook: <code>um_extended_capitlize_name__lowercase_exceptions</code></li>	
<li>Default values: <code>'the', 'van', 'den', 'von', 'und', 'der', 'da', 'of', 'and', "d’", 'das', 'do', 'dos', 'e', 'el</code></li></ul><p>
	<strong>Lowercase Exceptions</strong></p><ul>
	
<li>Filter Hook: <code>um_extended_capitlize_name__uppercase_exceptions</code></li>	
<li>Default values: <code>'III', 'IV', 'VI', 'VII', 'VIII', 'IX', 'ME', 'EIRELI', 'EPP', 'S/A', 'S.A', 'LTDA'</code></li></ul>
