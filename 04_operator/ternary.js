// 삼항 조건 연산자의 표현식을 if 문으로 변경 가능
var result;
var v = 77;

if(v===77) result = "good";
else result = "bad";

// if 문의 경우 표현식이 아닌 "문" 이라는 것이 중요하다
// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식이다
// 즉, 다른 표현식의 일부가 될 수 있어 유용하다

var result = (v===77) ? "good" : "bad";
console.log(result); // good