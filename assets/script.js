// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var currentHour = dayjs().format('h')
$('#currentDay').text(today.format('dddd, MMMM DD'));


$(function setColor () {
    var hour9 = ('09');
    if (hour9 < (currentHour)) {
        $('#hour-9').addClass("past");
    } else if (hour9 > (currentHour)) {
        $('#hour-9').addClass("future");
    } else {
        $('#hour-9').addClass("present");
    }

    var hour10 = ('10');
    if (hour10 < (currentHour)) {
        $('#hour-10').addClass("past");
    } else if (hour10 > (currentHour)) {
        $('#hour-10').addClass("future");
    } else {
        $('#hour-10').addClass("present");
    }

    var hour11 = ('11');
    if (hour11 < (currentHour)) {
        $('#hour-11').addClass("past");
    } else if (hour11 > (currentHour)) {
        $('#hour-11').addClass("future");
    } else {
        $('#hour-11').addClass("present");
    }

    var hour12 = ('12');
    if (hour12 < (currentHour)) {
        $('#hour-12').addClass("past");
    } else if (hour12 > (currentHour)) {
        $('#hour-12').addClass("future");
    } else {
        $('#hour-12').addClass("present");
    }

    var hour13 = ('13');
    if (hour13 < (currentHour)) {
        $('#hour-13').addClass("past");
    } else if (hour13 > (currentHour)) {
        $('#hour-13').addClass("future");
    } else {
        $('#hour-13').addClass("present");
    }

    var hour14 = ('14');
    if (hour14 < (currentHour)) {
        $('#hour-14').addClass("past");
    } else if (hour14 > (currentHour)) {
        $('#hour-14').addClass("future");
    } else {
        $('#hour-14').addClass("present");
    }

    var hour15 = ('15');
    if (hour15 < (currentHour)) {
        $('#hour-15').addClass("past");
    } else if (hour14 > (currentHour)) {
        $('#hour-15').addClass("future");
    } else {
        $('#hour-15').addClass("present");
    }

    var hour16 = ('16');
    if (hour16 < (currentHour)) {
        $('#hour-16').addClass("past");
    } else if (hour16 > (currentHour)) {
        $('#hour-16').addClass("future");
    } else {
        $('#hour-16').addClass("present");
    }

    var hour17 = ('17');
    if (hour17 < (currentHour)) {
        $('#hour-17').addClass("past");
    } else if (hour14 > (currentHour)) {
        $('#hour-17').addClass("future");
    } else {
        $('#hour-17').addClass("present");
    }
});
  
$(function () {

});
      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.