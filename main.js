/*
	
*/



	var actinideButton = document.getElementById('actinideGroupId');
	var actinideElements = document.getElementsByClassName('actinide');
	var elements = document.getElementsByClassName('element');

	function revertDefaultBackground() {
		var elements = document.getElementsByClassName('element');
		for (var i = 0; i < elements.length; i++) {
			var elementsColor = elements[i];
			elementsColor.style.backgroundColor = 'rgb(255, 255, 255)';
			elementsColor.style.borderColor = 'rgb(192, 192, 192)';

		}

	}



	function changeBackgroundActinide() {			
		revertDefaultBackground();
		for (var i = 0; i < actinideElements.length; i++) {
			var td = actinideElements[i];
			td.style.backgroundColor = 'rgb(255,255,204)';
			td.style.borderColor = 'rgb(255,255,153)';

		}

	}	 
	actinideButton.onclick = changeBackgroundActinide;



	var alkaliButton = document.getElementById('alkaliGroupId');
	var alkaliElements = document.getElementsByClassName('alkali');
	function changeBackgroundAlkali() {
		revertDefaultBackground();
		for (var i = 0; i < alkaliElements.length; i++) {
			var td = alkaliElements[i];
			td.style.backgroundColor = 'rgb(255,128,0)';
			td.style.borderColor = 'rgb(204,102,0)';

		}

	}
	alkaliButton.onclick = changeBackgroundAlkali;


	var alkalineButton = document.getElementById('alkalineGroupId');
	var alkalineElements = document.getElementsByClassName('alkaline');
	function changeBackgroundAlkaline() {
		revertDefaultBackground();
		for (var i = 0; i < alkalineElements.length; i++) {
			var td = alkalineElements[i];
			td.style.backgroundColor = 'rgb(76,153,0)';
			td.style.borderColor = 'rgb(51,102,0)';

		}
	}
	alkalineButton.onclick = changeBackgroundAlkaline;



	var halogenButton = document.getElementById('halogenGroupId');
	var halogenElements = document.getElementsByClassName('halogen');
	function changeBackgroundHalogen() {
		revertDefaultBackground();
		for (var i = 0; i < halogenElements.length; i++) {
			var td = halogenElements[i];
			td.style.backgroundColor = 'rgb(204,204,255)';
			td.style.borderColor = 'rgb(153,153,255)';

		}
	}
	halogenButton.onclick = changeBackgroundHalogen;


	var lanthanideButton = document.getElementById('lanthanideGroupId');
	var lanthanideElements = document.getElementsByClassName('lanthanide');
	function changeBackgroundLanthanide() {
		revertDefaultBackground();
		for (var i = 0; i < lanthanideElements.length; i++) {
			var td = lanthanideElements[i];
			td.style.backgroundColor = 'rgb(255, 204, 255)';
			td.style.borderColor = 'rgb(255, 153, 255)';

		}
	}
	lanthanideButton.onclick = changeBackgroundLanthanide;

	var metalloidButton = document.getElementById('metalloidGroupId');
	var metalloidElements = document.getElementsByClassName('metalloid');
	function changeBackgroundMetalloid() {
		revertDefaultBackground();
		for (var i = 0; i < metalloidElements.length; i++) {
			var td = metalloidElements[i];
			td.style.backgroundColor = 'rgb(0, 153, 153)';
			td.style.borderColor = 'rgb(0, 102, 102)';

		}
	}
	metalloidButton.onclick = changeBackgroundMetalloid;


	var noblegasButton = document.getElementById('noblegasGroupId');
	var noblegasElements = document.getElementsByClassName('noblegas');
	function changeBackgroundNobleGas() {
		revertDefaultBackground();
		for (var i = 0; i < noblegasElements.length; i++) {
			var td = noblegasElements[i];
			td.style.backgroundColor = 'rgb(0, 204, 204)';
			td.style.borderColor = 'rgb(0, 153, 153)';
		}
	}
	noblegasButton.onclick = changeBackgroundNobleGas;


	var nonmetalButton = document.getElementById('nonmetalGroupId');
	var nonmetalElements = document.getElementsByClassName('nonmetal');
	function changeBackgroundNonmetal() {
		revertDefaultBackground();
		for (var i = 0; i < nonmetalElements.length; i++) {
			var td = nonmetalElements[i];
			td.style.backgroundColor = 'rgb(224, 224, 224)';
			td.style.borderColor = 'rgb(192, 192, 192)';

		}
	}
	nonmetalButton.onclick = changeBackgroundNonmetal;

	var othermetalButton = document.getElementById('otherGroupId');
	var othermetalElements = document.getElementsByClassName('othermetal');
	function changeBackgroundOther() {
		revertDefaultBackground();
		for (var i = 0; i < othermetalElements.length; i++) {
			var td = othermetalElements[i];
			td.style.backgroundColor = 'rgb(204, 255, 204)';
			td.style.borderColor = 'rgb(153, 255, 153)';

		}
	}
	othermetalButton.onclick = changeBackgroundOther;


	var transitionButton = document.getElementById('transitionGroupId');
	var transitionElements = document.getElementsByClassName('transition');
	function changeBackgroundTransition() {
		revertDefaultBackground();
		for (var i = 0; i < transitionElements.length; i++) {
			var td = transitionElements[i];
			td.style.backgroundColor = 'rgb(255, 209, 204)';
			td.style.borderColor = 'rgb(255, 178, 102)';
		}
	}
	transitionButton.onclick = changeBackgroundTransition;




