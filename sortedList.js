import {List, ListNode} from './list.js'

export default class SortedList extends List {
	insert(value) {
		const node = new ListNode(value)

		let previous = null
		let current = this.first

		while (current && value > current.value) {
			previous = current
			current = current.next
		}

		if (previous === null) {
			this.first = node
		} else {
			previous.next = node
		}
		node.next = current
	}
}
