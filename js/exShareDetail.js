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
//	定义全觉变量
let id, praise, collect, praiseNum, collectNum;

$.ajax({
	type: "get",
	url: baseUrl + 'api/caseStudy/check',
	async: true,
//	beforeSend: function(request) {
//		request.setRequestHeader("token", getParam('token'));
//	},
	data: {
		id: getParam("id"),
		userId: getParam("userId")
	},
	success: function(res) {
		console.log(res)
		if(res.code == 0) {
			id = res.data.id;
			praise = res.data.praise;
			collect = res.data.collect;
			praiseNum = res.data.praiseNum;
			collectNum = res.data.collectNum;
			$(".video video").attr('src', res.data.videoUrl)
				.parent().parent()
				.find(".title").find("span").text(res.data.title).next()
				.find(".zan").text("赞·" + praiseNum).end()
				.find(".col").text("收藏·" + collectNum);
			var zanState = '';
			var colState = '';
			if(praise == 0) {
				zanState = "img/zan.png"
			} else {
				zanState = "img/loved.png"
			}
			if(collect == 0) {
				colState = "img/col1.png"
			} else {
				colState = "img/col2.png"
			}
			$(".zanImg").attr("src", zanState);
			$(".colImg").attr("src", colState)
		} else {

		}
	},
	fail: function(e) {
		console.log(e)
	}
});
//	点赞/取消点赞
$(".contentBox .zanBox").on("click", function() {
	if(praise == 0) {
		//点赞
		$.ajax({
			type: "post",
			url: baseUrl + "api/userPraise/insert",
			async: true,
			data: {
				targetId: getParam("id"),
				userId: getParam("userId"),
				praiseType: 1
			},
//			beforeSend: function(request) {
//				request.setRequestHeader("token", getParam('token'));
//			},
			success: function(res) {
				praise=1
				praiseNum=Number(praiseNum)+1
				console.log(res)
				if(res.code == 0) {
					$(".zanImg").attr("src", "img/loved.png").next().text("赞·" + praiseNum)
				} else {
					alert(res.msg)
				}

			},
			fail: function(e) {
				console.log(e)
			}
		});
	} else {
		//			取消点赞
		$.ajax({
			type: "post",
			url: baseUrl + "api/userPraise/updateVaildFlag",
			async: true,
			data: {
				targetId: getParam("id"),
				userId: getParam("userId"),
				praiseType: 1
			},
//			beforeSend: function(request) {
//				request.setRequestHeader("token", getParam('token'));
//			},
			success: function(res) {
				praise=0
				praiseNum=Number(praiseNum)-1
				console.log(res)
				if(res.code == 0) {
					$(".zanImg").attr("src", "img/zan.png").next().text("赞·" +praiseNum)
				} else {
					alert(res.msg)
				}
			},
			fail: function(e) {
				console.log(e)
			}
		});
	}

})
//	收藏/取消收藏
$(".contentBox .colBox").on("click", function() {
	if(collect == 0) {
		//收藏
		console.log(getParam("id"),getParam("userId"))
		$.ajax({
			type: "post",
			url: baseUrl + "api/userCollect/insert",
			
			data: {
				targetId: getParam("id"),
				userId: getParam("userId"),
				collectType: 1
			},
//			beforeSend: function(request) {
//				request.setRequestHeader("token", getParam('token'));
//			},
			success: function(res) {				
				console.log(res)
				if(res.code == 0) {
					collect=1
					collectNum=Number(collectNum)+1;
					$(".colImg").attr("src", "img/col2.png").next().text("收藏·" + collectNum)
				} else {
					alert(res.msg)
				}

			},
			fail: function(e) {
				console.log(e)
			}
		});
	} else {
		//			取消收藏
		$.ajax({
			type: "post",
			url: baseUrl + "api/userCollect/updateVaildFlag",
			async: true,
			data: {
				targetId: getParam("id"),
				userId: getParam("userId"),
				collectType: 1
			},
//			beforeSend: function(request) {
//				request.setRequestHeader("token", getParam('token'));
//			},
			success: function(res) {
				console.log(res)
				if(res.code == 0) {
					collect=0
					collectNum=Number(collectNum)-1;
					$(".colImg").attr("src", "img/col1.png").next().text("收藏·" + collectNum)
				} else {
					alert(res.msg)
				}
			},
			fail: function(e) {
				console.log(e)
			}
		});
	}

})