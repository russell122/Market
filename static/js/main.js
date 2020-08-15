$(document).ready(function () {
	svg4everybody({});

	const header = document.querySelector('.header') // Берем хедер
	const headerHeight = parseInt(getComputedStyle(header).height) // Высоту хедера

	const fixedScroll = (e) => {
		// Если окно будет ниже высоты хедера
		if (headerHeight <= window.pageYOffset) {
			header.classList.add('fixed') // то добавляем класс
			// потом анимация .5 сек
			setTimeout(() => header.classList.add('active'), 50)
		} else {
			// если окно будет наверху то удаляем всё
			header.classList.remove('fixed')
			header.classList.remove('active')
		}
	}
	fixedScroll() // при загрузки странице запускаем

	window.addEventListener('scroll', fixedScroll) // вешаем на скролл функцию

	$('.header__burger').click(function (event) {
		$('.header__burger, .header__mnu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});


	$('.top__slider-wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});

	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
	});

	$('.brands__slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		],
	});

	$('.insta-block__slider').slick({
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
	});

});
// Реализация в шапке блока "выпадашки" с языками
let headerLangs = document.querySelectorAll('.header__lang');
let lang = document.querySelectorAll('.lang');

headerLangs.forEach((headerLang) => {
	headerLang.addEventListener('click', () => {
		lang.forEach((elem) => {
			elem.classList.toggle('show')
		})

	});
})



window.onclick = (e) => {
	if (!e.target.closest('.header__lang')) {
		lang.forEach((elem) => {
			elem.classList.remove('show')
		})

	}
}

// Конец

// Корзина 


let baskets = document.querySelectorAll('.header__center-notification');
let headerMascs = document.querySelectorAll('.header-masc');
let closeBaskets = document.querySelectorAll('.header-masc-top-img');


let clickBasket = function (baskets, headerMascs) {
	baskets.forEach((basket) => {
		basket.addEventListener('click', () => {
			headerMascs.forEach((masc) => {
				masc.classList.remove('hide');
				masc.classList.add('show');
			})
		})
	})
}


let closeBasket = function (closeBaskets, headerMascs) {
	closeBaskets.forEach((close) => {
		close.addEventListener('click', () => {
			headerMascs.forEach((masc) => {
				masc.classList.remove('show');
				masc.classList.add('hide');
			})
		})
	})
}

window.addEventListener('click', (e) => {
	if (!e.target.closest('.header-masc') && !e.target.closest('.header__center-notification')) {
		headerMascs.forEach((masc) => {
			masc.classList.remove('show');
			masc.classList.add('hide');
		})
	}
})

clickBasket(baskets, headerMascs);
closeBasket(closeBaskets, headerMascs);

// конец корзины

// subs

let headerListSubs = document.querySelectorAll('.header__sub-title');
let headerListSubMenu = document.querySelectorAll('.header__list-submenu');

headerListSubs.forEach((elem, i) => {
	elem.addEventListener('click', () => {
		elem.classList.toggle('active')
		const nextElem = elem.nextElementSibling

		if (nextElem.style.maxHeight) {
			nextElem.style.maxHeight = null
		} else {
			nextElem.style.maxHeight = nextElem.scrollHeight + 'px'
		}
	})
})


// end subs




