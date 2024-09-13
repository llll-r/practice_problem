/**
 * s='babad'
 * 输出：'bab'
 * s='cbbd'
 * 
 * 输出：'bb'
 */

//首先判断一个字符串是不是回文字符串
const isPraderome = (s) => {
    for(let i =0, j=s.length-1; i<j; i++, j--) {
        if(s[i] !== s[j]) {
            return false
        }
    }
    return true
}

const longestPraderome = (s) =>{
    if(s.length == 1 || isPraderome(s)) return s
    let res = ''
    for(let i=0; i<s.length;i++){
        for(let j = i+1; j<s.length ; j++){
            let temp = s.substr(i,j);
            // console.log('temp:',temp);
            if(temp && isPraderome(temp) && temp.length > res.length){
                res = temp
            }
        }
    }
    return res
}
//test longestPraderome
console.log(longestPraderome('babad')) //bab
console.log(longestPraderome('cbbd')) //bb
console.log(longestPraderome('a')) //a
console.log(longestPraderome('ac')) //a
console.log(longestPraderome('bb')) //bb
console.log(longestPraderome('ccc')) //ccc
console.log(longestPraderome('aaaa')) //aaaa

