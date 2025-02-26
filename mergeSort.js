const merge = (array, low, high, upperBound) => {
	const workspace = []

	let i = 0
	let lowerBound = low
	let mid = high - 1
	let n = upperBound - lowerBound + 1

	while (low <= mid && high <= upperBound) {
		if (array[low] < array[high]) {
			workspace[i++] = array[low++]
		} else {
			workspace[i++] = array[high++]
		}
	}

	while (low <= mid) {
		workspace[i++] = array[low++]
	}

	while (high <= upperBound) {
		workspace[i++] = array[high++]
	}

	for (i = 0; i < n; i++) {
		array[lowerBound + i] = workspace[i]
	}
}

const recursiveMergeSort = (array, left, right) => {
	if (left === right) return

	const mid = Math.floor((right + left) / 2)

	recursiveMergeSort(array, left, mid)

	recursiveMergeSort(array, mid + 1, right)

	merge(array, left, mid + 1, right)
}

const mergeSort = array => {
	if (array.length === 0) return array

	recursiveMergeSort(array, 0, array.length - 1)
	return array
}

export {
	mergeSort
}
