// ui/modal.ts
import { queryAll } from "app/dom";

export function modalDisplay(dialog: HTMLDialogElement, display: boolean): void {
  if (!display) { dialog.close(); }
  else {
    dialog.showModal();
    dialog.focus(); // moves focus to the dialog panel itself, not the close button
  }
}

export function initModals(): void {

  // these "close" don't use the modalDisplay() that we defined. Maybe worth fixing later
  // close buttons
  queryAll("[data-close-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest("dialog")?.close());
  });

  // click-on-backdrop-to-close
  queryAll<HTMLDialogElement>("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (e) => {
      if (e.target !== dialog) return; // ignore clicks on children
      const rect = dialog.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inBounds) dialog.close();
    });
  });
}