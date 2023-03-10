var res = true;
var score;

if(res) score = 100;

// && 연산자를 이용한 대체
score = res && 100;
// res 가 true 라면 규칙에 따라 100 이 평가의 결과로 score 변수에 할당

console.log(score);

var res = false;
var score;

if(!res) score = 0;

// || 연산자를 이용한 대체
score = res || 0;
// res 가 false 라면 규칙에 따라 0 이 평가의 결과로 score 변수에 할당

console.log(score);