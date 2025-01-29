const bubbleSort = array => {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				let temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	return array
}

const selectionSort = array => {
	for (let i = 0; i < array.length; i++) {
		let min = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) min = j
		}

		if (min !== i) {
			let temp = array[i]
			array[i] = array[min]
			array[min] = temp
		}
	}
	return array
}

const insertionSort = array => {
	for (let i = 1; i < array.length; i++) {
		const temp = array[i]
		let j = i

		while (j > 0 && temp < array[j - 1]) {
			array[j] = array[j - 1]
			j--
		}

		array[j] = temp
	}
	return array
}

export {
	bubbleSort,
	selectionSort,
	insertionSort
}