class ListNode {
	value = null
	next = null

	constructor (value) {
		this.value = value
	}
}

class List {
	#first = null
	#last = null

	isEmpty() {
		return this.#first === null
	}

	addToStart(value) {
		const node = new ListNode(value)

		if (this.isEmpty()) {
			this.#first = node
		} else {
			node.next = this.#first

			if (this.#last === null) {
				this.#last = this.#first
			}

			this.#first = node
		}
	}
	addToEnd(value) {
		const node = new ListNode(value)

		if (this.isEmpty()) {
			this.#first = node
		} else {
			if (this.#last === null) {
				this.#first.next = node
				this.#last = node
			} else {
				this.#last.next = node

				this.#last = node
			}
		}
	}

	get(index) {
		if (index < 0) throw new Error('Index out of bounds')

		let i = 0
		for (const item of this) {
			if (i === index) return item
			i++
		}
	}
	getFirst() {
		return this.#first
	}
	getLast() {
		return this.#last
	}

	remove(index) {
		if (index < 0) throw new Error('Index out of bounds')

		let i = 0
		let listNode = this.#first

		while (i !== index - 1) {
			i++
			listNode = listNode.next
		}

		listNode.next = listNode.next.next
	}
	removeAll() {
		this.#first = null
		this.#last = null
	}

	*[Symbol.iterator]() {
		let listNode = this.#first

		while (listNode !== null) {
			const value = listNode.value

			listNode = listNode.next

			yield value
		}
	}
}

module.exports = { List }