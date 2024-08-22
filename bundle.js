/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/aside.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/aside.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --hover: rgba(0, 255, 0, 0.1);
}

aside {
  background-color: var(--bgColor1);
  color: var(--textColor);
  padding: 2rem;
}

aside img {
  width: 30px;
}

aside .button-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

aside .button-container div {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: .3rem;
  border-radius: 5px;
}

aside .button-container div:hover {
  background-color: var(--hover);
}

aside h2 {
  margin-bottom: 1rem;
}

aside .project-container {
  display: flex;
  flex-direction: column;
  margin-bottom: .5rem;
}

aside .project-name {
  flex: 1;
}

aside .project-container .project {
  display: flex;
  gap: 1rem;
  height: 2.4rem;
  align-items: center;
  padding: 0.4rem;
  border-radius: 3px;
  padding-left: .5rem;
}

aside .project-container .project .project-name{
  text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

aside .project-container .project:hover {
  cursor: pointer;
  background-color: var(--hover);
}

.active {
  background-color: rgba(0, 255, 0, 0.2);
  border-left: rgba(0, 255, 0) solid 5px;
}

aside .add-project {
  display: flex;
  width: 100%;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  color: var(--textColor);
  opacity: .7;
  font-size: 1.1rem;
  background-color: transparent;
  border: 0;
  padding: .5rem 1.5rem;
  border-radius: 5px;
}

aside .add-project:hover {
  background-color: var(--hover);
}

.project .hover {
  display: none;
}

.project:hover .hover {
  display: block;
}

.project .project-btn {
  display: flex;
}

/* form */

aside .add-project-form {
  border: grey 2px ridge;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: .3rem;
}

aside .add-project-form input {
  width: 100%;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 5px;
  padding: .2rem;
  font-size: 1.2rem;
  border: grey 1px solid;
  margin-bottom: .5rem;
}

aside .add-project-form input:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

aside .add-project-form input:focus {
  outline: none;
}

aside .add-project-form button {
  width: 47.8%;
  height: 1.8rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--textColor);
}

aside .add-project-form .cancel {
  background-color: rgba(190, 0, 0, 0.8);
}

aside .add-project-form .submit {
  background-color: rgba(1, 198, 1, 0.8);
}

aside .add-project-form .cancel:hover {
  background-color: rgba(190, 0, 0, 1);
}

aside .add-project-form .submit:hover {
  background-color: rgba(1, 198, 1, 1);
}

/* rename form */

.project {
  position: relative;
  display: inline-block;
}

.drop-up .rename-form {
  display: none;
  position: absolute;
  padding: .2rem;
  bottom: 35px;
  right: -5rem;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.drop-up .show {
  display: block;
}

.rename-form input {
  width: 100%;
  font-size: 1rem;
}

.rename-form .btn-container{
  width: 100%;
}

.rename-form .btn-container button {
  width: 47.5%;
  border: none;
  color: white;
  cursor: pointer;
}

.rename-form .btn-container .cancel {
  background-color: rgba(190, 0, 0, 0.8);
}

.rename-form .btn-container .submit {
  background-color: rgba(1, 198, 1, 0.8);
}

.rename-form .btn-container .cancel:hover {
  background-color: rgba(190, 0, 0, 1);
}

.rename-form .btn-container .submit:hover {
  background-color: rgba(1, 198, 1, 1);
}`, "",{"version":3,"sources":["webpack://./src/styles/aside.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;AAC/B;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,SAAS;EACT,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,sCAAsC;EACtC,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;EACT,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,SAAS;;AAET;EACE,sBAAsB;EACtB,qDAAqD;EACrD,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,gBAAgB;;AAEhB;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,+CAA+C;EAC/C,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":[":root {\n  --hover: rgba(0, 255, 0, 0.1);\n}\n\naside {\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  padding: 2rem;\n}\n\naside img {\n  width: 30px;\n}\n\naside .button-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n\naside .button-container div {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  padding: .3rem;\n  border-radius: 5px;\n}\n\naside .button-container div:hover {\n  background-color: var(--hover);\n}\n\naside h2 {\n  margin-bottom: 1rem;\n}\n\naside .project-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: .5rem;\n}\n\naside .project-name {\n  flex: 1;\n}\n\naside .project-container .project {\n  display: flex;\n  gap: 1rem;\n  height: 2.4rem;\n  align-items: center;\n  padding: 0.4rem;\n  border-radius: 3px;\n  padding-left: .5rem;\n}\n\naside .project-container .project .project-name{\n  text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\naside .project-container .project:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.active {\n  background-color: rgba(0, 255, 0, 0.2);\n  border-left: rgba(0, 255, 0) solid 5px;\n}\n\naside .add-project {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: .5rem;\n  cursor: pointer;\n  color: var(--textColor);\n  opacity: .7;\n  font-size: 1.1rem;\n  background-color: transparent;\n  border: 0;\n  padding: .5rem 1.5rem;\n  border-radius: 5px;\n}\n\naside .add-project:hover {\n  background-color: var(--hover);\n}\n\n.project .hover {\n  display: none;\n}\n\n.project:hover .hover {\n  display: block;\n}\n\n.project .project-btn {\n  display: flex;\n}\n\n/* form */\n\naside .add-project-form {\n  border: grey 2px ridge;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  padding: .3rem;\n}\n\naside .add-project-form input {\n  width: 100%;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding-left: 5px;\n  padding: .2rem;\n  font-size: 1.2rem;\n  border: grey 1px solid;\n  margin-bottom: .5rem;\n}\n\naside .add-project-form input:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\naside .add-project-form input:focus {\n  outline: none;\n}\n\naside .add-project-form button {\n  width: 47.8%;\n  height: 1.8rem;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--textColor);\n}\n\naside .add-project-form .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\naside .add-project-form .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\naside .add-project-form .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\naside .add-project-form .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}\n\n/* rename form */\n\n.project {\n  position: relative;\n  display: inline-block;\n}\n\n.drop-up .rename-form {\n  display: none;\n  position: absolute;\n  padding: .2rem;\n  bottom: 35px;\n  right: -5rem;\n  background-color: #f1f1f1;\n  min-width: 200px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.drop-up .show {\n  display: block;\n}\n\n.rename-form input {\n  width: 100%;\n  font-size: 1rem;\n}\n\n.rename-form .btn-container{\n  width: 100%;\n}\n\n.rename-form .btn-container button {\n  width: 47.5%;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.rename-form .btn-container .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\n.rename-form .btn-container .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\n.rename-form .btn-container .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\n.rename-form .btn-container .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bgColor1: #15202b;
  --bgColor2: #192734;
  --bgColor3: #22303c;
  --bgColorPopUp: #273746;
  --textColor: #eaebec;
  --accent: #2abd67;
  --accentDark: #1f8d4d;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace, sans-serif;
}

body {
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: 85px auto 40px;
  height: 100vh;
}

header {
  grid-column: 1/span 2;
}

header h1 {
  background-color: var(--bgColor3);
  color: var(--accent);
  font-size: 3rem;
  padding: 1rem;
}

footer {
  background-color: var(--bgColor3);
  color: var(--textColor);
  padding: .5rem;
  grid-column: 1/span 2;
  text-align: center;
  font-weight: bold;
}

input[type=checkbox] {
  cursor: pointer;
}

.hover {
  cursor: pointer;
  padding: .4rem .4rem;
  border-radius: 50%;
}

.hover:hover {
  background-color: rgba(128, 128, 128, 0.3);
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;EACjC,oBAAoB;EACpB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');\n\n:root {\n  --bgColor1: #15202b;\n  --bgColor2: #192734;\n  --bgColor3: #22303c;\n  --bgColorPopUp: #273746;\n  --textColor: #eaebec;\n  --accent: #2abd67;\n  --accentDark: #1f8d4d;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto Mono\", monospace, sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 350px auto;\n  grid-template-rows: 85px auto 40px;\n  height: 100vh;\n}\n\nheader {\n  grid-column: 1/span 2;\n}\n\nheader h1 {\n  background-color: var(--bgColor3);\n  color: var(--accent);\n  font-size: 3rem;\n  padding: 1rem;\n}\n\nfooter {\n  background-color: var(--bgColor3);\n  color: var(--textColor);\n  padding: .5rem;\n  grid-column: 1/span 2;\n  text-align: center;\n  font-weight: bold;\n}\n\ninput[type=checkbox] {\n  cursor: pointer;\n}\n\n.hover {\n  cursor: pointer;\n  padding: .4rem .4rem;\n  border-radius: 50%;\n}\n\n.hover:hover {\n  background-color: rgba(128, 128, 128, 0.3);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
  background-color: var(--bgColor2);
  color: var(--textColor);
  padding: 2rem 4rem;
}

main h1 {
  background-color: var(--accentDark);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
}

main .task {
  display: flex;
  justify-content: space-between;
  border-radius: .5rem;
  padding: .5rem;
  font-size: 1.2rem;
}

main .task .task-name {
  display: flex;
  align-items: center;
  gap: 1rem;
}

main .task .task-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

main .task .task-buttons .due-date {
  border: 1px white solid;
  padding: .2rem;
  border-radius: 5px;
}

main .task-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

main .due-date {
  font-size: 1rem;
}

main .add-task {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  cursor: pointer;
  color: var(--textColor);
  opacity: .7;
  font-size: 1.2rem;
  background-color: transparent;
  border: 0;
  padding: .5rem;
  border-radius: 5px;
}

main .add-task:hover {
  background-color: var(--hover);
}

/* Add Task Form */

main .add-task-form {
  border: rgba(128, 128, 128, 0.5) solid 1px;
  border-radius: 5px;
  padding: .5rem;
}

main .task-name,
.task-details {
  border: none;
  background-color: transparent;
  color: var(--textColor);
}

input:focus,
select:focus,
.task-details:focus {
  outline: none;
}

main .add-task-form .priority {
  padding: 1px;
}

main .add-task-form .task-name {
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
}

main .add-task-form .task-details {
  width: 100%;
}

main .add-task-form .task-about {
  padding-bottom: .5rem;
}

.add-task-form .task-buttons {
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding-right: 1rem;
}

main .add-task-form .task-buttons button {
  width: 6rem;
  height: 1.8rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 3px;
  color: var(--textColor);
}

.task-edit-dialog .button-container .cancel,
main .add-task-form .cancel {
  background-color: rgba(190, 0, 0, 0.8);
}

.task-edit-dialog .button-container .submit,
main .add-task-form .submit {
  background-color: rgba(1, 198, 1, 0.8);
}

.task-edit-dialog .button-container .cancel:hover,
main .add-task-form .cancel:hover {
  background-color: rgba(190, 0, 0, 1);
}

.task-edit-dialog .button-container .submit:hover,
main .add-task-form .submit:hover {
  background-color: rgba(1, 198, 1, 1);
}

.done-task {
  opacity: .5;
  text-decoration: line-through;
}

/* styling input[checkbox] */

.custom-checkbox {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.custom-checkbox input[type="checkbox"] {
  display: none;
}

.custom-checkbox .checkMark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 2px solid #ccc;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked+.checkMark {
  background-color: #3df321;
  border-color: #40f324;
}

.custom-checkbox .checkMark::after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input[type="checkbox"]:checked+.checkMark::after {
  display: block;
}

.custom-checkbox .checkMark::after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* task priority colors */

.red {
  border: red solid 1px;
  background-color: rgba(255, 0, 0, 0.1);
  border-left: red solid 1rem;
}

.green {
  border: green solid 1px;
  background-color: rgba(0, 128, 0, 0.1);
  border-left: green solid 1rem;
}

.yellow {
  border: yellow solid 1px;
  background-color: rgba(255, 255, 0, 0.1);
  border-left: yellow solid 1rem;
}

.white {
  border: white solid 1px;
  background-color: rgba(255, 255, 255, 0.1);
  border-left: white solid 1rem;
}

/* .task-details-dialog box */

dialog {
  position: fixed;
  top: 35%;
  left: 35%;
  border: none;
  color: white;
  background-color: var(--bgColor2);
  padding: 10px;
  z-index: 1000;
  border-radius: 4px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

dialog {
  animation: fade-out 0.7s ease-out;
}

dialog[open] {
  animation: fade-in 0.7s ease-out;
}

dialog[open]::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}

dialog .dialog-heading {
  display: flex;
  justify-content: space-between;
}

dialog .dialog-heading button {
  font-size: 1rem;
  font-weight: bold;
  border: none;
  background-color: var(--bgColor2);
  cursor: pointer;
  color: white;
}

dialog .dialog-heading button:hover {
  background-color: #cccccc15;
}

/* .task-edit-dialog */

.task-edit-dialog .button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.task-edit-dialog .button-container button {
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 2px;
  height: 1.5rem;
  width: 4rem;
  font-weight: bold;
}

.edit-details-label {
  display: flex;
  align-items: center;
}

.edit-details-label textarea {
  margin-left: 10px;
  height: 4rem;
  flex-grow: 1;
}

.edit-task .edit-task-name{
  width: 86%;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["main {\n  background-color: var(--bgColor2);\n  color: var(--textColor);\n  padding: 2rem 4rem;\n}\n\nmain h1 {\n  background-color: var(--accentDark);\n  padding: 1rem;\n  border-radius: 5px;\n  margin-bottom: 2rem;\n}\n\nmain .task {\n  display: flex;\n  justify-content: space-between;\n  border-radius: .5rem;\n  padding: .5rem;\n  font-size: 1.2rem;\n}\n\nmain .task .task-name {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nmain .task .task-buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nmain .task .task-buttons .due-date {\n  border: 1px white solid;\n  padding: .2rem;\n  border-radius: 5px;\n}\n\nmain .task-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\nmain .due-date {\n  font-size: 1rem;\n}\n\nmain .add-task {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  cursor: pointer;\n  color: var(--textColor);\n  opacity: .7;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: 0;\n  padding: .5rem;\n  border-radius: 5px;\n}\n\nmain .add-task:hover {\n  background-color: var(--hover);\n}\n\n/* Add Task Form */\n\nmain .add-task-form {\n  border: rgba(128, 128, 128, 0.5) solid 1px;\n  border-radius: 5px;\n  padding: .5rem;\n}\n\nmain .task-name,\n.task-details {\n  border: none;\n  background-color: transparent;\n  color: var(--textColor);\n}\n\ninput:focus,\nselect:focus,\n.task-details:focus {\n  outline: none;\n}\n\nmain .add-task-form .priority {\n  padding: 1px;\n}\n\nmain .add-task-form .task-name {\n  width: 100%;\n  font-weight: bold;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: none;\n}\n\nmain .add-task-form .task-details {\n  width: 100%;\n}\n\nmain .add-task-form .task-about {\n  padding-bottom: .5rem;\n}\n\n.add-task-form .task-buttons {\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n  padding-right: 1rem;\n}\n\nmain .add-task-form .task-buttons button {\n  width: 6rem;\n  height: 1.8rem;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-radius: 3px;\n  color: var(--textColor);\n}\n\n.task-edit-dialog .button-container .cancel,\nmain .add-task-form .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\n.task-edit-dialog .button-container .submit,\nmain .add-task-form .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\n.task-edit-dialog .button-container .cancel:hover,\nmain .add-task-form .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\n.task-edit-dialog .button-container .submit:hover,\nmain .add-task-form .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}\n\n.done-task {\n  opacity: .5;\n  text-decoration: line-through;\n}\n\n/* styling input[checkbox] */\n\n.custom-checkbox {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.custom-checkbox input[type=\"checkbox\"] {\n  display: none;\n}\n\n.custom-checkbox .checkMark {\n  position: relative;\n  height: 20px;\n  width: 20px;\n  background-color: #eee;\n  border: 2px solid #ccc;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.custom-checkbox input[type=\"checkbox\"]:checked+.checkMark {\n  background-color: #3df321;\n  border-color: #40f324;\n}\n\n.custom-checkbox .checkMark::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.custom-checkbox input[type=\"checkbox\"]:checked+.checkMark::after {\n  display: block;\n}\n\n.custom-checkbox .checkMark::after {\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n/* task priority colors */\n\n.red {\n  border: red solid 1px;\n  background-color: rgba(255, 0, 0, 0.1);\n  border-left: red solid 1rem;\n}\n\n.green {\n  border: green solid 1px;\n  background-color: rgba(0, 128, 0, 0.1);\n  border-left: green solid 1rem;\n}\n\n.yellow {\n  border: yellow solid 1px;\n  background-color: rgba(255, 255, 0, 0.1);\n  border-left: yellow solid 1rem;\n}\n\n.white {\n  border: white solid 1px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-left: white solid 1rem;\n}\n\n/* .task-details-dialog box */\n\ndialog {\n  position: fixed;\n  top: 35%;\n  left: 35%;\n  border: none;\n  color: white;\n  background-color: var(--bgColor2);\n  padding: 10px;\n  z-index: 1000;\n  border-radius: 4px;\n  width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\ndialog {\n  animation: fade-out 0.7s ease-out;\n}\n\ndialog[open] {\n  animation: fade-in 0.7s ease-out;\n}\n\ndialog[open]::backdrop {\n  animation: backdrop-fade-in 0.7s ease-out forwards;\n}\n\n/* Animation keyframes */\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n    transform: scaleY(0);\n    display: none;\n  }\n\n  100% {\n    opacity: 1;\n    transform: scaleY(1);\n    display: block;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n    transform: scaleY(1);\n    display: block;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scaleY(0);\n    display: none;\n  }\n}\n\n@keyframes backdrop-fade-in {\n  0% {\n    background-color: rgb(0 0 0 / 0%);\n  }\n\n  100% {\n    background-color: rgb(0 0 0 / 25%);\n  }\n}\n\ndialog .dialog-heading {\n  display: flex;\n  justify-content: space-between;\n}\n\ndialog .dialog-heading button {\n  font-size: 1rem;\n  font-weight: bold;\n  border: none;\n  background-color: var(--bgColor2);\n  cursor: pointer;\n  color: white;\n}\n\ndialog .dialog-heading button:hover {\n  background-color: #cccccc15;\n}\n\n/* .task-edit-dialog */\n\n.task-edit-dialog .button-container {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.task-edit-dialog .button-container button {\n  border: none;\n  cursor: pointer;\n  color: white;\n  border-radius: 2px;\n  height: 1.5rem;\n  width: 4rem;\n  font-weight: bold;\n}\n\n.edit-details-label {\n  display: flex;\n  align-items: center;\n}\n\n.edit-details-label textarea {\n  margin-left: 10px;\n  height: 4rem;\n  flex-grow: 1;\n}\n\n.edit-task .edit-task-name{\n  width: 86%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/aside.css":
/*!******************************!*\
  !*** ./src/styles/aside.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aside.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/aside.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/scripts/aside.js":
/*!******************************!*\
  !*** ./src/scripts/aside.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjectContainer: () => (/* binding */ renderProjectContainer),
/* harmony export */   runAside: () => (/* binding */ runAside)
/* harmony export */ });
/* harmony import */ var _icons_inbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/inbox.png */ "./src/icons/inbox.png");
/* harmony import */ var _icons_today1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/today1.png */ "./src/icons/today1.png");
/* harmony import */ var _icons_week2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/week2.png */ "./src/icons/week2.png");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");






// selectors
const aside = document.querySelector('aside');
const projectContainer = aside.querySelector('.project-container')
const allTaskButton = aside.querySelector('.all-task-button')
const todayButton = aside.querySelector('.today-button')
const thisWeekButton = aside.querySelector('.this-week-button')

// form selectors
const addProjectButton = aside.querySelector('.add-project');
const formAddProject = aside.querySelector('.add-project-form');
const formCancelButton = formAddProject.querySelector('.cancel');
const projectName = formAddProject.querySelector('input')

// UI

function renderButtons() {

  allTaskButton.innerHTML = `
    <img src=${_icons_inbox_png__WEBPACK_IMPORTED_MODULE_0__}>
    <h3>All Tasks</h3>
  `

  todayButton.innerHTML = `
    <img src=${_icons_today1_png__WEBPACK_IMPORTED_MODULE_1__}>  
    <h3>Today</h3>
  `

  thisWeekButton.innerHTML = `
    <img src=${_icons_week2_png__WEBPACK_IMPORTED_MODULE_2__}>
    <h3>Next 7 Days</h3>
  `
}

function setActiveClass(element) {
  if (!element.classList.contains('gp-tasks')) {
    element = element.parentNode
  }

  document.querySelectorAll('.gp-tasks').forEach(function (btn) {
    btn.classList.remove('active');
  });

  element.classList.add('active');

  _main__WEBPACK_IMPORTED_MODULE_4__.mainHeading.innerHTML = element.querySelector('h3').innerHTML
}

function renderProjectContainer() {
  projectContainer.innerHTML = ''
  _data__WEBPACK_IMPORTED_MODULE_3__.projects.forEach(project => {
    projectContainer.innerHTML += `
      <div class="project gp-tasks" data-id=${project.id}>
        <i class="fa-solid fa-list"></i>
        <h3 class="project-name">${project.name}</h3>
        <div class="project-btn">
          <div class="drop-up">
            <i class="fa-solid fa-pen-to-square drop-btn hover"></i>
            <form class="rename-form">
              <input type="text" placeholder="Rename Project" required>
              <div class="btn-container">
                <button class="cancel">Cancel</button>
                <button class="submit">Submit</button>
              </div>
            </form>
          </div>
          <i class="fa-solid fa-trash-can hover"></i>  
        </div>
      </div>
  `
  })
}

function hideProjectForm() {
  formAddProject.style.display = 'none'
}

function showProjectForm() {
  const input = formAddProject.querySelector('input')
  formAddProject.style.display = 'block'
  input.focus()
}

function hideProjectButton() {
  addProjectButton.style.display = 'none'
}

function showProjectButton() {
  addProjectButton.style.display = 'flex'
}

function findProjectId(elementId) {
  _data__WEBPACK_IMPORTED_MODULE_3__.projects.forEach(project => {
    if (elementId === project.id) {
      (0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(project.tasks);
    }
  })
}

function renderLastTask() {
  const allProjects = document.querySelectorAll('.project-container > div')
  setActiveClass(allProjects[allProjects.length - 1])
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.projects[_data__WEBPACK_IMPORTED_MODULE_3__.projects.length - 1].tasks)
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.showAddTaskButton)()
}

// All Click Events Functions

function handleAllTaskBtn() {
  (0,_data__WEBPACK_IMPORTED_MODULE_3__.pushToAllTasks)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.allTasks)
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
}

function handleTodayBtn() { 
  (0,_data__WEBPACK_IMPORTED_MODULE_3__.pushToTodayTasks)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.todayTasks)
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
}

function handleThisWeekBtn() {
  (0,_data__WEBPACK_IMPORTED_MODULE_3__.pushToNext7DaysTasks)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.next7daysTasks)
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
}

function handleProjectContainer(e) {
  let element = e.target;

  if (element.classList.contains('drop-btn')) {
    const renameForm = element.nextElementSibling;
    renameForm.classList.toggle('show');

    const cancelBtn = renameForm.querySelector('.cancel')
    const submitBtn = renameForm.querySelector('.submit')
    const input = renameForm.querySelector('input')
    input.focus()

    renameForm.removeEventListener('submit', handleRenameForm)
    renameForm.addEventListener('keydown', handleSubmitBtn)
    cancelBtn.removeEventListener('click', handleCancelRenameBtn)

    renameForm.addEventListener('submit', handleRenameForm)
    cancelBtn.addEventListener('click', handleCancelRenameBtn)

    function handleSubmitBtn(e) {
      if (e.key === "Enter") {
        e.preventDefault()
        submitBtn.click()
      }
    }

    function handleRenameForm(e) {
      e.preventDefault()

      const project = element.closest('.project')
      const projectId = project.dataset.id
      ;(0,_data__WEBPACK_IMPORTED_MODULE_3__.renameProject)(input.value, projectId)

      renameForm.classList.remove('show');

      if (project.classList.contains('active')) {
        setActiveClass(allTaskButton)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.allTasks)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
      }
      renderProjectContainer()
      input.value = ''
    }

    function handleCancelRenameBtn(e) {
      e.preventDefault()
      renameForm.classList.remove('show');
    }

    const hideForm = (event) => {
      if (!element.contains(event.target) && !renameForm.contains(event.target)) {
        renameForm.classList.remove('show');

        window.removeEventListener('click', hideForm);
      }
    };

    window.addEventListener('click', hideForm);
  }

  if (element.classList.contains('fa-trash-can')) {
    (0,_data__WEBPACK_IMPORTED_MODULE_3__.removeProject)(element.closest('.project').dataset.id)
    setActiveClass(allTaskButton)
    renderProjectContainer()
    handleAllTaskBtn()
    return
  }

  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    let elementId;
    if (!element.classList.contains('gp-tasks')) {
      element = element.parentNode
    }
    elementId = element.dataset.id;
    findProjectId(elementId)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.showAddTaskButton)()
    ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
  }
}

function handleAsideBtn(e) {
  const element = e.target;
  if (element.classList.contains('hover')) {
    return
  }
  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    setActiveClass(element)
  }
}

// form functions

function handleAddProjectBtn() {
  showProjectForm()
  hideProjectButton()
}

function handleAddProjectForm(e) {
  e.preventDefault()
  ;(0,_data__WEBPACK_IMPORTED_MODULE_3__.pushProject)(projectName.value)
  renderProjectContainer()
  projectName.value = ''
  hideProjectForm()
  showProjectButton()
  renderLastTask()
}

function handleCancelProjectForm(e) {
  e.preventDefault()
  hideProjectForm()
  showProjectButton()
  projectName.value = ''
}

function handleSubmitBtn(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const submitBtn = formAddProject.querySelector('.submit')
    submitBtn.click()
  }
}
// Event Listeners

aside.addEventListener('click', handleAsideBtn)
allTaskButton.addEventListener('click', handleAllTaskBtn)
todayButton.addEventListener('click', handleTodayBtn)
thisWeekButton.addEventListener('click', handleThisWeekBtn)
projectContainer.addEventListener('click', handleProjectContainer)

// Add Project Button and Form Listeners

addProjectButton.addEventListener('click', handleAddProjectBtn)
formAddProject.addEventListener('submit', handleAddProjectForm)
formAddProject.addEventListener('keydown', handleSubmitBtn);
formCancelButton.addEventListener('click', handleCancelProjectForm)

function runAside() {
  hideProjectForm()
  renderProjectContainer()
  renderButtons()
}



/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTasks: () => (/* binding */ allTasks),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   findProject: () => (/* binding */ findProject),
/* harmony export */   findTask: () => (/* binding */ findTask),
/* harmony export */   next7daysTasks: () => (/* binding */ next7daysTasks),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   pushProject: () => (/* binding */ pushProject),
/* harmony export */   pushTask: () => (/* binding */ pushTask),
/* harmony export */   pushToAllTasks: () => (/* binding */ pushToAllTasks),
/* harmony export */   pushToNext7DaysTasks: () => (/* binding */ pushToNext7DaysTasks),
/* harmony export */   pushToTodayTasks: () => (/* binding */ pushToTodayTasks),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   renameProject: () => (/* binding */ renameProject),
/* harmony export */   todayTasks: () => (/* binding */ todayTasks),
/* harmony export */   toggleDoneTask: () => (/* binding */ toggleDoneTask)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");



let projects;

loadFromStorage()

function loadFromStorage() {
  projects = JSON.parse(localStorage.getItem('projects')) || [
    {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      name: 'Expense Tracker',
      tasks: [
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'Data Structure',
          details: 'Design a data structure to store expense data. Consider fields like date, category, amount, description, and payment method.',
          date: calculateDate(0),
          priority: 'high',
          taskDone: true
        },
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'User Interface',
          details: 'Create a user-friendly interface for recording expenses, viewing summaries, and generating reports.',
          date: calculateDate(4),
          priority: 'medium',
          taskDone: false
        }
      ]
    },
    {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      name: 'To-Do List App',
      tasks: [
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'Task Management',
          details: 'Implement features to add, edit, and delete tasks.',
          date: calculateDate(0),
          priority: 'high',
          taskDone: false
        },
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'Prioritization',
          details: 'Allow users to prioritize tasks using labels, tags, or a custom system.',
          date: calculateDate(6),
          priority: 'No priority',
          taskDone: false
        }
      ]
    },
    {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      name: 'Simple Game',
      tasks: [
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'Game Concept',
          details: 'Choose a game concept (e.g., puzzle, arcade, strategy) and define its rules and mechanics.',
          date: calculateDate(0),
          priority: 'low',
          taskDone: false
        },
        {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          name: 'Game Engine',
          details: 'Select a suitable game engine or framework (e.g., Unity, Godot) to build the game.',
          date: calculateDate(10),
          priority: 'low',
          taskDone: true
        }
      ]
    }
  ]
}

function saveToStorage(){
  localStorage.setItem('projects', JSON.stringify(projects));
}

let allTasks = []
let todayTasks = []
let next7daysTasks = []

// For UI

function pushToTodayTasks() {
  todayTasks = []
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (isDateToday(task.date)) {
        todayTasks.push(task)
      }
    })
  })
}

function pushToNext7DaysTasks() {
  next7daysTasks = []
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (isDateInNext7Days(task.date)) {
        next7daysTasks.push(task)
      }
    })
  })
}

function isDateInNext7Days(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  const sevenDaysLater = new Date(today);
  sevenDaysLater.setDate(today.getDate() + 7);

  return inputDate > today && inputDate <= sevenDaysLater;
}

function isDateToday(inputDate) {
  const today = new Date();
  const todayFormatted = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');
  return todayFormatted === inputDate
}

function calculateDate(days) {
  const today = new Date();

  today.setDate(today.getDate() + days);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return year + '-' + month + '-' + day;
}

function pushToAllTasks() {
  allTasks = []
  projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))
}

// Editing Projects Object

function pushProject(projectName) {
  projects.push({
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: projectName,
    tasks: []
  })
  saveToStorage()
}

function removeProject(projectId) {
  const projectIndex = projects.findIndex(project => project.id === projectId);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}


function renameProject(newName, projectId) {
  projects.forEach(project => {
    if (project.id === projectId) {
      project.name = newName
    }
  })
  saveToStorage()
}

function pushTask(taskName, taskDate, taskPriority, taskDetails, projectId) {
  if (taskDetails === '') {
    taskDetails = 'No details'
  }
  if (taskPriority === '') {
    taskPriority = 'No priority'
  }
  projects.forEach(project => {
    if (project.id === projectId) {
      project.tasks.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: taskName,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        taskDone: false
      })
      ;(0,_main__WEBPACK_IMPORTED_MODULE_0__.renderTaskContainer)(project.tasks)
    }
  })
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}

function deleteTask(taskId) {
  projects.forEach(project => {
    const taskIndex = project.tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1)
    }
  })
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}

function toggleDoneTask(taskId) {
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        task.taskDone = !task.taskDone
      }
    })
  })
  saveToStorage()
}

function editTask(title, date, priority, details, taskId) {
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        task.name = title
        task.date = date
        task.priority = priority
        task.details = details
      }
    })
  })
  saveToStorage()
}

// finding data


function findTask(taskId) {
  let matchedTask;
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        matchedTask = task
      }
    })
  })
  return matchedTask
}

function findProject(projectId) {
  let returnObject
  projects.map(project => {
    if (project.id === projectId) {
      returnObject = project
    }
  })
  return returnObject
}


pushToAllTasks()
pushToTodayTasks()
pushToNext7DaysTasks()



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideAddTaskButton: () => (/* binding */ hideAddTaskButton),
/* harmony export */   hideAddTaskForm: () => (/* binding */ hideAddTaskForm),
/* harmony export */   mainHeading: () => (/* binding */ mainHeading),
/* harmony export */   renderTaskContainer: () => (/* binding */ renderTaskContainer),
/* harmony export */   runMain: () => (/* binding */ runMain),
/* harmony export */   showAddTaskButton: () => (/* binding */ showAddTaskButton),
/* harmony export */   taskContainer: () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");


const mainHeading = document.querySelector('main h1');
const taskContainer = document.querySelector('.task-container')
const addTaskButton = document.querySelector('main .add-task')
const addTaskForm = document.querySelector('main .add-task-form')
const taskName = addTaskForm.querySelector('.task-name')
const taskDetails = addTaskForm.querySelector('.task-details')
const taskDate = addTaskForm.querySelector('.date')
const taskPriority = addTaskForm.querySelector('.priority')
const cancelTaskForm = addTaskForm.querySelector('.cancel')

// UI

function renderTaskContainer(tasks) {
  taskContainer.innerHTML = ''
  tasks.forEach(task => {
    taskContainer.innerHTML += `
    <div class="task ${task.taskDone && 'done-task'} ${renderTaskColor(task.priority)}" data-task-id=${task.id}>
      <label class="custom-checkbox">
        <input type="checkbox" class="checkbox" ${task.taskDone && 'checked'} >
        <span class="checkMark"></span>
        <p>${task.name}</p>
      </label>
      <div class="task-buttons">
        <i class="fa-solid fa-circle-info hover"></i>
        <p class="due-date">${formatDate(task.date)}</p>
        <i class="fa-solid fa-pen-to-square hover"></i>
        <i class="fa-solid fa-trash-can hover"></i>
      </div>
    </div>
  `
  })
}

function renderTaskColor(priority) {
  if (priority === 'high') {
    return 'red'
  } else if (priority === 'low') {
    return 'green'
  } else if (priority === 'medium') {
    return 'yellow'
  } else {
    return 'white'
  }
}

function hideAddTaskButton() {
  addTaskButton.style.display = 'none'
}

function showAddTaskButton() {
  addTaskButton.style.display = 'flex'
}

function hideAddTaskForm() {
  addTaskForm.style.display = 'none'
  resetTaskForm()
}

function showAddTaskForm() {
  const input = addTaskForm.querySelector('.task-name')
  addTaskForm.style.display = 'block'
  input.focus()
}

function resetTaskForm() {
  taskName.value = ''
  taskDate.value = ''
  taskDetails.value = ''
  taskPriority.value = ''
}

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const formattedDate = `${day} ${month}`;
  return formattedDate
}

// event handlers

function handleAddTaskBtn() {
  hideAddTaskButton()
  showAddTaskForm()
}

function handleAddTaskForm(e) {
  e.preventDefault()
  const activeClass = document.querySelector('.active');
  const projectId = activeClass.dataset.id;

  (0,_data__WEBPACK_IMPORTED_MODULE_0__.pushTask)(taskName.value, taskDate.value, taskPriority.value, taskDetails.value, projectId)
  resetTaskForm()
}

function handleEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const submitBtn = addTaskForm.querySelector('.submit')
    submitBtn.click()
  }
}

function handleCancelTaskForm(e) {
  e.preventDefault()
  showAddTaskButton()
  hideAddTaskForm()
  resetTaskForm()
}

function handleTaskContainer(e) {
  const element = e.target
  const taskId = element.closest('.task').dataset.taskId
  const activeElement = document.querySelector('.active')

  function renderActiveContainer(activeElement) {
    if (activeElement.dataset.id === undefined) {
      if (activeElement.classList.contains('all-task-button')) {
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.pushToAllTasks)()
        renderTaskContainer(_data__WEBPACK_IMPORTED_MODULE_0__.allTasks)
      } else if (activeElement.classList.contains('today-button')) {
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.pushToTodayTasks)()
        renderTaskContainer(_data__WEBPACK_IMPORTED_MODULE_0__.todayTasks)
      } else if (activeElement.classList.contains('this-week-button')) {
        (0,_data__WEBPACK_IMPORTED_MODULE_0__.pushToNext7DaysTasks)()
        renderTaskContainer(_data__WEBPACK_IMPORTED_MODULE_0__.next7daysTasks)
      }
    } else {
      const projectId = activeElement.dataset.id
      const project = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findProject)(projectId)
      renderTaskContainer(project.tasks)
    }
  }

  function renderDialogBox(task) {
    let dialog = document.querySelector('.task-details-dialog');

    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'task-details-dialog';
      document.body.appendChild(dialog);
    }
    dialog.innerHTML = `
  <div class="dialog-heading">
    <h2>${task.name}</h2>
      <form method="dialog">
          <button class="hover">X</button>
      </form>
  </div>
  <br>
  <div class="dialog-details">
    <p><b>Details:</b> ${task.details} </p><br>
    <p><b>Priority:</b>  ${task.priority} </p><br>
    <p><b>Due-Date:</b>  ${task.date} </p>
  </div>     
    `;
  }

  function renderEditTaskForm(task) {
    let dialog = document.querySelector('.task-edit-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'task-edit-dialog';
      document.body.appendChild(dialog);
    }

    dialog.innerHTML = `
    <div class="dialog-heading">
      <h2>Edit Task Form</h2>
      <form method="dialog">
        <button class="hover">X</button>
      </form>
    </div>
    <br>
    <form class="edit-task">
      <label>
      Title:
        <input type="text" class="edit-task-name" placeholder="Task title" value="${task.name}">
      </label><br><br>
      <label class="edit-details-label">
      Details:
        <textarea class="edit-details" placeholder="Task details">${task.details}</textarea>
      </label>
       <label><br>
        Priority:
        <select class="priority">
          <option value="No priority" ${task.priority === "No priority" ? "selected" : ""}>No Priority</option>
          <option value="low" ${task.priority === "low" ? "selected" : ""}>Low </option>
          <option value="medium" ${task.priority === "medium" ? "selected" : ""}>Medium </option>
          <option value="high" ${task.priority === "high" ? "selected" : ""}>High</option>
        </select>
      </label><br><br>
      <label class="edit-date-label">
        Date:
        <input type="date" class="edit-date" value="${task.date}">
      </label>
      <div class="button-container">
        <button class="submit">Submit</button>
      </div>
    </form>
  `
  }


  // delete task
  if (element.classList.contains('fa-trash-can')) {
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId)
    renderActiveContainer(activeElement)
  }

  // checkbox
  if (element.classList.contains('checkbox')) {
    if (element.checked) {
      (0,_data__WEBPACK_IMPORTED_MODULE_0__.toggleDoneTask)(taskId)
    } else {
      (0,_data__WEBPACK_IMPORTED_MODULE_0__.toggleDoneTask)(taskId)
    }
    renderActiveContainer(activeElement)
  }

  // Info
  if (element.classList.contains('fa-circle-info')) {
    const taskDetails = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findTask)(taskId)
    renderDialogBox(taskDetails)
    const dialog = document.querySelector('.task-details-dialog');
    dialog.showModal();
  }

  // Edit-Task-Button
  if (element.classList.contains('fa-pen-to-square')) {
    const taskDetails = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findTask)(taskId)
    renderEditTaskForm(taskDetails)
    const dialog = document.querySelector('.task-edit-dialog');
    dialog.showModal();

    const editForm = dialog.querySelector('.edit-task')
    const submitBtn = editForm.querySelector('.submit')

    submitBtn.addEventListener('click', handleSubmitBtn)


    function handleSubmitBtn(e) {
      e.preventDefault()
      const inputValue = editForm.querySelector('input').value
      const textareaValue = editForm.querySelector('textarea').value
      const selectValue = editForm.querySelector('select').value
      const dateValue = editForm.querySelector('.edit-date').value

      ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.editTask)(inputValue, dateValue, selectValue, textareaValue, taskDetails.id)
      dialog.close()
      renderActiveContainer(activeElement)
    }
  }
}

// UI interactions Form

addTaskButton.addEventListener('click', handleAddTaskBtn)
addTaskForm.addEventListener('submit', handleAddTaskForm)
addTaskForm.addEventListener('keydown', handleEnterKey)
cancelTaskForm.addEventListener('click', handleCancelTaskForm)
taskContainer.addEventListener('click', handleTaskContainer)


function runMain() {
  renderTaskContainer(_data__WEBPACK_IMPORTED_MODULE_0__.allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
}




/***/ }),

/***/ "./src/icons/check_logo.png":
/*!**********************************!*\
  !*** ./src/icons/check_logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1972ccfe48de97b7301d.png";

/***/ }),

/***/ "./src/icons/inbox.png":
/*!*****************************!*\
  !*** ./src/icons/inbox.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1998457f5479e6cdd3d8.png";

/***/ }),

/***/ "./src/icons/today1.png":
/*!******************************!*\
  !*** ./src/icons/today1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dd473a9955e07bb423a.png";

/***/ }),

/***/ "./src/icons/week2.png":
/*!*****************************!*\
  !*** ./src/icons/week2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a127275980624220115b.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/aside */ "./src/scripts/aside.js");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_aside_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/aside.css */ "./src/styles/aside.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _icons_check_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/check_logo.png */ "./src/icons/check_logo.png");
// js import



// css imports





function webPageTitle() {
  const link = document.createElement('link')
  link.rel = 'icon';
  link.href = _icons_check_logo_png__WEBPACK_IMPORTED_MODULE_5__;
  document.head.appendChild(link)
}

webPageTitle()

;(0,_scripts_main__WEBPACK_IMPORTED_MODULE_1__.runMain)()
;(0,_scripts_aside__WEBPACK_IMPORTED_MODULE_0__.runAside)()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxVQUFVLGdEQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGNBQWMsZ0RBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdEQUFNO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSwyREFBbUI7QUFDekI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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ZXMvYXNpZGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2FzaWRlLmNzcz85MTJmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1ob3ZlcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XG59XG5cbmFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuYXNpZGUgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbmFzaWRlIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuYXNpZGUgLmJ1dHRvbi1jb250YWluZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IC4zcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmFzaWRlIC5idXR0b24tY29udGFpbmVyIGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuYXNpZGUgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuYXNpZGUgLnByb2plY3QtbmFtZSB7XG4gIGZsZXg6IDE7XG59XG5cbmFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgaGVpZ2h0OiAyLjRyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtbmFtZXtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICBib3JkZXItbGVmdDogcmdiYSgwLCAyNTUsIDApIHNvbGlkIDVweDtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIG9wYWNpdHk6IC43O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnByb2plY3QgLmhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIgLmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIGZvcm0gKi9cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0ge1xuICBib3JkZXI6IGdyZXkgMnB4IHJpZGdlO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgcGFkZGluZzogLjNyZW07XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IGdyZXkgMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDQ3LjglO1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xufVxuXG4vKiByZW5hbWUgZm9ybSAqL1xuXG4ucHJvamVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcC11cCAucmVuYW1lLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAtNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wLXVwIC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZW5hbWUtZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogNDcuNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYXNpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxzQkFBc0I7RUFDdEIscURBQXFEO0VBQ3JELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0taG92ZXI6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmFzaWRlIGltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuYXNpZGUgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5hc2lkZSAuYnV0dG9uLWNvbnRhaW5lciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYXNpZGUgLmJ1dHRvbi1jb250YWluZXIgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuYXNpZGUgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuYXNpZGUgLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbmFzaWRlIC5wcm9qZWN0LW5hbWUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuYXNpZGUgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtbmFtZXtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMCwgMjU1LCAwKSBzb2xpZCA1cHg7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgb3BhY2l0eTogLjc7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4ucHJvamVjdCAuaG92ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCAucHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogZm9ybSAqL1xcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogZ3JleSAycHggcmlkZ2U7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZzogLjJyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlcjogZ3JleSAxcHggc29saWQ7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDQ3LjglO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcXG59XFxuXFxuLyogcmVuYW1lIGZvcm0gKi9cXG5cXG4ucHJvamVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wLXVwIC5yZW5hbWUtZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogLjJyZW07XFxuICBib3R0b206IDM1cHg7XFxuICByaWdodDogLTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3AtdXAgLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5yZW5hbWUtZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVye1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDQ3LjUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIC5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJnQ29sb3IxOiAjMTUyMDJiO1xuICAtLWJnQ29sb3IyOiAjMTkyNzM0O1xuICAtLWJnQ29sb3IzOiAjMjIzMDNjO1xuICAtLWJnQ29sb3JQb3BVcDogIzI3Mzc0NjtcbiAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XG4gIC0tYWNjZW50OiAjMmFiZDY3O1xuICAtLWFjY2VudERhcms6ICMxZjhkNGQ7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NXB4IGF1dG8gNDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xufVxuXG5oZWFkZXIgaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IC40cmVtIC40cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJnQ29sb3IxOiAjMTUyMDJiO1xcbiAgLS1iZ0NvbG9yMjogIzE5MjczNDtcXG4gIC0tYmdDb2xvcjM6ICMyMjMwM2M7XFxuICAtLWJnQ29sb3JQb3BVcDogIzI3Mzc0NjtcXG4gIC0tdGV4dENvbG9yOiAjZWFlYmVjO1xcbiAgLS1hY2NlbnQ6ICMyYWJkNjc7XFxuICAtLWFjY2VudERhcms6ICMxZjhkNGQ7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg1cHggYXV0byA0MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogLjRyZW0gLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5ob3Zlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcbn1cblxubWFpbiBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbm1haW4gLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbm1haW4gLnRhc2sgLnRhc2stbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxubWFpbiAudGFzayAudGFzay1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5tYWluIC50YXNrIC50YXNrLWJ1dHRvbnMgLmR1ZS1kYXRlIHtcbiAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbm1haW4gLnRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5tYWluIC5kdWUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxubWFpbiAuYWRkLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIG9wYWNpdHk6IC43O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubWFpbiAuYWRkLXRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi8qIEFkZCBUYXNrIEZvcm0gKi9cblxubWFpbiAuYWRkLXRhc2stZm9ybSB7XG4gIGJvcmRlcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAuNXJlbTtcbn1cblxubWFpbiAudGFzay1uYW1lLFxuLnRhc2stZGV0YWlscyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbi50YXNrLWRldGFpbHM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC5wcmlvcml0eSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1uYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYWJvdXQge1xuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG59XG5cbi5hZGQtdGFzay1mb3JtIC50YXNrLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogMS44cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG4udGFzay1lZGl0LWRpYWxvZyAuYnV0dG9uLWNvbnRhaW5lciAuY2FuY2VsLFxubWFpbiAuYWRkLXRhc2stZm9ybSAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XG59XG5cbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIC5zdWJtaXQsXG5tYWluIC5hZGQtdGFzay1mb3JtIC5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMC44KTtcbn1cblxuLnRhc2stZWRpdC1kaWFsb2cgLmJ1dHRvbi1jb250YWluZXIgLmNhbmNlbDpob3Zlcixcbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcbn1cblxuLnRhc2stZWRpdC1kaWFsb2cgLmJ1dHRvbi1jb250YWluZXIgLnN1Ym1pdDpob3Zlcixcbm1haW4gLmFkZC10YXNrLWZvcm0gLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcbn1cblxuLmRvbmUtdGFzayB7XG4gIG9wYWNpdHk6IC41O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyogc3R5bGluZyBpbnB1dFtjaGVja2JveF0gKi9cblxuLmN1c3RvbS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jaGVja01hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrLmNoZWNrTWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGYzMjE7XG4gIGJvcmRlci1jb2xvcjogIzQwZjMyNDtcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY2hlY2tNYXJrOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCsuY2hlY2tNYXJrOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jaGVja01hcms6OmFmdGVyIHtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi8qIHRhc2sgcHJpb3JpdHkgY29sb3JzICovXG5cbi5yZWQge1xuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xuICBib3JkZXItbGVmdDogcmVkIHNvbGlkIDFyZW07XG59XG5cbi5ncmVlbiB7XG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IGdyZWVuIHNvbGlkIDFyZW07XG59XG5cbi55ZWxsb3cge1xuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiB5ZWxsb3cgc29saWQgMXJlbTtcbn1cblxuLndoaXRlIHtcbiAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IHdoaXRlIHNvbGlkIDFyZW07XG59XG5cbi8qIC50YXNrLWRldGFpbHMtZGlhbG9nIGJveCAqL1xuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiAzNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cblxuZGlhbG9nIHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xufVxuXG5kaWFsb2dbb3Blbl0ge1xuICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcbn1cblxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XG4gIGFuaW1hdGlvbjogYmFja2Ryb3AtZmFkZS1pbiAwLjdzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4vKiBBbmltYXRpb24ga2V5ZnJhbWVzICovXG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJhY2tkcm9wLWZhZGUtaW4ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMCUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMjUlKTtcbiAgfVxufVxuXG5kaWFsb2cgLmRpYWxvZy1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5kaWFsb2cgLmRpYWxvZy1oZWFkaW5nIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGlhbG9nIC5kaWFsb2ctaGVhZGluZyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjMTU7XG59XG5cbi8qIC50YXNrLWVkaXQtZGlhbG9nICovXG5cbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRhc2stZWRpdC1kaWFsb2cgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZWRpdC1kZXRhaWxzLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVkaXQtZGV0YWlscy1sYWJlbCB0ZXh0YXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDRyZW07XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmVkaXQtdGFzayAuZWRpdC10YXNrLW5hbWV7XG4gIHdpZHRoOiA4NiU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpb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Q1QsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxufVxcblxcbm1haW4gaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxubWFpbiAudGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5tYWluIC50YXNrIC50YXNrLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbm1haW4gLnRhc2sgLnRhc2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxubWFpbiAudGFzayAudGFzay1idXR0b25zIC5kdWUtZGF0ZSB7XFxuICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcXG4gIHBhZGRpbmc6IC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5tYWluIC50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbm1haW4gLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgb3BhY2l0eTogLjc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbm1haW4gLmFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLyogQWRkIFRhc2sgRm9ybSAqL1xcblxcbm1haW4gLmFkZC10YXNrLWZvcm0ge1xcbiAgYm9yZGVyOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSkgc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbm1haW4gLnRhc2stbmFtZSxcXG4udGFzay1kZXRhaWxzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG4udGFzay1kZXRhaWxzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnByaW9yaXR5IHtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWRldGFpbHMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYWJvdXQge1xcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAudGFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYnV0dG9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxuLnRhc2stZWRpdC1kaWFsb2cgLmJ1dHRvbi1jb250YWluZXIgLmNhbmNlbCxcXG5tYWluIC5hZGQtdGFzay1mb3JtIC5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIC5zdWJtaXQsXFxubWFpbiAuYWRkLXRhc2stZm9ybSAuc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xcbn1cXG5cXG4udGFzay1lZGl0LWRpYWxvZyAuYnV0dG9uLWNvbnRhaW5lciAuY2FuY2VsOmhvdmVyLFxcbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMSk7XFxufVxcblxcbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIC5zdWJtaXQ6aG92ZXIsXFxubWFpbiAuYWRkLXRhc2stZm9ybSAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcXG59XFxuXFxuLmRvbmUtdGFzayB7XFxuICBvcGFjaXR5OiAuNTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGlucHV0W2NoZWNrYm94XSAqL1xcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IC5jaGVja01hcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrLmNoZWNrTWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RmMzIxO1xcbiAgYm9yZGVyLWNvbG9yOiAjNDBmMzI0O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IC5jaGVja01hcms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrLmNoZWNrTWFyazo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3ggLmNoZWNrTWFyazo6YWZ0ZXIge1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAycHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi8qIHRhc2sgcHJpb3JpdHkgY29sb3JzICovXFxuXFxuLnJlZCB7XFxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1sZWZ0OiByZWQgc29saWQgMXJlbTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMSk7XFxuICBib3JkZXItbGVmdDogZ3JlZW4gc29saWQgMXJlbTtcXG59XFxuXFxuLnllbGxvdyB7XFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjEpO1xcbiAgYm9yZGVyLWxlZnQ6IHllbGxvdyBzb2xpZCAxcmVtO1xcbn1cXG5cXG4ud2hpdGUge1xcbiAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBib3JkZXItbGVmdDogd2hpdGUgc29saWQgMXJlbTtcXG59XFxuXFxuLyogLnRhc2stZGV0YWlscy1kaWFsb2cgYm94ICovXFxuXFxuZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzUlO1xcbiAgbGVmdDogMzUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC43cyBlYXNlLW91dDtcXG59XFxuXFxuZGlhbG9nW29wZW5dIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjdzIGVhc2Utb3V0O1xcbn1cXG5cXG5kaWFsb2dbb3Blbl06OmJhY2tkcm9wIHtcXG4gIGFuaW1hdGlvbjogYmFja2Ryb3AtZmFkZS1pbiAwLjdzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiBBbmltYXRpb24ga2V5ZnJhbWVzICovXFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJhY2tkcm9wLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMjUlKTtcXG4gIH1cXG59XFxuXFxuZGlhbG9nIC5kaWFsb2ctaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5kaWFsb2cgLmRpYWxvZy1oZWFkaW5nIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGlhbG9nIC5kaWFsb2ctaGVhZGluZyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzE1O1xcbn1cXG5cXG4vKiAudGFzay1lZGl0LWRpYWxvZyAqL1xcblxcbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50YXNrLWVkaXQtZGlhbG9nIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LWRldGFpbHMtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LWRldGFpbHMtbGFiZWwgdGV4dGFyZWEge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5lZGl0LXRhc2sgLmVkaXQtdGFzay1uYW1le1xcbiAgd2lkdGg6IDg2JTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBhbGxUYXNrSWNvbiBmcm9tICcuLi9pY29ucy9pbmJveC5wbmcnXG5pbXBvcnQgdG9kYXlJY29uIGZyb20gJy4uL2ljb25zL3RvZGF5MS5wbmcnXG5pbXBvcnQgdGhpc1dlZWtJY29uIGZyb20gJy4uL2ljb25zL3dlZWsyLnBuZydcbmltcG9ydCB7IHByb2plY3RzLCBwdXNoUHJvamVjdCwgYWxsVGFza3MsIHJlbW92ZVByb2plY3QsIHJlbmFtZVByb2plY3QsIHRvZGF5VGFza3MsIG5leHQ3ZGF5c1Rhc2tzLCBwdXNoVG9BbGxUYXNrcywgcHVzaFRvTmV4dDdEYXlzVGFza3MsIHB1c2hUb1RvZGF5VGFza3MgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBtYWluSGVhZGluZywgcmVuZGVyVGFza0NvbnRhaW5lciwgaGlkZUFkZFRhc2tCdXR0b24sIHRhc2tDb250YWluZXIsIHNob3dBZGRUYXNrQnV0dG9uLCBoaWRlQWRkVGFza0Zvcm0gfSBmcm9tICcuL21haW4nXG5cbi8vIHNlbGVjdG9yc1xuY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpXG5jb25zdCBhbGxUYXNrQnV0dG9uID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFsbC10YXNrLWJ1dHRvbicpXG5jb25zdCB0b2RheUJ1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1idXR0b24nKVxuY29uc3QgdGhpc1dlZWtCdXR0b24gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcudGhpcy13ZWVrLWJ1dHRvbicpXG5cbi8vIGZvcm0gc2VsZWN0b3JzXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5jb25zdCBmb3JtQWRkUHJvamVjdCA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCBmb3JtQ2FuY2VsQnV0dG9uID0gZm9ybUFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtQWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbi8vIFVJXG5cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbnMoKSB7XG5cbiAgYWxsVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9JHthbGxUYXNrSWNvbn0+XG4gICAgPGgzPkFsbCBUYXNrczwvaDM+XG4gIGBcblxuICB0b2RheUJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9JHt0b2RheUljb259PiAgXG4gICAgPGgzPlRvZGF5PC9oMz5cbiAgYFxuXG4gIHRoaXNXZWVrQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz0ke3RoaXNXZWVrSWNvbn0+XG4gICAgPGgzPk5leHQgNyBEYXlzPC9oMz5cbiAgYFxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVDbGFzcyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3AtdGFza3MnKS5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgbWFpbkhlYWRpbmcuaW5uZXJIVE1MID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVySFRNTFxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKCkge1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QgZ3AtdGFza3NcIiBkYXRhLWlkPSR7cHJvamVjdC5pZH0+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbGlzdFwiPjwvaT5cbiAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYnRuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3AtdXBcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBkcm9wLWJ0biBob3ZlclwiPjwvaT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVuYW1lLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJSZW5hbWUgUHJvamVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGhvdmVyXCI+PC9pPiAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICBmb3JtQWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgaW5wdXQgPSBmb3JtQWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gIGZvcm1BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIGlucHV0LmZvY3VzKClcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RCdXR0b24oKSB7XG4gIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEJ1dHRvbigpIHtcbiAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SWQoZWxlbWVudElkKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYgKGVsZW1lbnRJZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgcmVuZGVyVGFza0NvbnRhaW5lcihwcm9qZWN0LnRhc2tzKTtcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckxhc3RUYXNrKCkge1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNvbnRhaW5lciA+IGRpdicpXG4gIHNldEFjdGl2ZUNsYXNzKGFsbFByb2plY3RzW2FsbFByb2plY3RzLmxlbmd0aCAtIDFdKVxuICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRhc2tzKVxuICBzaG93QWRkVGFza0J1dHRvbigpXG59XG5cbi8vIEFsbCBDbGljayBFdmVudHMgRnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGhhbmRsZUFsbFRhc2tCdG4oKSB7XG4gIHB1c2hUb0FsbFRhc2tzKClcbiAgcmVuZGVyVGFza0NvbnRhaW5lcihhbGxUYXNrcylcbiAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RheUJ0bigpIHsgXG4gIHB1c2hUb1RvZGF5VGFza3MoKVxuICByZW5kZXJUYXNrQ29udGFpbmVyKHRvZGF5VGFza3MpXG4gIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgaGlkZUFkZFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGhpc1dlZWtCdG4oKSB7XG4gIHB1c2hUb05leHQ3RGF5c1Rhc2tzKClcbiAgcmVuZGVyVGFza0NvbnRhaW5lcihuZXh0N2RheXNUYXNrcylcbiAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q29udGFpbmVyKGUpIHtcbiAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldDtcblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3AtYnRuJykpIHtcbiAgICBjb25zdCByZW5hbWVGb3JtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgcmVuYW1lRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSByZW5hbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IHJlbmFtZUZvcm0ucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG4gICAgY29uc3QgaW5wdXQgPSByZW5hbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBpbnB1dC5mb2N1cygpXG5cbiAgICByZW5hbWVGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVJlbmFtZUZvcm0pXG4gICAgcmVuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlU3VibWl0QnRuKVxuICAgIGNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbFJlbmFtZUJ0bilcblxuICAgIHJlbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlUmVuYW1lRm9ybSlcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxSZW5hbWVCdG4pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRCdG4oZSkge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGljaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVuYW1lRm9ybShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQuY2xvc2VzdCgnLnByb2plY3QnKVxuICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdC5kYXRhc2V0LmlkXG4gICAgICByZW5hbWVQcm9qZWN0KGlucHV0LnZhbHVlLCBwcm9qZWN0SWQpXG5cbiAgICAgIHJlbmFtZUZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXG4gICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHNldEFjdGl2ZUNsYXNzKGFsbFRhc2tCdXR0b24pXG4gICAgICAgIHJlbmRlclRhc2tDb250YWluZXIoYWxsVGFza3MpXG4gICAgICAgIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgICAgIH1cbiAgICAgIHJlbmRlclByb2plY3RDb250YWluZXIoKVxuICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbFJlbmFtZUJ0bihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJlbmFtZUZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhcmVuYW1lRm9ybS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJlbmFtZUZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvcm0pO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaC1jYW4nKSkge1xuICAgIHJlbW92ZVByb2plY3QoZWxlbWVudC5jbG9zZXN0KCcucHJvamVjdCcpLmRhdGFzZXQuaWQpXG4gICAgc2V0QWN0aXZlQ2xhc3MoYWxsVGFza0J1dHRvbilcbiAgICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKClcbiAgICBoYW5kbGVBbGxUYXNrQnRuKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSB8fCBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdncC10YXNrcycpKSB7XG4gICAgbGV0IGVsZW1lbnRJZDtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncC10YXNrcycpKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgfVxuICAgIGVsZW1lbnRJZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcbiAgICBmaW5kUHJvamVjdElkKGVsZW1lbnRJZClcbiAgICBzaG93QWRkVGFza0J1dHRvbigpXG4gICAgaGlkZUFkZFRhc2tGb3JtKClcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBc2lkZUJ0bihlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3ZlcicpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncC10YXNrcycpIHx8IGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykpIHtcbiAgICBzZXRBY3RpdmVDbGFzcyhlbGVtZW50KVxuICB9XG59XG5cbi8vIGZvcm0gZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFByb2plY3RCdG4oKSB7XG4gIHNob3dQcm9qZWN0Rm9ybSgpXG4gIGhpZGVQcm9qZWN0QnV0dG9uKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkUHJvamVjdEZvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgcHVzaFByb2plY3QocHJvamVjdE5hbWUudmFsdWUpXG4gIHJlbmRlclByb2plY3RDb250YWluZXIoKVxuICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG4gIGhpZGVQcm9qZWN0Rm9ybSgpXG4gIHNob3dQcm9qZWN0QnV0dG9uKClcbiAgcmVuZGVyTGFzdFRhc2soKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDYW5jZWxQcm9qZWN0Rm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBoaWRlUHJvamVjdEZvcm0oKVxuICBzaG93UHJvamVjdEJ1dHRvbigpXG4gIHByb2plY3ROYW1lLnZhbHVlID0gJydcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0QnRuKGUpIHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZm9ybUFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG4gICAgc3VibWl0QnRuLmNsaWNrKClcbiAgfVxufVxuLy8gRXZlbnQgTGlzdGVuZXJzXG5cbmFzaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXNpZGVCdG4pXG5hbGxUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWxsVGFza0J0bilcbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kYXlCdG4pXG50aGlzV2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRoaXNXZWVrQnRuKVxucHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDb250YWluZXIpXG5cbi8vIEFkZCBQcm9qZWN0IEJ1dHRvbiBhbmQgRm9ybSBMaXN0ZW5lcnNcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFByb2plY3RCdG4pXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVBZGRQcm9qZWN0Rm9ybSlcbmZvcm1BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVTdWJtaXRCdG4pO1xuZm9ybUNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbFByb2plY3RGb3JtKVxuXG5mdW5jdGlvbiBydW5Bc2lkZSgpIHtcbiAgaGlkZVByb2plY3RGb3JtKClcbiAgcmVuZGVyUHJvamVjdENvbnRhaW5lcigpXG4gIHJlbmRlckJ1dHRvbnMoKVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0Q29udGFpbmVyLCBydW5Bc2lkZSB9IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyByZW5kZXJUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi9tYWluJztcblxubGV0IHByb2plY3RzO1xuXG5sb2FkRnJvbVN0b3JhZ2UoKVxuXG5mdW5jdGlvbiBsb2FkRnJvbVN0b3JhZ2UoKSB7XG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW1xuICAgIHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWU6ICdFeHBlbnNlIFRyYWNrZXInLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICBuYW1lOiAnRGF0YSBTdHJ1Y3R1cmUnLFxuICAgICAgICAgIGRldGFpbHM6ICdEZXNpZ24gYSBkYXRhIHN0cnVjdHVyZSB0byBzdG9yZSBleHBlbnNlIGRhdGEuIENvbnNpZGVyIGZpZWxkcyBsaWtlIGRhdGUsIGNhdGVnb3J5LCBhbW91bnQsIGRlc2NyaXB0aW9uLCBhbmQgcGF5bWVudCBtZXRob2QuJyxcbiAgICAgICAgICBkYXRlOiBjYWxjdWxhdGVEYXRlKDApLFxuICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgdGFza0RvbmU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICBuYW1lOiAnVXNlciBJbnRlcmZhY2UnLFxuICAgICAgICAgIGRldGFpbHM6ICdDcmVhdGUgYSB1c2VyLWZyaWVuZGx5IGludGVyZmFjZSBmb3IgcmVjb3JkaW5nIGV4cGVuc2VzLCB2aWV3aW5nIHN1bW1hcmllcywgYW5kIGdlbmVyYXRpbmcgcmVwb3J0cy4nLFxuICAgICAgICAgIGRhdGU6IGNhbGN1bGF0ZURhdGUoNCksXG4gICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgIHRhc2tEb25lOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgICAgdGFza3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICBuYW1lOiAnVGFzayBNYW5hZ2VtZW50JyxcbiAgICAgICAgICBkZXRhaWxzOiAnSW1wbGVtZW50IGZlYXR1cmVzIHRvIGFkZCwgZWRpdCwgYW5kIGRlbGV0ZSB0YXNrcy4nLFxuICAgICAgICAgIGRhdGU6IGNhbGN1bGF0ZURhdGUoMCksXG4gICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICBuYW1lOiAnUHJpb3JpdGl6YXRpb24nLFxuICAgICAgICAgIGRldGFpbHM6ICdBbGxvdyB1c2VycyB0byBwcmlvcml0aXplIHRhc2tzIHVzaW5nIGxhYmVscywgdGFncywgb3IgYSBjdXN0b20gc3lzdGVtLicsXG4gICAgICAgICAgZGF0ZTogY2FsY3VsYXRlRGF0ZSg2KSxcbiAgICAgICAgICBwcmlvcml0eTogJ05vIHByaW9yaXR5JyxcbiAgICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbmFtZTogJ1NpbXBsZSBHYW1lJyxcbiAgICAgIHRhc2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgbmFtZTogJ0dhbWUgQ29uY2VwdCcsXG4gICAgICAgICAgZGV0YWlsczogJ0Nob29zZSBhIGdhbWUgY29uY2VwdCAoZS5nLiwgcHV6emxlLCBhcmNhZGUsIHN0cmF0ZWd5KSBhbmQgZGVmaW5lIGl0cyBydWxlcyBhbmQgbWVjaGFuaWNzLicsXG4gICAgICAgICAgZGF0ZTogY2FsY3VsYXRlRGF0ZSgwKSxcbiAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgdGFza0RvbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgbmFtZTogJ0dhbWUgRW5naW5lJyxcbiAgICAgICAgICBkZXRhaWxzOiAnU2VsZWN0IGEgc3VpdGFibGUgZ2FtZSBlbmdpbmUgb3IgZnJhbWV3b3JrIChlLmcuLCBVbml0eSwgR29kb3QpIHRvIGJ1aWxkIHRoZSBnYW1lLicsXG4gICAgICAgICAgZGF0ZTogY2FsY3VsYXRlRGF0ZSgxMCksXG4gICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgIHRhc2tEb25lOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZnVuY3Rpb24gc2F2ZVRvU3RvcmFnZSgpe1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5sZXQgYWxsVGFza3MgPSBbXVxubGV0IHRvZGF5VGFza3MgPSBbXVxubGV0IG5leHQ3ZGF5c1Rhc2tzID0gW11cblxuLy8gRm9yIFVJXG5cbmZ1bmN0aW9uIHB1c2hUb1RvZGF5VGFza3MoKSB7XG4gIHRvZGF5VGFza3MgPSBbXVxuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGlmIChpc0RhdGVUb2RheSh0YXNrLmRhdGUpKSB7XG4gICAgICAgIHRvZGF5VGFza3MucHVzaCh0YXNrKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHB1c2hUb05leHQ3RGF5c1Rhc2tzKCkge1xuICBuZXh0N2RheXNUYXNrcyA9IFtdXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgaWYgKGlzRGF0ZUluTmV4dDdEYXlzKHRhc2suZGF0ZSkpIHtcbiAgICAgICAgbmV4dDdkYXlzVGFza3MucHVzaCh0YXNrKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUluTmV4dDdEYXlzKGRhdGUpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgaW5wdXREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gIGNvbnN0IHNldmVuRGF5c0xhdGVyID0gbmV3IERhdGUodG9kYXkpO1xuICBzZXZlbkRheXNMYXRlci5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDcpO1xuXG4gIHJldHVybiBpbnB1dERhdGUgPiB0b2RheSAmJiBpbnB1dERhdGUgPD0gc2V2ZW5EYXlzTGF0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZVRvZGF5KGlucHV0RGF0ZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5Rm9ybWF0dGVkID0gdG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArXG4gICAgU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpICsgJy0nICtcbiAgICBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICByZXR1cm4gdG9kYXlGb3JtYXR0ZWQgPT09IGlucHV0RGF0ZVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVEYXRlKGRheXMpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgZGF5cyk7XG5cbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gIHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG59XG5cbmZ1bmN0aW9uIHB1c2hUb0FsbFRhc2tzKCkge1xuICBhbGxUYXNrcyA9IFtdXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBhbGxUYXNrcy5wdXNoKHRhc2spKSlcbn1cblxuLy8gRWRpdGluZyBQcm9qZWN0cyBPYmplY3RcblxuZnVuY3Rpb24gcHVzaFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgcHJvamVjdHMucHVzaCh7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgIHRhc2tzOiBbXVxuICB9KVxuICBzYXZlVG9TdG9yYWdlKClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuICBwdXNoVG9BbGxUYXNrcygpXG4gIHB1c2hUb1RvZGF5VGFza3MoKVxuICBwdXNoVG9OZXh0N0RheXNUYXNrcygpXG4gIHNhdmVUb1N0b3JhZ2UoKVxufVxuXG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QobmV3TmFtZSwgcHJvamVjdElkKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZVxuICAgIH1cbiAgfSlcbiAgc2F2ZVRvU3RvcmFnZSgpXG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrKHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrRGV0YWlscywgcHJvamVjdElkKSB7XG4gIGlmICh0YXNrRGV0YWlscyA9PT0gJycpIHtcbiAgICB0YXNrRGV0YWlscyA9ICdObyBkZXRhaWxzJ1xuICB9XG4gIGlmICh0YXNrUHJpb3JpdHkgPT09ICcnKSB7XG4gICAgdGFza1ByaW9yaXR5ID0gJ05vIHByaW9yaXR5J1xuICB9XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBuYW1lOiB0YXNrTmFtZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgIH0pXG4gICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3QudGFza3MpXG4gICAgfVxuICB9KVxuICBwdXNoVG9BbGxUYXNrcygpXG4gIHB1c2hUb1RvZGF5VGFza3MoKVxuICBwdXNoVG9OZXh0N0RheXNUYXNrcygpXG4gIHNhdmVUb1N0b3JhZ2UoKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tJZCkge1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QudGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKVxuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgfVxuICB9KVxuICBwdXNoVG9BbGxUYXNrcygpXG4gIHB1c2hUb1RvZGF5VGFza3MoKVxuICBwdXNoVG9OZXh0N0RheXNUYXNrcygpXG4gIHNhdmVUb1N0b3JhZ2UoKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEb25lVGFzayh0YXNrSWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB7XG4gICAgICAgIHRhc2sudGFza0RvbmUgPSAhdGFzay50YXNrRG9uZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHNhdmVUb1N0b3JhZ2UoKVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRldGFpbHMsIHRhc2tJZCkge1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgICAgdGFzay5uYW1lID0gdGl0bGVcbiAgICAgICAgdGFzay5kYXRlID0gZGF0ZVxuICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGFzay5kZXRhaWxzID0gZGV0YWlsc1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHNhdmVUb1N0b3JhZ2UoKVxufVxuXG4vLyBmaW5kaW5nIGRhdGFcblxuXG5mdW5jdGlvbiBmaW5kVGFzayh0YXNrSWQpIHtcbiAgbGV0IG1hdGNoZWRUYXNrO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgICAgbWF0Y2hlZFRhc2sgPSB0YXNrXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG1hdGNoZWRUYXNrXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3RJZCkge1xuICBsZXQgcmV0dXJuT2JqZWN0XG4gIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICByZXR1cm5PYmplY3QgPSBwcm9qZWN0XG4gICAgfVxuICB9KVxuICByZXR1cm4gcmV0dXJuT2JqZWN0XG59XG5cblxucHVzaFRvQWxsVGFza3MoKVxucHVzaFRvVG9kYXlUYXNrcygpXG5wdXNoVG9OZXh0N0RheXNUYXNrcygpXG5cbmV4cG9ydCB7IHByb2plY3RzLCBhbGxUYXNrcywgcHVzaFByb2plY3QsIHB1c2hUYXNrLCByZW1vdmVQcm9qZWN0LCByZW5hbWVQcm9qZWN0LCBkZWxldGVUYXNrLCBmaW5kUHJvamVjdCwgdG9nZ2xlRG9uZVRhc2ssIGZpbmRUYXNrLCBlZGl0VGFzaywgdG9kYXlUYXNrcywgbmV4dDdkYXlzVGFza3MsIHB1c2hUb05leHQ3RGF5c1Rhc2tzLCBwdXNoVG9Ub2RheVRhc2tzLCBwdXNoVG9BbGxUYXNrcyB9IiwiaW1wb3J0IHsgYWxsVGFza3MsIGRlbGV0ZVRhc2ssIGVkaXRUYXNrLCBmaW5kUHJvamVjdCwgZmluZFRhc2ssIG5leHQ3ZGF5c1Rhc2tzLCBwdXNoVGFzaywgcHVzaFRvQWxsVGFza3MsIHB1c2hUb05leHQ3RGF5c1Rhc2tzLCBwdXNoVG9Ub2RheVRhc2tzLCB0b2RheVRhc2tzLCB0b2dnbGVEb25lVGFzayB9IGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIGgxJyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJylcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5hZGQtdGFzaycpXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmFkZC10YXNrLWZvcm0nKVxuY29uc3QgdGFza05hbWUgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJylcbmNvbnN0IHRhc2tEZXRhaWxzID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpXG5jb25zdCB0YXNrRGF0ZSA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJylcbmNvbnN0IHRhc2tQcmlvcml0eSA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpXG5jb25zdCBjYW5jZWxUYXNrRm9ybSA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuXG4vLyBVSVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrQ29udGFpbmVyKHRhc2tzKSB7XG4gIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2sgJHt0YXNrLnRhc2tEb25lICYmICdkb25lLXRhc2snfSAke3JlbmRlclRhc2tDb2xvcih0YXNrLnByaW9yaXR5KX1cIiBkYXRhLXRhc2staWQ9JHt0YXNrLmlkfT5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiICR7dGFzay50YXNrRG9uZSAmJiAnY2hlY2tlZCd9ID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja01hcmtcIj48L3NwYW4+XG4gICAgICAgIDxwPiR7dGFzay5uYW1lfTwvcD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gaG92ZXJcIj48L2k+XG4gICAgICAgIDxwIGNsYXNzPVwiZHVlLWRhdGVcIj4ke2Zvcm1hdERhdGUodGFzay5kYXRlKX08L3A+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBob3ZlclwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gaG92ZXJcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrQ29sb3IocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICByZXR1cm4gJ3JlZCdcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICByZXR1cm4gJ2dyZWVuJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIHJldHVybiAneWVsbG93J1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnd2hpdGUnXG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUFkZFRhc2tCdXR0b24oKSB7XG4gIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0J1dHRvbigpIHtcbiAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrRm9ybSgpIHtcbiAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICByZXNldFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xuICBjb25zdCBpbnB1dCA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKVxuICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBpbnB1dC5mb2N1cygpXG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza0Zvcm0oKSB7XG4gIHRhc2tOYW1lLnZhbHVlID0gJydcbiAgdGFza0RhdGUudmFsdWUgPSAnJ1xuICB0YXNrRGV0YWlscy52YWx1ZSA9ICcnXG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9ICcnXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoaW5wdXREYXRlKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dERhdGUpO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fSAke21vbnRofWA7XG4gIHJldHVybiBmb3JtYXR0ZWREYXRlXG59XG5cbi8vIGV2ZW50IGhhbmRsZXJzXG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2tCdG4oKSB7XG4gIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgc2hvd0FkZFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkVGFza0Zvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgYWN0aXZlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9IGFjdGl2ZUNsYXNzLmRhdGFzZXQuaWQ7XG5cbiAgcHVzaFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tEZXRhaWxzLnZhbHVlLCBwcm9qZWN0SWQpXG4gIHJlc2V0VGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFbnRlcktleShlKSB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5jbGljaygpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FuY2VsVGFza0Zvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgc2hvd0FkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxuICByZXNldFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NvbnRhaW5lcihlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldFxuICBjb25zdCB0YXNrSWQgPSBlbGVtZW50LmNsb3Nlc3QoJy50YXNrJykuZGF0YXNldC50YXNrSWRcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuXG4gIGZ1bmN0aW9uIHJlbmRlckFjdGl2ZUNvbnRhaW5lcihhY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbC10YXNrLWJ1dHRvbicpKSB7XG4gICAgICAgIHB1c2hUb0FsbFRhc2tzKClcbiAgICAgICAgcmVuZGVyVGFza0NvbnRhaW5lcihhbGxUYXNrcylcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZGF5LWJ1dHRvbicpKSB7XG4gICAgICAgIHB1c2hUb1RvZGF5VGFza3MoKVxuICAgICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHRvZGF5VGFza3MpXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aGlzLXdlZWstYnV0dG9uJykpIHtcbiAgICAgICAgcHVzaFRvTmV4dDdEYXlzVGFza3MoKVxuICAgICAgICByZW5kZXJUYXNrQ29udGFpbmVyKG5leHQ3ZGF5c1Rhc2tzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBhY3RpdmVFbGVtZW50LmRhdGFzZXQuaWRcbiAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0SWQpXG4gICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3QudGFza3MpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRGlhbG9nQm94KHRhc2spIHtcbiAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy1kaWFsb2cnKTtcblxuICAgIGlmICghZGlhbG9nKSB7XG4gICAgICBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgIGRpYWxvZy5jbGFzc05hbWUgPSAndGFzay1kZXRhaWxzLWRpYWxvZyc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgfVxuICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctaGVhZGluZ1wiPlxuICAgIDxoMj4ke3Rhc2submFtZX08L2gyPlxuICAgICAgPGZvcm0gbWV0aG9kPVwiZGlhbG9nXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhvdmVyXCI+WDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgPGJyPlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWRldGFpbHNcIj5cbiAgICA8cD48Yj5EZXRhaWxzOjwvYj4gJHt0YXNrLmRldGFpbHN9IDwvcD48YnI+XG4gICAgPHA+PGI+UHJpb3JpdHk6PC9iPiAgJHt0YXNrLnByaW9yaXR5fSA8L3A+PGJyPlxuICAgIDxwPjxiPkR1ZS1EYXRlOjwvYj4gICR7dGFzay5kYXRlfSA8L3A+XG4gIDwvZGl2PiAgICAgXG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckVkaXRUYXNrRm9ybSh0YXNrKSB7XG4gICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZGlhbG9nJyk7XG4gICAgaWYgKCFkaWFsb2cpIHtcbiAgICAgIGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgZGlhbG9nLmNsYXNzTmFtZSA9ICd0YXNrLWVkaXQtZGlhbG9nJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICB9XG5cbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctaGVhZGluZ1wiPlxuICAgICAgPGgyPkVkaXQgVGFzayBGb3JtPC9oMj5cbiAgICAgIDxmb3JtIG1ldGhvZD1cImRpYWxvZ1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaG92ZXJcIj5YPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxmb3JtIGNsYXNzPVwiZWRpdC10YXNrXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICBUaXRsZTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJlZGl0LXRhc2stbmFtZVwiIHBsYWNlaG9sZGVyPVwiVGFzayB0aXRsZVwiIHZhbHVlPVwiJHt0YXNrLm5hbWV9XCI+XG4gICAgICA8L2xhYmVsPjxicj48YnI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJlZGl0LWRldGFpbHMtbGFiZWxcIj5cbiAgICAgIERldGFpbHM6XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImVkaXQtZGV0YWlsc1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXRhaWxzXCI+JHt0YXNrLmRldGFpbHN9PC90ZXh0YXJlYT5cbiAgICAgIDwvbGFiZWw+XG4gICAgICAgPGxhYmVsPjxicj5cbiAgICAgICAgUHJpb3JpdHk6XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJObyBwcmlvcml0eVwiICR7dGFzay5wcmlvcml0eSA9PT0gXCJObyBwcmlvcml0eVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0+Tm8gUHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHt0YXNrLnByaW9yaXR5ID09PSBcImxvd1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0+TG93IDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAke3Rhc2sucHJpb3JpdHkgPT09IFwibWVkaXVtXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifT5NZWRpdW0gPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0+SGlnaDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+PGJyPjxicj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImVkaXQtZGF0ZS1sYWJlbFwiPlxuICAgICAgICBEYXRlOlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImVkaXQtZGF0ZVwiIHZhbHVlPVwiJHt0YXNrLmRhdGV9XCI+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICBgXG4gIH1cblxuXG4gIC8vIGRlbGV0ZSB0YXNrXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtY2FuJykpIHtcbiAgICBkZWxldGVUYXNrKHRhc2tJZClcbiAgICByZW5kZXJBY3RpdmVDb250YWluZXIoYWN0aXZlRWxlbWVudClcbiAgfVxuXG4gIC8vIGNoZWNrYm94XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSkge1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgIHRvZ2dsZURvbmVUYXNrKHRhc2tJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlRG9uZVRhc2sodGFza0lkKVxuICAgIH1cbiAgICByZW5kZXJBY3RpdmVDb250YWluZXIoYWN0aXZlRWxlbWVudClcbiAgfVxuXG4gIC8vIEluZm9cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaXJjbGUtaW5mbycpKSB7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBmaW5kVGFzayh0YXNrSWQpXG4gICAgcmVuZGVyRGlhbG9nQm94KHRhc2tEZXRhaWxzKVxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMtZGlhbG9nJyk7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG5cbiAgLy8gRWRpdC1UYXNrLUJ1dHRvblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXBlbi10by1zcXVhcmUnKSkge1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZmluZFRhc2sodGFza0lkKVxuICAgIHJlbmRlckVkaXRUYXNrRm9ybSh0YXNrRGV0YWlscylcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWRpYWxvZycpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcblxuICAgIGNvbnN0IGVkaXRGb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2snKVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3VibWl0QnRuKVxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRCdG4oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgICAgY29uc3QgdGV4dGFyZWFWYWx1ZSA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWVcbiAgICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gZWRpdEZvcm0ucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWVcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKS52YWx1ZVxuXG4gICAgICBlZGl0VGFzayhpbnB1dFZhbHVlLCBkYXRlVmFsdWUsIHNlbGVjdFZhbHVlLCB0ZXh0YXJlYVZhbHVlLCB0YXNrRGV0YWlscy5pZClcbiAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICByZW5kZXJBY3RpdmVDb250YWluZXIoYWN0aXZlRWxlbWVudClcbiAgICB9XG4gIH1cbn1cblxuLy8gVUkgaW50ZXJhY3Rpb25zIEZvcm1cblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRhc2tCdG4pXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVBZGRUYXNrRm9ybSlcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFbnRlcktleSlcbmNhbmNlbFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsVGFza0Zvcm0pXG50YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGFza0NvbnRhaW5lcilcblxuXG5mdW5jdGlvbiBydW5NYWluKCkge1xuICByZW5kZXJUYXNrQ29udGFpbmVyKGFsbFRhc2tzKVxuICBoaWRlQWRkVGFza0J1dHRvbigpXG4gIGhpZGVBZGRUYXNrRm9ybSgpXG59XG5cbmV4cG9ydCB7IG1haW5IZWFkaW5nLCByZW5kZXJUYXNrQ29udGFpbmVyLCBoaWRlQWRkVGFza0J1dHRvbiwgdGFza0NvbnRhaW5lciwgc2hvd0FkZFRhc2tCdXR0b24sIGhpZGVBZGRUYXNrRm9ybSwgcnVuTWFpbiB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8ganMgaW1wb3J0XG5pbXBvcnQgeyBydW5Bc2lkZSB9IGZyb20gXCIuL3NjcmlwdHMvYXNpZGVcIlxuaW1wb3J0IHsgcnVuTWFpbiB9IGZyb20gXCIuL3NjcmlwdHMvbWFpblwiXG5cbi8vIGNzcyBpbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCAnLi9zdHlsZXMvYXNpZGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbnMvY2hlY2tfbG9nby5wbmcnXG5cbmZ1bmN0aW9uIHdlYlBhZ2VUaXRsZSgpIHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICBsaW5rLnJlbCA9ICdpY29uJztcbiAgbGluay5ocmVmID0gaWNvbjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxufVxuXG53ZWJQYWdlVGl0bGUoKVxuXG5ydW5NYWluKClcbnJ1bkFzaWRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=