var count = 0;
function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    count++;
	if (count == 10) {
		audio.play();
		count = 0;
	}
	
}

/* Calculate the available screen real estate without the address bar and set it as the height  */
function navBar() {
	var a = screen.height;
	var b = window.innerHeight;
	var difference =  a - ( (a - b) / 4 ) ;
	
	$('#gameContainer').css('height', Math.round(difference));
	
}
function screenChange(current, next) {
	document.getElementById(next).style.display = "block";
	document.getElementById(current).style.display = "none";
	if (	next === 'octahedronContainer' 	|| 	next === 'pyramidContainer' || 
			next === 'cubeContainer' 		|| 	next === 'rectangleContainer') {
		document.getElementById('mode3D').style.display = "block";
	} else if (next === 'mainMenu') {
		document.getElementById('octahedronContainer').style.display = "none";
		document.getElementById('pyramidContainer').style.display = "none";
		document.getElementById('cubeContainer').style.display = "none";
		document.getElementById('rectangleContainer').style.display = "none";
	}
}

window.addEventListener("orientationchange", navBar, false);

