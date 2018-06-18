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
$.ajax({
	type: "get",
	url: baseUrl + 'api/institution/institutionDetails',
	async: true,
	//	beforeSend: function(request) {
	//		request.setRequestHeader("token", getParam('token'));
	//	},
	data: {
		institutionId: getParam("institutionId")
	},
	success: function(res) {
		console.log(res)
		if(res.code == 0) {
			if( res.data.imageUrl){
					$(".storeImg img").attr("src", res.data.imageUrl).parent().next().find("h1").text(res.data.name);
			}else{
					$(".storeImg img").attr("src", 'img/store.jpg').parent().next().find("h1").text(res.data.name);
			}
		
			$("h6").text(res.data.addr);
			$("#tel").text("电话：" + res.data.tel + "         营业时间：" + res.data.openStartTime + "-" + res.data.openEndTime);
		} else {
			$("#outBox").css("display", "block").text(res.msg);
			setTimeout(function() {
				$("#outBox").css("display", "none").text("");
			}, 1000)
		}
	},
	fail: function(e) {
		$("#outBox").css("display", "block").text("网络异常,请稍后重试");
		setTimeout(function() {
			$("#outBox").css("display", "none").text("");
		}, 1000)
	}
});
//---------------------
//wx.miniProgram.postMessage({
//			data: 1
//		})

// 		  wx.miniProgram.navigateTo({
//          url:'../../pages/address/address?state=1',
//          success: function(){
//              console.log('success')
//          },
//          fail: function(){
//              console.log('fail');
//          },
//          complete:function(){
//              console.log('complete');
//          }
//
//          });
//	})