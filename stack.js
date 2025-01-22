class Stack {
	#array = []

	add(value) {
		this.#array.unshift(value)
	}

	pop() {
		return this.#array.shift()
	}

	peek() {
		return this.#array[0]
	}

	isEmpty() {
		return this.#array.length === 0
	}
}

export default Stack