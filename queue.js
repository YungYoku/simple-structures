export class QueueItem {
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

export class Queue {
	#first = null
	#last = null

	getFirst() {
		return this.#first
	}

	setFirst(queueItem) {
		this.#first = queueItem
	}

	getLast() {
		return this.#last
	}

	setLast(queueItem) {
		this.#last = queueItem
	}

	isEmpty() {
		return this.getFirst() === null && this.getLast() === null
	}

	insert(value) {
		const item = new QueueItem(value)

		if (this.isEmpty()) {
			this.setFirst(item)
		} else {
			this.getLast().setNext(item)
		}

		this.setLast(item)
	}

	remove() {
		if (this.isEmpty()) return null

		const value = this.getFirst().getValue()

		this.setFirst(this.getFirst().getNext())

		return value
	}

	peek() {
		if (this.isEmpty()) return null

		return this.getFirst().getValue()
	}
}