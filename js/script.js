let sec = 00;

let seconds = document.getElementById("seconds");
let mins = document.getElementById("mins");
let hrs = document.getElementById("hrs");
let reset_stopwatch_btn = document.getElementById("reset-stopwatch-btn");
let reset_stopwatch_icon = document.getElementById("reset-stopwatch-icon");
let start_stopwatch_btn = document.getElementById("start-stopwatch-btn");
let start_stopwatch_icon = document.getElementById("start-stopwatch-icon");
let pause_stopwatch_btn = document.getElementById("pause-stopwatch-btn");
let pause_stopwatch_icon = document.getElementById("pause-stopwatch-icon");
let dark_mode_btn = document.getElementById("dark-mode-btn");
let dark_mode_icon = document.getElementById("dark-mode-icon");

var dark_mode = false;

function dark_mode_toggle() {
    if (!dark_mode) {
        dark_mode_btn.style.backgroundColor = "#1c1c1c";
        dark_mode_icon.innerHTML = "light_mode";
        dark_mode_icon.style.color = "#fff";
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        dark_mode = !dark_mode;
    }
    else if (dark_mode) {
        dark_mode_btn.style.backgroundColor = "#F7F7F7";
        dark_mode_icon.innerHTML = "dark_mode";
        dark_mode_icon.style.color = "#000";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        dark_mode = !dark_mode;

    }
}

// while (index < 60) {
//     setInterval(seconds.innerHTML++, 1000);
//     index++;
// }


var stopwatch_run = false;

var sec_time;
var index_seconds = 00;
var index_mins = 00;
var index_hrs = 00;
function pause_stopwatch_disabled() {
    pause_stopwatch_btn.disabled = true;
    pause_stopwatch_icon.style.opacity = "0.3";
    pause_stopwatch_btn.style.opacity = "0.9";
}
function pause_stopwatch_enabled() {
    pause_stopwatch_btn.disabled = false;
    pause_stopwatch_icon.style.opacity = "1";
    pause_stopwatch_btn.style.opacity = "1";
}
function start_stopwatch_disabled() {
    start_stopwatch_btn.disabled = true;
    start_stopwatch_icon.style.opacity = "0.3";
    start_stopwatch_btn.style.opacity = "0.9";
}
function start_stopwatch_enabled() {
    start_stopwatch_btn.disabled = false;
    start_stopwatch_icon.style.opacity = "1";
    start_stopwatch_btn.style.opacity = "1";
}
function reset_stopwatch_disabled() {
    reset_stopwatch_btn.disabled = true;
    reset_stopwatch_btn.style.opacity = "0.9";
    reset_stopwatch_icon.style.opacity = "0.3";
}
function reset_stopwatch_enabled() {
    reset_stopwatch_btn.disabled = false;
    reset_stopwatch_btn.style.opacity = "1";
    reset_stopwatch_icon.style.opacity = "1";
}


pause_stopwatch_disabled();
reset_stopwatch_disabled();

function start_stopwatch() {
    sec_time = setInterval(myTimer, 1000);
    pause_stopwatch_enabled();
    reset_stopwatch_enabled();
    start_stopwatch_disabled();
}
function pause_stopwatch() {
    clearInterval(sec_time);
    if (index_seconds < 10) {
        seconds.innerHTML = "0" + index_seconds;
    } else 
        seconds.innerHTML = index_seconds;
    pause_stopwatch_disabled();
    start_stopwatch_enabled();
}
function reset_stopwatch() {
    clearInterval(sec_time);
    seconds.innerHTML = "00";
    mins.innerHTML = "00";
    hrs.innerHTML = "00";
    index_seconds = 00;
    index_mins = 00;
    index_hrs = 00;
    pause_stopwatch_disabled();
    reset_stopwatch_disabled();
    start_stopwatch_enabled();
    
}



function myTimer() {
    index_seconds++;
    if (index_seconds == 60) {
        index_seconds = 00;
        
        index_mins++;
        if (index_mins == 60) {
            index_mins = 00;

            index_hrs++;
            if (index_hrs < 10) {
                hrs.innerHTML = "0"+index_hrs;
            } else {
                hrs.innerHTML = index_hrs;
            }
        }
        if (index_mins < 10) {
            mins.innerHTML = "0"+index_mins;
        } else {
            mins.innerHTML = index_mins;
        }

    } 
    if (index_seconds < 10) {
        seconds.innerHTML = "0"+index_seconds;
    } else {
        seconds.innerHTML = index_seconds;
    }

}

