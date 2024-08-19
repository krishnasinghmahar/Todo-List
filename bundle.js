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
}`, "",{"version":3,"sources":["webpack://./src/styles/aside.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;AAC/B;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,SAAS;EACT,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,sCAAsC;EACtC,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;EACT,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,SAAS;;AAET;EACE,sBAAsB;EACtB,qDAAqD;EACrD,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,gBAAgB;;AAEhB;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,+CAA+C;EAC/C,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":[":root {\n  --hover: rgba(0, 255, 0, 0.1);\n}\n\naside {\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  padding: 2rem;\n}\n\naside img {\n  width: 30px;\n}\n\naside .button-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n\naside .button-container div {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  padding: .3rem;\n  border-radius: 5px;\n}\n\naside .button-container div:hover {\n  background-color: var(--hover);\n}\n\naside h2 {\n  margin-bottom: 1rem;\n}\n\naside .project-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: .5rem;\n}\n\naside .project-name {\n  flex: 1;\n}\n\naside .project-container .project {\n  display: flex;\n  gap: 1rem;\n  height: 2.4rem;\n  align-items: center;\n  padding: 0.4rem;\n  border-radius: 3px;\n  padding-left: .5rem;\n}\n\naside .project-container .project:hover {\n  cursor: pointer;\n  background-color: var(--hover);\n}\n\n.active {\n  background-color: rgba(0, 255, 0, 0.2);\n  border-left: rgba(0, 255, 0) solid 5px;\n}\n\naside .add-project {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: .5rem;\n  cursor: pointer;\n  color: var(--textColor);\n  opacity: .7;\n  font-size: 1.1rem;\n  background-color: transparent;\n  border: 0;\n  padding: .5rem 1.5rem;\n  border-radius: 5px;\n}\n\naside .add-project:hover {\n  background-color: var(--hover);\n}\n\n.project .hover {\n  display: none;\n}\n\n.project:hover .hover {\n  display: block;\n}\n\n.project .project-btn {\n  display: flex;\n}\n\n/* form */\n\naside .add-project-form {\n  border: grey 2px ridge;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  padding: .3rem;\n}\n\naside .add-project-form input {\n  width: 100%;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding-left: 5px;\n  padding: .2rem;\n  font-size: 1.2rem;\n  border: grey 1px solid;\n  margin-bottom: .5rem;\n}\n\naside .add-project-form input:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\naside .add-project-form input:focus {\n  outline: none;\n}\n\naside .add-project-form button {\n  width: 47.8%;\n  height: 1.8rem;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--textColor);\n}\n\naside .add-project-form .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\naside .add-project-form .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\naside .add-project-form .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\naside .add-project-form .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}\n\n/* rename form */\n\n.project {\n  position: relative;\n  display: inline-block;\n}\n\n.drop-up .rename-form {\n  display: none;\n  position: absolute;\n  padding: .2rem;\n  bottom: 35px;\n  right: -5rem;\n  background-color: #f1f1f1;\n  min-width: 200px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.drop-up .show {\n  display: block;\n}\n\n.rename-form input {\n  width: 100%;\n  font-size: 1rem;\n}\n\n.rename-form .btn-container{\n  width: 100%;\n}\n\n.rename-form .btn-container button {\n  width: 47.5%;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.rename-form .btn-container .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\n.rename-form .btn-container .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\n.rename-form .btn-container .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\n.rename-form .btn-container .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}"],"sourceRoot":""}]);
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
  border: green solid 1px;
  border-radius: .5rem;
  padding: .5rem;
  font-size: 1.2rem;
  border-left: green solid 1rem;
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
textarea {
  border: none;
  background-color: transparent;
  color: var(--textColor);
}

input:focus,
select:focus,
textarea:focus {
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

main .add-task-form .cancel {
  background-color: rgba(190, 0, 0, 0.8);
}

main .add-task-form .submit {
  background-color: rgba(1, 198, 1, 0.8);
}

main .add-task-form .cancel:hover {
  background-color: rgba(190, 0, 0, 1);
}

main .add-task-form .submit:hover {
  background-color: rgba(1, 198, 1, 1);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,oBAAoB;EACpB,cAAc;EACd,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;EACT,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA,kBAAkB;;AAElB;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,cAAc;AAChB;;AAEA;;EAEE,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["main {\n  background-color: var(--bgColor2);\n  color: var(--textColor);\n  padding: 2rem 4rem;\n}\n\nmain h1 {\n  background-color: var(--accentDark);\n  padding: 1rem;\n  border-radius: 5px;\n  margin-bottom: 2rem;\n}\n\nmain .task {\n  display: flex;\n  justify-content: space-between;\n  border: green solid 1px;\n  border-radius: .5rem;\n  padding: .5rem;\n  font-size: 1.2rem;\n  border-left: green solid 1rem;\n}\n\nmain .task .task-name {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nmain .task .task-buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nmain .task .task-buttons .due-date {\n  border: 1px white solid;\n  padding: .2rem;\n  border-radius: 5px;\n}\n\nmain .task-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\nmain .due-date {\n  font-size: 1rem;\n}\n\nmain .add-task {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  cursor: pointer;\n  color: var(--textColor);\n  opacity: .7;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: 0;\n  padding: .5rem;\n  border-radius: 5px;\n}\n\nmain .add-task:hover {\n  background-color: var(--hover);\n}\n\n/* Add Task Form */\n\nmain .add-task-form {\n  border: rgba(128, 128, 128, 0.5) solid 1px;\n  border-radius: 5px;\n  padding: .5rem;\n}\n\nmain .task-name,\ntextarea {\n  border: none;\n  background-color: transparent;\n  color: var(--textColor);\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\n\nmain .add-task-form .priority {\n  padding: 1px;\n}\n\nmain .add-task-form .task-name {\n  width: 100%;\n  font-weight: bold;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: none;\n}\n\nmain .add-task-form .task-details {\n  width: 100%;\n}\n\nmain .add-task-form .task-about {\n  padding-bottom: .5rem;\n}\n\n.add-task-form .task-buttons {\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n  padding-right: 1rem;\n}\n\nmain .add-task-form .task-buttons button {\n  width: 6rem;\n  height: 1.8rem;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-radius: 3px;\n  color: var(--textColor);\n}\n\nmain .add-task-form .cancel {\n  background-color: rgba(190, 0, 0, 0.8);\n}\n\nmain .add-task-form .submit {\n  background-color: rgba(1, 198, 1, 0.8);\n}\n\nmain .add-task-form .cancel:hover {\n  background-color: rgba(190, 0, 0, 1);\n}\n\nmain .add-task-form .submit:hover {\n  background-color: rgba(1, 198, 1, 1);\n}"],"sourceRoot":""}]);
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
    <h3>This week</h3>
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
  (0,_main__WEBPACK_IMPORTED_MODULE_4__.renderTaskContainer)(_data__WEBPACK_IMPORTED_MODULE_3__.allTasks)
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
}

function handleTodayBtn() {
  _main__WEBPACK_IMPORTED_MODULE_4__.taskContainer.innerHTML = ''
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskButton)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_4__.hideAddTaskForm)()
}

function handleThisWeekBtn() {
  _main__WEBPACK_IMPORTED_MODULE_4__.taskContainer.innerHTML = ''
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
/* harmony export */   findProject: () => (/* binding */ findProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   pushProject: () => (/* binding */ pushProject),
/* harmony export */   pushTask: () => (/* binding */ pushTask),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   renameProject: () => (/* binding */ renameProject)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");



const projects = [
  {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: 'Project 1',
    tasks: [
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 1',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 2',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  },
  {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: 'Project 2',
    tasks: [
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 3',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 4',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  },
  {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: 'Project 3',
    tasks: [
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 5',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        name: 'Task 6',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  }
]

let allTasks = []

function pushToAllTasks() {
  allTasks = []
  projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))
}

function pushProject(projectName) {
  projects.push({
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: projectName,
    tasks: []
  })
}

function removeProject(projectId) {
  const projectIndex = projects.findIndex(project => project.id === projectId);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
  pushToAllTasks()
}

function pushTask(taskName, taskDate, taskPriority, taskDetails, projectId) {
  if (taskDate === '') {
    taskDate = 'no date'
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
}

function findProject(projectId) {
  let returnObject
  projects.map(project => {
    if (project.id === projectId) {
      returnObject =  project
    }
  })
  return returnObject
}

function renameProject(newName, projectId) {
  projects.forEach(project => {
    if (project.id === projectId) {
      project.name = newName
    }
  })
}

function deleteTask(taskId) {
  projects.forEach(project => {
    const taskIndex = project.tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1)
    }
  })
  pushToAllTasks()
}

pushToAllTasks()



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
    <div class="task" data-task-id=${task.id}>
      <div class="task-name">
        <input type="checkbox">
        <p>${task.name}</p>
      </div>
      <div class="task-buttons">
        <i class="fa-solid fa-circle-info hover"></i>
        <p class="due-date">${task.date}</p>
        <i class="fa-solid fa-pen-to-square hover"></i>
        <i class="fa-solid fa-trash-can hover"></i>
      </div>
    </div>
  `
  })
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

  // delete task
  if (element.classList.contains('fa-trash-can')) {
    const activeElement = document.querySelector('.active')
    const taskId = element.closest('.task').dataset.taskId

    ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId)

    if (activeElement.dataset.id === undefined) {
      if (activeElement.classList.contains('all-task-button')) {
        renderTaskContainer(_data__WEBPACK_IMPORTED_MODULE_0__.allTasks)
      }
    } else {
      const projectId = activeElement.dataset.id
      const project = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findProject)(projectId)
      renderTaskContainer(project.tasks)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFP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L2FzaWRlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9hc2lkZS5jc3M/OTEyZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0taG92ZXI6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xufVxuXG5hc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmFzaWRlIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG5hc2lkZSAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmFzaWRlIC5idXR0b24tY29udGFpbmVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5hc2lkZSAuYnV0dG9uLWNvbnRhaW5lciBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbmFzaWRlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuYXNpZGUgLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbmFzaWRlIC5wcm9qZWN0LW5hbWUge1xuICBmbGV4OiAxO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGhlaWdodDogMi40cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbn1cblxuYXNpZGUgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMCwgMjU1LCAwKSBzb2xpZCA1cHg7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBvcGFjaXR5OiAuNztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5wcm9qZWN0IC5ob3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0OmhvdmVyIC5ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvamVjdCAucHJvamVjdC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBmb3JtICovXG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIHtcbiAgYm9yZGVyOiBncmV5IDJweCByaWRnZTtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XG4gIHBhZGRpbmc6IC4zcmVtO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiBncmV5IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiA0Ny44JTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMC44KTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLmNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcbn1cblxuLyogcmVuYW1lIGZvcm0gKi9cblxuLnByb2plY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3AtdXAgLnJlbmFtZS1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAuMnJlbTtcbiAgYm90dG9tOiAzNXB4O1xuICByaWdodDogLTVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcC11cCAuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVuYW1lLWZvcm0gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDQ3LjUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAwLjgpO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcbn1cblxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIC5zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FzaWRlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLHNCQUFzQjtFQUN0QixxREFBcUQ7RUFDckQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ob3ZlcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IxKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuYXNpZGUgaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5hc2lkZSAuYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmFzaWRlIC5idXR0b24tY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5hc2lkZSAuYnV0dG9uLWNvbnRhaW5lciBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG5hc2lkZSBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuYXNpZGUgLnByb2plY3QtbmFtZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmctbGVmdDogLjVyZW07XFxufVxcblxcbmFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMik7XFxuICBib3JkZXItbGVmdDogcmdiYSgwLCAyNTUsIDApIHNvbGlkIDVweDtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBvcGFjaXR5OiAuNztcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0IC5ob3ZlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAuaG92ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBmb3JtICovXFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiBncmV5IDJweCByaWRnZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcbiAgcGFkZGluZzogLjNyZW07XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nOiAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBncmV5IDFweCBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSBpbnB1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogNDcuOCU7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMC44KTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMSk7XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xcbn1cXG5cXG4vKiByZW5hbWUgZm9ybSAqL1xcblxcbi5wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRyb3AtdXAgLnJlbmFtZS1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAuMnJlbTtcXG4gIGJvdHRvbTogMzVweDtcXG4gIHJpZ2h0OiAtNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcC11cCAuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJlbmFtZS1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXJ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNDcuNSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMC44KTtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIC5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmdDb2xvcjE6ICMxNTIwMmI7XG4gIC0tYmdDb2xvcjI6ICMxOTI3MzQ7XG4gIC0tYmdDb2xvcjM6ICMyMjMwM2M7XG4gIC0tYmdDb2xvclBvcFVwOiAjMjczNzQ2O1xuICAtLXRleHRDb2xvcjogI2VhZWJlYztcbiAgLS1hY2NlbnQ6ICMyYWJkNjc7XG4gIC0tYWNjZW50RGFyazogIzFmOGQ0ZDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg1cHggYXV0byA0MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XG59XG5cbmhlYWRlciBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IzKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgcGFkZGluZzogLjVyZW07XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogLjRyZW0gLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmdDb2xvcjE6ICMxNTIwMmI7XFxuICAtLWJnQ29sb3IyOiAjMTkyNzM0O1xcbiAgLS1iZ0NvbG9yMzogIzIyMzAzYztcXG4gIC0tYmdDb2xvclBvcFVwOiAjMjczNzQ2O1xcbiAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XFxuICAtLWFjY2VudDogIzJhYmQ2NztcXG4gIC0tYWNjZW50RGFyazogIzFmOGQ0ZDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODVweCBhdXRvIDQwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAuNHJlbSAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhvdmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xufVxuXG5tYWluIGgxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubWFpbiAudGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1sZWZ0OiBncmVlbiBzb2xpZCAxcmVtO1xufVxuXG5tYWluIC50YXNrIC50YXNrLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbm1haW4gLnRhc2sgLnRhc2stYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxubWFpbiAudGFzayAudGFzay1idXR0b25zIC5kdWUtZGF0ZSB7XG4gIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xuICBwYWRkaW5nOiAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5tYWluIC50YXNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubWFpbiAuZHVlLWRhdGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbm1haW4gLmFkZC10YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBvcGFjaXR5OiAuNztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbm1haW4gLmFkZC10YXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4vKiBBZGQgVGFzayBGb3JtICovXG5cbm1haW4gLmFkZC10YXNrLWZvcm0ge1xuICBib3JkZXI6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogLjVyZW07XG59XG5cbm1haW4gLnRhc2stbmFtZSxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC5wcmlvcml0eSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1uYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYWJvdXQge1xuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG59XG5cbi5hZGQtdGFzay1mb3JtIC50YXNrLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogMS44cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAuc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IyKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudERhcmspO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbm1haW4gLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLWxlZnQ6IGdyZWVuIHNvbGlkIDFyZW07XFxufVxcblxcbm1haW4gLnRhc2sgLnRhc2stbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxubWFpbiAudGFzayAudGFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5tYWluIC50YXNrIC50YXNrLWJ1dHRvbnMgLmR1ZS1kYXRlIHtcXG4gIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbiAgcGFkZGluZzogLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbm1haW4gLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubWFpbiAuZHVlLWRhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBvcGFjaXR5OiAuNztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4vKiBBZGQgVGFzayBGb3JtICovXFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSB7XFxuICBib3JkZXI6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KSBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxubWFpbiAudGFzay1uYW1lLFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC5wcmlvcml0eSB7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stbmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1kZXRhaWxzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWFib3V0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0gLnRhc2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSAuc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC5jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc2lkZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc2lkZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IGFsbFRhc2tJY29uIGZyb20gJy4uL2ljb25zL2luYm94LnBuZydcbmltcG9ydCB0b2RheUljb24gZnJvbSAnLi4vaWNvbnMvdG9kYXkxLnBuZydcbmltcG9ydCB0aGlzV2Vla0ljb24gZnJvbSAnLi4vaWNvbnMvd2VlazIucG5nJ1xuaW1wb3J0IHsgcHJvamVjdHMsIHB1c2hQcm9qZWN0LCBhbGxUYXNrcywgcmVtb3ZlUHJvamVjdCwgcmVuYW1lUHJvamVjdCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IG1haW5IZWFkaW5nLCByZW5kZXJUYXNrQ29udGFpbmVyLCBoaWRlQWRkVGFza0J1dHRvbiwgdGFza0NvbnRhaW5lciwgc2hvd0FkZFRhc2tCdXR0b24sIGhpZGVBZGRUYXNrRm9ybSB9IGZyb20gJy4vbWFpbidcblxuLy8gc2VsZWN0b3JzXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gYXNpZGUucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJylcbmNvbnN0IGFsbFRhc2tCdXR0b24gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2stYnV0dG9uJylcbmNvbnN0IHRvZGF5QnV0dG9uID0gYXNpZGUucXVlcnlTZWxlY3RvcignLnRvZGF5LWJ1dHRvbicpXG5jb25zdCB0aGlzV2Vla0J1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy50aGlzLXdlZWstYnV0dG9uJylcblxuLy8gZm9ybSBzZWxlY3RvcnNcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGZvcm1DYW5jZWxCdXR0b24gPSBmb3JtQWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG5jb25zdCBwcm9qZWN0TmFtZSA9IGZvcm1BZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuLy8gVUlcblxuZnVuY3Rpb24gcmVuZGVyQnV0dG9ucygpIHtcblxuICBhbGxUYXNrQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz0ke2FsbFRhc2tJY29ufT5cbiAgICA8aDM+QWxsIFRhc2tzPC9oMz5cbiAgYFxuXG4gIHRvZGF5QnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz0ke3RvZGF5SWNvbn0+ICBcbiAgICA8aDM+VG9kYXk8L2gzPlxuICBgXG5cbiAgdGhpc1dlZWtCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPSR7dGhpc1dlZWtJY29ufT5cbiAgICA8aDM+VGhpcyB3ZWVrPC9oMz5cbiAgYFxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVDbGFzcyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3AtdGFza3MnKS5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgbWFpbkhlYWRpbmcuaW5uZXJIVE1MID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVySFRNTFxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKCkge1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QgZ3AtdGFza3NcIiBkYXRhLWlkPSR7cHJvamVjdC5pZH0+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbGlzdFwiPjwvaT5cbiAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYnRuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3AtdXBcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBkcm9wLWJ0biBob3ZlclwiPjwvaT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVuYW1lLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJSZW5hbWUgUHJvamVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGhvdmVyXCI+PC9pPiAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICBmb3JtQWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgaW5wdXQgPSBmb3JtQWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gIGZvcm1BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIGlucHV0LmZvY3VzKClcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RCdXR0b24oKSB7XG4gIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEJ1dHRvbigpIHtcbiAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SWQoZWxlbWVudElkKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYgKGVsZW1lbnRJZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgcmVuZGVyVGFza0NvbnRhaW5lcihwcm9qZWN0LnRhc2tzKTtcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckxhc3RUYXNrKCkge1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNvbnRhaW5lciA+IGRpdicpXG4gIHNldEFjdGl2ZUNsYXNzKGFsbFByb2plY3RzW2FsbFByb2plY3RzLmxlbmd0aCAtIDFdKVxuICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRhc2tzKVxuICBzaG93QWRkVGFza0J1dHRvbigpXG59XG5cbi8vIEFsbCBDbGljayBFdmVudHMgRnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGhhbmRsZUFsbFRhc2tCdG4oKSB7XG4gIHJlbmRlclRhc2tDb250YWluZXIoYWxsVGFza3MpXG4gIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgaGlkZUFkZFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kYXlCdG4oKSB7XG4gIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaGlzV2Vla0J0bigpIHtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICBoaWRlQWRkVGFza0J1dHRvbigpXG4gIGhpZGVBZGRUYXNrRm9ybSgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDb250YWluZXIoZSkge1xuICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZHJvcC1idG4nKSkge1xuICAgIGNvbnN0IHJlbmFtZUZvcm0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICByZW5hbWVGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IHJlbmFtZUZvcm0ucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gcmVuYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICBjb25zdCBpbnB1dCA9IHJlbmFtZUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGlucHV0LmZvY3VzKClcblxuICAgIHJlbmFtZUZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlUmVuYW1lRm9ybSlcbiAgICByZW5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVTdWJtaXRCdG4pXG4gICAgY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsUmVuYW1lQnRuKVxuXG4gICAgcmVuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVSZW5hbWVGb3JtKVxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbFJlbmFtZUJ0bilcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEJ0bihlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3VibWl0QnRuLmNsaWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZW5hbWVGb3JtKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudC5jbG9zZXN0KCcucHJvamVjdCcpXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0LmRhdGFzZXQuaWRcbiAgICAgIHJlbmFtZVByb2plY3QoaW5wdXQudmFsdWUsIHByb2plY3RJZClcblxuICAgICAgcmVuYW1lRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cbiAgICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgc2V0QWN0aXZlQ2xhc3MoYWxsVGFza0J1dHRvbilcbiAgICAgICAgcmVuZGVyVGFza0NvbnRhaW5lcihhbGxUYXNrcylcbiAgICAgICAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICAgICAgfVxuICAgICAgcmVuZGVyUHJvamVjdENvbnRhaW5lcigpXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsUmVuYW1lQnRuKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmVuYW1lRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUZvcm0gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFyZW5hbWVGb3JtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmVuYW1lRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvcm0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWNhbicpKSB7XG4gICAgcmVtb3ZlUHJvamVjdChlbGVtZW50LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pZClcbiAgICBzZXRBY3RpdmVDbGFzcyhhbGxUYXNrQnV0dG9uKVxuICAgIHJlbmRlclByb2plY3RDb250YWluZXIoKVxuICAgIGhhbmRsZUFsbFRhc2tCdG4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdncC10YXNrcycpIHx8IGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykpIHtcbiAgICBsZXQgZWxlbWVudElkO1xuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG4gICAgZWxlbWVudElkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuICAgIGZpbmRQcm9qZWN0SWQoZWxlbWVudElkKVxuICAgIHNob3dBZGRUYXNrQnV0dG9uKClcbiAgICBoaWRlQWRkVGFza0Zvcm0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFzaWRlQnRuKGUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyJykpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykgfHwgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSkge1xuICAgIHNldEFjdGl2ZUNsYXNzKGVsZW1lbnQpXG4gIH1cbn1cblxuLy8gZm9ybSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gaGFuZGxlQWRkUHJvamVjdEJ0bigpIHtcbiAgc2hvd1Byb2plY3RGb3JtKClcbiAgaGlkZVByb2plY3RCdXR0b24oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRQcm9qZWN0Rm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBwdXNoUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSlcbiAgcmVuZGVyUHJvamVjdENvbnRhaW5lcigpXG4gIHByb2plY3ROYW1lLnZhbHVlID0gJydcbiAgaGlkZVByb2plY3RGb3JtKClcbiAgc2hvd1Byb2plY3RCdXR0b24oKVxuICByZW5kZXJMYXN0VGFzaygpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhbmNlbFByb2plY3RGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGhpZGVQcm9qZWN0Rm9ybSgpXG4gIHNob3dQcm9qZWN0QnV0dG9uKClcbiAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXRCdG4oZSkge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtQWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbiAgICBzdWJtaXRCdG4uY2xpY2soKVxuICB9XG59XG4vLyBFdmVudCBMaXN0ZW5lcnNcblxuYXNpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBc2lkZUJ0bilcbmFsbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBbGxUYXNrQnRuKVxudG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RheUJ0bilcbnRoaXNXZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGhpc1dlZWtCdG4pXG5wcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdENvbnRhaW5lcilcblxuLy8gQWRkIFByb2plY3QgQnV0dG9uIGFuZCBGb3JtIExpc3RlbmVyc1xuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdEJ0bilcbmZvcm1BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUFkZFByb2plY3RGb3JtKVxuZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVN1Ym1pdEJ0bik7XG5mb3JtQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsUHJvamVjdEZvcm0pXG5cbmZ1bmN0aW9uIHJ1bkFzaWRlKCkge1xuICBoaWRlUHJvamVjdEZvcm0oKVxuICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKClcbiAgcmVuZGVyQnV0dG9ucygpXG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RDb250YWluZXIsIHJ1bkFzaWRlIH0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHJlbmRlclRhc2tDb250YWluZXIgfSBmcm9tICcuL21haW4nO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBuYW1lOiAnUHJvamVjdCAxJyxcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIG5hbWU6ICdUYXNrIDEnLFxuICAgICAgICBkZXRhaWxzOiAnc29tZXRoaW5nLi4uJyxcbiAgICAgICAgZGF0ZTogJzMwIGp1bHknLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHRhc2tEb25lOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBuYW1lOiAnVGFzayAyJyxcbiAgICAgICAgZGV0YWlsczogJ3NvbWV0aGluZy4uLicsXG4gICAgICAgIGRhdGU6ICczMCBqdWx5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgbmFtZTogJ1Byb2plY3QgMicsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBuYW1lOiAnVGFzayAzJyxcbiAgICAgICAgZGV0YWlsczogJ3NvbWV0aGluZy4uLicsXG4gICAgICAgIGRhdGU6ICczMCBqdWx5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgbmFtZTogJ1Rhc2sgNCcsXG4gICAgICAgIGRldGFpbHM6ICdzb21ldGhpbmcuLi4nLFxuICAgICAgICBkYXRlOiAnMzAganVseScsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgdGFza0RvbmU6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6ICdQcm9qZWN0IDMnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgbmFtZTogJ1Rhc2sgNScsXG4gICAgICAgIGRldGFpbHM6ICdzb21ldGhpbmcuLi4nLFxuICAgICAgICBkYXRlOiAnMzAganVseScsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgdGFza0RvbmU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIG5hbWU6ICdUYXNrIDYnLFxuICAgICAgICBkZXRhaWxzOiAnc29tZXRoaW5nLi4uJyxcbiAgICAgICAgZGF0ZTogJzMwIGp1bHknLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHRhc2tEb25lOiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5sZXQgYWxsVGFza3MgPSBbXVxuXG5mdW5jdGlvbiBwdXNoVG9BbGxUYXNrcygpIHtcbiAgYWxsVGFza3MgPSBbXVxuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gYWxsVGFza3MucHVzaCh0YXNrKSkpXG59XG5cbmZ1bmN0aW9uIHB1c2hQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIHByb2plY3RzLnB1c2goe1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBuYW1lOiBwcm9qZWN0TmFtZSxcbiAgICB0YXNrczogW11cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuICBwdXNoVG9BbGxUYXNrcygpXG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrKHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrRGV0YWlscywgcHJvamVjdElkKSB7XG4gIGlmICh0YXNrRGF0ZSA9PT0gJycpIHtcbiAgICB0YXNrRGF0ZSA9ICdubyBkYXRlJ1xuICB9XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xuICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBuYW1lOiB0YXNrTmFtZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICB0YXNrRG9uZTogZmFsc2VcbiAgICAgIH0pXG4gICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3QudGFza3MpXG4gICAgfVxuICB9KVxuICBwdXNoVG9BbGxUYXNrcygpXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3RJZCkge1xuICBsZXQgcmV0dXJuT2JqZWN0XG4gIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICByZXR1cm5PYmplY3QgPSAgcHJvamVjdFxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJldHVybk9iamVjdFxufVxuXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KG5ld05hbWUsIHByb2plY3RJZCkge1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpIHtcbiAgICAgIHByb2plY3QubmFtZSA9IG5ld05hbWVcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpXG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlcbiAgICB9XG4gIH0pXG4gIHB1c2hUb0FsbFRhc2tzKClcbn1cblxucHVzaFRvQWxsVGFza3MoKVxuXG5leHBvcnQgeyBwcm9qZWN0cywgYWxsVGFza3MsIHB1c2hQcm9qZWN0LCBwdXNoVGFzaywgcmVtb3ZlUHJvamVjdCwgcmVuYW1lUHJvamVjdCwgZGVsZXRlVGFzaywgZmluZFByb2plY3QgfSIsImltcG9ydCB7IGFsbFRhc2tzLCBkZWxldGVUYXNrLCBmaW5kUHJvamVjdCwgcHVzaFRhc2sgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiBoMScpO1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuYWRkLXRhc2snKVxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5hZGQtdGFzay1mb3JtJylcbmNvbnN0IHRhc2tOYW1lID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpXG5jb25zdCB0YXNrRGV0YWlscyA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMnKVxuY29uc3QgdGFza0RhdGUgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKVxuY29uc3QgY2FuY2VsVGFza0Zvcm0gPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJylcblxuLy8gVUlcblxuZnVuY3Rpb24gcmVuZGVyVGFza0NvbnRhaW5lcih0YXNrcykge1xuICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNrLWlkPSR7dGFzay5pZH0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgPHA+JHt0YXNrLm5hbWV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gaG92ZXJcIj48L2k+XG4gICAgICAgIDxwIGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2suZGF0ZX08L3A+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBob3ZlclwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gaG92ZXJcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuICB9KVxufVxuXG5mdW5jdGlvbiBoaWRlQWRkVGFza0J1dHRvbigpIHtcbiAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrQnV0dG9uKCkge1xuICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFRhc2tGb3JtKCkge1xuICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIHJlc2V0VGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IGlucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpXG4gIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIGlucHV0LmZvY3VzKClcbn1cblxuZnVuY3Rpb24gcmVzZXRUYXNrRm9ybSgpIHtcbiAgdGFza05hbWUudmFsdWUgPSAnJ1xuICB0YXNrRGF0ZS52YWx1ZSA9ICcnXG4gIHRhc2tEZXRhaWxzLnZhbHVlID0gJydcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gJydcbn1cblxuLy8gZXZlbnQgaGFuZGxlcnNcblxuZnVuY3Rpb24gaGFuZGxlQWRkVGFza0J0bigpIHtcbiAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICBzaG93QWRkVGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrRm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBhY3RpdmVDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgY29uc3QgcHJvamVjdElkID0gYWN0aXZlQ2xhc3MuZGF0YXNldC5pZDtcbiAgcHVzaFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tEZXRhaWxzLnZhbHVlLCBwcm9qZWN0SWQpXG4gIHJlc2V0VGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFbnRlcktleShlKSB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5jbGljaygpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FuY2VsVGFza0Zvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgc2hvd0FkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxuICByZXNldFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NvbnRhaW5lcihlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldFxuXG4gIC8vIGRlbGV0ZSB0YXNrXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtY2FuJykpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgY29uc3QgdGFza0lkID0gZWxlbWVudC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQudGFza0lkXG5cbiAgICBkZWxldGVUYXNrKHRhc2tJZClcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmRhdGFzZXQuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwtdGFzay1idXR0b24nKSkge1xuICAgICAgICByZW5kZXJUYXNrQ29udGFpbmVyKGFsbFRhc2tzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBhY3RpdmVFbGVtZW50LmRhdGFzZXQuaWRcbiAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0SWQpXG4gICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3QudGFza3MpXG4gICAgfVxuXG4gIH1cbn1cblxuLy8gVUkgaW50ZXJhY3Rpb25zIEZvcm1cblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRhc2tCdG4pXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVBZGRUYXNrRm9ybSlcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFbnRlcktleSlcbmNhbmNlbFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsVGFza0Zvcm0pXG50YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGFza0NvbnRhaW5lcilcblxuXG5mdW5jdGlvbiBydW5NYWluKCkge1xuICByZW5kZXJUYXNrQ29udGFpbmVyKGFsbFRhc2tzKVxuICBoaWRlQWRkVGFza0J1dHRvbigpXG4gIGhpZGVBZGRUYXNrRm9ybSgpXG59XG5cbmV4cG9ydCB7IG1haW5IZWFkaW5nLCByZW5kZXJUYXNrQ29udGFpbmVyLCBoaWRlQWRkVGFza0J1dHRvbiwgdGFza0NvbnRhaW5lciwgc2hvd0FkZFRhc2tCdXR0b24sIGhpZGVBZGRUYXNrRm9ybSwgcnVuTWFpbiB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8ganMgaW1wb3J0XG5pbXBvcnQgeyBydW5Bc2lkZSB9IGZyb20gXCIuL3NjcmlwdHMvYXNpZGVcIlxuaW1wb3J0IHsgcnVuTWFpbiB9IGZyb20gXCIuL3NjcmlwdHMvbWFpblwiXG5cbi8vIGNzcyBpbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCAnLi9zdHlsZXMvYXNpZGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbnMvY2hlY2tfbG9nby5wbmcnXG5cbmZ1bmN0aW9uIHdlYlBhZ2VUaXRsZSgpIHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICBsaW5rLnJlbCA9ICdpY29uJztcbiAgbGluay5ocmVmID0gaWNvbjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxufVxuXG53ZWJQYWdlVGl0bGUoKVxuXG5ydW5NYWluKClcbnJ1bkFzaWRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=