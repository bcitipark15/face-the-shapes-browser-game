//variable that determine if easter egg two is activated
var easterEggTwoActivate = false;

 //Color array for face colors.
var colors = ['red','lime','blue','purple','yellow','cyan','orange'];

//Hard code 6 faces for cube
var faces = 6;

//Array of objects that contain face info
var faceArray = [];

//Array containing the face names of the cube.
var faceNames = ['facetop','faceleft','facefront','faceright','facebottom','faceback'];

//Size is used to determine face width and height.
var size;

//Flags used to indicate different actions.
var colorFlag = false;
var timeModeFlag = false;

//Set pivot color, default is set to black.
var pivotColor = 'black';

//Current elapsed time in competitive modes.
var time = 0;
//Levels will contain randomized level order
var levels = [];
//level is current level.
var level;

//base difficulty.
var difficultyNum = 0;