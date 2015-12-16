/*
	
*/

	var actinideButton = document.getElementById('actinideGroupId');
	var actinideElements = document.getElementsByClassName('actinide');

	function changeBackground() {
		for (var i = 0; i < actinideElements.length; i++) {
			var td = actinideElements[i];
			td.style.backgroundColor = 'rgb(255,255,204)';
		}
	}	 
	actinideButton.onclick = changeBackground;



	var alkaliButton = document.getElementById('alkaliGroupId');
	var alkaliElements = document.getElementsByClassName('alkali');
	function changeBackground() {
		for (var i = 0; i < alkaliElements.length; i++) {
			var td = alkaliElements[i];
			td.style.backgroundColor = 'rgb(255,128,0)';
		}
	}
	alkaliButton.onclick = changeBackground;


	var alkalineButton = document.getElementById('alkalineGroupId');
	var alkalineElements = document.getElementsByClassName('alkaline');
	function changeBackground() {
		for (var i = 0; i < alkalineElements.length; i++) {
			var td = alkalineElements[i];
			td.style.backgroundColor = 'rgb(76,153,0)';
		}
	}
	alkalineButton.onclick = changeBackground;



	var halogenButton = document.getElementById('halogenGroupId');
	var halogenElements = document.getElementsByClassName('halogen');
	function changeBackground() {
		for (var i = 0; i < halogenElements.length; i++) {
			var td = halogenElements[i];
			td.style.backgroundColor = 'rgb(204,204,255)';
		}
	}
	halogenButton.onclick = changeBackground;


	var lanthanideButton = document.getElementById('lanthanideGroupId');
	var lanthanideElements = document.getElementsByClassName('lanthanide');
	function changeBackground() {
		for (var i = 0; i < lanthanideElements.length; i++) {
			var td = lanthanideElements[i];
			td.style.backgroundColor = 'rgb(255, 204, 255)';
		}
	}
	lanthanideButton.onclick = changeBackground;

	var metalloidButton = document.getElementById('metalloidGroupId');
	var metalloidElements = document.getElementsByClassName('metalloid');
	function changeBackground() {
		for (var i = 0; i < metalloidElements.length; i++) {
			var td = metalloidElements[i];
			td.style.backgroundColor = 'rgb(0, 153, 153)';
		}
	}
	metalloidButton.onclick = changeBackground;


	var noblegasButton = document.getElementById('noblegasGroupId');
	var noblegasElements = document.getElementsByClassName('noblegas');
	function changeBackground() {
		for (var i = 0; i < noblegasElements.length; i++) {
			var td = noblegasElements[i];
			td.style.backgroundColor = 'rgb(0, 204, 204)';
		}
	}
	noblegasButton.onclick = changeBackground;











	
