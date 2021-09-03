javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	var wrap = document.querySelector("#form_table");
	var chks = wrap.querySelectorAll("input[type=radio]");
	if(pmpt=="") {
		var ret = "";
		var t1 = document.getElementsByName("taion_l")[0].selectedIndex;
		var t2 = document.getElementsByName("taion_r")[0].selectedIndex;
		ret = t1 + "<tab>" + t2 + "<br>";
		var trueChecks = new Array();
		for(var i=0; i<chks.length; i++){
			var chk = chks[i];
			var crid = chk.getAttribute("id");
			if(chk.checked==true) trueChecks.push(crid);
		}
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
		document.getElementsByName("taion_l")[0].selectedIndex=first.split(/<tab>/)[0];
		document.getElementsByName("taion_r")[0].selectedIndex=first.split(/<tab>/)[1];
		var second_arr = second.split(/<tab>/);
		for(var i=0; i<second_arr.length; i++){
			for(var j=0; j<chks.length; j++){
				var chk = chks[j];
				var crid = chk.getAttribute("id");
				if(crid==second_arr[i]) chk.checked = true;
			}
		}
	}
})();