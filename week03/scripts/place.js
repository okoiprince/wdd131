// Date modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// Weather constants
const temperature = 10; // °C
const windSpeed = 5; // km/h


// Calculate wind chill 
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * (speed**0.16) + 0.3965 * temp * (speed**0.16)).toFixed(1);
}


// Display result innerHtml
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    windChill = "N/A";
}

document.getElementById("windChill").textContent = windChill;