/**
 *	Experimental version of rendering in the foldouts.
 *
 *
 *
 */
 
FaceArray = [];
var rotation = 0;

//resize foldout when screen size changes.
window.onresize = setCubeFaces;
function selectFoldout(num){
	foldout = num;
}
function setCubeFaces(){
	//determine size of faces according to screen size.
	if($('#foldoutScreen').innerHeight() < $('#foldoutScreen').innerWidth()){
		faceSize =  Math.floor($('#foldoutScreen').innerHeight()/4);
	} else {
		faceSize = Math.floor($('#foldoutScreen').innerWidth()/4);
	}
	$('#foldoutScreen img').css({'position':'absolute','width': + faceSize + 'px',
								 'height': faceSize + 'px', 'border': '1px solid black'});
	setFoldout(foldout,faceSize);
}



//Sets the position of each face on the foldout depending on foldout number and face size.
function setFoldout(foldoutNum, faceSize){
	
	/* Used to set the position of each face in the foldout. */
	foldoutGridCol = [	$('#foldoutScreen').innerWidth()/2 - faceSize * 1.5 + 'px',
						$('#foldoutScreen').innerWidth()/2 - faceSize/2 + 'px',
						$('#foldoutScreen').innerWidth()/2 + faceSize/2 + 'px'];
	foldoutGridRow = [ 	'0px',
						faceSize + 'px',
						2 * faceSize + 'px',
						3 * faceSize + 'px'];
	var LEFT = 0;
	var MIDDLE = 1;
	var RIGHT = 2;

	//Set facetop Row and Col settings.
	var facetopRight = "459"
	var facetopRow, facetopCol;
	if(facetopRight.indexOf(foldoutNum) > -1)
		facetopCol = foldoutGridCol[RIGHT];
	else 
		facetopCol = foldoutGridCol[MIDDLE];
	facetopRow = foldoutGridRow[0];
	
	//Set faceleft Row and Col settings.
	var faceleft2ndCol = "034"
	var faceleft1stCol = 1;
	var faceleft4thCol = 6;
	var faceleftRow, faceleftCol;
	
	if(faceleft2ndCol.indexOf(foldoutNum) > -1)
		faceleftRow = foldoutGridRow[1];
	
	else if (foldoutNum === faceleft1stCol)
		faceleftRow = foldoutGridRow[0];
	
	else if (foldoutNum === faceleft4thCol)
		faceleftRow = foldoutGridRow[3];
	
	else 
		faceleftRow = foldoutGridRow[2];
	
	
	faceleftCol = foldoutGridCol[LEFT];
	
	
	//Set faceRight Row and Col settings.
	var faceright1stCol = "12368"
	var facerightRow, facerightCol;
	if(faceright1stCol.indexOf(foldoutNum) > -1)
		facerightRow = foldoutGridRow[0];
	else 
		facerightRow = foldoutGridRow[1];
	
	facerightCol = foldoutGridCol[RIGHT];
	
	//Set faceleft Row and Col settings.
	var facebottomCol = foldoutGridCol[MIDDLE];
	var facebottomRow = foldoutGridRow[2];
	
	//Set faceleft Row and Col settings.
	var facefrontCol = foldoutGridCol[MIDDLE];
	var facefrontRow = foldoutGridRow[1];

	//Set faceleft Row and Col settings.
	var facebackRow = foldoutGridRow[3];
	var facebackCol;
	if(foldoutNum < 8)
		facebackCol = foldoutGridCol[MIDDLE];
	else
		facebackCol = foldoutGridCol[LEFT];
	
	
	
	
	//Set position of each face on foldout screen.
	$('#facetop').css({'left':facetopCol,'top':facetopRow});
	$('#facebottom').css({'left':facebottomCol,'top':facebottomRow});
	$('#faceleft').css({'left':faceleftCol,'top':faceleftRow});
	$('#faceright').css({'left':facerightCol,'top':facerightRow});
	$('#facefront').css({'left':facefrontCol,'top':facefrontRow});
	$('#faceback').css({'left':facebackCol,'top':facebackRow});
}


//Generates contents of each face
function generateFaces(foldoutNum){
	FaceArray['facetop'] = new Face();
	FaceArray['facebottom'] = new Face();
	FaceArray['faceleft'] = new Face();
	FaceArray['faceright'] = new Face();
	FaceArray['facefront'] = new Face();
	FaceArray['faceback'] = new Face();
	applyFaces(foldoutNum);
}

//Applies created faces to the 2D and 3D models.
function applyFaces(foldoutNum){
	//Offsets for different foldouts
	offsets = [];
	//order is top,left,front,right,bottom,back(Same as faceNames array order)
	offsets['facetop'] = [0,0,0,0,-1,-1,0,0,0,-1];
	offsets['faceleft'] = [0,-1,1,0,0,1,2,1,1,1];
	offsets['facefront'] = [0,0,0,0,0,0,0,0,0,0];
	offsets['faceright'] = [0,1,1,1,0,0,1,0,1,0];
	offsets['facebottom'] = [0,0,0,0,0,0,0,0,0,0];
	offsets['faceback'] = [0,0,0,0,0,0,0,0,-1,-1];
	//Apply all generated faces to the 3d and 2d modes.
	for(face in FaceArray){
		$('#' + face).css({'background-color': FaceArray[face].color2D, 'transform': 'rotate(' + 90 * FaceArray[face].arrow2D + 'deg)'});
		$('.' + face.substring(4)).children().css({'background-color': FaceArray[face].color3D, 'transform': 'rotate(' + 90 * (FaceArray[face].arrow3D + offsets[face][foldoutNum]) + 'deg)'});
	}
}



//Validates if 2D matches 3D
function validate(){
	var correct = true;
	for(face in FaceArray){
		if(FaceArray[face].color2D !== FaceArray[face].color3D || FaceArray[face].arrow2D !== FaceArray[face].arrow3D){
			correct = false;
		}
	}
	alert(correct);
}

//Face constructor
function Face(arrow3D, arrow2D, color3D, color2D){
	var colors = ['red','lime','blue','purple','yellow','cyan','orange'];
	this.arrow3D = Math.floor(Math.random() * 4);
	this.arrow2D = Math.floor(Math.random() * 4);
	this.color3D = colors[Math.floor(Math.random() * colors.length)];
	this.color2D = colors[Math.floor(Math.random() * colors.length)];
}