const Stack = require('../Stack-DataStructure/Stack')

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

  #traverseInOrder(list, currentNode) {
    if (currentNode === null) return list
    this.#traverseInOrder(list, currentNode.left)
    list.push(currentNode.value)
    this.#traverseInOrder(list, currentNode.right)
    return list
  }

  inOrder() {
    const list = []
    const currentNode = this.#root
    return this.#traverseInOrder(list, currentNode)
  }

  #traversePreOrder(list, currentNode) {
    if (currentNode === null) return list
    list.push(currentNode.value)
    this.#traversePreOrder(list, currentNode.left)
    this.#traversePreOrder(list, currentNode.right)
    return list
  }

  preOrder() {
    const list = []
    const currentNode = this.#root
    return this.#traversePreOrder(list, currentNode)
  }

  #traversePostOrder(list, currentNode) {
    if (currentNode === null) return list
    this.#traversePostOrder(list, currentNode.left)
    this.#traversePostOrder(list, currentNode.right)
    list.push(currentNode.value)
    return list
  }

  postOrder() {
    const list = []
    const currentNode = this.#root
    return this.#traversePostOrder(list, currentNode)
  }

  inOrderIterative() {
    let currentNode = this.#root
    const list = []
    const stack = new Stack()

    while(currentNode || !stack.isEmpty()) {
      if (currentNode) {
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        currentNode = stack.pop()
        list.push(currentNode.value)
        currentNode = currentNode.right
      }
    }
    return list
  }

  preOrderIterative() {
    const list = []
    const stack = new Stack()
    let currentNode = this.#root

    while(currentNode || !stack.isEmpty()) {
      if (currentNode) {
        list.push(currentNode.value)
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        currentNode = stack.pop().right
      }
    }
    return list
  }

  postOrderIterative() {
    let currentNode = this.#root
    const stack = new Stack()
    const list = []

    while(currentNode || !stack.isEmpty()) {
      if (currentNode) {
        stack.push(currentNode)
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        currentNode = stack.pop()
        if (currentNode === stack.peek()) {
          currentNode = currentNode.right
        } else {
          list.push(currentNode.value)
          currentNode = null
        }
      }
    }
    return list
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

console.log('inOrder recursive', tree.inOrder()) // 1, 4, 6, 9, 15, 20, 170
console.log('inOrder iterative', tree.inOrderIterative())

console.log('preOrder recursive', tree.preOrder()) // 9, 4, 1, 6, 20, 15, 170
console.log('preOrder iterative', tree.preOrderIterative())

console.log('postOrder recursive', tree.postOrder()) // 1, 6, 4, 15, 170, 20, 9
console.log('postOrder iterative', tree.postOrderIterative())
