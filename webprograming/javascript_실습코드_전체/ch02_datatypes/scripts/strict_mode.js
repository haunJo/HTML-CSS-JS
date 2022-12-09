// use strict를 사용 권장 => source code의 잠재적 error를 걸러내기 위한 목적
"use strict";

//x = 3.14;  // This will cause an error (x is not defined).
//console.log(x);

y = 3.14;    // This will not cause an error.
console.log(y);
myFunction();
console.log(y);

function myFunction() {
  "use strict";
  y = 3.14;  // This will cause an error (y is not defined).
}