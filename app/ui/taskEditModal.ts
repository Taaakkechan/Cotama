import { requireElementById, queryAll } from 'app/dom';

import { modalDisplay } from 'app/ui/modal';


const editForm = requireElementById("task-edit-form");
const editWindow = requireElementById("task-edit-dialog");
const editPanels = queryAll("[data-edit-panel]");
const typeToggleButtons = queryAll("[data-item-type]");

type EditMode = "new-task" | "new-instance" | "edit-instance" | "edit-base-task";

type Panel = "instance" | "base-task";

const MODE_TITLES: Record<EditMode, string> = {
  "new-task": "New task",
  "new-instance": "New instance",
  "edit-instance": "Edit instance",
  "edit-base-task": "Edit base task",
};

const MODE_PANELS: Record<EditMode, Panel[]> = {
  "new-task": ["base-task", "instance"],
  "new-instance": ["instance"],
  "edit-instance": ["instance"],
  "edit-base-task": ["base-task"],
};

let currentMode = "new-task" as EditMode;

// toggles between task and event. checks if the element matches the type being selected.
function setItemType(type: string): void {
  typeToggleButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.itemType === type);
  });
}


// sets the form into the targeted form to display relevant data fields.
function setFormMode(mode: EditMode): void {
  currentMode = mode;
  const visible = MODE_PANELS[mode];
  queryAll<HTMLFieldSetElement>("[data-edit-panel]", editForm).forEach((section) => {
    const isRelevant = visible.includes(section.dataset.editPanel as Panel);
    section.hidden = !isRelevant;
    section.disabled = !isRelevant;
  });
}

// ========================
// Public
// ========================


export function openEditModal(mode: EditMode): void {
  requireElementById("edit-modal-title").textContent = MODE_TITLES[mode];
  setFormMode(mode);
  modalDisplay(editWindow, true);
}
export function initTaskEditModals(): void {

  typeToggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => setItemType(btn.dataset.itemType));
  });
  // Forms don't actually submit anywhere yet — just close on "Save".

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    modalDisplay(editWindow, false);

    if (currentMode === "new-task") {
      console.log("TODO: create base task + first instance", data);
    } else if (currentMode === "edit-instance") {
      console.log("TODO: save instance only", data);
    } else if (currentMode === "edit-base-task") {
      console.log("TODO: save base task only", data);
    }
  });
}