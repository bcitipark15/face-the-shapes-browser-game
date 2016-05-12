var colours = ["red", "green", "yellow"];
var currentColour = 0;

function hideTitle() {
	document.getElementById("title").innerHTML="";
}

function buttonColourChange() {	

	if (currentColour == colours.length - 1) {
		currentColour = 0;
	} else {
		currentColour++;
	}

	document.getElementById("colour").style.backgroundColor = colours[currentColour];

}

function changeColour() {
	buttonColourChange();
}

function validate() {

}