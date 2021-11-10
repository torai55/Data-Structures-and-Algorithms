class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

/**
 * 單向連結陣列，某些操作會創造一個假的 head，比較方便處理位於首、尾節點的操作
 * 或許也可以直接存一個 dummyHead（index 為 -1） 在 LinkedList 的 private property
 * 配合 getNodeAt(index) 的方法來替代 new ListNode + while 迴圈的部分
 */
class LinkedList {
  // private properties
  #head
  #tail

  constructor() {
    this.#head = null
    this.#tail = null
    this.length = 0
  }

  /**
   * 在 linked list 最前面加入節點
   * O(1)
   * @param {*} value 
   * @returns {object} this - the linked list
   */
  prepend(value) {
    const newNode = new ListNode(value, this.#head)
    this.#head = newNode
    if (!this.#tail) this.#tail = newNode // 若 linked list 剛初始化，還沒添加節點，此時 head = tail = null, length = 0
    this.length++
    return this
  }

  /**
   * 在 linked list 最後面加入節點
   * O(1)
   * @param {*} value 
   * @returns {object} this - the linked list
   */
  append(value) {
    const newNode = new ListNode(value, null)
    if (this.#tail) {
      this.#tail.next = newNode
    } else {
      this.#head = newNode // linked list 沒有任何節點時
    }
    this.#tail = newNode
    this.length++
    return this
  }

  /**
   * 插入節點到指定的 index 位址，並給定 value。
   * 若 index 等於 linked list 長度則插入在最尾端，若大於則報錯。
   * O(n)
   * @param {number} index
   * @param {*} value
   * @returns {object} this - the linked list
   */
  insert(index, value) {
    if (typeof index !== 'number') throw new Error('index must be a number')
    if (index < 0 || index > this.length) throw new Error('index must between 0 and length of the linked list')

    if (index === 0) {
      this.prepend(value)
    } else {
      let previousNode = new ListNode(0, this.#head)
      while (index--) {
        previousNode = previousNode.next
      }
      const newNode = new ListNode(value, previousNode.next)
      previousNode.next = newNode
      this.length++
    }
    return this
  }

  printList() {
    let currentNode = this.#head
    const list = []
    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(JSON.stringify(list))
    return this
  }

  /**
   * 取得特定 index 的值，index 不合法就回傳
   * O(n)
   * @param {number} index
   * @returns {*} value - value of list node at certain index
   */
  lookup(index) {
    if (typeof index !== 'number') throw new Error('index must be a number')
    if (index < 0 || index >= this.length) throw new Error('index must between 0 and (length - 1) of the linked list')

    let currentNode = this.#head
    while (index--) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }

  /**
   * 刪除特定 index 的 node
   * O(n)
   * @param {number} index
   * @returns {object} this - linkedList
   */
  remove(index) {
    if (typeof index !== 'number') throw new Error('index must be a number')
    if (index < 0 || index >= this.length) throw new Error('index must between 0 and (length - 1) of the linked list')

    let step = index
    let previousNode = new ListNode(0, this.#head)
    while (step--) {
      previousNode = previousNode.next
    }
    previousNode.next = previousNode.next.next

    if (index === 0) this.#head = previousNode.next
    if (index === this.length) this.#tail = previousNode.next

    this.length--
    return this
  }

  /**
   * 反轉整個 linked list
   * 利用 two pointer(prev, curr)，把 current node 指向 previous node
   * O(n)
   * @returns {object} this
   */
  reverse() {
    let currentNode = this.#head
    let previousNode = null
    let nextNode

    while(currentNode) {              // (prev)->(curr      )->(          )->()
      nextNode = currentNode.next     // (prev)->(curr      )->(next      )->()
      currentNode.next = previousNode // (prev)<-(curr      )  (next      )->()
      previousNode = currentNode      // (    )<-(prev, curr)  (next      )->()
      currentNode = nextNode          // (    )<-(prev      )  (curr, next)->()
    }

    this.#tail = this.#head
    this.#head = previousNode
    return this
  }
}

const myLinkedList = new LinkedList()
myLinkedList.prepend(2).prepend(1).append(5).append(6).printList() // [1,2,5,6]
console.log(myLinkedList.lookup(0)) // 1
myLinkedList.insert(0, 11).insert(5, 66).remove(3).printList() // [11,1,2,6,66]
console.log(myLinkedList.lookup(4)) // 66
myLinkedList.remove(myLinkedList.length - 1).remove(0).printList() // [1,2,6]
myLinkedList.reverse().printList() // [6,2,1]
