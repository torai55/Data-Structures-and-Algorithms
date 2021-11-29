# Dynamic Programming

可分成五步驟：

1. Find recursive relation：先找出規律
2. Recursive (top-down)：寫成遞迴
3. Recursive + memo (top-down)：利用 cache 加速
4. Iterative + memo (bottom-up)：寫成迴圈解
5. Iterative + N variables (bottom-up)：把變數命名

[House Robber 解答](https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.) 有示範。

1. 要不要取第 i 個房子，可分成兩種情況：
   1. 取了第 i 個，總和為第 i 房子加上第 i - 2 房子以前的最優解
   2. 不取第 i 個，總和為第 i - 1 房子以前的最優解

    所以第 i 個房子的最優解為： `rob(i) = Math.max(rob(i - 2) + nums[i], rob(i - 1))`

2. 寫成遞迴解：

    ```JavaScript
    var rob = function(nums) {
      function maxMoney(i) {
        if (i < 0) return 0
        const currentValue = nums[i]
        return Math.max(maxMoney(i - 2) + currentValue, maxMoney(i - 1))
      }
      
      return maxMoney(nums.length - 1)
    }
    ```

3. 加入快取：

    ```JavaScript
    var rob = function(nums) {
      const cache = []
      function maxMoney(i) {
        if (i < 0) return 0
        if (cache[i] !== undefined) return cache[i]
        const currentValue = nums[i]
        const result = Math.max(maxMoney(i - 2) + currentValue, maxMoney(i - 1))
        cache[i] = result
        return result
      }
      return maxMoney(nums.length - 1)
    }
    ```

4. 寫成迴圈解：

    ```JavaScript
    var rob = function(nums) {
      const cache = [0, nums[0]]
      for (let i = 2; i <= nums.length; i++) {
        cache[i] = Math.max(cache[i - 2] + nums[i - 1], cache[i - 1])
      }
      
      return cache[nums.length]
    }
    ```

5. 把變數命名：

    ```JavaScript
    var rob = function(nums) {
      let prev1 = 0
      let prev2 = 0
      
      for (let i = 0; i < nums.length; i++) {
        let tmp = prev1
        prev1 = Math.max(prev2 + nums[i], prev1)
        prev2 = tmp
      }
      
      return prev1
    }
    ```

## LeetCode 練習題

1. [House Robber](https://leetcode.com/problems/house-robber/)
2. [Best Time To Buy And Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
3. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
