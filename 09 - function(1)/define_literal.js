// 함수 선언문으로 판단
function mul() { console.log("mul"); }
mul(); // mul

// 함수 리터럴로 판단
(function mul() { console.log("mul"); })
mul(); // ReferenceError