webpackHotUpdate("main",{

/***/ "./src/Router.tsx":
/*!************************!*\
  !*** ./src/Router.tsx ***!
  \************************/
/*! exports provided: ApplicationRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApplicationRouter\", function() { return ApplicationRouter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.tsx\");\n/* harmony import */ var _features_authentication_authenticationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/authentication/authenticationModel */ \"./src/features/authentication/authenticationModel.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/pubnub-keys.json */ \"./src/config/pubnub-keys.json\");\nvar _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/pubnub-keys.json */ \"./src/config/pubnub-keys.json\", 1);\n/* harmony import */ var _foundations_utilities_isPubNubConfigured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundations/utilities/isPubNubConfigured */ \"./src/foundations/utilities/isPubNubConfigured.tsx\");\n/* harmony import */ var _styles_ErrorBanner_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ErrorBanner.style */ \"./src/styles/ErrorBanner.style.tsx\");\n/* harmony import */ var _components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ChatDemo/ChatDemo */ \"./src/components/ChatDemo/ChatDemo.tsx\");\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Login/Login */ \"./src/components/Login/Login.tsx\");\n\n\n\n\n\n\n\n\n\nvar ErrorBannerComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ErrorBanner_style__WEBPACK_IMPORTED_MODULE_6__[\"ErrorBanner\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Please run \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, \"yarn install\")));\nvar ApplicationRouter = function ApplicationRouter(props) {\n  //This loggedIn variable is used to show the login screen first if the user is not logged in.\n  var loggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_features_authentication_authenticationModel__WEBPACK_IMPORTED_MODULE_2__[\"isUserLoggedIn\"]);\n  var directToEvent = loggedIn || props.simulate; //Comment previous line and uncomment the following line\n  //to go directly to LiveEvent without going through Login screen.\n\n  directToEvent = true; //view will contain the login screen or chat depending if the user is logged in or not:\n\n  var view = directToEvent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_7__[\"ChatDemo\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_8__[\"Login\"], null); // We return the view, as defined above, inside the Wrapper element\n  // defined in ./syle\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], null, !Object(_foundations_utilities_isPubNubConfigured__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_4__) && ErrorBannerComponent, view);\n};\n\n//# sourceURL=webpack:///./src/Router.tsx?");

/***/ })

})