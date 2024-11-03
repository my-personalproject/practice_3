function header(){
	$.ajax({
		url: "index.html",
		cache: false,
		success: function(html){
			document.write(html);
		}
	});
}
