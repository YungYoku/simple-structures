class Stack {
	#array = []

	add(value) {
		this.#array.push(value)
	}

	pop() {
		return this.#array.pop()
	}

	peek() {
		return this.#array[this.#array.length - 1]
	}

	isEmpty() {
		return this.#array.length === 0
	}
}

export default Stack