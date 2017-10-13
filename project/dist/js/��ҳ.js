$(function(){

	//加载导航栏数据
	$.ajax({
		url:"json/JSON.json",
		type:"GET",
		success:function(data){
			

			//加载侧边栏数据

			var aside_children1 = data[2].children1;
			var aside_children2 = data[3].children1;
			var aside_children3 = data[4].children1;
			var aside_children4 = data[5].children1;
			var aside_children5 = data[6].children1;
			var aside_children6 = data[7].children1;
			//第一个
			aside(aside_children1,"#home_aside_div1");
			aside(aside_children2,"#home_aside_div2");
			aside(aside_children3,"#home_aside_div3");
			aside(aside_children4,"#home_aside_div4");
			aside(aside_children5,"#home_aside_div5");
			aside(aside_children6,"#home_aside_div6");



			// 加载body1数据
			var body1 = data[9].children;
			body_1(body1,"#home_body_1_ul");


			//加载body2数据
			var Data1 = data[10].children;
			var Data2 = data[10].children2;
			var id2 = $("#home_body_2_div2").find("ul");
			var id1 = $("#home_body_2_div1")
			body_2(Data1,Data2,id1,id2);


			//加载body3数据
			var Data3 = data[11].children;
			var Data4 = data[11].children2;
			var id3 = $("#home_body_3_div1");
			var id4 = $("#home_body_3_div2").find("ul");
			body_2(Data3,Data4,id3,id4);

			//加载body4数据
			var Data5 = data[12].children;
			var Data6 = data[12].children2;
			var id5 = $("#home_body_4_div1");
			var id6 = $("#home_body_4_div2").find("ul");
			body_2(Data5,Data6,id5,id6);


			//加载body5数据
			var Data7 = data[13].children1;
			var id7 = $("#home_body_5_div1");
			var id8 = $("#home_body_5_div1_div");
			body_5(Data7,id7,id8);

			var Data8 = data[13].children2;
			var id9 = $("#home_body_5_div2");
			var id10 = $("#home_body_5_div2_div");
			body_5(Data8,id9,id10);

			var Data9 = data[13].children3;
			var id11 = $("#home_body_5_div3");
			var id12 = $("#home_body_5_div3_div");
			body_5(Data9,id11,id12);

			var Data10 = data[13].children4;
			var id13 = $("#home_body_5_div4");
			var id14 = $("#home_body_5_div4_div");
			body_5(Data10,id13,id14);
		}
	})












	//
	$("#home_aside_aside_ul").find("li").hover(function(){
		$("#home_aside1").css("display","block");
	},function(){
		$("#home_aside1").css("display","none");
	})
	$("#home_aside1").mouseover(function(){
		$("#home_aside1").css("display","block");
	})
	$("#home_aside1").mouseout(function(){
		$("#home_aside1").css("display","none");
	})

		//划入变色
	$("#home_aside1").on("mouseover","li",function(){
		$(this).css("backgroundColor","rgba(255,255,255,0.7)")
	})
	$("#home_aside1").on("mouseout","li",function(){
		$(this).css("backgroundColor","")
	})

	$("#home_aside_div1").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[2].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})
	$("#home_aside_div2").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[3].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})
	$("#home_aside_div3").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[4].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})
	$("#home_aside_div4").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[5].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})
	$("#home_aside_div5").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[6].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})
	$("#home_aside_div6").on("mouseover",function(){
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				var Data = data[7].children2;
				aside_aside(Data,"#home_aside1")
			}
		})
	})






	//

	$.ajax({
		url:"json/JSON.json",
		type:"GET",
		success:function(data){
			var Data = data[8].children2;
			for(var i = 0;i < Data.length;i++){
				//创建图片
				var a = $("<a></a>");
				var li = $("<li></li>");
				a.attr("href",Data[i].url);
				a.css("background-image","url(../banner-img/" + i +".jpg)");
				a.css("background-position","center center");
				li.css("width",$("body").css("width"));
				li.append(a);
				$("#home_aside_img").find("ul").append(li);
				//创建按钮
				var span = $("<span></span>")
				$("#home_aside_div").append(span);
			}
			var li1 = $("<li></li>");
			var a1 = $("<a></a>");
			li1.css("width",$("body").css("width"));
			a1.attr("href",Data[0].url);
			a1.css("background-image","url(../banner-img/" + 0 +".jpg)");
			a1.css("background-position","center center");
			li1.append(a1);
			$("#home_aside_img").find("ul").append(li1);
		}
	})






 	//左右箭头划入显示
	$("#home_aside_img_div").hover(function(){
		$("#home_aside_img_div").find("div").css("display","block")
	},function(){
		$("#home_aside_img_div").find("div").css("display","none")
	})
	//划入变色
	$("#home_aside_img_div1").hover(function(){
		$(this).css("background-position","0 0")
	},function(){
		$(this).css("background-position","-84px 0")
	})
	$("#home_aside_img_div2").hover(function(){
		$(this).css("background-position","-44px 0")
	},function(){
		$(this).css("background-position","-124px 0")
	})

	var banner_num = 0;
	$("#home_aside_img").find("ul").css("width",parseInt($("body").css("width")) * 5)
	//添加动画
	var banner_timer = setInterval(banner_img,4000);

	//点击切换
	$("#home_aside_div").on("click","span",function(){
		$("#home_aside_img").find("ul").stop();	
		clearInterval(banner_timer);
		var span_index = $(this).index();
		banner_num = span_index;
		$("#home_aside_div").find("span").css("background","#fff")
		$("#home_aside_div").find("span").eq(span_index).css("background","#f0a138")
		$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * span_index},1000);
		banner_timer = setInterval(banner_img,4000);
	})

	//点击左右箭头
	//右切换
	$("#home_aside_img_div2").click(function(){
		$("#home_aside_img").find("ul").stop();	
		clearInterval(banner_timer);

		banner_num += 1;
		if(banner_num >= 5){
			banner_num = 1;
			
			
			$("#home_aside_img").find("ul").animate({left:0},0);
			
		}

		$("#home_aside_div").find("span").css("background","#fff")
		$("#home_aside_div").find("span").eq(banner_num).css("background","#f0a138")
		$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * banner_num},1000);
		banner_timer = setInterval(banner_img,4000);
		if(banner_num >= 4){
			$("#home_aside_div").find("span").eq(0).css("background","#f0a138")
		}
		
	})

	//左切换
	$("#home_aside_img_div1").click(function(){
		$("#home_aside_img").find("ul").stop();	
		clearInterval(banner_timer);
		// alert(banner_num)
		
		
		if(banner_num <= 0){
			banner_num = 4
			$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * 4},0);
		}
		banner_num -= 1;
		$("#home_aside_div").find("span").css("background","#fff");
		$("#home_aside_div").find("span").eq(banner_num).css("background","#f0a138");
		$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * banner_num},1000);
		banner_timer = setInterval(banner_img,4000);
		if(banner_num <= 0){
			banner_num = 4;
			
			$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * 4},0);
		}
		
		
	})

	function banner_img(){	
		if(banner_num >= 4){
			banner_num = 0;
			$("#home_aside_div").find("span").eq(0).css("background","#f0a138");
			$("#home_aside_img").find("ul").animate({left:0},0);
		}
		banner_num += 1;
		$("#home_aside_div").find("span").css("background","#fff");
		$("#home_aside_div").find("span").eq(banner_num).css("background","#f0a138");
		$("#home_aside_img").find("ul").stop();	
		$("#home_aside_img").find("ul").animate({left:-parseInt($("body").css("width")) * banner_num},1000);
		
		if(banner_num >= 4){
			banner_num = 0;
			$("#home_aside_div").find("span").eq(0).css("background","#f0a138");
			$("#home_aside_img").find("ul").animate({left:0},0);
		}
	}



	/*var num = 0;
	clearInterval(banner_timer)
	var banner_timer = setInterval(banner_img,3000)

	//点击切换
	$("#home_aside_div").on("click","span",function(){
		clearInterval(banner_timer);
		if(!($(this).index() == num)){
			num = $(this).index();		
			$("#home_aside_div").find("span").css("background","#fff")
			$("#home_aside_img").find("ul").find("li").fadeOut("100");
			$("#home_aside_div").find("span").eq(num).css("background","#f0a138")
			$("#home_aside_img").find("ul").find("li").eq(num).fadeIn("100");			
		}
		banner_timer = setInterval(banner_img,3000)
	})



	//左右箭头
	$("#home_aside_img_div").hover(function(){
		$("#home_aside_img_div").find("div").css("display","block")
	},function(){
		$("#home_aside_img_div").find("div").css("display","none")
	})

	$("#home_aside_img_div1").hover(function(){
		$(this).css("background-position","0 0")
	},function(){
		$(this).css("background-position","-84px 0")
	})
	$("#home_aside_img_div2").hover(function(){
		$(this).css("background-position","-44px 0")
	},function(){
		$(this).css("background-position","-124px 0")
	})

	//点击切换
	$("#home_aside_img_div2").click(function(){
		clearInterval(banner_timer);
		num+=1
		$("#home_aside_div").find("span").css("background","#fff")
		$("#home_aside_img").find("ul").find("li").fadeOut("100");
		$("#home_aside_div").find("span").eq(num).css("background","#f0a138")
		$("#home_aside_img").find("ul").find("li").eq(num).fadeIn("100");
		if(num >= 3){
			num = -1;
		}
		// banner_timer = setInterval(banner_img,2000);
	})



	$("#home_aside_img_div1").click(function(){
		num-=1
		//清除计时器
		clearInterval(banner_timer);
		//判断num是否为第一张
		if(num < 0){
			num = 3;
		}
		$("#home_aside_div").find("span").css("background","#fff")
		$("#home_aside_img").find("ul").find("li").fadeOut("100");
		$("#home_aside_div").find("span").eq(num).css("background","#f0a138")
		$("#home_aside_img").find("ul").find("li").eq(num).fadeIn("100");
		if(num <= -1){
			num = 4;
		}
		// banner_timer = setInterval(banner_img,3000);
	})
	*/

/*	//划过暂停
	$("#home_aside_img").hover(function(){
		clearInterval(banner_timer);
	},function(){
		banner_timer = setInterval(banner_img,3000);
	})
*/

/*

	function banner_img(){
		if(num >= 3){
			num = -1;
		}
		$("#home_aside_img").find("ul").find("li").fadeOut("100");
		
		$("#home_aside_div").find("span").css("background","#fff")
		
		$("#home_aside_div").find("span").eq(num + 1).css("background","#f0a138")
		
		$("#home_aside_img").find("ul").find("li").eq(num + 1).fadeIn("100");
		num++;
		if(num >= 3){
			num = -1;
		}
	}*/
	



	function body_1(Data,id){
		for(var i = 0;i < Data.length;i++){
			var Li = $("<li></li>");
			var span = $("<span></span>");
			var div1 = $("<div></div>");
			var img = $("<img />");
			var div1_1 = $("<div></div>");
			var div1_1_p1 = $("<p></p>");
			var div1_1_p2 = $("<p></p>");
			var div1_1_p3 = $("<p></p>");

			span.html(Data[i].title1);

			//判断小辣椒明星产品标题背景颜色
		 	if(Data[i].title1 == "热销"){
		 		span.css("background","#e53935")
		 		// alert($(".home_body_1_li1_span").html() == "热销")
		 	}else if(Data[i].title1 == "新品"){
		 		span.css("background","#83c44e")
		 	}else{
		 		span.css("background","#ffac13")
		 	}

		 	Li.addClass("home_body_1_lili");
			span.addClass("home_body_1_li1_span");
			div1.addClass("home_body_1_ul_div1");
			div1_1.addClass("home_body_1_li1_div2");

			img.attr("src",Data[i].img);
			div1_1_p1.html(Data[i].title);
			div1_1_p2.html(Data[i].trait);
			div1_1_p3.html(Data[i].cost);

			div1_1.append(div1_1_p1);
			div1_1.append(div1_1_p2);
			div1_1.append(div1_1_p3);

			div1.append(img);
			div1.append(div1_1);

			var div2 = $("<div></div>");
			var div2_div1 = $("<div></div>");
			var div2_div1_p1 = $("<p></p>");
			var div2_div1_p2 = $("<p></p>");
			var ul = $("<ul></ul>");

			div2_div1.addClass("home_body_1_ul_div2");

			for(var l = 1;l < Data[i].referral.length;l++){
				var li = $("<li></li>");
				li.html(Data[i].referral[l].p);
				ul.append(li);
			}
			// alert(Data[i].referral.length)
			var div2_div2 = $("<div></div>");
			var div1_1_a1 = $("<a>立即购买</a>");
			var div1_1_a2 = $("<a>查看详情</a>");

			div2_div2.addClass("home_body_1_li1_div4");

			div2_div1_p1.html(Data[i].title);
			div2_div1_p2.html(Data[i].cost);

			div2_div1.append(div2_div1_p1);
			div2_div1.append(div2_div1_p2);
			div2_div1.append(ul);

			div1_1_a1.attr("href",Data[i].by);
			div1_1_a2.attr("href",Data[i].details);

			div2_div2.append(div1_1_a1);
			div2_div2.append(div1_1_a2);

			div2.append(div2_div1);
			div2.append(div2_div2);

			$(Li).append(span);
			$(Li).append(div1);
			$(Li).append(div2);

			$(id).append(Li);



			Li.hover(function(){
	 		$(this).find("div").find("div").stop();
	 		$(this).find("div").find("img").stop();
	 		$(this).css("background","rgb(245,244,244)");

	 		$(this).find($(".home_body_1_ul_div2")).animate({left:92},500);
	 		$(this).find($(".home_body_1_li1_div4")).animate({left:-20},500);
	 		$(this).find($(".home_body_1_ul_div1")).find("div").animate({left:-200},500);
	 		$(this).find($(".home_body_1_ul_div1")).find("img").animate({left:-80},500);

		 	},function(){
		 		$(this).find("div").find("div").stop();
		 		$(this).find("div").find("img").stop();
		 		$(this).css("background","rgb(236,236,236)");

		 		$(this).find($(".home_body_1_ul_div2")).animate({left:200},500);
		 		$(this).find($(".home_body_1_li1_div4")).animate({left:200},500);
		 		$(this).find($(".home_body_1_ul_div1")).find("div").animate({left:0},500);
		 		$(this).find($(".home_body_1_ul_div1")).find("img").animate({left:0},500);
		 	})

		 	div1_1_a1.hover(function(){
		 		$(this).css("border-color","red").css("color","red");
		 	},function(){
		 		$(this).css("border-color","#dcdddd").css("color","#333333");
		 	})

		 	div2_div2.on("mouseover","a",function(){
		 		$(this).css("border-color","red").css("color","red");
		 	})
		 	div2_div2.on("mouseout","a",function(){
		 		$(this).css("border-color","#dcdddd").css("color","#333333");
		 	})

		}
	}	





 	$("#home_body_control").find("a").eq(1).click(function(){
 		
 		$("#home_body_1_ul").animate({left:0},500);
 	})
 	$("#home_body_control").find("a").eq(0).click(function(){
 		
 		$("#home_body_1_ul").animate({left:-1200},500);
 	})







	function body_2(Data1,Data2,id1,id2){
	 	for(var i = 0;i < Data1.length;i++){
	 		var a1 = $("<a></a>");
	 		var img1 = $("<img/>");
	 		img1.attr("src",Data1[i].img);
	 		a1.attr("href",Data1[i].url);
	 		a1.append(img1);
	 		id1.append(a1);
	 	}

	 	for(var l = 0;l < Data2.length;l++){
	 		var li = $("<li></li>");
	 		var a2 = $("<a></a>");
	 		var img2 = $("<img/>");
	 		var p1 = $("<p></p>"); 
	 		
	 		
	
	 		a2.attr("href",Data2[l].url);
	 		img2.attr("src",Data2[l].img);
	 		p1.html(Data2[l].title);
	 				
	 		a2.append(img2).append(p1); 

	 		if(Data2[l].peculiarity){
	 			var p2 = $("<p></p>");
	 			p2.html(Data2[l].peculiarity); 
	 			a2.append(p2);
	 		}
	 		if(Data2[l].moods){ 	
	 			var p3 = $("<p></p>");  		
	 			p3.html(Data2[l].moods); 	
	 			a2.append(p3);		
	 		}
	 		if(Data2[l].cost && Data2[l].originalCost){
	 			var p3 = $("<p></p>");  
	 			var span = $("<span></span>");
	 			span.html(Data2[l].originalCost);
	 			p3.html(Data2[l].cost);
	 			p3.append(span);
	 			a2.append(p3);
	 		}
	 		// alert(id2)
	 		if(Data2[l].evaluate && Data2[l].form){
	 			var p2 = $("<p></p>");
	 			p2.html(""); 
	 			var p3 = $("<p></p>");
	 			p3.html(Data2[l].cost);
	 			var div = $('<div class="home_body_4_div2_Div"></div>');
	 			var p4 = $("<p></p>");
	 			var p5 = $("<p></p>");
	 			p4.html(Data2[l].evaluate);
	 			p5.html(Data2[l].form);
	 			div.append(p4).append(p5);
	 			a2.append(p2).append(p3).append(div);

	 			img2.css("width","170px").css("height","165px");
	 		}
 		
	 		li.append(a2);
	 		id2.append(li);

	 	}


		 
		 $("#home_body_4_div2").find("ul").find("li").hover(function(){
		 	$(this).find("div").css("display","block");
		 	
		 },function(){
		 	$(this).find("div").css("display","none");
		 })




	}






	 function body_5(Data,id,id2){
	 	for(var i = 0;i < Data.length;i++){
	 		var li = $("<li></li>");
	 		var a = $("<a></a>");
	 		var img = $("<img/>");
	 		var p1 = $("<p></p>"); 
	 		var p2 = $("<p></p>"); 	 		
	 		var span1 = $("<span></span>");
	 		

	 		

	 		a.attr("href",Data[i].url);
	 		img.attr("src",Data[i].img);
	 		p1.html(Data[i].title);
	 		p2.html(Data[i].describe);

	 		a.append(img).append(p1).append(p2);
	 		li.append(a);	 		

	 		

	 		id2.append(span1)
	 		id.find("ul").append(li);
	 	}
	 	var div2 = $('<div class="home_body_5_div_div2"></div>')
	 	var span3 = $("<span></span>");
	 	var span4 = $("<span></span>");
	 	div2.append(span3).append(span4);
	 	id.append(div2);





		
		//左右箭头
		id.hover(function(){
			$(this).find($(".home_body_5_div_div2")).find("span").css("display","block")
		},function(){
			$(this).find($(".home_body_5_div_div2")).find("span").css("display","none")
		})
		var homeTimer = null;
		if(Data.length >= 2){
			var num1 = 0;
			clearInterval(homeTimer);
			homeTimer = setInterval(body5,2000)

			//点击切换
			id2.on("click","span",function(){
				clearInterval(homeTimer);
				num1 = $(this).index();
				id2.find("span").css("background","#333")
				id.find("ul").find("li").fadeOut("100");
				id2.find("span").eq(num1).css("background","#f0a138")
				id.find("ul").find("li").eq(num1).fadeIn("100");
				num1++;
				if(num1 >= Data.length - 1){
					num1 = -1;
				}
				homeTimer = setInterval(body5,2000)
			})

			//左右箭头点击
			id.on("click",id2.find("span"),function(){	
				clearInterval(homeTimer);	
				id.find("ul").find("li").fadeOut("100");		
				id2.find("span").css("background","#333")		
				id2.find("span").eq(num1 + 1).css("background","#f0a138")
				id.find("ul").find("li").eq(num1 + 1).fadeIn("100");
				num1++
				if(num1 >= Data.length - 1){
					num1 = -1;
				}
				homeTimer = setInterval(body5,2000)
			})

			$(".home_body_5_div").hover(function(){
				clearInterval(homeTimer);
			},function(){
				homeTimer = setInterval(body5,2000)
			})
		}

		function body5(){		
				id.find("ul").find("li").fadeOut("100");		
				id2.find("span").css("background","#333")		
				id2.find("span").eq(num1 + 1).css("background","#f0a138")
				id.find("ul").find("li").eq(num1 + 1).fadeIn("100");
				num1++;
				if(num1 >= Data.length - 1){
					num1 = -1;
				}
			}
		
	}


})


//侧边栏导航加载
function aside(data,id){
	for(var i = 0 ;i < data.length;i++){
		var a = $("<a></a>");
		a.attr("href",data[i].url);
		a.html(data[i].title);
		$(id).append(a);
	}
}

//侧边栏详情加载
function aside_aside(data,id){
	$(id).html("");
	if(data.length > 7){
		var ul1 = $("<ul></ul>");
		var ul2 = $("<ul></ul>");
		for(var i = 0 ;i < 7;i++){
			
			var li = $("<li></li>");
			var a = $("<a></a>");
			var img = $("<img />");
			var span = $("<span></span>")
			a.attr("href",data[i].url);
			// alert(data[i].img)
			img.attr("src",data[i].img);
			span.html(data[i].title);
			a.append(img);
			a.append(span);
			li.append(a);
			ul1.append(li);
			$(id).append(ul1);
		}
		for(var i = 7;i < data.length;i++){
			
			var li = $("<li></li>");
			var a = $("<a></a>");
			var img = $("<img />");
			var span = $("<span></span>")
			a.attr("href",data[i].url);
			img.attr("src",data[i].img);
			span.html(data[i].title);
			a.append(img);
			a.append(span);
			li.append(a);
			ul2.append(li);
			$(id).append(ul2);
		}
	}else{
		var ul = $("<ul></ul>");
		for(var i = 0 ;i < data.length;i++){
			
			var li = $("<li></li>");
			var a = $("<a></a>");
			var img = $("<img />");
			var span = $("<span></span>")
			a.attr("href",data[i].url);
			img.attr("src",data[i].img);
			span.html(data[i].title);
			a.append(img);
			a.append(span);
			li.append(a);
			ul.append(li);
			$(id).append(ul);
		}
	}
}


