var ua = navigator.userAgent;
var isAndroid = /android/i.test(ua); //android终端
//if(!isAndroid) {
	//执行代码.....
//	window.onresize = function() {
//		if(document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
//			setTimeout(function() {
//				var top = document.activeElement.getBoundingClientRect().top;
//				window.scrollTo(0, top);
//			}, 0);
//		}
//	}
//}

//$(function() {
//	function getParam(name) {
//		var search = document.location.search;
//		var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
//		var matcher = pattern.exec(search);
//		var items = null;
//		if(null != matcher) {
//			try {
//				items = decodeURIComponent(decodeURIComponent(matcher[1]));
//			} catch(e) {
//				try {
//					items = decodeURIComponent(matcher[1]);
//				} catch(e) {
//					items = matcher[1];
//				}
//			}
//		}
//		return items;
//	};
//	var userHead = getParam("userHead")
//	if(userHead=="null"){
//		userHead="https://douboshi.oss-cn-beijing.aliyuncs.com/mobile/head.png"
//	}
//	var t = setInterval(function() {	
//		$(".avatars").attr("src", userHead)
//	}, 800)
//
//})
//点击客服头像跳转微信小程序客服详情
window.onload = function() {
//	alert("可见区域"+document.body.clientHeight)
	$("body").find(".em-widget-textarea").on("click",function(){
		console.log(12)
//		alert("可见区域2"+document.body.clientHeight)
	})
	$("body").find(".em-widget-textarea").focus(function(){
		console.log("f")
	})
	$("body").on("click", ".chat-container .avatar", function(event) {
		console.log(0)
//		 event.stopPropagation();
		var nickNamess = $("body .em-widget-header-nickname").text();
//		alert(nickNamess)
		wx.miniProgram.navigateTo({
			url: '/pages/expertResume/expertResume'
		});
	})
}
//$('input[type="text"],textarea').on('click', function () {
//  var target = this;
//  setTimeout(function(){
//        target.scrollIntoViewIfNeeded();
//$(target).scrollintoview()
////        console.log('scrollIntoViewIfNeeded');
//      },400);
//});
//window.addEventListener('resize', function () {
//  if(document.activeElement.tagName === 'TEXTAREA'){
//      document.activeElement.scrollIntoView({behavior: "smooth"})
//  }
// })

