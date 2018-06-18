$(document).ready(function() {
	function isHas() {
		$.ajax({
			type: "get",
			url: baseUrl + "/api/skinTest/isSkinTest",
			async: true,
			data: {
				id: getParam("reportId"),
				userId: getParam("userId")
			},
//			beforeSend: function(request) {
//				request.setRequestHeader("token", getParam('token'));
//			},
			success: function(res) {
				console.log(res)
				if(res.data) {
					$(".warning span").text("您的肤质报告已生成，可点击查看").parent().find(".btn").css("display", "block")
				} else {
					setTimeout(function() {
						isHas()
					}, 5000)
				}
			}
		});
	}
isHas();
//点击查看跳转小程序查看报告；
$("#report").find(".btn").on("click",function(){
			wx.miniProgram.navigateTo({
			url: '/pages2/skinRecord/skinRecord?id='+ getParam("reportId")+'&text=继续联系'
		});
})
})