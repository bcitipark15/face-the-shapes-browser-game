/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Hard code 6 faces for cube
var faces = 6;

//Array of objects that contain face info
var faceArray = [];

//Global size array to determine size (width/height) of cube faces
var size;

$(document).ready(function() {
   for(var i = 0; i < faces; i++){
       //Fill faceArray with new face objects
       faceArray.push(makeFace(i));
   }
   //Size of each face scales with screen to provide user with scaled faces
   size = Math.floor($('#foldoutScreen').width()/4);
});

/**
 * makeFace creates a face object with a generated arrow value
 * @param {integer} faceNum The face number
 * @return {makeFace.face} Face object that is generated
 */
function makeFace(faceNum){
    var face = {
        //Randomized arrow value (0 = left, 1 = up, 2 = right, 3 = down
        value: Math.floor(Math.random() * 4)
    };
    return face;
}

function foldoutT(){
    
    //Create table for 2d foldout to be rendered inside of
    $('#foldoutScreen').append('<table id="foldout"></table>');
    
    //Fill table with faces
    for(var i = 0; i < faces; i++){
        if(i === 1 || i === 2 || i === 3){
            //Appends div containing foldoutFace 1 2 or 3 to the current table column
            $("#foldout").append('<td>' +
                                 '<div class="foldoutFace" id="foldoutFace' + i +
                                 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
                                 '></div></td>');
        } else {
            $("#foldout").append('<tr><td></td><td>' +
                                 '<div class="foldoutFace" id="foldoutFace' + i +
                                 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
                                 '></div></td></tr>');
        }
        $('#foldoutFace' + i).append('<img src="./workspace/image/arrow3.png" height="' + size +
                                     '" width="' + size + '">');
        $('#foldoutFace' + i).css('transform', 'rotateZ(' + faceArray[i].value * 90 + 'deg)');
        
        var colRed = Math.floor(Math.random()* 256);
        var colGreen = Math.floor(Math.random()* 256);    
        var colBlue = Math.floor(Math.random()* 256);
        $('#foldoutFace' + i).css('background-color', 'rgb(' + colRed + ',' +
                                  colGreen + ',' + colBlue + ')');
    }
    $('.foldoutFace').css({'width': size, 'height': size, 'border': 'solid 1px black'});
}
/**
 * rotateFace Rotates the image of the face that was clicked on.
 * @param id The id of the face that will be rotated.
 * @return {undefined}
 */
function rotateFace(id){
    currentFace = faceArray[parseInt(id.charAt(id.length -1))];
    currentFace.value = (currentFace.value + 1) % 4;
    $('#' + id).css('transform','rotateZ(' + currentFace.value * 90 + 'deg)');
}