import { requireElementById, requireQuery, queryAll } from 'app/dom';
import { PRIORIES, priorityInfo } from 'app/priority';
import { formatDuration, formatSchedule } from 'app/format';
import { onChange } from 'app/store';

import { modalDisplay } from 'app/ui/modal';
import { openEditModal } from 'app/ui/taskEditModal';

// the view overlay window
const viewOverlay = requireElementById<dialog>("task-view-dialog");

// fields of the task that will be populated
const instanceScheduleEl = requireElementById("view-instance-schedule");
const baseTitleEl = requireElementById("view-base-title");
const baseDescriptionEl = requireElementById("view-base-description");
const baseDurationEl = requireElementById("view-base-duration");
const basePriorityEl = requireElementById("view-base-priority");
const priorityLabel = requireQuery(".priority-label", basePriorityEl);


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


// =====================
// Public
// =====================


export function openViewModal(key: ScheduledTaskKey): void {
  viewingKey = key;
  if (!renderViewModal()) {
    viewingKey = null;
    modalDisplay(viewOverlay, false);
  }
  modalDisplay(viewOverlay, true);
}

export function initTaskViewModals(): void {
  queryAll(".event-chip").forEach((chip) => {
    chip.addEventListener("click", () => openViewModal(chip));
  });

  requireQuery('[data-action="edit-base-task"]').addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "edit-base-task",  taskId: veiwingKey.taskId }); }
    else { console.log("SheduledTaskKey not found.") }
  });
  requireQuery('[data-action="new-instance"]').addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "new-instance",  taskId: veiwingKey.taskId }); }
    else { console.log("SheduledTaskKey not found.") }
  });
  requireQuery('[data-action="edit-instance"]').addEventListener("click", () => {
    if (viewingKey) { openEditModal({ mode: "edit-instance",  taskId: veiwingKey.taskId, occurrenceId: veiwingKey.occurrenceId }); }
    else { console.log("SheduledTaskKey not found.") }
  });

  requireQuery('[data-action="delete-instance"]').addEventListener("click", () => {
    console.log("TODO: delete instance", viewOverlay.dataset.instanceId);
    modalDisplay(viewOverlay, false);
  });
  requireQuery('[data-action="delete-base-task"]').addEventListener("click", () => {
    console.log("TODO: delete base task", viewOverlay.dataset.taskId);
    modalDisplay(viewOverlay, false);
  });

  viewOverlay.addEventListener("close", () => { viewingKey = null; });
}