import { requireElementById, requireQuery, queryAll } from 'app/dom';

import { modalDisplay } from 'app/ui/modal';
import { openEditModal } from 'app/ui/taskEditModal';

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  urgent: "Urgent",
};

const viewOverlay = requireElementById<dialog>("task-view-dialog");

// =====================
// Public
// =====================

export function openViewModal(chip: HTMLElement) {
  const d = chip.dataset;

  requireElementById("view-instance-title").textContent = d.instanceTitle || d.baseTitle;
  requireElementById("view-instance-schedule").innerHTML = d.instanceTime || "";

  requireElementById("view-base-title").textContent = d.baseTitle;
  requireElementById("view-base-description").textContent = d.baseDescription || "";
  requireElementById("view-base-duration").textContent = d.baseDuration || "";

  // TODO: remove the meta chip and make it work with real chips
  // const priorityEl = requireElementById("view-base-priority");
  // priorityEl.dataset.priority = d.basePriority;

  // priorityEl.lastChild.textContent = PRIORITY_LABELS[d.basePriority];

  // Stash the current task/instance ids on the overlay so the edit
  // buttons below know what they're acting on.
  // TODO: move this part to a separate object in ts that keeps track of task object.
  viewOverlay.dataset.taskId = d.taskId;
  viewOverlay.dataset.instanceId = d.instanceId;

  modalDisplay(viewOverlay, true);
}

export function initTaskViewModals(): void {
  queryAll(".event-chip").forEach((chip) => {
    chip.addEventListener("click", () => openViewModal(chip));
  });

  requireQuery('[data-action="edit-instance"]').addEventListener("click", () => {
    openEditModal({ mode: "instance" });
  });
  requireQuery('[data-action="edit-base-task"]').addEventListener("click", () => {
    openEditModal({ mode: "base-task" });
  });
  requireQuery('[data-action="new-instance"]').addEventListener("click", () => {
    openEditModal({ mode: "instance", isNew: true });
  });
  requireQuery('[data-action="delete-instance"]').addEventListener("click", () => {
    console.log("TODO: delete instance", viewOverlay.dataset.instanceId);
    modalDisplay(viewOverlay, false);
  });
  requireQuery('[data-action="delete-base-task"]').addEventListener("click", () => {
    console.log("TODO: delete base task", viewOverlay.dataset.taskId);
    modalDisplay(viewOverlay, false);
  });
}