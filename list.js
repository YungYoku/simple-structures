export class ListNode {
	value = null
	next = null

	constructor(value) {
		this.value = value
	}
}

export class List {
	first = null

	isEmpty() {
		return this.first === null
	}

	insert(value) {
		const node = new ListNode(value)
		node.next = this.first
		this.first = node
	}

	find(value) {
		if (this.isEmpty()) return null

		let listNode = this.first

		while (listNode !== null) {
			if (listNode.value === value) return listNode

			listNode = listNode.next
		}

		return null
	}

	findByIndex(index) {
		if (this.isEmpty()) return null

		let i = 0
		for (const item of this) {
			if (i === index) return item
			i++
		}

		return null
	}

	remove(value) {
		if (this.isEmpty()) return null

		let current = this.first
		let previous = this.first

		if (current.value === value) {
			this.first = this.first.next
			return this.first
		}

		while (current.value !== value) {
			previous = current
			current = current.next

			if (current === null) return current

			if (current.value === value) {
				previous.next = current.next
				return value
			}
		}
	}

	display() {
		for (const item of this) {
			console.log(item)
		}
	}

	* [Symbol.iterator]() {
		let listNode = this.first

		while (listNode !== null) {
			const value = listNode.value

			listNode = listNode.next

			yield value
		}
	}
}