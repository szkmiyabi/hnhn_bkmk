javascript:(function(){
	var my_rand_free = function(arr){
		var cnt = arr.length;
		var mapx = arr;
		return mapx[Math.floor(Math.random() * cnt)];
	};
	var bmax = 110;
	var bmin = 72;
	var kmax = my_rand_free([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10,12,13,16,17]);
	var kmin = my_rand_free([-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6]);
	document.querySelector("#ketu_max").value = (bmax + kmax);
	document.querySelector("#ketu_min").value = (bmin + kmin);
})();