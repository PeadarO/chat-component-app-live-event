webpackHotUpdate("main",{

/***/ "./src/AppStateContext.tsx":
/*!*********************************!*\
  !*** ./src/AppStateContext.tsx ***!
  \*********************************/
/*! exports provided: AppStateContext, AppStateProvider, useAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateContext\", function() { return AppStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateProvider\", function() { return AppStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppState\", function() { return useAppState; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import { nanoid } from \"nanoid\"\n// import { findItemIndexById } from \"./utils/findItemIndexById\"\n// import { moveItem } from \"./utils/moveItem\"\n// import { DragItem } from \"./DragItem\"\n\nvar PubNub = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n\nvar AppStateContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])({});\n\nvar appStateReducer = function appStateReducer(state, action) {\n  switch (action.type) {\n    /*\n            internalKey: string,\n            key: string,\n            senderId: string,\n            message: string,\n            UserAvatar: string,\n            timetoken: null,\n            senderName: string,\n            dateFormat: string,\n            reactions: null,\n            addMessageReaction: null,\n            addActions: null\n    */\n    case \"ADD_MESSAGE\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          messages: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.messages), [_objectSpread(_objectSpread({}, action.payload), {}, {\n            messages: []\n          })])\n        });\n      }\n\n    case \"ADD_EVENT_LIST\":\n      {\n        return _objectSpread({}, state);\n      }\n    // case \"ADD_EVENT\": {\n    // //   const targetLaneIndex = findItemIndexById(\n    // //     state.lists,\n    // //     action.payload.listId\n    // //   )\n    // //   state.lists[targetLaneIndex].tasks.push({\n    // //     id: nanoid(),\n    // //     text: action.payload.text\n    // //   })\n    //   return {\n    //     ...state\n    //   }\n    // }\n\n    default:\n      {\n        return state;\n      }\n  }\n}; //   const store = createAppStore({\n//       pubnub: {\n//         api: pubnub\n//       }\n//     });\n\n\nvar appData = {\n  simulateLogin: true,\n  users: [],\n  messages: [],\n  events: [],\n  pubnub: new PubNub({\n    publishKey: \"pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793\",\n    subscribeKey: \"sub-c-419013b0-9953-11ea-9123-e6a08f73ae22\",\n    uuid: \"023402340SDFSFS23BBF\"\n  }),\n  defaultchannel: [\"liveeventdemo\"]\n};\nvar AppStateProvider = function AppStateProvider(_ref) {\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(appStateReducer, appData),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    return console.log(count);\n  }, [count]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // props.client.getMessage('channel1', (msg) => {\n    //     console.log(msg);\n    // });\n    try {\n      state.pubnub.addListener({\n        message: function message(messageEvent) {\n          console.log(messageEvent.message);\n          dispatch('ADD_MESSAGE'); //setMessages([...messages, messageEvent.message]);\n          //   setMessages(function (messages) {\n          //     return [...messages, message]\n          //   });\n        }\n      });\n      state.pubnub.subscribe(state.defaultchannel);\n    } catch (e) {\n      console.log(\"Sub error \".concat(e.message));\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    return console.log(state.pubnub);\n  }, [state.pubnub]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AppStateContext.Provider, {\n    value: {\n      state: appData\n    }\n  }, children);\n};\nvar useAppState = function useAppState() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(AppStateContext);\n};\n\n//# sourceURL=webpack:///./src/AppStateContext.tsx?");

/***/ })

})