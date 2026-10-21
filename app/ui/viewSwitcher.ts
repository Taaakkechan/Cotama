import { requireElementById, queryAll } from 'app/dom';


const body = document.body;
const viewButtons = queryAll("[data-view-btn]");
const viewPanels = queryAll("[data-view-panel]");


type View = "month" | "week" | "day";

function isView(value: string | undefined): value is View {
  return value === "month" || value === "week" || value === "day";
}

function setView(view: View): void {
  body.dataset.view = view;

  viewButtons.forEach((btn) => {
    const isActive = btn.dataset.viewBtn === view;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  viewPanels.forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });
}

//===============
//Public
//===============

export function initViewSwitcher(): void {  

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.viewBtn;
      if (isView(view)) { setView(view); }
    });
  });

  // Prev/next/today are stubs — hook these into your own date logic.
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