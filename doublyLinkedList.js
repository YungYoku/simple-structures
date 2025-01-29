import {ListNode} from './list.js'
import {FirstLastList} from './index.js'

class DoublyLinkedListNode extends ListNode {
	previous = null

	constructor(value) {
		super(value)
	}
}

export default class DoublyLinkedList extends FirstLastList {
	insert(value) {
		const node = new DoublyLinkedListNode(value)
		node.next = this.first
		this.first = node

		if (this.first.next) {
			this.first.next.previous = node
		}
		if (this.last === null) {
			this.last = node
		}
	}

	insertLast(value) {
		const node = new DoublyLinkedListNode(value)

		if (this.last !== null) {
			this.last.next = node
			node.previous = this.last
		}
		this.last = node

		if (this.first === null) {
			this.first = node
		}
	}

	insertAfter(key, value) {
		const node = new DoublyLinkedListNode(value)

		const foundItem = this.find(key)
		if (foundItem) {
			node.previous = foundItem
			node.next = foundItem.next

			if (foundItem.next) {
				foundItem.next.previous = foundItem
				foundItem.next = node
			} else {
				this.last.next = node
				this.last = node
			}
		}

		return null
	}

	displayReverse() {
		let current = this.last

		while (current !== null) {
			const value = current.value

			current = current.previous

			console.log(value)
		}
	}
}