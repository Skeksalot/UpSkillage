var links = document.getElementsByTagName('link');
for( var i = 0; i < links.length; i++ ) {
	if( links[i].rel === 'shortcut icon' ) {
		links[i].href = 'https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/favicon.ico';
	}
}

/* TESTING METHODOLOGIES FOR FOOTER
var footer = document.getElementById('page-footer');
var page = document.getElementById('page');

var shell = document.createElement('div');
shell.classList = 'span9 footer-shell';

var div = document.createElement('div');
div.classList = 'span3 footer-ups-logo';
var a = document.createElement('a');
a.href = 'https://upskilled-sandbox.mrooms.net';
var img = document.createElement('img');
img.src = 'https://upskilled-sandbox.mrooms.net/pluginfile.php/1/tool_themeassets/assets/0/upskilled-logo-footer.png';
img.alt = 'Upskilled Logo';
a.appendChild(img);
div.appendChild(a);
shell.appendChild(div);

div = document.createElement('div');
div.classList = 'span3 social-networks-outer';
var ul = document.createElement('ul');
ul.classList = 'social-networks';
var li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.facebook.com/Upskilled';
a.target = '_blank';
a.classList = 'fa fa-facebook social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://twitter.com/#!/upskilled';
a.target = '_blank';
a.classList = 'fa fa-twitter social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.linkedin.com/company/upskilled';
a.target = '_blank';
a.classList = 'fa fa-linkedin social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'https://www.instagram.com/upskilled/';
a.target = '_blank';
a.classList = 'fa fa-instagram social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'https://www.pinterest.com/upskilled/';
a.target = '_blank';
a.classList = 'fa fa-pinterest social-ico';
li.appendChild(a);
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'social-ico';
a = document.createElement('a');
a.href = 'http://www.youtube.com/user/UpSkilledTV';
a.target = '_blank';
a.classList = 'fa fa-youtube social-ico';
li.appendChild(a);
ul.appendChild(li);
div.appendChild(ul);
shell.appendChild(div);


div = document.createElement('div');
div.classList = 'span3 footer-copyright';
var div2 = document.createElement('div');
div2.appendChild( document.createTextNode( '© Upskilled Pty Ltd 2018. All rights reserved.' ) );
div.appendChild(div2);
div2 = document.createElement('div');
a = document.createElement('a');
a.href = 'https://upskilled-kentico-prod.azurewebsites.net/terms-and-conditions';
a.classList = 'footer-copyright-link';
a.appendChild( document.createTextNode( 'Terms &amp; Conditions' ) );
div2.appendChild(a);
var span = document.createElement('span');
span.appendChild( document.createElement( ' | ' ) );
div2.appendChild(span);
a = document.createElement('a');
a.href = 'https://upskilled-kentico-prod.azurewebsites.net/upskilled-policies';
a.classList = 'footer-copyright-link';
a.appendChild( document.createTextNode( 'Upskilled Policies' ) );
div2.appendChild(a);
span = document.createElement('span');
span.appendChild( document.createElement( ' | RTO No 40374 | ABN: 14 125 906 676' ) );
div2.appendChild(span);
div.appendChild(div2);
shell.appendChild(div);

footer.appendChild( shell );

body.appendChild( document.createTextNode( 'THIS IS TEST TEXT' ) );
*/