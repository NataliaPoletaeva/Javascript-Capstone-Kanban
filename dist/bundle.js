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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  background-color: #f9fffd;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  height: 4rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-left: 5%;\\r\\n  border-bottom: 1px solid #043322;\\r\\n  background-color: #90f1ce;\\r\\n  font-size: 1.25rem;\\r\\n  line-height: 1.25rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 18%;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  width: 35%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-right: 10%;\\r\\n  gap: 5%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 70%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  margin: 0 auto;\\r\\n  padding: 2rem 0;\\r\\n  row-gap: 2rem;\\r\\n  column-gap: 5%;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: #151515d9;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  z-index: 20;\\r\\n  backdrop-filter: blur(0.25rem);\\r\\n  overflow-y: hidden;\\r\\n}\\r\\n\\r\\n.inner-content,\\r\\n.comment-create {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  box-sizing: border-box;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 50%;\\r\\n  max-width: 400px;\\r\\n  height: 85%;\\r\\n  border-radius: 1rem;\\r\\n  margin: 0;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  -ms-transform: translate(-50%, -50%);\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 2rem;\\r\\n  background-color: #f9fffd;\\r\\n  z-index: 20;\\r\\n  overflow-x: hidden;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 2rem auto;\\r\\n  padding-top: 15rem;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  cursor: pointer;\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n}\\r\\n\\r\\n.show-info {\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 1.5rem auto;\\r\\n  font-size: 1.15rem;\\r\\n  line-height: 1.75rem;\\r\\n}\\r\\n\\r\\n.image-info {\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.image-info > img {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  margin: 2rem auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.comment-display {\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.comment-create {\\r\\n  gap: 0.75rem;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\ninput[name=\\\"username\\\"],\\r\\ntextarea[name=\\\"insights\\\"] {\\r\\n  width: 100%;\\r\\n  resize: none;\\r\\n  padding: 0.75rem;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.photo-close img {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  border-radius: 15px;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.fixed-top {\\r\\n  z-index: 20;\\r\\n  box-shadow: 0 12px 16px 6px rgb(0 0 0 / 5%);\\r\\n}\\r\\n\\r\\n.photo-close span {\\r\\n  margin: -20px;\\r\\n  position: absolute;\\r\\n  right: 30px;\\r\\n}\\r\\n\\r\\n.btn-add-comment {\\r\\n  margin: 20px 0;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: #145f44;\\r\\n  border: none;\\r\\n  color: #90f1ce;\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 1rem;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  transition: 300ms;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: #043322;\\r\\n}\\r\\n\\r\\n.film {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  border: 1px solid #043322;\\r\\n  border-radius: 1rem;\\r\\n  padding: 1rem;\\r\\n  background-color: #90f1ce;\\r\\n}\\r\\n\\r\\n.card-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border-top: 1px solid #043322;\\r\\n  padding: 2.5rem 4rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pullId\": () => (/* binding */ pullId)\n/* harmony export */ });\nconst linkBase = 'https://api.tvmaze.com/shows/';\n\nconst pullId = async (id) => {\n  const response = await fetch(linkBase + id);\n  const show = await response.json();\n\n  return show;\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/api.js?");

/***/ }),

/***/ "./src/engagement.js":
/*!***************************!*\
  !*** ./src/engagement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likesURL\": () => (/* binding */ likesURL),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\r\n\r\nconst likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rHhNSvK2vYzG0HnCQK6H/likes/';\r\nconst commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rHhNSvK2vYzG0HnCQK6H/comments';\r\n\r\nconst postLike = async (id) => {\r\n  const response = await fetch(likesURL, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: id }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response;\r\n};\r\n\r\nconst getLike = async () => {\r\n  const response = await fetch(likesURL);\r\n  const like = await response.json();\r\n\r\n  return like;\r\n};\r\n\r\nconst createComment = async (obj) => {\r\n  const commentBody = {\r\n    item_id: obj.item_id,\r\n    username: obj.username,\r\n    comment: obj.comment,\r\n  };\r\n\r\n  const response = await fetch(commentsURL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(commentBody),\r\n  });\r\n\r\n  return response.status;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  try {\r\n    const response = await fetch(`${commentsURL}?item_id=${id}`);\r\n    const comments = await response.json();\r\n\r\n    return comments;\r\n  } catch (error) {\r\n    return [];\r\n  }\r\n};\r\n\r\nconst getCommentsNumber = (commentId) => {\r\n  const commentsContent = document.querySelectorAll(`[comment-id=\"${commentId}\"]`)[0]\r\n    .parentElement.previousElementSibling.children;\r\n\r\n  const commentsCount = [...commentsContent].filter((elem) => elem.nodeName === 'P').length;\r\n\r\n  return commentsCount;\r\n};\r\n\r\nconst updateCommentTitle = (id) => {\r\n  const numberOfComments = getCommentsNumber(id);\r\n\r\n  const commentsContent = document.querySelectorAll(`[comment-id=\"${id}\"]`)[0]\r\n    .parentElement.previousElementSibling.children;\r\n\r\n  if (commentsContent.length > 0) {\r\n    const commentTitle = [...commentsContent].filter((elem) => elem.nodeName === 'H3')[0];\r\n\r\n    commentTitle.innerText = `Comments (${numberOfComments})`;\r\n  }\r\n};\r\n\r\nconst genPopupContent = async (show) => {\r\n  const popup = document.createElement('div');\r\n  popup.classList.add('popup');\r\n\r\n  popup.innerHTML = '';\r\n  const image = show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';\r\n\r\n  const showId = show.id;\r\n  const comments = await getComments(showId);\r\n\r\n  let commentBlock = '';\r\n\r\n  popup.insertAdjacentHTML('beforeend', ` \r\n      <div class=\"popup-container\">\r\n        <div class=\"popup-header\">\r\n            <h2>${show.name}</h2>\r\n            <i class=\"fas fa-times close-popup\"></i>\r\n        </div>\r\n        <div class=\"show-info\">\r\n          <div class=\"image-info\">\r\n            <img src=\"${image}\" />\r\n              <p>Type: ${show.type}</p>\r\n              <p>Language: ${show.language}</p>\r\n              <p>Status: ${show.status}</p>\r\n              <p>Premiered: ${show.premiered}</p>\r\n          </div>\r\n          <div class=\"comment-section\"> \r\n            <div class=\"comments-display\">\r\n              ${commentBlock}\r\n            </div>\r\n            <div class=\"comment-create\">\r\n              <h3>Add a comment</h3>\r\n              <input name=\"username\" placeholder=\"Your name\" />\r\n              <textarea name=\"insights\" rows=\"6\" placeholder=\"Your Thoughts\"></textarea>\r\n              <button type=\"button\" comment-id=\"${show.id}\" class=\"material-icons-outlined btn-com\">Comment</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n    </div>`);\r\n  document.querySelector('main').appendChild(popup);\r\n  const closeButton = document.getElementsByClassName('close-popup')[0];\r\n  closeButton.addEventListener('click', () => {\r\n    document.querySelector('.popup').remove();\r\n  });\r\n\r\n  const commentsDisplay = document.querySelectorAll(`[comment-id=\"${show.id}\"]`)[0]\r\n    .parentElement.previousElementSibling;\r\n\r\n  if (comments.length > 0) {\r\n    commentBlock += '<h3>Comments</h3>';\r\n    comments.forEach((comment) => {\r\n      const date = comment.creation_date.split('-');\r\n      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;\r\n      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;\r\n    });\r\n  }\r\n  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);\r\n\r\n  updateCommentTitle(show.id);\r\n\r\n  const commentButton = document.querySelectorAll(`[comment-id=\"${show.id}\"]`)[0];\r\n  commentButton.addEventListener('click', async (e) => {\r\n    const commentObject = {\r\n      item_id: Number(e.target.getAttribute('comment-id')),\r\n      username: commentButton.previousElementSibling.previousElementSibling.value,\r\n      comment: commentButton.previousElementSibling.value,\r\n    };\r\n\r\n    const result = await createComment(commentObject);\r\n\r\n    if (result === 201) {\r\n      const comments = await getComments(showId);\r\n      const lastComment = comments[comments.length - 1];\r\n      const commentsDisplay = document.querySelectorAll(`[comment-id=\"${show.id}\"]`)[0]\r\n        .parentElement.previousElementSibling;\r\n      const date = lastComment.creation_date.split('-');\r\n      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;\r\n\r\n      if (comments.length === 1) {\r\n        commentsDisplay.insertAdjacentHTML('beforeend', `\r\n            <h3>Comments</h3>\r\n            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>\r\n          `);\r\n      } else {\r\n        commentsDisplay.insertAdjacentHTML('beforeend', `\r\n            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>\r\n          `);\r\n      }\r\n      updateCommentTitle(show.id);\r\n    }\r\n  });\r\n};\r\n\r\nconst displayPopup = async (id) => {\r\n  const show = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.pullId)(id);\r\n  genPopupContent(show);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/engagement.js?");

/***/ }),

/***/ "./src/filmInfo.js":
/*!*************************!*\
  !*** ./src/filmInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShow\": () => (/* binding */ getShow)\n/* harmony export */ });\nconst baseURL = 'https://api.tvmaze.com';\r\n\r\nconst getShow = async () => {\r\n  const showArray = [];\r\n  for (let i = 1; i < 16; i += 1) {\r\n    const showInfo = await fetch(`${baseURL}/shows/${i}`);\r\n    const jsonInfo = await showInfo.json();\r\n    showArray.push(jsonInfo);\r\n  }\r\n  return showArray;\r\n};\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/filmInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/itemCounter.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderInterface)());\r\n\r\n(0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__.counter)();\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInterface\": () => (/* binding */ renderInterface)\n/* harmony export */ });\n/* harmony import */ var _filmInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filmInfo.js */ \"./src/filmInfo.js\");\n/* harmony import */ var _engagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engagement.js */ \"./src/engagement.js\");\n\r\n\r\n\r\nconst renderInterface = async () => {\r\n  const showContainer = document.querySelector('.container');\r\n  const likesArr = await (0,_engagement_js__WEBPACK_IMPORTED_MODULE_1__.getLike)();\r\n  (0,_filmInfo_js__WEBPACK_IMPORTED_MODULE_0__.getShow)().then((showArray) => {\r\n    showArray.forEach((show, id) => {\r\n      const showCard = document.createElement('li');\r\n      showCard.className = 'film';\r\n      showCard.setAttribute('id', `${show.id}`);\r\n      showCard.innerHTML = `<img class=\"poster\" src=\"${show.image.medium}\">\r\n      <div class=\"card-header\">\r\n      <p>${show.name}</p>\r\n      <i class=\"far fa-heart like-btn\"></i>\r\n      </div>\r\n      <p>Likes: \r\n      <span class=\"likes-counter\">${likesArr[id].likes}</span>\r\n      </p>\r\n      <button data-id=\"${show.id}\" class=\"btn-comments\">Comments</button>`;\r\n      showContainer.appendChild(showCard);\r\n      const button = document.querySelectorAll(\r\n        `[data-id=\"${show.id}\"]`,\r\n      )[0];\r\n      button.addEventListener('click', (e) => {\r\n        const showId = e.target.getAttribute('data-id');\r\n        (0,_engagement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(showId);\r\n      });\r\n    });\r\n    const likeBtn = document.querySelectorAll('.like-btn');\r\n    likeBtn.forEach((like, id) => {\r\n      like.addEventListener('click', async (e) => {\r\n        const likesCounter = document.querySelectorAll('.likes-counter')[id];\r\n        const showId = e.target.parentElement.parentElement.getAttribute('id');\r\n        if (e.target.classList.contains('far')) {\r\n          e.target.classList.remove('far');\r\n          e.target.classList.add('fas');\r\n          likesCounter.innerHTML = Number(likesCounter.innerHTML) + 1;\r\n          const likeObject = {\r\n            item_id: Number(showId),\r\n            likes: Number(likesCounter.innerHTML),\r\n          };\r\n          await fetch(_engagement_js__WEBPACK_IMPORTED_MODULE_1__.likesURL, {\r\n            method: 'POST',\r\n            headers: {\r\n              'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(likeObject),\r\n          });\r\n        } else {\r\n          e.target.classList.remove('fas');\r\n          e.target.classList.add('far');\r\n          likesCounter.innerHTML = Number(likesCounter.innerHTML) - 1;\r\n          const likeObject = {\r\n            item_id: Number(showId),\r\n            likes: Number(likesCounter.innerHTML),\r\n          };\r\n          await fetch(_engagement_js__WEBPACK_IMPORTED_MODULE_1__.likesURL, {\r\n            method: 'DELETE',\r\n            headers: {\r\n              'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(likeObject),\r\n          });\r\n        }\r\n      });\r\n    });\r\n  });\r\n};\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/interface.js?");

/***/ }),

/***/ "./src/itemCounter.js":
/*!****************************!*\
  !*** ./src/itemCounter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\n/* harmony import */ var _filmInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filmInfo.js */ \"./src/filmInfo.js\");\n\r\n\r\nconst counter = async () => {\r\n  const allShows = await (0,_filmInfo_js__WEBPACK_IMPORTED_MODULE_0__.getShow)();\r\n  const showCounter = allShows.length;\r\n  const itemCounter = document.querySelector('.item-counter');\r\n  itemCounter.innerHTML = `${showCounter}`;\r\n};\r\n\n\n//# sourceURL=webpack://javascript-capstone-kanban/./src/itemCounter.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;