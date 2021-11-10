class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class DoublyLinkedList {
  #head
  #tail

  constructor() {
    this.#head = null
    this.#tail = null
    this.length = 0
  }

  prepend(value) {
    const newNode = new ListNode(value, null, this.#head)
    this.#head = newNode
    if (!this.#tail) this.#tail = newNode
    this.length++
    return this
  }

  append(value) {
    const newNode = new ListNode(value, this.#tail, null)
    if (this.#tail) {
      this.#tail.next = newNode
    } else {
      this.#head = newNode
    }
    this.#tail = newNode
    this.length++
    return this
  }

  /**
   * 取得特定 index 的 node
   * @param {*} index 
   * @returns {object} list node
   */
  lookup(index) {
    let currentNode
    if (index < (this.length / 2)) { // 從前面開始找
      currentNode = this.#head
      while(index--) {
        currentNode = currentNode.next
      }
    } else { // 從後面開始找
      let step = this.length - 1 - index
      currentNode = this.#tail
      while(step--) {
        currentNode = currentNode.prev
      }
    }
    return currentNode
  }

  insert(index, value) {
    if (typeof index !== 'number') throw new Error('index must be a number')
    if (index < 0 || index > this.length) throw new Error('index must between 0 and length of the linked list')

    if (index === 0) {
      this.prepend(value)
    } else if (index === this.length) {
      this.append(value)
    } else {
      let previousNode
      let nextNode = this.lookup(index)

      previousNode = nextNode.prev
      const newNode = new ListNode(value, previousNode, nextNode)
      previousNode.next = newNode
      nextNode.prev = newNode
      this.length++
    }
    return this
  }

  printList() {
    const list = []
    let currentNode = this.#head
    while(currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(list)
    return this
  }

  remove(index) {
    const currentNode = this.lookup(index)
    const prevNode = currentNode.prev
    const nextNode = currentNode.next
    
    if (prevNode) prevNode.next = nextNode
    if (nextNode) nextNode.prev = prevNode

    if (index === 0) this.#head = nextNode
    if (index === this.length - 1) this.#tail = prevNode

    this.length--
    return this
  }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append(5).append(6).prepend(1).prepend(11).printList() // [11,1,5,6]
doublyLinkedList.insert(0, 111).insert(doublyLinkedList.length, 66).insert(doublyLinkedList.length - 1, 55).printList() // [111,11,1,5,6,55,66]
doublyLinkedList.remove(0).remove(doublyLinkedList.length - 1).printList() // [11,1,5,6,55]
console.log(doublyLinkedList.lookup(3).value) // 6
doublyLinkedList.remove(0).remove(0).remove(0).remove(0).remove(0).printList() // []
