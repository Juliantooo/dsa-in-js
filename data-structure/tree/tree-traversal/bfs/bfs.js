// Breadth first search
// from root until leaf by row
// ex
//  ->                  5                       this row first
//  ->           4               12             this row, all element
//  ->       6       10     14         17       this row, all element. And so on...

class QueueNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    add(val) {
        const node = new QueueNode(val)

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

    remove() {
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

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    bfs() {
        const queue = new Queue()
        const visited = []

        const current = this.root
        queue.add(current)

        while (queue.size) {
            const current = queue.remove()
            visited.push(current.val)

            if (current.left) {
                queue.add(current.left)
            }

            if (current.right) {
                queue.add(current.right)
            }
        }

        return visited
    }

}

const treeTraversal = new Tree()

treeTraversal.root = new Node(10)
treeTraversal.root.right = new Node(12)
treeTraversal.root.right.right = new Node(15)
treeTraversal.root.right.left = new Node(11)
treeTraversal.root.left = new Node(5)
treeTraversal.root.left.right = new Node(8)
console.log('a')

console.log(treeTraversal.bfs())
