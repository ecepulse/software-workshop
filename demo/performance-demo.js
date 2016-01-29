var data = {

	// A labels array that can contain any sort of values
	labels: [' ', ' ', ' ', ' ', ' '],

	// Our series array that contains series objects or in this case series data arrays of heartbeat values
	series: [
		[72, 70, 68, 72, 88]
	]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
var myChart = new Chartist.Line('.ct-chart', data);

function update() {
	// update the chart width, and scroll the pane to the right as we add more data to it
	
	var currWidth	=	$(".chart-container").width();
    var newWidth	=	currWidth + 40;
  	$(".chart-container").width(newWidth);
  	var rightMost = $('.chart-container').width();
	$('.screen').scrollLeft(rightMost);
}

function generateData() {

	// Generate random number between 64 and 96
	var randomNumber = Math.floor(Math.random() * (97 - 64) + 64);
	
	// Push the random number to the data object we initialized
	data.series[0].push(randomNumber);
	
	// Push a blank label on the x-axis for the data point we just added 
	data.labels.push(' ');
	
	// Update the Chart with the new heartbeat data
	myChart.update(data);
}

function isPrime(num) {
	for ( var i = 2; i < num; i++ ) {
	    if ( num % i === 0 ) {
	        return false;
	    }
	}
	return true;
}

$(document).ready(function() {
	var num = 3;

	// Infinite loop that keeps finding prime numbers and updates the value every 25ms if there's a new one available
	setInterval(function(){
		num += 2;
		
		if (isPrime(num)) {
			document.getElementById('prime').innerHTML = num;
		}

		generateData();
		update();
	}, 25);

});