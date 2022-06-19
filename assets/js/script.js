//Variable to hold date object
let dateObj;
let date;

//Variable to hold the save button 
let saveBtn = $('.saveBtn')

//Variable that refrences the current day paragraph
let currDayPara = $('#currentDay');

// main container
let mainContainer = $('#main-container')

//Array containing possible attributes
let hourIDArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]

// Function to display time in the jumbotron
function displayTime() {
    dateObj = new Date();
    date = moment(dateObj).format("MMMM Do, YYYY hh:mm:ss");
    currDayPara.text(date);
}

//Display the time and update the time every second
displayTime();
setInterval(displayTime, 1000);

function convertTime(str) {
    let period;

    if (str >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (str - 12 >= 1) {
        let res = str - 12;
        return `${res}  ${period}`;
    }
    return `${str}  ${period}`;
}


// Function that generates time blocks
function displayTimeBlocks() {
    for (let i = 0; i < hourIDArray.length; i++) {
        //Create a new Timeblock
        let inputGroupDiv = $('<div>');
        inputGroupDiv.addClass('input-group');
        inputGroupDiv.attr('id', hourIDArray[i]);

        //creating the hour span
        let prependDiv = $('<div>');                        //container div for hours
        prependDiv.addClass('input-group-prepend');
        let hourSpan = $('<span>');                         //span which displays hour
        hourSpan.addClass('input-group-text hour');
        hourSpan.text(convertTime(hourIDArray[i]));         //populate the text of span w/ correct hour

        $(prependDiv).append(hourSpan);                     //append the hourSpan to the prepend Div
        $(inputGroupDiv.append(prependDiv));                //add the prepend div to the  timeblock div

        //creating the input field
        let input = $('<input>');                           //create an input
        input.attr("type", "text");
        input.addClass("form-control row")
        input.attr("aria-label", "small");

        $(inputGroupDiv).append(input);                     //Add input to timeblock div

        //creating the save button
        let appendDiv = $('<div>');                         //create the contianer div for the button
        appendDiv.addClass("input-group-append");
        let saveBtn = $('<button>');                        //create the button
        saveBtn.addClass('btn btn-primary saveBtn');
        let iconSpan = $('<i>');
        iconSpan.addClass("bi-save");
        saveBtn.append(iconSpan);


        appendDiv.append(saveBtn);                          //add button to button-container div

        inputGroupDiv.append(appendDiv);                    //add button-container div to timeblock div

        mainContainer.append(inputGroupDiv);                //add the timeblock div to the main container
    }
}

displayTimeBlocks();

// Function to color code the time blocks
function updateColorCode() {
    let currHour = moment(dateObj).format("HH");

    //get all input-group elements
    let inputGroupDivs = $(".input-group")

    //loop through each input group div
    for (let i = 0; i < inputGroupDivs.length; i++) {
        //retrieve their id attribute
        let divID = $(inputGroupDivs[i]).attr('id');

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

updateColorCode();
