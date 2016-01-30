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
	var currWidth	=	$(".chart-container").width();
    var newWidth	=	currWidth + 40;
  	$(".chart-container").width(newWidth);
  	var rightMost = $('.chart-container').width();
	$('.screen').scrollLeft(rightMost);
}

$(document).ready(function(){
	var worker = new Worker('worker.js');

	// When a new number is received, add it to the graph
	worker.addEventListener('message', function(e){
		data.series[0].push(e.data);
		data.labels.push(' ');
		myChart.update(data);

		update();

	}, false);
});
