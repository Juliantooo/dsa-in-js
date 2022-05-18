// root,edge,parent,child,sibling,leaf
// tree usage => DOM,network routing,Abstract syntax tree (AST),AI,Folder in OS,computer file system,JSON

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const node = new Node(val)
        if (!this.root) {
            this.root = node
            return this
        }

        let current = this.root

        while (current) {
            if (val === current.val) return undefined;
            if (val > current.val) {
                if (!current.right) {
                    current.right = node
                    return this
                }
                current = current.right
            } else {
                if (!current.left) {
                    current.left = node
                    return this
                }
                current = current.left
            }
        }
    }

    find(val) {
        if (!this.root) return false

        let current = this.root

        while (current) {
            if (val === current.val) return current

            if (val > current.val) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return false
    }
}

const BST = new BinarySearchTree()

BST.root = new Node(10)
BST.root.right = new Node(12)
BST.root.right.right = new Node(15)
BST.root.right.left = new Node(11)
BST.root.left = new Node(5)
BST.root.left.right = new Node(8)

BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(13)
BST.insert(15)
BST.insert(20)
BST.insert(14)




console.log(BST.find(3))

//                 10
//         5               12
//     3       8       11      15
// 1      4 