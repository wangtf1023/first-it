
var gulp = require("gulp");



gulp.task("copy-css", function(){
	return gulp.src("css/主页.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css1", function(){
	return gulp.src("css/css.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css2", function(){
	return gulp.src("css/红辣椒手机.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css3", function(){
	return gulp.src("css/购买.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css4", function(){
	return gulp.src("css/register_css.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css5", function(){
	return gulp.src("css/login_css.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css6", function(){
	return gulp.src("css/小辣椒.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("copy-css7", function(){
	return gulp.src("css/服务.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		livereload: true
	})
})

gulp.task("copy-index", function(){
	return gulp.src("主页.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index1", function(){
	return gulp.src("红辣椒.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index2", function(){
	return gulp.src("购买.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index3", function(){
	return gulp.src("登录.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index4", function(){
	return gulp.src("注册.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index5", function(){
	return gulp.src("小辣椒.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-index6", function(){
	return gulp.src("服务.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

gulp.task("copy-js", function(){
	return gulp.src("js/主页.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js1", function(){
	return gulp.src("js/red.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js2", function(){
	return gulp.src("js/购买.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js3", function(){
	return gulp.src("js/js.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("copy-js4", function(){
	return gulp.src("js/register.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js5", function(){
	return gulp.src("js/login.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js6", function(){
	return gulp.src("js/sm.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copy-js7", function(){
	return gulp.src("js/服务.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//启动一个监听程序
/*gulp.task("watch", function(){
	gulp.watch("主页.html", ["copy-index"]);
	gulp.watch("红辣椒.html", ["copy-index1"]);
	gulp.watch("购买.html", ["copy-index2"]);
	gulp.watch("css/主页.css", ["copy-css"]);
	gulp.watch("css/css.css", ["copy-css1"]);
	gulp.watch("css/红辣椒手机.css", ["copy-css2"]);
	gulp.watch("css/购买.css", ["copy-css3"]);
	gulp.watch("js/主页.js", ["copy-js"]);
	gulp.watch("js/red.js", ["copy-js1"]);
	gulp.watch("js/购买.js", ["copy-js2"]);
	gulp.watch("js/js.js", ["copy-js3"]);
	gulp.watch("css/login_css.css", ["copy-css5"]);
	gulp.watch("css/register_css.css", ["copy-css4"]);
	gulp.watch("登录.html", ["copy-index3"]);
	gulp.watch("注册.html", ["copy-index4"]);
	gulp.watch("js/register.js", ["copy-js4"]);
	gulp.watch("js/login.js", ["copy-js5"]);
	gulp.watch("js/sm.js", ["copy-js6"]);
	gulp.watch("小辣椒.html", ["copy-index5"]);
	gulp.watch("小辣椒.css", ["copy-css6"]);
	gulp.watch("js/服务.js", ["copy-js7"]);
	gulp.watch("服务.html", ["copy-index6"]);
	gulp.watch("css/服务.css", ["copy-css7"]);
})*/

//先要将整个工程创建出来
gulp.task("build", ["copy-js7","copy-index6","copy-css7","copy-js6","copy-index5","copy-css6","copy-js5","copy-js4","copy-index4","copy-index3","copy-css4","copy-css5","copy-js3","copy-index2","copy-js2","copy-css3","copy-index","copy-css","copy-js1","copy-js","copy-css2","copy-css1","copy-index1"]);


//默认任务
gulp.task("default", ["watch", "server"]);
















