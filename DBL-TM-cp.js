javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	if(pmpt=="") {
		var ret = "";
		var wp = document.querySelector("#div_dialog_riyousya_plan");
		var tbl = wp.querySelector("table");
		var trs = tbl.rows;
		var str = trs[1].cells[0].innerText;
		var se_slice = str.split("実績時間：")[1].split("日 ")[1].split(" 〜 ");
		var mm_st = se_slice[0];
		var mm_en = se_slice[1];
		ret = mm_st + "<tab>" + mm_en;
		prompt("", ret);
	}else{
		var first = pmpt;
		document.getElementsByName("jisseki_start_syuusei")[0].value=first.split(/<tab>/)[0];
		document.getElementsByName("jisseki_end_syuusei")[0].value=first.split(/<tab>/)[1];
	}
})();
