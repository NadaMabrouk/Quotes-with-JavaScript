var myQuotes = ["The greatest happiness of life is the conviction that we are loved;loved for ourselves, or rather, loved in spite of ourselves.",
		"All, everything that I understand, I only understand because I love.",
		"And remember, as it was written, to love another person is to see the face of God.",
		"I'm much more me when I'm with you.",
		"It's a very dangerous state. You are inclined to recklessness and kind of tune out the rest of your life and everything that's been important to you. It's actually not all that pleasurable. I don't know who the hell wants to get in a situation where you can't bear an hour without somebody's company."];
var owners = ["The Notebook ","Leo Tolstoy", "Les Miserables ","(UNknown)","Colin Firth "];

		window.onload = function generateQuotes () {
			
			for(var i = 0; i < 10 ; i++){
				var index = Math.floor( Math.random() * 6);
				var chosenQuote = myQuotes[index];
				var auther = owners[index];

				var quotediv = document.createElement("div")
				var para = document.createElement("p");				
				para.innerHTML=chosenQuote;
				para.id = "div1";
				var citation = document.createElement("cite");
				citation.innerHTML = "&mdash; " + auther;
				para.appendChild(citation);
				quotediv.appendChild(para);

				var element = document.getElementById("container");
				element.appendChild(quotediv); 
			}
		}