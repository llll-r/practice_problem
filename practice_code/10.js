const isMatch = (s, p) => {
  let arr = [];
  let str = p;
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (str[i] === arr[i] || str[i] == ".") {
      arr.pop();
      // str = str.slice(i + 1);
      continue
    }
    if (str[i] == "*") {
      let temp = arr.pop();
      while (temp == arr[arr.length-1] ) {
        arr.pop();
      }
      // str = str.slice(i + 1);
      continue
    }
  }
  return arr.length == 0;
};
console.log(isMatch("aanddddd", "a*"));
