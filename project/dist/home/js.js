

define(function(){
    
	var jsFun = function(){
		sc_car()
		$.ajax({
			url:"json/JSON.json",
			type:"GET",
			success:function(data){
				//加载红辣椒手机数据
				var children1 = data[0].children;
				nav(children1,"#home_nav_nav2_ul");
				
				//加载小辣椒手机数据

				var children2 = data[1].children;
				nav(children2,"#home_nav_nav3_ul");
			}
		})


		
		//划过显示购物车
		$("#home_nav_sho").hover(function(){

			$("#shopping").fadeIn(100);
			$("#home_nav_sho_a").css("border","1px solid #c3c2c2");
			none();
		},function(){
			$("#shopping").fadeOut(100);
			$("#home_nav_sho_a").css("border","0");
		})


		//加载购物车商品数量
		function sc_car(){
			var sc_str = $.cookie("commodity");
			if(sc_str){
				//购物车商品不为空
				var sc_arr = JSON.parse(sc_str);
				var sc_num = 0; //记录商品总数
				for(var i in sc_arr){
					sc_num += Number(sc_arr[i].num);
					// alert(sc_num)
				}
				$("#home_nav_sho_p").html(sc_num);
				none()
			}
		}
	 

		
		function none(){
			if($("#home_nav_sho_p").html() == 0){
				$("#shopping_div2").find("ul").css("display","none");
				$("#shopping_div2").find("#shopping_div2_ul_div3").css("display","none");
				$("#shopping_div2_div1").css("display","block");
				$("#shopping_div2_div2").css("display","block");
			}else{
				$("#shopping_div2").find("ul").css("display","block");
				$("#shopping_div2").find("#shopping_div2_ul_div3").css("display","block");
				$("#shopping_div2_div1").css("display","none");
				$("#shopping_div2_div2").css("display","none");
			}
			
		}

		/*
		==================== 导航栏数据加载函数 ==========================
	 */

	 	$("#nav").hover(function(){
	 		$("#nav").css("background","rgba(0,0,0,0.5)")
	 	},function(){
	 		$("#nav").css("background","rgba(0,0,0,0.2)")
	 	})
	 	$(document).scroll(function(){
	 		$("#nav").css("background","rgba(0,0,0,0.1)")
	 	})


		//
		function nav(data,id){
				for(var i = 0 ;i < data.length;i++){
				var li = $('<li><a class="home_nav_nav2_ul_a"><p><img class="home_nav_nav2_ul_img"/></p><p class="home_nav_nav2_ul_p1"></p><p class="home_nav_nav2_ul_p2"></p></a></li>')
				var li = $("<li></li>");
				var a = $("<a></a>");
				var p1 = $("<p></p>");
				var img = $("<img />")
				var p2 = $("<p></p>");
				var p3 = $("<p></p>");
				a.attr("href",data[i].url);
				p2.html(data[i].title);
				p3.html(data[i].cost);
				img.attr("src",data[i].img);
				p1.append(img);
				a.append(p1);
				a.append(p2);
				a.append(p3);
				li.append(a);
				$(id).append(li);
			}
		}






	/*
		================= 红辣椒手机导航栏划过 =========================
	 */




		// alert($("#home_navigation").find("li").eq(0))
		$("#home_navigation").find("li").eq(0).hover(function(){

			$("#home_nav_nav2").css("display","block")
		},function(ev){
			$("#home_nav_nav2").css("display","none")
		})

		$("#home_nav_nav2").mouseover(function(){
			$("#home_nav_nav2").css("display","block")
		})
		$("#home_nav_nav2").mouseout(function(){
			$("#home_nav_nav2").css("display","none")
		})
		//划入变色
		$("#home_nav_nav2").on("mouseover","li",function(){
			$(this).css("backgroundColor","rgba(255,255,255,0.7)")
		})
		$("#home_nav_nav2").on("mouseout","li",function(){
			$(this).css("backgroundColor","")
		})



	/*
		=================== 小辣椒手机导航栏划过 ============================
	 */



		//
		$("#home_navigation").find("li").eq(1).hover(function(){
			$("#home_nav_nav3").css("display","block")

		},function(ev){
			$("#home_nav_nav3").css("display","none")
		})

		$("#home_nav_nav3").mouseover(function(){
			$("#home_nav_nav3").css("display","block")
		})
		$("#home_nav_nav3").mouseout(function(){
			$("#home_nav_nav3").css("display","none")
		})
		//划入变色
		$("#home_nav_nav3").on("mouseover","li",function(){
			$(this).css("backgroundColor","rgba(255,255,255,0.7)")
		})
		$("#home_nav_nav3").on("mouseout","li",function(){
			$(this).css("backgroundColor","")
		})


		
		/*
			========================== 右侧边-客服-动画 =============================
		 */

		$("#aside_right_div1").hover(function(){
		 	$("#aside_right_div3").css("display","block");
		},function(){
		 	$("#aside_right_div3").css("display","none");
		})

		$("#aside_right_div3").hover(function(){
		 	$(this).css("display","block");
		},function(){
		 	$(this).css("display","none");
		})

		// alert($(document).height())
		$(document).scroll(function(){
			if($(document).scrollTop() > ($(document).height() / 3)){
				$("#aside_right_div2").css("display","block");
			}else{
				$("#aside_right_div2").css("display","none");
			}
		})

		$("#aside_right_div2").click(function(){
			$('body,html').animate({scrollTop:0},500);
		})
	}	
	return {
		jsFun:jsFun
	}
})

