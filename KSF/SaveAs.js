javascript:(function(){
	var csName = document.querySelector('div[view_id="key_okyakusama_id"] > div > input').value;
	var crtDay = document.querySelector('div[view_id="creation_day"] > div > div').innerHTML;
	prompt("下記をコピーして保存名に利用してください。", crtDay+"_個別支援計画書_"+csName.replace(/　/mg, ""));
})();
