// FIFO
// queue can created with array in js, unshift,pop / push,shift its not recomend
// ex:

// const queue = []

// queue.unshift('google')
// queue.unshift('amazom')
// queue.unshift('mercari')

// console.log(queue.pop())

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }


    enqueue(val) {
        const node = new Node(val)

        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }

        this.size++
        return this.size
    }

    // delete first item (first in)
    dequeue() {
        if (!this.first) return null
        const node = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = node.next
            node.next = null
        }
        this.size--
        return node.val
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.dequeue())