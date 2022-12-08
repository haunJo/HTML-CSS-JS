// breake 사용 예
var result = 0;
for (var i = 1; i <= 100; i++) {
  result += i;
  if (result > 1000) { break; }
}
console.log('합계값이 1000을 넘은 것은 ' + i);

// continue 사용 예
var result = 0;
for (var i = 1; i < 100; i++) {
  if (i % 2 === 0) { continue; }
  result += i;
}
console.log('합계：' + result);
