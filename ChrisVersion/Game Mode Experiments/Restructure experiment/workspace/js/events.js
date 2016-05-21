



/** The following events are all related to screen transitioning when specific buttons are pressed.
 *
 */
//Main Menu Screen button events.
$(document).on('click','#play', function(){
	screenChange('gameMode');
});
$(document).on('click','#toLeaderboard', function(){
	screenChange('leaderboard');
});
//Game Mode Screen button events
$(document).on('click','#classic', function(){
	screenChange('levelSelect');
});
$(document).on('click','#timeAttack', function(){
	screenChange('mode3D');
	selectMode('time');
});
$(document).on('click','#scoreAttack', function(){
	screenChange('mode3D');
	selectMode('score');
});
$(document).on('click','#goBack', function(){
	screenChange('mainMenu');
});
$(document).on('click','#easterEggTwo', function(){
	easterEggTwo();
	screenChange('mainMenu');
});
//Level selection button events.
$(document).on('click', '#levelSelect table.levelList tr td a', function(){
	screenChange('mode3D');
	//Grabs number
	generateFaces(this.id.substr(this.id.length - 1));
	selectFoldout(this.id.substr(this.id.length - 1));
	setCubeFaces();
});
//3D Mode button events.
$(document).on('click', '#hamburger', function(){
	screenChange('mainMenu');
});
$(document).on('click', '#to2D', function(){
	screenChange('mode2D');
	setCubeFaces();
});

//2D Mode button events.
$(document).on('click', '#to3D', function(){
	screenChange('mode3D');
});
$(document).on('click', '#submit', function(){
	validate();
	screenChange('mode2D','resultScreen');
});
$(document).on('click', '#colorArrow', function(){
	colorChanger();
});
$(document).on('click','#foldoutScreen img',function (){
		FaceArray[this.id].arrow2D = (FaceArray[this.id].arrow2D + 1) % 4;
		$(this).css('transform','rotate(' + 90 * FaceArray[this.id].arrow2D + 'deg)');
});


