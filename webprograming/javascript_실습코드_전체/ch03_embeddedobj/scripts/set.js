var s = new Set(); 
s.add(10);
s.add(5);
s.add(100);
s.add(50);
s.add(5);

//let s = new Set([10, 5, 100, 50, 5]); 

console.log(s.has(100));
console.log(s.size);

for (let val of s.values()) {
  console.log(val);
}

for (let val of s) {
  console.log(val);
}

s.delete(100);
console.log(s.size);
s.clear();
console.log(s.size);


// NaN 객체 추가
var s = new Set();
s.add(NaN);
s.add(NaN); // 동일한 값이 이미 있어 무시됨
console.log(s.size);
// {} 객체 추가 => 각각 다른 객체로 인식 (객체 추가할 때 객체가 저장된 address가 틀림)
s.add({});  
s.add({});
console.log(s.size);

var a = {}  // a라는 객체에 새로 생성된 {} 객체의 1개 주소가 들어가 있음
s.add(a);
s.add(a); // 동일한 객체인 a를 사용했기 때문에 무시됨
console.log(s.size);