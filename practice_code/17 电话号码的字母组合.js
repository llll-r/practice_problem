/**
 * @param {string} number
 * @return {string[]}
 * 
 * 电话号码的字母组合  
 * digits = "23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * digits = ""
 * 输出：[]
 * 
 */

var letterCombinations = function (digits) {
    let map = {
        '1': [''],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    if(digits.length === 0) return [];
    let result = [""];
    for(let v of digits){
        const t = [];
        for(let m of map[v]){
            for(let r of result){
                t.push(r+m)
        }
    }
    result = t
}
return result

}
console.log("letterCombinations", letterCombinations("247")) //["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
function test6(ds) {
    if (!ds) {
        return [];
    }
    const d_Map = {
        '1': [''],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };


let result = [''];
for (let dt of ds) {
    const t = [];
    for (let c of d_Map[dt]) {
        for (let str of result) {
            t.push(str + c);
        }
    }
    result = t;
}

return result;
}