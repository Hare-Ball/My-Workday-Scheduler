//Display today's Date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

//Display the current time
var clock = moment().format('h:mm a');
$("#digitalClock").html(clock);


//Create save function to add data to local storage
// get the text
var text = $(this).siblings(".description").text();

var time = $(this).parent().attr("id");


// set the item in localStorage
localStorage.setItem(text, time);

$("#9 .description").val(localStorage.getItem("9"));
$("#8 .description").val(localStorage.getItem("8"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function timeReader() {
        //get current number of hours.
        var currentTime = moment().hour();

     // loop through the time
        $(".time-block").each(function () {
            var timeSlot = parseInt($(this).attr("id"));
 
            // To check the time and add css classes
            if (timeSlot < currentTime) {
                $(this).addClass("past");
                
            }
            else if (timeSlot === currentTime) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
 
            }
    })
}

timeReader();