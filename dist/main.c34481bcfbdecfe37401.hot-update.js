webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./src/components/Message/Message.styles.tsx":
/*!***************************************************!*\
  !*** ./src/components/Message/Message.styles.tsx ***!
  \***************************************************/
/*! exports provided: MessageWrapper, MessageMessageWrapper, SenderNameWrapper, AvatarWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageWrapper\", function() { return MessageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageMessageWrapper\", function() { return MessageMessageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SenderNameWrapper\", function() { return SenderNameWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AvatarWrapper\", function() { return AvatarWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Messagestyles__MessageWrapper\",\n  componentId: \"sc-1fjtknk-0\"\n})([\"height:100px;width:308px;flex-shrink:0;\"]);\nvar MessageMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"Messagestyles__MessageMessageWrapper\",\n  componentId: \"sc-1fjtknk-1\"\n})([\"top:20px;left:50px;width:90px;height:50px;width:250px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;text-overflow:ellipsis;overflow-wrap:true white-space:nowrap;\"]);\nvar SenderNameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"Messagestyles__SenderNameWrapper\",\n  componentId: \"sc-1fjtknk-2\"\n})([\"top:5px;left:20px;width:50px;height:30px;width:auto;position:relative;\"]);\nvar AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"Messagestyles__AvatarWrapper\",\n  componentId: \"sc-1fjtknk-3\"\n})([\"top:20px;left:7px;width:52px;height:30px;width:auto;position:relative;\"]);\n\n//# sourceURL=webpack:///./src/components/Message/Message.styles.tsx?");

/***/ }),

/***/ "./src/components/Message/Message.tsx":
/*!********************************************!*\
  !*** ./src/components/Message/Message.tsx ***!
  \********************************************/
/*! exports provided: UserMessage, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMessage\", function() { return UserMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Message_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.styles */ \"./src/components/Message/Message.styles.tsx\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar UserMessage = function UserMessage(payload) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserMessage);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"internalKey\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"key\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"senderId\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"message\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"UserAvatar\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"timetoken\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"senderName\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"dateFormat\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"reactions\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addMessageReaction\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addActions\", void 0);\n\n  this.internalKey = pubnub__WEBPACK_IMPORTED_MODULE_4__[\"generateUUID\"].toString();\n  var data = JSON.parse(payload);\n\n  if (!data.key) {\n    throw new Error('Invalid message payload received: ' + payload);\n  }\n\n  this.internalKey = data.internalKey;\n  this.message = data.message;\n  this.key = data.key;\n  this.UserAvatar = data.UserAvatar;\n  this.timetoken = data.timetoken;\n  this.senderId = data.senderId;\n  this.senderName = data.senderName;\n  this.dateFormat = data.dateFormat;\n  this.reactions = data.reactions;\n  this.addMessageReaction = data.addMessageReaction;\n  this.addActions = data.addActions;\n};\nvar Message = function Message(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_3__[\"MessageWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_3__[\"AvatarWrapper\"], {\n    src: props.message.UserAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_3__[\"SenderNameWrapper\"], null, props.message.senderName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_3__[\"MessageMessageWrapper\"], null, props.message.message));\n};\n\n//# sourceURL=webpack:///./src/components/Message/Message.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.styles.tsx":
/*!***********************************************************!*\
  !*** ./src/components/MessageList/MessageList.styles.tsx ***!
  \***********************************************************/
/*! exports provided: MessageListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListWrapper\", function() { return MessageListWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"MessageListstyles__MessageListWrapper\",\n  componentId: \"sc-1uvaszp-0\"\n})([\"color:white;flex-direction:column;overflow-y:scroll;list-style:none;display:flex;height:640px;\"]);\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.styles.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageList.styles */ \"./src/components/MessageList/MessageList.styles.tsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message/Message */ \"./src/components/Message/Message.tsx\");\n\n\n\n\nvar MessageList = function MessageList(props) {\n  var msgList = Array.from(props.messages.default); //   for(let i=0; i<props.messages.length; i++){\n  //     console.log(props.messages[i].key); //use i instead of 0\n  // }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var Messages = msgList.map(function (onemessage) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_3__[\"Message\"], {\n      skin: \"\",\n      store: \"\",\n      client: \"\",\n      message: onemessage,\n      key: onemessage.key\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    try {\n      props.client.addListener({\n        message: function message(_message) {\n          setMessages(function (messages) {\n            //return [...messages, message]\n            Messages.push({\n              \"internalKey\": \"ef090be0-834c-46cf-a8a2-3e775df38852\",\n              \"key\": \"fedba3c0-9a11-4447-a002-aa6a55b80165\",\n              \"senderId\": \"29d5aa4d-2548-473f-a0ef-6793194e0663\",\n              \"message\": \"Congrats to K1 for smashing Gen U 👻💪. Gen U draft fell apart game to game and K1 took advantage of the mistakes.\",\n              \"UserAvatar\": \"https://robohash.org/veritatisofficiistenetur.jpg?size=50x50&set=set1\",\n              \"timetoken\": \"1592492476\",\n              \"senderName\": \"skirman0\",\n              \"dateFormat\": null,\n              \"reactions\": null,\n              \"addMessageReaction\": null,\n              \"addActions\": null\n            });\n          });\n        }\n      }); //props.client.subscribe({ channels });\n    } catch (_unused) {\n      console.log();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageList_styles__WEBPACK_IMPORTED_MODULE_2__[\"MessageListWrapper\"], null, Messages);\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ })

})