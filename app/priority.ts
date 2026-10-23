export const PRIORITIES: readonly { value: Priority; key: string; label: string }[] = [
  { value: 1, key: "low",    label: "Low" },
  { value: 2, key: "medium", label: "Medium" },
  { value: 3, key: "high",   label: "High" },
  { value: 4, key: "urgent", label: "Urgent" },
];

export function priorityInfo(p: Priority) {
  return PRIORITIES.find((x) => x.value === p)!;
}