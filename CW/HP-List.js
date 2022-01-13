javascript:(function(){
	var tbl = document.querySelector(".kaigosya.f.td_pad025");
	var trs = tbl.rows;	
	var doc = "";

	var eraseReturn = function(str){
		var nstr = str.trim();
		nstr = nstr.replace(/(\r\n|\n)/mg, "");
		return nstr;
	};

	var eraseOptionText = function(elm) {
		var getOptionTextList = function(_elm){
			var arr = new Array();
			var objs = _elm.getElementsByTagName("span");
			for(var i=0; i<objs.length; i++){
				var rw = objs[i].textContent.trim();
				arr.push(rw);
				console.log(rw);
			}
			return arr;
		};
		var str = eraseReturn(elm.textContent.trim());
		var keys = getOptionTextList(elm);
		for(var ii=0; ii<keys.length; ii++){
			str = str.replace(keys[ii], "");
		}
		str = str.replace("・）", "");
		return str;
	};

	for(var i=0; i<trs.length; i++){
		var tr = trs[i];
		for(j=0; j<tr.cells.length; j++){
			var td = tr.cells[j];
			if(j==1) {
				doc += eraseOptionText(td) + "\t";

			} else {
				doc += td.textContent + "\t"; 
			}
		}
		doc += "\r\n";
	}
	var nw = window.open("").document;
	nw.writeln('<html lang="ja"><head><meta charset="utf-8"><title>&gt;&gt;担当者書出</title></head><body>');
	nw.writeln('<button onclick="document.querySelector(\'#ta\').select()">全選択</button>');
	nw.writeln('<textarea id="ta" style="width:100%;height:600px;">');
	nw.writeln(doc);
	nw.writeln('</textarea></body></html>');
})();