var name_1 = 'na';
var name_2 = 'me';
var members_1 = 'mem';
var members_2 = 'bers';

var team = {
	[name_1+name_2]: 'modern' // 내부에서 계산된 프로퍼티 이름으로 동적 생성
};
team[members_1+members_2] = 5; // 외부에서 계산된 프로퍼티 이름으로 동적 생성

console.log(team);