

//Still need to do something cool here for the naviagation
function showTime(){
var homeNav = document.getElementsByClassName("nav-list");

document.getElementById("nav-list-id").style.background= "blue";
}
//Global variables
//Quotes array
var racistQuotes =
["I love Mexicans, as long as they stay on the other side of the wall!",
"If you're back is wet, you cannot come to our great nation!",
"We think we have terroist overseas, we have people here that want everyone to speak spanish!",
"If they don't speak-a English, then why are they here?"];
var sexistQuotes = [];
var classistQuotes = [];

//
function racist(){
//renames this varibale to make it easy to type
	var quote = document.getElementById("quote-text");

//for loop to iterate through the array
	for (var i = 0; i < racistQuotes.length; i++ ){

//random selection of quote
		var newQuote = racistQuotes[Math.floor(Math.random()*racistQuotes.length)];
//innerHTML to replace current text element
		quote.innerHTML = "Listen people," + " " + newQuote;
//js css styling to resize
		quote.style.fontSize = " xx-large";
	}

}

