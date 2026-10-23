// ui/header.ts
import { requireElementById } from "app/dom";

import { openEditModal } from "app/ui/taskEditModal";

export function initHeader(): void {

  requireElementById("prev-period").addEventListener("click", () => {
    console.log("TODO: move to previous period and re-render the calendar");
  });
  requireElementById("next-period").addEventListener("click", () => {
    console.log("TODO: move to next period and re-render the calendar");
  });
  requireElementById("today-btn").addEventListener("click", () => {
    console.log("TODO: jump back to today and re-render the calendar");
  });
}