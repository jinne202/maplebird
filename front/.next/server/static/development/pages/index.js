module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Style_FollowButtonStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/FollowButtonStyle */ \"./components/Style/FollowButtonStyle.js\");\n\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  var post = _ref.post,\n      onUnfollow = _ref.onUnfollow,\n      onFollow = _ref.onFollow;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  return !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  }) //내가 이미 팔로우 한 사용자\n  ?\n  /*#__PURE__*/\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Style_FollowButtonStyle__WEBPACK_IMPORTED_MODULE_4__[\"UNFollowButtonStyle\"], {\n    onClick: onUnfollow(post.User.id)\n  }, \"UnFollow\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Style_FollowButtonStyle__WEBPACK_IMPORTED_MODULE_4__[\"FollowButtonStyle\"], {\n    onClick: onFollow(post.User.id)\n  }, \"Follow\");\n};\n\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  onUnfollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,\n  onFollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\n//# sourceURL=webpack:///./components/FollowButton.js?");

/***/ }),

/***/ "./components/ImagesZoom.js":
/*!**********************************!*\
  !*** ./components/ImagesZoom.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/ImagesStyle */ \"./components/Style/ImagesStyle.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      currentSlide = _useState2[0],\n      setCurrentSlide = _useState2[1];\n\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"Overlay\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Image\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"CloseBtn\"], {\n      type: \"close-circle\",\n      onClick: onClose\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"SlickWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      initialSlide: 0,\n      afterChange: function afterChange(slide) {\n        return setCurrentSlide(slide);\n      },\n      infinite: false,\n      arrows: true,\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }, images.map(function (v) {\n      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"ImgWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n          src: v.src\n        }))\n      );\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_4__[\"Indicator\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, currentSlide + 1, \" / \", images.length)))))\n  );\n};\n\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n  })).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\n//# sourceURL=webpack:///./components/ImagesZoom.js?");

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, postData.split(/(#[^\\s]+)/g).map(function (v) {\n      if (v.match(/#[^\\s]+/)) {\n        return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: {\n              pathname: '/hashtag',\n              query: {\n                tag: v.slice(1)\n              }\n            },\n            as: \"/hashtag/\".concat(v.slice(1)),\n            key: v\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, v))\n        );\n      }\n\n      return v;\n    }))\n  );\n};\n\nPostCardContent.propTypes = {\n  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\n\n//# sourceURL=webpack:///./components/PostCardContent.js?");

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagesZoom */ \"./components/ImagesZoom.js\");\n/* harmony import */ var _Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/ImagesStyle */ \"./components/Style/ImagesStyle.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n\n\n\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  var images = _ref.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      showImagesZoom = _useState2[0],\n      setShowImagesZoom = _useState2[1];\n\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setShowImagesZoom(true);\n  }, []);\n  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setShowImagesZoom(false);\n  }, []);\n\n  if (images.length === 1) {\n    return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        src: images[0].src,\n        onClick: onZoom\n      }), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        images: images,\n        onClose: onClose\n      }))\n    );\n  }\n\n  if (images.length === 2) {\n    return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        src: images[0].src,\n        width: \"50%\",\n        onClick: onZoom\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        src: images[1].src,\n        width: \"50%\",\n        onClick: onZoom\n      })), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        images: images,\n        onClose: onClose\n      }))\n    );\n  }\n\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: images[0].src,\n      width: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ImagesStyle__WEBPACK_IMPORTED_MODULE_5__[\"ThumImage3\"], {\n      onClick: onZoom\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n      type: \"plus\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), images.length - 1, \"\\xA0IMAGE SHOW MORE\")), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }))\n  );\n};\n\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n  })).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\n//# sourceURL=webpack:///./components/PostImages.js?");

/***/ }),

/***/ "./components/Style/FollowButtonStyle.js":
/*!***********************************************!*\
  !*** ./components/Style/FollowButtonStyle.js ***!
  \***********************************************/
/*! exports provided: FollowButtonStyle, UNFollowButtonStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowButtonStyle\", function() { return FollowButtonStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFollowButtonStyle\", function() { return UNFollowButtonStyle; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    border : 1px solid #40a9ff;\\n    color : #40a9ff;\\n\\n    &:hover {\\n        background-color : #bae7ff;\\n        border : 1px solid #1890ff;\\n        color : #1890ff;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    border : 1px solid #ffa940;\\n    color : #ffa940;\\n\\n    &:hover {\\n        background-color : #ffd591;\\n        border : 1px solid #ff7a45;\\n        color : #ff7a45;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar FollowButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject());\nvar UNFollowButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject2());\n\n//# sourceURL=webpack:///./components/Style/FollowButtonStyle.js?");

/***/ }),

/***/ "./components/Style/ImagesStyle.js":
/*!*****************************************!*\
  !*** ./components/Style/ImagesStyle.js ***!
  \*****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, CloseBtn, Indicator, ImgWrapper, ThumImage3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlickWrapper\", function() { return SlickWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseBtn\", function() { return CloseBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgWrapper\", function() { return ImgWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThumImage3\", function() { return ThumImage3; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display : inline-block;\\n    width : 36%;\\n    margin : 0 7%;\\n    padding : 20px 0;\\n    text-align : center;\\n    vertical-align : middle;\\n    cursor: pointer;\\n    color : #ff7a45;\\n    font-size : 18px;\\n    font-weight : 600;\\n    transition: all ease 0.39s 0s;\\n\\n    &:hover {\\n        color : #1890ff;\\n        transition: all ease 0.39s 0s;\\n    }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 32px;\\n  text-align: center;\\n  \\n  & img {\\n    margin: 0 auto;\\n    max-height: 750px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  \\n  & > div {\\n    width: 75px;\\n    height: 30px;\\n    line-height: 30px;\\n    border-radius: 30px;\\n    background: #1890ff;\\n    display: inline-block;\\n    text-align: center;\\n    color: white;\\n    font-size: 15px;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  padding: 13px 15px;\\n  line-height: 20px;\\n  cursor: pointer;\\n  color : #40a9ff;\\n  font-size : 30px;\\n  transition: all ease 0.39s 0s;\\n\\n  &:hover {\\n      color : #ff7a45;\\n      transition: all ease 0.39s 0s;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: calc(100% - 44px);\\n  background: rgba(0, 0, 0, 0.7);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 55px;\\n  background: white;\\n  position: relative;\\n  padding: 0;\\n  text-align: center;\\n  \\n  & h1 {\\n    margin: 0;\\n    font-weight : 600;\\n    font-size: 22px;\\n    color: #ffa940;\\n    line-height: 55px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  z-index: 5000;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject2());\nvar SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"])(_templateObject4());\nvar Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());\nvar ThumImage3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());\n\n//# sourceURL=webpack:///./components/Style/ImagesStyle.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backUrl\", function() { return backUrl; });\nvar backUrl =  false ? undefined : 'http://localhost:7070';\n\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./containers/CommentForm.js":
/*!***********************************!*\
  !*** ./containers/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/ContainerStyle */ \"./containers/Style/ContainerStyle.js\");\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  var post = _ref.post;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      commentText = _useState2[0],\n      setCommentText = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      commentAdded = _useSelector.commentAdded,\n      isAddingComment = _useSelector.isAddingComment;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector2.me;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (!commentText || !commentText.trim()) {\n      return alert('댓글을 작성하세요');\n    }\n\n    if (!me) {\n      return alert('로그인이 필요합니다');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        postId: post.id,\n        content: commentText\n      }\n    });\n  }, [me && me.id, commentText]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCommentText('');\n  }, [commentAdded === true]);\n  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setCommentText(e.target.value);\n  }, []);\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_6__[\"CommentFormStyle\"], {\n      onSubmit: onSubmitComment\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_6__[\"CommentFormItemStyle\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"].TextArea, {\n      rows: 4,\n      value: commentText,\n      onChange: onChangeCommentText\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_6__[\"CommentSubmitBtn\"], {\n      htmlType: \"submit\",\n      loading: isAddingComment\n    }, \"\\uC090\\uC57D\"))\n  );\n};\n\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\n//# sourceURL=webpack:///./containers/CommentForm.js?");

/***/ }),

/***/ "./containers/PostCard.js":
/*!********************************!*\
  !*** ./containers/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PostImages */ \"./components/PostImages.js\");\n/* harmony import */ var _components_PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostCardContent */ \"./components/PostCardContent.js\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm */ \"./containers/CommentForm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_FollowButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/FollowButton */ \"./components/FollowButton.js\");\n/* harmony import */ var _Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Style/ContainerStyle */ \"./containers/Style/ContainerStyle.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nmoment__WEBPACK_IMPORTED_MODULE_11___default.a.locale('ko');\nvar PostCard = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(function (_ref) {\n  var post = _ref.post,\n      commentOpened = _ref.commentOpened;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(commentOpened),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      commentFormOpened = _useState2[0],\n      setCommentFormOpened = _useState2[1];\n\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user.me && state.user.me.id;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var liked = id && post.Likers && post.Likers.find(function (v) {\n    return v.id === id;\n  });\n  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    // 펼쳐져있으면 닫고 닫혀있으면 펼치고\n    setCommentFormOpened(function (prev) {\n      return !prev;\n    });\n\n    if (!commentFormOpened) {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"LOAD_COMMENT_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, []);\n  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    console.log(post.id);\n\n    if (!id) {\n      return alert('로그인이 필요합니다');\n    } // likers 안에 좋아요 누른 사람들의 배열이 들어있음\n\n\n    if (liked) {\n      //좋아요 누른 상태\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"UNLIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    } else {\n      //좋아요 안 누른 상태\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"LIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, [id, post && post.id, liked]);\n  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (!id) {\n      return alert('로그인이 필요합니다');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"RETWEET_REQUEST\"],\n      data: post.id\n    });\n  }, [id, post && post.id]);\n  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"FOLLOW_USER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"UNFOLLOW_USER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (postId) {\n    return function () {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"REMOVE_POST_REQUEST\"],\n        data: postId\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/');\n    };\n  }, []);\n  var onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (commentId) {\n    return function () {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"REMOVE_COMMENT_REQUEST\"],\n        data: {\n          commentId: commentId,\n          postId: post.id\n        }\n      });\n    };\n  }, []);\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"CardWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"] // cover = {post.Images[0] && <img alt=\"example\" src={`http://localhost:7070/` + post.Images[0].src}/>}\n    , {\n      cover: post.Images && post.Images[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostImages__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        images: post.Images\n      }),\n      actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n        type: \"retweet\",\n        key: \"retweet\",\n        onClick: onRetweet\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n        type: \"heart\",\n        key: \"heart\",\n        theme: liked ? 'twoTone' : 'outlined',\n        twoToneColor: \"#ff7a45\",\n        onClick: onToggleLike\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n        type: \"message\",\n        key: \"message\",\n        onClick: onToggleComment\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n        key: \"ellipsis\",\n        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"].Group, null, id && post.UserId === id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          type: \"danger\",\n          onClick: onRemovePost(post.id)\n        }, \"\\uC0AD\\uC81C\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], null, \"\\uC2E0\\uACE0\"))\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n        type: \"ellipsis\"\n      }))],\n      title: post.RetweetId ? \"\".concat(post.User.nickname, \"\\uB2D8\\uC774 \\uB9AC\\uD2B8\\uC717 \\uD558\\uC168\\uC2B5\\uB2C8\\uB2E4\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).format('YYYY.MM.DD.')) //로그인을 안 했다면 버튼이 보이지 않음\n      ,\n      extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FollowButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        post: post,\n        onUnfollow: onUnfollow,\n        onFollow: onFollow\n      })\n    }, post.RetweetId && post.Retweet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n      cover: post.Retweet.Images[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostImages__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        images: post.Retweet.Images\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"DateSpan\"], null, moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).format('YYYY.MM.DD.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Meta, {\n      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/user',\n          query: {\n            id: post.Retweet.User.id\n          }\n        },\n        as: \"/user/\".concat(post.Retweet.User.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, post.Retweet.User.nickname[0]))),\n      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/user',\n          query: {\n            id: post.Retweet.User.id\n          }\n        },\n        as: \"/user/\".concat(post.Retweet.User.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"PostCardAtag\"], null, post.Retweet.User.nickname)),\n      description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/post',\n          query: {\n            id: post.RetweetId ? post.RetweetId : post.id\n          }\n        },\n        as: \"/post/\".concat(post.RetweetId ? post.RetweetId : post.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"PostCardDesAtag\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        postData: post.Retweet.content\n      })))\n    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Meta, {\n      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/user',\n          query: {\n            id: post.User.id\n          }\n        },\n        as: \"/user/\".concat(post.User.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, post.User.nickname[0]))),\n      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/user',\n          query: {\n            id: post.User.id\n          }\n        },\n        as: \"/user/\".concat(post.User.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"PostCardAtag\"], null, post.User.nickname)),\n      description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: {\n          pathname: '/post',\n          query: {\n            id: post.RetweetId ? post.RetweetId : post.id\n          }\n        },\n        as: \"/post/\".concat(post.RetweetId ? post.RetweetId : post.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"PostCardDesAtag\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        postData: post.content\n      })))\n    })), commentFormOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      post: post\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"List\"], {\n      header: \"\".concat(post.Comments ? post.Comments.length : 0, \" reply\"),\n      itemLayout: \"horizontal\",\n      dataSource: post.Comments || [],\n      renderItem: function renderItem(item) {\n        return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"CommentWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"CommentStyle\"], {\n            author: item.User.nickname,\n            avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: {\n                pathname: '/user',\n                query: {\n                  id: item.User.id\n                }\n              },\n              as: \"/user/\".concat(item.User.id)\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, item.User.nickname[0]))),\n            content: item.content\n          }), id && item.User.id === id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_13__[\"CommentRemoveBtn\"], {\n            onClick: onRemoveComment(item.id)\n          }, \"\\uC0AD\\uC81C\") : null)\n        );\n      }\n    })))\n  );\n});\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n    img: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n    createdAT: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\n//# sourceURL=webpack:///./containers/PostCard.js?");

/***/ }),

/***/ "./containers/PostForm.js":
/*!********************************!*\
  !*** ./containers/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/ContainerStyle */ \"./containers/Style/ContainerStyle.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n\n\n\n\n\n\n\nvar PostForm = function PostForm() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      imagePaths = _useSelector.imagePaths,\n      isAddingPost = _useSelector.isAddingPost,\n      postAdded = _useSelector.postAdded;\n\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (postAdded) {\n      setText('');\n    }\n  }, [postAdded === true]);\n  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (!text || !text.trim()) {\n      return alert('게시글을 작성하세요');\n    }\n\n    var formData = new FormData();\n    imagePaths.forEach(function (i) {\n      formData.append('image', i);\n    });\n    formData.append('content', text);\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"ADD_POST_REQUEST\"],\n      data: formData\n    });\n  }, [text, imagePaths]);\n  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setText(e.target.value);\n  }, []); // ajax 사용해서 form data 전송\n\n  var onChangeImage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    console.log(e.target.files);\n    var imageFormData = new FormData();\n    [].forEach.call(e.target.files, function (f) {\n      imageFormData.append('image', f);\n    });\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"UPLOAD_IMAGE_REQUEST\"],\n      data: imageFormData\n    });\n  }, []);\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    imageInput.current.click();\n  }, [imageInput.current]);\n  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (index) {\n    return function () {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_IMAGE\"],\n        index: index\n      });\n    };\n  }, []);\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__[\"PostFormStyle\"], {\n      encType: \"multipart/form-data\",\n      onSubmit: onSubmitForm\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n      maxLength: 140,\n      placeholder: \"HOW WAS YOUR MAPLE TODAY?\",\n      value: text,\n      onChange: onChangeText\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"file\",\n      multiple: true,\n      hidden: true,\n      ref: imageInput,\n      onChange: onChangeImage\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__[\"ImageUploadBtn\"], {\n      onClick: onClickImageUpload\n    }, \"IMAGE UPLOAD\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__[\"TwitBtn\"], {\n      type: \"primary\",\n      htmlType: \"submit\",\n      loading: isAddingPost\n    }, \"TWIT!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, imagePaths.map(function (v, i) {\n      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__[\"ThumbImg\"], {\n          key: v\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n          src: v,\n          alt: v\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_ContainerStyle__WEBPACK_IMPORTED_MODULE_5__[\"ThumRemoveBtn\"], {\n          onClick: onRemoveImage(i)\n        }, \"REMOVE\")))\n      );\n    })))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\n//# sourceURL=webpack:///./containers/PostForm.js?");

/***/ }),

/***/ "./containers/Style/ContainerStyle.js":
/*!********************************************!*\
  !*** ./containers/Style/ContainerStyle.js ***!
  \********************************************/
/*! exports provided: LoginFormStyle, LoginFormButton, PlusMarginBtn, NickFormStyle, NickFormnInput, NickChangeBtn, CardWrapper, DateSpan, PostFormStyle, TwitBtn, ThumbImg, ThumRemoveBtn, ImageUploadBtn, UserProfileCard, CardAvatar, LogoutButton, CommentFormStyle, CommentFormItemStyle, CommentSubmitBtn, PostCardAtag, PostCardDesAtag, CommentWrapper, CommentStyle, CommentRemoveBtn, LoginError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginFormStyle\", function() { return LoginFormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginFormButton\", function() { return LoginFormButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlusMarginBtn\", function() { return PlusMarginBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NickFormStyle\", function() { return NickFormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NickFormnInput\", function() { return NickFormnInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NickChangeBtn\", function() { return NickChangeBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrapper\", function() { return CardWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateSpan\", function() { return DateSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostFormStyle\", function() { return PostFormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TwitBtn\", function() { return TwitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThumbImg\", function() { return ThumbImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThumRemoveBtn\", function() { return ThumRemoveBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageUploadBtn\", function() { return ImageUploadBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserProfileCard\", function() { return UserProfileCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardAvatar\", function() { return CardAvatar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutButton\", function() { return LogoutButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentFormStyle\", function() { return CommentFormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentFormItemStyle\", function() { return CommentFormItemStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentSubmitBtn\", function() { return CommentSubmitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostCardAtag\", function() { return PostCardAtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostCardDesAtag\", function() { return PostCardDesAtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentWrapper\", function() { return CommentWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentStyle\", function() { return CommentStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentRemoveBtn\", function() { return CommentRemoveBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginError\", function() { return LoginError; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _templateObject25() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 10px 0 0 0;\\n    color : #ff4d4f;\\n\"]);\n\n  _templateObject25 = function _templateObject25() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject24() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    border : 1px solid #1890ff;\\n    color : #1890ff;\\n    position : absolute;\\n    right : 10px;\\n    top : 30%;\\n\\n    &:hover {\\n        color : #fff;\\n        border : 1px solid #ff4d4f;\\n        background-color : #ff4d4f;\\n    }\\n\"]);\n\n  _templateObject24 = function _templateObject24() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject23() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 80%;\\n\"]);\n\n  _templateObject23 = function _templateObject23() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject22() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position : relative;\\n\"]);\n\n  _templateObject22 = function _templateObject22() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject21() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color : #8c8c8c;\\n\\n    &:hover {\\n        color : #8c8c8c;\\n    }\\n\"]);\n\n  _templateObject21 = function _templateObject21() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject20() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color : black;\\n    display : inline;\\n\\n    &:hover {\\n        color : black;\\n    }\\n\"]);\n\n  _templateObject20 = function _templateObject20() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject19() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 100px;\\n    float : right;\\n    border : 1px solid #ffa940;\\n    color : #ffa940;\\n    &:hover {\\n        border : 2px solid #ff9c6e;\\n        color : #ff9c6e;\\n        font-weight : 600;\\n        background-color : #ffe58f;\\n    }\\n\"]);\n\n  _templateObject19 = function _templateObject19() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject18() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 0;\\n\"]);\n\n  _templateObject18 = function _templateObject18() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject17() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 10px 0 0;\\n    position : relative;\\n    display : inline-block;\\n    width : 100%;\\n\"]);\n\n  _templateObject17 = function _templateObject17() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject16() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 5px 0 0 0;\\n\\n    &:hover {\\n        border : 1px solid #ffa940;\\n        color : #ffa940;\\n    }\\n\"]);\n\n  _templateObject16 = function _templateObject16() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject15() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    background-color : #40a9ff;\\n    vertical-align : middle;\\n    margin : 0;\\n\"]);\n\n  _templateObject15 = function _templateObject15() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject14() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 20px 0 20px;\\n\\n    & > div {\\n        padding : 24px 24px 15px 24px;\\n    }\\n\"]);\n\n  _templateObject14 = function _templateObject14() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject13() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 8px 0 0;\\n    &:hover {\\n        border : 1px solid #ffa940;\\n        color : #ffa940;\\n    }\\n\"]);\n\n  _templateObject13 = function _templateObject13() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject12() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 80%;\\n    margin : 7px auto 0;\\n    display :block;\\n\\n    &:hover {\\n        background : #ffd591;\\n        border : 1px solid #ff7a45;\\n        color : #ff7a45;\\n    }\\n\"]);\n\n  _templateObject12 = function _templateObject12() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject11() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display : inline-block;\\n    width : 30%;\\n    margin : 10px 10px;\\n    top : 0;\\n\\n    & img {\\n        width : 100%;\\n    }\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    float : right;\\n    margin : 8px 0 0;\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 20px 0 20px;\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    float : right;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 10px 0;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 17%;\\n    background-color : #ffa940;\\n    border : 1px solid #ffa940;\\n\\n    &:hover {\\n        background-color : #ff7a45;\\n        border : 1px solid #ff7a45;\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 80%;\\n    margin-right : 10px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-bottom : 20px;\\n    padding : 20x;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-left : 4%;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width : 48%;\\n    margin-top : 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin : 20px 20px 20px;\\n\\n    & label {\\n        font-size : 16px;\\n        color : #ffa940;\\n        margin : 5px 0;\\n        display : inline-block;\\n        font-weight : 600;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar LoginFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"])(_templateObject());\nvar LoginFormButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject2());\nvar PlusMarginBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LoginFormButton)(_templateObject3());\nvar NickFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"])(_templateObject4());\nvar NickFormnInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"])(_templateObject5());\nvar NickChangeBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject6());\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());\nvar DateSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject8());\nvar PostFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"])(_templateObject9());\nvar TwitBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject10());\nvar ThumbImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject11());\nvar ThumRemoveBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject12());\nvar ImageUploadBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject13());\nvar UserProfileCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"])(_templateObject14());\nvar CardAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"])(_templateObject15());\nvar LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject16());\nvar CommentFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"])(_templateObject17());\nvar CommentFormItemStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item)(_templateObject18());\nvar CommentSubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject19());\nvar PostCardAtag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject20());\nvar PostCardDesAtag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject21());\nvar CommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject22());\nvar CommentStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Comment\"])(_templateObject23());\nvar CommentRemoveBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"])(_templateObject24());\nvar LoginError = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject25());\n\n//# sourceURL=webpack:///./containers/Style/ContainerStyle.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ \"core-js/library/fn/array/from\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ \"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ \"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ \"core-js/library/fn/is-iterable\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ \"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ \"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ \"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ \"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ \"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ \"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ \"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\");\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithHoles(arr) {\n  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\");\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithoutHoles(arr) {\n  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\n/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ \"./node_modules/@babel/runtime-corejs2/core-js/array/from.js\");\n/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ \"./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js\");\n/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _iterableToArray(iter) {\n  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js\");\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread; });\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js\");\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js\");\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);\n\n    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {\n      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {\n        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _taggedTemplateLiteral; });\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js\");\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ \"./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js\");\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {\n    raw: {\n      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js\");\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js\");\n\nvar _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || _Object$getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/@babel/runtime-corejs2/core-js/object/create.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime-corejs2/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol.js\");\n\nfunction _typeof2(obj) { if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _Symbol === \"function\" && _typeof2(_Symbol$iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global __NEXT_DATA__ */\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/inherits.js\"));\n\nvar __importStar = void 0 && (void 0).__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = void 0 && (void 0).__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar url_1 = __webpack_require__(/*! url */ \"url\");\n\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar router_1 = __importStar(__webpack_require__(/*! next/router */ \"next/router\"));\n\nvar utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nfunction isLocal(href) {\n  var url = url_1.parse(href, false, true);\n  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);\n  return !url.host || url.protocol === origin.protocol && url.host === origin.host;\n}\n\nfunction memoizedFormatUrl(formatFunc) {\n  var lastHref = null;\n  var lastAs = null;\n  var lastResult = null;\n  return function (href, as) {\n    if (href === lastHref && as === lastAs) {\n      return lastResult;\n    }\n\n    var result = formatFunc(href, as);\n    lastHref = href;\n    lastAs = as;\n    lastResult = result;\n    return result;\n  };\n}\n\nfunction formatUrl(url) {\n  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;\n}\n\nvar Link =\n/*#__PURE__*/\nfunction (_react_1$Component) {\n  (0, _inherits2.default)(Link, _react_1$Component);\n\n  function Link() {\n    var _this;\n\n    (0, _classCallCheck2.default)(this, Link);\n    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed\n    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html\n\n    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {\n      return {\n        href: formatUrl(href),\n        as: formatUrl(asHref, true)\n      };\n    });\n\n    _this.linkClicked = function (e) {\n      var _e$currentTarget = e.currentTarget,\n          nodeName = _e$currentTarget.nodeName,\n          target = _e$currentTarget.target;\n\n      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {\n        // ignore click for new tab / new window behavior\n        return;\n      }\n\n      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),\n          href = _this$formatUrls.href,\n          as = _this$formatUrls.as;\n\n      if (!isLocal(href)) {\n        // ignore click if it's outside our scope\n        return;\n      }\n\n      var pathname = window.location.pathname;\n      href = url_1.resolve(pathname, href);\n      as = as ? url_1.resolve(pathname, as) : href;\n      e.preventDefault(); //  avoid scroll for urls with anchor refs\n\n      var scroll = _this.props.scroll;\n\n      if (scroll == null) {\n        scroll = as.indexOf('#') < 0;\n      } // replace state instead of push if prop is present\n\n\n      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {\n        shallow: _this.props.shallow\n      }).then(function (success) {\n        if (!success) return;\n\n        if (scroll) {\n          window.scrollTo(0, 0);\n          document.body.focus();\n        }\n      }).catch(function (err) {\n        if (_this.props.onError) _this.props.onError(err);\n      });\n    };\n\n    return _this;\n  }\n\n  (0, _createClass2.default)(Link, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.prefetch();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {\n        this.prefetch();\n      }\n    }\n  }, {\n    key: \"prefetch\",\n    value: function prefetch() {\n      if (!this.props.prefetch) return;\n      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)\n\n      var pathname = window.location.pathname;\n\n      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),\n          parsedHref = _this$formatUrls2.href;\n\n      var href = url_1.resolve(pathname, parsedHref);\n      router_1.default.prefetch(href);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var children = this.props.children;\n\n      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),\n          href = _this$formatUrls3.href,\n          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag\n\n\n      if (typeof children === 'string') {\n        children = react_1.default.createElement(\"a\", null, children);\n      } // This will return the first child, if multiple are provided it will throw an error\n\n\n      var child = react_1.Children.only(children);\n      var props = {\n        onClick: function onClick(e) {\n          if (child.props && typeof child.props.onClick === 'function') {\n            child.props.onClick(e);\n          }\n\n          if (!e.defaultPrevented) {\n            _this2.linkClicked(e);\n          }\n        }\n      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is\n      // defined, we specify the current 'href', so that repetition is not needed by the user\n\n      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {\n        props.href = as || href;\n      } // Add the ending slash to the paths. So, we can serve the\n      // \"<page>/index.html\" directly.\n\n\n      if (true) {\n        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {\n          props.href = router_1.Router._rewriteUrlForNextExport(props.href);\n        }\n      }\n\n      return react_1.default.cloneElement(child, props);\n    }\n  }]);\n  return Link;\n}(react_1.Component);\n\nif (true) {\n  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin\n\n  var exact = __webpack_require__(/*! prop-types-exact */ \"prop-types-exact\");\n\n  Link.propTypes = exact({\n    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,\n    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),\n    prefetch: prop_types_1.default.bool,\n    replace: prop_types_1.default.bool,\n    shallow: prop_types_1.default.bool,\n    passHref: prop_types_1.default.bool,\n    scroll: prop_types_1.default.bool,\n    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {\n      var value = props[propName];\n\n      if (typeof value === 'string') {\n        warn(\"Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>\");\n      }\n\n      return null;\n    }]).isRequired\n  });\n}\n\nexports.default = Link;\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/link.js?");

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/link */ \"./node_modules/next/dist/client/link.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/link.js?");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _containers_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/PostForm */ \"./containers/PostForm.js\");\n/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/PostCard */ \"./containers/PostCard.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts,\n      hasMorePost = _useSelector2.hasMorePost;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"])();\n  var countRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])([]);\n  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n      if (hasMorePost) {\n        var lastId = mainPosts[mainPosts.length - 1].id;\n\n        if (!countRef.current.includes(lastId)) {\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"LOAD_MAIN_POST_REQUEST\"],\n            lastId: lastId\n          });\n          countRef.current.push(lastId);\n        }\n      }\n    }\n  }, [hasMorePost, mainPosts.length]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('scroll', onScroll);\n    };\n  }, [mainPosts.length]);\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_containers_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), mainPosts.map(function (c) {\n      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_containers_PostCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          key: c.id,\n          post: c,\n          commentOpened: false\n        })\n      );\n    }))\n  );\n};\n\nHome.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(context));\n            context.store.dispatch({\n              type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"LOAD_MAIN_POST_REQUEST\"]\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./pages/index.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POST_REQUEST, LOAD_MAIN_POST_SUCCESS, LOAD_MAIN_POST_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POST_REQUEST, LOAD_USER_POST_SUCCESS, LOAD_USER_POST_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, REMOVE_IMAGE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENT_REQUEST, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_REQUEST\", function() { return LOAD_MAIN_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_SUCCESS\", function() { return LOAD_MAIN_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_FAILURE\", function() { return LOAD_MAIN_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_REQUEST\", function() { return LOAD_USER_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_SUCCESS\", function() { return LOAD_USER_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_FAILURE\", function() { return LOAD_USER_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_REQUEST\", function() { return UPLOAD_IMAGE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_SUCCESS\", function() { return UPLOAD_IMAGE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_FAILURE\", function() { return UPLOAD_IMAGE_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_REQUEST\", function() { return LOAD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_SUCCESS\", function() { return LOAD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_FAILURE\", function() { return LOAD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_REQUEST\", function() { return REMOVE_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_SUCCESS\", function() { return REMOVE_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_FAILURE\", function() { return REMOVE_COMMENT_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  addPostErrorReason: false,\n  //포스트 업로드 실패 사유\n  isAddingPost: false,\n  //포스트 업로드 중\n  postAdded: false,\n  //포스트 업로드 성공\n  isAddingComment: false,\n  addCommentErrorReason: '',\n  commentAdded: false,\n  hasMorePost: false,\n  singlePost: null\n};\nvar LOAD_MAIN_POST_REQUEST = 'LOAD_MAIN_POST_REQUEST';\nvar LOAD_MAIN_POST_SUCCESS = 'LOAD_MAIN_POST_SUCCESS';\nvar LOAD_MAIN_POST_FAILURE = 'LOAD_MAIN_POST_FAILURE';\nvar LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';\nvar LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';\nvar LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';\nvar LOAD_USER_POST_REQUEST = 'LOAD_USER_POST_REQUEST';\nvar LOAD_USER_POST_SUCCESS = 'LOAD_USER_POST_SUCCESS';\nvar LOAD_USER_POST_FAILURE = 'LOAD_USER_POST_FAILURE';\nvar UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';\nvar UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';\nvar UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';\nvar REMOVE_IMAGE = 'REMOVE_IMAGE';\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';\nvar LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\nvar LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';\nvar UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';\nvar UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\nvar UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';\nvar LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';\nvar LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';\nvar RETWEET_REQUEST = 'RETWEET_REQUEST';\nvar RETWEET_SUCCESS = 'RETWEET_SUCCESS';\nvar RETWEET_FAILURE = 'RETWEET_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';\nvar LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nvar LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\nvar REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';\nvar REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';\nvar REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: true,\n          addPostErrorReason: '',\n          postAdded: false\n        });\n      }\n\n    case ADD_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: false,\n          mainPosts: [action.data].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n          postAdded: true,\n          imagePaths: []\n        });\n      }\n\n    case ADD_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: false,\n          addPostErrorReason: action.error\n        });\n      }\n\n    case ADD_COMMENT_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: true,\n          addCommentErrorReason: '',\n          commentAdded: false\n        });\n      }\n\n    case ADD_COMMENT_SUCCESS:\n      {\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n        var post = state.mainPosts[postIndex];\n        var Comments = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments), [action.data.comment]);\n\n        var mainPosts = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, post, {\n          Comments: Comments\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: false,\n          mainPosts: mainPosts,\n          commentAdded: true,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.singlePost.Comments), [action.data.comment])\n          })\n        });\n      }\n\n    case ADD_COMMENT_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: false,\n          addCommentErrorReason: action.error\n        });\n      }\n\n    case LOAD_COMMENT_SUCCESS:\n      {\n        var _postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post = state.mainPosts[_postIndex];\n        var _Comments = action.data.comments;\n\n        var _mainPosts = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts[_postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post, {\n          Comments: _Comments\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: action.data.comments\n          })\n        });\n      }\n\n    case LOAD_MAIN_POST_REQUEST:\n    case LOAD_HASHTAG_POSTS_REQUEST:\n    case LOAD_USER_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: !action.lastId ? [] : state.mainPosts,\n          hasMorePost: action.lastId ? state.hasMorePost : true\n        });\n      }\n\n    case LOAD_MAIN_POST_SUCCESS:\n    case LOAD_HASHTAG_POSTS_SUCCESS:\n    case LOAD_USER_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: state.mainPosts.concat(action.data),\n          hasMorePost: action.data.length === 10\n        });\n      }\n\n    case LOAD_MAIN_POST_FAILURE:\n    case LOAD_HASHTAG_POSTS_FAILURE:\n    case LOAD_USER_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UPLOAD_IMAGE_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UPLOAD_IMAGE_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          imagePaths: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.imagePaths), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action.data))\n        });\n      }\n\n    case UPLOAD_IMAGE_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_IMAGE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          imagePaths: state.imagePaths.filter(function (v, i) {\n            return i !== action.index;\n          })\n        });\n      }\n\n    case LIKE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case LIKE_POST_SUCCESS:\n      {\n        var _postIndex2 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post2 = state.mainPosts[_postIndex2];\n        var Likers = [{\n          id: action.data.userId\n        }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post2.Likers));\n\n        var _mainPosts2 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts2[_postIndex2] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post2, {\n          Likers: Likers\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost === null ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts2\n        }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n          Likers: [{\n            id: action.data.userId\n          }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.singlePost.Likers))\n        }));\n      }\n\n    case LIKE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNLIKE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNLIKE_POST_SUCCESS:\n      {\n        var _postIndex3 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post3 = state.mainPosts[_postIndex3];\n\n        var _Likers = _post3.Likers.filter(function (v) {\n          return v.id !== action.data.userId;\n        });\n\n        var _mainPosts3 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts3[_postIndex3] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post3, {\n          Likers: _Likers\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost === null ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts3\n        }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n          Likers: state.singlePost.Likers.filter(function (v) {\n            return v.id !== action.data.userId;\n          })\n        }));\n      }\n\n    case UNLIKE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case RETWEET_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case RETWEET_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: [action.data].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts))\n        });\n      }\n\n    case RETWEET_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: state.mainPosts.filter(function (v) {\n            return v.id !== action.data;\n          })\n        });\n      }\n\n    case REMOVE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_COMMENT_REQUEST:\n      {\n        var _postIndex4 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        console.log('postIndex', _postIndex4);\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_COMMENT_SUCCESS:\n      {\n        var _postIndex5 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post4 = state.mainPosts[_postIndex5];\n\n        var _Comments2 = _post4.Comments.filter(function (v) {\n          return v.id !== action.data.commentId;\n        });\n\n        var _mainPosts4 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts4[_postIndex5] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post4, {\n          Comments: _Comments2\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts4,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: state.singlePost.Comments.filter(function (v) {\n              return v.id !== action.data.commentId;\n            })\n          })\n        });\n      }\n\n    case REMOVE_COMMENT_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case LOAD_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          singlePost: action.data\n        });\n      }\n\n    default:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n  }\n});\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_OF_ME\", function() { return REMOVE_POST_OF_ME; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // 유저 정보들만 담고 있는 sotre 안에 초기값을 넣어준다. 이게 초기 state\n// const dummyUser = {\n//     id : 1,\n//     nickname : 'JINNE',\n//     Post : [],\n//     Followings : [],\n//     Followers : [],\n// }\n// 유저 정보들만 담고 있는 sotre 안에 초기값을 넣어준다.\n\nvar initialState = {\n  isLoggingOut: false,\n  //로그아웃 시도중\n  isLoggingIn: false,\n  //로그인 시도중\n  logInErrorReason: '',\n  //로그인 에러 사유\n  isSignedUp: false,\n  //회원가입 성공\n  isSigningUp: false,\n  //회원가입 시도중\n  signUpErrorReason: '',\n  //회원가입 실패 사유\n  me: null,\n  //내 정보\n  followingList: [],\n  //팔로잉 리스트\n  followerList: [],\n  //팔로워 리스트\n  userInfo: null,\n  //남의 정보\n  isEditingNickname: false,\n  // 닉네임 변경중\n  editNicknameErrorReason: '',\n  hasMoreFollower: false,\n  hasMoreFollowing: false\n}; // 여기까지 store\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST'; //액션의 이름\n\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';\nvar LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';\nvar LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 팔로워, 팔로잉 목록 불러오기\n\nvar LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';\nvar LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';\nvar LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';\nvar LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';\nvar LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';\nvar LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; // 팔로우 하는 액션\n\nvar FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';\nvar FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';\nvar FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';\nvar UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';\nvar UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';\nvar UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';\nvar REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';\nvar REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';\nvar REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';\nvar EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';\nvar EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';\nvar EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE'; // 중요한 액션!!!!! 리듀서의 단점때문에 만들어진 액션\n\nvar ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nvar REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // // 실제 액션\n// export const loginRequestAction = {\n//     type : LOG_IN_REQUEST,\n// };\n// export const logoutAction = {\n//     type : LOG_OUT_REQUEST,\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isLoggingIn: true,\n          logInErrorReason: ''\n        });\n      }\n\n    case LOG_IN_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isLoggingIn: false,\n          logInErrorReason: '',\n          me: action.data,\n          isLoading: false\n        });\n      }\n\n    case LOG_IN_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isLoggingIn: false,\n          logInErrorReason: action.reason,\n          me: null\n        });\n      }\n\n    case LOG_OUT_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isLoggingOut: true\n        });\n      }\n\n    case LOG_OUT_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isLoggingOut: false,\n          me: null\n        });\n      }\n\n    case SIGN_UP_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isSigningUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isSigningUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isSigningUp: false,\n          signUpErrorReason: action.error\n        });\n      }\n\n    case LOAD_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isSignedUp: false\n        });\n      }\n\n    case LOAD_USER_SUCCESS:\n      {\n        if (action.me) {\n          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n            me: action.data\n          });\n        }\n\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          userInfo: action.data\n        });\n      }\n\n    case LOAD_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case FOLLOW_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case FOLLOW_USER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            Followings: [{\n              id: action.data\n            }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.me.Followings))\n          })\n        });\n      }\n\n    case FOLLOW_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNFOLLOW_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNFOLLOW_USER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            Followings: state.me.Followings.filter(function (v) {\n              return v.id !== action.data;\n            })\n          }),\n          followingList: state.followingList.filter(function (v) {\n            return v.id !== action.data;\n          })\n        });\n      }\n\n    case UNFOLLOW_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case ADD_POST_TO_ME:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            Posts: [{\n              id: action.data\n            }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.me.Posts))\n          })\n        });\n      }\n\n    case REMOVE_POST_OF_ME:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            Posts: state.me.Posts.filter(function (v) {\n              return v.id !== action.data;\n            })\n          })\n        });\n      }\n\n    case LOAD_FOLLOWERS_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          followerList: !action.offset ? [] : state.followerList,\n          hasMoreFollower: action.offset ? state.hasMoreFollower : true\n        });\n      }\n\n    case LOAD_FOLLOWERS_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          followerList: state.followerList.concat(action.data),\n          hasMoreFollower: action.data.length === 3\n        });\n      }\n\n    case LOAD_FOLLOWERS_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case LOAD_FOLLOWINGS_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          followingList: !action.offset ? [] : state.followingList,\n          hasMoreFollowing: action.offset ? state.hasMoreFollowing : true\n        });\n      }\n\n    case LOAD_FOLLOWINGS_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          followingList: state.followingList.concat(action.data),\n          hasMoreFollowing: action.data.length === 3\n        });\n      }\n\n    case LOAD_FOLLOWINGS_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_FOLLOWER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_FOLLOWER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            Followers: state.me.Followers.filter(function (v) {\n              return v.id !== action.data;\n            })\n          }),\n          followerList: state.followerList.filter(function (v) {\n            return v.id !== action.data;\n          })\n        });\n      }\n\n    case REMOVE_FOLLOWER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case EDIT_NICKNAME_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isEditingNickname: true,\n          editNicknameErrorReason: ''\n        });\n      }\n\n    case EDIT_NICKNAME_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isEditingNickname: false,\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.me, {\n            nickname: action.data\n          })\n        });\n      }\n\n    case EDIT_NICKNAME_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isEditingNickname: false,\n          editNicknameErrorReason: action.error\n        });\n      }\n\n    default:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n  }\n});\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\project\\nodebird\\front\\pages\\index.js */\"./pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./pages/index.js?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/from\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/from%22?");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/is-array%22?");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/get-iterator%22?");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/is-iterable\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/is-iterable%22?");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/json/stringify%22?");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/create%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-properties%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-property%22?");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/freeze%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-symbols%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/keys%22?");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/set-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/promise%22?");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol%22?");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol/iterator%22?");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/utils%22?");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");\n\n//# sourceURL=webpack:///external_%22next/router%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");\n\n//# sourceURL=webpack:///external_%22prop-types-exact%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });