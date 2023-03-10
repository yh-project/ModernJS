var res = 'My score is ' + (7*11);
console.log(res);

// 숫자 -> 문자열
console.log(-0 + ''); // '0'
console.log(-1 + ''); // '-1'
console.log(-Infinity + ''); // '-Infinity'

// 불리언 -> 문자열
console.log(true + ''); // 'true'
console.log(false + ''); // 'false'

// null, undefined -> 문자열
console.log(null + ''); // 'null'
console.log(undefined + '') // 'undefined'

// symbol -> 문자열
// console.log(Symbol() + '') // 타입 에러 : 변환 불가

// 객체 타입
console.log(Math + ''); // '[object Math]'
console.log([77,777] + ''); // '77, 777'