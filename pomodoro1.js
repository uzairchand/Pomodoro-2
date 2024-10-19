let timer;
let compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 1);

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    let dateEntered = toDate;
    let now = new Date();
    let difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);
    } else {

        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        
        minutes %= 60;
        seconds %= 60;

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}