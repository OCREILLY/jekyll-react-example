module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/_base.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._18drXI-8DMecn8pbZxwzNa{width:100%}._1V4kH3p5F0Go3d424Wfaxv{width:640px;padding:1rem;margin:auto}", ""]);

// exports
exports.locals = {
	"base": "_18drXI-8DMecn8pbZxwzNa",
	"main": "_1V4kH3p5F0Go3d424Wfaxv"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/page.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/post.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/components/JekyllContent.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports
exports.locals = {
	"base": "_1Ze5HN9YN8cZywmlhH01Oj"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),

/***/ "./src/_layouts/_base.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/_base.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./_base.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./_base.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/_layouts/_base.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found__ = __webpack_require__("found");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_found__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_css__ = __webpack_require__("./src/_layouts/_base.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__base_css__);






var Base = function Base(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__base_css___default.a.base },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_found__["Link"],
        { to: '/' },
        'Home'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_found__["Link"],
        { to: '/about/' },
        'About'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'main',
      { className: __WEBPACK_IMPORTED_MODULE_3__base_css___default.a.main },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'footer',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Footer'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__base_css___default.a)(Base));

/***/ }),

/***/ "./src/_layouts/home.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/home.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./home.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/_layouts/home.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_css__ = __webpack_require__("./src/_layouts/home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_found__ = __webpack_require__("found");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_found___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_found__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__home_css___default.a.base },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          data.posts.map(function (post) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: post.id },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_found__["Link"],
                { to: post.url },
                post.title
              )
            );
          })
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__home_css___default.a)(Home));

/***/ }),

/***/ "./src/_layouts/page.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/page.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./page.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./page.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/_layouts/page.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_css__ = __webpack_require__("./src/_layouts/page.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__page_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_JekyllContent__ = __webpack_require__("./src/components/JekyllContent.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          page = _props$data.page,
          content = _props$data.content;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          page.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_JekyllContent__["a" /* default */], { html: content })
      );
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__page_css___default.a)(Page));

/***/ }),

/***/ "./src/_layouts/post.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/_layouts/post.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./post.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./post.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/_layouts/post.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_css__ = __webpack_require__("./src/_layouts/post.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__post_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_JekyllContent__ = __webpack_require__("./src/components/JekyllContent.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          page = _props$data.page,
          content = _props$data.content;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          page.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_JekyllContent__["a" /* default */], { html: content })
      );
    }
  }]);

  return Post;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__post_css___default.a)(Post));

/***/ }),

/***/ "./src/components/JekyllContent.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"module\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":false,\"minimize\":true}!./src/components/JekyllContent.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./JekyllContent.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./JekyllContent.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/JekyllContent.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__JekyllContent_css__ = __webpack_require__("./src/components/JekyllContent.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__JekyllContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__JekyllContent_css__);




var JekyllContent = function JekyllContent(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__JekyllContent_css___default.a.base },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: props.html } })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__JekyllContent_css___default.a)(JekyllContent));

/***/ }),

/***/ "./src/components/WithStylesContext.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var WithStylesContext = function (_Component) {
  _inherits(WithStylesContext, _Component);

  function WithStylesContext() {
    _classCallCheck(this, WithStylesContext);

    return _possibleConstructorReturn(this, (WithStylesContext.__proto__ || Object.getPrototypeOf(WithStylesContext)).apply(this, arguments));
  }

  _createClass(WithStylesContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { insertCss: this.props.onInsertCss };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return WithStylesContext;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

WithStylesContext.propTypes = {
  onInsertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

WithStylesContext.childContextTypes = {
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (WithStylesContext);

/***/ }),

/***/ "./src/router.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_static_container__ = __webpack_require__("react-static-container");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_static_container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_static_container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found__ = __webpack_require__("found");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_found__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_exenv__ = __webpack_require__("exenv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_exenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_exenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_base__ = __webpack_require__("./src/_layouts/_base.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_home__ = __webpack_require__("./src/_layouts/home.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_page__ = __webpack_require__("./src/_layouts/page.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_post__ = __webpack_require__("./src/_layouts/post.jsx");
var getData = function () {
  var _ref2 = _asyncToGenerator(function* (_ref) {
    var location = _ref.location;

    if (isServer) {
      return mockJekyllData();
    }

    try {
      var _ref3 = yield __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(location.pathname, { responseType: 'document' }),
          doc = _ref3.data;

      var data = extractData(doc);
      if (!data) {
        throw new __WEBPACK_IMPORTED_MODULE_2_found__["HttpError"](404);
      }
      return data;
    } catch (err) {
      console.error(err.stack || err);
      throw new __WEBPACK_IMPORTED_MODULE_2_found__["HttpError"](err.response && err.response.status || err.status || 404);
    }
  });

  return function getData(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }












var isServer = !__WEBPACK_IMPORTED_MODULE_3_exenv___default.a.canUseDOM;

var mockJekyllData = function mockJekyllData() {
  return new Proxy({
    page: new Proxy({}, { get: function get(_, name) {
        return '{{ page.' + name + ' }}';
      } }),
    posts: Array(5).fill(null).map(function (_, idx) {
      return new Proxy({}, { get: function get(_, name) {
          return '{{ site.posts[' + idx + '].' + name + ' }}';
        } });
    })
  }, { get: function get(_, name) {
      return _[name] ? _[name] : '{{ ' + name + ' }}';
    } });
};

function extractData(doc) {
  var node = doc.querySelector('script[id="jekyll-data"]');
  if (!node) {
    return false;
  }
  var data = JSON.parse(node.textContent);
  node.remove();
  return data;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  routeConfig: Object(__WEBPACK_IMPORTED_MODULE_2_found__["makeRouteConfig"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_found__["Route"],
    { path: '/jekyll-react-example/', Component: __WEBPACK_IMPORTED_MODULE_5__layouts_base__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_found__["Route"], { Component: __WEBPACK_IMPORTED_MODULE_6__layouts_home__["a" /* default */], getData: getData }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_found__["Route"], { path: 'about/', Component: __WEBPACK_IMPORTED_MODULE_7__layouts_page__["a" /* default */], getData: getData }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_found__["Route"], { path: ':year/:month/:day/:title/', Component: __WEBPACK_IMPORTED_MODULE_8__layouts_post__["a" /* default */], getData: getData })
  )),
  render: Object(__WEBPACK_IMPORTED_MODULE_2_found__["createRender"])({
    renderError: function renderError(_ref4) {
      var error = _ref4.error;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        error.status === 404 ? 'Not found' : 'Error'
      );
    },
    renderPending: function renderPending() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_static_container__,
          null,
          null
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'white',
            opacity: 0.75
          }
        })
      );
    },
    renderReady: function renderReady(_ref5) {
      var elements = _ref5.elements;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_static_container__,
          { shouldUpdate: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_found__["ElementsRenderer"], { elements: elements })
        )
      );
    }
  })
});

/***/ }),

/***/ "./src/server.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found_lib_server__ = __webpack_require__("found/lib/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_found_lib_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_found_lib_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ejs__ = __webpack_require__("ejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs_extra__ = __webpack_require__("fs-extra");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_WithStylesContext__ = __webpack_require__("./src/components/WithStylesContext.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_ejs__ = __webpack_require__("./src/template.ejs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_ejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__template_ejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__("./src/router.jsx");
var renderFromPath = function () {
  var _ref = _asyncToGenerator(function* (routePath) {
    var _ref2 = yield Object(__WEBPACK_IMPORTED_MODULE_2_found_lib_server__["getFarceResult"])(Object.assign({ url: routePath }, __WEBPACK_IMPORTED_MODULE_8__router__["a" /* default */])),
        element = _ref2.element;

    var css = new Set();
    var context = {};
    var markup = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6__components_WithStylesContext__["a" /* default */],
      { onInsertCss: function onInsertCss(styles) {
          return css.add(styles._getCss());
        } },
      element
    ));

    return render({
      markup: markup,
      css: [].concat(_toConsumableArray(css)).join('')
    });
  });

  return function renderFromPath(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










var render = __WEBPACK_IMPORTED_MODULE_3_ejs___default.a.compile(__WEBPACK_IMPORTED_MODULE_7__template_ejs___default.a);

var routing = {
  '/jekyll-react-example/': './_layouts/home.html',
  '/jekyll-react-example/about/': './_layouts/page.html',
  '/jekyll-react-example/:year/:month/:day/:title/': './_layouts/post.html'
};

Promise.all(Object.keys(routing).map(function () {
  var _ref3 = _asyncToGenerator(function* (routePath) {
    var filePath = __WEBPACK_IMPORTED_MODULE_5_path___default.a.resolve(process.cwd(), routing[routePath]);
    if (!(yield __WEBPACK_IMPORTED_MODULE_4_fs_extra___default.a.pathExists(__WEBPACK_IMPORTED_MODULE_5_path___default.a.dirname(filePath)))) {
      yield __WEBPACK_IMPORTED_MODULE_4_fs_extra___default.a.mkdirp(__WEBPACK_IMPORTED_MODULE_5_path___default.a.dirname(filePath));
    }
    yield __WEBPACK_IMPORTED_MODULE_4_fs_extra___default.a.writeFile(filePath, (yield renderFromPath(routePath)), { encoding: 'utf8' });
    console.log('Written to ' + __WEBPACK_IMPORTED_MODULE_5_path___default.a.relative(process.cwd(), filePath));
  });

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}())).catch(function (err) {
  console.error(err.stack || err);
  process.exit(255);
});

/***/ }),

/***/ "./src/template.ejs":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <meta name=\"robots\" content=\"noindex,nofollow\">\n  <title>{% if page.title %}{{ page.title }} - {% endif %}{{ site.title }}</title>\n\n  {%- if page.layout == \"home\" -%}\n    <script type=\"application/json\" id=\"jekyll-data\">\n      {\n        \"posts\": {% include jsonify.json data=site.posts slim='true' %},\n        \"page\": {% include jsonify.json data=page slim='true' %}\n      }\n    </script>\n  {%- else -%}\n    <script type=\"application/json\" id=\"jekyll-data\">\n      {\n        \"page\": {% include jsonify.json data=page %},\n        \"content\": {% include jsonify.json data=content %}\n      }\n    </script>\n  {%- endif %}\n  <script src=\"{{ site.baseurl }}/scripts/client.js\" async></script>\n  <style type=\"text/css\" data-ssr><%- css %></style>\n</head>\n\n<body>\n  <div id=\"root\"><%- markup %></div>\n</body>\n\n</html>\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/server.jsx");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "ejs":
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "exenv":
/***/ (function(module, exports) {

module.exports = require("exenv");

/***/ }),

/***/ "found":
/***/ (function(module, exports) {

module.exports = require("found");

/***/ }),

/***/ "found/lib/server":
/***/ (function(module, exports) {

module.exports = require("found/lib/server");

/***/ }),

/***/ "fs-extra":
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "isomorphic-style-loader/lib/withStyles":
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-static-container":
/***/ (function(module, exports) {

module.exports = require("react-static-container");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map