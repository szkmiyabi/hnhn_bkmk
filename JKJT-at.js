javascript:(function(){
	var st_tm = document.querySelector("#yotei_start_e").value;
	var en_tm = document.querySelector("#yotei_end_e").value;
	document.getElementsByName("jisseki_start_syuusei")[0].value=st_tm;
	document.getElementsByName("jisseki_end_syuusei")[0].value=en_tm;
	var planChecks = document.querySelectorAll("#naiyou input[type=checkbox]");
	var vars = new Array();
	for(var i=0; i<planChecks.length; i++) {
		var ch = planChecks[i];
		var vl = ch.value;
		if(ch.checked==true){
			vars.push(vl);
		}
	}
	for(var i=0; i<vars.length; i++){
		document.querySelector("#naiyou" + vars[i]).checked = true;
	}
})();