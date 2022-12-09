var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh','Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.length); // array 길이
console.log(Array.isArray(ary1)); // Array 모듈의 isArray 함수 : array 이면 true, 아니면 false
console.log(ary1.toString());  // array 를 문자열로 바꿔서 반환
console.log(ary1.indexOf('Sato')); // 'Sato'가 있는 가장 앞에 있는 인덱스 값을 반환
console.log(ary1.lastIndexOf('Sato')); // 'Sato'가 있는 가장 뒤에 있는 인덱스 값을 반환'

console.log(ary1.concat(ary2)); //ary1 에 ary2를 붙여줌
console.log(ary1.join('／')); //ary1 에 요소를 '/' 로 나누어서 반환
console.log(ary1.slice(1)); // ary1[n]~마지막 까지의 요소를 반환
console.log(ary1.slice(1, 2)); // ary1[n]~ary1[n-1]번째 요소를 반환
console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));  //splice(시작 인덱스, 제거할 요소의 개수, 추가할 요소1, 추가할 요소2, ...)
console.log(ary1);
console.log(Array.of(20,40,60));
console.log(ary1.copyWithin(1, 3, 5)); //copyWithin(복사할 위치, 복사하는 시작 인덱스, 끝 인덱스)
console.log(ary1);
console.log(ary2.fill('Suzuki', 1, 3)); //fill(채울 data, 시작 인덱스, 끝 인덱스) ary2[1]~ary[3-1] 까지 채움
console.log(ary2);

console.log(ary1.pop()); //마지막 요소를 제거하면서 반환
console.log(ary1);
console.log(ary1.push('Kondo')); //마지막에 요소를 추가
console.log(ary1);
console.log(ary1.shift()); //맨 처음 요소를 제거하면서 반환
console.log(ary1);
console.log(ary1.unshift('Ozawa', 'Kuge'));// 맨 처음에 지정한 data를 추가
console.log(ary1);
console.log(ary1.reverse());//역순으로 정렬
console.log(ary1);
console.log(ary1.sort());// 요소를 오름차순으로 정렬
console.log(ary1);
