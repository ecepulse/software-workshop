var pulseData = [];
var pulseInterval
// Generate random pulse oximeter data
function setPulseInterval() {
	pulseInterval = setInterval(function() {
		pulseData.push(Math.floor(Math.random() * (97 - 64) + 64));
	}, 2);
}

// every 500 seconds, clear the other interval, average it, and send it
setInterval(function() {
	// Stop the incoming pulse data
	clearInterval(pulseInterval);

	// average
	var tempSum = 0;
	for (var i = 0; i < pulseData.length; i++) {
		tempSum += pulseData[i];
	}
	var average = Math.floor(tempSum/pulseData.length);

	// Clear
	pulseData = [];

	// send it
	self.postMessage(Math.floor(Math.random() * (97 - 64) + 64));

	// start pulse interval again
	setPulseInterval();

}, 500);
