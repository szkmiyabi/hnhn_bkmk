javascript:(function(){
	var pmpt = prompt("データをコピーするには空でOKを。反映するにはコード貼付してOKを押してください。");
	var wrap = document.querySelector(".service_check_koumoku").querySelector("table");
	var chks = wrap.querySelectorAll("input[type=checkbox]");
	var id_encode = function(arr) {
		var data = new Array();
		for(var i=0; i<arr.length; i++){
			var r = arr[i];
			r = r.replace("naiyou", "chkid_");
			data.push(r);
		}
		return data;
	};
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
		second_arr = id_encode(second_arr);
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