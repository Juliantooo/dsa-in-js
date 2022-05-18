//piece of linked list node, 
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

// define linked list

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++;
        return this
    }

    pop() {
        let current = this.head
        let newTail = current

        if (!current) return undefined
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this
    }

    shift() {
        if (!this.head) return undefined

        let head = this.head
        if (head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        this.length--
        return this
    }

    unshift(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
        return this
    }

    get(index) {
        if (this.length === 0 || index < 0 || index >= this.length) return null
        let start = 0
        let node = this.head

        while (start < index) {
            if (node.next) {
                node = node.next
                start++
            } else {
                return null
            }
        }

        return node
    }

    set(index, val) {
        let node = this.get(index)
        if (!node) return null
        node.val = val
        return this
    }

    insert(index, val) {
        if (index > this.length || index < 0) return null
        if (this.length === 0 || index === 0) return this.unshift(val)

        let prevNewNode = this.get(index - 1)
        let node = new Node(val)

        node.next = prevNewNode.next
        prevNewNode.next = node
        this.length++

        return this

    }

    remove(index) {
        if (this.length === 0 || index >= this.length || index < 0) return null
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let prevNewNode = this.get(index - 1)
        let node = prevNewNode.next

        prevNewNode.next = node.next
        node.next = null
        this.length--

        return this
    }

    reverse() {

        // let node = this.head
        // this.head = this.tail
        // this.tail = node
        // let nextNode = null
        // let prevNode = null

        // for (let i = 0; i < this.length; i++) {
        //     nextNode = node.next
        //     node.next = prevNode
        //     prevNode = node
        //     node = nextNode
        // }
        // return this

        // or 

        let node = this.head
        let nextNode = null
        let prevNode = null

        while (node) {
            nextNode = node.next
            node.next = prevNode
            prevNode = node
            node = nextNode
        }
        return prevNode

    }


}

const singleLinkedList = new SingleLinkedList()
const singleLinkedList2 = new SingleLinkedList()

singleLinkedList.push(10)
singleLinkedList.push(12)
singleLinkedList.push(14)
singleLinkedList.push(15)
singleLinkedList2.push(10)
singleLinkedList2.push(12)
singleLinkedList2.push(14)
singleLinkedList2.push(19)

const compare = (llist1, llist2) => {
    while (llist1 || llist2) {

        if ((llist1 && llist2) && (llist1.val === llist2.val)) {
            llist1 = llist1.next;
            llist2 = llist2.next;
        } else {
            return false
        }
    }

    return true
}

// merging 2 sorted list
function mergeLists(head1, head2) {
    const newSingleLinkedList = new SinglyLinkedList();

    while (head1 || head2) {
        if (head1 && head2) {
            if (head1.data <= head2.data) {
                newSingleLinkedList.insertNode(head1.data);
                head1 = head1.next
            } else {
                newSingleLinkedList.insertNode(head2.data);
                head2 = head2.next
            }
        } else {
            if (head1) {
                newSingleLinkedList.insertNode(head1.data);
                head1 = head1.next
            } else {
                newSingleLinkedList.insertNode(head2.data);
                head2 = head2.next
            }
        }
    }

    return newSingleLinkedList.head
}

// console.log(singleLinkedList.shift())
// console.log(singleLinkedList)
// console.log(singleLinkedList.head)
// console.log('a', singleLinkedList.head.next)
// console.log('a', singleLinkedList.tail)
// console.log(singleLinkedList.unshift(8))
// console.log(singleLinkedList.get(4))
// console.log(singleLinkedList.set(3, 20))
// console.log(singleLinkedList.insert(3, 100))
// console.log(singleLinkedList.remove(3))
console.log(compare(singleLinkedList.head, singleLinkedList2.head))

