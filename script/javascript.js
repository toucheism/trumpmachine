

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
var sexistQuotes = [“Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!”
,
"Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
"You know, it really doesn't matter what the media write as long as you've got a young, and beautiful, piece of ass.",
"If I were running 'The View', I'd fire Rosie O'Donnell. I mean, I'd look at her right in that fat ugly face of hers, I'd say 'Rosie, you're fire.'",
"I'll supply funds and she'll take care of the kids. It's not like I'm gonna be walking the kids down Central Park.",
"26,000 unreported sexual assaults in the military -only 238 convictions. What did the geniuses expect when they put men and women together?",
"All of the women on The Apprentice flirted with me -consciously or unconsciously- that's to be expected.",
"I mean we could say politically correct that look doesn't matter, but the look obviously matters. Like you wouldn't have your job if you weren't beautiful",
"You have to treat 'em like shit",
"You could see there was blood coming out of her eyes, blood coming out of her...wherever",

];
var ridiculousQuotes = ["The wall will go up and Mexico will start behaving",
"The only people I want counting my money are little short guys that wear yarmulke every day.",

];

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

