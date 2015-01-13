/**
 * This is an assignment in Introduction to Javascript for Thinkful front-end developer bootcamp.
 */

$(document).ready(function () {
	var ones = ["one", "two", "three", "four", "five",
					"six", "seven", "eight", "nine"] ;
	var upto19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
					"sixteen", "seventeen", "eighteen", "nineteen"];
	var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	for (var i = 1; i <= 99; i++) {
		var res = "";
		if (i % 3 == 0) {
			res += "fizz";
		}
		if(i % 5 == 0) {
			res += "buzz";
		}
		if (res == "") { // not divisible by 3 nor by 5
			// let's calculate the number here
			if (i <= 9) {
				res = ones[i-1];
			} else if (i <= 19) {
				res = upto19[i-10] ;
			} else {
				res = tens[parseInt(i/10) - 2] + " " + ones[i%10 -1];
			}
		}

		res = res + "<br/>";
		$("body").append(res);
	}
});
