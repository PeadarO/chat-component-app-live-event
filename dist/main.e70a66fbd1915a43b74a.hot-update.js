webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
false,

/***/ "./src/App.css":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/pubnub-keys.json */ \"./config/pubnub-keys.json\");\nvar _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/pubnub-keys.json */ \"./config/pubnub-keys.json\", 1);\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ \"./src/Theme.ts\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ \"./src/Router.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\n\n//import './App.css';\nvar pubnubConfig = Object.assign({}, {\n  // Ensure that subscriptions will be retained if the network connection is lost\n  restore: true,\n  heartbeatInterval: 0\n}, _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1__);\nvar pubnub = new pubnub__WEBPACK_IMPORTED_MODULE_3___default.a({\n  publishKey: \"pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793\",\n  subscribeKey: \"sub-c-419013b0-9953-11ea-9123-e6a08f73ae22\",\n  uuid: \"023402340SDFSFS23BBF\"\n});\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ThemeProvider\"], {\n    theme: _Theme__WEBPACK_IMPORTED_MODULE_2__[\"appTheme\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__[\"ApplicationRouter\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ })

})