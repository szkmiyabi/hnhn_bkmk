javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	var wrap = document.querySelector("#form_table");
	var chks = wrap.querySelectorAll("input[type=radio]");
	if(pmpt=="") {
		var ret = "";
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
		var tmp = pmpt.split(/<tab>/);
		for(var i=0; i<tmp.length; i++){
			for(var j=0; j<chks.length; j++){
				var chk = chks[j];
				var crid = chk.getAttribute("id");
				if(crid==tmp[i]) chk.checked = true;
			}
		}
	}
})();