
require.config({
	paths: {
		"js": "js",
		"abc": "主页",
		"jquery": "jquery-1.10.1.min"
	}
})
require(["js","abc","jquery"], function(js,abc,$){
	js.jsFun();
	abc.homeFun();
})