var data = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data[0]);

// Java, C++ 배열 원소의 data type이 동일해야만 함.
var data = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
console.log(data[1][0]);

// 배열 원소의 data type이 서로 틀려도 상관 없음
var data = [15, 'Ajax', 35.6, function() {console.log('hello')}];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]() );