var pptest = {};
var new_key = 'new_key'; // 문자열

pptest[new_key] = 'dynamic creation'; // 대괄호로 묶음

console.log(pptest);

var team = { name: 'modern' };

team.members = 5; // members: 5 프로퍼티를 동적으로 생성

console.log(team);