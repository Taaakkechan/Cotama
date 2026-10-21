import { requireElementById, queryAll } from 'app/dom';
import { modalDisplay } from 'app/ui/modal';

const editForm = requireElementById("task-edit-form");
const editWindow = requireElementById("task-edit-dialog");
const editPanels = queryAll("[data-edit-panel]");
const typeToggleButtons = queryAll("[data-item-type]");

let currentMode = "new-task"; // "new-task" | "instance" | "base-task"

// toggles between task and event. checks if the element matches the type being selected.
function setItemType(type: string): void {
  typeToggleButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.itemType === type);
  });
}


// sets the form into the targeted form to display relevant data fields.
function setFormMode(mode: "new-task"|"instance"|"base-task"): void {
  
  currentMode = mode; // updates current mode

  queryAll("[data-edit-panel]", editForm).forEach((section) => {
    // if new task every field isRelevant so all of them show up. Otherwise, check and set each field
    const isRelevant = mode === "new-task" || section.dataset.editPanel === mode;
    section.hidden = !isRelevant;
    section.disabled = !isRelevant;
  });
}

// ========================
// Public
// ========================

export function openEditModal({ mode, isNew = false } = {}): void {
  requireElementById("edit-modal-title").textContent = isNew ? "New task" : "Edit task";
  setFormMode(mode);
  modalDisplay(editWindow, true);
  // TODO: populate the two forms above from the selected task/instance,
  // or leave them blank when isNew is true.
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
    } else if (currentMode === "instance") {
      console.log("TODO: save instance only", data);
    } else if (currentMode === "base-task") {
      console.log("TODO: save base task only", data);
    }
  });
}