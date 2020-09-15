let audioElem;
const BGM	= "./mp3/titleCall/bgm.mp3";
const SE	= "./mp3/titleCall/se.mp3";

// パラメータからの呼び出し
var params = (new URL(document.location)).searchParams;
var pStr = params.get('str');

// 200ミリ秒待つ
const sleep = (spd) => {
    return new Promise((resolve) => setTimeout(resolve, spd));
}

// 音声再生
const playSound = (filename) => { 
    audioElem = new Audio();
    audioElem.src = filename;
    audioElem.play();
}

// 描画
const showString = async () => {

	$(".input_area").toggle("hide");

    const elm = document.getElementById("show");
	const iStr = document.getElementById("strValue").value;
	const str = iStr != "" ? iStr: pStr;

	const iSpd = document.getElementById("speed").value;
	const spd = iSpd != "" ? iSpd : 200;

	console.log(str);

    elm.style.textAlign = "center";
    elm.style.fontSize = "400px";

    // 音とともに一文字ずつ表示
	if(str) {
		for(let i = 0; i < str.length; i++){
			elm.innerHTML = "";
			elm.innerHTML = str[i];
			playSound(SE);
			
			// 200ミリ秒待つ
			await sleep(spd);
		}

		// 全文表示
		elm.innerHTML = str;
		elm.style.textAlign = "left";
		elm.style.fontSize = "50px";
		playSound(BGM)
	}

	$(".input_area").toggle("show");
	$(".add_input_area").show();
}
