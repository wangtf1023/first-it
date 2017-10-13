$(function(){ 
	$.ajax({
		url:"../json/by.json",
		type:"GET",
		success:function(data){


			


			//加载右侧详情介绍
			var Dada1 = data[1]
			var id1 = $("#by_body_2_2").find("h1");
			var id2 = $("#by_body_2_2").find($("#by_body_2_2_p"));
			fun(Dada1,id1,id2);

			//加载价格及周边
			var Dada2 = data[4];
			var id3 = $("#by_body_2_2_div5_p");
			var id4 = $("#by_body_2_2_div5_div1");
			var id5 = $("#by_body_2_2_div5_span");
			fun(Dada2,id3,id4,id5);


			//加载图片展示
			var Dada3 = data[0].children;
			var id6 = $("#by_body_2_1_1").find("ul");
			var id11 = $("#by_body_2_1_2");
			
			fun(Dada3,id6,id11);
			var id6 = $("#by_body_2_1_1").find("ul").find("li").eq(0).css("display","block");

			

			//加载版本
			var Dada4 = data[2].children;
			var id7 = $("#by_body_2_2_div1").find("ul");
			fun(Dada4,id7);
			//边框变色
			$("#by_body_2_2_div1").find("ul").find("li").eq(0).addClass("by_body_first")
			
			//加载颜色
			var Dada5 = data[3].children;
			var id8 = $("#by_body_2_2_div2").find("ul");
			fun(Dada5,id8);
			//边框变色
			$("#by_body_2_2_div2").find("ul").find("li").eq(0).addClass("by_body_first")

			//加载图片详细展示
			var Dada6 = data[5].children;
			var id9 = $("#by_body_4").find("ul");
			var id10 = $("#by_body").css("width");
			
			fun(Dada6,id9,id10);	

 

			//加载滚动导航栏
			$("#by_body_3_div_div2").find("img").attr("src",data[0].img);
			$("#by_body_3_div_div2").find("p").html(data[0].title);
			$("#by_body_3_div_div2").find("span").html(data[4].cost);
			$("#by_body_3_div_div3").find("div").html(data[4].state);



			//加载放大镜
			var id12 = $("#by_body_2_1_1_div").find("ul");
			var Dada7 = data[0].children;
			for(var h = 0;h < Dada7.length;h++){
				var li = $("<li></li>");
				var img = $("<img/>");
				img.attr("src",Dada7[h].img);
				li.append(img);
				id12.append(li);
			}

			//加载规格参数
			var Data8 = data[6].children;
			var id13 = $("#by_body_5");
			fun1(Data8,id13);

			//加载评价
			var Data9 = data[7].children;
			var id14 = $("#by_body_6").find("ul");
			fun2(Data9,id14);
			//点击更多评论
			var fun2_num = 0;
			$("#by_body_6_div3").click(function(){
				fun2_num++;			
				if(fun2_num >5){
					alert("没有更多评论了");					
				}else{
					fun2(Data9,id14);
				}
			})
		}
	})





 	$("#by_body_3").find("ul").on("click","li",function(){
 		var index = $(this).index();
 		switch(index){
 			case 0:
 				$("#by_body_4").css("display","block");
 				$("#by_body_5").css("display","none");
 				$("#by_body_6").css("display","none");
 				$("#by_body_7").css("display","none");
 				$("#by_body_3").find("ul").find("li").css("color","#333333");
 				$("#by_body_3").find("ul").find("li").eq(index).css("color","#d4251d");
 				$("#by_body_3_div_div3").find("ul").find("li").eq(index).css("color","#d4251d");
 				break;
 			case 1:
 				$("#by_body_4").css("display","none");
 				$("#by_body_5").css("display","block");
 				$("#by_body_6").css("display","none");
 				$("#by_body_7").css("display","none");
 				$("#by_body_3").find("ul").find("li").css("color","#333333");
 				$("#by_body_3").find("ul").find("li").eq(index).css("color","#d4251d");
 				$("#by_body_3_div_div3").find("ul").find("li").eq(index).css("color","#d4251d");
 				break;
 			case 2:
 				$("#by_body_4").css("display","none");
 				$("#by_body_5").css("display","none");
 				$("#by_body_6").css("display","block");
 				$("#by_body_7").css("display","none");
 				$("#by_body_3").find("ul").find("li").css("color","#333333");
 				$("#by_body_3").find("ul").find("li").eq(index).css("color","#d4251d");
 				$("#by_body_3_div_div3").find("ul").find("li").eq(index).css("color","#d4251d");
 				break;
 			case 3:
 				$("#by_body_4").css("display","none");
 				$("#by_body_5").css("display","none");
 				$("#by_body_6").css("display","none");
 				$("#by_body_7").css("display","block");
 				$("#by_body_3").find("ul").find("li").css("color","#333333");
 				$("#by_body_3").find("ul").find("li").eq(index).css("color","#d4251d");
 				$("#by_body_3_div_div3").find("ul").find("li").eq(index).css("color","#d4251d");
 				break;
 			case 4:
 				$("#by_body_4").css("display","none");
 				$("#by_body_5").css("display","none");
 				$("#by_body_6").css("display","none");
 				$("#by_body_7").css("display","none");
 				$("#by_body_3").find("ul").find("li").css("color","#333333");
 				$("#by_body_3").find("ul").find("li").eq(index).css("color","#d4251d");
 				$("#by_body_3_div_div3").find("ul").find("li").eq(index).css("color","#d4251d");
 				break;
 			default:
 				alert("命令错误");
 				break;
 		}
 	})





	var top = $("#by_body_3").offset().top + 60;
	$(document).scroll(function(){
		$("#nav").css("background","rgba(0,0,0,0.5)")
		if($(document).scrollTop() >= top){
			$("#by_body_3_div").css("display","block")
		}else{
			$("#by_body_3_div").css("display","none")
		}
	})




 	$("#by_body_2_2_div5_div1").click(function(){
 		var first = $.cookie("commodity") == null ? true : false;
 		var same = false;
 		if(first){
 			$.cookie("commodity",'[{"id":' + 2 + ',"num":' + $("#by_body_2_2_div").find("input").val() + '}]')
 		}else{
 			var str = $.cookie("commodity");
			var arr = JSON.parse(str);
			// alert(arr)
			//遍历
			for(var i in arr){
				//判断是否有相同id
				if(arr[i].id == 2){
					//数量+1
					// alert(parseInt($("#by_body_2_2_div").find("input").val()))
					var nn = parseInt(arr[i].num) + Number($("#by_body_2_2_div").find("input").val());
					arr[i].num = nn;
					// alert(arr[i].num)
					//转换数据类型附回去
					var cookieStr = JSON.stringify(arr);
					// alert(cookieStr);
					$.cookie("commodity", cookieStr);
					same = true;
				}
			}

			//没有相同产品
			if(!same){
				var obj = {
					id: 2,
					num: $("#by_body_2_2_div").find("input").val()
				}
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				// alert(cookieStr);
				$.cookie("commodity", cookieStr);
			}
 		}
 		sc_car();
 	})

 	$("#by_body_3_div_div3").find("div").click(function(){
 		// alert(1)
 		var first = $.cookie("commodity") == null ? true : false;
 		var same = false;
 		if(first){
 			$.cookie("commodity",'[{"id":' + 2 + ',"num":' + $("#by_body_2_2_div").find("input").val() + '}]')
 		}else{
 			var str = $.cookie("commodity");
			var arr = JSON.parse(str);
			// alert(arr)
			//遍历
			for(var i in arr){
				//判断是否有相同id
				if(arr[i].id == 2){
					//数量+1
					// alert(parseInt($("#by_body_2_2_div").find("input").val()))
					arr[i].num += parseInt($("#by_body_2_2_div").find("input").val());
					//转换数据类型附回去
					var cookieStr = JSON.stringify(arr);
					// alert(cookieStr);
					$.cookie("commodity", cookieStr);
					same = true;
				}
			}

			//没有相同产品
			if(!same){
				var obj = {
					id: 2,
					num: $("#by_body_2_2_div").find("input").val()
				}
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				// alert(cookieStr);
				$.cookie("commodity", cookieStr);
			}
 		}
 		sc_car();
 	})










	var n = 1;
	$("#by_body_2_2_div_div1").click(function(){		
		n -= 1
		if(n <= 0){
			n = 0
		}
		$("#by_body_2_2_div").find("input").val(n);
	})
	$("#by_body_2_2_div_div2").click(function(){
		n += 1
		$("#by_body_2_2_div").find("input").val(n);
	})
	



	var num = 0;
	var img_timer = null;
	$("#by_body_2_1_2").on("click","span",function(){
		$("#by_body_2_1_2").find("span").removeClass("by_body_2_1_2")
		$(this).addClass("by_body_2_1_2");
		clearInterval(img_timer);		
		var index = $(this).index();
		$("#by_body_2_1_1_div").find("ul").find("li").css("display","none");
		$("#by_body_2_1_1").find("ul").find("li").fadeOut("100")		
		$("#by_body_2_1_1").find("ul").find("li").eq(index).fadeIn("100");
		$("#by_body_2_1_1_div").find("ul").find("li").eq(index).css("display","block");
		img_timer = setInterval(img,2000)
		num = index;
		
	})


	
	img_timer = setInterval(img,2000)
	function img(){
		if(num >= 4){
			num = -1
		}
		$("#by_body_2_1_1_div").find("ul").find("li").css("display","none");
		$("#by_body_2_1_2").find("span").removeClass("by_body_2_1_2")
		$("#by_body_2_1_1_ul").find("li").fadeOut("100")
		$("#by_body_2_1_2").find("span").eq(num + 1).addClass("by_body_2_1_2");		
		$("#by_body_2_1_1_ul").find("li").eq(num + 1).fadeIn("100");
		$("#by_body_2_1_1_div").find("ul").find("li").eq(num + 1).css("display","block");
		num += 1;
		if(num >= 4){
			num = -1
		}
	}





	/*$("#by_body_2_1_1").hover(function(){	
		// $("#by_body_2_1_3").find("div").fadeIn("100");
		$("#by_body_2_1_3").find("div").mouseover(function(){
			$("#by_body_2_1_3").find("div").css("display","block")
		})
	},function(){
		// $("#by_body_2_1_3").find("div").css("display","none")
	})*/

	//点击做滑动

	$("#by_body_2_1_3").find("div").eq(0).click(function(){
		//清除计时器
		clearInterval(img_timer);
		num -= 1;
		//判断num是否为第一张
		if(num < 0){
			num = 4;
		}
		$("#by_body_2_1_1_div").find("ul").find("li").css("display","none");
		$("#by_body_2_1_2").find("span").removeClass("by_body_2_1_2")
		$("#by_body_2_1_1").find("ul").find("li").fadeOut("100")
		$("#by_body_2_1_2").find("span").eq(num).addClass("by_body_2_1_2");		
		$("#by_body_2_1_1").find("ul").find("li").eq(num).fadeIn("100");
		$("#by_body_2_1_1_div").find("ul").find("li").eq(num).css("display","block");
		//判断是否到第一张
		if(num < 0){
			num = 5
		}
		
		img_timer = setInterval(img,2000)
	})

	//点击右滑动
	$("#by_body_2_1_3").find("div").eq(1).click(function(){
		clearInterval(img_timer);
		$("#by_body_2_1_2").find("span").removeClass("by_body_2_1_2")
		$("#by_body_2_1_1").find("ul").find("li").fadeOut("100")
		$("#by_body_2_1_2").find("span").eq(num + 1).addClass("by_body_2_1_2");		
		$("#by_body_2_1_1").find("ul").find("li").eq(num + 1).fadeIn("100");
		num += 1;
		if(num >= 4){
			num = -1
		}
		
		img_timer = setInterval(img,2000)
	})

	//划过暂停
	$("#by_body_2_1_1").hover(function(){
		clearInterval(img_timer);
	},function(){
		img_timer = setInterval(img,2000)
	})



 	// $("#by_body_2_1_4").click(function(){
 		$("#by_body_2_1_1").hover(function(){
	 		$("#by_body_2_1_1_div1").fadeIn(100);
	 		$("#by_body_2_1_1_div").fadeIn(100);
	 	},function(){
	 		$("#by_body_2_1_1_div1").fadeOut(100);
	 		$("#by_body_2_1_1_div").fadeOut(100);
	 	})

	 	$("#by_body_2_1_1_div2").mousemove(function(ev){
	 		var X = ev.offsetX;
			var Y = ev.offsetY;
			var offsetLeft = X - parseInt($("#by_body_2_1_1_div1").css("width")) / 2;
			var offsetTop = Y - parseInt($("#by_body_2_1_1_div1").css("height")) / 2;
			// alert(X)
			if(offsetLeft < 0){
				offsetLeft = 0; 
			}else if(offsetLeft > parseInt($("#by_body_2_1_1").css("width")) - parseInt($("#by_body_2_1_1_div1").css("width"))){
				offsetLeft = parseInt($("#by_body_2_1_1").css("width")) - parseInt($("#by_body_2_1_1_div1").css("width"));
			}

			if(offsetTop < 0){
				offsetTop = 0;
			}else if(offsetTop > parseInt($("#by_body_2_1_1").css("height")) - parseInt($("#by_body_2_1_1_div1").css("height"))){
				offsetTop = parseInt($("#by_body_2_1_1").css("height")) - parseInt($("#by_body_2_1_1_div1").css("height"));
			}

			$("#by_body_2_1_1_div1").css("left",offsetLeft).css("top",offsetTop);

			var proportionX = offsetLeft / (parseInt($("#by_body_2_1_1").css("width")) - parseInt($("#by_body_2_1_1_div1").css("width")));

			var proportionY = offsetTop / (parseInt($("#by_body_2_1_1").css("height")) - parseInt($("#by_body_2_1_1_div1").css("height")));

			var Left = -proportionX * (parseInt($("#by_body_2_1_1_div").find("ul").css("width")) - parseInt($("#by_body_2_1_1_div").css("width"))) + "px";
			var Top = -proportionY * (parseInt($("#by_body_2_1_1_div").find("ul").css("height")) - parseInt($("#by_body_2_1_1_div").css("height"))) + "px";

			$("#by_body_2_1_1_div").find("ul").css("left",Left).css("top",Top);
	 	})
 	// })
 	






	function fun(Data,id1,id2,id3){
		if(!Data.length && id2 && !id3){
			id1.html(Data.title);
			id2.html(Data.describe);
		}else if(!Data.length && id2 && id3){
			id1.html(Data.cost);
			id2.html(Data.state);
			id3.html(Data.popularity);
		}else{
			for(var i = 0 ;i < Data.length;i++){
				var li = $("<li></li>")
				if(Data[i].p){
					li.html(Data[i].p);
				}else if(Data[i].height){
					var img = $("<img/>");
					img.attr("src",Data[i].img).css("width",id2);
					li.append(img);
				}else{
					var img = $("<img/>");
					var span = $("<span></span>");
					img.attr("src",Data[i].img);
					id2.append(span);
					li.append(img);
					// id3.append(li);
				}
				id1.append(li);

			}
		}
		$("#by_body_2_1_2").find("span").eq(0).addClass("by_body_2_1_2");
	}



	function fun1(Data,id){
		for(var i = 0;i < Data.length;i++){
			var table = $("<table></table>");
			var tr = $("<tr></tr>");
			var th = $('<th colspan="2"></th>')
			th.html(Data[i][0].title1);
			tr.append(th);
			table.append(tr);
			for(var l = 1;l < Data[i].length;l++){
				var tr1 = $("<tr></tr>");
				var td1 = $("<td></td>");
				var td2 = $("<td></td>");
				td1.html(Data[i][l].title1);
				td2.html(Data[i][l].title2);

				tr1.append(td1).append(td2);
				table.append(tr1);
			}

			id.append(table);
		}
	} 

	function fun2(Data,id){
		for(var i = 0;i < Data.length;i++){
			var li = $("<li></li>");
			var div1 = $('<div id="by_body_6_div1"></div>');
			var img = $('<img src="by-img/pj.png" />');
			var p = $("<p></p>");

			p.html(Data[i].title1);
			div1.append(img).append(p);

			var div2 = $('<div id="by_body_6_div2"></div>');
			var p1 = $("<p></p>");
			var p2 = $("<p></p>");

			p1.html(Data[i].title2);
			p2.html(Data[i].title3);
			div2.append(p1).append(p2);

			li.append(div1).append(div2);
			id.append(li);
		}
	}
})