// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var message = debounce(function(text) {

	var timer;

	return (function() {
		var div = document.getElementById('message');

		div.style.display = 'block';
		clearTimeout(timer);

		div.textContent = text;

		timer = setTimeout( (function() {
			this.style.display = 'none';
		}).bind(div) , 3000);
	})();

}, 100, true);