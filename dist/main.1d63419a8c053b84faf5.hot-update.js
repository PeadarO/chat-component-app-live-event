webpackHotUpdate("main",{

/***/ "./src/components/ChatDemo/ChatDemo.tsx":
/*!**********************************************!*\
  !*** ./src/components/ChatDemo/ChatDemo.tsx ***!
  \**********************************************/
/*! exports provided: ChatDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatDemo\", function() { return ChatDemo; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChatDemo_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatDemo.style */ \"./src/components/ChatDemo/ChatDemo.style.tsx\");\n/* harmony import */ var _LiveFeedPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LiveFeedPanel */ \"./src/components/LiveFeedPanel/index.tsx\");\n/* harmony import */ var _MessageListPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MessageListPanel */ \"./src/components/MessageListPanel/index.tsx\");\n/* harmony import */ var _EventDetailsTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../EventDetailsTop */ \"./src/components/EventDetailsTop/index.tsx\");\n/* harmony import */ var _EventDetailsBottom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EventDetailsBottom */ \"./src/components/EventDetailsBottom/index.tsx\");\n/* harmony import */ var _MessageListPanel_MessageListPanel_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MessageListPanel/MessageListPanel.styles */ \"./src/components/MessageListPanel/MessageListPanel.styles.tsx\");\n\n\n\n\n\n\n // import { createPubNubListener } from 'pubnub-redux';\n// import { createAppStore } from \"../../store\";\n// import PubNub from 'pubnub';\n// import { createTypingIndicatorsListener } from \"../../features/typingIndicator/typingIndicatorModel\";\n// import ReactDOM from 'react-dom';\n// import { PubNubProvider, usePubNub } from 'pubnub-react';\n// import styled from 'styled-components';\n// import {ContentModPanel} from '../ContentModPanel/ContentModPanel';\n// import LEEventViewer from '../components/LEEventViewer';\n// import LEMessage from '../components/LEMessage';\n// import LELogin from '../components/LELogin';\n\n\nvar ChatDemo = function ChatDemo(props) {\n  //const ChatDemo:FunctionComponent<{ props?: ChatInitProps }> = ({ props = {} }) => {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      input = _useState4[0],\n      setInput = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return console.log(messages);\n  }, [messages]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return console.log(props);\n  }, [props]);\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      time = _useState6[0],\n      setTime = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      error = _useState8[0],\n      setError = _useState8[1]; //useEffect(() => console.log(props.store.dispatch), [props.store.dispatch]);\n\n\n  var leaveApplication = function leaveApplication() {// This is required to show the current user leave immediately rather than\n    // wating for the timeout period\n    //useEffect(() => console.log(props), [props]);\n    //props.client.unsubscribeAll();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    //Start listening for messages and events from Pub\n    //props.client.addListener();\n    //props.client.addListener(createPubNubListener(props.store.dispatch));\n    //props.client.addListener(createTypingIndicatorsListener(props.store.dispatch));\n    return leaveApplication();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"beforeunload\", function () {\n      leaveApplication();\n    });\n  }, []);\n  /* useEffect(() => {\n     // props.client.getMessage('channel1', (msg) => {\n    //     console.log(msg);\n    // });\n    try{\n      props.client.addListener({\n        message: (message) => {\n  \n          setMessages(function (messages) {\n            return [...messages, message]\n          });\n        },\n      });\n  \n      props.client.subscribe({ channels });\n    }\n      catch{\n  console.log();\n  }\n  return leaveApplication;\n      \n  }, []); */\n  //return (<div>Test</div>);\n  // The problem seems to be that you are trying to put hooks inside a function inside a component\n  // Hooks can only be on the \"top-level\" of a component, they cannot be nested into ifs or \n  //const bg_img = require('../../img/logiwallpaper-wallpaper.png');\n  // @ts-ignore\n  //const bgurl = \"url(\" + bg_img + \")\";\n  // Use Title and Wrapper like any other React component – except they're styled!\n\n  var opts = {\n    height: \"100%\",\n    width: \"973px\",\n    playerVars: {\n      // https://developers.google.com/youtube/player_parameters\n      autoplay: 1\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChatDemo_style__WEBPACK_IMPORTED_MODULE_2__[\"ChatDemoWrapper\"], null,  false && /*#__PURE__*/false, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel__WEBPACK_IMPORTED_MODULE_3__[\"LiveFeedPanel\"], {\n    videoID: \"jZtxlp664yU\",\n    opts: opts,\n    onReady: \"(event) => { event.target.pauseVideo(); }\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom__WEBPACK_IMPORTED_MODULE_6__[\"EventDetailsBottom\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageListPanel_MessageListPanel_styles__WEBPACK_IMPORTED_MODULE_7__[\"MessageListPanelWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageListPanel__WEBPACK_IMPORTED_MODULE_4__[\"MessageListPanel\"], null)));\n  /*   return (\n      <div className=\"App\">\n        <header className=\"App-header\">\n          <div\n            style={{\n              width: '500px',\n              height: '301px',\n              border: '1px solid black',\n            }}\n          >\n            <div style={{ backgroundColor: 'grey' }}>React Chat Example {time}</div>\n            <div\n              style={{\n                backgroundColor: 'white',\n                height: '260px',\n                overflow: 'scroll',\n              }}\n            >\n              {messages.map((message, messageIndex) => {\n                return (\n                  <div\n                    key={`message-${messageIndex}`}\n                    style={{\n                      display: 'inline-block',\n                      float: 'left',\n                      backgroundColor: '#eee',\n                      color: 'black',\n                      borderRadius: '20px',\n                      margin: '5px',\n                      padding: '8px 15px',\n                    }}\n                  >\n                    {message.message}\n                  </div>\n                );\n              })}\n            </div>\n            <div\n              style={{\n                display: 'flex',\n                height: '40px',\n                backgroundColor: 'lightgrey',\n              }}\n            >\n              <input\n                type=\"text\"\n                style={{\n                  borderRadius: '5px',\n                  flexGrow: 1,\n                  fontSize: '18px',\n                }}\n                placeholder=\"Type your message\"\n                value={input}\n                onChange={e => setInput(e.target.value)}\n              />\n              <button\n                style={{\n                  backgroundColor: 'blue',\n                  color: 'white',\n                  borderRadius: '5px',\n                  fontSize: '16px',\n                }}\n                onClick={e => {\n                  e.preventDefault();\n                  sendMessage(input);\n                }}\n              >\n                Send Message\n                </button>\n            </div>\n          </div>\n        </header>\n      </div>\n    ); */\n};\n\n//# sourceURL=webpack:///./src/components/ChatDemo/ChatDemo.tsx?");

/***/ })

})