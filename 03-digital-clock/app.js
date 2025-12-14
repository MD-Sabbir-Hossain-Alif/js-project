function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById("session");

    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const dayOfMonth = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"];

    let currentDayOfWeek = dayOfWeek[dateTime.getDay()];
    let currentDayOfMonth = dayOfMonth[dateTime.getMonth()];
    let currentDate = dateTime.getDate();

    if (hrs >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    };

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    document.getElementById("day").innerHTML = currentDayOfWeek;
    document.getElementById("date").innerHTML = currentDate;
    document.getElementById("month").innerHTML = currentDayOfMonth;

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

}

setInterval(() => {
    displayTime()
}, 1000)