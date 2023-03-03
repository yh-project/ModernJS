var score = 77;
var result1, result2;

// if ... else 문을 이용한 점수 결정
if (score >= 90) {
	result1 = "A 등급";
}
else if (score >= 50) {
	result1 = "B 등급";
}
else {
	result1 = "C 등급";
}

console.log(result1);

// 삼항 조건 연산자를 이용한 점수 결정
result2 = score>=50 ? (score >=90 ? "A 등급" : "B 등급") : "C 등급";

console.log(result2);
