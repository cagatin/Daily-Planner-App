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
    // console.log(currHour);
    //get all input-group elements
    let inputGroupDivs = $(".input-group");
    //loop through each input group div
    for (let i = 0; i < inputGroupDivs.length; i++) {
        //retrieve their id attribute
        let divID = inputGroupDivs[i].attr('id');
        console.log(divID);
        if (currHour > divID) {
            inputGroupDivs[i].childNodes;
            console.log(inputGroupDivs[i].classList);
        }
    }

    //if currHour > element.id
    //add past class
    //if currHour < element.id
    //add future class
    //if currHour == element.id
    // present class
}

updateColorCode();

//need a way to clear