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

/***/ "./app/client.ts":
/*!***********************!*\
  !*** ./app/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n/* harmony import */ var app_ui_taskViewModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/taskViewModal */ \"./app/ui/taskViewModal.ts\");\n/* harmony import */ var app_ui_viewSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/viewSwitcher */ \"./app/ui/viewSwitcher.ts\");\n\r\n\r\n\r\n\r\n(0,app_ui_modal__WEBPACK_IMPORTED_MODULE_0__.initModals)();\r\n(0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__.initTaskEditModals)();\r\n(0,app_ui_taskViewModal__WEBPACK_IMPORTED_MODULE_2__.initTaskViewModals)();\r\n(0,app_ui_viewSwitcher__WEBPACK_IMPORTED_MODULE_3__.initViewSwitcher)();\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/dom.ts":
/*!********************!*\
  !*** ./app/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   queryAll: () => (/* binding */ queryAll),\n/* harmony export */   requireElementById: () => (/* binding */ requireElementById),\n/* harmony export */   requireQuery: () => (/* binding */ requireQuery)\n/* harmony export */ });\nfunction requireElementById(id, type = HTMLElement) {\r\n    const element = document.getElementById(id);\r\n    if (!element)\r\n        throw new Error(`Could not find element with id ${id}`);\r\n    if (!(element instanceof type)) {\r\n        throw new Error(`Element #${id} is not a ${type.name}`);\r\n    }\r\n    return element;\r\n}\r\nfunction requireQuery(selector, root = document) {\r\n    const element = root.querySelector(selector);\r\n    if (!element) {\r\n        throw new Error(`Could not find element matching ${selector}`);\r\n    }\r\n    return element;\r\n}\r\nfunction queryAll(selector, root = document) {\r\n    return Array.from(root.querySelectorAll(selector));\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/dom.ts?");

/***/ }),

/***/ "./app/ui/modal.ts":
/*!*************************!*\
  !*** ./app/ui/modal.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModals: () => (/* binding */ initModals),\n/* harmony export */   modalDisplay: () => (/* binding */ modalDisplay)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n// ui/modal.ts\r\n\r\nfunction modalDisplay(dialog, display) {\r\n    if (!display) {\r\n        dialog.close();\r\n    }\r\n    else {\r\n        dialog.showModal();\r\n        dialog.focus(); // moves focus to the dialog panel itself, not the close button\r\n    }\r\n}\r\nfunction initModals() {\r\n    // close buttons\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-close-dialog]\").forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => { var _a; return (_a = btn.closest(\"dialog\")) === null || _a === void 0 ? void 0 : _a.close(); });\r\n    });\r\n    // click-on-backdrop-to-close\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"dialog\").forEach((dialog) => {\r\n        dialog.addEventListener(\"click\", (e) => {\r\n            if (e.target !== dialog)\r\n                return; // ignore clicks on children\r\n            const rect = dialog.getBoundingClientRect();\r\n            const inBounds = e.clientX >= rect.left && e.clientX <= rect.right &&\r\n                e.clientY >= rect.top && e.clientY <= rect.bottom;\r\n            if (!inBounds)\r\n                dialog.close();\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/modal.ts?");

/***/ }),

/***/ "./app/ui/taskEditModal.ts":
/*!*********************************!*\
  !*** ./app/ui/taskEditModal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskEditModals: () => (/* binding */ initTaskEditModals),\n/* harmony export */   openEditModal: () => (/* binding */ openEditModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n\r\n\r\nconst editForm = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-form\");\r\nconst editWindow = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-dialog\");\r\nconst editPanels = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-edit-panel]\");\r\nconst typeToggleButtons = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-item-type]\");\r\nlet currentMode = \"new-task\"; // \"new-task\" | \"instance\" | \"base-task\"\r\n// toggles between task and event. checks if the element matches the type being selected.\r\nfunction setItemType(type) {\r\n    typeToggleButtons.forEach((btn) => {\r\n        btn.classList.toggle(\"is-active\", btn.dataset.itemType === type);\r\n    });\r\n}\r\n// sets the form into the targeted form to display relevant data fields.\r\nfunction setFormMode(mode) {\r\n    currentMode = mode; // updates current mode\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-edit-panel]\", editForm).forEach((section) => {\r\n        // if new task every field isRelevant so all of them show up. Otherwise, check and set each field\r\n        const isRelevant = mode === \"new-task\" || section.dataset.editPanel === mode;\r\n        section.hidden = !isRelevant;\r\n        section.disabled = !isRelevant;\r\n    });\r\n}\r\n// ========================\r\n// Public\r\n// ========================\r\nfunction openEditModal({ mode, isNew = false } = {}) {\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"edit-modal-title\").textContent = isNew ? \"New task\" : \"Edit task\";\r\n    setFormMode(mode);\r\n    (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, true);\r\n    // TODO: populate the two forms above from the selected task/instance,\r\n    // or leave them blank when isNew is true.\r\n}\r\nfunction initTaskEditModals() {\r\n    typeToggleButtons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => setItemType(btn.dataset.itemType));\r\n    });\r\n    // Forms don't actually submit anywhere yet — just close on \"Save\".\r\n    editForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const data = Object.fromEntries(new FormData(form));\r\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, false);\r\n        if (currentMode === \"new-task\") {\r\n            console.log(\"TODO: create base task + first instance\", data);\r\n        }\r\n        else if (currentMode === \"instance\") {\r\n            console.log(\"TODO: save instance only\", data);\r\n        }\r\n        else if (currentMode === \"base-task\") {\r\n            console.log(\"TODO: save base task only\", data);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskEditModal.ts?");

/***/ }),

/***/ "./app/ui/taskViewModal.ts":
/*!*********************************!*\
  !*** ./app/ui/taskViewModal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskViewModals: () => (/* binding */ initTaskViewModals),\n/* harmony export */   openViewModal: () => (/* binding */ openViewModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n\r\n\r\n\r\nconst PRIORITY_LABELS = {\r\n    low: \"Low\",\r\n    medium: \"Medium\",\r\n    high: \"High\",\r\n    urgent: \"Urgent\",\r\n};\r\nconst viewOverlay = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-view-dialog\");\r\n// =====================\r\n// Public\r\n// =====================\r\nfunction openViewModal(chip) {\r\n    const d = chip.dataset;\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-instance-title\").textContent = d.instanceTitle || d.baseTitle;\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-instance-schedule\").innerHTML = d.instanceTime || \"\";\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-title\").textContent = d.baseTitle;\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-description\").textContent = d.baseDescription || \"\";\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-duration\").textContent = d.baseDuration || \"\";\r\n    // TODO: remove the meta chip and make it work with real chips\r\n    // const priorityEl = requireElementById(\"view-base-priority\");\r\n    // priorityEl.dataset.priority = d.basePriority;\r\n    // priorityEl.lastChild.textContent = PRIORITY_LABELS[d.basePriority];\r\n    // Stash the current task/instance ids on the overlay so the edit\r\n    // buttons below know what they're acting on.\r\n    // TODO: move this part to a separate object in ts that keeps track of task object.\r\n    viewOverlay.dataset.taskId = d.taskId;\r\n    viewOverlay.dataset.instanceId = d.instanceId;\r\n    (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, true);\r\n}\r\nfunction initTaskViewModals() {\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\".event-chip\").forEach((chip) => {\r\n        chip.addEventListener(\"click\", () => openViewModal(chip));\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-instance\"]').addEventListener(\"click\", () => {\r\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)({ mode: \"instance\" });\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-base-task\"]').addEventListener(\"click\", () => {\r\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)({ mode: \"base-task\" });\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"new-instance\"]').addEventListener(\"click\", () => {\r\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)({ mode: \"instance\", isNew: true });\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-instance\"]').addEventListener(\"click\", () => {\r\n        console.log(\"TODO: delete instance\", viewOverlay.dataset.instanceId);\r\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, false);\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-base-task\"]').addEventListener(\"click\", () => {\r\n        console.log(\"TODO: delete base task\", viewOverlay.dataset.taskId);\r\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, false);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskViewModal.ts?");

/***/ }),

/***/ "./app/ui/viewSwitcher.ts":
/*!********************************!*\
  !*** ./app/ui/viewSwitcher.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initViewSwitcher: () => (/* binding */ initViewSwitcher)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n\r\nconst body = document.body;\r\nconst viewButtons = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-view-btn]\");\r\nconst viewPanels = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-view-panel]\");\r\nfunction isView(value) {\r\n    return value === \"month\" || value === \"week\" || value === \"day\";\r\n}\r\nfunction setView(view) {\r\n    body.dataset.view = view;\r\n    viewButtons.forEach((btn) => {\r\n        const isActive = btn.dataset.viewBtn === view;\r\n        btn.classList.toggle(\"is-active\", isActive);\r\n        btn.setAttribute(\"aria-selected\", String(isActive));\r\n    });\r\n    viewPanels.forEach((panel) => {\r\n        panel.hidden = panel.dataset.viewPanel !== view;\r\n    });\r\n}\r\n//===============\r\n//Public\r\n//===============\r\nfunction initViewSwitcher() {\r\n    viewButtons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            const view = btn.dataset.viewBtn;\r\n            if (isView(view)) {\r\n                setView(view);\r\n            }\r\n        });\r\n    });\r\n    // Prev/next/today are stubs — hook these into your own date logic.\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"prev-period\").addEventListener(\"click\", () => {\r\n        console.log(\"TODO: move to previous period and re-render the calendar\");\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"next-period\").addEventListener(\"click\", () => {\r\n        console.log(\"TODO: move to next period and re-render the calendar\");\r\n    });\r\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"today-btn\").addEventListener(\"click\", () => {\r\n        console.log(\"TODO: jump back to today and re-render the calendar\");\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/viewSwitcher.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/client.ts");
/******/ 	
/******/ })()
;