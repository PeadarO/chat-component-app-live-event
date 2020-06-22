webpackHotUpdate("main",{

/***/ "./src/components/EventDetailsBottom/EventDetailsBottom.tsx":
/*!******************************************************************!*\
  !*** ./src/components/EventDetailsBottom/EventDetailsBottom.tsx ***!
  \******************************************************************/
/*! exports provided: EventDetailsBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventDetailsBottom\", function() { return EventDetailsBottom; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDetailsBottom.styles */ \"./src/components/EventDetailsBottom/EventDetailsBottom.styles.tsx\");\n\n\n\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\").withConfig({\n  displayName: \"EventDetailsBottom___StyledDiv\",\n  componentId: \"k6afxq-0\"\n})([\".emoji{width:120px;height:120px;margin:15px 15px 40px;background:$emoji-base-color;display:inline-block;border-radius:50%;position:relative;&:after{position:absolute;bottom:-40px;font-size:18px;width:60px;left:calc(50% - 30px);color:$emoji-text-color;}}.emoji__face,.emoji__eyebrows,.emoji__eyes,.emoji__mouth,.emoji__tongue,.emoji__heart,.emoji__hand,.emoji__thumb{position:absolute;&:before,&:after{position:absolute;content:'';}}.emoji__face{width:inherit;height:inherit;}.emoji--like{background:$emoji-like-color;&:after{content:'Like';}.emoji__hand{left:25px;bottom:30px;width:20px;height:40px;background:$emoji-white-color;border-radius:5px;z-index:0;animation:hands-up 2s linear infinite;&:before{left:25px;bottom:5px;width:40px;background:inherit;height:10px;border-radius:2px 10px 10px 2px;box-shadow:1px -9px 0 1px $emoji-white-color,2px -19px 0 2px $emoji-white-color,3px -29px 0 3px $emoji-white-color;}}.emoji__thumb{border-bottom:20px solid $emoji-white-color;border-left:20px solid transparent;top:-25px;right:-25px;z-index:2;transform:rotate(5deg);transform-origin:0% 100%;animation:thumbs-up 2s linear infinite;&:before{border-radius:50% 50% 0 0;background:$emoji-white-color;width:10px;height:12px;left:-10px;top:-8px;transform:rotate(-15deg);transform-origin:100% 100%;box-shadow:-1px 4px 0 -1px $emoji-white-color;}}}.emoji--love{background:$emoji-love-color;&:after{content:'Love';}.emoji__heart{left:calc(50% - 40px);top:calc(50% - 40px);width:80px;height:80px;animation:heart-beat 1s linear infinite alternate;&:before,&:after{left:calc(50% - 20px);top:calc(50% - 32px);width:40px;height:64px;background:$emoji-white-color;border-radius:20px 20px 0 0;}&:before{transform:translate(20px) rotate(-45deg);transform-origin:0 100%;}&:after{transform:translate(-20px) rotate(45deg);transform-origin:100% 100%;}}}.emoji--haha{&:after{content:'Haha';}.emoji__face{animation:haha-face 2s linear infinite;}.emoji__eyes{width:26px;height:6px;border-radius:2px;left:calc(50% - 13px);top:35px;transform:rotate(20deg);background:transparent;box-shadow:-25px 5px 0 0 \", \",25px -5px 0 0 \", \";&:after{left:0;top:0;width:26px;height:6px;border-radius:2px;transform:rotate(-40deg);background:transparent;box-shadow:-25px -5px 0 0 \", \",25px 5px 0 0 \", \";}}.emoji__mouth{width:80px;height:40px;left:calc(50% - 40px);top:50%;background:\", \";border-radius:0 0 40px 40px;overflow:hidden;z-index:1;animation:haha-mouth 2s linear infinite;}.emoji__tongue{width:70px;height:30px;background:$emoji-love-color;left:calc(50% - 35px);bottom:-10px;border-radius:50%;}}.emoji--yay{&:after{content:'Yay';animation:yay-reverse 1s linear infinite;}.emoji__face{animation:yay 1s linear infinite alternate;}.emoji__eyebrows{left:calc(50% - 3px);top:30px;height:6px;width:6px;border-radius:50%;background:transparent;box-shadow:-6px 0 0 0 \", \",-36px 0 0 0px \", \",6px 0 0 0 \", \",36px 0 0 0px \", \";&:before,&:after{width:36px;height:18px;border-radius:60px 60px 0 0;background:transparent;border:6px solid black;box-sizing:border-box;border-bottom:0;bottom:3px;left:calc(50% - 18px);}&:before{margin-left:-21px;}&:after{margin-left:21px;}}.emoji__mouth{top:60px;background:transparent;left:50%;&:after{width:80px;height:80px;left:calc(50% - 40px);top:-75px;border-radius:50%;background:transparent;border:6px solid \", \";box-sizing:border-box;border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;z-index:1;}&:before{width:6px;height:6px;background:transparent;border-radius:50%;bottom:5px;left:calc(50% - 3px);box-shadow:-25px 0 0 0 \", \",25px 0 0 0 \", \",-35px -2px 30px 10px $emoji-angry-color,35px -2px 30px 10px $emoji-angry-color;}}}.emoji--wow{&:after{content:'Wow';}.emoji__face{animation:wow-face 3s linear infinite;}.emoji__eyebrows{left:calc(50% - 3px);height:6px;width:6px;border-radius:50%;background:transparent;box-shadow:-18px 0 0 0 \", \",-33px 0 0 0 \", \",18px 0 0 0 \", \",33px 0 0 0 \", \";animation:wow-brow 3s linear infinite;&:before,&:after{width:24px;height:20px;border:6px solid \", \";box-sizing:border-box;border-radius:50%;border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;top:-3px;left:calc(50% - 12px);}&:before{margin-left:-25px;}&:after{margin-left:25px;}}.emoji__eyes{width:16px;height:24px;left:calc(50% - 8px);top:35px;border-radius:50%;background:transparent;box-shadow:25px 0 0 0 \", \",-25px 0 0 0 \", \";}.emoji__mouth{width:30px;height:45px;left:calc(50% - 15px);top:50%;border-radius:50%;background:\", \";animation:wow-mouth 3s linear infinite;}}.emoji--sad{&:after{content:'Sad';}.emoji__face{animation:sad-face 2s ease-in infinite;}.emoji__eyebrows{left:calc(50% - 3px);top:35px;height:6px;width:6px;border-radius:50%;background:transparent;box-shadow:-40px 9px 0 0 \", \",-25px 0 0 0 \", \",25px 0 0 0 \", \",40px 9px 0 0 \", \",;&:before,&:after{width:30px;height:20px;border:6px solid \", \";box-sizing:border-box;border-radius:50%;border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;top:2px;left:calc(50% - 15px);}&:before{margin-left:-30px;transform:rotate(-30deg);}&:after{margin-left:30px;transform:rotate(30deg);}}.emoji__eyes{width:14px;height:16px;left:calc(50% - 7px);top:50px;border-radius:50%;background:transparent;box-shadow:25px 0 0 0 \", \",-25px 0 0 0 \", \";&:after{background:$emoji-like-color;width:12px;height:12px;margin-left:6px;border-radius:0 100% 40% 50% / 0 50% 40% 100%;transform-origin:0% 0%;animation:tear-drop 2s ease-in infinite;}}.emoji__mouth{width:60px;height:80px;left:calc(50% - 30px);top:80px;box-sizing:border-box;border:6px solid \", \";border-radius:50%;border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;background:transparent;animation:sad-mouth 2s ease-in infinite;&:after{width:6px;height:6px;background:transparent;border-radius:50%;top:4px;left:calc(50% - 3px);box-shadow:-18px 0 0 0 \", \",18px 0 0 0 \", \";}}}.emoji--angry{background:linear-gradient($emoji-angry-color -10%,$emoji-base-color);background-size:100%;animation:angry-color 2s ease-in infinite;&:after{content:'Angry';}.emoji__face{animation:angry-face 2s ease-in infinite;}.emoji__eyebrows{left:calc(50% - 3px);top:55px;height:6px;width:6px;border-radius:50%;background:transparent;box-shadow:-44px 5px 0 0 \", \",-7px 16px 0 0 \", \",7px 16px 0 0 \", \",44px 5px 0 0 \", \",;&:before,&:after{width:50px;height:20px;border:6px solid \", \";box-sizing:border-box;border-radius:50%;border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;top:0;left:calc(50% - 25px);}&:before{margin-left:-25px;transform:rotate(15deg);}&:after{margin-left:25px;transform:rotate(-15deg);}}.emoji__eyes{width:12px;height:12px;left:calc(50% - 6px);top:70px;border-radius:50%;background:transparent;box-shadow:25px 0 0 0 \", \",-25px 0 0 0 \", \";}.emoji__mouth{width:36px;height:18px;left:calc(50% - 18px);bottom:15px;background:\", \";border-radius:50%;animation:angry-mouth 2s ease-in infinite;}}@keyframes heart-beat{25%{transform:scale(1.1);}75%{transform:scale(0.6);}}@keyframes haha-face{10%,30%,50%{transform:translateY(25px);}20%,40%{transform:translateY(15px);}60%,80%{transform:translateY(0);}70%,90%{transform:translateY(-10px);}}@keyframes haha-mouth{10%,30%,50%{transform:scale(0.6);top:45%;}20%,40%{transform:scale(0.8);top:45%;}60%,80%{transform:scale(1);top:50%;}70%{transform:scale(1.2);top:50%;}90%{transform:scale(1.1);top:50%;}}@keyframes yay{25%{transform:rotate(-15deg);}75%{transform:rotate(15deg);}}@keyframes wow-face{15%,25%{transform:rotate(20deg) translateX(-25px);}45%,65%{transform:rotate(-20deg) translateX(25px);}75%,100%{transform:rotate(0deg) translateX(0);}}@keyframes wow-brow{15%,65%{top:25px;}75%,100%,0%{top:15px;}}@keyframes wow-mouth{10%,30%{width:20px;height:20px;left:calc(50% - 10px);}50%,70%{width:30px;height:40px;left:calc(50% - 15px);}75%,100%{height:50px;}}@keyframes sad-face{25%,35%{top:-15px;}55%,95%{top:10px;}100%,0%{top:0;}}@keyframes sad-mouth{25%,35%{transform:scale(0.85);top:70px;}55%,100%,0%{transform:scale(1);top:80px;}}@keyframes tear-drop{0%,100%{display:block;left:35px;top:15px;transform:rotate(45deg) scale(0);}25%{display:block;left:35px;transform:rotate(45deg) scale(2);}49.9%{display:block;left:35px;top:65px;transform:rotate(45deg) scale(0);}50%{display:block;left:-35px;top:15px;transform:rotate(45deg) scale(0);}75%{display:block;left:-35px;transform:rotate(45deg) scale(2);}99.9%{display:block;left:-35px;top:65px;transform:rotate(45deg) scale(0);}}@keyframes hands-up{25%{transform:rotate(15deg);}50%{transform:rotate(-15deg) translateY(-10px);}75%,100%{transform:rotate(0deg);}}@keyframes thumbs-up{25%{transform:rotate(20deg);}50%,100%{transform:rotate(5deg);}}@keyframes angry-color{45%,60%{background-size:250%;}85%,100%,0%{background-size:100%;}}@keyframes angry-face{35%,60%{transform:translateX(0) translateY(10px) scale(0.9);}40%,50%{transform:translateX(-5px) translateY(10px) scale(0.9);}45%,55%{transform:translateX(5px) translateY(10px) scale(0.9);}}@keyframes angry-mouth{25%,50%{height:6px;bottom:25px;}}\"], function (p) {\n  return p._css;\n}, function (p) {\n  return p._css2;\n}, function (p) {\n  return p._css3;\n}, function (p) {\n  return p._css4;\n}, function (p) {\n  return p._css5;\n}, function (p) {\n  return p._css6;\n}, function (p) {\n  return p._css7;\n}, function (p) {\n  return p._css8;\n}, function (p) {\n  return p._css9;\n}, function (p) {\n  return p._css10;\n}, function (p) {\n  return p._css11;\n}, function (p) {\n  return p._css12;\n}, function (p) {\n  return p._css13;\n}, function (p) {\n  return p._css14;\n}, function (p) {\n  return p._css15;\n}, function (p) {\n  return p._css16;\n}, function (p) {\n  return p._css17;\n}, function (p) {\n  return p._css18;\n}, function (p) {\n  return p._css19;\n}, function (p) {\n  return p._css20;\n}, function (p) {\n  return p._css21;\n}, function (p) {\n  return p._css22;\n}, function (p) {\n  return p._css23;\n}, function (p) {\n  return p._css24;\n}, function (p) {\n  return p._css25;\n}, function (p) {\n  return p._css26;\n}, function (p) {\n  return p._css27;\n}, function (p) {\n  return p._css28;\n}, function (p) {\n  return p._css29;\n}, function (p) {\n  return p._css30;\n}, function (p) {\n  return p._css31;\n}, function (p) {\n  return p._css32;\n}, function (p) {\n  return p._css33;\n}, function (p) {\n  return p._css34;\n}, function (p) {\n  return p._css35;\n}, function (p) {\n  return p._css36;\n}, function (p) {\n  return p._css37;\n}, function (p) {\n  return p._css38;\n});\n\nvar EventDetailsBottom = function EventDetailsBottom(props) {\n  var emoji_base_color = \"#FFDA6A\";\n  var emoji_like_color = \"#548DFF\";\n  var emoji_love_color = \"#F55064\";\n  var emoji_angry_color = \"#D5234C\";\n  var emoji_white_color = \"#FFFFFF\";\n  var emoji_black_color = \"#000000\";\n  var emoji_text_color = \"#8A8A8A\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventDetailsBottomWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv, {\n    _css: emoji_black_color,\n    _css2: emoji_black_color,\n    _css3: emoji_black_color,\n    _css4: emoji_black_color,\n    _css5: emoji_black_color,\n    _css6: emoji_black_color,\n    _css7: emoji_black_color,\n    _css8: emoji_black_color,\n    _css9: emoji_black_color,\n    _css10: emoji_black_color,\n    _css11: emoji_black_color,\n    _css12: emoji_black_color,\n    _css13: emoji_black_color,\n    _css14: emoji_black_color,\n    _css15: emoji_black_color,\n    _css16: emoji_black_color,\n    _css17: emoji_black_color,\n    _css18: emoji_black_color,\n    _css19: emoji_black_color,\n    _css20: emoji_black_color,\n    _css21: emoji_black_color,\n    _css22: emoji_black_color,\n    _css23: emoji_black_color,\n    _css24: emoji_black_color,\n    _css25: emoji_black_color,\n    _css26: emoji_black_color,\n    _css27: emoji_black_color,\n    _css28: emoji_black_color,\n    _css29: emoji_black_color,\n    _css30: emoji_black_color,\n    _css31: emoji_black_color,\n    _css32: emoji_black_color,\n    _css33: emoji_black_color,\n    _css34: emoji_black_color,\n    _css35: emoji_black_color,\n    _css36: emoji_black_color,\n    _css37: emoji_black_color,\n    _css38: emoji_black_color\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostImageWrapper\"], {\n    src: \"/images/hostImage@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostNameWrapper\"], null, \"eLeague Las Vegas Tournament\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventIDWrapper\"], null, \"Event  ID: 246 209 481\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomShareButtonWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"emoji  emoji--like\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"emoji__hand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"emoji__thumb\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomButtonImgWrapper\"], {\n    src: \"/images/iconShare@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomButtonTextWrapper\"], null, \"Share\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomFollowButtonWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomButtonImgWrapper\"], {\n    src: \"/images/iconFollow@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"BottomButtonTextWrapper\"], null, \"Follow\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    reaction: \"LOL\",\n    appearindex: \"1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    reaction: \"Heart\",\n    appearindex: \"2\"\n  }, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    reaction: \"ThumbUp\",\n    appearindex: \"3\"\n  }, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    reaction: \"Mad\",\n    appearindex: \"4\"\n  }, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    reaction: \"Sad\",\n    appearindex: \"5\"\n  }, \" \")));\n};\n\n//# sourceURL=webpack:///./src/components/EventDetailsBottom/EventDetailsBottom.tsx?");

/***/ })

})