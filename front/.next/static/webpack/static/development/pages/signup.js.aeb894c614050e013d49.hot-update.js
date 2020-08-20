webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, idCheck, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInput\", function() { return useInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"idCheck\", function() { return idCheck; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Style_PagesStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style/PagesStyle */ \"./pages/Style/PagesStyle.js\");\n\n // import Head from 'next/head';\n// import AppLayout from '../components/AppLayout';\n\n\n\n\n\n\n\n\nvar TextInput = function TextInput(_ref) {\n  var value = _ref.value;\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, value)\n  );\n};\n\nTextInput.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n}; // custom hook -!\n\nvar useInput = function useInput() {\n  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initValue),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      value = _useState2[0],\n      setter = _useState2[1];\n\n  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n}; // 커스텀 훅을 만들 수 있음. 중복되는 것들!\n\nvar idCheck = function idCheck(id) {\n  var idCheckRegex = /^[a-z0-9]{4,12}$/;\n  return idCheckRegex.test(id);\n};\n\nvar SingUp = function SingUp() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      id = _useState4[0],\n      setId = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      idError = _useState6[0],\n      setIdError = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      passwordCheck = _useState8[0],\n      setPasswordCheck = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState9, 2),\n      term = _useState10[0],\n      setTerm = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState11, 2),\n      passwordError = _useState12[0],\n      setPasswordError = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState13, 2),\n      termError = _useState14[0],\n      setTermError = _useState14[1]; // 커스텀 훅 적용\n  // const [id, onChangeId] = useInput('');\n\n\n  var _useInput = useInput(''),\n      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      nick = _useInput2[0],\n      onChangeNick = _useInput2[1];\n\n  var _useInput3 = useInput(''),\n      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput3, 2),\n      password = _useInput4[0],\n      onChangePassword = _useInput4[1]; // 커스텀 훅 적용\n\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isSigningUp = _useSelector.isSigningUp,\n      me = _useSelector.me,\n      isSignedUp = _useSelector.isSignedUp;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (me) {\n      // 로그인 했으니 메인페이지로 이동\n      alert('로그인했으니 메인페이지로 이동합니다');\n      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');\n    }\n  }, [me && me.id]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isSignedUp === true) {\n      setTimeout(function () {\n        alert('회원가입 되었으니 메인페이지로 이동합니다');\n        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');\n      }, 500);\n    }\n  }, [isSignedUp]);\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])(); // FORM은 REACT의 USESTATE를 쓰고 REDUX에서는 최종본을 모아서 넣음! 이렇게 하면 STATE를 둘 다 쓰는 셈이 된다.\n\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!idCheck(id)) {\n      return setIdError(true);\n    }\n\n    setTermError(!term); // dispatch({\n    //     type : SIGN_UP_REQUEST,\n    //     data : {\n    //         userId : id,\n    //         nickname : nick,\n    //         password\n    //     }\n    // });\n\n    console.log({\n      id: id,\n      nick: nick,\n      password: password,\n      passwordCheck: passwordCheck,\n      term: term\n    });\n  }, [id, nick, password, passwordCheck, term]);\n  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setId(e.target.value);\n  }, []);\n  var onBlurId = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setIdError(setId !== idCheck);\n  }, []);\n  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setTerm(e.target.checked);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    term && setTermError(false);\n  }, [term]);\n\n  if (me) {\n    return null;\n  }\n\n  if (isSignedUp) {\n    return null;\n  }\n\n  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n      onSubmit: onSubmit,\n      style: {\n        padding: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      htmlFor: \"user-id\"\n    }, \"USER ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n      name: \"user-id\",\n      value: id,\n      required: true,\n      onChange: onChangeId,\n      onBlur: onBlurId\n    }), idError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_PagesStyle__WEBPACK_IMPORTED_MODULE_7__[\"SignUpError\"], null, \" ID\\uB294 4\\uAE00\\uC790 \\uC774\\uC0C1 12\\uAE00\\uC790 \\uC774\\uD558 \\uC601\\uBB38\\uC790, \\uC22B\\uC790\\uB9CC \\uAC00\\uB2A5\\uD569\\uB2C8\\uB2E4 \") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_PagesStyle__WEBPACK_IMPORTED_MODULE_7__[\"SignUpConfirm\"], null, \"\\uBA4B\\uC9C4 \\uC544\\uC774\\uB514\\uB124\\uC694!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      htmlFor: \"user-nick\"\n    }, \"USER Nickname\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n      name: \"user-nick\",\n      value: nick,\n      required: true,\n      onChange: onChangeNick\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      htmlFor: \"user-password\"\n    }, \"USER Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n      name: \"user-password\",\n      type: \"password\",\n      value: password,\n      required: true,\n      onChange: onChangePassword\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      htmlFor: \"user-password-check\"\n    }, \"USER Password check\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n      name: \"user-password-check\",\n      type: \"password\",\n      value: passwordCheck,\n      required: true,\n      onChange: onChangePasswordCheck\n    }), passwordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_PagesStyle__WEBPACK_IMPORTED_MODULE_7__[\"SignUpError\"], null, \" \\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4 \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      style: {\n        marginTop: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Checkbox\"], {\n      name: \"user-term\",\n      checked: term,\n      onChange: onChangeTerm\n    }, \"ok?\"), termError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Style_PagesStyle__WEBPACK_IMPORTED_MODULE_7__[\"SignUpError\"], null, \"\\uC57D\\uAD00\\uC5D0 \\uB3D9\\uC758\\uD558\\uC154\\uC57C \\uD569\\uB2C8\\uB2E4\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      style: {\n        marginTop: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      type: \"primary\",\n      htmlType: \"submit\",\n      loading: isSigningUp\n    }, \"SIGN UP\"))))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingUp);\n\n//# sourceURL=webpack:///./pages/signup.js?");

/***/ })

})