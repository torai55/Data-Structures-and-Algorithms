class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class Queue {
  #first
  #last

  constructor() {
    this.#first = null
    this.#last = null
    this.length = 0
  }

  peek() {
    if (this.#first) return this.#first.value
    return null
  }

  enqueue(value) {
    const newNode = new Node(value, null)
    if (this.isEmpty()) {
      this.#first = this.#last = newNode
    } else {
      this.#last.next = newNode
      this.#last = newNode
    }
    this.length++
    return this
  }
  
  dequeue() {
    if (this.isEmpty()) return null
    if (this.#first === this.#last) this.#last = null

    const firstNode = this.#first
    this.#first = firstNode.next
    this.length--
    return firstNode.value
  }

  isEmpty() {
    return this.length === 0
  }

  printQueue() {
    let curr = this.#first
    let queue = []

    while(curr) {
      queue.push(curr.value)
      curr = curr.next
    }
    console.log('')
    console.log(queue.join(', '))
    console.log(`length: ${this.length}`)
    return this
  }
}

const myQueue = new Queue()
console.log(myQueue.peek())
myQueue.enqueue('gg').enqueue('ez').printQueue()
console.log('')
console.log(myQueue.dequeue())
myQueue.dequeue()
myQueue.printQueue()