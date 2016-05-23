var state = 0;

function buttonClick() {
	var click = document.getElementById("buttonSound");
    click.play();
}

function mute() {
	document.getElementById("bgm").muted = true;
	document.getElementById("buttonSound").muted = true;
}

function unmute() {
	document.getElementById("bgm").muted = false;
	document.getElementById("buttonSound").muted = false;
}

function volume(value) {
	document.getElementById("bgm").volume = value;
	document.getElementById("buttonSound").volume = value;
}

function muteButton() {
	if (state == 0) {
		mute();
		document.getElementById(muteToggle).innerhtml = "Unmute";
		state++;
	} 

	if (state == 1) {
		unmute();
		document.getElementById(muteToggle).innerhtml = "Mute";
		state--;
	}
}