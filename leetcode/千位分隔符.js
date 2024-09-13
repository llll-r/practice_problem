/**
 *  parseToMoney( 1234.56 ) // return '1,234.56'
    parseToMoney(123456789); // return '123,456,789'
    parseToMoney(1087654.321); // return '1,087,654.321'
 */


const parseToMoney = ( num ) => {
  num = parseFloat( num.toFixed( 3 ) )
  let interger = String( num ).split( '.' )[ 0 ]
  const decimal = String( num ).split( '.' )[ 1 ]
  interger = interger.replace( /\d(?=(\d{3})+$)/g, '$&,' )
  a =  interger.replace(  /\d(?=\d{3})+$  /g, );
  return interger + '.' + (decimal ||'')
}

console.log(parseToMoney( 1087654.321));