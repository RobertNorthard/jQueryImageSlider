/*
* A simple jQuery image slider
*/

$(document).ready(startCounter);

function startCounter(){

	var noImage = $('.slider > img').size();
	var count = 0;

	$('.slider > img#img' + count).show('slide', {direction : 'left'}, 700);

	var time = setInterval(function(){
			$('.slider > img#img' + count).hide('slide', {direction : 'right'}, 400);
			next();
			$('.slider > img#img' + count).show('slide', {direction : 'left'}, 700);
	}, 3000);

	function next(){
		count = (count + 1) % noImage;
	}

	function previous(){
		count = (count - 1) % noImage;
	}
}