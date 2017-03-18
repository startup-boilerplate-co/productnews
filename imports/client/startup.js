import('@webcomponents/webcomponentsjs/webcomponents-loader.js').then(() => {
	import('./views/_app-shell.html');
});
//
// /*
//  * Load the webcomponents-lite (shady-dom) polyfill,
//  * if browser does not support webcomponents completely.
//  */
// (function() {
// 	if ('registerElement' in document
// 		// browser has web components
// 		&& 'import' in document.createElement('link')
// 		&& 'content' in document.createElement('template')) {
// 	} else {
// 		// polyfill web components
// 		require('@polymer/webcomponentsjs/webcomponents-lite.js');
// 	}
// })();
//
// import './apollo.js';
// import '@polymer/polymer/polymer.html';
// import './views/_app-shell.html';
