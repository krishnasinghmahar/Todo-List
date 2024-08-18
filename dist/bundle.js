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
        name: 'Task 1',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 2',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      }
    ]
  },
  {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: 'Project 2',
    tasks: [
      {
        name: 'Task 3',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 4',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      }
    ]
  },
  {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    name: 'Project 3',
    tasks: [
      {
        name: 'Task 5',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 6',
        details: 'something...',
        date: '30 july',
        priority: 'low'
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
  projects.forEach(project => {
    if (project.id === projectId) {
      project.tasks.push({
        name: taskName,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority
      })
      ;(0,_main__WEBPACK_IMPORTED_MODULE_0__.renderTaskContainer)(project.tasks)
    }
  })
  console.log(projects)
  pushToAllTasks()
}

function renameProject(newName, projectId) {
  projects.forEach(project => {
    if(project.id === projectId){
      project.name =  newName
    }
  })
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
    <div class="task">
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
  addTaskForm.style.display = 'block'
}

function resetTaskForm() {
  taskName.value = ''
  taskDate.value = ''
  taskDetails.value = ''
  taskPriority.value = ''
}

// UI interactions Form

addTaskButton.addEventListener('click', () => {
  hideAddTaskButton()
  showAddTaskForm()
})

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const activeClass = document.querySelector('.active');
  const projectId = activeClass.dataset.id;
  (0,_data__WEBPACK_IMPORTED_MODULE_0__.pushTask)(taskName.value, taskDate.value, taskPriority.value, taskDetails.value, projectId)

  resetTaskForm()
})

addTaskForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
});

cancelTaskForm.addEventListener('click', (e) => {
  e.preventDefault()
  showAddTaskButton()
  hideAddTaskForm()
  resetTaskForm()
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFP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eUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUMwQztBQUNGOztBQUV4QztBQUMyQjtBQUNBO0FBQ0Q7QUFDZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrREFBSTtBQUNsQjtBQUNBOztBQUVBOztBQUVBLHVEQUFPO0FBQ1AseURBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvYXNpZGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2FzaWRlLmNzcz85MTJmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1ob3ZlcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XG59XG5cbmFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuYXNpZGUgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbmFzaWRlIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuYXNpZGUgLmJ1dHRvbi1jb250YWluZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IC4zcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmFzaWRlIC5idXR0b24tY29udGFpbmVyIGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuYXNpZGUgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuYXNpZGUgLnByb2plY3QtbmFtZSB7XG4gIGZsZXg6IDE7XG59XG5cbmFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgaGVpZ2h0OiAyLjRyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xufVxuXG5hc2lkZSAucHJvamVjdC1jb250YWluZXIgLnByb2plY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjIpO1xuICBib3JkZXItbGVmdDogcmdiYSgwLCAyNTUsIDApIHNvbGlkIDVweDtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIG9wYWNpdHk6IC43O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnByb2plY3QgLmhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIgLmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIGZvcm0gKi9cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0ge1xuICBib3JkZXI6IGdyZXkgMnB4IHJpZGdlO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgcGFkZGluZzogLjNyZW07XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IGdyZXkgMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDQ3LjglO1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMC44KTtcbn1cblxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xufVxuXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDEpO1xufVxuXG4vKiByZW5hbWUgZm9ybSAqL1xuXG4ucHJvamVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcC11cCAucmVuYW1lLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAtNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wLXVwIC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZW5hbWUtZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogNDcuNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XG59XG5cbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xufVxuXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYXNpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxTQUFTOztBQUVUO0VBQ0Usc0JBQXNCO0VBQ3RCLHFEQUFxRDtFQUNyRCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWhvdmVyOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjEpO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5hc2lkZSBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbmFzaWRlIC5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuYXNpZGUgLmJ1dHRvbi1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmFzaWRlIC5idXR0b24tY29udGFpbmVyIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbmFzaWRlIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdC1uYW1lIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuYXNpZGUgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yKTtcXG4gIGJvcmRlci1sZWZ0OiByZ2JhKDAsIDI1NSwgMCkgc29saWQgNXB4O1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIG9wYWNpdHk6IC43O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3QgLmhvdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIC5ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3QgLnByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIGZvcm0gKi9cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSB7XFxuICBib3JkZXI6IGdyZXkgMnB4IHJpZGdlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxuICBwYWRkaW5nOiAuM3JlbTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmc6IC4ycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IGdyZXkgMXB4IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbmFzaWRlIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiA0Ny44JTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xcbn1cXG5cXG5hc2lkZSAuYWRkLXByb2plY3QtZm9ybSAuY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAxKTtcXG59XFxuXFxuYXNpZGUgLmFkZC1wcm9qZWN0LWZvcm0gLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMSk7XFxufVxcblxcbi8qIHJlbmFtZSBmb3JtICovXFxuXFxuLnByb2plY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZHJvcC11cCAucmVuYW1lLWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IC4ycmVtO1xcbiAgYm90dG9tOiAzNXB4O1xcbiAgcmlnaHQ6IC01cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wLXVwIC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lcntcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA0Ny41JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbmFtZS1mb3JtIC5idG4tY29udGFpbmVyIC5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAwLjgpO1xcbn1cXG5cXG4ucmVuYW1lLWZvcm0gLmJ0bi1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMSk7XFxufVxcblxcbi5yZW5hbWUtZm9ybSAuYnRuLWNvbnRhaW5lciAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTk4LCAxLCAxKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1iZ0NvbG9yMTogIzE1MjAyYjtcbiAgLS1iZ0NvbG9yMjogIzE5MjczNDtcbiAgLS1iZ0NvbG9yMzogIzIyMzAzYztcbiAgLS1iZ0NvbG9yUG9wVXA6ICMyNzM3NDY7XG4gIC0tdGV4dENvbG9yOiAjZWFlYmVjO1xuICAtLWFjY2VudDogIzJhYmQ2NztcbiAgLS1hY2NlbnREYXJrOiAjMWY4ZDRkO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODVweCBhdXRvIDQwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjMpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAuNHJlbSAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1iZ0NvbG9yMTogIzE1MjAyYjtcXG4gIC0tYmdDb2xvcjI6ICMxOTI3MzQ7XFxuICAtLWJnQ29sb3IzOiAjMjIzMDNjO1xcbiAgLS1iZ0NvbG9yUG9wVXA6ICMyNzM3NDY7XFxuICAtLXRleHRDb2xvcjogI2VhZWJlYztcXG4gIC0tYWNjZW50OiAjMmFiZDY3O1xcbiAgLS1hY2NlbnREYXJrOiAjMWY4ZDRkO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NXB4IGF1dG8gNDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMyk7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IC40cmVtIC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaG92ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yMik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBwYWRkaW5nOiAycmVtIDRyZW07XG59XG5cbm1haW4gaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnREYXJrKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5tYWluIC50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IGdyZWVuIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gIHBhZGRpbmc6IC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWxlZnQ6IGdyZWVuIHNvbGlkIDFyZW07XG59XG5cbm1haW4gLnRhc2sgLnRhc2stbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxubWFpbiAudGFzayAudGFzay1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5tYWluIC50YXNrIC50YXNrLWJ1dHRvbnMgLmR1ZS1kYXRlIHtcbiAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbm1haW4gLnRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5tYWluIC5kdWUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxubWFpbiAuYWRkLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIG9wYWNpdHk6IC43O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubWFpbiAuYWRkLXRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi8qIEFkZCBUYXNrIEZvcm0gKi9cblxubWFpbiAuYWRkLXRhc2stZm9ybSB7XG4gIGJvcmRlcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAuNXJlbTtcbn1cblxubWFpbiAudGFzay1uYW1lLFxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLnByaW9yaXR5IHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWRldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbn1cblxuLmFkZC10YXNrLWZvcm0gLnRhc2stYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYnV0dG9ucyBidXR0b24ge1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAwLjgpO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMC44KTtcbn1cblxubWFpbiAuYWRkLXRhc2stZm9ybSAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDAsIDAsIDEpO1xufVxuXG5tYWluIC5hZGQtdGFzay1mb3JtIC5zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxufVxcblxcbm1haW4gaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50RGFyayk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxubWFpbiAudGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItbGVmdDogZ3JlZW4gc29saWQgMXJlbTtcXG59XFxuXFxubWFpbiAudGFzayAudGFzay1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5tYWluIC50YXNrIC50YXNrLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbm1haW4gLnRhc2sgLnRhc2stYnV0dG9ucyAuZHVlLWRhdGUge1xcbiAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XFxuICBwYWRkaW5nOiAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubWFpbiAudGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5kdWUtZGF0ZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbm1haW4gLmFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gIG9wYWNpdHk6IC43O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi8qIEFkZCBUYXNrIEZvcm0gKi9cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIHtcXG4gIGJvcmRlcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpIHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG5tYWluIC50YXNrLW5hbWUsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnByaW9yaXR5IHtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSAudGFzay1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC50YXNrLWRldGFpbHMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYWJvdXQge1xcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAudGFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnRhc2stYnV0dG9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxubWFpbiAuYWRkLXRhc2stZm9ybSAuY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG5tYWluIC5hZGQtdGFzay1mb3JtIC5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxOTgsIDEsIDAuOCk7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLmNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMCwgMCwgMSk7XFxufVxcblxcbm1haW4gLmFkZC10YXNrLWZvcm0gLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDE5OCwgMSwgMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzaWRlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzaWRlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cblxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICAvL1xuICAvLyBOb3RlIHRvIGZ1dHVyZS1zZWxmOiBObywgeW91IGNhbid0IHJlbW92ZSB0aGUgYHRvTG93ZXJDYXNlKClgIGNhbGwuXG4gIC8vIFJFRjogaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNjc3I2lzc3VlY29tbWVudC0xNzU3MzUxMzUxXG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIHZhciB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgYWxsVGFza0ljb24gZnJvbSAnLi4vaWNvbnMvaW5ib3gucG5nJ1xuaW1wb3J0IHRvZGF5SWNvbiBmcm9tICcuLi9pY29ucy90b2RheTEucG5nJ1xuaW1wb3J0IHRoaXNXZWVrSWNvbiBmcm9tICcuLi9pY29ucy93ZWVrMi5wbmcnXG5pbXBvcnQgeyBwcm9qZWN0cywgcHVzaFByb2plY3QsIGFsbFRhc2tzLCByZW1vdmVQcm9qZWN0LCByZW5hbWVQcm9qZWN0IH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgbWFpbkhlYWRpbmcsIHJlbmRlclRhc2tDb250YWluZXIsIGhpZGVBZGRUYXNrQnV0dG9uLCB0YXNrQ29udGFpbmVyLCBzaG93QWRkVGFza0J1dHRvbiwgaGlkZUFkZFRhc2tGb3JtIH0gZnJvbSAnLi9tYWluJ1xuXG4vLyBzZWxlY3RvcnNcbmNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKVxuY29uc3QgYWxsVGFza0J1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFzay1idXR0b24nKVxuY29uc3QgdG9kYXlCdXR0b24gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcudG9kYXktYnV0dG9uJylcbmNvbnN0IHRoaXNXZWVrQnV0dG9uID0gYXNpZGUucXVlcnlTZWxlY3RvcignLnRoaXMtd2Vlay1idXR0b24nKVxuXG4vLyBmb3JtIHNlbGVjdG9yc1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgZm9ybUFkZFByb2plY3QgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuY29uc3QgZm9ybUNhbmNlbEJ1dHRvbiA9IGZvcm1BZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbmNvbnN0IHByb2plY3ROYW1lID0gZm9ybUFkZFByb2plY3QucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4vLyBVSVxuXG5mdW5jdGlvbiByZW5kZXJCdXR0b25zKCkge1xuXG4gIGFsbFRhc2tCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPSR7YWxsVGFza0ljb259PlxuICAgIDxoMz5BbGwgVGFza3M8L2gzPlxuICBgXG5cbiAgdG9kYXlCdXR0b24uaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPSR7dG9kYXlJY29ufT4gIFxuICAgIDxoMz5Ub2RheTwvaDM+XG4gIGBcblxuICB0aGlzV2Vla0J1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9JHt0aGlzV2Vla0ljb259PlxuICAgIDxoMz5UaGlzIHdlZWs8L2gzPlxuICBgXG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUNsYXNzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncC10YXNrcycpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBtYWluSGVhZGluZy5pbm5lckhUTUwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJIVE1MXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RDb250YWluZXIoKSB7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBncC10YXNrc1wiIGRhdGEtaWQ9JHtwcm9qZWN0LmlkfT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0XCI+PC9pPlxuICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1idG5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcC11cFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlIGRyb3AtYnRuIGhvdmVyXCI+PC9pPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZW5hbWUtZm9ybVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlJlbmFtZSBQcm9qZWN0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gaG92ZXJcIj48L2k+ICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgYFxuICB9KVxufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIGZvcm1BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICBjb25zdCBpbnB1dCA9IGZvcm1BZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgZm9ybUFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgaW5wdXQuZm9jdXMoKVxufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEJ1dHRvbigpIHtcbiAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0QnV0dG9uKCkge1xuICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RJZChlbGVtZW50SWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBpZiAoZWxlbWVudElkID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICByZW5kZXJUYXNrQ29udGFpbmVyKHByb2plY3QudGFza3MpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGFzdFRhc2soKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY29udGFpbmVyID4gZGl2JylcbiAgc2V0QWN0aXZlQ2xhc3MoYWxsUHJvamVjdHNbYWxsUHJvamVjdHMubGVuZ3RoIC0gMV0pXG4gIHJlbmRlclRhc2tDb250YWluZXIocHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udGFza3MpXG4gIHNob3dBZGRUYXNrQnV0dG9uKClcbn1cblxuLy8gQWxsIENsaWNrIEV2ZW50cyBGdW5jdGlvbnNcblxuZnVuY3Rpb24gaGFuZGxlQWxsVGFza0J0bigpIHtcbiAgcmVuZGVyVGFza0NvbnRhaW5lcihhbGxUYXNrcylcbiAgaGlkZUFkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RheUJ0bigpIHtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICBoaWRlQWRkVGFza0J1dHRvbigpXG4gIGhpZGVBZGRUYXNrRm9ybSgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRoaXNXZWVrQnRuKCkge1xuICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgaGlkZUFkZFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENvbnRhaW5lcihlKSB7XG4gIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wLWJ0bicpKSB7XG4gICAgY29uc3QgcmVuYW1lRm9ybSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHJlbmFtZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gcmVuYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJylcbiAgICBjb25zdCBzdWJtaXRCdG4gPSByZW5hbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgIGNvbnN0IGlucHV0ID0gcmVuYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgaW5wdXQuZm9jdXMoKVxuXG4gICAgcmVuYW1lRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVSZW5hbWVGb3JtKVxuICAgIHJlbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVN1Ym1pdEJ0bilcbiAgICBjYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxSZW5hbWVCdG4pXG5cbiAgICByZW5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVJlbmFtZUZvcm0pXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsUmVuYW1lQnRuKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0QnRuKGUpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzdWJtaXRCdG4uY2xpY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbmFtZUZvcm0oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50LmNsb3Nlc3QoJy5wcm9qZWN0JylcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3QuZGF0YXNldC5pZFxuICAgICAgcmVuYW1lUHJvamVjdChpbnB1dC52YWx1ZSwgcHJvamVjdElkKVxuXG4gICAgICByZW5hbWVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblxuICAgICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBzZXRBY3RpdmVDbGFzcyhhbGxUYXNrQnV0dG9uKVxuICAgICAgICByZW5kZXJUYXNrQ29udGFpbmVyKGFsbFRhc2tzKVxuICAgICAgICBoaWRlQWRkVGFza0J1dHRvbigpXG4gICAgICB9XG4gICAgICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKClcbiAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDYW5jZWxSZW5hbWVCdG4oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZW5hbWVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRm9ybSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIXJlbmFtZUZvcm0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZW5hbWVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtY2FuJykpIHtcbiAgICByZW1vdmVQcm9qZWN0KGVsZW1lbnQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0LmlkKVxuICAgIHNldEFjdGl2ZUNsYXNzKGFsbFRhc2tCdXR0b24pXG4gICAgcmVuZGVyUHJvamVjdENvbnRhaW5lcigpXG4gICAgaGFuZGxlQWxsVGFza0J0bigpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dwLXRhc2tzJykgfHwgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSkge1xuICAgIGxldCBlbGVtZW50SWQ7XG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cbiAgICBlbGVtZW50SWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgZmluZFByb2plY3RJZChlbGVtZW50SWQpXG4gICAgc2hvd0FkZFRhc2tCdXR0b24oKVxuICAgIGhpZGVBZGRUYXNrRm9ybSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQXNpZGVCdG4oZSkge1xuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXInKSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3AtdGFza3MnKSB8fCBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdncC10YXNrcycpKSB7XG4gICAgc2V0QWN0aXZlQ2xhc3MoZWxlbWVudClcbiAgfVxufVxuXG4vLyBmb3JtIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBoYW5kbGVBZGRQcm9qZWN0QnRuKCkge1xuICBzaG93UHJvamVjdEZvcm0oKVxuICBoaWRlUHJvamVjdEJ1dHRvbigpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFByb2plY3RGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHB1c2hQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKVxuICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKClcbiAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xuICBoaWRlUHJvamVjdEZvcm0oKVxuICBzaG93UHJvamVjdEJ1dHRvbigpXG4gIHJlbmRlckxhc3RUYXNrKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FuY2VsUHJvamVjdEZvcm0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgaGlkZVByb2plY3RGb3JtKClcbiAgc2hvd1Byb2plY3RCdXR0b24oKVxuICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEJ0bihlKSB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm1BZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuICAgIHN1Ym1pdEJ0bi5jbGljaygpXG4gIH1cbn1cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG5hc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFzaWRlQnRuKVxuYWxsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFsbFRhc2tCdG4pXG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZGF5QnRuKVxudGhpc1dlZWtCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaGlzV2Vla0J0bilcbnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0Q29udGFpbmVyKVxuXG4vLyBBZGQgUHJvamVjdCBCdXR0b24gYW5kIEZvcm0gTGlzdGVuZXJzXG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRQcm9qZWN0QnRuKVxuZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlQWRkUHJvamVjdEZvcm0pXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlU3VibWl0QnRuKTtcbmZvcm1DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxQcm9qZWN0Rm9ybSlcblxuZnVuY3Rpb24gcnVuQXNpZGUoKSB7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpXG4gIHJlbmRlclByb2plY3RDb250YWluZXIoKVxuICByZW5kZXJCdXR0b25zKClcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdENvbnRhaW5lciwgcnVuQXNpZGUgfSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcmVuZGVyVGFza0NvbnRhaW5lciB9IGZyb20gJy4vbWFpbic7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6ICdQcm9qZWN0IDEnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUYXNrIDEnLFxuICAgICAgICBkZXRhaWxzOiAnc29tZXRoaW5nLi4uJyxcbiAgICAgICAgZGF0ZTogJzMwIGp1bHknLFxuICAgICAgICBwcmlvcml0eTogJ2xvdydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUYXNrIDInLFxuICAgICAgICBkZXRhaWxzOiAnc29tZXRoaW5nLi4uJyxcbiAgICAgICAgZGF0ZTogJzMwIGp1bHknLFxuICAgICAgICBwcmlvcml0eTogJ2xvdydcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgbmFtZTogJ1Byb2plY3QgMicsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1Rhc2sgMycsXG4gICAgICAgIGRldGFpbHM6ICdzb21ldGhpbmcuLi4nLFxuICAgICAgICBkYXRlOiAnMzAganVseScsXG4gICAgICAgIHByaW9yaXR5OiAnbG93J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1Rhc2sgNCcsXG4gICAgICAgIGRldGFpbHM6ICdzb21ldGhpbmcuLi4nLFxuICAgICAgICBkYXRlOiAnMzAganVseScsXG4gICAgICAgIHByaW9yaXR5OiAnbG93J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBuYW1lOiAnUHJvamVjdCAzJyxcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFzayA1JyxcbiAgICAgICAgZGV0YWlsczogJ3NvbWV0aGluZy4uLicsXG4gICAgICAgIGRhdGU6ICczMCBqdWx5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFzayA2JyxcbiAgICAgICAgZGV0YWlsczogJ3NvbWV0aGluZy4uLicsXG4gICAgICAgIGRhdGU6ICczMCBqdWx5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmxldCBhbGxUYXNrcyA9IFtdXG5cbmZ1bmN0aW9uIHB1c2hUb0FsbFRhc2tzKCkge1xuICBhbGxUYXNrcyA9IFtdXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBhbGxUYXNrcy5wdXNoKHRhc2spKSlcbn1cblxuZnVuY3Rpb24gcHVzaFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgcHJvamVjdHMucHVzaCh7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgIHRhc2tzOiBbXVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RJZCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB9XG4gIHB1c2hUb0FsbFRhc2tzKClcbn1cblxuZnVuY3Rpb24gcHVzaFRhc2sodGFza05hbWUsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tEZXRhaWxzLCBwcm9qZWN0SWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzLnB1c2goe1xuICAgICAgICBuYW1lOiB0YXNrTmFtZSxcbiAgICAgICAgZGV0YWlsczogdGFza0RldGFpbHMsXG4gICAgICAgIGRhdGU6IHRhc2tEYXRlLFxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5XG4gICAgICB9KVxuICAgICAgcmVuZGVyVGFza0NvbnRhaW5lcihwcm9qZWN0LnRhc2tzKVxuICAgIH1cbiAgfSlcbiAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gIHB1c2hUb0FsbFRhc2tzKClcbn1cblxuZnVuY3Rpb24gcmVuYW1lUHJvamVjdChuZXdOYW1lLCBwcm9qZWN0SWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBpZihwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpe1xuICAgICAgcHJvamVjdC5uYW1lID0gIG5ld05hbWVcbiAgICB9XG4gIH0pXG59XG5cbnB1c2hUb0FsbFRhc2tzKClcblxuZXhwb3J0IHsgcHJvamVjdHMsIGFsbFRhc2tzLCBwdXNoUHJvamVjdCwgcHVzaFRhc2ssIHJlbW92ZVByb2plY3QscmVuYW1lUHJvamVjdCB9IiwiaW1wb3J0IHsgYWxsVGFza3MsIHB1c2hUYXNrIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gaDEnKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKVxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmFkZC10YXNrJylcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuYWRkLXRhc2stZm9ybScpXG5jb25zdCB0YXNrTmFtZSA9IGFkZFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKVxuY29uc3QgdGFza0RldGFpbHMgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJylcbmNvbnN0IHRhc2tEYXRlID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLmRhdGUnKVxuY29uc3QgdGFza1ByaW9yaXR5ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JylcbmNvbnN0IGNhbmNlbFRhc2tGb3JtID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpXG5cbi8vIFVJXG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tDb250YWluZXIodGFza3MpIHtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgIDxwPiR7dGFzay5uYW1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stYnV0dG9uc1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvIGhvdmVyXCI+PC9pPlxuICAgICAgICA8cCBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrLmRhdGV9PC9wPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgaG92ZXJcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIGhvdmVyXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFRhc2tCdXR0b24oKSB7XG4gIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0J1dHRvbigpIHtcbiAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrRm9ybSgpIHtcbiAgYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICByZXNldFRhc2tGb3JtKClcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCkge1xuICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tGb3JtKCkge1xuICB0YXNrTmFtZS52YWx1ZSA9ICcnXG4gIHRhc2tEYXRlLnZhbHVlID0gJydcbiAgdGFza0RldGFpbHMudmFsdWUgPSAnJ1xuICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnJ1xufVxuXG4vLyBVSSBpbnRlcmFjdGlvbnMgRm9ybVxuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBoaWRlQWRkVGFza0J1dHRvbigpXG4gIHNob3dBZGRUYXNrRm9ybSgpXG59KVxuXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgYWN0aXZlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9IGFjdGl2ZUNsYXNzLmRhdGFzZXQuaWQ7XG4gIHB1c2hUYXNrKHRhc2tOYW1lLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlLCB0YXNrRGV0YWlscy52YWx1ZSwgcHJvamVjdElkKVxuXG4gIHJlc2V0VGFza0Zvcm0oKVxufSlcblxuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG59KTtcblxuY2FuY2VsVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgc2hvd0FkZFRhc2tCdXR0b24oKVxuICBoaWRlQWRkVGFza0Zvcm0oKVxuICByZXNldFRhc2tGb3JtKClcbn0pXG5cbmZ1bmN0aW9uIHJ1bk1haW4oKSB7XG4gIHJlbmRlclRhc2tDb250YWluZXIoYWxsVGFza3MpXG4gIGhpZGVBZGRUYXNrQnV0dG9uKClcbiAgaGlkZUFkZFRhc2tGb3JtKClcbn1cblxuZXhwb3J0IHsgbWFpbkhlYWRpbmcsIHJlbmRlclRhc2tDb250YWluZXIsIGhpZGVBZGRUYXNrQnV0dG9uLCB0YXNrQ29udGFpbmVyLCBzaG93QWRkVGFza0J1dHRvbiwgaGlkZUFkZFRhc2tGb3JtLCBydW5NYWluIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBqcyBpbXBvcnRcbmltcG9ydCB7IHJ1bkFzaWRlIH0gZnJvbSBcIi4vc2NyaXB0cy9hc2lkZVwiXG5pbXBvcnQgeyBydW5NYWluIH0gZnJvbSBcIi4vc2NyaXB0cy9tYWluXCJcblxuLy8gY3NzIGltcG9ydHNcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9hc2lkZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0IGljb24gZnJvbSAnLi9pY29ucy9jaGVja19sb2dvLnBuZydcblxuZnVuY3Rpb24gd2ViUGFnZVRpdGxlKCkge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gIGxpbmsucmVsID0gJ2ljb24nO1xuICBsaW5rLmhyZWYgPSBpY29uO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG59XG5cbndlYlBhZ2VUaXRsZSgpXG5cbnJ1bk1haW4oKVxucnVuQXNpZGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==