class QueueItem {
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

class Queue {
	#first = null
	#last = null

	isEmpty() {
		return this.#first === null && this.#last === null
	}

	insert(value) {
		const item = new QueueItem(value)

		if (this.isEmpty()) {
			this.#first = item
			this.#last = item
		} else {
			this.#last.setNext(item)

			this.#last = item
		}
	}

	remove() {
		if (this.#first) {
			const value = this.#first.getValue()

			this.#first = this.#first.getNext()

			return value
		}

		return null
	}

	peek() {
		if (this.#first) {
			return this.#first.getValue()
		}

		return null
	}
}

export default Queue