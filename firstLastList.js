import {List, ListNode} from './list.js'

class FirstLastList extends List {
	last = null

	insert(value) {
		const node = new ListNode(value)
		node.next = this.first
		this.first = node

		if (this.last === null) {
			this.last = node
		}
	}

	insertLast(value) {
		const node = new ListNode(value)

		if (this.last !== null) {
			this.last.next = node
		}
		this.last = node

		if (this.first === null) {
			this.first = node
		}
	}
}

export default FirstLastList