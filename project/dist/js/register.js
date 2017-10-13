

$(function(){
	


	//验证用户名
	$("#register_name").blur(function(){
		var userName = $("#register_name").val();
		var name = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{2,15}$/;//验证是否为汉字字母下划线数字
		var num = /^[\d]{11,11}$/;//验证手机号
		var email = /^[a-zA-Z0-9_]\w{5,17}@\w+\.(com|cn|net)$/;//验证邮箱
		if(userName == ""){
			$("#register_div1_p").html("✘用户名长度不能少于3位 @_@");
			$("#register_ok").css("display","none");
			$("#register_no").css("display","block");
		}else if(num.test(userName)){
			
			userFun();
		}else if(name.test(userName)){
		
			userFun();
		}else if(email.test(userName)){
			
			userFun();
		}else{
			$("#register_div1_p").html("✘邮箱/手机号码/用户名长度不能少于3位 @_@");
			$("#register_ok").css("display","none");
			$("#register_no").css("display","block");
		}
	})



	//验证密码
	$("#register_pass").blur(function(){
		var password2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
    	var password1 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
    	var password3 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){8,16}$/
		// var password = /^[a-zA-Z0-9_]{6,16}$/;
		var passWord = $("#register_pass").val();
		if(passWord == ""){
			$("#register_div2_p").find("span").css("display","none");
			$("#register_div2_p_span4").css("display","block");
			$("#register_div2_p_span4").html("✘密码最低位数为6位,最多16位 @_@");
			$("#register_ok1").css("display","none");
			$("#register_no1").css("display","block");
		}else if(password3.test(passWord)){

			$("#register_div2_p").find("span").css("display","block");
			$("#register_no1").css("display","none");
			$("#register_ok1").css("display","block");
			if(password1.test(passWord)){
				$("#register_div2_p_span1").css("background","green");
				$("#register_div2_p_span2").css("background","green");
				$("#register_div2_p_span3").css("background","green");
				$("#register_div2_p_span4").html("密码强度 :强 ^-^");
			}else if(password2.test(passWord)){
				$("#register_div2_p_span1").css("background","green");
				$("#register_div2_p_span2").css("background","green");
				$("#register_div2_p_span3").css("background","red");
				$("#register_div2_p_span4").html("密码强度 :将就 @_@");
			}else if(password3.test(passWord)){
				$("#register_div2_p_span1").css("background","green");
				$("#register_div2_p_span2").css("background","red");
				$("#register_div2_p_span3").css("background","red");
				$("#register_div2_p_span4").html("密码强度 :很差 @_@");
			}
			
		}else{
			$("#register_div2_p").find("span").css("display","none");
			$("#register_div2_p_span4").css("display","block");
			$("#register_div2_p_span4").html("✘密码位6-16位数字字母下划线 @_@");
			$("#register_ok1").css("display","none");
			$("#register_no1").css("display","block");
		}
		// alert($("#register_check_input").is(':checked'))
	})
	
	
	//cookie
	$("#register_but").click(function(){	
		var user = $("#register_name").val();
		var pass = $("#register_pass").val();
		if($("#register_check_input").is(':checked')){
			$.cookie("userName", user);
			$.cookie("password", pass);
		}
	})
})





function userFun(){
	return $("#register_div1_p").html("✔正确^-^")
			$("#register_no").css("display","none")
			$("#register_ok").css("display","block")
}


