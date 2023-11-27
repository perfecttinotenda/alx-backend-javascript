// Here we will use a const to instantiate a constant var in taskFirst
export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

export function getLast() {
	return ' is okay';
}

// Here we will be using let to instantiate a var that may be reassigned in taskNext
export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();
	
	return combination;
}

