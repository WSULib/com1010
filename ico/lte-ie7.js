/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'comm\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-level-up' : '&#x6c;&#x65;&#x76;&#x65;&#x6c;&#x75;&#x70;',
			'icon-chevron-right' : '&#x72;&#x69;&#x67;&#x68;&#x74;',
			'icon-chevron-left' : '&#x6c;&#x65;&#x66;&#x74;',
			'icon-trophy' : '&#x74;&#x72;&#x6f;&#x70;&#x68;&#x79;',
			'icon-frown' : '&#x73;&#x61;&#x64;&#x66;&#x61;&#x63;&#x65;',
			'icon-print' : '&#x70;&#x72;&#x69;&#x6e;&#x74;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};