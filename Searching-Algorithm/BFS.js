const Queue = require('../Queue-DataStructure/Queue')

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  #root

  constructor() {
    this.#root = null
  }

  /**
   * 插入節點到樹中對應的地方，左小右大。
   * best: O(log n)，高度最矮的情況
   * worst: O(n)，高度最高的情況（就是一直線的樹 = linked list）
   * @param {*} value 
   * @returns {object} - this
   */
  insert(value) {
    const newNode = new Node(value, null, null)

    if (!this.#root) return this.#root = newNode

    let parentNode = this.#root
    let direction

    while(1) {
      direction = newNode.value < parentNode.value ? 'left' : 'right'
      if (!parentNode[direction]) break
      parentNode = parentNode[direction]
    }
    parentNode[direction] = newNode
    return this
  }

  BreadthFirstSearch() {
    const list = []
    const queue = new Queue()
    let currentNode = this.#root
  
    while(currentNode) {
      list.push(currentNode.value)
      if (currentNode.left !== null) queue.enqueue(currentNode.left)
      if (currentNode.right !== null) queue.enqueue(currentNode.right)
      currentNode = queue.dequeue()
    }
    return list
  }

  #traverse(list, queue) {
    if (!queue.length) return list
    const currentNode = queue.dequeue()
    list.push(currentNode.value)
    if (currentNode.left !== null) queue.enqueue(currentNode.left)
    if (currentNode.right !== null) queue.enqueue(currentNode.right)
    this.#traverse(list, currentNode)
  }

  BreadthFirstSearchRecursive() {
    const list = [this.#root.value]
    const queue = new Queue()
    queue.enqueue(this.#root)
    
    return this.#traverse(list, queue)
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//    9
//  4   20
// 1 6 15 170

console.log('BFS iterative', tree.BreadthFirstSearch()) // 9 4 20 1 6 15 170
console.log('BFS recursive', tree.BreadthFirstSearch()) // 9 4 20 1 6 15 170
