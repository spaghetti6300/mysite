/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function displayDate() {
    var today = new Date();
    let m = today.getMonth();
    let d = today.getDay();
    let y = today.getFullYear();
    m = checkDate(m);
    d = checkDate(d);
    document.getElementById('date').innerHTML =  m + "/" + d + "/" + y;
}

displayDate()

function checkDate(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

