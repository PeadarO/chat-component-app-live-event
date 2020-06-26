webpackHotUpdate("main",{

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageList.styles */ \"./src/components/MessageList/MessageList.styles.tsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message/Message */ \"./src/components/Message/Message.tsx\");\n\n\n\n\nvar MessageList = function MessageList(props) {\n  var msgList = Array.from(props.messages.default); //   for(let i=0; i<props.messages.length; i++){\n  //     console.log(props.messages[i].key); //use i instead of 0\n  // }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var Messages = msgList.map(function (onemessage) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_3__[\"Message\"], {\n      skin: \"\",\n      store: \"\",\n      client: \"\",\n      message: onemessage,\n      key: onemessage.key\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    try {\n      props.client.addListener({\n        message: function message(_message) {// setMessages( (messages) => {\n          //   return [...messages, message]\n          // });\n        }\n      }); //props.client.subscribe({ channels });\n    } catch (_unused) {\n      console.log();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageList_styles__WEBPACK_IMPORTED_MODULE_2__[\"MessageListWrapper\"], null, Messages);\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ })

})