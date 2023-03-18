var str = "Hello JavaScript!";

console.log(str[7]); // a

// length 프로퍼티를 가짐
console.log(str.length); // 17

str[7] = 'A';
console.log(str); // Hello JavaScript!
// 문자열은 변경 불가능한 값 -> A로 바뀌지 않음