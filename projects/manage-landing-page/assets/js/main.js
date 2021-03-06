/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/MenuToggle.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/MenuToggle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuToggle; });\nclass MenuToggle {\r\n  constructor(element) {\r\n    element.addEventListener('click', this.showMenu)\r\n  }\r\n\r\n  showMenu() {\r\n    let headerNav = document.querySelector('header nav')\r\n    let menuToggle = document.querySelector('.menu-toggle img')\r\n    let pathImage = 'assets/img/'\r\n\r\n    headerNav.classList.toggle('active')\r\n    if (menuToggle.getAttribute('src').includes('icon-hamburger.svg')) {\r\n      pathImage += 'icon-close.svg'\r\n    } else {\r\n      pathImage += 'icon-hamburger.svg'\r\n    }\r\n    menuToggle.setAttribute('src', pathImage)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/MenuToggle.js?");

/***/ }),

/***/ "./src/scripts/components/SliderDots.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/SliderDots.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SliderDots; });\nconst sliderDots = document.querySelectorAll('.toggle-slider>.dots>a');\r\n\r\nclass SliderDots {\r\n  constructor(element) {\r\n    element.addEventListener('click', (e) => {\r\n      this.removeClassActive()\r\n      element.classList.add('active')\r\n    })\r\n  }\r\n\r\n  removeClassActive() {\r\n    sliderDots.forEach(s => {\r\n      if (s.classList.contains('active')) s.classList.remove('active')\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/SliderDots.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MenuToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MenuToggle */ \"./src/scripts/components/MenuToggle.js\");\n/* harmony import */ var _components_SliderDots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SliderDots */ \"./src/scripts/components/SliderDots.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n\r\n  const components = [\r\n    {\r\n      class: _components_MenuToggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n      selector: '.menu-toggle'\r\n    },\r\n    {\r\n      class: _components_SliderDots__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n      selector: '.toggle-slider>.dots>a'\r\n    }\r\n  ]\r\n\r\n  components.forEach(component => {\r\n    if (document.querySelector(component.selector) !== null) {\r\n      document.querySelectorAll(component.selector).forEach(element => {\r\n        new component.class(element, element.options)\r\n      })\r\n    }\r\n  })\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });