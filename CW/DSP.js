javascript:(function(){
	document.querySelector("#content-sub").remove();
	var el = document.querySelector("#jisshi-kiroku-table-body-div");
	var old = el.getAttribute("style");
	var newt = old.replace(/(width: .+?px;)/, "width:1900px");
	el.setAttribute("style", newt);
})();