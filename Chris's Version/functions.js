/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    theScreen = $('#gamescreen');
});

/**
 * 
 * @returns {undefined}
 */
function getMenuScreen(){
    //Change all html in gamescreen to none
    clearScreen();
    theScreen.append('<h1 class="title">Face The Shapes</h1>'+
            '<button id="classicMode" class="menuButton" onclick="get3DScreen()">Classic Mode</button>'+
            '<button id="scoreMode" class="menuButton">Score Mode</button>'+
            '<button id="timeMode" class="menuButton">Time Mode</button>'+
            '<button id="backtomain" class="menuButton" onclick="mainMenu()">Back</button>');
}
/**
 * mainMenu clears the screen then reconstructs the main menu by appending
 *          the original menu html to the screen.
 * @returns {undefined}
 */
function mainMenu(){
    clearScreen();
    theScreen.append('<h1 class="title">Face The Shapes</h1>\n\
            <img class="center" src="img/cube.png" width="120" height="120">\n\
            <button id="play" class="menuButton" onclick="getMenuScreen()">Play</button>');
}
/**
 * get3DScreen moves the user to the 3D model page
 * @returns {undefined}
 */
function get3DScreen() {
    clearScreen();
    theScreen.append('<button id="mode2d" class="toprightbutton" onclick="get2DScreen()">2D</button>');
    theScreen.append('<button id="backtomain" class="menuButton" onclick="mainMenu()">Back</button>');
}

function get2DScreen(){
    clearScreen();
    theScreen.append('<button id="mode3d" class="toprightbutton" onclick="get3DScreen()">3D</button>');
    foldoutT();
    theScreen.append('<button id="backtomain" class="menuButton" onclick="mainMenu()">Back</button>');
}
/**
 * clearScreen clears the game screen of all html elements
 * @returns {undefined}
 */
function clearScreen(){
    theScreen.html('');
}