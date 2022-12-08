var i = 1;
try{
  i = i * j;
} catch(e) {
  console.log(e.message);
} finally {
  console.log('처리가 완료되었다.');
}

var x = 1;
var y = 0;
try{
  if (y === 0) { throw new Error('0으로 나누려고 하였다.'); }
  var z = x / y;
} catch(e) {
  console.log(e.message);
}
