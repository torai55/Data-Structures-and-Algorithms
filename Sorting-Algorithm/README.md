# Sorting

* [VisuAlgo](https://visualgo.net/en/sorting)
* [stable sort](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)：如果有相同大小的數據，會保留原本的順序。

## Bubble Sort

![Bubble sort graph](../images/Sorting_bubblesort_anim.gif)

阿就冒泡。

* best: $O(n)$
* worst: $O(n^2)$
* stable sort

## Selection Sort

![Selection Sort](../images/selection-sort-in-javascript-1.gif)

找到最小的 item，和未排序的第一筆資料交換。

* $O(n^2)$
* unstable sort => 例如 [4, 2, 3, 4, 1]

## Insertion Sort

![Insertion Sort](../images/insertion_sort.gif)

把未排序資料插入到有序資料之中。資料幾乎快排好時，用這個速度最快。

* best: $O(n)$
* worst: $O(n^2)$
* stable sort

## Merge Sort

![Merge Sort](../images/Merge-sort-example-300px.gif)

將 array 拆到剩一個 item，再來兩兩合併排序。

* Divide & Conquer：利用 recursion => 通常時間複雜度為 $O(nlogn)$
* stable sort
* space complexity: $O(n)$

## Quick Sort

![Quick Sort1](../images/quick_sort_1.gif)
![Quick Sort2](../images/Quicksort-example.gif)

* Divide & Conquer：利用 recursion => 通常時間複雜度為 $O(nlogn)$
* Space Complexity: $O(logn)$
* unstable sort
