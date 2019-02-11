"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Micah Fisher
   Date:   2-5-19

*/

// Run function of runClock every 1000 steps, or second.
runClock();
setInterval("runClock()", 1000);

// function of runClock.
function runClock() {
    // Set variable of currentDay to current date.
    var currentDay = new Date();

    // Define variables using local date and time string.
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    // Concatenate date and time strings.
    document.getElementById("dateNow").innerHTML =
        dateStr + '<br >' + timeStr;

    // Calculate years left, and round off values.
    var newYear = new Date('January 1, 2018');
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    // Calculate days left, and round off values.
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    // Calculate mins and secs left, and round off values.
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    // Write text content to elements based on ids using previously defined values rounded off.
    document.getElementById('days').textContent = Math.floor(daysLeft);
    document.getElementById('hrs').textContent = Math.floor(hrsLeft);
    document.getElementById('mins').textContent = Math.floor(minsLeft);
    document.getElementById('secs').textContent = Math.floor(secsLeft);
}