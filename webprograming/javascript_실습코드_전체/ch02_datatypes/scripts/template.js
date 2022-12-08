let name = '하은';
// ` : backquote : enter key 사용 가능, ${name} => 외부 변수값을 가져올 수 있음
let str = `안녕하세요, ${name}씨.
오늘도 좋은 날씨네요!`;
console.log(str);

// string에서는 enter key 사용 불가
let str1 = "안녕하세요, 하은씨, \n 오늘도 좋은 날씨네요!";