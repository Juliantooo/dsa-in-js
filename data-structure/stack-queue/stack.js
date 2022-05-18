// LIFO
// in js can using array, && its not recomend
// can use pop,push => better because not reindexing
// shift,unshift => not recomend because reindexing
// ex:
// const stack = []

// stack.push('google')
// stack.push('amazon')
// stack.push('mercari')

// stack.pop()

class Node {
    constructor(val) {
        this.val = val,
            this.next = null
    }
}


class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }

    push(val) {
        const node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        this.size++
        return this.size
    }

    pop() {
        if (this.size === 0) return null
        const node = this.first

        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = node.next
            node.next = null
        }
        this.size--
        return node
    }
}

const stack = new Stack()

stack.push(2)
stack.push(4)
stack.push(5)
stack.push(6)

console.log(stack.pop())