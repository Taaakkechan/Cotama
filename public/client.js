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

/***/ "./app/format.ts"
/*!***********************!*\
  !*** ./app/format.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDuration: () => (/* binding */ formatDuration),\n/* harmony export */   formatSchedule: () => (/* binding */ formatSchedule)\n/* harmony export */ });\nfunction formatSchedule(start, end) {\n    const s = new Date(start);\n    const e = new Date(end);\n    // mini helper functions for the formatting\n    const day = (d) => d.toLocaleDateString(undefined, { weekday: \"short\", month: \"short\", day: \"numeric\" });\n    const time = (d) => d.toLocaleTimeString(undefined, { hour: \"numeric\", minute: \"2-digit\" });\n    return `${day(s)} · ${time(s)} – ${time(e)} · ${day(e)}`;\n}\nfunction formatDuration(minutes) {\n    const h = Math.floor(minutes / 60);\n    const m = minutes % 60;\n    // && returns the left side if false. || returns the right side if false.\n    // In this case when h is 0, it returns 0. If h is 1, it returns \"1 hr\".\n    // So this part filters out any \"0\"s (Which are also Boolean by itself)\n    return [h && `${h} hr`, m && `${m} min`].filter(Boolean).join(\" \") || \"0 min\";\n}\n\n\n//# sourceURL=webpack://alttp/./app/format.ts?\n}");

/***/ },

/***/ "./app/persistence.ts"
/*!****************************!*\
  !*** ./app/persistence.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSavedData: () => (/* binding */ clearSavedData),\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\nfunction loadData() {\n    try {\n        const raw = localStorage.getItem(\"calendar.data\");\n        if (raw) {\n            console.log(\"data loaded\");\n            // TODO: check the nextId's and update them incase of bad saves\n            return JSON.parse(raw);\n        }\n    }\n    catch {\n        // corrupted save: fall through to the empty default\n    }\n    console.log(\"initiated data\");\n    return { version: 1, nextTaskId: 1, nextOccerenceId: 1, baseTasks: [] };\n}\nfunction clearSavedData() {\n    localStorage.removeItem(\"savedData\");\n}\nfunction saveData(data) {\n    localStorage.setItem(\"calendar.data\", JSON.stringify(data));\n}\n\n\n//# sourceURL=webpack://alttp/./app/persistence.ts?\n}");

/***/ },

/***/ "./app/priority.ts"
/*!*************************!*\
  !*** ./app/priority.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PRIORITIES: () => (/* binding */ PRIORITIES),\n/* harmony export */   priorityInfo: () => (/* binding */ priorityInfo)\n/* harmony export */ });\nconst PRIORITIES = [\n    { value: 1, key: \"low\", label: \"Low\" },\n    { value: 2, key: \"medium\", label: \"Medium\" },\n    { value: 3, key: \"high\", label: \"High\" },\n    { value: 4, key: \"urgent\", label: \"Urgent\" },\n];\nfunction priorityInfo(p) {\n    return PRIORITIES.find((x) => x.value === p);\n}\n\n\n//# sourceURL=webpack://alttp/./app/priority.ts?\n}");

/***/ },

/***/ "./app/store.ts"
/*!**********************!*\
  !*** ./app/store.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTask: () => (/* binding */ getTask),\n/* harmony export */   onChange: () => (/* binding */ onChange),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   saveTask: () => (/* binding */ saveTask)\n/* harmony export */ });\n/* harmony import */ var app_persistence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/persistence */ \"./app/persistence.ts\");\n\nconst saved = (0,app_persistence__WEBPACK_IMPORTED_MODULE_0__.loadData)();\nlet baseTasks = saved.baseTasks;\nlet scheduledTasks = [];\nlet nextTaskID = saved.nextTaskID;\nlet nextOccurrenceID = saved.nextOccurrenceID;\nconst listeners = [];\nfunction commit() {\n    (0,app_persistence__WEBPACK_IMPORTED_MODULE_0__.saveData)({ version: 1, nextTaskId, nextOccerenceId, baseTasks });\n    scheduledTasks = buildScheduledTasks(baseTasks, rangeStart, rangeEnd);\n    listeners.forEach((fn) => fn()); // this line is what makes onChange work\n}\nfunction generateId(prefix) {\n    return `${prefix}-${nextId++}`; // \"task-8\", \"occ-21\"\n}\n//=====================\n// Public\n//=====================\n// allows us to push new functions to listeners.\nfunction onChange(fn) {\n    listeners.push(fn);\n}\nfunction getTask(id) {\n    return baseTasks.find(task => task.id === id);\n}\nfunction saveTask(input) {\n    var _a;\n    const task = {\n        ...input,\n        id: (_a = input.id) !== null && _a !== void 0 ? _a : generateId(\"task\"),\n        occurrences: input.occurrences.map((o) => {\n            var _a;\n            return ({\n                ...o,\n                id: (_a = o.id) !== null && _a !== void 0 ? _a : generateId(\"occ\"),\n            });\n        }),\n    };\n    const index = baseTasks.findIndex((t) => t.id === task.id); // ouputs -1 if it cannot find id\n    // Error checking: id exsisted but got deleted\n    if (input.id !== undefined && index === -1) {\n        throw new Error(`Cannot save task ${input.id}: it no longer exists`);\n    }\n    baseTasks =\n        index === -1 // checks if new Id\n            ? [...baseTasks, task] // append new task to the end\n            : baseTasks.map((t, i) => (i === index ? task : t)); // .map((element, index)) creates a new array with new mapping\n    commit();\n    return task;\n}\nfunction removeTask(taskId) {\n    const next = baseTasks.filter((t) => t.id !== taskId); // new array that filters task that match taskId\n    if (next.length === baseTasks.length) {\n        return false;\n    } // nothing matched\n    baseTasks = next;\n    commit();\n    return true;\n}\n\n\n//# sourceURL=webpack://alttp/./app/store.ts?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModals: () => (/* binding */ initModals),\n/* harmony export */   modalDisplay: () => (/* binding */ modalDisplay)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n// ui/modal.ts\n\nfunction modalDisplay(dialog, display) {\n    if (!display) {\n        dialog.close();\n    }\n    else {\n        dialog.showModal();\n        dialog.focus(); // moves focus to the dialog panel itself, not the close button\n    }\n}\nfunction initModals() {\n    // these \"close\" don't use the modalDisplay() that we defined. Maybe worth fixing later\n    // close buttons\n    ;(0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-close-dialog]\").forEach((btn) => {\n        btn.addEventListener(\"click\", () => { var _a; return (_a = btn.closest(\"dialog\")) === null || _a === void 0 ? void 0 : _a.close(); });\n    });\n    // click-on-backdrop-to-close\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"dialog\").forEach((dialog) => {\n        dialog.addEventListener(\"click\", (e) => {\n            if (e.target !== dialog)\n                return; // ignore clicks on children\n            const rect = dialog.getBoundingClientRect();\n            const inBounds = e.clientX >= rect.left && e.clientX <= rect.right &&\n                e.clientY >= rect.top && e.clientY <= rect.bottom;\n            if (!inBounds)\n                dialog.close();\n        });\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/modal.ts?\n}");

/***/ },

/***/ "./app/ui/taskEditModal.ts"
/*!*********************************!*\
  !*** ./app/ui/taskEditModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskEditModals: () => (/* binding */ initTaskEditModals),\n/* harmony export */   openEditModal: () => (/* binding */ openEditModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/store */ \"./app/store.ts\");\n\n\n\nconst editForm = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-form\");\nconst editFormTitle = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"edit-modal-title\");\nconst editWindow = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-edit-dialog\");\nconst editPanels = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-edit-panel]\", editForm);\nconst typeToggleButtons = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\"[data-item-type]\");\n// mapping for the titles that will be displayed in each mode\nconst MODE_TITLES = {\n    \"new-task\": \"New task\",\n    \"new-instance\": \"New instance\",\n    \"edit-base-task\": \"Edit base task\",\n    \"edit-instance\": \"Edit instance\"\n};\n// mapping for the fields that will be displayed in each mode\nconst MODE_PANELS = {\n    \"new-task\": [\"base-task\", \"instance\"],\n    \"new-instance\": [\"instance\"],\n    \"edit-base-task\": [\"base-task\"],\n    \"edit-instance\": [\"instance\"]\n};\nlet editingContext = null;\n// toggles between task and event. checks if the element matches the type being selected.\nfunction setItemType(type) {\n    typeToggleButtons.forEach((btn) => {\n        btn.classList.toggle(\"is-active\", btn.dataset.itemType === type);\n    });\n}\n// sets the form into the targeted form to display relevant data fields.\nfunction setFormMode(mode) {\n    const visible = MODE_PANELS[mode];\n    editPanels.forEach((section) => {\n        const isRelevant = visible.includes(section.dataset.editPanel);\n        section.hidden = !isRelevant;\n        section.disabled = !isRelevant;\n    });\n}\n// ========================\n// Public\n// ========================\nfunction openEditModal(context) {\n    editingContext = context;\n    editFormTitle.textContent = MODE_TITLES[context.mode];\n    setFormMode(context.mode);\n    // TODO: Populate form\n    (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, true);\n}\nfunction initTaskEditModals() {\n    typeToggleButtons.forEach((btn) => {\n        btn.addEventListener(\"click\", () => setItemType(btn.dataset.itemType));\n    });\n    // Forms don't actually submit anywhere yet — just close on \"Save\".\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        if (!editingContext)\n            return;\n        const data = Object.fromEntries(new FormData(form));\n        switch (editingContext.mode) {\n            case \"new-task\": {\n                // No IDs anywhere, so the store creates the task and its first occurrence.\n                const created = (0,app_store__WEBPACK_IMPORTED_MODULE_2__.saveTask)({\n                    title: data[\"base-title\"],\n                    description: data[\"base-description\"],\n                    duration: parseDuration(data[\"base-duration\"]),\n                    priority: data[\"base-priority\"],\n                    occurrences: [\n                        {\n                            date: data[\"instance-date\"],\n                            start: data[\"instance-start\"],\n                            end: data[\"instance-end\"],\n                            repeat: data[\"instance-repeat\"],\n                        },\n                    ],\n                });\n                openViewModal(created.id); // the returned task has its new ID\n                break;\n            }\n            case \"edit-base-task\": {\n                // Fresh read, change only the base fields, pass occurrences through untouched.\n                const current = (0,app_store__WEBPACK_IMPORTED_MODULE_2__.getTask)(editingContext.taskId);\n                (0,app_store__WEBPACK_IMPORTED_MODULE_2__.saveTask)({\n                    ...current,\n                    title: data[\"base-title\"],\n                    description: data[\"base-description\"],\n                    duration: parseDuration(data[\"base-duration\"]),\n                    priority: data[\"base-priority\"],\n                });\n                break;\n            }\n            case \"edit-instance\": {\n                // Replace one occurrence, leave the base fields and other occurrences alone.\n                const current = (0,app_store__WEBPACK_IMPORTED_MODULE_2__.getTask)(editingContext.taskId);\n                (0,app_store__WEBPACK_IMPORTED_MODULE_2__.saveTask)({\n                    ...current,\n                    occurrences: current.occurrences.map((o) => o.id === editingContext.occurrenceId\n                        ? {\n                            ...o,\n                            date: data[\"instance-date\"],\n                            start: data[\"instance-start\"],\n                            end: data[\"instance-end\"],\n                            repeat: data[\"instance-repeat\"],\n                        }\n                        : o),\n                });\n                break;\n            }\n        }\n        editingContext = null;\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_1__.modalDisplay)(editWindow, false);\n    });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskEditModal.ts?\n}");

/***/ },

/***/ "./app/ui/taskViewModal.ts"
/*!*********************************!*\
  !*** ./app/ui/taskViewModal.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTaskViewModals: () => (/* binding */ initTaskViewModals),\n/* harmony export */   openViewModal: () => (/* binding */ openViewModal)\n/* harmony export */ });\n/* harmony import */ var app_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dom */ \"./app/dom.ts\");\n/* harmony import */ var app_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/priority */ \"./app/priority.ts\");\n/* harmony import */ var app_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/format */ \"./app/format.ts\");\n/* harmony import */ var app_ui_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/modal */ \"./app/ui/modal.ts\");\n/* harmony import */ var app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/ui/taskEditModal */ \"./app/ui/taskEditModal.ts\");\n\n\n\n\n\n// the view overlay window\nconst viewOverlay = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"task-view-dialog\");\n// fields of the task that will be populated\nconst instanceScheduleEl = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-instance-schedule\");\nconst baseTitleEl = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-title\");\nconst baseDescriptionEl = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-description\");\nconst baseDurationEl = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-duration\");\nconst basePriorityEl = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireElementById)(\"view-base-priority\");\nconst priorityLabel = (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)(\".priority-label\", basePriorityEl);\n// stores the key to the scheduled task value.\nlet veiwingKey = null; // ScheduledTaskKey: { \"taskId\": string, \"occurrenceId\": string, \"start\": number(timestamp)}\nfunction renderViewModal() {\n    if (!viewingKey) {\n        return false;\n    } // Guard so I don't pass null to findScheduledTask\n    const scheduled = findScheduledTask(viewingKey); // store lookup, fresh every time\n    const task = getTask(viewingKey.taskId);\n    if (!scheduled || !task) {\n        return false;\n    } // deleted, or no longer on that date\n    // Instance part (what's on the calendar)\n    instanceScheduleEl.textContent = (0,app_format__WEBPACK_IMPORTED_MODULE_2__.formatSchedule)(scheduled.start, scheduled.end);\n    // Base task part\n    baseTitleEl.textContent = task.title;\n    baseDescriptionEl.textContent = task.description;\n    baseDurationEl.textContent = (0,app_format__WEBPACK_IMPORTED_MODULE_2__.formatDuration)(task.duration);\n    const priorityData = (0,app_priority__WEBPACK_IMPORTED_MODULE_1__.priorityInfo)(task.priority);\n    basePriorityEl.dataset.priority = priorityData.key; // set the priority\n    priorityLabel.textContent = priorityData.label; // display the priority\n    return true; // render successful\n}\n// =====================\n// Public\n// =====================\nfunction openViewModal(key) {\n    viewingKey = key;\n    if (!renderViewModal()) {\n        viewingKey = null;\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_3__.modalDisplay)(viewOverlay, false);\n    }\n    ;(0,app_ui_modal__WEBPACK_IMPORTED_MODULE_3__.modalDisplay)(viewOverlay, true);\n}\nfunction initTaskViewModals() {\n    ;(0,app_dom__WEBPACK_IMPORTED_MODULE_0__.queryAll)(\".event-chip\").forEach((chip) => {\n        chip.addEventListener(\"click\", () => openViewModal(chip));\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-base-task\"]').addEventListener(\"click\", () => {\n        if (viewingKey) {\n            (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_4__.openEditModal)({ mode: \"edit-base-task\", taskId: veiwingKey.taskId });\n        }\n        else {\n            console.log(\"SheduledTaskKey not found.\");\n        }\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"new-instance\"]').addEventListener(\"click\", () => {\n        if (viewingKey) {\n            (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_4__.openEditModal)({ mode: \"new-instance\", taskId: veiwingKey.taskId });\n        }\n        else {\n            console.log(\"SheduledTaskKey not found.\");\n        }\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"edit-instance\"]').addEventListener(\"click\", () => {\n        if (viewingKey) {\n            (0,app_ui_taskEditModal__WEBPACK_IMPORTED_MODULE_4__.openEditModal)({ mode: \"edit-instance\", taskId: veiwingKey.taskId, occurrenceId: veiwingKey.occurrenceId });\n        }\n        else {\n            console.log(\"SheduledTaskKey not found.\");\n        }\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-instance\"]').addEventListener(\"click\", () => {\n        console.log(\"TODO: delete instance\", viewOverlay.dataset.instanceId);\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_3__.modalDisplay)(viewOverlay, false);\n    });\n    (0,app_dom__WEBPACK_IMPORTED_MODULE_0__.requireQuery)('[data-action=\"delete-base-task\"]').addEventListener(\"click\", () => {\n        console.log(\"TODO: delete base task\", viewOverlay.dataset.taskId);\n        (0,app_ui_modal__WEBPACK_IMPORTED_MODULE_3__.modalDisplay)(viewOverlay, false);\n    });\n    viewOverlay.addEventListener(\"close\", () => { viewingKey = null; });\n}\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskViewModal.ts?\n}");

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