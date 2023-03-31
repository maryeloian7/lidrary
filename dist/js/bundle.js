/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lid/core.js":
/*!****************************!*\
  !*** ./src/js/lid/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);


/***/ }),

/***/ "./src/js/lid/lid.js":
/*!***************************!*\
  !*** ./src/js/lid/lid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./src/js/lid/core.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/js/lid/modules/display.js");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes.js */ "./src/js/lid/modules/classes.js");
/* harmony import */ var _modules_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handler.js */ "./src/js/lid/modules/handler.js");
/* harmony import */ var _modules_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions.js */ "./src/js/lid/modules/actions.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lid/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lid/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lid/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function(content) {
    for (let i =  0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
}

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length


    for (let  i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.langth = 1;
    return this;
}



/***/ }),

/***/ "./src/js/lid/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lid/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lid/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};

/***/ }),

/***/ "./src/js/lid/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lid/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lid/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue
        }
        this[i].style.display = '';
    }

    return this;
}

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue
        }
        this[i].style.display = 'none';
    }

    return this;
}

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue
        }

        if (this[i].show.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
}

/***/ }),

/***/ "./src/js/lid/modules/handler.js":
/*!***************************************!*\
  !*** ./src/js/lid/modules/handler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lid/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lid_lid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lid/lid.js */ "./src/js/lid/lid.js");


$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

// console.log($('button').html());

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map