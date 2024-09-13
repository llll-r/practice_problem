/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result= [];
    for(let l = 1; l<=2 *n -1; l++ ){
        let str = ''
        for(let m = 1; m <= n; m++){
            str+= '('
        }
        for(let k = n; k>= 1; k--){
            str+= ')'
        }
        result.push(str)
    }
   return result
};
// @lc code=end

