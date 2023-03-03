var day = 3;
var dayStr;

switch(day) {
	case 0: dayStr = "Monday";
	case 1: dayStr = "Tuesday";
	case 2: dayStr = "Wednesday";
	case 3: dayStr = "Thursday";
	case 4: dayStr = "Friday";
	case 5: dayStr = "Saturday";
	case 6: dayStr = "Sunday";
	default: dayStr = "Invalid Day";
}

console.log(dayStr);
// 예상 결과는 Thursday
// 실제 결과는 Invalid Day