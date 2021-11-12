class Graph {
  #adjacencyList

  constructor() {
    this.numberOfNodes = 0
    this.#adjacencyList = {}
  }

  addVertex(node) {
    this.#adjacencyList[node] = []
    this.numberOfNodes++
    return this
  }

  addEdge(node1, node2) {
    // undirected graph
    if (this.#adjacencyList[node1] === undefined || this.#adjacencyList[node2] === undefined) return this
    const node2IsExistedInNode1 = this.#adjacencyList[node1].includes(node2)
    const node1IsExistedInNode2 = this.#adjacencyList[node2].includes(node1)

    if (!node2IsExistedInNode1) this.#adjacencyList[node1].push(node2)
    if (!node1IsExistedInNode2) this.#adjacencyList[node2].push(node1)
    return this
  }

  showConnections() {
    for (let node in this.#adjacencyList) {
      let nodeConnections = this.#adjacencyList[node].join(', ')
      console.log(`${node} --> ${nodeConnections}`)
    }
    return this
  }
}

const graph = new Graph()
graph.addVertex('0')
  .addVertex('1')
  .addVertex('2')
  .addVertex('3')
  .addVertex('4')
  .addVertex('5')
  .addVertex('6')
  .addEdge('3', '1')
  .addEdge('3', '4')
  .addEdge('4', '2')
  .addEdge('4', '5')
  .addEdge('1', '2')
  .addEdge('1', '0')
  .addEdge('0', '2')
  .addEdge('6', '5')
  .showConnections()
