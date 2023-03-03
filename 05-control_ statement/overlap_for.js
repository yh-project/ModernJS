for(var i = 1 ; i < 6 ; i++) {
	for(var cnt = 1 ; cnt <= i ; cnt++) {
		process.stdout.write("*"); // 줄바꿈 없이 이어서 출력
	}
	console.log(); // 단계가 끝날 때마다 줄바꿈
}