webpackHotUpdate("main",{

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Message/Message */ \"./src/components/Message/Message.tsx\");\n/* harmony import */ var _liveevents_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../liveevents-context */ \"./src/liveevents-context.tsx\");\n\n\n\n\nvar MessageList = function MessageList(props) {\n  var msgList = Array.from(props.messages.default); //   for(let i=0; i<props.messages.length; i++){\n  //     console.log(props.messages[i].key); //use i instead of 0\n  // }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var Messages = msgList.map(function (onemessage) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n      message: onemessage,\n      key: onemessage.key\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var liveEventContext = useContext(_liveevents_context__WEBPACK_IMPORTED_MODULE_3__[\"LiveEventContext\"]);\n\n    try {\n      liveEventContext.client.addListener({\n        message: function message(_message) {\n          setMessages(function (messages) {\n            //return [...messages, message]\n            Messages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n              skin: \"\",\n              store: \"\",\n              client: \"\",\n              message: new _Message_Message__WEBPACK_IMPORTED_MODULE_2__[\"UserMessage\"](_message //             `{\n              //     \"internalKey\": \"ef090be0-834c-46cf-a8a2-3e775df38852\",\n              //     \"key\": \"fedba3c0-9a11-4447-a002-aa6a55b80165\",\n              //     \"senderId\": \"29d5aa4d-2548-473f-a0ef-6793194e0663\",\n              //     \"message\": \"Congrats to K1 for smashing Gen U 👻💪. Gen U draft fell apart game to game and K1 took advantage of the mistakes.\",\n              //     \"UserAvatar\": \"https://robohash.org/veritatisofficiistenetur.jpg?size=50x50&set=set1\",\n              //     \"timetoken\": \"1592492476\",\n              //     \"senderName\": \"skirman0\",\n              //     \"dateFormat\": null,\n              //     \"reactions\": null,\n              //     \"addMessageReaction\": null,\n              //     \"addActions\": null\n              // }`\n              ),\n              key: _message.key\n            }));\n          });\n        }\n      });\n      var channels = ['awesomeChannel'];\n      props.client.subscribe({\n        channels: channels,\n        withPresence: false\n      });\n    } catch (e) {\n      console.log(e);\n    }\n  }, []);\n  return (\n    /*#__PURE__*/\n    //   <MessageListWrapper>\n    // {Messages}\n    // </MessageListWrapper>\n    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_liveevents_context__WEBPACK_IMPORTED_MODULE_3__[\"LiveEventContext\"].Consumer, null)\n  );\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ })

})