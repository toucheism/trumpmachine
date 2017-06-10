// Document better


var yourName;

// //this function allows name input, via onclick event in html
namePrompt=function (){
var name = document.getElementById("nameText").value;
//var nameField = document.getElementById("nameInputId");
yourName =name
//.style.color = "blue";
}

addEventListener("keypress", function(e){
	var name = document.getElementById("nameText").value;

	if(e.keyCode == 13){
		yourName = name;
	}



})

// function namePrompt(){
// 	name =  document.getElementById("nameText").value;
// 	var nameForm = document.getElementById("userNameForm");
// 	yourName = yourName.push(name);


// }


var racistQuotes =
["And isn’t it funny. I’ve got black accountants at Trump Castle and Trump Plaza. Black guys counting my money! I hate it",
"the Hispanics, the Muslims and the blacks - all criminals",
"The best taco bowls are made in Trump Tower Grill. I love Hispanics!",
"What can be simpler or more accurately stated? The Mexican Government is forcing their most unwanted people into the United States. They are, in many cases, criminals, drug dealers, rapists, etc.",
"I’m not a racist. I don’t have a racist bone in my body."];

var sexistQuotes = [ "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!"
,
"Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
"You know, it really doesn't matter what the media write as long as you've got a young, and beautiful, piece of ass.",
"If I were running 'The View', I'd fire Rosie O'Donnell. I mean, I'd look at her right in that fat ugly face of hers, I'd say 'Rosie, you're fired.'",
"I'll supply funds and she'll take care of the kids. It's not like I'm gonna be walking the kids down Central Park.",
"26,000 unreported sexual assaults in the military -only 238 convictions. What did the geniuses expect when they put men and women together?",
"All of the women on The Apprentice flirted with me -consciously or unconsciously- that's to be expected.",
"I mean we could say politically correct that look doesn't matter, but the look obviously matters. Like you wouldn't have your job if you weren't beautiful",
"You have to treat 'em like shit",
"You could see there was blood coming out of her eyes, blood coming out of her...wherever"

];
var ridiculousQuotes = ["The wall will go up and Mexico will start behaving",
"The only people I want counting my money are little short guys that wear yarmulke every day.",
"One of the key problems today is that politics is such a disgrace. Good people don't go into government.",
"He's not a war hero. He's a war hero because he was captured. I like people that weren't captured, OK, I hate to tell you.(regarding Senator John McCain)",
"If you can't get rich dealing with politicians, there's something wrong with you.",
"Appreciate the congrats for being right on radical Islamic terrorism, I don't want congrats, I want toughness & vigilance. We must be smart. (after 50 people were killed in a Florida nightclub)",
"The U.S. will invite El Chapo, the Mexican drug lord who just escaped prison, to become a U.S. citizen because our 'leaders' can't say no!",
"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
"We won with the poorly educated. I love the poorly educated!"
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
		quote.innerHTML = "Listen  " + yourName  + ", " + newQuote;
//js css styling to resize
		quote.style.fontSize = " large";
	}

};

function sexist(){
	var piggy = document.getElementById("quote-text");


	for (var i = 0; i < sexistQuotes.length; i++ ){

//random selection of quote
		var secondQuote = sexistQuotes[Math.floor(Math.random()*sexistQuotes.length)];
//innerHTML to replace current text element
		piggy.innerHTML = "Listen  " + yourName + ", " + secondQuote;
//js css styling to resize
		piggy.style.fontSize = " large";
	}
};

function ridiculous(){
	var stupid = document.getElementById("quote-text");


	for (var i = 0; i < ridiculousQuotes.length; i++ ){

//random selection of quote
		var thirdQuote = ridiculousQuotes[Math.floor(Math.random()*ridiculousQuotes.length)];
//innerHTML to replace current text element
		stupid.innerHTML = "Listen  " + yourName + ", " + thirdQuote;
//js css styling to resize
		stupid.style.fontSize = " large";
	}
};

