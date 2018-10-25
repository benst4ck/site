//es6语法：
import Vue from "../node_modules/vue/dist/vue.common.js";//其实不用写完 会自动查找 可以直接写 import Vue from "vue";
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
import ninja from './components/ninja/main';
import backToTop from './components/backToTop/main';
import nav from './components/nav/main';
import lightning from './components/lightning/main';
import toggleBtn from './components/toggleBtn/main';

// import listItem from './components/listItem/main';
import $ from 'jquery';

Vue.config.debug = true;//开启错误提示
new Vue(ninja);
new Vue(backToTop);
new Vue(nav);
new Vue(lightning);
new Vue(toggleBtn);
// new Vue(listItem);

//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 2;

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		//Adds active class to make button visible
		$(".m-backtotop").addClass("active");
		
	} else {
		//Removes active class to make button visible
		$(".m-backtotop").removeClass("active");
		
	}
});


//Scrolls the user to the top of the page again
$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$("#ninja").mouseenter(
	() => {
		$("#lightning").toggleClass("lightning");
		$("#lightning").toggleClass("lightningbg");
	}
)

$(".menu-toggle").click(
	() => {
		$(".menu-toggle").toggleClass("active");
		$("#nav").toggleClass("menu-hidden");
		$("#nav").toggleClass("menu-active");
	}
)

$(document).ready(function(e) {			
		var navTopOffset= $('#nav').offset().top;  // 相对于文档顶部的偏移量
		var btnTopOffset= $('#menu-toggle').offset().top;
		var heightLightning = $('#lightning').height();
		var fixingNav = navTopOffset - heightLightning;
		var fixingBtn = btnTopOffset - heightLightning;


	$(window).scroll(function(e){
		var scrolling = $(document).scrollTop();// 页面滚动量
			if(scrolling>heightLightning){
				$('#nav').css({"position":"fixed", "top":fixingNav});
				$('#menu-toggle').css({"position":"fixed", "top":fixingBtn});
				
			} else {
				$('#nav').css({"position":"", "top":"700px"});
				$('#menu-toggle').css({"position":"", "top":"690px"});
			}
		})
});