var hour9TextInput = document.getElementById("hour-9-text");
var hour10TextInput = document.getElementById("hour-10-text");
var hour11TextInput = document.getElementById("hour-11-text");
var hour12TextInput = document.getElementById("hour-12-text");
var hour13TextInput = document.getElementById("hour-13-text");
var hour14TextInput = document.getElementById("hour-14-text");
var hour15TextInput = document.getElementById("hour-15-text");
var hour16TextInput = document.getElementById("hour-16-text");
var hour17TextInput = document.getElementById("hour-17-text");

//sets the date at the top.
$(function setDate() {
  var today = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(today);
});

//function to set the style of the hour block
$(function setHourColor() {
  var currentHour = dayjs().format("HH");
  for (let i = 9; i < 18; i++) {
    if (i < currentHour) {
      $(`#hour-${i}`).addClass("past");
    } else if (i > currentHour) {
      $(`#hour-${i}`).addClass("future");
    } else {
      $(`#hour-${i}`).addClass("present");
    }
  }
});

//function to save inputs to local storage
var scheduledTasks = JSON.parse(localStorage.getItem("tasks"));
$(".saveBtn").on("click", function () {
  var hourlyTasks = {
    hour9SavedTask: hour9TextInput.value.trim(),
    hour10SavedTask: hour10TextInput.value.trim(),
    hour11SavedTask: hour11TextInput.value.trim(),
    hour12SavedTask: hour12TextInput.value.trim(),
    hour13SavedTask: hour13TextInput.value.trim(),
    hour14SavedTask: hour14TextInput.value.trim(),
    hour15SavedTask: hour15TextInput.value.trim(),
    hour16SavedTask: hour16TextInput.value.trim(),
    hour17SavedTask: hour17TextInput.value.trim(),
  };

  localStorage.setItem("tasks", JSON.stringify(hourlyTasks));
});

//function to display the saved inputs when refreshed.
$(function taskPusher() {
  var returnTask = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 9; i < 18; i++) {
    $("#hour-" + i + "-text").text(returnTask["hour" + i + "SavedTask"]);
  }
});
