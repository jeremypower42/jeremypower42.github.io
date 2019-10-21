/* code to get current date and post to html file. */
let dayNames = [

    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

];

let months = [

    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName  = months[d.months()];
let fullDate = dayName + ", " + monthName + " " + d.getDate()
+ ", " + d.getFullYear();

document.getElementById("currentdate").innerHTML = fullDate;

try {
    let options = {
        weekday: "long";
        day = "nemeric";
        month = "long";
        year = "numeric";
    };
    document.getElementById(
        "currentdate2").innerHTML = new Date().toLocaleDateString("en-US", options);}
        catch (e){
            alert("Error");
        }

    )
}



