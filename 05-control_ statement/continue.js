var count = 0;

for(var i = 1; i < 11; i++) {
	if(i%2) continue;
	count++;
}

console.log(count);
// if(i%2) continue -> 만약 i 값이 짝수라면 중단하고 다음 반복 실행으로 이동
//                  -> 만약 i 값이 홀수라면 continue 는 실행하지 않고 count++ 실행