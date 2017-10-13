var gulp = require("gulp");
var connect = require("gulp-connect");



gulp.task("html",function(){

	return gulp.src("主页.html")
	.pipe(gulp.dest("dist"))
	
	.pipe(connect.reload());
})
gulp.task("css",function(){
	return gulp.src("css/主页.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("serve",function(){
	connect.server({
		root: "dist",
		livereload: true
	})
})

gulp.task("watch",function(){
	gulp.watch("主页.html",["html"]);
	gulp.watch("css/主页.css",["css"]);
})

gulp.task("build",["css","html"]);

gulp.task("default",["watch","serve"]);