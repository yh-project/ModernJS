// Short Circuit Evaluation
console.log('Pizza' || 'Chicken'); // 'Pizza'
// 'Pizza' 피연산자의 평가 결과는 Truthy 값으로 true
// 결국 뒤의 'Chicken' 은 평가할 필요도 없이 바로 'Pizza' 를 출력

console.log('Pizza' && 'Chicken'); // 'Chicken'
// 'Pizza' 피연산자의 평가 결과는 Truthy 값으로 true
// 아직 표현식의 결과가 나오지 않았으니 계속 평가 진행
// 'Chicken' 피연산자의 평가 결과는 Truthy 값으로 true
// 표현식이 true 라는 평가 결과나옴 -> 'Chicken' 출력