// decided I don't need status for a calendar app
//type Status = 'scheduled' | 'pending' | 'none';

type Priority = 1 | 2 | 3 | 4;

interface BaseTask {
	id: string;
	//default task title
	title: string;
	description: string;
	duration: number;
	priority: Priority;
	occurrences: TaskOccurrence[];
	completed?: TaskOccurrence[];
}

interface TaskOccurrence {
	id: string;
	start: number;
	due: number;
	repeat: Repeat | null
	//doing dependancies is complicated is should be a project for another time
}

interface Repeat { 
	interval: numebr; 
	until?: number ;
}

interface ScheduledTask {
	taskId: string;
	occurrenceId: string;
	start: number;
	due: number;
	duration: number;
}

// use for taskViewModals for sharing the same source
// Pick<> means to contain all the properties to inherit.
type ScheduledTaskKey = Pick<ScheduledTask, "taskId" | "occurrenceId" | "start">;

// special type for having a task / occurrence that has no id or occurrences
type OccurrenceInput = Omit<Occurrence, "id"> & { id?: string };
type TaskInput = Omit<BaseTask, "id" | "occurrences"> & {
  id?: string;
  occurrences: OccurrenceInput[];
};
