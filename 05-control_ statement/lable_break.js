yaho: {
	console.log("yaho~");
	break yaho;
	console.log("yaho again?");
}

// 위처럼 식별자가 붙은 문을 레이블 문이라 한다
// switch, case, default 문들도 레이블 문이다

outer: for(var i = 1; i < 10; i++) {
	for (var j = 1; j< 10; j++) {
		if((i===7) && (j===7)) {
			console.log("77 을 찾았어요");
			break outer;
		}
		console.log("77 을 못찾았어요")
	}
}

// i 와 j 모두 7 이라면 중첩 for 문 전체 탈출 -> 레이블 식별자를 이용