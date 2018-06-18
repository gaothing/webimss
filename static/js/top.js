var ua = navigator.userAgent;
var isAndroid = /android/i.test(ua); //android终端
if(!isAndroid) {
	//执行代码.....
	window.onresize = function() {
		if(document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
			setTimeout(function() {
				var top = document.activeElement.getBoundingClientRect().top;
				window.scrollTo(0, top);
			}, 0);
		}
	}
}

$(function() {
	function getParam(name) {
	var search = document.location.search;
	var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
	var matcher = pattern.exec(search);
	var items = null;
	if(null != matcher) {
		try {
			items = decodeURIComponent(decodeURIComponent(matcher[1]));
		} catch(e) {
			try {
				items = decodeURIComponent(matcher[1]);
			} catch(e) {
				items = matcher[1];
			}
		}
	}
	return items;
};
	var avatars=getParam("avatars");console.log(avatars)
	console.log(12)
	var t = setInterval(function() {
		$(".avatars").attr("src", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1875497233,2666278799&fm=27&gp=0.jpg")
	}, 500)
		$(".em-widget-left").find(".avatar").on("click",function(){
			console.log()
			wx.miniProgram.navigateTo({
			url: '/pages2/skinRecord/skinRecord?id='+ getParam("reportId")
		});
		})
})