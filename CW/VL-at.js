javascript:(function(){
	var my_rand = function() {
		var map = [3,4,5,6,7];
		return map[Math.floor(Math.random() * 5)];
	};
	var idx = my_rand();
	document.getElementsByName("taion_l")[0].selectedIndex = 4;
	var shos = document.getElementsByName("taion_r")[0].getElementsByTagName("option");
	for(var i=0; i<shos.length; i++){
		var op = shos[i];
		if(op.value == idx){
			document.getElementsByName("taion_r")[0].selectedIndex = i;
		}
	}
	document.querySelector("#yousu0_1").checked = true;
	document.querySelector("#yousu1_2").checked = true;
	document.querySelector("#yousu3_1").checked = true;
	document.querySelector("#yousu4_1").checked = true;
	document.querySelector("#yousu5_1").checked = true;
	document.querySelector("#yousu6_10").checked = true;
	document.querySelector("#yousu7_1").checked = true;
	document.querySelector("#yousu9_3").checked = true;
	document.querySelector("#yousu10_3").checked = true;
	document.querySelector("#yousu11_2").checked = true;
})();