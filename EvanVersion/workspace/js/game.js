var easterCount = 0;
function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    easterCount++;
	if (easterCount == 10) {
		audio.play();
		easterCount = 0;
	}
	
}

function screenChange(transition) {
	var i, section;
	section = document.getElementsByClassName('screen');
	for (i = 0; i < section.length; i++) {
        section[i].style.display = "none";
    }
	document.getElementById(transition).style.display = "block";
    
}