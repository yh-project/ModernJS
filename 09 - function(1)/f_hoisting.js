console.dir(add); // f add(x, y)
console.dir(sub); // undefined

console.log(add(3, 4)); // 7
// console.log(sub(4, 3)); // TypeError

// 함수 선언문
function add(x, y) {
	return x + y;
}

// 함수 표현식
var sub = function (x, y) {
	return x - y;
};