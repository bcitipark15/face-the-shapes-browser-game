var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');

function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    audio.play();
}

//function easterEggTwo() {
window.onload = function() {
	easterEggTwo = true;
	var easterEggTwoHead = document.getElementsByTagName('head').item(0);
	var easterEggTwoStyle = document.createElement("style");
	easterEggTwoStyle.type = "text/css"; 
	easterEggTwoStyle.appendChild(document.createTextNode("#gameContainer{background-color: #042714;"
			+ "background-image: linear-gradient(120deg, #021127, #042714);} "
			+ "body{background-color:black;}"
			+ ".title{color: rgba(200, 100, 100, 0.7);}"
			+ ".buttons{color: rgba(200, 100, 100, 0.7);}"
			+ "#cube img{width: 50%; height: 50%;}"));
	easterEggTwoHead.appendChild(easterEggTwoStyle);
	var easterEggTwoCubeFace = document.getElementById('cube');
	easterEggTwoCubeFace.innerHTML = '<figure class="front"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure> '
            + '<figure class="back"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="right"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="left"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="top"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="bottom"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
}
//}
