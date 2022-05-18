
// node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null,
            this.tail = null,
            this.length = 0
    }

    push(val) {
        const node = new Node(val)
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return null

        const node = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = node.prev
            this.tail.next = null
            node.prev = null
        }

        this.length--
        return node
    }

    shift() {
        if (!this.head) return null

        const node = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = node.next
            this.head.prev = null
            node.next = null
        }
        this.length--
        return node
    }

    unshift(val) {
        const node = new Node(val)

        if (!this.head) {
            this.head = node,
                this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if (index >= this.length || index < 0) return null

        const mid = Math.floor(this.length / 2)
        let start = 0
        let node = null

        if (index < mid) {
            node = this.head
            while (start < index) {
                node = node.next
                start++
            }
        } else {
            node = this.tail
            start = this.length - 1
            while (start > index) {
                node = node.prev
                start--
            }
        }
        return node
    }

    //replace value on node with index
    set(val, index) {
        const node = this.get(index)

        if (!node) return null

        node.val = val
        return this
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(val)
        if (index >= this.length) return this.pop(val)

        const newNode = new Node(val)
        const prevNode = this.get(index - 1)
        const nextNode = prevNode.next


        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode
        prevNode.next = newNode
        this.length++

        return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) this.pop()


        const node = this.get(index)
        const prevNode = node.prev
        const nextNode = node.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        node.next = null
        node.prev = null
        this.length--

        return node

    }
}

const DLL = new DoubleLinkedList()

DLL.push(3)
DLL.push(6)
DLL.push(1)
DLL.push(4)
DLL.push(10)
DLL.push(11)

console.log(DLL.remove(2))
