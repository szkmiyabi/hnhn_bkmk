javascript:(function(){
	var sf=true,ef=true;
	var tm_eff = function(mmss) {
		var my_rand = function() {
			var map = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
			return map[Math.floor(Math.random() * 10)];
		};
		var tmp = mmss.split(":");
		var mm = Number(tmp[0]);
		var ss = Number(tmp[1]);
		var rd = my_rand();
		if(rd < 0 && (ss <= 0 || (ss + rd) < 0)){
			ss = (60 + rd);
			if(mm == 0) {
				mm = 23;
			}else{
				mm -= 1;
			}
		}else{
			ss += rd;
		}
		var mmStr = ('0' + mm).slice(-2);
		var ssStr = ('0' + ss).slice(-2);
		return mmStr + ":" + ssStr;
	};
	var fromYesterday = function(st_hhmm, en_hhmm) {
		var st_hh = Number(st_hhmm.split(":")[0]);
		var en_hh = Number(en_hhmm.split(":")[0]);
		if(st_hh > en_hh) return true;
		else return false;
	};
	var st_tm = document.querySelector("#yotei_start_e").value;
	var en_tm = document.querySelector("#yotei_end_e").value;
	document.getElementsByName("jisseki_start_syuusei")[0].value = (sf==true) ? tm_eff(st_tm) : st_tm;
	document.getElementsByName("jisseki_end_syuusei")[0].value = (ef==true) ? tm_eff(en_tm) : en_tm;
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
	document.querySelector("#date_start").selectedIndex = 1;
	var st_hhmm = document.getElementsByName("jisseki_start_syuusei")[0].value;
	var en_hhmm = document.getElementsByName("jisseki_end_syuusei")[0].value;
	if(fromYesterday(st_hhmm, en_hhmm)) {
		document.querySelector("#date_start").selectedIndex = 0;
	}

})();