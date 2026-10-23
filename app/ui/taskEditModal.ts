import { requireElementById, queryAll } from 'app/dom';

import { modalDisplay } from 'app/ui/modal';

import { saveTask, getTask } from 'app/store';


const editForm = requireElementById("task-edit-form");
const editFormTitle = requireElementById("edit-modal-title");
const editWindow = requireElementById("task-edit-dialog");

const editPanels = queryAll<HTMLFieldSetElement>("[data-edit-panel]", editForm);
const typeToggleButtons = queryAll("[data-item-type]");


type EditingContext = 
    { mode: "new-task" }
  | { mode: "new-instance"; taskId: string }
  | { mode: "edit-base-task"; taskId: string }
  | { mode: "edit-instance"; taskId: string; occurrenceId: string }

type EditMode = EditingContext["mode"];

type Panel = "instance" | "base-task";


// mapping for the titles that will be displayed in each mode
const MODE_TITLES: Record<EditMode, string> = {
  "new-task": "New task",
  "new-instance": "New instance",
    "edit-base-task": "Edit base task",
  "edit-instance": "Edit instance"
};

// mapping for the fields that will be displayed in each mode
const MODE_PANELS: Record<EditMode, Panel[]> = {
  "new-task": ["base-task", "instance"],
  "new-instance": ["instance"],
  "edit-base-task": ["base-task"],
  "edit-instance": ["instance"]
};


let editingContext: EditingContext | null = null;

// toggles between task and event. checks if the element matches the type being selected.
function setItemType(type: string): void {
  typeToggleButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.itemType === type);
  });
}


// sets the form into the targeted form to display relevant data fields.
function setFormMode(mode: EditMode): void {
  const visible = MODE_PANELS[mode];
  editPanels.forEach((section) => {
    const isRelevant = visible.includes(section.dataset.editPanel as Panel);
    section.hidden = !isRelevant;
    section.disabled = !isRelevant;
  });
}

// ========================
// Public
// ========================


export function openEditModal(context: EditingContext): void {

  editingContext = context;
  editFormTitle.textContent = MODE_TITLES[context.mode];
  setFormMode(context.mode);
  // TODO: Populate form
  modalDisplay(editWindow, true);
}
export function initTaskEditModals(): void {

  typeToggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => setItemType(btn.dataset.itemType));
  });
  
  // Forms don't actually submit anywhere yet — just close on "Save".
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!editingContext) return;

    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    switch (editingContext.mode) {
      case "new-task": {
        // No IDs anywhere, so the store creates the task and its first occurrence.
        const created = saveTask({
          title: data["base-title"],
          description: data["base-description"],
          duration: parseDuration(data["base-duration"]),
          priority: data["base-priority"] as Priority,
          occurrences: [
            {
              date: data["instance-date"],
              start: data["instance-start"],
              end: data["instance-end"],
              repeat: data["instance-repeat"] as Repeat,
            },
          ],
        });
        openViewModal(created.id);   // the returned task has its new ID
        break;
      }

      case "edit-base-task": {
        // Fresh read, change only the base fields, pass occurrences through untouched.
        const current = getTask(editingContext.taskId!);
        saveTask({
          ...current,
          title: data["base-title"],
          description: data["base-description"],
          duration: parseDuration(data["base-duration"]),
          priority: data["base-priority"] as Priority,
        });
        break;
      }

      case "edit-instance": {
        // Replace one occurrence, leave the base fields and other occurrences alone.
        const current = getTask(editingContext.taskId!);
        saveTask({
          ...current,
          occurrences: current.occurrences.map((o) =>
            o.id === editingContext!.occurrenceId
              ? {
                  ...o,
                  date: data["instance-date"],
                  start: data["instance-start"],
                  end: data["instance-end"],
                  repeat: data["instance-repeat"] as Repeat,
                }
              : o,
          ),
        });
        break;
      }
    }

    editingContext = null;
    modalDisplay(editWindow, false);
  });
}