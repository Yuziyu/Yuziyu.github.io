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


    $("#send").on("click", function() {
		var token = "b98fe3fa8747957f4266d2490d1114f7";
		var rid	= 155304761;
		var mid = "ぴ";
		$.ajax({
			url: "https://api.chatwork.com/v2/rooms/" + rid + "/messages/" + mid,
			headers: {
				'X-ChatWorkToken': token
			},
            xhrFields: { withCredentials: true },
			type: 'GET',
			json: true
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
});
