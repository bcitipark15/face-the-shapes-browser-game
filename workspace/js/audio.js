function buttonClick() {
	var click = document.getElementById("buttonSound");
    click.play();
}

function correctSound() {
	var correct = document.getElementById("correctTada");
    correct.play();
}

function incorrectSound() {
	var wrong = document.getElementById("incorrectDoh");
    wrong.play();
}

function mute() {
	document.getElementById("bgm").muted = true;
	document.getElementById("buttonSound").muted = true;
}

function unmute() {
	document.getElementById("bgm").muted = false;
	document.getElementById("buttonSound").muted = false;
}

// function volume(value) {
// 	document.getElementById("bgm").volume = value;
// 	document.getElementById("buttonSound").volume = value;
// }

var volumeVal = 0.5;
function volumeUp() {
	if (volumeVal >= 1) {
		volumeVal = 1;
	} else {
		volumeVal += 0.1
		document.getElementById("bgm").volume = (volumeVal);
		document.getElementById("buttonSound").volume = (volumeVal);
	}
	document.getElementById("volumePercent").innerHTML=(volumeVal * 100).toFixed() + "%";
}

function volumeDown() {
	if (volumeVal <= 0) {
		volumeVal = 0;
	} else {
		volumeVal -= 0.1
		document.getElementById("bgm").volume = (volumeVal);
		document.getElementById("buttonSound").volume = (volumeVal);
	}
	document.getElementById("volumePercent").innerHTML=(volumeVal * 100).toFixed() + "%";
}

var state = 0;
function muteButton() {
	if (state == 0) {
		mute();
		document.getElementById(muteButton).innerhtml = "Unmute";
		state++;
	} else if (state == 1) {
		unmute();
		document.getElementById(muteToggle).innerhtml = "Mute";
		state--;
	}
}