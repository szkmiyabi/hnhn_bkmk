javascript:(function(){
	var tbl = document.querySelector("#content-main table");
	var trs = tbl.rows;	
	var doc = "";
	var replacer = function(str){
		var nstr = str.trim();
		nstr = nstr.replace(/&nbsp;/mg, "");
		nstr = nstr.replace(/(<span class="kana">)(.+?)(<\/span>)/mg, "");
		nstr = nstr.replace(/(<\/p>)/mg, " ");
		nstr = nstr.replace(/(<)(\/*p|\/*span|\/*a|input)(.*?)(>)/mg, "");
		nstr = nstr.replace(/<br>/mg, " ");
		nstr = nstr.replace(/(\r\n|\n)/mg, "");
		return nstr;
	};
	for(var i=0; i<trs.length; i++){
		var tr = trs[i];
		for(j=0; j<9; j++){
			var td = tr.cells[j];
			doc += replacer(td.innerHTML) + "\t";
		}
		doc += "\r\n";
	}
	var nw = window.open("").document;
	nw.writeln('<html lang="ja"><head><meta charset="utf-8"><title>&gt;&gt;指示別窓</title></head><body>');
	nw.writeln('<button onclick="document.querySelector(\'#ta\').select()">全選択</button>');
	nw.writeln('<textarea id="ta" style="width:100%;height:600px;">');
	nw.writeln(doc);
	nw.writeln('</textarea></body></html>');
})();