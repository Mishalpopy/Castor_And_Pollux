"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 9969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_TerioCounter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Counter.js



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "counter",
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const components_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/TerioCounter.js


const TerioCounter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "counter-text",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                    end: 12000
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "boder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Finished "
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "counter-text",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                    end: 850
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "boder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Happy Client"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "counter-text",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                    end: 9
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "boder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Years in Business"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "counter-text mb-0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                    end: 36
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "boder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Experts"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_TerioCounter = (TerioCounter);


/***/ })

};
;