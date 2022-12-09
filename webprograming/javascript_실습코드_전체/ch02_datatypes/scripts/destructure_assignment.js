// destructuring assigment (배열)
var data = [56, 40, 26, 82, 19, 17, 73, 99];
var [x0, x1, x2, x3, x4, x5, x6, x7] = data
console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
console.log(x7);

// destructuring assigment에 ...(spread operator) 사용
var data = [56, 40, 26, 82, 19, 17, 73, 99];
var [x0, x1, x2, ...other] = data
console.log(x0);
console.log(x1);
console.log(x2);
console.log(other);
// 값 치환
var x = 1;
var y = 2;
[x, y] = [y, x];
console.log(x, y);

// destructuring assigment (객체)
var book = { title: 'Java포켓 레퍼런스', publish: '기술평론사', price: 2680 };
var { price, title, memo = '없음' } = book;
console.log(title);
console.log(price);
console.log(memo);
console.log(book.price === price)

// 중첩된 객체 분해
var book = { title: 'Java포켓 레퍼런스 ', publish: '기술평론사', price: 26800,
  other: { keywd: 'Java SE 8', logo: 'logo.jpg' } };
var { title, other, other: { keywd } } = book;
console.log(title);
console.log(other);
console.log(keywd);

// 변수 publish의 별명을 company로 지정
var book = { title: 'Java포켓 레퍼런스', publish: '기술평론사' };
var { title: name, publish: company } = book;
console.log(name);
console.log(company);
