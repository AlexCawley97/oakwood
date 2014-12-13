$(document).ready(function() {

	$musician = $('.musician-button');
	$fan = $('.fan-button');
	$login = $('.login-button');

	$musician.click(function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				document.getElementById('signup-login-replace').innerHTML = xhr.responseText;
			}
		} // end onreadystatechange
		xhr.open('GET', 'ajax-includes/musician-signup.html');
		xhr.send();
	}); // end click

	$fan.click(function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				document.getElementById('signup-login-replace').innerHTML = xhr.responseText;
			}
		} // end onreadystatechange
		xhr.open('GET', 'ajax-includes/fan-signup.html');
		xhr.send();
	}); // end click

	$login.click(function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				document.getElementById('signup-login-replace').innerHTML = xhr.responseText;
			}
		} // end onreadystatechange
		xhr.open('GET', 'ajax-includes/login.html');
		xhr.send();
	}); // end click

}); // end ready
