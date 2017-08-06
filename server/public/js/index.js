/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _lesson = __webpack_require__(2);

	var _lesson2 = _interopRequireDefault(_lesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//console.info(A,test,Hello);
	//console.info(A);
	//console.log(lesson.A,lesson.test);
	console.log(_lesson2.default.A); /*import './class/lesson1';*/
	/*
	import './class/lesson2';*/
	/*import "babel-polyfill";*/

	//import {A,test,Hello} from './class/lesson18';
	//import {A} from './class/lesson18';
	//import * as lesson from './class/lesson18'//as后面取一个别名

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by dell on 2017/8/6.
	 */
	/*export let A=123;
	export let test=function(){
	    console.log('test');
	};
	export class Hello{
	    test(){
	        console.log('class');
	    }
	};*/

	var A = 123;
	var test = function test() {
	    console.log('test');
	};

	var Hello = function () {
	    function Hello() {
	        _classCallCheck(this, Hello);
	    }

	    _createClass(Hello, [{
	        key: 'test',
	        value: function test() {
	            console.log('class');
	        }
	    }]);

	    return Hello;
	}();
	//default 给导出不取名字，把名字交给引入方取


	exports.default = {
	    A: A,
	    test: test,
	    Hello: Hello
	};

/***/ })
/******/ ]);