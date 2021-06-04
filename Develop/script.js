//Display today's Date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

//Display the current time
var clock = moment().format('h:mm a');
$("#digitalClock").html(clock);

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

//Create save function to add data to local storage
