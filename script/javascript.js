

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
"One of the key problems today is that politics is such a disgrace. Good people don't go into government.",
"He's not a war hero. He's a war hero because he was captured. I like people that weren't captured, OK, I hate to tell you.(regarding Senator John McCain)",
"If you can't get rich dealing with politicians, there's something wrong with you.",
"Appreciate the congrats for being right on radical Islamic terrorism, I don't want congrats, I want toughness & vigilance. We must be smart. (after 50 people were killed in a Florida nightclub)",
"The U.S. will invite El Chapo, the Mexican drug lord who just escaped prison, to become a U.S. citizen because our 'leaders' can't say no!",
"the concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
"We won with poorly educated. I love the poorly educated."
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
		quote.innerHTML = '<q>' + "Listen people," + " " + newQuote;
//js css styling to resize
		quote.style.fontSize = " xx-large";
	}

};

function sexist(){
	var quote1 = document.getElementById("quote-text");


	for (var i = 0; i < sexistQuotes.length; i++ ){

//random selection of quote
		var secondQuote = sexistQuotes[Math.floor(Math.random()*sexistQuotes.length)];
//innerHTML to replace current text element
		quote1.innerHTML = '<q>' + "Listen people," + " " + secondQuote;
//js css styling to resize
		quote1.style.fontSize = " xx-large";
	}
};

function ridiculous(){
	var quote2 = document.getElementById("quote-text");


	for (var i = 0; i < ridiculousQuotes.length; i++ ){

//random selection of quote
		var thirdQuote = ridiculousQuotes[Math.floor(Math.random()*ridiculousQuotes.length)];
//innerHTML to replace current text element
		quote2.innerHTML = '<q>' + "Listen people," + " " + thirdQuote;
//js css styling to resize
		quote2.style.fontSize = " xx-large";
	}
};

