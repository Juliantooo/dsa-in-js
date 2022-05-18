// DFS
// down first, rather than finish by row like BFS


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

    // pre order = Root -> left -> right
    preOrder() {
        const visitied = []
        const preOrderTraversal = (node) => {
            if (!node) return;

            visitied.push(node.val)

            preOrderTraversal(node.left)
            preOrderTraversal(node.right)
        }
        preOrderTraversal(this.root)
        return visitied
    }

    // post order =  left -> right -> root
    postOrder() {
        const visited = []
        const postOrderTraversal = (node) => {
            if (!node) return

            postOrderTraversal(node.left)
            postOrderTraversal(node.right)
            visited.push(node.val)
        }
        postOrderTraversal(this.root)
        return visited
    }

    // in order = left -> root -> right
    inOrder() {
        const visitied = []

        const inOrderTraversal = (node) => {
            if (!node) return

            inOrderTraversal(node.left)
            visitied.push(node.val)
            inOrderTraversal(node.right)
        }
        inOrderTraversal(this.root)
        return visitied
    }

}

const treeTraversal = new Tree()

treeTraversal.root = new Node(10)
treeTraversal.root.right = new Node(15)
treeTraversal.root.right.right = new Node(20)
treeTraversal.root.left = new Node(6)
treeTraversal.root.left.left = new Node(3)
treeTraversal.root.left.right = new Node(8)

console.log(treeTraversal.inOrder())

