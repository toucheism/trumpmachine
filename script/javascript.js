

function showTime(){
var homeNav = document.getElementsByClassName("nav-list");

document.getElementById("nav-list-id").style.background= "blue";
}

var racistQuotes =
["I love Mexicans, as long as they stay on the other size of the wall",
"If you're back is wet, you cannot come to our great nation",
"We think we have terroist overseas, we have people here that want everyone to speak spanish"];


function racist(){

	var quote = document.getElementById("quote-text");
	quote.style.color="green";
	if(quote.length === null){
		quote.style.color="red";
	}
	else{
		quote.style.color="purple";
	}


}

