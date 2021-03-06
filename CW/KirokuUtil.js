javascript:(function(){
	class KirokuUtil {
		constructor(){
			this.kaigoKM = {
				"トイレ介助":"naiyou3",
				"Pトイレ介助":"naiyou4",
				"尿器介助":"naiyou5",
				"オムツ交換":"naiyou6",
				"パッド交換":"naiyou7",
				"食事介助（全）":"naiyou8",
				"食事介助（一部）":"naiyou9",
				"水分補給":"naiyou10",
				"服薬介助・確認":"naiyou11",
				"全身清拭":"naiyou12",
				"部分清拭":"naiyou13",
				"洗髪":"naiyou14",
				"洗面":"naiyou15",
				"整容":"naiyou16",
				"部分浴（手）":"naiyou17",
				"部分浴（足）":"naiyou18",
				"陰部・臀部洗浄":"naiyou19",
				"入浴介助":"naiyou20",
				"シャワー浴":"naiyou21",
				"口腔ケア":"naiyou22",
				"更衣介助":"naiyou23",
				"体位変換":"naiyou24",
				"移動・移乗介助":"naiyou25",
				"通院・外出介助":"naiyou26",
				"起床介助":"naiyou27",
				"就寝介助":"naiyou28",
				"自立支援（見守り的援助）":"naiyou29",
				"専門的配慮をもって行う調理":"naiyou30",
				"清掃（寝室）":"naiyou31",
				"清掃（居間）":"naiyou32",
				"清掃（トイレ）":"naiyou33",
				"清掃（台所）":"naiyou34",
				"清掃（風呂）":"naiyou35",
				"清掃（ゴミ出し）":"naiyou36",
				"調理":"naiyou37",
				"配下膳":"naiyou38",
				"後片付け":"naiyou39",
				"洗濯":"naiyou40",
				"ベッドメーキング":"naiyou41",
				"衣類整理":"naiyou42",
				"買物":"naiyou43",
				"薬の受取":"naiyou44",
				"点眼":"naiyou45",
				"湿布":"naiyou46",
				"naiyou48":"軟膏塗布",
				"naiyou47":"座薬",
				"naiyou49":"喀痰吸引",
				"褥瘡予防、処置":"naiyou50",
				"創傷処置":"naiyou51",
				"消毒":"naiyou52",
				"膀胱洗浄":"naiyou53",
				"浣腸":"naiyou54",
				"摘便":"naiyou55",
				"人工肛門（膀胱）処置":"naiyou56",
				"膀胱留置カテーテル管理":"naiyou57",
				"導尿":"naiyou58",
				"健康チェック":"naiyou70",
				"環境整備":"naiyou71",
				"相談援助":"naiyou72",
				"情報収集・提供":"naiyou73",
				"記録":"naiyou74",
				"安否確認":"naiyou75",
				"外出準備介助":"naiyou77",
				"帰宅受入介助":"naiyou76",
				"移動・買い物介助":"naiyou78",
				"通院準備介助":"naiyou79",
				"一緒に行う調理(家事)":"naiyou80",
			};

			this.vitalKM = {
				"血圧": "ketu_max:ketu_minmyaku",
				"体温": "taion_l:taion_r",
				"脈拍": "myaku",
				"体重": "taijyu",
				"SpO2": "spo2",
				"呼吸": "kokyu",
				"血糖値": "kettouti",
				"顔色": "未選択:yousu0<tab>よし:yousu0_1<tab>不良:yousu0_2",
				"発汗": "未選択:yousu1<tab>あり:yousu1_1<tab>なし:yousu1_2",
				"脈拍": "未選択:yousu2<tab>整:yousu2_1<tab>不整:yousu2_2",
				"皮膚": "未選択:yousu3<tab>正常:yousu3_1<tab>異常:yousu3_2",
				"食欲": "未選択:yousu4<tab>あり:yousu4_1<tab>なし:yousu4_2",
				"食事量": "未選択:yousu5<tab>完食:yousu5_1<tab>3/4:yousu5_2<tab>1/2:yousu5_3<tab>1/4:yousu5_4<tab>その他:yousu5_5",
				"水分補給": "未選択:yousu6<tab>10cc:yousu6_1<tab>20cc:yousu6_2<tab>30cc:yousu6_3<tab>40cc:yousu6_4<tab>50cc:yousu6_5<tab>60cc:yousu6_6<tab>70cc:yousu6_7<tab>80cc:yousu6_8<tab>90cc:yousu6_9<tab>100cc:yousu6_10<tab>110cc:yousu6_11<tab>120cc:yousu6_12<tab>130cc:yousu6_13<tab>140cc:yousu6_14<tab>150cc:yousu6_15<tab>160cc:yousu6_16",
				"睡眠": "未選択:yousu7<tab>普通:yousu7_1<tab>浅い:yousu7_2<tab>不眠:yousu7_3",
				"下着交換": "未選択:yousu8<tab>なし:yousu8_1<tab>パッド:yousu8_2<tab>リハビリパンツ:yousu8_3",
				"尿量": "未選択:yousu9<tab>なし:yousu9_1<tab>少量:yousu9_2<tab>中量:yousu9_3<tab>多量:yousu9_4",
				"便量": "未選択:yousu10<tab>なし:yousu10_1<tab>少量:yousu10_2<tab>中量:yousu10_3<tab>多量:yousu10_4",
				"便質": "未選択:yousu11<tab>軟便:yousu11_1<tab>普通便:yousu11_2<tab>硬便:yousu11_3<tab>不消化便:yousu11_4",
			};
		}
        getServiceContentDialogData(){
			var kirokuData = {};
			var parseDate = function(str){
				var pt = new RegExp(/([0-9]+月[0-9]+日)( )([0-9]+:[0-9]+)( 〜 )([0-9]+:[0-9]+)/);
			    if(pt.test(str)){
			        return str.match(pt)[1];
			    }
			    return "";
			};
			var parseJK = function(str){
			    var pt = new RegExp(/([0-9]+月[0-9]+日)( )([0-9]+:[0-9]+)( 〜 )([0-9]+:[0-9]+)/);
			    if(pt.test(str)){
			        return str.match(pt)[3] + "<tab>" + str.match(pt)[5];
			    }
			    return "";
			};
			var yoteiDate = parseDate(document.querySelectorAll(
			    "#div_dialog_riyousya_plan > table > tbody tr")[0]
			    .querySelectorAll("td")[0].textContent.replace(/[\n\t]/mg,"")
			);
			kirokuData["予定日付"] = yoteiDate;

			var yoteiJK = parseJK(document.querySelectorAll(
			    "#div_dialog_riyousya_plan > table > tbody tr")[0]
			    .querySelectorAll("td")[0].textContent.replace(/[\n\t]/mg,"")
			);
			kirokuData["予定時間"] = yoteiJK;

			var tagDate = parseDate(document.querySelectorAll(
			    "#div_dialog_riyousya_plan > table > tbody tr")[1]
			    .querySelectorAll("td")[0].textContent.replace(/[\n\t]/mg,"")
			);
			kirokuData["実績日付"] = tagDate;
			var tagJK = parseJK(document.querySelectorAll(
			    "#div_dialog_riyousya_plan > table > tbody tr")[1]
			    .querySelectorAll("td")[0].textContent.replace(/[\n\t]/mg,"")
			);
			kirokuData["実績時間"] = tagJK;

			var srvNM = document.querySelector(
			    "#div_dialog_riyousya_plan > table > tbody > tr:nth-child(3) > td"
			).innerHTML.replace(/<span.+?>.+<\/span>/,"").replace(/[\n\t]/mg,"");
			kirokuData["サービス内容"] = srvNM;

			var helperNM = document.querySelector(
			    "#div_dialog_riyousya_plan > table > tbody > tr:nth-child(4) > td:nth-child(1)"
			).innerHTML.replace(/<span.+?>.+<\/span>/,"").replace(/[\n\t]/mg,"");
			kirokuData["担当者"] = helperNM;

			var riyoshaNM = "";
			try{
				riyoshaNM = document.querySelector(
				    "#div_dialog_riyousya_plan > table > tbody > tr:nth-child(4) > td:nth-child(2)"
				).innerHTML.replace(/<span.+?>.+<\/span>/,"").replace(/[\n\t]/mg,"");
			}catch(e){
				console.log(e);
			}
			kirokuData["利用者"] = riyoshaNM;

			var parseKaigoKM = function(str){
			    var ret = "";
			    var cnt = str.split("、").length;
			    str.split("、").forEach((s, n)=>{
			        ret += s;
			        if(n!=(cnt-1)) ret+="<tab>";
			    });
			    return ret;
			};
			var kaigoLS = parseKaigoKM(document.querySelectorAll(
			    "#div_dialog_riyousya_plan > table > tbody tr")[5]
			    .querySelectorAll("td")[0].textContent.replace(/[\n\t ]/mg,"")
			);
			kirokuData["介護内容"] = kaigoLS;

			var ketuTaiMykParse = function(str){
			    var ret = "";
			    var cnt = str.split("、").length;
			    var pt = new RegExp(/(血圧|体温|脈拍)(.+)/m);

			    str.split("、").forEach((s, n)=>{
			        if(pt.test(s)){
			            var ir = s.match(pt)[1]+":"+s.match(pt)[2];
			            ret += ir;
			            if(n!=(cnt-1)) ret+="<tab>";
			        }
			    });
			    return ret;
			};
			var ketuTaiMyk = "";
			try{
				ketuTaiMyk = ketuTaiMykParse(
				    document.querySelector("#div_dialog_riyousya_plan > table > tbody > tr:nth-child(8) > td > span[title]").textContent.replace(/[\n\t]/mg,"")
				);
			}catch(e){
				console.log(e);
			}

			var parseVitalKM = function(){
			    var ret = "";
			    var pt = new RegExp(/(.+)(：)(.+)/m);
			    var tdd = document.querySelectorAll("#div_dialog_riyousya_plan > table > tbody > tr:nth-child(8) > td > span");
			    var cnt = tdd.length;
			    tdd.forEach((sp, n)=>{
			        if(n!=0){
			        	var sps = sp.textContent.replace(/[\n\t]/mg,"");
			            var mt = sps.split("：");
			            var ir = mt[0]+":"+mt[1];
			            ret += ir;
			            if(n!=(cnt-1)) ret+="<tab>";
			        }
			    });
			    return ret; 
			};
			var totalVital = "";
			try{
				totalVital = ketuTaiMyk +"<tab>"+ parseVitalKM();
			}
			catch(e){
				console.log(e);
			}
			kirokuData["様子・バイタル"] = totalVital;

			var tokki = "";
			try{
				tokki = document.querySelector(
				    "#div_dialog_riyousya_plan > table > tbody > tr:nth-child(10) > td > p").textContent.replace(/[\n\t事業者 ]/mg,"");
			}catch(e){
				console.log(e);
			}
			kirokuData["特記事項"] = tokki;
            return kirokuData;
        }
		copyServiceContentDialog(){
			var rpt = "{";
			var data = this.getServiceContentDialogData();
			for(var key in data){
				rpt += '"'+key+'":"'+data[key]+'",';
			}
			rpt = rpt.replace(/,$/,"");
			rpt += "}";
			prompt("サービス記録内容コピー\n↓下記のデータをコピーしてください。", rpt);
		}
		tabToArray(str){
			return str.split("<tab>");
		}
		jkToArray(str){
			return {
				"start":this.tabToArray(str)[0],
				"end":this.tabToArray(str)[1]
			};
		}
		pasteJissekiEditDialog(){
			var data = prompt("打刻・ケア項目画面に貼付\n↓ここにデータを貼り付けてください。");
			var kirokuData = JSON.parse(data);
			var yoteiJK = this.jkToArray(kirokuData["予定時間"]);
			var tagJK = this.jkToArray(kirokuData["実績時間"]);
			if(kirokuData["予定日付"]!=kirokuData["実績日付"]){
				document.querySelector("#date_start").selectedIndex=0;
			}
			document.querySelector('input[name="jisseki_start_syuusei"]').value = tagJK["start"];
			document.querySelector('input[name="jisseki_end_syuusei"]').value = tagJK["end"];
			kirokuData["介護内容"].split(/<tab>/).forEach((k)=>{
				document.querySelector('input[id="' + this.kaigoKM[k] + '"]').checked = true;
			});
		};
		selectInput(obj, val){
			obj.querySelectorAll("option").forEach((op, n)=>{
				if(op.value == val) obj.selectedIndex = n;
			});
		}
		getVitalRadioId(str){
			var tmp = str.split(":");
			var key = tmp[0];
			var val = tmp[1];
			var ls = this.vitalKM[key].split("<tab>");
			for(var i=0; i<ls.length; i++){
				var line = ls[i].split(/:/)[0];
				if(line == val) {
					return ls[i].split(/:/)[1];
				}
			}
			return "";
		}
		pasteVitalDialog(){
			var chkArr = new Array();
			var data = prompt("バイタル項目画面に貼付\n↓ここにデータを貼り付けてください。");
			var kirokuData = JSON.parse(data);
			kirokuData["様子・バイタル"].split(/<tab>/).forEach((v)=>{
				var ketu = new RegExp(/(血圧:)([0-9]+)(\/)([0-9]+)/);
				var tai = new RegExp(/(体温:)([0-9][0-9])(\.)([0-9])(℃)/);
				var myaku = new RegExp(/(脈拍:)([0-9]+)(回\/分)/);
				var etc = new RegExp(/(.+)(:)(.+)/);
				if(ketu.test(v)){
					document.querySelector("#ketu_max").value =v.match(ketu)[2];
					document.querySelector("#ketu_min").value =v.match(ketu)[4];
				}else if(tai.test(v)){
					this.selectInput(document.querySelector('select[name="taion_l"]'), v.match(tai)[2]);
					this.selectInput(document.querySelector('select[name="taion_r"]'), v.match(tai)[4]);
				}else if(myaku.test(v)){
					document.querySelector('input[name="myaku"]').value =v.match(myaku)[2];
				}else if(etc.test(v)){
					chkArr.push(this.getVitalRadioId(v));
				}
			});
			chkArr.forEach((r)=>{
				document.querySelector('input[id="' + r + '"]').checked = true;
			});
		}
		pasteTokkiDialog(){
			var data = prompt("特記事項画面に貼付\n↓ここにデータを貼り付けてください。");
			var kirokuData = JSON.parse(data);
			document.querySelector('textarea[name="bikou0"]').value =kirokuData["特記事項"];
		}
		isJissekiEditDialog(){
			var css = document.querySelector("#modal").getAttribute("style");
			if(new RegExp(/display.+block/).test(css)){
				return true;
			}else{
				return false;
			}
		}
		isServiceContentDialog(){
			var qui = document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-front.riyousya_jisseki_ui_dialog.ui-dialog-buttons.ui-draggable");
			var qtbl = document.querySelector("#form_table");
			if(qui!==null && qtbl==null) return true;
			else return false;
		}
		isVitalDialog(){
			var qui = document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-front.second_over_dialog.vital_tokki_dialog.ui-dialog-buttons.ui-draggable");
			var qtbl = document.querySelector("#form_table");
			var qtr = document.querySelector("#form_table > tbody > tr > th").textContent.replace(/[\n\t]/mg,"");
			if(qui!==null && qtbl!==null){
				if(qtr==="バイタル") return true;
			}
			return false;
		}
		isTokkiDialog(){
			var qui = document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-front.second_over_dialog.vital_tokki_dialog.ui-dialog-buttons.ui-draggable");
			var qtbl = document.querySelector("#form_table");
			var qtr = document.querySelector("#form_table > tbody > tr > th").textContent.replace(/[\n\t]/mg,"");
			if(qui!==null && qtbl!==null){
				if(qtr==="特記") return true;
			}
			return false;
		}
	}

	var app = new KirokuUtil();	
	try{
		if(app.isServiceContentDialog()) app.copyServiceContentDialog();
		else if(app.isJissekiEditDialog()) app.pasteJissekiEditDialog();
		else if(app.isVitalDialog()) app.pasteVitalDialog();
		else if(app.isTokkiDialog()) app.pasteTokkiDialog();
	}catch(e){
		alert("システムエラーです。PG開発者に質問してください。");
	}

})();