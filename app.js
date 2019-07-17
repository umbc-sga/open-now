// The divs possible
var openDiv = document.getElementById("open");
var closedDiv = document.getElementById("closed");

// JSON of all the buildings on campus
var BUILDINGS = {
    "AOK Library": {
        "Sunday": {open: 12, close: 24},
        "Monday, Tuesday, Wednesday, Thursday": {open: 8, close: 24},
        "Friday": {open: 8, close: 22},
        "Saturday": {open: 10, close: 22}
    },
    "RAC": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7, close: 22},
        "Friday": {open: 7, close: 21},
        "Saturday, Sunday": {open: 12, close: 19}
    },
    "RLC": {
        "Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday": {open: 0, close: 0}
    },
    "The Commons": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 24},
        "Friday": {open: 7.5, close: 1},
        "Saturday": {open: 8, close: 1},
        "Sunday": {open: 10, close: 23}
    }
};

// JSON of all the different restaurants on campus
var FOOD = {
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "2.Mato": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 23},
        "Friday, Saturday": {open: 11, close: 1},
        "Sunday": {open: 12, close: 22}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Admin Coffee Shoppe": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 7.5, close: 14},
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Au Bon Pain": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 18},
        "Friday": {open: 7.5, close: 14}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Chick-fil-A": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 20},
        "Friday": {open: 7.5, close: 16}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Einstein Bros. Bagels": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 22},
        "Friday": {open: 7.5, close: 15},
        "Saturday": {open: 12, close: 16},
        "Sunday": {open: 13, close: 20}
    },
    // Source: https://studentaffairs.umbc.edu/files/2017/10/UMBC-Student-Affairs-Welcome-Guide.pdf
    "Flat Tuesday's": {
        "Monday": {open: 20, close: 23.5},
        "Thursday, Friday": {open: 16, close: 23.5}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Hissho": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 20},
        "Friday": {open: 11, close: 18},
        "Sunday": {open: 12, close: 18}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Masala": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 19},
        "Friday": {open: 11, close: 14}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Mondo Subs": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 20},
        "Friday": {open: 11, close: 18}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Outtakes (Commons)": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 23},
        "Friday": {open: 7.5, close: 16},
        "Saturday": {open: 12, close: 16},
        "Sunday": {open: 12, close: 22}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Pollo": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 20},
        "Friday": {open: 11, close: 18}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Salsaritas": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 20},
        "Friday": {open: 11, close: 19}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Starbucks": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 7.5, close: 22},
        "Friday": {open: 7.5, close: 16},
        "Sunday": {open: 14, close: 20}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "The Skylight Room": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 11, close: 13.5},
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "True Grit's Outtakes": {
        "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday": {open: 6, close: 3}
    },
    // Source: https://www.dineoncampus.com/UMBC/where-to-eat
    "Wild Greens": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 11, close: 19},
        "Friday": {open: 11, close: 18}
    },
};

var TRUE_GRITS = {
    "Monday, Tuesday, Wednesday, Thursday": {
        "Breakfast": {open: 7, close: 9.5},
        "Continental": {open: 9.5, close: 11},
        "Lunch": {open: 11, close: 13},
        "Dinner": {open: 16.5, close: 20},
        "Late Night": {open: 21, close: 2}
    },
    "Friday": {
        "Breakfast": {open: 7, close: 9.5},
        "Continental": {open: 9.5, close: 11},
        "Lunch": {open: 11, close: 13},
        "Dinner": {open: 16.5, close: 19.5},
        "Late Night": {open: 21, close: 2}
    },
    "Saturday": {
        "Brunch": {open: 9.5, close: 14},
        "Dinner": {open: 16.5, close: 19},
        "Late Night": {open: 21, close: 2}
    },
    "Sunday": {
        "Brunch": {open: 9.5, close: 14},
        "Dinner": {open: 16.5, close: 20},
        "Late Night": {open: 21, close: 2}
    }
};

// JSON of all the different offices on campus
var OTHER = {
    // Source: http://bookstore.umbc.edu/SiteText?id=52877#hours
    "Bookstore": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 8.5, close: 17},
        "Friday": {open: 8.5, close: 16}
    },
    // Source: https://campuscard.umbc.edu/
    "Campus Card & Mailing Services": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16}
    },
    // Source: https://campuslife.umbc.edu/about/contact-information/
    "Campus Life": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 9, close: 17}
    },
    // Source: https://studentaffairs.umbc.edu/departments/career-center/
    "Career Center": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17}
    },
    // Source: https://cadvc.umbc.edu/
    "Center for Art Design and Visual Culture": {
        "Tuesday, Wednesday, Thursday, Friday, Saturday": {open: 10, close: 17}
    },
    // Source: https://campuslife.umbc.edu/about/contact-information/
    "Commonvision": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 9, close: 17}
    },
    // Source: http://counseling.umbc.edu/
    "Counseling Center": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17}
    },
    // Source: Their door
    "English Learning Institute": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17.5}
    },
    // Source: https://campuslife.umbc.edu/about/contact-information/
    "Mosaic Center": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 10, close: 17}
    },
    // Source: https://studentaffairs.umbc.edu/departments/ocss/
    "Off-Campus Student Services": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17}
    },
    // Source: https://advising.umbc.edu/about-us/services/
    "Office for Academic and Pre-Professional Advising": {
        "Monday, Tuesday, Friday": {open: 8.5, close: 16.5},
        "Wednesday, Thursday": {open: 8.5, close: 18}
    },
    // Source: https://financialaid.umbc.edu/contact/
    "Office of Financial Aid and Scholarships": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16.5}
    },
    // Source: Their door
    "Office of Health Promotion": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16}
    },
    // Source: https://studentaffairs.umbc.edu/departments/student-conduct/
    "Office of Student Conduct and Community Standards": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17},
    },
    // Source: https://sds.umbc.edu/contact-us/
    "Office of Student Disablity Services": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 8.5, close: 17},
        "Friday": {open: 8.5, close: 16.5}
    },
    // Source: Google
    "Office of Undergraduate Admissions and Orientation": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16.5}
    },
    // Source: https://studentaffairs.umbc.edu/files/2017/10/UMBC-Student-Affairs-Welcome-Guide.pdf
    "Parking Services": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 7.5, close: 15.5}
    },
    // Source: https://registrar.umbc.edu/contact/
    "Registrar's Office": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16.5}
    },
    // Source: https://studentaffairs.umbc.edu/departments/residential-life/
    "Residential Life": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16.5}
    },
    // Source: https://financialaid.umbc.edu/files/2015/06/15-16_Fall_Orientation_Parents.pdf
    "Student Business Services": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 16.5}
    },
    // Source: Shrijana Khanal
    "The Women's Center": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 10, close: 18},
        "Friday": {open: 10, close: 16}
    },
    // Source: https://www.umbc.edu/transit/contact.php
    "Transit Business Office": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17}
    },
    // Source: https://www.umbc.edu/uhs/
    "University Health Services": {
        "Monday, Tuesday, Wednesday, Thursday, Friday": {open: 8.5, close: 17}
    },
    // Source: https://lrc.umbc.edu/tutor/writing-center/
    "Writing Center": {
        "Monday, Tuesday, Wednesday, Thursday": {open: 10, close: 22},
        "Friday": {open: 10, close: 15}
    }
};

/* Return the name of the day it currently is. */
function getDayName() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
}

/* Convert time to 12 hour format and other user friendly adjustments. */
function toTwelveHour(time) {
    // If the time is N/A, don't try to calculate anything
    if (time == "N/A") return;

    var timeText = "";

    // AM
    if (time < 12) {
        // If the time is not on the hours
        if (Math.floor(time) != time)
            timeText += Math.floor(time) + ":" + (60 * (time - Math.floor(time))) + "am";
        else
            timeText += time + "am";
    }
    // PM
    else {
        // If the time is midnight
        if (time == 24) return "12am";

        // If is not noon, take off 12 hours
        if (time != 12) time -= 12;

        // If the time is not on the hour
        if (Math.floor(time) != time)
            timeText += Math.floor(time) + ":" + (60 * (time - Math.floor(time))) + "pm";
        // If the time is on the hour
        else
            timeText += time.toString() + "pm";
    }

    return timeText;
}

function getDayTimeRange(dayNum, currentLocation) {
    var currentDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNum];
                
    var locationTimeRange = undefined;
    for (var dayRange in currentLocation)
        if (dayRange.includes(currentDayName))
            locationTimeRange = currentLocation[dayRange];

    return locationTimeRange;
}

/* Add an item to the open or closed list. */
function addListItem(title, timeRange) {
    // Create list item element that will be added to a card
    var listItem = document.createElement("LI");
    listItem.className = "list-group-item";

    // Create location name header for list item
    var locationNameHeading = document.createElement("H5");
    locationNameHeading.innerHTML = title;
    listItem.appendChild(locationNameHeading);

    // Store the open and close times in more easily accessible variable
    var open, close;
    if (timeRange) {
        open = timeRange.open;
        close = timeRange.close;
    }
    // If the place isn't open at all today
    else {
        open = "N/A";
        close = "N/A";
    }

    // Create time range text for list item
    var locationTimeRangeText = document.createElement("P");
    locationTimeRangeText.innerHTML = toTwelveHour(open) + " - " + toTwelveHour(close);
    listItem.appendChild(locationTimeRangeText);
                    
    var currentHour = new Date().getHours();

    // If the location isn't open at all today
    if (open == "N/A") {
        locationTimeRangeText.innerHTML = "Closed All Day";
        closedDiv.appendChild(listItem);
    }
    // If the location is open 24/7
    else if (open == 0) {
        locationTimeRangeText.innerHTML = "Open 24/7";
        openDiv.appendChild(listItem);
    }
    // If it is a late night end
    else if (open > close) {
        // Find last day number
        var lastDayNum = new Date().getDay() - 1;
        if (lastDayNum == -1) lastDayNum = 6;

        // Get current location object by title
        var currentLocation = FOOD[title];
        if (!currentLocation) currentLocation = BUILDINGS[title];
        if (!currentLocation) currentLocation = OTHER[title];

        // Check if open by last day standards
        var lastDay = getDayTimeRange(lastDayNum, currentLocation);
        if (lastDay != undefined && currentHour < lastDay.open)
            openDiv.appendChild(listItem);
        else if (currentHour > open) 
            openDiv.appendChild(listItem);
        else if (lastDay != undefined && currentHour > lastDay.close) 
            closedDiv.appendChild(listItem);
        else
            closedDiv.appendChild(listItem);
    }
    // If it's a normal start and end time
    else {
        var openMins = 60 * (open - Math.floor(open));
        var closeMins = 60 * (close - Math.floor(close));
                        
        // If it is open
        if ( (currentHour > open || (currentHour == open && new Date().getMinutes() > openMins)) && currentHour < close)
            openDiv.appendChild(listItem);
        else if (currentHour == close && new Date().getMinutes() > closeMins || currentHour > close) 
            closedDiv.appendChild(listItem);
        else
            closedDiv.appendChild(listItem);
    }
}

/* Retrieve and display the open/closing times of all the buildings */
function getTimes() {
    // Update meal period jumbotron
    getMealPeriod();

    // Reset the divs
    openDiv.innerHTML = "";
    closedDiv.innerHTML = "";

    var displayOptions = document.getElementById("dropdownMenuButton").innerHTML;
    var dayNum = new Date().getDay();

    // Display buildings that are open or closed
    if (displayOptions.includes("Buildings")) {
        // Go through every single building
        for (var building in BUILDINGS) {
            var currentLocation = BUILDINGS[building];

            // Get today's open and closing time for the location
            var locationTimeRange = getDayTimeRange(dayNum, currentLocation)

            addListItem(building, locationTimeRange);
        }
    }

    // Display food options that are open or closed
    if (displayOptions.includes("Food")) {
        var currentDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];

        // Go through day ranges for True Grit's
        for (var dayRange in TRUE_GRITS) {
            if (dayRange.includes(currentDayName)) {
                locationTimeRange = TRUE_GRITS[dayRange];

                // Go through every single meal period that its open
                for (var timeRange in locationTimeRange) {
                    var currentHour = new Date().getHours();
                    var open = locationTimeRange[timeRange].open;
                    var close = locationTimeRange[timeRange].close;

                    var openMins = 60 * (open - Math.floor(open));
                    var closeMins = 60 * (close - Math.floor(close));
                                
                    // If it is the meal period
                    if ( (currentHour > open || currentHour == open && new Date().getMinutes() > openMins) && (currentHour < close || currentHour == close && new Date().getMinutes() < closeMins) )  {
                        addListItem("True Grit's (" + timeRange + ")", locationTimeRange[timeRange]);
                    }
                }
            }
        }

        // Go through every single restaurant
        for (var restaurant in FOOD) {
            var currentLocation = FOOD[restaurant];

            // Get today's open and closing time for the location
            var locationTimeRange = getDayTimeRange(dayNum, currentLocation);

            addListItem(restaurant, locationTimeRange);
        }
    }

    // Display offices that are open or closed
    if (displayOptions.includes("Other")) {
        for (var office in OTHER) {
            var currentLocation = OTHER[office];

            // Get today's open and closing time for the location
            var locationTimeRange = getDayTimeRange(dayNum, currentLocation);

            addListItem(office, locationTimeRange);
        }
    }
}

function getMealPeriod() {
    var currentHour = new Date().getHours();
                
    // Get the current meal period
    var currentMealPeriod;
    // Breakfast 6am - 10am
    if ([6, 7, 8, 9, 10].includes(currentHour))
        currentMealPeriod = "Breakfast";
    // Lunch 11am - 2pm
    else if ([11, 12, 13, 14].includes(currentHour))
        currentMealPeriod = "Lunch";
    // Dinner 4pm - 8pm
    else if ([16, 17, 18, 19, 20].includes(currentHour))
        currentMealPeriod = "Dinner";
    // Late Night 9pm - 2am
    else if ([21, 22, 23, 24, 1, 2].includes(currentHour))
        currentMealPeriod = "Late Night";
    else
        currentMealPeriod = "N/A";

    // Set meal period element to current meal period
    document.getElementById("currentMealPeriod").innerHTML = currentMealPeriod;
}

/* Calculate and add to HTML the necessary components for the User Interface. */
function loadUI() {
    // Get and display the times
    getTimes();

    // Get the times every minute
    window.setInterval(getTimes, 60000);
}        
            
// Click listener for dropdown menu
$(".dropdown-menu").on('click', 'a', function() {
    // Change the active element to the one that is clicked
    $(".dropdown-menu a").removeClass("active");
    $(this).addClass("active");

    // Update the button text to show what is selected
    $(".btn:first-child").text($(this).text());
                
    // Update the times section to reflect display options
    getTimes();
});