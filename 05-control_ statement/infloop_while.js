// 무한루프를 이용한 구구단 7단
var i = 1;

while(true) {
	console.log(`7 * ${i} = ${7*i}`);
	i++;

	if(i >= 10) break;
	// 변수 i 의 값이 10이 되는 순간 무한루프를 break 문을 통해 탈출한다
}