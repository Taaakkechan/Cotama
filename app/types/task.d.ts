// decided I don't need status for a calendar app
//type Status = 'scheduled' | 'pending' | 'none';

type Priority = "low" | "medium" | "high" | "Urgent";

interface Task {
	id: number
	//default task title
	title: string
	description: string
	duration: number
	priority: Priority
	occurrences: TaskOccurrence[]
	completed?: TaskOccurrence[]
}

interface TaskOccurrence {
	id: string
	//occurrence specific task title, defaults to original task title
	title?: string
	start: number
	due: number
	repeating?: RepeatingItem
	//doing dependancies is complicated is should be a project for another time
}

interface RepeatingItem {
	freq: number
	end?: number
}

interface TaskInstance {
	occurrenceID: string
	start: number
	due: number
}
