javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	var wrap = document.querySelector("#jisseki_edit_form");
	var chks = wrap.querySelectorAll("input[type=checkbox]");
	if(pmpt=="") {
		var ret = "<code:kkcp>";
		var trueChecks = new Array();
		for(var i=0; i<chks.length; i++){
			var chk = chks[i];
			var crid = chk.getAttribute("id");
			if(chk.checked==true){
				trueChecks.push(crid);
			}
		}
		for(var i=0; i<trueChecks.length; i++){
			ret += trueChecks[i];
			if(i!=(trueChecks.length -1)) {
				ret += "<tab>";
			}
		}
		prompt("", ret);
	}else{
		if(pmpt.indexOf("<code:kkcp>") < 0){
			alert("貼り付けるコードが間違っています。正しくは、先頭が<code:kkcp>で始まる分です。");
			return;
		}
		pmpt = pmpt.replace("<code:kkcp>","");
		for(var i=0; i<chks.length; i++){
			var chk = chks[i];
			chk.checked = false;
		}
		var second_arr = pmpt.split(/<tab>/);
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