const swap = (array, left, right) => {
    const temp = array[left]
    array[left] = array[right]
    array[right] = temp
}

const partitionIt = (array, left, right, pivot) => {
    let leftPtr = left - 1
    let rightPtr = right

    while (true) {
        while (array[++leftPtr] < pivot) {
        }
        while (rightPtr > 0 && array[--rightPtr] > pivot) {
        }

        if (leftPtr >= rightPtr) break

        swap(array, leftPtr, rightPtr)
    }

    swap(array, leftPtr, right)

    return leftPtr
}

const recursiveQuickSort = (array, left, right) => {
    if (right - left <= 0) return

    const pivot = array[right]

    const partition = partitionIt(array, left, right, pivot)
    recursiveQuickSort(array, left, partition - 1)
    recursiveQuickSort(array, partition + 1, right)

    return array
}

const quickSort = array => {
    return recursiveQuickSort(array, 0, array.length - 1)
}

export default quickSort