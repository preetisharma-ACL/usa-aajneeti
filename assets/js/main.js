/*-----------------------------------------------------------------------
Template Name      : Lucxorio - Luxury Hotel and Resort Booking HTML Template
Author             : pus_infotech
Author Portfolio   : https://themeforest.net/user/pus_infotech
Version            : 1.0.0 
-------------------------------------------------------------------------
JS TABLE OF CONTENTS
-------------------------------------------------------------------------
1. search-box
2. mobile menu
3. offcanvas sidebar
4. header sticky
5. background image
6. hero slider
7. testimonials slider one
8. testimonials slider two
9. testimonials slider three
10. partners slider
11. blog slider
12. related slider
13. gallery magnificPopup
14. video magnificPopup
15. counter
16. syotimer
17. progress bar count
18. mousecursor
19. wow animation
20. scroll to top
21. back-top
22. preloader
-----------------------------------------------------------------------*/
(function ($) {
	"use strict";
	// start document ready function
	$(document).ready(function () {
		// ------------------------ 1. search-box
		$(document).on("click", ".search-btn, .close", function (e) {
			e.preventDefault(); // stop anchor from scrolling to top
			$("#search-box").toggleClass("active", $(this).hasClass("search-btn"));
		});

		// ------------------------ 2. mobile menu
		$("#mobile-menu").meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "1199",
			meanExpand: ['<i class="fa-solid fa-plus"></i>'],
		});

		// ------------------------ 3. offcanvas sidebar		 
		$(document).on("click", "#offcanvas-sidebar li.dropdown .dropdown-btn", function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});

		// ------------------------ 4. header sticky	 
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$(".header .header-lower").addClass("sticky");
			} else {
				$(".header .header-lower").removeClass("sticky");
			}
		});

		// ------------------------ 5. background image
		$("[data-img-src]").each(function () {
			var src = $(this).attr("data-img-src");
			$(this).css('background-image', 'url(' + src + ')');
			$(this).removeAttr("data-img-src");
		});

		// ------------------------ 6. hero slider
		if ($('.hero-slider').length > 0) {
			const heroSlider = new Swiper(".hero-slider", {
				loop: true,
				effect: "fade",
				fadeEffect: {
					crossFade: true
				},
				slidesPerView: 1,
				spaceBetween: 0,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
			});
		}

		// ------------------------ 7. testimonials slider one
		if ($('.testimonials-slider-one').length > 0) {
			const testimonialsSlider = new Swiper(".testimonials-slider-one", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				autoplay: {
					delay: 5500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".dot",
					clickable: true,
				}
			});
		}

		// ------------------------ 8. testimonials slider two
		if ($('.testimonials-slider-two').length > 0) {
			const testimonialsTwoSlider = new Swiper(".testimonials-slider-two", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					567: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 3,
					},
				}
			});
		}

		// ------------------------ 9. testimonials slider three
		if ($('.testimonials-slider-three').length > 0) {
			const testimonialsThreeSlider = new Swiper(".testimonials-slider-three", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					567: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					991: {
						slidesPerView: 3,
					},
				}
			});
		}

		// ------------------------ 10. partners slider
		if ($('.partners-slider').length > 0) {
			const partnersSlider = new Swiper(".partners-slider", {
				loop: true,
				slidesPerView: 2,
				spaceBetween: 30,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					567: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 5,
					}
				}
			});
		}

		// ------------------------ 11. blog slider
		if ($('.blog-slider').length > 0) {
			const blogSlider = new Swiper(".blog-slider", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 20
					}
				},
			});
		}
		// ------------------------ 12. related slider
		if ($('.related-slider').length > 0) {
			const relatedSlider = new Swiper(".related-slider", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 20
					}
				},
			});
		}

		// ------------------------ 13. gallery magnificPopup 
		if ($(".photo-popup").length) {
			var groups = {};
			$(".photo-popup").each(function () {
				var id = parseInt($(this).attr("data-group"), 10);
				if (!groups[id]) {
					groups[id] = [];
				}
				groups[id].push(this);
			});
			$.each(groups, function () {
				$(this).magnificPopup({
					type: "image",
					closeOnContentClick: true,
					closeBtnInside: false,
					gallery: {
						enabled: true
					}
				});
			});
		}

		// ------------------------ 14. video magnificPopup
		$(".video-popup").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});

		// ------------------------ 15. counter
		$(".counter-item").appear(function () {
			var $count = $(this),
				p = $count.find(".counter-value").attr("data-stop"),
				q = parseInt($count.find(".counter-value").attr("data-speed"), 10);

			if (!$count.hasClass('counted')) {
				$count.addClass('counted');
				$({
					countNum: $count.find(".counter-value").text()
				}).animate({
					countNum: p
				}, {
					duration: q,
					easing: "linear",
					step: function () {
						$count.find(".counter-value").text(Math.floor(this.countNum));
					},
					complete: function () {
						$count.find(".counter-value").text(this.countNum);
					}
				});
			}
		});

		// ------------------------ 16. syotimer
		$(".coming-soon-timer").syotimer({
			year: 2026, // Show Year
			month: 12, // Show Month
			day: 15, // Show Day
			hour: 20, // Show Hour
			minute: 30 // Show Minute
		});

		// ------------------------ 17. progress bar count
		$(".progress-bar-count").appear(
			function () {
				var appcount = $(this);
				var percent = appcount.data("percent");
				$(appcount).css("width", percent).addClass("counted");
			}, {
			accY: -50
		});

		// ------------------------ 18. mousecursor 
		const $cursorInner = document.querySelector(".cursor-inner");
		const $cursorOuter = document.querySelector(".cursor-outer");
		if ($("body").length && $cursorInner && $cursorOuter) {
			$(window).on("mousemove", function (e) {
				$cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
				$cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
			});

			$("body").on("mouseenter", "a, .cursor-pointer", function () {
				$cursorInner.classList.add("cursor-hover");
				$cursorOuter.classList.add("cursor-hover");
			}).on("mouseleave", "a, .cursor-pointer", function () {
				if (!$(this).is("a") || !$(this).closest(".cursor-pointer").length) {
					$cursorInner.classList.remove("cursor-hover");
					$cursorOuter.classList.remove("cursor-hover");
				}
			});

			$cursorInner.style.visibility = "visible";
			$cursorOuter.style.visibility = "visible";
		}

		// ------------------------ 19. wow animation 
		new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		}).init();

		// ------------------------ 20. scroll to top
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 20) {
				$("#back-top").addClass("show");
			} else {
				$("#back-top").removeClass("show");
			}
		});

		// ------------------------ 21. back-top
		$(document).on("click", "#back-top", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	// end document ready function 


	//  tabs(tech stack part) section in home page
	const tabs = document.querySelectorAll('.tech-tabs li');
	const panes = document.querySelectorAll('.tab-pane');

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(t => t.classList.remove('active'));
			panes.forEach(p => p.classList.remove('active'));

			tab.classList.add('active');
			document.getElementById(tab.dataset.tab).classList.add('active');
		});
	});


	// process step active on scroll (process section in home page)
	document.addEventListener("scroll", () => {
		const steps = document.querySelectorAll(".process-step");
		const dots = document.querySelectorAll(".process-dot");
		steps.forEach((step, index) => {
			const rect = step.getBoundingClientRect();
			if (rect.top < window.innerHeight * 0.65) {
				step.classList.add("active");
				dots[index].classList.add("active");
			}
		});
	});

	// home page design section background images

	if (window.innerWidth >= 980) {
		const section = document.querySelector(".people-section");
		if (section) {
			const cards = {
				lf: document.querySelector(".left.far"),
				lm: document.querySelector(".left.mid"),
				ln: document.querySelector(".left.near"),
				c: document.querySelector(".center"),
				rn: document.querySelector(".right.near"),
				rm: document.querySelector(".right.mid"),
				rf: document.querySelector(".right.far"),
			};

			let ticking = false;

			const easeOut = t => 1 - Math.pow(1 - t, 3);
			const lerp = (a, b, t) => a + (b - a) * t;

			function animate() {
				const rect = section.getBoundingClientRect();
				const start = window.innerHeight;
				const end = -section.offsetHeight / 2;

				let progress = (start - rect.top) / (start - end);
				progress = Math.min(Math.max(progress, 0), 1);
				const t = easeOut(progress);

				cards.lf.style.transform =
					`translateY(${lerp(-540, 0, t)}px) rotate(${lerp(0, -20, t)}deg)`;
				cards.lm.style.transform =
					`translateY(${lerp(-370, 0, t)}px) rotate(${lerp(0, -14, t)}deg)`;
				cards.ln.style.transform =
					`translateY(${lerp(-280, 0, t)}px) rotate(${lerp(0, -8, t)}deg)`;

				cards.c.style.transform =
					`translateY(${lerp(-210, 0, t)}px)`;

				cards.rn.style.transform =
					`translateY(${lerp(-280, 0, t)}px) rotate(${lerp(0, 8, t)}deg)`;
				cards.rm.style.transform =
					`translateY(${lerp(-370, 0, t)}px) rotate(${lerp(0, 14, t)}deg)`;
				cards.rf.style.transform =
					`translateY(${lerp(-540, 0, t)}px) rotate(${lerp(0, 20, t)}deg)`;
			}

			document.addEventListener("scroll", () => {
				if (!ticking) {
					requestAnimationFrame(() => {
						animate();
						ticking = false;
					});
					ticking = true;
				}
			});

			window.addEventListener("load", animate);
		}
	}


	if (window.innerWidth <= 768) {
		// MOBILE: JS animation completely OFF
		document.querySelectorAll('.people-card').forEach(card => {
			card.style.transform = 'none';
		});
	}


	// Toggle dropdown
	const header = document.querySelector(".toc-header");
	const list = document.querySelector(".toc-list");

	list.classList.add("hide");

	header.addEventListener("click", () => {
		list.classList.toggle("hide");
	});

	window.addEventListener("scroll", () => {
		let current = "";

		sections.forEach(section => {
			const sectionTop = section.offsetTop - 150;
			if (scrollY >= sectionTop) {
				current = section.getAttribute("id");
			}
		});

		links.forEach(link => {
			link.classList.remove("active");
			if (link.getAttribute("href") === "#" + current) {
				link.classList.add("active");
			}
		});
	});




	// ------------------------ 22. preloader 
	function preloader() {
		$(window).on("load", function () {
			$(".preloader").delay(600).fadeOut();
		});
	}
	preloader();
})(jQuery); // end jQuery