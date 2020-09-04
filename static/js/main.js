$(document).ready(function () {
	svg4everybody({});

	// function getItems(url) {
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// }

	// console.log(getItems('http://localhost:3004/tasks?views&_order=asc'))

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
	$('.card__product-modal-item-slider2').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});
	$('.lol-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});

	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: false,
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
let headerListSubsLt = document.querySelectorAll('.header__sub-title-lt');
let headerListSubsModal = document.querySelectorAll('.header__sub-title-modal');
let headerListSubMenu = document.querySelectorAll('.header__list-submenu');


let openHeaderListSubs = (elemsHeaderListSubs) => {

	elemsHeaderListSubs.forEach((elem, i) => {
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

}

openHeaderListSubs(headerListSubs);
openHeaderListSubs(headerListSubsLt);
openHeaderListSubs(headerListSubsModal);


// end subs

// Сортировка товаров по популярности и т.д.

let mnuSortAll = document.querySelectorAll('.men-sort');
let mnuSortWrap = document.querySelectorAll('.men__products-top-sort');
let mnuSortInnerElem = document.querySelectorAll('.men__products-top-sort-one span');

let menSortPopulation = document.querySelector('.men-sort-population');
let menSortIncreaseInPrice = document.querySelector('.men-sort-increase-in-price');
let menSortDecreaseInPrice = document.querySelector('.men-sort-decrease-in-price');
let menSortNews = document.querySelector('.men-sort-news');
let menSortSalePrice = document.querySelector('.men-sort-salePrice');





function openMnuSort(mnuSortWrap, mnuSortAll) {
	mnuSortWrap.forEach((elem, i) => {
		elem.addEventListener('click', () => {
			mnuSortAll[i].classList.toggle('brdr');
		})
	})

}
openMnuSort(mnuSortWrap, mnuSortAll);

function seeElemMnuSort(mnuSortAll, mnuSortInnerElem) {
	mnuSortAll.forEach((elem, i) => {
		elem.addEventListener('click', (e) => {
			mnuSortInnerElem[i].innerHTML = e.target.innerHTML;
		})
	})
}
seeElemMnuSort(mnuSortAll, mnuSortInnerElem);

if (menSortIncreaseInPrice) {
	menSortIncreaseInPrice.addEventListener('click', function () {
		mySortIncreaseInPrice('data-price', 'data-salePrice');
	});
}

if (menSortDecreaseInPrice) {
	menSortDecreaseInPrice.addEventListener('click', function () {
		mySortDecreaseInPrice('data-price', 'data-salePrice');
	});
}

if (menSortPopulation) {
	menSortPopulation.addEventListener('click', function () {
		mySortDecreaseInPrice('dada-population');
	});
}

if (menSortNews) {
	menSortNews.addEventListener('click', function () {
		mySortDecreaseInPrice('data-news');
	});
}

if (menSortSalePrice) {
	menSortSalePrice.addEventListener('click', function () {
		mySortIncreaseInPrice('data-sale')
	});
}


// Сортировка по-умолчанию
if (menSortPopulation) {
	function sortMnuSort() {
		mySortDecreaseInPrice('dada-population');
	}
	sortMnuSort();
}

// Конец Сортировки по-умолчанию

function mySortIncreaseInPrice(sortType, sortTypeMin) {
	let nav = document.querySelector('.men__products-wrap');


	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {


			if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}

function mySortDecreaseInPrice(sortType, sortTypeMin) {
	let nav = document.querySelector('.men__products-wrap');



	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {



			if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}



		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
// Конец кортировки



// Выпадашка фильтр

let menMenuTitle = document.querySelector('.men-menu-title-f');
let headerSubTitle = document.querySelectorAll('.men__header__sub-title');
let menHeaderList = document.querySelector('.men__header__list');
let menHeaderListF = document.querySelector('.men__header__list-f');
let menHeaderListSubmenu = document.querySelectorAll('.men__header__list-submenu');

if (menMenuTitle) {
	menMenuTitle.addEventListener('click', () => {
		if (menMenuTitle.classList.contains('menBrdr')) {
			headerSubTitle.forEach(elem => {
				elem.classList.toggle('subsHiden');
				menHeaderListF.classList.add('menBrdr')
				menMenuTitle.classList.remove('menBrdr')
			})
		} else {
			headerSubTitle.forEach(elem => {
				elem.classList.toggle('subsHiden');
				menHeaderListF.classList.remove('menBrdr')
				menMenuTitle.classList.add('menBrdr')
			})
		}


		headerSubTitle.forEach(elem => {
			if (elem.classList.contains('subsHiden')) {
				menHeaderListSubmenu.forEach(el => {
					el.classList.add('hideLM')
				})
			} else {
				menHeaderListSubmenu.forEach(el => {
					el.classList.remove('hideLM')
				})
			}
		})


	})
}


// Конец выпадашки фильтр

// Выпадашка men-menu

let menMenuUl = document.querySelectorAll('.men__menu-ul');
let menMenuCatalogLi = document.querySelectorAll('.men-catalog-li');

function openedMenMenuUl(menMenuCatalogLi, menMenuUl) {
	menMenuCatalogLi.forEach((elem, i) => {
		elem.addEventListener('click', () => {
			menMenuUl[i].classList.toggle('show');
		})
	})
}

openedMenMenuUl(menMenuCatalogLi, menMenuUl)



// Конец выпадашки men-menu

// Выпадашка Каталога на моб.

let menCatalogSmall = document.querySelector('.men-catalog-small');
let menCatalogLiSmall = document.querySelectorAll('.men-catalog-li-small');
let menMenuUlSmall = document.querySelectorAll('.men__menu-ul-small');


if (menCatalogSmall) {
	menCatalogSmall.addEventListener('click', (e) => {

		if (e.target.classList.contains('men-catalog-small') || e.target.classList.contains('men-menu-title')) {
			menCatalogLiSmall.forEach(elem => {
				if (elem.classList.contains('hideLi')) {
					elem.classList.remove('hideLi')
					elem.classList.add('showLi')
				} else {
					elem.classList.add('hideLi');
					elem.classList.remove('showLi')
				}
			})
		}
	})
}

if (menCatalogLiSmall) {
	menCatalogLiSmall.forEach((elem, i) => {
		elem.addEventListener('click', (e) => {
			menMenuUlSmall[i].classList.toggle('hide')
		})
	})
}


let closeMyWrapEsc = (wrap, wrapElems) => {
	document.addEventListener('keyup', (e) => {
		wrapElems.forEach(elem => {
			if (e.key === 'Escape' && elem.classList.contains('showLi')) {
				elem.classList.remove('showLi');
				elem.classList.add('hideLi');
			}
		})

	})
}
closeMyWrapEsc(menCatalogSmall, menCatalogLiSmall);


// Конец выпадашки каталога на моб.

// Модалка товаров

let cardProductImg = document.querySelectorAll('.card__product-img');
let cardProductImgModal = document.querySelectorAll('.card__product-img-modal');
let cardProductModal = document.querySelectorAll('.card__product-modal');
let cardProductModalCloseElem = document.querySelectorAll('.card__product-modal-close');

const playSlider = (elem) => $(elem).slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
})



// let cardProductModalOpen = (cardProductImg, cardProductModal) => {

// 	cardProductImg.forEach((elem, i) => {
// 		elem.addEventListener('click', (e) => {
// 			// e.preventDefault();
// 		})

// 	})
// }


if (cardProductImg.length) {
	cardProductImg.forEach((el, i) => {
		el.onclick = () => {
			cardModalOpen(cardProductModal[i]);
		}
	})
}




let cardProductModalClose = (cardProductModalCloseElem) => {
	cardProductModalCloseElem.forEach(elem => {
		elem.addEventListener('click', () => {
			cardModalClose(cardProductModal)
		})
	})
}

function cardModalOpen(elem) {
	elem.classList.remove('hide');
	document.body.style.overflow = 'hidden';
	$('.card__product-modal-item-slider2').slick('setPosition');
	$('.lol-slider').slick('setPosition');

}

function cardModalClose(elem) {
	cardProductModal.forEach(el => {
		el.classList.remove('show');
		el.classList.add('hide');
		document.body.style.overflow = '';
	})
}


let closeTabsElemClick = (wrapElem) => {
	wrapElem.forEach(elem => {
		elem.addEventListener('click', (e) => {
			if (e.target === elem) {
				cardModalClose(cardProductModal);
			}
		})
	})
}

closeTabsElemClick(cardProductModal);


cardProductModal.forEach(modal => {

	document.addEventListener('keyup', (e) => {
		if (e.target && modal.classList.contains('card__product-modal')) {
			if (e.key === 'Escape') {
				cardModalClose(cardProductModal);
			}
		}

	})
})




// cardProductModalOpen(cardProductImg, cardProductModal);
cardProductModalClose(cardProductModalCloseElem);

// Конец Модалки товаров


// Поиск

let headerCenterSearch = document.querySelector('.header__center-search');
let headerCenterSearchInput = document.querySelector('.header__center-search input');

headerCenterSearch.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(headerCenterSearchInput.value)
})


// Конец поиска

