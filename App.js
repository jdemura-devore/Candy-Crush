var addedCandy = "";
var candy = "";
var eatenCandy = "";
function eatCandy() {
	if (candy > 0) {
		candy--;
	alert("*munch*");
	eatenCandy++;
	alert("You have eaten " + eatenCandy + " candy.");
	}
	else {
		alert("You have no candy!");
	}
}
function addCandy() {
	candy++;
	alert ("You have " + candy + " candies.");
}