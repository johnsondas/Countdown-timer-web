var d = document.getElementById("day");
var h = document.getElementById("hrs");
var m = document.getElementById("min");
var s = document.getElementById("sec");

function start(){
    const currentYear = new Date().getFullYear();
    //const newYear = new Date(`january 1 ${currentYear + 1} 00:00:00`);
    const newYear = new Date(` ${currentYear + 1} `);

    const currentdate = new Date();
    const diff = newYear - currentdate;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
}

setInterval(start,1000);