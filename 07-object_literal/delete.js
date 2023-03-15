var team = { 
	name: 'modern',
	members: 5
};

delete team.members; // members 프로퍼티 삭제
delete team.topic; // 존재하지 않는 프로퍼티 -> 그냥 무시

console.log(team);