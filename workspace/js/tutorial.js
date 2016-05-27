/**
 * Classic mode tutorial screen activator.
 * @param {int} indicate which page is currently being referred to.
 */
function classicHelper(page) {
	helperMode = 1;
	switch(page){
		case 0:
			levelLoad(0,0,1); 
			$('#helpContainer').css('display', 'initial');
			$('#overlay').css('display', 'initial');
			$('#classicHelp1').css('display', 'initial');
			$('#classicHelp2').css('display', 'none');
			$('#proceed').css('display', 'initial');
			$('#preceed').css('display', 'none');
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			break;
		case 1:
			$('#cubeContainer').css({
				'z-index' 	: '2',
				'position'	: 'absolute',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#to2D').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'right'		: '0'
			});					
			$('#classicHelp1').css('display', 'none');
			$('#classicHelp2').css('display', 'initial');
			$('#classicHelp3').css('display', 'none');
			$('#preceed').css('display', 'initial');
			break;
			
		case 2:
			$('#to2D').css({
				'z-index' 	: '4',
				'position' 	: 'absolute',
				'right'		: '0'
			});			
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#classicHelp2').css('display', 'none');
			$('#classicHelp3').css('display', 'initial');
			$('#classicHelp4').css('display', 'none');

			screenChange('mode3D');
			resizeGame();

			$('#foldoutScreen').css({
				'zoom'		: '1',
				'z-index'	: '0'
			});

			$('#colorArrow').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0'
			});

			$('#mode2DSubmit').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0',
				'right'		: '0'
			});
			break;

		case 3:
			screenChange('mode2D');
			resizeGame();
			$('#classicHelp3').css('display', 'none');
			$('#classicHelp4').css('display', 'initial');
			$('#classicHelp5').css('display', 'none');
			$('#to2D').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'right'		: '0'
			});
			$('#foldoutScreen').css({
				'zoom'		: '0.7',
				'z-index'	: '4'
			});
			$('#colorArrow').css({
				'z-index'	: '1',
				'position'	: 'absolute',
				'bottom'	: '220px'
			});
			$('#mode2DSubmit').css({
				'z-index'	: '2',
				'position'	: 'absolute',
				'bottom'	: '220px',
				'right'		: '0'
			});
			$('#proceed').css('display', 'initial');
			$('#endHelp').css('display', 'none');
			break;

		case 4:
			screenChange('resultScreen');
			resizeGame();

			$('#foldoutScreen').css({
				'zoom'		: '1',
				'z-index'	: '0'
			});

			$('#colorArrow').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0'
			});

			$('#mode2DSubmit').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0',
				'right'		: '0'
			});
			$('#classicHelp4').css('display', 'none');
			$('#classicHelp5').css('display', 'initial');
			$('#proceed').css('display', 'none');
			$('#endHelp').css('display', 'initial');
			break;
		case 5:
			screenChange('gameMode');
			$('#classicHelp5').css('display', 'none');
			$('#helpContainer').css('display', 'none');
			$('#overlay').css('display', 'none');
			$('#proceed').css('display', 'none');
			$('#preceed').css('display', 'none');
			$('#endHelp').css('display', 'none');
			currentPage = 0;
			helperMode = 0;
	}
}

/**
 * Time attack mode tutorial screen activator.
 * @param {int} indicate which page is currently being referred to.
 */
function timeHelper(page) {
	helperMode = 2;
	switch(page){
		case 0:
			$('#helpContainer').css('display', 'initial');
			$('#overlay').css('display', 'initial');
			$('#timeHelp1').css('display', 'initial');
			$('#timeHelp2').css('display', 'none');
			$('#proceed').css('display', 'initial');
			$('#preceed').css('display', 'none');
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timerBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'bottom'	: '0'
			});	
			break;

		case 1:
			$('#cubeContainer').css({
				'z-index' 	: '2',
				'position'	: 'absolute',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timerBox').css({
				'z-index' 	: '2',
				'position' 	: 'absolute',
				'zoom'		: '0.8',
				'bottom'	: '240px'
			});				
			$('#timeHelp1').css('display', 'none');
			$('#timeHelp2').css('display', 'initial');
			$('#timeHelp3').css('display', 'none');
			$('#preceed').css('display', 'initial');
			$('#proceed').css('display', 'initial');
			$('#endHelp').css('display', 'none');
			break;
			
		case 2:
			$('#timerBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'bottom'	: '0'
			});			
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timeHelp2').css('display', 'none');
			$('#timeHelp3').css('display', 'initial');
			$('#proceed').css('display', 'none');
			$('#endHelp').css('display', 'initial');
			break;
		case 3:
			screenChange('gameMode');
			$('#timeHelp3').css('display', 'none');
			$('#helpContainer').css('display', 'none');
			$('#overlay').css('display', 'none');
			$('#proceed').css('display', 'none');		
			$('#preceed').css('display', 'none');
			$('#endHelp').css('display', 'none');
			currentPage = 0;
			helperMode = 0;
			break;
		}
}

/**
 * Score attack mode tutorial screen activator.
 * @param {int} indicate which page is currently being referred to.
 */
function scoreHelper(page) {
	helperMode = 3;
	switch(page){
		case 0:
			$('#helpContainer').css('display', 'initial');
			$('#overlay').css('display', 'initial');
			$('#scoreHelp1').css('display', 'initial');
			$('#scoreHelp2').css('display', 'none');
			$('#proceed').css('display', 'initial');
			$('#preceed').css('display', 'none');
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timerBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'bottom'	: '0'
			});			
			$('#scoreBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'right'		: '0', 
				'bottom'	: '0'
			});	
			break;

		case 1:
			$('#cubeContainer').css({
				'z-index' 	: '2',
				'position'	: 'absolute',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timerBox').css({
				'z-index' 	: '2',
				'position' 	: 'absolute',
				'zoom'		: '0.8',
				'bottom'	: '240px'
			});		
			$('#scoreBox').css({
				'z-index' 	: '2',
				'position' 	: 'absolute',
				'zoom'		: '0.8',
				'right'		: "0", 
				'bottom'	: '240px'
			});	
			$('#scoreHelp1').css('display', 'none');
			$('#scoreHelp2').css('display', 'initial');
			$('#scoreHelp3').css('display', 'none');
			$('#preceed').css('display', 'initial');
			break;
			
		case 2:
			$('#cubeContainer').css({
				'z-index' 	: '2',
				'position'	: 'absolute',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#timerBox').css({
				'z-index' 	: '2',
				'position' 	: 'absolute',
				'zoom'		: '0.8',
				'bottom'	: '240px'
			});		
			$('#scoreBox').css({
				'z-index' 	: '2',
				'position' 	: 'absolute',
				'zoom'		: '0.8',
				'right'		: "0", 
				'bottom'	: '240px'
			});	
			$('#scoreHelp2').css('display', 'none');
			$('#scoreHelp3').css('display', 'initial');
			$('#scoreHelp4').css('display', 'none');
			$('#proceed').css('display', 'initial');
			$('#endHelp').css('display', 'none');
			break;

		case 3:
			$('#timerBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'bottom'	: '0'
			});			
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});			
			$('#scoreBox').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'zoom'		: '1',
				'right'		: '0', 
				'bottom'	: '0'
			});	
			screenChange('gameMode');
			$('#scoreHelp3').css('display', 'none');
			$('#scoreHelp4').css('display', 'initial');
			$('#proceed').css('display', 'none');
			$('#endHelp').css('display', 'initial');
			break;			
		case 4:
			screenChange('gameMode');
			$('#scoreHelp4').css('display', 'none');
			$('#helpContainer').css('display', 'none');
			$('#overlay').css('display', 'none');
			$('#proceed').css('display', 'none');
			$('#preceed').css('display', 'none');
			$('#endHelp').css('display', 'none');
			currentPage = 0;
			helperMode = 0;
			break;
		}
}

/**
 * Transition to next page of the tutorial.
 */

function nextPage(direction) {
	if (direction == 'next') {
		currentPage++;
		if (helperMode == 1) {
			classicHelper(currentPage);
		}
		if (helperMode == 2) {
			timeHelper(currentPage);
		}
		if (helperMode == 3) {
			scoreHelper(currentPage);
		}
	} else if (direction == 'previous') {
		currentPage--;
		if (helperMode == 1) {
			classicHelper(currentPage);
		}
		if (helperMode == 2) {
			timeHelper(currentPage);
		}
		if (helperMode == 3) {
			scoreHelper(currentPage);
		}
	}
}