import { initTask } from 'app/task';

import { loadData, saveData } from 'app/persistence';

const saved = loadData();

let baseTasks: BaseTask[] = saved.baseTasks;
let scheduledTasks: TaskInstance[] = [];

let nextTaskID = saved.nextTaskID;
let nextOccurrenceID = saved.nextOccurrenceID;

// Array of functions that should be called when the dataBase gets updated
type Listener = () => void;
const listeners: Listener[] = [];


function commit(): void {
  saveData({ version: 1, nextTaskId, nextOccerenceId, baseTasks });
  scheduledTasks = buildScheduledTasks(baseTasks, rangeStart, rangeEnd);
  listeners.forEach((fn) => fn());   // this line is what makes onChange work
}

function generateId(prefix: string): string {
  return `${prefix}-${nextId++}`;   // "task-8", "occ-21"
}


//=====================
// Public
//=====================


// allows us to push new functions to listeners.
export function onChange(fn: Listener): void {
  listeners.push(fn);
}

export function getTask(id: string): BaseTask {
	return baseTasks.find(task => task.id === id);
}

export function saveTask(input: TaskInput): BaseTask {
  const task: BaseTask = {
    ...input,
    id: input.id ?? generateId("task"),
    occurrences: input.occurrences.map((o) => ({
      ...o,
      id: o.id ?? generateId("occ"),
    })),
  };

  const index = baseTasks.findIndex((t) => t.id === task.id); // ouputs -1 if it cannot find id

  // Error checking: id exsisted but got deleted
  if (input.id !== undefined && index === -1) {
    throw new Error(`Cannot save task ${input.id}: it no longer exists`);
  }

  baseTasks =
    index === -1 // checks if new Id
      ? [...baseTasks, task] // append new task to the end
      : baseTasks.map((t, i) => (i === index ? task : t)); // .map((element, index)) creates a new array with new mapping

  commit();
  return task;
}

export function removeTask(taskId: string): boolean {
  const next = baseTasks.filter((t) => t.id !== taskId); // new array that filters task that match taskId
  if (next.length === baseTasks.length) { return false; } // nothing matched
  baseTasks = next;
  commit();
  return true;
}