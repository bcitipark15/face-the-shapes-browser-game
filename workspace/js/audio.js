/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that handles all the audio settings and calls in 
 * 				the game.
 */

//Plays the sound for buttons.
function buttonClick() {
	var click = document.getElementById("buttonSound");
    click.play();
}

//Plays the sound for correct answer.
function correctSound() {
	var correct = document.getElementById("correctTada");
    correct.play();
}

//Plays the sound for incorrect answer.
function incorrectSound() {
	var wrong = document.getElementById("incorrectDoh");
    wrong.play();
}

//Plays the sound for unlocked achievement.
function achievementSound() {
	var unlock = document.getElementById("achievementMagic");
    unlock.play();
}

//Mutes all the audio.
function mute() {
	document.getElementById("bgm").muted = true;
	document.getElementById("buttonSound").muted = true;
	document.getElementById("correctTada").muted = true;
	document.getElementById("incorrectDoh").muted = true;
	document.getElementById("achievementMagic").muted = true;
}


//Unmutes all the audio.
function unmute() {
	document.getElementById("bgm").muted = false;
	document.getElementById("buttonSound").muted = false;
	document.getElementById("correctTada").muted = true;
	document.getElementById("incorrectDoh").muted = true;
	document.getElementById("achievementMagic").muted = true;
}

//Function to increase the volume by 10 percent.
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

//Function to decrease the volume by 10 percent.
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

//Variable representing the state of audio. (muted or not)
var state = 0;

//Mutes & unmutes audio and renames the mute toggle button.
function muteButton() {
	if (state == 0) {
		mute();
		document.getElementById("muteButton").innerHTML = "Unmute";
		state++;
	} else if (state == 1) {
		unmute();
		document.getElementById("muteButton").innerHTML = "Mute";
		state--;
	}
}