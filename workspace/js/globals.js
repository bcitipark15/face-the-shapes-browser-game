/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: Contains global variables.
 */

//variable that determine if easter egg two is activated
var easterEggTwoActivate = false;

 //Color array for face colors.
var colors = ['red','lime','blue','purple','yellow','cyan','orange'];

//Hard code 6 faces for cubeR
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

//Current level of classic mode.
var currentLevel;

//Highest level of standard mode unlocked.
var levelStandardHigh = 1;

//Highest level of advance mode unlocked.
var levelAdvancedHigh = 1;

//Define if user is in standard mode.1
var standardMode = false;

//Define if user is in advanced mode.
var advancedMode = false;

//base difficulty.
var difficultyNum = 0;

//Image source for cube faces.
var img = '<img src="./workspace/image/arrow3.png">';

//Selected color for basic mode
var selectedColor = 'red'

//Define the current page.
var currentPage = 0;

//Define which tutorial is activated
var helperMode = 0;

//Set screens up for answer mode.
var answerMode = false;

//Base score added on completing score attack mode level.
var scoreBase = 100;

//Number of levels to complete in time mode.
var numLevels = 3;

//Define if the achievements are unlocked.
var achievementOne = false;
var achievementTwo = false;
var achievementThree = false;
var achievementFour = false;