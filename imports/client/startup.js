// import('@webcomponents/webcomponentsjs/webcomponents-loader.js').then(() => {
// 	console.log('bla');
// 	import('./views/_app-shell.html');
// });



window.Polymer = {
	// useNativeCSSProperties: true
};


/*
 * Load the webcomponents-lite (shady-dom) polyfill,
 * if browser does not support webcomponents completely.
 */
(function() {
	if ('registerElement' in document
		// browser has web components
		&& 'import' in document.createElement('link')
		&& 'content' in document.createElement('template')) {
	} else {
		// polyfill web components
		require('@polymer/webcomponentsjs/webcomponents-lite.js');
	}
})();

// require('@polymer/web-animations-js/web-animations-next-lite.min.js');
require('./apollo.js');
require('@polymer/polymer/polymer.html');
require('./views/_app-shell.html');


// import './apollo.js';
// import './views/_app-shell.html';
