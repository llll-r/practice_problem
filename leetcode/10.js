const isMatch = (s, p) => {
  let arr = [];
  let str = p;
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (str[i] === arr[i] || str[i] == ".") {
      arr.pop();
      str = str.slice(i + 1);
    }
    if (str[i] == "*") {
      let temp = arr[arr.length - 1];
      let k = i;
      while (temp == arr[k] && k >= 0) {
        arr.pop();
        k--;
      }
      str = str.slice(i + 1);
    }
  }
  return arr.length == 0;
};
console.log(isMatch("aanddddd", "a*"));
