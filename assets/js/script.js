//Variable to hold date object
let dateObj;
let date;

//Variable to hold the save button 
let saveBtn = $('.saveBtn')

//Variable that refrences the current day paragraph
let currDayPara = $('#currentDay');

// Function to display time in the jumbotron
function displayTime() {
    dateObj = new Date();
    date = moment(dateObj).format("MMMM Do, YYYY hh:mm:ss");
    currDayPara.text(date);
}

//Display the time and update the time every second
displayTime();
setInterval(displayTime, 1000);


// Function to color code the time blocks
function updateColorCode() {
    let currHour = moment(dateObj).format("HH");

    //get all input-group elements
    let inputGroupDivs = $(".input-group")

    //loop through each input group div
    for (let i = 0; i < inputGroupDivs.length; i++) {
        //retrieve their id attribute
        let divID = $(inputGroupDivs[i]).attr('id');
        console.log(divID);

        //From the array of children, select the input div
        let inputElement = $(inputGroupDivs[i]).children().eq(1);

        //If the current hour is less than the ID... Its in the past!
        if (currHour > divID) {
            if ($(inputElement).hasClass('present')) {
                $(inputElement).removeClass('present');
            }
            $(inputElement).addClass('past');
        }
        //If the current hour is equal to the ID... Its the present!
        else if (currHour == divID) {
            if ($(inputElement).hasClass('future')) {
                $(inputElement).removeClass('future');
            }
            $(inputElement).addClass('present');
        }
        //Otherwise, its in the future!
        else {
            $(inputElement).addClass('future');
        }
    }
}

// Function to

updateColorCode();
