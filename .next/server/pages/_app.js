"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ CircleIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CircleIndicator = ()=>{
    const { 0: isComplete , 1: setIsComplete  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useViewportScroll)();
    const yRange = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [
        0,
        0.9
    ], [
        0,
        1
    ]);
    const pathLength = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(yRange, {
        stiffness: 400,
        damping: 90
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>yRange.onChange((v)=>setIsComplete(v >= 1)
        )
    , [
        yRange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        position: "fixed",
        bottom: "17rem",
        right: "1rem",
        width: "4rem",
        zIndex: 10,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "progress-icon",
            viewBox: "0 0 60 60",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
                    fill: "none",
                    strokeWidth: "5",
                    stroke: "#AA8CE4",
                    strokeDasharray: "0 1",
                    d: "M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0",
                    style: {
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
                    fill: "none",
                    strokeWidth: "5",
                    stroke: "#AA8CE4",
                    d: "M14,26 L 22,33 L 35,16",
                    initial: false,
                    strokeDasharray: "0 1",
                    animate: {
                        pathLength: isComplete ? 1 : 0
                    }
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ColorModeSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MoonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9756);
/* harmony import */ var _SunIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MoonIcon__WEBPACK_IMPORTED_MODULE_3__, _SunIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_MoonIcon__WEBPACK_IMPORTED_MODULE_3__, _SunIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ColorModeSwitcher = (props)=>{
    const { toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
    const SwitchIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(_MoonIcon__WEBPACK_IMPORTED_MODULE_3__/* .MoonIcon */ .k, _SunIcon__WEBPACK_IMPORTED_MODULE_4__/* .SunIcon */ .N);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        "aria-label": "Toggle color mode",
        fontSize: "3xl",
        variant: "ghost",
        onClick: ()=>toggleColorMode()
        ,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwitchIcon, {}),
        _hover: {
            bg: "transparent"
        },
        _active: {
            bg: "transparent"
        },
        style: {
            boxShadow: "none"
        },
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ChakraNextImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8315);
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6396);





function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.50", "gray.900"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
            maxW: "6xl",
            py: 4,
            direction: {
                base: "column",
                md: "row"
            },
            spacing: 4,
            justify: {
                base: "center",
                md: "space-between"
            },
            align: {
                base: "center",
                md: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChakraNextImage__WEBPACK_IMPORTED_MODULE_3__/* .ChakraNextImage */ .N, {
                    src: "/images/C.svg",
                    alt: "logo",
                    width: 30,
                    height: 30
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    children: "\xa9 2024 Chinmay Nawkar. All rights reserved"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    direction: "row",
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_4__/* .SocialButton */ .Z, {
                            label: "Github",
                            href: "https://github.com/chinmaynawkar",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub,
                                width: 6,
                                height: 6,
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("purple.500", "purple.300"),
                                transition: "all 0.2s",
                                _hover: {
                                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("purple.700", "purple.400")
                                }
                            })
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_4__/* .SocialButton */ .Z, {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/chinmay-nawkar/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedin,
                                width: 6,
                                height: 6,
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("purple.500", "purple.300"),
                                transition: "all 0.2s",
                                _hover: {
                                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("purple.700", "purple.400")
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ MoonIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MoonIcon = ()=>{
    const variants = {
        initial: {
            scale: 0.6,
            rotate: -90
        },
        animate: {
            scale: 1,
            rotate: 0,
            transition: _constants__WEBPACK_IMPORTED_MODULE_3__/* .transition */ .e
        },
        whileTap: _constants__WEBPACK_IMPORTED_MODULE_3__/* .whileTap */ .i
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.svg, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 50 50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
            d: "M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",
            fill: "currentColor",
            initial: "initial",
            animate: "animate",
            whileTap: "whileTap",
            variants: variants
        })
    }, "moon");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2802);
/* harmony import */ var _ChakraNextImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8315);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8298);
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _CustomButton__WEBPACK_IMPORTED_MODULE_8__]);
([_ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _CustomButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Navbar = ()=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const mobileNavLinkBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.600", "gray.800");
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const mobileMenuItemVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        as: "nav",
        minH: "60px",
        pos: "fixed",
        zIndex: 10,
        minW: "100%",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.800"),
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.600", "white"),
                py: {
                    base: 2
                },
                px: {
                    base: 4
                },
                borderBottom: 1,
                borderStyle: "solid",
                borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.200", "gray.900"),
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        flex: {
                            base: 1,
                            md: "auto"
                        },
                        ml: {
                            base: -2
                        },
                        display: {
                            base: "flex",
                            md: "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                            onClick: onToggle,
                            icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CloseIcon, {
                                w: 3,
                                h: 3
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
                                w: 5,
                                h: 5
                            }),
                            variant: "ghost",
                            "aria-label": "Toggle Navigation"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        flex: {
                            base: 1
                        },
                        justify: {
                            base: "center",
                            md: "start"
                        },
                        align: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChakraNextImage__WEBPACK_IMPORTED_MODULE_6__/* .ChakraNextImage */ .N, {
                                        src: "/images/C.svg",
                                        width: 50,
                                        height: 50,
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                ml: 10,
                                align: "center",
                                h: "100%",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    direction: "row",
                                    spacing: 8,
                                    children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomButton__WEBPACK_IMPORTED_MODULE_8__/* .CustomButton */ .o, {
                                            href: navItem.href,
                                            label: navItem.label
                                        }, Math.floor(Math.random() * 100))
                                    )
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        flex: {
                            base: 1,
                            md: 0
                        },
                        justify: "flex-end",
                        direction: "row",
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                spacing: 6,
                                align: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_9__/* .SocialButton */ .Z, {
                                        label: "Github",
                                        href: "https://github.com/chinmaynawkar",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub,
                                            width: 6,
                                            height: 6,
                                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("purple.500", "purple.300"),
                                            transition: "all 0.2s",
                                            _hover: {
                                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("purple.700", "purple.400")
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialButton__WEBPACK_IMPORTED_MODULE_9__/* .SocialButton */ .Z, {
                                        label: "LinkedIn",
                                        href: "https://www.linkedin.com/in/chinmay-nawkar/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLinkedin,
                                            width: 6,
                                            height: 6,
                                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("purple.500", "purple.300"),
                                            transition: "all 0.2s",
                                            _hover: {
                                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("purple.700", "purple.400")
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__/* .ColorModeSwitcher */ .b, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,
                initial: "hidden",
                animate: isOpen ? "show" : "hidden",
                variants: mobileMenuVariants,
                w: "100%",
                minH: "100vh",
                bg: mobileNavLinkBgColor,
                p: 4,
                pt: 12,
                display: isOpen ? "flex" : "none",
                children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,
                        spacing: 4,
                        variants: mobileMenuItemVariants,
                        onClick: onToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            py: 8,
                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
                            href: navItem.href ?? "#",
                            justify: "center",
                            align: "center",
                            _hover: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontWeight: 600,
                                fontSize: "3xl",
                                color: "gray.200",
                                children: navItem.label
                            })
                        })
                    }, Math.floor(Math.random() * 100))
                )
            })
        ]
    });
};
const NAV_ITEMS = [
    {
        label: "Home",
        href: "#"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Contact",
        href: "#contact"
    }, 
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const SocialButton = ({ children , label , href  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.button, {
        variant: "ghost",
        cursor: "pointer",
        as: "a",
        href: href,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                children: label
            }),
            children
        ]
    });
};


/***/ }),

/***/ 1135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SunIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SunIcon = ()=>{
    const raysVariants = {
        initial: {
            rotate: 45
        },
        animate: {
            rotate: 0,
            transition: _constants__WEBPACK_IMPORTED_MODULE_3__/* .transition */ .e
        }
    };
    const coreVariants = {
        initial: {
            scale: 1.5
        },
        animate: {
            scale: 1,
            transition: _constants__WEBPACK_IMPORTED_MODULE_3__/* .transition */ .e
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.svg, {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        whileTap: _constants__WEBPACK_IMPORTED_MODULE_3__/* .whileTap */ .i,
        // Centers the rotation anchor point vertically & horizontally
        style: {
            originX: "50%",
            originY: "50%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.circle, {
                cx: "11.9998",
                cy: "11.9998",
                r: "5.75375",
                fill: "currentColor",
                initial: "initial",
                animate: "animate",
                variants: coreVariants
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.g, {
                initial: "initial",
                animate: "animate",
                variants: raysVariants,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "3.08982",
                        cy: "6.85502",
                        r: "1.71143",
                        transform: "rotate(-60 3.08982 6.85502)",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "3.0903",
                        cy: "17.1436",
                        r: "1.71143",
                        transform: "rotate(-120 3.0903 17.1436)",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "12",
                        cy: "22.2881",
                        r: "1.71143",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "20.9101",
                        cy: "17.1436",
                        r: "1.71143",
                        transform: "rotate(-60 20.9101 17.1436)",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "20.9101",
                        cy: "6.8555",
                        r: "1.71143",
                        transform: "rotate(-120 20.9101 6.8555)",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "12",
                        cy: "1.71143",
                        r: "1.71143",
                        fill: "currentColor"
                    })
                ]
            })
        ]
    }, "sun");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ transition),
/* harmony export */   "i": () => (/* binding */ whileTap)
/* harmony export */ });
const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10
};
const whileTap = {
    scale: 0.95,
    rotate: 15
};


/***/ }),

/***/ 8894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2103);
/* harmony import */ var _CircleIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1546);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_2__, _CircleIndicator__WEBPACK_IMPORTED_MODULE_3__]);
([_Navbar__WEBPACK_IMPORTED_MODULE_2__, _CircleIndicator__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .w, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CircleIndicator__WEBPACK_IMPORTED_MODULE_3__/* .CircleIndicator */ .j, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8894);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9385);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_3__]);
_components_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function() {
                navigator.serviceWorker.register("/sw.js").then(function(registration) {
                    console.log("Service Worker registration successful with scope: ", registration.scope);
                }, function(err) {
                    console.log("Service Worker registration failed: ", err);
                });
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        resetCSS: true,
        theme: _theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Chinmay Nawkar"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: true
    },
    styles: {
        global: {
            body: {
                fontFamily: "body"
            },
            heading: {
                fontFamily: "heading"
            }
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664,293], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();