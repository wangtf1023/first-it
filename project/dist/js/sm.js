$(function(){ 

	//导航栏效果
	$("#nav").hover(function(){
 		$("#nav").css("background","rgba(0,0,0,0.5)");
 	},function(){
 		$("#nav").css("background","rgba(0,0,0,0.5)");
 	})
 	$(document).scroll(function(){
 		// alert($(document).scrollTop())
 		if($(document).scrollTop() <= 1){
	 		$("#nav").css("background","rgba(0,0,0,0.5)");
	 	}else{
	 		$("#nav").css("background","rgba(0,0,0,0.1)");
	 	}

 	})
 	


	
	//加载数据
	$.ajax({
		url:"json/sm.json",
		type:"GET",
		success:function(data){
			//加载商品导航
			var Data1 = data[0].children; 
			var id1 = $("#red_body_div1_div1").find("div");
			Nav(Data1,id1);

			//加载适配机型
			var Data2 = data[1].children;
			var id2 = $("#red_body_div1_div2").find("div");
			Nav(Data2,id2);

			//加载商品列表
			var Data3 = data[2].children;
			var id3 = $("#red_body_3").find("ul");
			var num1 = 0;
			var num2 = Data3.length;
			list(Data3,id3,num1,num2);

			//商品分类点击
			$("#red_body_div1_div1").find("div").on("click","span",function(){
				var ul = $("#red_body_3").find("ul");
				$("#red_body_div1_div1").find("div").find("span").css("color","#333")
				$(this).css("color","#ef3d39")
				ul.html("");

				var n = $(this).index();
				switch(n){
					case 0:
						list(Data3,id3,num1,num2);
						break;
					case 1:
						var num3 = 11;
						var num4 = 13;
						list(Data3,id3,num3,num4);
						break;
					case 5:
						var num5 = 13;
						var num6 = 15;
						list(Data3,id3,num5,num6);
						break;
					case 7:
						var num7 = 15;
						var num8 = 16;
						list(Data3,id3,num7,num8);
						break;
					case 9:
						var num9 = 16;
						var num10 = 17;
						list(Data3,id3,num9,num10);
						break;
					case 10:
						var num11 = 17;
						var num12 = 18;
						list(Data3,id3,num11,num12);
						break;
					case 11:
						var num13 = 18;
						var num14 = 19;
						list(Data3,id3,num13,num14);
						break;
					case 14:
						var num15 = 19;
						var num16 = 20;
						list(Data3,id3,num15,num16);
						break;
					
				}

			})
		}
	})


	//加载商品导航
	function Nav(Data,id){
		for(var i = 0;i < Data.length;i++){
			var span = $("<span></span>");
			
			span.html(Data[i].title);
			span.attr("href",Data[i].url);
			
			id.append(span);
			
		}
	}

	//商品列表加载
	function list(Data,id,num1,num2){
		for(var i = num1;i < num2;i++){

			var li = $("<li></li>");
			var div4 = $('<div class="red_body_3_div"></div>"');
			var img = $("<img />");
			var p = $("<p></p>");
			var div1 = $('<div class="red_body_3_div2"></div>');
			var span1 = $("<span></span>");
			var div2 = $('<div class="red_body_3_div3 vehicle"></div>');
			var a = $("<a></a>");

			a.attr("href",Data[i].url);
			img.attr("src",Data[i].img);
			p.html(Data[i].title);
			span1.html(Data[i].cost);
			div1.append(span1);
			div2.html(Data[i].state);
			div2.attr("id",i + 17)
			a.append(img);

			if((i + 1) % 4 == 0){
				li.css("border-right","none").css("width","301")
			}

			if(Data[i].price){
				var span2 = $('<span class="red_body_3_span"></span>');
				span2.html(Data[i].price);
				div1.append(span2);
			}
			div4.append(a).append(p).append(div1).append(div2);
			
			if(Data[i].trait){
				var div3 = $('<div class="red_body_3_div4"></div>');
				div3.html(Data[i].trait);
				div4.append(div3);
			}
			li.append(div4);
			id.append(li);
		}
		//加入购物车按钮划入
		$("#red_body_3").find("ul").find("li").hover(function(){
			$(this).find($(".red_body_3_div3")).css("display","block");
			// none()
		},function(){
			$(this).find($(".red_body_3_div3")).css("display","none");
		})	
		
	}




	$("#red_body_3").find("ul").on("click",".red_body_3_div3",function(){
		// alert(this.id)
		var id = this.id;
		// 判断是否是第一次cookie
		var first = $.cookie("commodity") == null ? true : false;
		var same = false;//判断是否有相同商品

		if(first){ 
			//第一次
			$.cookie("commodity",'[{"id":' + id + ',"num":1}]');
		}else{
			//不是第一次
			//取出原来cookie
			var str = $.cookie("commodity");
			var arr = JSON.parse(str);
			// alert(arr)
			//遍历
			for(var i in arr){
				//判断是否有相同id
				if(arr[i].id == id){
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
					id: id,
					num: 1
				}
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				// alert(cookieStr);
				$.cookie("commodity", cookieStr);
			}


		}
		
		//刷新购物车数量
		sc_car();
	})

})