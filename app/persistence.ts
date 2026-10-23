interface SavedData {
	version: 1;
	nextTaskId: number;
	nextOccurrenceId: number;
	baseTasks: BaseTasks[];
}

export function loadData(): SavedData {
  try {
    const raw = localStorage.getItem("calendar.data");
    if (raw) { 
    	console.log("data loaded");
    	// TODO: check the nextId's and update them incase of bad saves
    	return JSON.parse(raw) as SavedData; 
    }
  } catch {
    // corrupted save: fall through to the empty default
  }
  console.log("initiated data");
  return { version: 1, nextTaskId: 1, nextOccerenceId: 1, baseTasks: [] };
}

export function clearSavedData(): void {
	localStorage.removeItem("savedData");
}

export function saveData(data: SavedData): void {
  localStorage.setItem("calendar.data", JSON.stringify(data));
}