
$(function(){
	//清除购物车内容
	$("#shopping_div2").find("ul").html("");
	$("#shopping_div2_ul_div3_p").html("");
	//加载购物车内容
	minute();
	sc_car();
	

	$.ajax({
		url:"json/JSON.json",
		type:"GET",
		success:function(data){

			var children1 = data[0].children;
			nav(children1,"#home_nav_nav2_ul");
			var children2 = data[1].children;
			nav(children2,"#home_nav_nav3_ul");
		}
	})



 	$("#home_nav_inp").find("div").hover(function(){
 		$("#home_nav_inp").css("overflow","visible");
 		$("#home_nav_inp").find("input").css("display","block").css("border","1px solid #c3c2c2")
 		$("#home_nav_inp").find("input").stop().animate({left:4},500);	
 	},function(){
 		$("#home_nav_inp").css("overflow","hidden");
 		$("#home_nav_inp").find("input").stop().animate({left:154},500,function(){
 			$("#home_nav_inp").find("input").css("border","none").css("display","none");
 		});
 	})
 	$("#home_nav_inp").find("input").hover(function(){
 		$(this).css("display","block");
 		$("#home_nav_inp").find("input").stop().animate({left:4},500);	
 	},function(){
 		$("#home_nav_inp").find("input").stop().animate({left:154},500,function(){
 			$("#home_nav_inp").find("input").css("border","none").css("display","none");
 		});
 	})


 	$("#shopping_div2_ul_div3").find("button").click(function(){
 		btn();
 	})

 	var btn = (function(){
 		var div = null;
 		var btn_fun = function(){
 			if(!div){
 				div = $('<div id="btn_fun">您的钱包空空如也~</div>');
 				var but = $("<button>我在逛逛~</button>");
 				div.append(but);
 				$("body").append(div);

 				but.click(function(){
 					div.remove();
 					div = null;
 				})
 			}
 		}
 		return btn_fun;
 	})()


 	$("#home_nav_sho_a").click(function(){
 		one();
 	})

 	var one = (function(){
 		var one_div = null;
 		var one_one = function(){
 			if(!one_div){
 				one_div = $('<div id="one"></div>');
 				var p = $("<p>总额度 :</p>");
 				var span = $("<span>0</span>");
 				p.append(span);
 				var button = $("<button>确定</button>");

 				one_div.append(p).append(button);
 				$("body").append(one_div);

 				button.click(function(){
 					one_div.remove();
 					one_div = null;
 				})
 				setInterval(function(){
 					if($("#shopping_div2_ul_div3_p").html() == "" || $("#shopping_div2_ul_div3_p").html() == "0"){
 						span.html("您还没有选购商品呢").css("font-size","16px")
 					}else{
 						span.html($("#shopping_div2_ul_div3_p").html()).css("font-size","26px");
 					}
 					
 				},10)
 													
 			}			
 		}
    	return one_one;
 	})()

	
	
	$("#home_nav_sho").hover(function(){

		$("#shopping").fadeIn(100);
		$("#home_nav_sho_a").css("border","1px solid #c3c2c2");
		//清除购物车内容
		$("#shopping_div2").find("ul").html("");
		$("#shopping_div2_ul_div3_p").html("");
		//加载购物车内容
		minute();
		
		sc_car();
	},function(){
		$("#shopping").fadeOut(100);
		$("#home_nav_sho_a").css("border","0");
	})
 




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


	$("#home_navigation").find("li").eq(0).hover(function(){
		$("#home_nav_nav2").css("display","block")
		// $("#home_nav_nav2").fadeIn("100");
	},function(ev){
		$("#home_nav_nav2").css("display","none")
		// $("#home_nav_nav2").fadeOut("100");
	})

	$("#home_nav_nav2").mouseover(function(){
		$("#home_nav_nav2").css("display","block")
		// $("#home_nav_nav2").fadeIn("100");
	})
	$("#home_nav_nav2").mouseout(function(){
		$("#home_nav_nav2").css("display","none")
		// $("#home_nav_nav2").fadeOut("100");
	})
	//划入变色
	$("#home_nav_nav2").on("mouseover","li",function(){
		$(this).css("backgroundColor","rgba(255,255,255,0.7)")
	})
	$("#home_nav_nav2").on("mouseout","li",function(){
		$(this).css("backgroundColor","")
	})







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
	
	
})





	//
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


	function minute(){
		$.ajax({
			url:"json/shopping.json",
			type:"GET",
			success:function(data){
				var sc_str = $.cookie("commodity");
				if(sc_str){
					var sc_arr = JSON.parse(sc_str);
					
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
									// alert($(this).parent().parent().attr("id"))
									$(this).closest("li").css("display","none");
									// $(this).closest("li").remove();
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
						none();
					})		
				}
			}
		})
		none();
	}


	
	//
	function none(){
		if($("#home_nav_sho_p").html() <= 0){
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



 	$(".vehicle").click(function(){
 		$( this ).effect( "transfer", { to: $("#home_nav_sho").find("a") }, 1000 );
 	})

 	//拖动加入购物车
 	/*$( ".vehicle" ).mousedown(function(){

 		var div = $('<div id="vehicle_div"></div>');
 		var img = $("<img />");
 		div.css("width","50").css("height","50").css("position","absolute").css("top","90px").css("left","  50px");
 		img.attr("src","by-img/1.jpg").css("width","50");
 		div.append(img);
 		$("body").append(div);
 		$(document).mousemove(function(){
 			$( "#vehicle_div" ).draggable();
			$( "#shopping" ).droppable({
			    drop: function() {
			   		alert( "dropped" );
			    }
			});h
 		})
 	})*/
