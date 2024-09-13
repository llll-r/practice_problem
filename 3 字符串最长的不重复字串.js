/**
 * 输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
 */
const maxStrLength = ( str ) => {
  if ( str.length == 0 ) return 0;
  let max = 0
  for ( let i = 0; i < str.length; i++ ){
    let temp = [];
    for ( let j = i + 1; j < str.length; j++ ){
      if ( temp.includes( str[ j ] ) ) {
        if ( max < temp.length ) {
          max = temp.length
        }
        break
      } else {
        temp.push( str[ j ] )
}
    }
  }
  return max
}
console.log(maxStrLength('bbb'));
