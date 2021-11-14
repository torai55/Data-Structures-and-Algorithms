# Searching

## Linear Search

一個一個找，直到找到目標或全找完。

## Binary Search

* 如果 array 有由小到大排序好，可以比較最中間的值
* 如果值比目標大，那目標就會在左邊；值比較小目標就在右邊
* 也可以利用 BST

## Traversal

拜訪每個 node，或者找到特定的值

### Breadth First Search

* 把起點可以走到的 node 全都丟進 queue
* 利用 queue FIFO 的特性，就會先走訪相鄰的 node，再進一步走訪更深層的 node
* 適合找最小成本的路徑
* 比較占記憶體

### Depth First Search

* 把起點可以走到的 node 全都丟進 stack
* stack 是 LIFO，所以會先往深層走，走到底再換其他路線
* 適合判斷路徑是否存在
* 可能比較慢

#### Inorder, Preorder, PostOrder

```javscript
//     9
//   4    20
//  1 6  15 170

// inorder: 1, 4, 6, 9, 15, 20, 170
// Preorder: 9, 4, 1, 6, 20, 15, 170 - 可以重新 create 一個樹，會和原本順序一樣
// Postorder: 1, 6, 4, 15, 170, 20, 9
```
