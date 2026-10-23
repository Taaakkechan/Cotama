import { requireElementById, requireQuery, queryAll } from 'app/dom';
import { PRIORIES, priorityInfo } from 'app/priority';
import { formatDuration, formatSchedule } from 'app/format';
import { onChange } from 'app/store';

import { modalDisplay } from 'app/ui/modal';
import { openEditModal } from 'app/ui/taskEditModal';

// the view window
const viewWindow = requireElementById<dialog>("task-view-dialog");

// fields of the task that will be populated
const instanceScheduleEl = requireElementById("view-instance-schedule");
const baseTitleEl = requireElementById("view-base-title");
const baseDescriptionEl = requireElementById("view-base-description");
const baseDurationEl = requireElementById("view-base-duration");
const basePriorityEl = requireElementById("view-base-priority");
const priorityLabel = requireQuery(".priority-label", basePriorityEl);

const eventChips = queryAll(".event-chip");

// buttons
const newTaskBtn = requireElementById("new-task-btn");
const editBaseTaskBtn = requireQuery('[data-action="edit-base-task"]');
const newInstanceBtn = requireQuery('[data-action="new-instance"]');
const editInstanceBtn = requireQuery('[data-action="edit-instance"]');
const deleteBaseTaskBtn = requireQuery('[data-action="delete-base-task"]');
const deleteInstanceBtn = requireQuery('[data-action="delete-instance"]');


// stores the key to the scheduled task value.
let veiwingKey: ScheduledTaskKey | null = null; // ScheduledTaskKey: { "taskId": string, "occurrenceId": string, "start": number(timestamp)}

function renderViewModal(): boolean {

  if (!viewingKey) { return false; } // Guard so I don't pass null to findScheduledTask

  const scheduled = findScheduledTask(viewingKey);   // store lookup, fresh every time
  const task = getTask(viewingKey.taskId);

  if (!scheduled || !task) { return false; }         // deleted, or no longer on that date

  // Instance part (what's on the calendar)
  instanceScheduleEl.textContent = formatSchedule(scheduled.start, scheduled.end);

  // Base task part
  baseTitleEl.textContent = task.title;
  baseDescriptionEl.textContent = task.description;
  baseDurationEl.textContent = formatDuration(task.duration);

  const priorityData = priorityInfo(task.priority);  
  basePriorityEl.dataset.priority = priorityData.key;       // set the priority
  priorityLabel.textContent = priorityData.label;           // display the priority
  
  return true;            // render successful
}

onChange(() => {
  if (!viewWindow.open) { return; } // nothing to refresh while closed
  if (!renderViewModal()) { modalDisplay(viewWindow, false); } // the item vanished while open
});

// =====================
// Public
// =====================

// need this function for udpating the key after editing the task (start time, occurrenceId)
export function setViewingKey(key: ScheduledTaskKey): void {
  viewingKey = key;          // only sets the key, no render
}

export function openViewModal(key: ScheduledTaskKey): void {
  setViewingKey(key);
  if (!renderViewModal()) {
    viewingKey = null;
    modalDisplay(viewWindow, false);
  }
  modalDisplay(viewWindow, true);
}

export function initTaskViewModals(): void {

  eventChips.forEach((chip) => {
    // TODO: extract data from chip to key?
    chip.addEventListener("click", () => openViewModal(chip));
  });
  newTaskBtn.addEventListener("click", () => {
    openEditModal({ mode:"new-task" });
  });

  editBaseTaskBtn.addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "edit-base-task",  taskId: veiwingKey.taskId }); }
    else { console.log("SheduledTaskKey not found.") }
  });
  newInstanceBtn.addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "new-instance",  taskId: veiwingKey.taskId }); }
    else { console.log("SheduledTaskKey not found.") }
  });
  editInstanceBtn.addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "edit-instance",  taskId: veiwingKey.taskId, occurrenceId: veiwingKey.occurrenceId }); }
    else { console.log("SheduledTaskKey not found.") }
  });

  deleteBaseTaskBtn.addEventListener("click", () => {
    console.log("TODO: delete base task", viewWindow.dataset.taskId);
    modalDisplay(viewWindow, false);
  });
  deleteInstanceBtn.addEventListener("click", () => {
    console.log("TODO: delete instance", viewWindow.dataset.instanceId);
    modalDisplay(viewWindow, false);
  });
 

  viewWindow.addEventListener("close", () => { viewingKey = null; });
}