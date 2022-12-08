let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2);

// console.log(sym1 + ''); // Symbol은 + 연산 불가
// console.log(sym1 - '0'); // Symbol은 - 연산 불가
console.log(typeof !!sym1);
console.log(!!sym1);
