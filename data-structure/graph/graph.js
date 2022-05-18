
class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []

        // return this.adjacencyList
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex)=> vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex)=> vertex !== vertex1)
    }

    removeVertex(vertex){
        // this.adjacencyList[vertex].forEach((v)=>{
        //     this.removeEdge(vertex,v)
        // })

        while(this.adjacencyList[vertex].length){
            const removedVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,removedVertex)
        }
        delete this.adjacencyList[vertex]   
    }

    depthFirstTraversal(start){
        const result = []
        const visited = {}

        const dfs=(vertex)=>{
            if(!vertex) return null
            visited[vertex]=true
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        return dfs(neighbor)
                    }
            });
        }

        dfs(start)
        return result
    }

    depthFirstIterative(start){
        const Stack = [start]
        const result = []
        const visited = {}
        visited[start]=true

        while(Stack.length>0){
            const vertex = Stack.pop()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    Stack.push(neighbor)
                }
            })
        }

        return result
    }

    BFS(start){
        const queue = [start]
        const result=[]
        const visited={}
        visited[start]=true

        while(queue.length>0){
            const vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            })
        }
        return  result
    }
}


const G = new Graph()

G.addVertex('A')
G.addVertex('B')
G.addVertex('C')
G.addVertex('D')
G.addVertex('E')
G.addVertex('F')

G.addEdge('A','B')
G.addEdge('A','C')
G.addEdge('B','D')
G.addEdge('C','E')
G.addEdge('D','E')
G.addEdge('D','F')
G.addEdge('E','F')

console.log(G.BFS('A'))


