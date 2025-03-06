const shellSort = array => {
	let inner, outer
	let h = 1
	while (h < array.length / 3) {
		h = h * 3 + 1
	}

	while (h > 0) {
		for (outer = h; outer < array.length; outer++) {
			const temp = array[outer]
			inner = outer

			while (inner > h - 1 && array[inner - h] > temp) {
				array[inner] = array[inner - h]
				inner -= h
			}

			array[inner] = temp
		}

		h = (h - 1) / 3
	}


	return array
}

export default shellSort