var score = 7 * '11';
console.log(score); // 77

console.log('100' > 77); // true

// 문자열 -> 숫자
console.log(+''); // 0
console.log(+'str'); // NaN

// 불리언 -> 숫자
console.log(+true); // 1

// null, undefined -> 숫자
console.log(+null); // 0
console.log(+undefined); // NaN

// symbol -> 숫자
// console.log(+Symbol()); // 타입 에러 : 변환 불가

// 객체 -> 숫자
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[77, 777]); // NaN