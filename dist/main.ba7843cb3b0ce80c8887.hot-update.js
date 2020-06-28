webpackHotUpdate("main",{

/***/ "./src/AppStateContext.tsx":
/*!*********************************!*\
  !*** ./src/AppStateContext.tsx ***!
  \*********************************/
/*! exports provided: AppStateProvider, useAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateProvider\", function() { return AppStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppState\", function() { return useAppState; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import { nanoid } from \"nanoid\"\n// import { findItemIndexById } from \"./utils/findItemIndexById\"\n// import { moveItem } from \"./utils/moveItem\"\n// import { DragItem } from \"./DragItem\"\n\nvar AppStateContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])({});\n\nvar appStateReducer = function appStateReducer(state, action) {\n  switch (action.type) {\n    case \"ADD_LIST\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          lists: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.lists), [{\n            id: \"1\",\n            text: action.payload,\n            events: []\n          }])\n        });\n      }\n\n    case \"ADD_EVENT\":\n      {\n        //   const targetLaneIndex = findItemIndexById(\n        //     state.lists,\n        //     action.payload.listId\n        //   )\n        //   state.lists[targetLaneIndex].tasks.push({\n        //     id: nanoid(),\n        //     text: action.payload.text\n        //   })\n        return _objectSpread({}, state);\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nvar appData = {\n  simulateLogin: true,\n  users: [{\n    id: \"0\",\n    user: \"To Do\"\n  }, {\n    id: \"1\",\n    text: \"In Progress\"\n  }, {\n    id: \"2\",\n    text: \"Done\"\n  }]\n};\nvar AppStateProvider = function AppStateProvider(_ref) {\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(appStateReducer, appData),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AppStateContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, children);\n};\nvar useAppState = function useAppState() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(AppStateContext);\n};\n\n//# sourceURL=webpack:///./src/AppStateContext.tsx?");

/***/ })

})