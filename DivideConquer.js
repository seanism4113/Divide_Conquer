// ## **countZeroes**
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called ***countZeroes***, which returns the valber of zeroes in the array.
// **Constraints**:
// Time Complexity: O(log N)

function countZeroes(arr) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let firstZeroIndex = -1;

	while (leftIndex <= rightIndex) {
		const midIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[midIndex] === 0) {
			firstZeroIndex = midIndex;
			rightIndex = midIndex - 1;
		} else {
			leftIndex = midIndex + 1;
		}
	}

	if (firstZeroIndex === -1) {
		return 0;
	}
	return arr.length - firstZeroIndex;
}

// ## **sortedFrequency**
// Given a sorted array and a valber, write a function
// called ***sortedFrequency*** that counts the occurrences of the valber in the array
// **Constraints**:
// Time Complexity: O(log N)

function sortedFrequency(arr, val) {
	function firstValIndex(arr, val) {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;
		let firstValIndex = -1;

		while (leftIndex <= rightIndex) {
			let midIndex = Math.floor((leftIndex + rightIndex) / 2);

			if (arr[midIndex] === val) {
				firstValIndex = midIndex;
				rightIndex = midIndex - 1;
			} else if (arr[midIndex] < val) {
				leftIndex = midIndex + 1;
			} else {
				rightIndex = midIndex - 1;
			}
		}

		return firstValIndex;
	}

	function lastValIndex(arr, val) {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;
		let lastValIndex = -1;

		while (leftIndex <= rightIndex) {
			let midIndex = Math.floor((leftIndex + rightIndex) / 2);

			if (arr[midIndex] === val) {
				lastValIndex = midIndex;
				leftIndex = midIndex + 1;
			} else if (arr[midIndex] < val) {
				leftIndex = midIndex + 1;
			} else {
				rightIndex = midIndex - 1;
			}
		}

		return lastValIndex;
	}

	let firstIndex = firstValIndex(arr, val);
	if (firstIndex === -1) return 0;

	let lastIndex = lastValIndex(arr, val);

	return lastIndex - firstIndex + 1;
}

// ## **findRotatedIndex**
// Write a function called ***findRotatedIndex*** which accepts a rotated
// array of sorted valbers and an integer. The function should return the index of val
// in the array. If the value is not found, return -1.
// **Constraints**:
// Time Complexity: O(log N)

function findRotatedIndex(arr, val) {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	// Find the point of the rotation
	while (startIndex < endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		if (arr[midIndex] > arr[endIndex]) {
			startIndex = midIndex + 1;
		} else {
			endIndex = midIndex;
		}
	}

	let pivot = startIndex;
	startIndex = 0;
	endIndex = arr.length - 1;

	if (val >= arr[pivot] && val <= arr[endIndex]) {
		startIndex = pivot;
	} else {
		endIndex = pivot;
	}

	while (startIndex <= endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		if (arr[midIndex] === val) {
			return midIndex;
		} else if (arr[midIndex] < val) {
			startIndex = midIndex + 1;
		} else {
			endIndex = midIndex - 1;
		}
	}

	return -1;
}

//   ## **findRotationCount**
// Write a function called ***findRotationCount*** which accepts an array
// of distinct numbers sorted in increasing order. The array has been rotated
// counter-clockwise n number of times. Given such an array, find the value of n.
// **Constraints**:
// Time Complexity: O(log N)

function findRotationCount(arr) {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	// Find the point of the rotation
	while (startIndex < endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		if (arr[midIndex] > arr[endIndex]) {
			startIndex = midIndex + 1;
		} else {
			endIndex = midIndex;
		}
	}
	return startIndex;
}

// ## **findFloor**
// Write a function called ***findFloor*** which accepts a sorted array and a
// value x, and returns the floor of x in the array. The floor of x in an array
// is the largest element in the array which is smaller than or equal to x. If the floor
// does not exist, return -1.

function findFloor(arr, val) {
	let startIndex = 0;
	let endIndex = arr.length - 1;
	let floorValue = -1;

	while (startIndex <= endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2);

		if (arr[midIndex] === val) {
			return arr[midIndex];
		}
		if (arr[midIndex] < val) {
			floorValue = arr[midIndex];
			startIndex = midIndex + 1;
		} else {
			endIndex = midIndex - 1;
		}
	}
	return floorValue;
}
