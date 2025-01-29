class OrderedArray {
	#array = []

	constructor(array) {
		this.#array = array
	}

	#_find(value) {
		if (this.#array.length === 0) return {
			value: value,
			index: -1
		}

		let left = 0
		let right = this.#array.length - 1

		if (this.#array.length % 2 === 0) {
			const centerLeft = Math.floor((right + left) / 2)
			const centerLeftValue = this.#array[centerLeft]
			const centerRight = Math.ceil((right + left) / 2)
			const centerRightValue = this.#array[centerRight]

			if (value === centerLeftValue) return {
				value: centerLeftValue,
				index: centerLeft
			}
			if (value === centerRightValue) return {
				value: centerRightValue,
				index: centerRight
			}

			if (value < centerLeftValue) right = centerLeft - 1
			else if (value > centerRightValue) left = centerRight + 1
			else throw new Error(`Unrecognized array value: ${value}`)
		}

		while (right >= left) {
			const center = Math.floor((right + left) / 2)
			const centerValue = this.#array[center]

			if (value < centerValue) right = center - 1
			else if (value > centerValue) left = center + 1
			else return {
					value,
					index: center
				}
		}

		return {
			value,
			index: -1
		}
	}

	find(value) {
		const found = this.#_find(value)

		return found.index !== -1;
	}

	findIndex(value) {
		const found = this.#_find(value)

		return found.index
	}

	add(value) {
		const length = this.#array.length

		if (length === 0) {
			this.#array.push(value)
			return
		}

		if (this.#array[0] > value) {
			this.#array.unshift(value)
			return
		}

		if (this.#array[length - 1] < value) {
			this.#array.push(value)
			return
		}

		let addedIndex = null
		let tempValue = null
		for (let i = 0; i <= length; i++) {
			const currentValue = this.#array[i]
			const nextValue = this.#array[i + 1] ?? value

			if (addedIndex !== null) {
				const newValue = tempValue
				tempValue = currentValue

				this.#array[i] = newValue
				continue
			}

			if (value === currentValue || (value > currentValue && value < nextValue)) {
				tempValue = this.#array[i]
				addedIndex = i
			}
		}

		this.#array[addedIndex ?? 0] = value
	}

	delete(value) {
		let length = this.#array.length

		let removed = false
		for (let i = 0; i < length; i++) {
			if (removed) {
				this.#array[i - 1] = this.#array[i]
				continue
			}

			const currentValue = this.#array[i]
			if (currentValue === value) {
				removed = true
			}
		}

		if (removed) {
			this.#array.pop()
		}
	}

	print() {
		for (const item of this.#array) {
			console.log(item)
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.#array) {
			yield item
		}
	}
}

export default OrderedArray