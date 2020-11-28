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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/global.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/global.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';
  /*==================================================================
      [ Daterangepicker ]*/

  try {
    $('.js-datepicker').daterangepicker({
      "singleDatePicker": true,
      "showDropdowns": true,
      "autoUpdateInput": false,
      locale: {
        format: 'DD/MM/YYYY'
      }
    });
    var myCalendar = $('.js-datepicker');
    var isClick = 0;
    $(window).on('click', function () {
      isClick = 0;
    });
    $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
      isClick = 0;
      $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });
    $('.js-btn-calendar').on('click', function (e) {
      e.stopPropagation();
      if (isClick === 1) isClick = 0;else if (isClick === 0) isClick = 1;

      if (isClick === 1) {
        myCalendar.focus();
      }
    });
    $(myCalendar).on('click', function (e) {
      e.stopPropagation();
      isClick = 1;
    });
    $('.daterangepicker').on('click', function (e) {
      e.stopPropagation();
    });
  } catch (er) {
    console.log(er);
  }
  /*[ Select 2 Config ]
      ===========================================================*/


  try {
    var selectSimple = $('.js-select-simple');
    selectSimple.each(function () {
      var that = $(this);
      var selectBox = that.find('select');
      var selectDropdown = that.find('.select-dropdown');
      selectBox.select2({
        dropdownParent: selectDropdown
      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=global-a05a37c4d898798b0805.js.map