$(function() {

	// ページ遷移アニメーション
	$(document).ready(function() {
		$(".animsition").animsition({
			inClass: 'zoom-in-sm',
			outClass: 'zoom-out-sm',
			inDuration: 200,
			outDuration: 300,
			linkElement: '.animsition-link',
			loading: true,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [ 'animation-duration', '-webkit-animation-duration'],
			overlay : false,
			overlayClass : 'animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url){ window.location.href = url; }
		});
	});
});
