javascript:(function(){
	var tbl = document.querySelector("#jisshi-kiroku-table");
	var trs = tbl.rows;	
	var doc = "";
	var replacer = function(str){
		var nstr = str.trim();
		nstr = nstr.replace(/(\r\n|\n)/mg, "｜");
		return nstr;
	};
	var childCellsEncode = function(ttd, op){
		var cdoc = "";
		var itbl = ttd.getElementsByTagName("table")[0];
		var itrs = itbl.rows;
		for(var ii=0; ii<itrs.length; ii++){
			var itr = itrs[ii];
			for(ij=0; ij<itr.cells.length; ij++){
				var itd = itr.cells[ij];
				if(op=="pipe"){
					cdoc += itd.textContent.trim();
					cdoc += "｜";
				}else if(op=="tokki"){
					var ctxt = itd.textContent.trim();
					ctxt = ctxt.replace(/(\r\n|\n|事業者|ご家族|その他)/mg, "");
					cdoc += ctxt;
				}
			}
		}
		return cdoc;
	};
	for(var i=0; i<trs.length; i++){
		var tr = trs[i];
		for(j=0; j<=11; j++){
			var td = tr.cells[j];
			if(j==10 && i>0) {
				doc += childCellsEncode(td, "pipe") + "\t";
			}else if(j==11 && i>0){
				doc += childCellsEncode(td, "tokki") + "\t";
			}else{
				doc += replacer(td.textContent) + "\t";
			}
		}
		doc += "\r\n";
	}
	var nw = window.open("").document;
	nw.writeln('<html lang="ja"><head><meta charset="utf-8"><title>&gt;&gt;別窓書出</title></head><body>');
	nw.writeln('<button onclick="document.querySelector(\'#ta\').select()">全選択</button>');
	nw.writeln('<textarea id="ta" style="width:100%;height:600px;">');
	nw.writeln(doc);
	nw.writeln('</textarea></body></html>');
})();