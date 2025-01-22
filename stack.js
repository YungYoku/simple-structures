class StackItem {
	#value
	#next

	constructor(value) {
		this.#value = value
	}

	getValue() {
		return this.#value
	}

	getNext() {
		return this.#next
	}

	setNext(queueItem) {
		this.#next = queueItem
	}
}

class Stack {
	#top = null

	isEmpty() {
		return this.#top === null
	}

	add(value) {
		const item = new StackItem(value)

		if (this.isEmpty()) {
			this.#top = item
		} else {
			item.setNext(this.#top)

			this.#top = item
		}
	}

	pop() {
		if (this.#top) {
			const value = this.#top.getValue()

			this.#top = this.#top.getNext()

			return value
		}

		return null
	}

	peek() {
		if (this.#top) {
			return this.#top.getValue()
		}

		return null
	}
}

export default Stack