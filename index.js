class ListNode {
	value = null
	next = null

	constructor (value) {
		this.value = value
	}
}

class List {
	first = null
	last = null

	isEmpty() {
		return this.first === null
	}
	addToStart(value) {
		if (this.isEmpty()) {
			this.first = new ListNode(value)
		} else {
			const newFirst = new ListNode(value)
			newFirst.next = this.first

			this.first = newFirst
		}
	}

	get(index) {
		let i = 0
		for (const item of this) {
			if (i === index) return item
			i++
		}
	}

	*[Symbol.iterator]() {
		let listNode = this.first

		while (listNode !== null) {
			const value = listNode.value

			listNode = listNode.next

			yield value
		}
	}
}

module.exports = { List }