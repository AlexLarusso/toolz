// TIMELEFT
// REQUIRE moment.js

	var year = 2015, 		                                    // in what year will your target be reached?
        month = 9,			                                    // value between 0 and 11 (0=january,1=february,...,11=december)
        day = 8,			                                    // between 1 and 31
        hour = 13,			                                    // between 0 and 24
        minute = 0,			                                    // between 0 and 60
        second = 0,			                                    // between 0 and 60
        end = new Date(year, month, day, hour, minute, second),
        utcDt, now, sec, min, hr, dy, mnth, yr, daysinmnth,
        timeLeftContainer = document.getElementById("timeleft"),
        timeLeftMinutes = document.getElementById("TimeLeftMinutes"),
        timeLeftHours = document.getElementById("TimeLeftHours"),
        timerID = setInterval(timeleft, 1000),
        oldMinutes = "";

	function timeleft() {

	    utcDt = moment.utc().format("YYYY/MM/DD hh:mm:ss");
	    now = new Date(utcDt);

	    if (now.getYear() < 1900) {
	        yr = now.getYear() + 1900;
	    }
	    sec = second - now.getSeconds();
	    min = minute - now.getMinutes();
	    hr = hour - now.getHours();
	    dy = day - now.getDate();
	    mnth = month - now.getMonth();
	    yr = year - yr;
	    daysinmnth = 32 - new Date(now.getYear(), now.getMonth(), 32).getDate();
	    if (sec < 0) {
	        sec = (sec + 60) % 60;
	        min--;
	    }
	    if (min < 0) {
	        min = (min + 60) % 60;
	        hr--;
	    }
	    if (hr < 0) {
	        hr = (hr + 24) % 24;
	        dy--;
	    }
	    if (dy < 0) {
	        dy = (dy + daysinmnth) % daysinmnth;
	        mnth--;
	    }
	    if (mnth < 0) {
	        mnth = (mnth + 12) % 12;
	        yr--;
	    }
	    if (yr == 1)
	        yrtext = " year, ";
	    if (mnth == 1)
	        mnthtext = " month, ";
	    if (dy == 1)
	        dytext = " day, ";
	    if (hr == 1)
	        hrtext = " hour, ";
	    if (min == 1)
	        mintext = " minute, and ";
	    if (sec == 1)
	        sectext = " second ";
	    if (now >= end) {
	        timeLeftContainer.style.display = "none";
	        clearInterval(timerID);
	    }
	    else {
	        if (oldMinutes == "" || oldMinutes != min) {
	            timeLeftHours.innerHTML = (hr<10 ? "0" : "") + hr + '<span>'+(hr!=1 ? "hours" : "hour")+'</span>';
	            timeLeftMinutes.innerHTML = (min<10 ? "0" : "") + min + '<span>'+(min!=1 ? "minutes" : "minute")+'</span>';
	            oldMinutes = min;
	        }
	    }

	}