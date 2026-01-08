// 最初に見つかった空の<input>要素に値を入れる関数
// 戻り値は更新したDOM要素
// 空のフィールドがなければnullを返す

// 悪い例
var setFirstEmptyInput = function (new_value) {
	var found = false;
	var i = 1;

	var elem = document.getElementById("input" + i);
	while (elem != null) {
		if (elem.value === "") {
			found = true;
			break;
		}
		i++;
		elem = document.getElementById("input" + i);
	}
	if (found) elem.value = new_value;
	return elem;
};

// 考える
// elemをミニグローバルスコープ的に使ってるの気持ち悪い
// iもwhileの中で回せる
// → forにまとめちゃって完成

// varって再代入出来るんじゃなかったっけ？
// → なるべくconst使いたいが、この時代const生まれてたかな??

// 変数がないって(スコープ気にしなくていいって)、こんなに心理的負担減るんだな
var setFirstEmptyInput = function (new_value) {
	for (var i = 1; true; i++) {
		elem = document.getElementById("input" + i);
		if (elem === null) return null;
		if (elem.value === "") {
			elem.value = new_value;
			return elem;
		}
	}
};
