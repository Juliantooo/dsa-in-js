class WeightedGraph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }
}


const WG = new WeightedGraph()

WG.addVertex('A')
WG.addVertex('B')
WG.addVertex('C')
WG.addVertex('D')

WG.addEdge('A','B',9)
WG.addEdge('A','C',5)
WG.addEdge('B','C',2)
WG.addEdge('B','D',8)
WG.addEdge('C','D',1)

console.log(WG)