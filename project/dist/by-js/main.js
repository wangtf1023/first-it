





//1、第一步，找到add.js的路径

require.config({
	paths: {
		"js": "js/js.js",
		"jquery": "js/jquery-1.10.1.min",
		"JQ":"js/jquery-1.11.1.js",
		"cookie":"js/jquery.cookie.js"
	}
})

//2、引入该模块，进行编码
require(["js", "jquery","JQ","cookie"], function(js,jquery,JQ,cookie){
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

				$("#by_body_2_2_div5_div1").click(function(){
					//取出原来cookie
					var str = $.cookie("commodity");
					var arr = JSON.parse(str);
					//遍历
					for(var i in arr){
						//判断是否有相同id
						if(arr[i].id == 2){
							//数量+1
							arr[i].num++;
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
							num: 1
						}
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						// alert(cookieStr);
						$.cookie("commodity", cookieStr);
					}

					
					//清除购物车内容
					$("#shopping_div2").find("ul").html("");
					$("#shopping_div2_ul_div3_p").html("");
					minute();
					sc_car();
				})


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
				
				fun(Dada6,id9);	



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
			}
		})

	/*
		===================== 滚动条固定 ================================
	 */


		var top = $("#by_body_3").offset().top + 60;
		$(document).scroll(function(){
			if($(document).scrollTop() >= top){
				$("#by_body_3_div").css("display","block")
			}else{
				$("#by_body_3_div").css("display","none")
			}
		})

	/*
		===================== 商品数量 ================================
	 */

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
		

	/*
		===================== 点击按钮动画 ================================
	 */


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
			img_timer = setInterval(img,1000)
			num = index;
			
		})

	/*
		===================== 图片展示动画 ================================
	 */
		
		img_timer = setInterval(img,1000)
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



	/*
		===================== 显示左右滑动 ================================
	 */


		$("#by_body_2_1_1").hover(function(){	
			// $("#by_body_2_1_3").find("div").fadeIn("100");
			$("#by_body_2_1_3").find("div").mouseover(function(){
				$("#by_body_2_1_3").find("div").css("display","block")
			})
		},function(){
			// $("#by_body_2_1_3").find("div").css("display","none")
		})

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
			
			img_timer = setInterval(img,1000)
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
			
			img_timer = setInterval(img,1000)
		})

		//划过暂停
		$("#by_body_2_1_1").hover(function(){
			clearInterval(img_timer);
		},function(){
			img_timer = setInterval(img,1000)
		})


	/*
		===================== 放大镜 ================================
	 */
	 	$("#by_body_2_1_4").click(function(){
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
	 	})
	 	






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
	})
})