webpackHotUpdate("main",{

/***/ "./src/liveevents-context.tsx":
/*!************************************!*\
  !*** ./src/liveevents-context.tsx ***!
  \************************************/
/*! exports provided: LiveEventContext, LiveEventContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveEventContext\", function() { return LiveEventContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveEventContextProvider\", function() { return LiveEventContextProvider; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _initialState;\n\n\nvar initialState = (_initialState = {\n  eventID: \"0001\",\n  loading: false,\n  error: null,\n  participantsCount: 0,\n  hostName: 'Your name',\n  events: [],\n  pubnubclient: null,\n  simulateLogin: true\n}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"eventID\", \"0001\"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"loading\", false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"error\", null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"participantsCount\", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"hostName\", 'Your name'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"pubnubconfig\", pubnubConfig), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"pubnubclient\", pubnub), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"pubnubstore\", store), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"simulate\", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_initialState, \"events\", []), _initialState);\nvar LiveEventContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(initialState);\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_EVENT\":\n      return {\n        events: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.events), [action.payload])\n      };\n    //   case \"DEL_CONTACT\":\n    //     return {\n    //       contacts: state.contacts.filter(\n    //         contact => contact.id !== action.payload\n    //       )\n    //     };\n    //   case \"START\":\n    //     return {\n    //       loading: true\n    //     };\n    //   case \"COMPLETE\":\n    //     return {\n    //       loading: false\n    //     };\n\n    default:\n      throw new Error();\n  }\n};\n\nvar LiveEventContextProvider = function LiveEventContextProvider(props) {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LiveEventContext.Provider, {\n    value: [state, dispatch]\n  }, props.children);\n};\n\n//# sourceURL=webpack:///./src/liveevents-context.tsx?");

/***/ })

})