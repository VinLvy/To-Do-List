/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General Reset */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    line-height: 1.6;\r\n    background-color: #f9f9f9;\r\n    color: #333;\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n/* App Layout */\r\n#app {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    background-color: #007bff;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    z-index: 1000;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nheader h1 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nheader button {\r\n    background-color: #28a745;\r\n    color: white;\r\n    border: none;\r\n    padding: 8px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n}\r\n\r\nheader button:hover {\r\n    background-color: #218838;\r\n}\r\n\r\n/* Sidebar */\r\n#projects-sidebar {\r\n    background-color: #5281b0;\r\n    color: white;\r\n    width: 250px;\r\n    padding: 20px;\r\n    overflow-y: auto;\r\n    height: calc(100vh - 50px); /* Adjust for fixed header */\r\n    margin-top: 50px;\r\n}\r\n\r\n#projects-sidebar h2 {\r\n    margin-bottom: 15px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#project-list {\r\n    list-style: none;\r\n}\r\n\r\n.project {\r\n    padding: 10px;\r\n    margin-bottom: 8px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    background-color: #3198ff;\r\n}\r\n\r\n.project.active {\r\n    background-color: #174f8a;\r\n}\r\n\r\n.project:hover {\r\n    background-color: #0f314f;\r\n}\r\n\r\n/* Main Content */\r\n#main-content {\r\n    flex-grow: 1;\r\n    padding: 20px;\r\n    margin-top: 50px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#todo-list-section h2 {\r\n    margin-bottom: 15px;\r\n    font-size: 1.3rem;\r\n    border-bottom: 2px solid #007bff;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n#todo-list {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    margin-bottom: 8px;\r\n    background-color: white;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.todo-item:hover {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.todo-item .delete-todo {\r\n    background-color: #dc3545;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 8px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.todo-item .delete-todo:hover {\r\n    background-color: #c82333;\r\n}\r\n\r\n/* Priority Colors */\r\n.priority-low {\r\n    border-left: 5px solid #28a745;\r\n}\r\n\r\n.priority-medium {\r\n    border-left: 5px solid #ffc107;\r\n}\r\n\r\n.priority-high {\r\n    border-left: 5px solid #dc3545;\r\n}\r\n\r\n/* Todo Form */\r\n#todo-form-section {\r\n    margin-top: 20px;\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#todo-form-section h3 {\r\n    margin-bottom: 15px;\r\n    font-size: 1.2rem;\r\n    color: #007bff;\r\n}\r\n\r\nform label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\nform input, form textarea, form select {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n}\r\n\r\nform button {\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n}\r\n\r\nform button:hover {\r\n    background-color: #0056b3;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n    body {\r\n        flex-direction: column;\r\n    }\r\n\r\n    #projects-sidebar {\r\n        width: 100%;\r\n        height: auto;\r\n        margin-top: 0;\r\n    }\r\n\r\n    #main-content {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n.delete-project {\r\n    float: right;\r\n    color: white;\r\n    background-color: red;\r\n    border: none;\r\n    border-radius: 3px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project:hover {\r\n    background-color: darkred;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.modal-content {\r\n    background-color: white;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    width: 50%;\r\n}\r\n\r\n.close-btn {\r\n    float: right;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-content {\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    width: 90%;\r\n    max-width: 500px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.close-btn {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-btn:hover {\r\n    color: red;\r\n}\r\n\r\n#add-todo-btn {\r\n    background-color: #007BFF; /* Bright blue background */\r\n    color: #fff; /* White text */\r\n    border: none;\r\n    border-radius: 25px; /* Rounded edges */\r\n    padding: 10px 20px; /* Add padding for a larger button */\r\n    font-size: 16px; /* Larger text size */\r\n    font-weight: bold; /* Bold text */\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */\r\n    transition: transform 0.2s ease, background-color 0.3s ease; /* Smooth transitions */\r\n}\r\n\r\n#add-todo-btn:hover {\r\n    background-color: #0056b3; /* Darker blue on hover */\r\n    transform: scale(1); /* Slightly enlarge the button on hover */\r\n}\r\n\r\n#add-todo-btn:active {\r\n    transform: scale(0.95); /* Slightly shrink the button when clicked */\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Adjust shadow on click */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n// Classes for Todo and Project\r\nclass Todo {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.completed = false;\r\n    }\r\n}\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todos = [];\r\n    }\r\n}\r\n\r\n// Project Manager Module\r\nconst ProjectManager = (() => {\r\n    let projects = [];\r\n    let currentProject = null;\r\n\r\n    const saveToLocalStorage = () => {\r\n        localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n    };\r\n\r\n    const loadProjects = () => {\r\n        const savedProjects = JSON.parse(localStorage.getItem(\"projects\"));\r\n        if (savedProjects) {\r\n            projects = savedProjects.map(projData => {\r\n                const project = new Project(projData.name);\r\n                project.todos = projData.todos.map(todoData => Object.assign(new Todo(), todoData));\r\n                return project;\r\n            });\r\n        } else {\r\n            addProject(\"Default Project\");\r\n            setCurrentProject(\"Default Project\");\r\n        }\r\n    };\r\n\r\n    const addProject = (name) => {\r\n        if (!projects.some(project => project.name === name)) {\r\n            projects.push(new Project(name));\r\n            saveToLocalStorage();\r\n        }\r\n    };\r\n\r\n    const deleteProject = (name) => {\r\n        projects = projects.filter(project => project.name !== name);\r\n        if (currentProject && currentProject.name === name) {\r\n            currentProject = null;\r\n        }\r\n        saveToLocalStorage();\r\n    };\r\n\r\n    const setCurrentProject = (name) => {\r\n        currentProject = projects.find(p => p.name === name) || null;\r\n        return currentProject;\r\n    };\r\n\r\n    const addTodoToProject = (projectName, todo) => {\r\n        const project = projects.find(p => p.name === projectName);\r\n        if (project) {\r\n            project.todos.push(todo);\r\n            saveToLocalStorage();\r\n        }\r\n    };\r\n\r\n    const getCurrentProject = () => currentProject;\r\n\r\n    const getProjects = () => projects;\r\n\r\n    return {\r\n        addProject,\r\n        deleteProject,\r\n        addTodoToProject,\r\n        setCurrentProject,\r\n        getCurrentProject,\r\n        getProjects,\r\n        loadProjects,\r\n    };\r\n})();\r\n\r\n// DOM Manipulation Functions\r\nconst renderProjects = () => {\r\n    const projectList = document.getElementById(\"project-list\");\r\n    projectList.innerHTML = \"\";\r\n\r\n    ProjectManager.getProjects().forEach(project => {\r\n        const projectItem = document.createElement(\"li\");\r\n        projectItem.className = \"project\";\r\n\r\n        if (ProjectManager.getCurrentProject() && ProjectManager.getCurrentProject().name === project.name) {\r\n            projectItem.classList.add(\"active\");\r\n        }\r\n\r\n        const projectNameSpan = document.createElement(\"span\");\r\n        projectNameSpan.textContent = project.name;\r\n\r\n        projectItem.addEventListener(\"click\", (e) => {\r\n            if (e.target.classList.contains(\"delete-project\")) return;\r\n\r\n            ProjectManager.setCurrentProject(project.name);\r\n            renderProjects();\r\n            renderTodos();\r\n        });\r\n\r\n        const deleteButton = document.createElement(\"button\");\r\n        deleteButton.textContent = \"Delete\";\r\n        deleteButton.className = \"delete-project\";\r\n        deleteButton.addEventListener(\"click\", () => {\r\n            deleteProject(project.name);\r\n        });\r\n\r\n        projectItem.appendChild(projectNameSpan);\r\n        projectItem.appendChild(deleteButton);\r\n        projectList.appendChild(projectItem);\r\n    });\r\n};\r\n\r\nconst deleteProject = (projectName) => {\r\n    if (confirm(`Are you sure you want to delete the project \"${projectName}\"?`)) {\r\n        ProjectManager.deleteProject(projectName);\r\n        renderProjects();\r\n        renderTodos();\r\n    }\r\n};\r\n\r\nconst renderTodos = () => {\r\n    const todoList = document.getElementById(\"todo-list\");\r\n    const projectTitle = document.getElementById(\"current-project-title\");\r\n    const currentProject = ProjectManager.getCurrentProject();\r\n\r\n    if (currentProject) {\r\n        projectTitle.textContent = currentProject.name;\r\n        todoList.innerHTML = \"\";\r\n\r\n        currentProject.todos.forEach(todo => {\r\n            const todoItem = document.createElement(\"li\");\r\n            todoItem.className = `todo-item priority-${todo.priority}`;\r\n            todoItem.innerHTML = `\r\n                <div>\r\n                    <strong>${todo.title}</strong> - ${todo.dueDate || \"No due date\"}\r\n                </div>\r\n                <button class=\"delete-todo\">Delete</button>\r\n            `;\r\n\r\n            todoItem.addEventListener(\"click\", (e) => {\r\n                if (e.target.classList.contains(\"delete-todo\")) return;\r\n\r\n                showTodoDetails(todo);\r\n            });\r\n\r\n            todoItem.querySelector(\".delete-todo\").addEventListener(\"click\", () => {\r\n                currentProject.todos = currentProject.todos.filter(t => t !== todo);\r\n                ProjectManager.addTodoToProject(currentProject.name, currentProject.todos);\r\n                renderTodos();\r\n            });\r\n\r\n            todoList.appendChild(todoItem);\r\n        });\r\n    } else {\r\n        projectTitle.textContent = \"No Project Selected\";\r\n        todoList.innerHTML = \"<li>No todos available</li>\";\r\n    }\r\n};\r\n\r\nconst showTodoDetails = (todo) => {\r\n    document.getElementById(\"todo-modal-title\").textContent = todo.title;\r\n    document.getElementById(\"todo-modal-description\").textContent = todo.description || \"No description provided\";\r\n    document.getElementById(\"todo-modal-dueDate\").textContent = todo.dueDate || \"No due date\";\r\n    document.getElementById(\"todo-modal-priority\").textContent = todo.priority || \"No priority\";\r\n\r\n    document.getElementById(\"todo-details-modal\").style.display = \"block\";\r\n};\r\n\r\ndocument.getElementById(\"close-modal\").addEventListener(\"click\", () => {\r\n    document.getElementById(\"todo-details-modal\").style.display = \"none\";\r\n});\r\n\r\nconst setUpEventListeners = () => {\r\n    document.getElementById(\"new-project-btn\").addEventListener(\"click\", () => {\r\n        const projectName = prompt(\"Enter new project name:\");\r\n        if (projectName) {\r\n            ProjectManager.addProject(projectName);\r\n            ProjectManager.setCurrentProject(projectName);\r\n            renderProjects();\r\n            renderTodos();\r\n        }\r\n    });\r\n\r\n    document.getElementById(\"todo-form\").addEventListener(\"submit\", (event) => {\r\n        event.preventDefault();\r\n\r\n        const title = document.getElementById(\"todo-title\").value;\r\n        const description = document.getElementById(\"todo-description\").value;\r\n        const dueDate = document.getElementById(\"todo-dueDate\").value;\r\n        const priority = document.getElementById(\"todo-priority\").value;\r\n        const currentProject = ProjectManager.getCurrentProject();\r\n\r\n        if (title && currentProject) {\r\n            const newTodo = new Todo(title, description, dueDate, priority);\r\n            ProjectManager.addTodoToProject(currentProject.name, newTodo);\r\n            renderTodos();\r\n            document.getElementById(\"todo-form\").reset();\r\n        } else {\r\n            alert(\"Please provide a title and select a project.\");\r\n        }\r\n    });\r\n};\r\n\r\n// Add Todo Modal Logic\r\nconst addTodoBtn = document.getElementById(\"add-todo-btn\");\r\nconst addTodoModal = document.getElementById(\"add-todo-modal\");\r\nconst closeTodoModal = document.getElementById(\"close-todo-modal\");\r\n\r\naddTodoBtn.addEventListener(\"click\", () => {\r\n    addTodoModal.style.display = \"flex\";\r\n});\r\n\r\ncloseTodoModal.addEventListener(\"click\", () => {\r\n    addTodoModal.style.display = \"none\";\r\n});\r\n\r\nwindow.addEventListener(\"click\", (event) => {\r\n    if (event.target === addTodoModal) {\r\n        addTodoModal.style.display = \"none\";\r\n    }\r\n});\r\n\r\n\r\n// Initialization\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    ProjectManager.loadProjects();\r\n    renderProjects();\r\n    renderTodos();\r\n    setUpEventListeners();\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;