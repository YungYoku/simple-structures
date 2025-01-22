import { Queue, QueueItem } from './queue.js'

export class PriorityQueueItem extends QueueItem {
	#priority

	constructor(value, priority) {
		super(value)
		this.#priority = priority
	}

	getPriority() {
		return this.#priority
	}
}

export class PriorityQueue extends Queue {
	insert(value, priority) {
		const item = new PriorityQueueItem(value, priority)

		if (this.isEmpty()) {
			this.setFirst(item)
			this.setLast(item)
		} else {
			let currentItem = this.getFirst()

			if (currentItem.getPriority() > priority) {
				item.setNext(currentItem)
				this.setFirst(item)
			} else {
				while (currentItem.getNext() && currentItem.getPriority() < priority) {
					currentItem = currentItem.getNext()
				}

				item.setNext(currentItem.getNext())
				currentItem.setNext(item)
			}
		}
	}
}
