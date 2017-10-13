

require.config({ 
	paths: {
		"js": "js",
		"By": "购买",
		"jquery": "jquery-1.10.1.min",
		"cookie":"jquery.cookie"
	}
})
 
require(["js","By","jquery","cookie"], function(js,By,$,cookie){
	alert($.cookie)
	By.BY();
	js.jsFun();
	
	
		//清除购物车内容
		$("#shopping_div2").find("ul").html("");
		$("#shopping_div2_ul_div3_p").html("");
		//加载购物车内容
		minute();
		sc_car();




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


		//加载购物车详情
		function minute(){
			$.ajax({
				url:"json/red.json",
				type:"GET",
				success:function(Data){
					var data = Data[2].children;
					var sc_str = $.cookie("commodity");
					if(sc_str){
						var sc_arr = JSON.parse(sc_str);
						var sc_num = 0;
						var html = "";
						var total = 0;
						for(var z in sc_arr){
							var li = $("<li></li>");
							var img = $("<img/>");
							var div1 = $('<div id="shopping_div2_ul_div1"></div>');
							var p1 = $("<p></p>");
							var p2 = $("<p>颜色 :</p>");
							var span1 = $("<span>金色</span>");
							var div2 = $('<div id="shopping_div2_ul_div2"></div>');
							var p3 = $("<p></p>");
							var span2 = $("<span></span>");
							var span3 = $('<span class="shopping_div2_ul_dpan3"></span>');
							var button = $("<button>删除该商品</button>");

							img.attr("src",data[sc_arr[z].id].img);
							p1.html(data[sc_arr[z].id].title);
							span2.html(data[sc_arr[z].id].cost);
							span3.html(" x" + sc_arr[z].num);
							button.attr("id",sc_arr[z].id)

							p2.append(span1);
							div1.append(p1).append(p2);
							p3.append(span2).append(span3);
							div2.append(p3).append(button);

							li.append(img).append(div1).append(div2);

							$("#shopping_div2").find("ul").append(li);

							var price = Number(data[sc_arr[z].id].cost1) * Number(sc_arr[z].num);
							total += price;
							// alert(price)
							$("#shopping_div2_ul_div3_p").html("￥" + total + "元");	
							
						}

						//购物车商品删除
						$("#shopping_div2").find("li").find('#shopping_div2_ul_div2').find("button").click(function(){
						
							var str = $.cookie("commodity");
							var arr = JSON.parse(str);
							var id = $(this).attr("id");
							//遍历
							for(var i in arr){
								//查找相同id
								if(arr[i].id == id){
									//数量-1
									arr[i].num--;
									//转换数据类型附回去
									if(arr[i].num <= 0){
										arr.splice(i,1);
										
										var cookieStr = JSON.stringify(arr);
										$.cookie("commodity", cookieStr);
										sc_car();
										this.closest("li").remove();
									}else{
										var cookieStr = JSON.stringify(arr);
										$.cookie("commodity", cookieStr);	
										$(this).siblings("p").find($(".shopping_div2_ul_dpan3")).html(" x" + arr[i].num);
										sc_car();
									}
									price1 = Number(data[this.id].cost1);
									total -= price1;
									$("#shopping_div2_ul_div3_p").html("￥" + total + "元");						
								}
							}
						})		
					}
				}
			})
			none();
		}
		//购物车页面切换
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

})