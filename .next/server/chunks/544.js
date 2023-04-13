"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 8544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Co": () => (/* binding */ brandswiper),
/* harmony export */   "J$": () => (/* binding */ testimonialsswiper),
/* harmony export */   "Nz": () => (/* binding */ blogswiper),
/* harmony export */   "Vf": () => (/* binding */ herothreeswiper),
/* harmony export */   "Y$": () => (/* binding */ projectsswiper),
/* harmony export */   "ty": () => (/* binding */ studiesswiper),
/* harmony export */   "vt": () => (/* binding */ partnerswiper),
/* harmony export */   "yc": () => (/* binding */ latestswiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Virtual
]);
const brandswiper = {
    slidesPerView: 5,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
};
const projectsswiper = {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    }
};
const partnerswiper = {
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
};
const latestswiper = {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    }
};
const testimonialsswiper = {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    }
};
const herothreeswiper = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
};
const studiesswiper = {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    }
};
const blogswiper = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;