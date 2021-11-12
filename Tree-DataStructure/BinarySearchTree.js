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

  /**
   * 尋找某個值是否存在於 tree
   * best: O(log n)
   * worst: O(n)
   * @param {*} value 
   * @returns {boolean}
   */
  lookup(value) {
    let curr = this.#root
    let direction

    while(curr) {
      if (curr.value === value) return true
      direction = value < curr.value ? 'left' : 'right'
      curr = curr[direction]
    }
    return false
  }

  /**
   * 刪除特定數值的節點。
   * 左子樹每個值 < root；右子樹每個值 > root
   * 左子樹最大值在右下角；右子樹的最小值在左下角
   * 所以刪除 root 的時候可以選擇拿左子樹最大值 or 右子樹最小值來遞補
   * 分成三種情況
   * 1. currentNode 無左邊、右邊節點 => 把 parentNode 指向 null
   * 2. currentNode 兩邊節點都有 => 拿左子樹最大或右子樹最小節點來遞補
   * 3. currentNode 只有左右其中一邊的節點 => 就拿那邊的節點來遞補
   * @param {*} value
   * @returns {boolean} 刪除操作是否成功
   */
  remove(value) {
    let parentNode = null
    let currentNode = this.#root
    let temp

    while(currentNode) {
      if (currentNode.value === value) break
      parentNode = currentNode
      currentNode = currentNode[value < currentNode.value ? 'left' : 'right']
    }

    if (!currentNode) return false

    if (!currentNode.left && !currentNode.right) { // 左右子節點都是 null
      temp = null
    } else if (currentNode.left && currentNode.right) { // 左右子節點都有值
      let leftSubtreeMaxNode = currentNode.left
      let leftSubtreeParentNode = currentNode

      while(leftSubtreeMaxNode.right) {
        leftSubtreeParentNode = leftSubtreeMaxNode
        leftSubtreeMaxNode = leftSubtreeMaxNode.right
      }

      if (leftSubtreeMaxNode !== currentNode.left) { // 如果左子樹最大不是左子樹的 root
        leftSubtreeParentNode.right = leftSubtreeMaxNode.left
        leftSubtreeMaxNode.left = currentNode.left
      }
      leftSubtreeMaxNode.right = currentNode.right
      temp = leftSubtreeMaxNode
    } else { // 只有其中一邊子節點有值
      let childDirection = currentNode.left ? 'left' : 'right'
      temp = currentNode[childDirection]
    }

    if (currentNode !== this.#root) {
      let parentDirection = currentNode.value < parentNode.value ? 'left' : 'right'
      parentNode[parentDirection] = temp
    } else {
      this.#root = temp
    }
    return true
  }

  remove2(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

  #traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : this.#traverse(node.left)
    tree.right = node.right === null ? null : this.#traverse(node.right)
    return tree
  }

  getTree() {
    return this.#traverse(this.#root)
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

console.log(tree.getTree())
//     9
//  4     20
// 1 6  15  170

tree.remove(9)
console.log(tree.getTree())
//     6
//  4     20
// 1 X  15  170
