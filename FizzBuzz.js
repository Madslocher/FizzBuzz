/*
	FizzBuzz is a game designed to teach division, players take turn to count from one and up, 
	replacing any number dvisible by the number three with the word "fizz" and any number divisible by five with "Buzz".
	If the number is a divisible of three and five it is replaced with "FizzBuzz".
*/
for(var i = 1; i<=100; i++){					//Loop to initiate the game.


	/*
		if/else starts here, increment through "i" and use % to get remainder after division.
	*/

    if (i % 15 == 0){console.log("FizzBuzz")}		//"FizzBuzz" has to be on top of the loop, as not to trigger three times.

    else if (i % 5 == 0){console.log("Buzz")}

    else if (i % 3 == 0){console.log("Fizz")}

    else (console.log(i))							//If no division with a remainder of 0 was found, print and start over.
}