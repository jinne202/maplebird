webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POST_REQUEST, LOAD_MAIN_POST_SUCCESS, LOAD_MAIN_POST_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POST_REQUEST, LOAD_USER_POST_SUCCESS, LOAD_USER_POST_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, REMOVE_IMAGE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENT_REQUEST, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_REQUEST\", function() { return LOAD_MAIN_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_SUCCESS\", function() { return LOAD_MAIN_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POST_FAILURE\", function() { return LOAD_MAIN_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_REQUEST\", function() { return LOAD_USER_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_SUCCESS\", function() { return LOAD_USER_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POST_FAILURE\", function() { return LOAD_USER_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_REQUEST\", function() { return UPLOAD_IMAGE_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_SUCCESS\", function() { return UPLOAD_IMAGE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGE_FAILURE\", function() { return UPLOAD_IMAGE_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_REQUEST\", function() { return LOAD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_SUCCESS\", function() { return LOAD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENT_FAILURE\", function() { return LOAD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_REQUEST\", function() { return REMOVE_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_SUCCESS\", function() { return REMOVE_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_COMMENT_FAILURE\", function() { return REMOVE_COMMENT_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  addPostErrorReason: false,\n  //포스트 업로드 실패 사유\n  isAddingPost: false,\n  //포스트 업로드 중\n  postAdded: false,\n  //포스트 업로드 성공\n  isAddingComment: false,\n  addCommentErrorReason: '',\n  commentAdded: false,\n  hasMorePost: false,\n  singlePost: null\n};\nvar LOAD_MAIN_POST_REQUEST = 'LOAD_MAIN_POST_REQUEST';\nvar LOAD_MAIN_POST_SUCCESS = 'LOAD_MAIN_POST_SUCCESS';\nvar LOAD_MAIN_POST_FAILURE = 'LOAD_MAIN_POST_FAILURE';\nvar LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';\nvar LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';\nvar LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';\nvar LOAD_USER_POST_REQUEST = 'LOAD_USER_POST_REQUEST';\nvar LOAD_USER_POST_SUCCESS = 'LOAD_USER_POST_SUCCESS';\nvar LOAD_USER_POST_FAILURE = 'LOAD_USER_POST_FAILURE';\nvar UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';\nvar UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';\nvar UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';\nvar REMOVE_IMAGE = 'REMOVE_IMAGE';\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';\nvar LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\nvar LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';\nvar UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';\nvar UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\nvar UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';\nvar LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';\nvar LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';\nvar RETWEET_REQUEST = 'RETWEET_REQUEST';\nvar RETWEET_SUCCESS = 'RETWEET_SUCCESS';\nvar RETWEET_FAILURE = 'RETWEET_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';\nvar LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nvar LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\nvar REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';\nvar REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';\nvar REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: true,\n          addPostErrorReason: '',\n          postAdded: false\n        });\n      }\n\n    case ADD_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: false,\n          mainPosts: [action.data].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n          postAdded: true,\n          imagePaths: []\n        });\n      }\n\n    case ADD_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingPost: false,\n          addPostErrorReason: action.error\n        });\n      }\n\n    case ADD_COMMENT_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: true,\n          addCommentErrorReason: '',\n          commentAdded: false\n        });\n      }\n\n    case ADD_COMMENT_SUCCESS:\n      {\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n        var post = state.mainPosts[postIndex];\n        var Comments = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments), [action.data.comment]);\n\n        var mainPosts = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, post, {\n          Comments: Comments\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: false,\n          mainPosts: mainPosts,\n          commentAdded: true,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.singlePost.Comments), [action.data.comment])\n          })\n        });\n      }\n\n    case ADD_COMMENT_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          isAddingComment: false,\n          addCommentErrorReason: action.error\n        });\n      }\n\n    case LOAD_COMMENT_SUCCESS:\n      {\n        var _postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post = state.mainPosts[_postIndex];\n        var _Comments = action.data.comments;\n\n        var _mainPosts = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts[_postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post, {\n          Comments: _Comments\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: action.data.comments\n          })\n        });\n      }\n\n    case LOAD_MAIN_POST_REQUEST:\n    case LOAD_HASHTAG_POSTS_REQUEST:\n    case LOAD_USER_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: !action.lastId ? [] : state.mainPosts,\n          hasMorePost: action.lastId ? state.hasMorePost : true\n        });\n      }\n\n    case LOAD_MAIN_POST_SUCCESS:\n    case LOAD_HASHTAG_POSTS_SUCCESS:\n    case LOAD_USER_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: state.mainPosts.concat(action.data),\n          hasMorePost: action.data.length === 10\n        });\n      }\n\n    case LOAD_MAIN_POST_FAILURE:\n    case LOAD_HASHTAG_POSTS_FAILURE:\n    case LOAD_USER_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UPLOAD_IMAGE_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UPLOAD_IMAGE_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          imagePaths: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.imagePaths), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action.data))\n        });\n      }\n\n    case UPLOAD_IMAGE_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_IMAGE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          imagePaths: state.imagePaths.filter(function (v, i) {\n            return i !== action.index;\n          })\n        });\n      }\n\n    case LIKE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case LIKE_POST_SUCCESS:\n      {\n        var _postIndex2 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post2 = state.mainPosts[_postIndex2];\n        var Likers = [{\n          id: action.data.userId\n        }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post2.Likers));\n\n        var _mainPosts2 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts2[_postIndex2] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post2, {\n          Likers: Likers\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts2,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Likers: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.singlePost.Likers), [{\n              id: action.data.userId\n            }])\n          })\n        });\n      }\n\n    case LIKE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNLIKE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case UNLIKE_POST_SUCCESS:\n      {\n        var _postIndex3 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post3 = state.mainPosts[_postIndex3];\n\n        var _Likers = _post3.Likers.filter(function (v) {\n          return v.id !== action.data.userId;\n        });\n\n        var _mainPosts3 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts3[_postIndex3] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post3, {\n          Likers: _Likers\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts3,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Likers: state.singlePost.Likers.filter(function (v) {\n              return v.id !== action.data.userId;\n            })\n          })\n        });\n      }\n\n    case UNLIKE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case RETWEET_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case RETWEET_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: [action.data].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts))\n        });\n      }\n\n    case RETWEET_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_POST_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: state.mainPosts.filter(function (v) {\n            return v.id !== action.data;\n          })\n        });\n      }\n\n    case REMOVE_POST_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_COMMENT_REQUEST:\n      {\n        var _postIndex4 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        console.log('postIndex', _postIndex4);\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case REMOVE_COMMENT_SUCCESS:\n      {\n        var _postIndex5 = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var _post4 = state.mainPosts[_postIndex5];\n\n        var _Comments2 = _post4.Comments.filter(function (v) {\n          return v.id !== action.data.commentId;\n        });\n\n        var _mainPosts4 = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        _mainPosts4[_postIndex5] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _post4, {\n          Comments: _Comments2\n        });\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          mainPosts: _mainPosts4,\n          singlePost: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state.singlePost, {\n            Comments: state.singlePost.Comments.filter(function (v) {\n              return v.id !== action.data.commentId;\n            })\n          })\n        });\n      }\n\n    case REMOVE_COMMENT_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n\n    case LOAD_POST_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, {\n          singlePost: action.data\n        });\n      }\n\n    default:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n      }\n  }\n});\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ })

})