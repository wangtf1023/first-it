$(function(){
	var code;
	var phoneCode = null;
	Code();
	//手机号
	$("#login_number2").find("input").blur(function(){
		var num = /^[\d]{11,11}$/;//验证手机号
		var val = $("#login_number2").find("input").val();
		if(!num.test(val)){
			// alert(num.test(val))
			$("#login_number2").find("span").css("display","block").css("color","red").html("手机号输入错误");
		}else{
			$("#login_number2").find("span").html("正确").css("background","none").css("color","green");
		}
	})
	//验证码
	$("#login_code").find("input").blur(function(){

		if($("#login_code").find("input").val().toLowerCase() == code.toLowerCase()){
			$("#login_code").find("span").css("display","block").css("background","none").css("color","green");
			$("#login_code").find("span").html("正确");
		}else{
			if($("#login_code").find("input").val() == ""){
				$("#login_code").find("span").css("display","block").css("color","red");
				$("#login_code").find("span").html("请填写验证码");
			}else{
				$("#login_code").find("span").css("display","block").css("color","red");
				$("#login_code").find("span").html("验证码错误");
			}
			
		}

	})
	//手机验证码
	$("#login_numcode").find("input").blur(function(){
		if($("#login_numcode").find("input").val() == ""){
			$("#login_numcode").find("span").css("display","block").css("color","red");
			$("#login_numcode2").css("display","none")
		}
	})
	//密码
	$("#login_password").find("input").blur(function(){
		var password = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
		if(password.test($("#login_password").find("input").val())){
			$("#login_password_span1").css("display","block").css("background","none").css("color","green");
			$("#login_password_span").css("display","none");
			$("#login_password_span1").html("正确");
		}else{
			if($("#login_password").find("input").val() == ""){
				$("#login_password_span1").css("display","block").css("color","red");
				$("#login_password_span").css("display","none");
				$("#login_password_span1").html("请填写密码");
			}else{
				$("#login_password_span1").css("display","block").css("color","red");
				$("#login_password_span").css("display","none");
				$("#login_password_span1").html("密码格式不正确");
			}
		}
		
	})
	//确认密码
	$("#login_password2").find("input").blur(function(){
		
		if($("#login_password").find("input").val() == $("#login_password2").find("input").val() && $("#login_password").find("input").val() != ""){
			
			$("#login_password2").find("span").css("display","block").css("background","none").css("color","green");
			$("#login_password2").find("span").html("正确");
		}else{
			
			if($("#login_password2").find("input").val() == ""){
				$("#login_password2").find("span").css("display","block").css("color","red");
				$("#login_password2").find("span").html("请填写确认密码");

			}else{
				$("#login_password2").find("span").css("display","block").css("color","red");
				$("#login_password2").find("span").html("两次密码填写不一致");
			}
		}
	})



	//验证码点击
	$("#login_code").find("div").click(function(){
		$("#login_code").find("div").html("");
		Code();

		return false

	})

	//点击手机验证码按钮
	$("#login_numcode").find("div").click(function(){
		clearInterval(code_timer);
		var reciprocal = 60;
		var code_timer = setInterval(phone,1000)
		var phonetime = Math.floor(Math.random()*10);
		
		var code_timer2 = setInterval(function(){
			phonetime--;
			if(phonetime <= 0){
				clearInterval(code_timer2);
				phone2();
				clearInterval(code_timer);
			}
		},1000)


		function phone2(){
			var div = $("<div>您的验证码为 : </div>");
			var div2 = $('<div id = "phoneCode_div3"></div>');
			var div3 = $('<div id = "phoneCode_div4">确定</div>');
			div.attr("id","phoneCode").css("position","relative");
			
			div2.html(phone3());
			div.append(div3);
			div.append(div2);
			$("#login_numcode").append(div);

			div3.click(function(){
				div.remove();
			})
			$("#login_numcode_div").html("重新发送验证码");

		}

		function phone(){
			reciprocal--;
			$("#login_numcode").find("#login_numcode_div").html(reciprocal + "秒后可重新发送");
		}

		function phone3(){
			var fff = "";
			var codeLength = 4;
			var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
			for(var i=0;i<codeLength;i++){
	    	var color = "rgb(" + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + ")";
		    var charIndex = Math.floor(Math.random()*53); 
		    
		    var n = selectChar[charIndex];
		    	fff+= n;

	   	    } 
	   	    return fff;
		}
	})
	
	
	function Code(){
		code = "";
	    var codeLength = 6;//验证码的长度 
	    
	    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//所有候选组成验证码的字符，当然也可以用中文的 
	      
	    for(var i=0;i<codeLength;i++){
	    	var color = "rgb(" + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + ")";
		    var charIndex = Math.floor(Math.random()*53); 
		    
		    var n = selectChar[charIndex];
		    code += n;
		   
		    var p = $("<p></p>");
		    p.css("color",color);
		    p.html(n);
		    $("#login_code").find("div").append(p);

	    } 
	}

	
    
})