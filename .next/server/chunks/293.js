"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 8315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ChakraNextImage)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const ChakraNextImage = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.chakra)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    shouldForwardProp: (prop)=>[
            "height",
            "width",
            "quality",
            "src",
            "alt",
            "layout",
            "priority"
        ].includes(prop)
});


/***/ }),

/***/ 8298:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CustomButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CustomButton = ({ href , label  })=>{
    const linkColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200");
    const linkHoverColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("purple.800", "purple.200");
    const linkBackgroundColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "gray.700");
    const linkBoxShadow = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("4px 4px 0px -1px rgba(170,140,228,0.75)", "4px 4px 0px -1px rgba(170,140,228,0.65)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        as: framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div,
        p: 2,
        backgroundColor: linkBackgroundColor,
        whileHover: {
            y: 2,
            x: 2
        },
        animate: {
            x: 0,
            boxShadow: linkBoxShadow,
            transitionEnd: {
                display: "flex"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            h: "100%",
            href: href ?? "#",
            fontSize: "lg",
            fontWeight: 500,
            color: linkColor,
            _hover: {
                textDecoration: "none",
                color: linkHoverColor
            },
            letterSpacing: 1,
            children: label
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;