"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FirstPost)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nlet zoey = new Date(\"09/22/2017\");\nlet chick1 = new Date(\"04/08/2021\");\nlet animals = [\n    {\n        name: \"zoey\",\n        birthdate: \"09/22/2017\"\n    },\n    {\n        name: \"chick1\",\n        birthdate: \"04/08/2021\"\n    }\n];\nfunction getdifference(birthdate) {\n    let currentDate = new Date();\n    let animalDate = new Date(birthdate);\n    let Difference_In_Time = currentDate.getTime() - animalDate.getTime();\n    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));\n    let weeks = Math.floor(Difference_In_Days / 7);\n    if (weeks > 52) {\n        let years = weeks / 52;\n        return years.toString();\n    } else {\n        return weeks.toString();\n    }\n}\nfunction listAnimals() {\n}\nfunction FirstPost() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/crystalmilliken/Documents/Documents - Crystal’s MacBook Pro/Programming2021/animalDates/animal_dates/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 12\n        },\n        __self: this,\n        children: animals.map(function(d, idx) {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/crystalmilliken/Documents/Documents - Crystal’s MacBook Pro/Programming2021/animalDates/animal_dates/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    \"Name:\",\n                    d.name,\n                    \" Age: \",\n                    getdifference(d.birthdate)\n                ]\n            }, idx));\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsR0FBRyxDQUFDQSxJQUFJLEdBQUcsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBWTtBQUNoQyxHQUFHLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELElBQUksQ0FBQyxDQUFZO0FBQ2xDLEdBQUcsQ0FBQ0UsT0FBTyxHQUFHLENBQUM7SUFBQSxDQUFDQztRQUFBQSxJQUFJLEVBQUUsQ0FBTTtRQUFDQyxTQUFTLEVBQUMsQ0FBWTtJQUFBLENBQUM7SUFBRSxDQUFDRDtRQUFBQSxJQUFJLEVBQUUsQ0FBUTtRQUFFQyxTQUFTLEVBQUMsQ0FBWTtJQUFBLENBQUM7QUFBQSxDQUFDO1NBRXRGQyxhQUFhLENBQUNELFNBQVMsRUFBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQ0UsV0FBVyxHQUFHLEdBQUcsQ0FBQ04sSUFBSTtJQUMxQixHQUFHLENBQUNPLFVBQVUsR0FBRyxHQUFHLENBQUNQLElBQUksQ0FBQ0ksU0FBUztJQUNuQyxHQUFHLENBQUNJLGtCQUFrQixHQUFHRixXQUFXLENBQUNHLE9BQU8sS0FBS0YsVUFBVSxDQUFDRSxPQUFPO0lBQ25FLEdBQUcsQ0FBQ0Msa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixrQkFBa0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7SUFDOUUsR0FBRyxDQUFDSyxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixrQkFBa0IsR0FBQyxDQUFDO0lBQzNDLEVBQUUsRUFBQ0csS0FBSyxHQUFDLEVBQUUsRUFBQyxDQUFDO1FBQ1QsR0FBRyxDQUFDQyxLQUFLLEdBQUdELEtBQUssR0FBQyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRO0lBQ3pCLENBQUMsTUFBSyxDQUFDO1FBQ0gsTUFBTSxDQUFDRixLQUFLLENBQUNFLFFBQVE7SUFDekIsQ0FBQztBQUVELENBQUM7U0FFUUMsV0FBVyxHQUFFLENBQUM7QUFBQSxDQUFDO0FBQ1QsUUFBUSxDQUFDQyxTQUFTLEdBQUcsQ0FBQztJQUNqQyxNQUFNLHNFQUFFQyxDQUFHOzs7Ozs7O2tCQUFFaEIsT0FBTyxDQUFDaUIsR0FBRyxDQUFDLFFBQVEsQ0FBQ0MsQ0FBQyxFQUFFQyxHQUFHLEVBQUMsQ0FBQztZQUN0QyxNQUFNLHVFQUFHSCxDQUFHOzs7Ozs7OztvQkFBVyxDQUFLO29CQUFDRSxDQUFDLENBQUNqQixJQUFJO29CQUFDLENBQU07b0JBQUNFLGFBQWEsQ0FBQ2UsQ0FBQyxDQUFDaEIsU0FBUzs7ZUFBbERpQixHQUFHO1FBQ3ZCLENBQUM7O0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hbF9kYXRlcy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHpvZXkgPSBuZXcgRGF0ZShcIjA5LzIyLzIwMTdcIilcbmxldCBjaGljazEgPSBuZXcgRGF0ZShcIjA0LzA4LzIwMjFcIilcbmxldCBhbmltYWxzID0gW3tuYW1lOiBcInpvZXlcIixiaXJ0aGRhdGU6XCIwOS8yMi8yMDE3XCJ9LCB7bmFtZTogXCJjaGljazFcIiwgYmlydGhkYXRlOlwiMDQvMDgvMjAyMVwifV1cblxuZnVuY3Rpb24gZ2V0ZGlmZmVyZW5jZShiaXJ0aGRhdGUpe1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGFuaW1hbERhdGUgPSBuZXcgRGF0ZShiaXJ0aGRhdGUpXG4gICAgbGV0IERpZmZlcmVuY2VfSW5fVGltZSA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIGFuaW1hbERhdGUuZ2V0VGltZSgpO1xuICAgIHZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBNYXRoLmZsb29yKERpZmZlcmVuY2VfSW5fVGltZSAvICgxMDAwICogMzYwMCAqIDI0KSk7XG5sZXQgd2Vla3MgPSBNYXRoLmZsb29yKERpZmZlcmVuY2VfSW5fRGF5cy83KTtcbmlmKHdlZWtzPjUyKXtcbiAgICBsZXQgeWVhcnMgPSB3ZWVrcy81MjtcbiAgICByZXR1cm4geWVhcnMudG9TdHJpbmcoKVxufWVsc2Uge1xuICAgIHJldHVybih3ZWVrcy50b1N0cmluZygpKTtcbn1cblxufVxuXG5mdW5jdGlvbiBsaXN0QW5pbWFscygpe31cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0UG9zdCgpIHtcbiAgICByZXR1cm4gPGRpdj57YW5pbWFscy5tYXAoZnVuY3Rpb24oZCwgaWR4KXtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR4fT5OYW1lOntkLm5hbWV9IEFnZToge2dldGRpZmZlcmVuY2UoZC5iaXJ0aGRhdGUpfTwvZGl2PilcbiAgICAgIH0pfTwvZGl2PlxuICB9Il0sIm5hbWVzIjpbInpvZXkiLCJEYXRlIiwiY2hpY2sxIiwiYW5pbWFscyIsIm5hbWUiLCJiaXJ0aGRhdGUiLCJnZXRkaWZmZXJlbmNlIiwiY3VycmVudERhdGUiLCJhbmltYWxEYXRlIiwiRGlmZmVyZW5jZV9Jbl9UaW1lIiwiZ2V0VGltZSIsIkRpZmZlcmVuY2VfSW5fRGF5cyIsIk1hdGgiLCJmbG9vciIsIndlZWtzIiwieWVhcnMiLCJ0b1N0cmluZyIsImxpc3RBbmltYWxzIiwiRmlyc3RQb3N0IiwiZGl2IiwibWFwIiwiZCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();