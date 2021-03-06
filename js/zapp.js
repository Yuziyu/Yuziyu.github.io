$(function() {

	// ピンチイン・アウトを抑制
	pinchLock();

	// ページ遷移アニメーション
	pageAnim();

	// 写真交換
    $("#changePicture").on("click", function() {
		var target = $("#changePicture img");
		target.css("opacity",0);
		setTimeout(function(){
			target.attr("src", "./images/picture/pic_"+ Math.floor(Math.random() * Math.floor(6)) +".jpg");
			setTimeout(function(){
				target.css("opacity",1);
			},300);
		},300);
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
	// ページ遷移アニメーション
	//
	function pageAnim() {
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
	}

	//
	// ピンチイン・アウトを抑制
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

		/* ピッチインピッチアウトによる拡大縮小を禁止 */
		document.documentElement.addEventListener('touchstart', function (e) {
			if (e.touches.length >= 2) {e.preventDefault();}
		}, {passive: false});

		/* ダブルタップによる拡大を禁止 */
		var t = 0;
		document.documentElement.addEventListener('touchend', function (e) {
			var now = new Date().getTime();
			if ((now - t) < 350){
				e.preventDefault();
			}
			t = now;
		}, false);
	}
});
