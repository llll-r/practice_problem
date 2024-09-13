
const searchMax = ( str ) => {
  let obj = {}
  for ( let i = 0; i < str.length; i++ ){
    if ( obj[ str[ i ] ] ) {
      obj[ str[ i ] ]++
    } else {
      obj[ str[ i ] ] = 1
    }
  }
  let max = 0, maxStr = ''
  Object.keys( obj )?.map( item => {
    if(obj[item] > max){
      max = obj[item] ;
      maxStr = item
    }
  } )
  return {maxStr, max}
}
console.log(searchMax('abcsbaddbizdbas'));

//写一个函数，返回一个字符串中出现次数最多的字符和出现的次数
//如：searchMax('abcsbaddbizdbas') 返回：{b：4}


