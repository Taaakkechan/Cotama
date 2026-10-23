export function formatSchedule(start: number, end: number): string {

  const s = new Date(start);
  const e = new Date(end);

  // mini helper functions for the formatting
  const day = (d: Date) => d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  const time = (d: Date) => d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  return `${day(s)} · ${time(s)} – ${time(e)} · ${day(e)}`;
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  // && returns the left side if false. || returns the right side if false.
  // In this case when h is 0, it returns 0. If h is 1, it returns "1 hr".
  // So this part filters out any "0"s (Which are also Boolean by itself)
  return [h && `${h} hr`, m && `${m} min`].filter(Boolean).join(" ") || "0 min";
}