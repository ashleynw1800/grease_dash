/*
Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

1000 = 1 second
500 = 1/2 second
250 = 1/4 second
*/
var counterSpeed = 1200;

// Set this number you want your counter to count up to. Default is 20
var topSpeed = 18;

// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 55;

var myVar = setInterval(speedCounter2, counterSpeed);

export function speedCounter2() {
	if (speedNumber > topSpeed) {
		speedNumber--;
		document.getElementById("speedTag2").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}