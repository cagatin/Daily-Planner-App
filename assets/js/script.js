//Variable to hold date object
let dateObj;
let date;

// Function to display time in the jumbotron
function displayTime() {
    dateObj = new Date();
    date = moment(dateObj).format("MMMM Do, YYYY hh:mm:ss");
    document.querySelector('#currentDay').textContent = date;
}

//Display the time and update the time every second
displayTime();
setInterval(displayTime, 1000);