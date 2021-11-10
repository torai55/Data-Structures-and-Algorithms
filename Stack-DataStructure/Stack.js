class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class Stack {
  #top

  constructor() {
    this.#top = null
    this.length = 0
  }

  peek() {
    if (this.#top) return this.#top.value
    return null
  }

  push(value) {
    const newNode = new Node(value, this.#top)
    this.#top = newNode
    this.length++
    return this
  }

  pop() {
    if (!this.#top) return null
    const topNode = this.#top
    this.#top = this.#top.next
    this.length--
    return topNode.value
  }

  printStack() {
    let curr = this.#top
    const reversedStack = []
    console.log('')
    while(curr) {
      reversedStack.push(curr.value)
      curr = curr.next
    }
    reversedStack.forEach((value) => console.log(`| ${value} |`))
    console.log('|________|')
    console.log(`length: ${this.length}`)
    return this
  }

  isEmpty() {
    return this.length === 0
  }
}

const myStack = new Stack()
myStack.pop()
console.log(myStack.peek())
console.log(myStack.isEmpty())
myStack.push('google').printStack().push('trello').push('discord').printStack()
console.log('')
console.log(myStack.peek())
myStack.pop()
myStack.printStack()
