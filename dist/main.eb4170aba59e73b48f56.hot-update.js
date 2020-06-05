webpackHotUpdate("main",{

/***/ "./src/components/Login/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.tsx ***!
  \****************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledCheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledCheckBox */ \"./src/components/StyledCheckBox/index.tsx\");\n/* harmony import */ var _Login_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.style */ \"./src/components/Login/Login.style.tsx\");\n/* harmony import */ var _PromotionAd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PromotionAd */ \"./src/components/PromotionAd/index.ts\");\n\n //import { createPubNubListener } from 'pubnub-redux';\n//import { createAppStore } from \"../../store\";\n\n\n //const imageSrc = require('/images/loginwallpaper-wallpaper.png')\n// import LEChatRoom from '../components/LEChatRoom';\n// import LEEventViewer from '../components/LEEventViewer';\n// import LEMessage from '../components/LEMessage';\n// import LELogin from '../components/LELogin';\n\n\n\nvar Login = function Login(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"PubNubDesigner\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"CenterLoginBox\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PromotionAd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginForm\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"ButtonLoginFacebook\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"ButtonLoginGoogle\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormDividerOr\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormInputUserName\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormInputEmail\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormInputPassword\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormCheckIsModerator\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledCheckBox__WEBPACK_IMPORTED_MODULE_2__[\"StyledCheckBox\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormModeratorID\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_style__WEBPACK_IMPORTED_MODULE_3__[\"ButtonLogin\"], null, \"Sign In\"))));\n  var channels = ['awesomeChannel'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      input = _useState4[0],\n      setInput = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return console.log(messages);\n  }, [messages]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return console.log(props);\n  }, [props]);\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      time = _useState6[0],\n      setTime = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      error = _useState8[0],\n      setError = _useState8[1]; //useEffect(() => console.log(props.store.dispatch), [props.store.dispatch]);\n\n\n  var leaveApplication = function leaveApplication() {// This is required to show the current user leave immediately rather than\n    // wating for the timeout period\n    //useEffect(() => console.log(props), [props]);\n    //props.client.unsubscribeAll();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Start listening for messages and events from PubNub\n    //props.client.addListener(createPubNubListener(props.store.dispatch));\n    //props.client.addListener(createTypingIndicatorsListener(props.store.dispatch));\n    return; //leaveApplication();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"beforeunload\", function () {\n      leaveApplication();\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // props.client.getMessage('channel1', (msg) => {\n    //     console.log(msg);\n    // });\n    // props.client.addListener({\n    //   message: (message) => {\n    //     setMessages(function (messages) {\n    //       return [...messages, message]\n    //     });\n    //   },\n    // });\n    // props.client.subscribe({ channels });\n    return leaveApplication;\n  }, []); // const sendMessage = useCallback(\n  //   async message => {\n  //     await props.client.publish({\n  //       channel: channels[0],\n  //       message,\n  //     });\n  //     setInput('');\n  //   },\n  //   [props.client, setInput]\n  // );\n};\n\n\n\n//# sourceURL=webpack:///./src/components/Login/Login.tsx?");

/***/ }),

/***/ "./src/components/StyledCheckBox/StyledCheckBox.tsx":
/*!**********************************************************!*\
  !*** ./src/components/StyledCheckBox/StyledCheckBox.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n;\n\nvar StyledCheckBox = function StyledCheckBox(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"StyledCheckBoxWrapper\"\n  }, \"Test content\");\n};\n\nStyledCheckBox.propTypes = {// bla: PropTypes.string,\n};\nStyledCheckBox.defaultProps = {// bla: 'test',\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledCheckBox);\n\n//# sourceURL=webpack:///./src/components/StyledCheckBox/StyledCheckBox.tsx?");

/***/ }),

/***/ "./src/components/StyledCheckBox/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/StyledCheckBox/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StyledCheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledCheckBox */ \"./src/components/StyledCheckBox/StyledCheckBox.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_StyledCheckBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/StyledCheckBox/index.tsx?");

/***/ })

})