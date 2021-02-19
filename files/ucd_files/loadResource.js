function logMsg(msg) {
	if ( window.console &&
		   sessionStorage.getItem("debugEnabled") &&
			 (sessionStorage.getItem("debugEnabled").toLowerCase() == "true") ) {
		console.log(msg);
	}
}

var lang = window.navigator.userLanguage || window.navigator.language;

var supportedLanguages = ['en','pt','es','de','da','hi','it','nb','sv','fr'];
var resourcePath;

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (elem, startFrom) {
		var startFrom = startFrom || 0;
		if (startFrom > this.length) return -1;

		for (var i = 0; i < this.length; i++) {
			if (this[i] == elem && startFrom <= i) {
				return i;
			} else if (this[i] == elem && startFrom > i) {
				return -1;
			}
		}
		return -1;
	}
}

if (lang) {
	logMsg('Detected browser culture setting: [' + lang + ']');
	lang = lang.substring(0, 2);
	if (supportedLanguages.indexOf(lang) >= 0) {
		logMsg(lang + ' is a supported laguage.');
		resourcePath = './resources/' + lang + '.js';
	}
	else {
		logMsg(lang + ' is not supported. Defaulting language to English.');
		resourcePath = './resources/en.js';
	}
	document.writeln("<script src='" + resourcePath + "'></script>");
	logMsg(resourcePath + ' resource loaded.');
}
else {
	logMsg('Browser culture setting undetected. Defaulting language to English.');
	resourcePath = './resources/en.js';
	document.writeln("<script src='" + resourcePath + "'></script>");
	logMsg(resourcePath + ' resource loaded.');
}
