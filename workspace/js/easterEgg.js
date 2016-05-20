/*
 *	easterEgg.js contains all JavaScript related to easter eggs.
 */



/** Front page easter egg.
 *  Will play when tutturuCount hits 10. 
 */
var tutturuCount = 0;
function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    tutturuCount++;
	if (tutturuCountt == 10) {
		audio.play();
		tutturuCount = 0;
	}
}

/**
 * easterEggTwo Edits the game's style to compliment the easter egg.
 * @return {undefined}
 */
function easterEggTwo() {
	easterEggTwoActivate = true;
	var easterEggTwoActivateHead = document.getElementsByTagName('head').item(0);
	var easterEggTwoActivateStyle = document.createElement("style");
	easterEggTwoActivateStyle.type = "text/css"; 
	easterEggTwoActivateStyle.appendChild(document.createTextNode("#gameContainer{background-color: #042714;"
			+ "background-image: linear-gradient(120deg, #021127, #042714);} "
			+ "body{background-color:black;}"
			+ ".title{color: rgba(200, 100, 100, 0.7);}"
			+ ".buttons{color: rgba(200, 100, 100, 0.7);}"
			+ "#cube img{width: 50%; height: 50%;}"));
	easterEggTwoActivateHead.appendChild(easterEggTwoActivateStyle);
	var easterEggTwoActivateCubeFace = document.getElementById('cube');
	easterEggTwoActivateCubeFace.innerHTML = '<figure class="front"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure> '
            + '<figure class="back"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="right"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="left"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="top"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="bottom"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
}