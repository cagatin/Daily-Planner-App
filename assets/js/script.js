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


// Function to color code the time blocks
function updateColorCode() {
    let currHour = moment(dateObj).format("HH");

    //get all input-group elements
    let inputGroupDivs = document.querySelectorAll(".input-group")
    //loop through each input group div
    for (let i = 0; i < inputGroupDivs.length; i++) {
        //retrieve their id attribute
        let divID = inputGroupDivs[i].getAttribute('id');
        console.log(divID);
        let inputElement = inputGroupDivs[i].children[1];
        if (currHour > divID) {
            if (inputElement.classList.contains('present')) {
                inputElement.classList.remove('present');
            }
            inputElement.classList.add('past');
        } else if (currHour == divID) {
            if (inputElement.classList.contains('future')) {
                inputElement.classList.remove('future');
            }
            inputElement.classList.add('present');
        } else {
            inputElement.classList.add('future');
        }
    }
}

updateColorCode();

//need a way to clear