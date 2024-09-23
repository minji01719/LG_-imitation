console.clear();
AOS.init();

function SlideUpAndDown() {
	$(".care-menger__drop-down-menu").slideUp();

	$(".care-menger-box")
		.mouseenter(function () {
			$(".care-menger__drop-down-menu").slideDown(600);
		})
		.mouseleave(function () {
			$(".care-menger__drop-down-menu").slideUp(600);
		});
}

SlideUpAndDown();

function ProductImgBox__init() {
	const swiper = new Swiper(".product-img-box .swiper", {
		// 스와이퍼 속성 정의
		loop: true, // 슬라이드 반복여부
		speed: 1000, // 슬라이드 넘어가는 속도
		slidesPerView: 2, // 한 화면에서 보여질 슬라이드 개수
		slidesPerGroup: 1, // 슬라이시 넘길 슬라이드 개수
		spaceBetween: 30, // 슬라이드 사이의 여백
		navigation: {
			nextEl: ".slide-box .swiper-button__next",
			prevEl: ".slide-box .swiper-button__prev"
		},
		// 반응형 옵션
		breakpoints: {
			789: {
				slidesPerView: 4
			}
		},
		pagination: {
			type: "progressbar",
			el: ".slide-box .swiper-pagination"
		}
	});
}

ProductImgBox__init();

// 히든메뉴 반응형
function HiddenMenuBox__init() {
	$(".full-menu").click(function () {
		$(".hidden-menu-box").addClass("active");
	});

	$(".hidden-menu-box__content, .close-button").click(function () {
		$(".hidden-menu-box").removeClass("active");
	});

	$(".hidden-menu-box .menu-box").click(function (e) {
		e.stopPropagation();
		return false;
	});
}

HiddenMenuBox__init();

// 모바일 히든(아코디언)메뉴
function MobileHiddenMenu__init() {
	$(".mobile-hidden-menu > .hidden-menu-1 > li").click(function () {
		let $this = $(this);
		let has = $(this).hasClass("active");

		$this.siblings(".active").find("ul").stop().slideUp(300);
		$this.siblings(".active").find(".active").removeClass("active");
		$this.siblings(".active").removeClass("active");

		if (has) {
			$this.find("> ul").stop().slideUp(300);
			$this.find(".active").removeClass("active");
			$this.removeClass("active");
		} else {
			$this.find("> ul").stop().slideDown(300);
			$this.addClass("active");
		}
	});

	$(".mobile-hidden-menu ul").click(function () {
		return false;
	});
}

MobileHiddenMenu__init();

// 클릭했으때 top으로
function FloatingClick() {
	$(document).ready(function () {
		$(".floating").bind("click", function () {
			$("html, body").animate({ scrollTop: "0" }, 500);
		});
	});
}

FloatingClick();
