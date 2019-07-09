$(function() {

	pinchLock();

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


    $("#send").on("click", function() {
		var token = $("#token").val();
		var rid	= $("#roomId").val();
		var mid = $("#message").val();
		console.log(token);
		console.log(rid);
		console.log(mid);
		$.ajax({
			url: "https://api.chatwork.com/v2/rooms/" + rid + "/messages/" + mid,
			headers: {
				'X-ChatWorkToken': token
			},
            xhrFields: { withCredentials: true },
			type: 'GET',
			dataType: 'jsonp',
			jsonp: 'callback'
		}).done(function (data, status, xhr) {
			if (xhr.status === 200) {
				// 正常処理
			} else {
				// 例外処理
			}
			return true;
		}).fail(function (data, status, xhr) {
			// エラー時の処理
			return false;
		}).always(function () {
			return true;
		});
	});

	//
	//ピンチイン・アウトを抑制
	//
	function pinchLock() {
		/* "passive" が使えるかどうかを検出 */
		var passiveSupported = false;
		try {
			document.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function() {
				passiveSupported = true;
			}
			}));
		} catch(err) {}

		/* リスナーを登録 */
		document.addEventListener('touchstart', function listener(e) {
			e.preventDefault();
		}, passiveSupported ? { passive: false } : false);

		document.addEventListener('touchmove', function listener(e) {
			e.preventDefault();
		}, passiveSupported ? { passive: false } : false);
	}
});
