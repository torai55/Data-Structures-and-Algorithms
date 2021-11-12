# Tree

![binary tree](../images/BinaryTree.png)

full binary tree：除了 leaf 外每個節點都有兩個 child。

complete binary tree：除了最後一層外，各層節點全滿。最後一層節點全靠左。第 i 個節點的 parent 為 $\lceil \frac{i}{2} \rceil$ 。

perfect binary tree：各層節點全滿，同時為 full binary tree、complete binary tree。

* 最後一層的節點數量等於其他層總和 + 1。
* 第 H 層有 $2^{H-1}$ 個節點。
* 所以高度為 H 的 perfect binary tree 總節點數量為 $2^H-1$ 。

|manipulate|complexity|
|------|----------|
|lookup|$O(log n)$|
|insert|$O(log n)$|
|delete|$O(log n)$|

## Binary Search Tree

![binary search tree](../images/BinarySearchTree.png)

* 右邊 subtree 永遠大於自己，左邊的 subtree 永遠小於自己。
* 若不平衡的話，就等於在操作 linked list，時間複雜度會變成 $O(log n)$ 。所以需要 AVL tree、red black tree 等等自動平衡的樹。

## AVL Tree/Red-Black Tree

插入時會進行 rotate。自動將高度平衡，而不會形成左傾或右傾樹。

[AVL Tree](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)  
[How It Works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)

[Red-Black Tree](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)  
[How It Works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)

## Binary Heap

* 最大/最小累堆：root 永遠大於/小於左邊或右邊的子節點。
* 實作 priority queue 的好幫手。
* 插入時，leaf 新增節點，使其維持是 complete binary tree，再確認是否大於父節點，是的話就和父節點交換位址，再繼續往上確認到根節點。可參考 [VisuAlgo](https://visualgo.net/en/heap)。
* 插入比 BST 快，但搜尋比較慢。
* 回傳 max/min 的方法很快，只需要找 root。

|manipulate|complexity|
|------|----------|
|lookup|$O(n))$|
|insert|$O(log n)$|
|delete|$O(log n)$|

## Trie

![trie](../images/Trie_example.svg)

* 由根節點代表空字串，一步步往下走，慢慢拼成一個單字。
* 可參考 [YUI HUANG 演算法學習筆記](https://yuihuang.com/trie/)。
