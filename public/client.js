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

/***/ "./app/client.ts"
/*!***********************!*\
  !*** ./app/client.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n/* harmony import */ var app_ui_taskViewModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/taskViewModal */ \"./app/ui/taskViewModal.ts\");\n/* harmony import */ var app_ui_viewSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/viewSwitcher */ \"./app/ui/viewSwitcher.ts\");\n/* harmony import */ var app_ui_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/ui/header */ \"./app/ui/header.ts\");\n\n\n\n\n\n(0,app_ui_modal__WEBPACK_IMPORTED_MODULE_0__.initModals)();\n(0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__.initTaskEditModals)();\n(0,app_ui_taskViewModal__WEBPACK_IMPORTED_MODULE_2__.initTaskViewModals)();\n(0,app_ui_viewSwitcher__WEBPACK_IMPORTED_MODULE_3__.initViewSwitcher)();\n(0,app_ui_header__WEBPACK_IMPORTED_MODULE_4__.initHeader)();\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?\n}");

/***/ },

/***/ "./app/dom.ts"
/*!********************!*\
  !*** ./app/dom.ts ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   queryAll: () => (/* binding */ queryAll),\n/* harmony export */   requireElementById: () => (/* binding */ requireElementById),\n/* harmony export */   requireQuery: () => (/* binding */ requireQuery)\n/* harmony export */ });\nfunction requireElementById(id, type = HTMLElement) {\n    const element = document.getElementById(id);\n    if (!element)\n        throw new Error(`Could not find element with id ${id}`);\n    if (!(element instanceof type)) {\n        throw new Error(`Element #${id} is not a ${type.name}`);\n    }\n    return element;\n}\nfunction requireQuery(selector, root = document) {\n    const element = root.querySelector(selector);\n    if (!element) {\n        throw new Error(`Could not find element matching ${selector}`);\n    }\n    return element;\n}\nfunction queryAll(selector, root = document) {\n    return Array.from(root.querySelectorAll(selector));\n}\n\n\n//# sourceURL=webpack://alttp/./app/dom.ts?\n}");

/***/ },

/***/ "./app/ui/header.ts"
/*!**************************!*\
  !*** ./app/ui/header.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initHeader: () => (/* binding */ initHeader)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n// ui/header.ts\n\n\nfunction initHeader() {\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"new-task-btn\").addEventListener(\"click\", () => {\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_1__.openEditModal)(\"new-task\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"prev-period\").addEventListener(\"click\", () => {\n        console.log(\"TODO: move to previous period and re-render the calendar\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"next-period\").addEventListener(\"click\", () => {\n        console.log(\"TODO: move to next period and re-render the calendar\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"today-btn\").addEventListener(\"click\", () => {\n        console.log(\"TODO: jump back to today and re-render the calendar\");\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/header.ts?\n}");

/***/ },

/***/ "./app/ui/modal.ts"
/*!*************************!*\
  !*** ./app/ui/modal.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModals: () => (/* binding */ initModals),\n/* harmony export */   modalDisplay: () => (/* binding */ modalDisplay)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n// ui/modal.ts\n\nfunction modalDisplay(dialog, display) {\n    if (!display) {\n        dialog.close();\n    }\n    else {\n        dialog.showModal();\n        dialog.focus(); // moves focus to the dialog panel itself, not the close button\n    }\n}\nfunction initModals() {\n    // close buttons\n    ;(0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-close-dialog]\").forEach((btn) => {\n        btn.addEventListener(\"click\", () => { var _a; return (_a = btn.closest(\"dialog\")) === null || _a === void 0 ? void 0 : _a.close(); });\n    });\n    // click-on-backdrop-to-close\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"dialog\").forEach((dialog) => {\n        dialog.addEventListener(\"click\", (e) => {\n            if (e.target !== dialog)\n                return; // ignore clicks on children\n            const rect = dialog.getBoundingClientRect();\n            const inBounds = e.clientX >= rect.left && e.clientX <= rect.right &&\n                e.clientY >= rect.top && e.clientY <= rect.bottom;\n            if (!inBounds)\n                dialog.close();\n        });\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/modal.ts?\n}");

/***/ },

/***/ "./app/ui/taskEditModal.ts"
/*!*********************************!*\
  !*** ./app/ui/taskEditModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskEditModals: () => (/* binding */ initTaskEditModals),\n/* harmony export */   openEditModal: () => (/* binding */ openEditModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n\n\nconst editForm = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-form\");\nconst editWindow = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-dialog\");\nconst editPanels = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-edit-panel]\");\nconst typeToggleButtons = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-item-type]\");\nconst MODE_TITLES = {\n    \"new-task\": \"New task\",\n    \"new-instance\": \"New instance\",\n    \"edit-instance\": \"Edit instance\",\n    \"edit-base-task\": \"Edit base task\",\n};\nconst MODE_PANELS = {\n    \"new-task\": [\"base-task\", \"instance\"],\n    \"new-instance\": [\"instance\"],\n    \"edit-instance\": [\"instance\"],\n    \"edit-base-task\": [\"base-task\"],\n};\nlet currentMode = \"new-task\";\n// toggles between task and event. checks if the element matches the type being selected.\nfunction setItemType(type) {\n    typeToggleButtons.forEach((btn) => {\n        btn.classList.toggle(\"is-active\", btn.dataset.itemType === type);\n    });\n}\n// sets the form into the targeted form to display relevant data fields.\nfunction setFormMode(mode) {\n    currentMode = mode;\n    const visible = MODE_PANELS[mode];\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-edit-panel]\", editForm).forEach((section) => {\n        const isRelevant = visible.includes(section.dataset.editPanel);\n        section.hidden = !isRelevant;\n        section.disabled = !isRelevant;\n    });\n}\n// ========================\n// Public\n// ========================\nfunction openEditModal(mode) {\n    ;(0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"edit-modal-title\").textContent = MODE_TITLES[mode];\n    setFormMode(mode);\n    (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, true);\n}\nfunction initTaskEditModals() {\n    typeToggleButtons.forEach((btn) => {\n        btn.addEventListener(\"click\", () => setItemType(btn.dataset.itemType));\n    });\n    // Forms don't actually submit anywhere yet — just close on \"Save\".\n    editForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const data = Object.fromEntries(new FormData(form));\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, false);\n        if (currentMode === \"new-task\") {\n            console.log(\"TODO: create base task + first instance\", data);\n        }\n        else if (currentMode === \"edit-instance\") {\n            console.log(\"TODO: save instance only\", data);\n        }\n        else if (currentMode === \"edit-base-task\") {\n            console.log(\"TODO: save base task only\", data);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskEditModal.ts?\n}");

/***/ },

/***/ "./app/ui/taskViewModal.ts"
/*!*********************************!*\
  !*** ./app/ui/taskViewModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskViewModals: () => (/* binding */ initTaskViewModals),\n/* harmony export */   openViewModal: () => (/* binding */ openViewModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n\n\n\nconst PRIORITY_LABELS = {\n    low: \"Low\",\n    medium: \"Medium\",\n    high: \"High\",\n    urgent: \"Urgent\",\n};\nconst viewOverlay = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-view-dialog\");\n// =====================\n// Public\n// =====================\nfunction openViewModal(chip) {\n    const d = chip.dataset;\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-instance-title\").textContent = d.instanceTitle || d.baseTitle;\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-instance-schedule\").innerHTML = d.instanceTime || \"\";\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-title\").textContent = d.baseTitle;\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-description\").textContent = d.baseDescription || \"\";\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-duration\").textContent = d.baseDuration || \"\";\n    // TODO: remove the meta chip and make it work with real chips\n    // const priorityEl = requireElementById(\"view-base-priority\");\n    // priorityEl.dataset.priority = d.basePriority;\n    // priorityEl.lastChild.textContent = PRIORITY_LABELS[d.basePriority];\n    // Stash the current task/instance ids on the overlay so the edit\n    // buttons below know what they're acting on.\n    // TODO: move this part to a separate object in ts that keeps track of task object.\n    viewOverlay.dataset.taskId = d.taskId;\n    viewOverlay.dataset.instanceId = d.instanceId;\n    (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, true);\n}\nfunction initTaskViewModals() {\n    ;(0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\".event-chip\").forEach((chip) => {\n        chip.addEventListener(\"click\", () => openViewModal(chip));\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-instance\"]').addEventListener(\"click\", () => {\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)(\"edit-instance\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-base-task\"]').addEventListener(\"click\", () => {\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)(\"edit-base-task\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"new-instance\"]').addEventListener(\"click\", () => {\n        (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_2__.openEditModal)(\"new-instance\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-instance\"]').addEventListener(\"click\", () => {\n        console.log(\"TODO: delete instance\", viewOverlay.dataset.instanceId);\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, false);\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-base-task\"]').addEventListener(\"click\", () => {\n        console.log(\"TODO: delete base task\", viewOverlay.dataset.taskId);\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(viewOverlay, false);\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskViewModal.ts?\n}");

/***/ },

/***/ "./app/ui/viewSwitcher.ts"
/*!********************************!*\
  !*** ./app/ui/viewSwitcher.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initViewSwitcher: () => (/* binding */ initViewSwitcher)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n\nconst body = document.body;\nconst viewButtons = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-view-btn]\");\nconst viewPanels = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-view-panel]\");\nfunction isView(value) {\n    return value === \"month\" || value === \"week\" || value === \"day\";\n}\nfunction setView(view) {\n    body.dataset.view = view;\n    viewButtons.forEach((btn) => {\n        const isActive = btn.dataset.viewBtn === view;\n        btn.classList.toggle(\"is-active\", isActive);\n        btn.setAttribute(\"aria-selected\", String(isActive));\n    });\n    viewPanels.forEach((panel) => {\n        panel.hidden = panel.dataset.viewPanel !== view;\n    });\n}\n//===============\n//Public\n//===============\nfunction initViewSwitcher() {\n    viewButtons.forEach((btn) => {\n        btn.addEventListener(\"click\", () => {\n            const view = btn.dataset.viewBtn;\n            if (isView(view)) {\n                setView(view);\n            }\n        });\n    });\n    // Prev/next/today are stubs — hook these into your own date logic.\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"prev-period\").addEventListener(\"click\", () => {\n        console.log(\"TODO: move to previous period and re-render the calendar\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"next-period\").addEventListener(\"click\", () => {\n        console.log(\"TODO: move to next period and re-render the calendar\");\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"today-btn\").addEventListener(\"click\", () => {\n        console.log(\"TODO: jump back to today and re-render the calendar\");\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/viewSwitcher.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./app/client.ts");
/******/ 	
/******/ })()
;