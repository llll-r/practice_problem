```js
const instanceof = (instance, classFunc) =>{
  if( typeof instance !== "object"  || instance  == null) return false;
  while(instance.__proto__){
    if(instance == classFunc.prototype) return true
    instance = instance.__proto__;
  }
  return false
}
