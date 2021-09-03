javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	var wrap = document.querySelector("#jisseki_edit_form");
	var chks = wrap.querySelectorAll("input[type=checkbox]");
	if(pmpt=="") {
		var ret = "";
		var mm_st = document.getElementsByName("jisseki_start_syuusei")[0].value;
		var mm_en = document.getElementsByName("jisseki_end_syuusei")[0].value;
		var trueChecks = new Array();
		for(var i=0; i<chks.length; i++){
			var chk = chks[i];
			var crid = chk.getAttribute("id");
			if(chk.checked==true){
				trueChecks.push(crid);
			}
		}
		ret = mm_st + "<tab>" + mm_en + "<br>";
		for(var i=0; i<trueChecks.length; i++){
			ret += trueChecks[i];
			if(i!=(trueChecks.length -1)) {
				ret += "<tab>";
			}
		}
		prompt("", ret);
	}else{
		var lines = pmpt.split(/<br>/);
		var first = lines[0];
		var second = lines[1];
		document.getElementsByName("jisseki_start_syuusei")[0].value=first.split(/<tab>/)[0];
		document.getElementsByName("jisseki_end_syuusei")[0].value=first.split(/<tab>/)[1];
		var second_arr = second.split(/<tab>/);
		for(var i=0; i<second_arr.length; i++){
			for(var j=0; j<chks.length; j++){
				var chk = chks[j];
				var crid = chk.getAttribute("id");
				if(crid==second_arr[i]){
					chk.checked = true;
				}
			}
		}
	}
})();