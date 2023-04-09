// Initialize the count variable
var count = parseInt(localStorage.getItem("cigaretteCount")) || 0;

// Update the count display
document.getElementById("count").innerHTML = count;

// Add the latest reading to the readings list
if (count > 0) {
	var readingsList = document.getElementById("readings");
	var reading = document.createElement("div");
	reading.className = "reading";
	reading.innerHTML = new Date().toLocaleString() + " - " + count + " cigarettes";
	readingsList.appendChild(reading);
}

// Add event listener to the smoked button
document.getElementById("smokedButton").addEventListener("click", function() {
	// Increase the count by 1
	count++;

	// Store the count in local storage
	localStorage.setItem("cigaretteCount", count);

	// Update the count display
	document.getElementById("count").innerHTML = count;

	// Add the latest reading to the readings list
	var readingsList = document.getElementById("readings");
	var reading = document.createElement("div");
	reading.className = "reading";
	reading.innerHTML = new Date().toLocaleString() + " - " + count + " cigarettes";
	readingsList.appendChild(reading);
});
