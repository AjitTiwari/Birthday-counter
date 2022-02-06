const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");
const newYear='29 Jan 2023'

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalsec=(newYearDate-currentDate) /1000;
    const days=Math.floor(totalsec/3600/24);
    const hours=Math.floor(totalsec/3600%24);
    const min=Math.floor(totalsec/60)%60;
    const sec=Math.floor(totalsec)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formattime(hours);
    minsEl.innerHTML = formattime(min);
    secondsEl.innerHTML = formattime(sec);

}
const daysEl2 = document.getElementById("days2");
const hoursEl2 = document.getElementById("hours2");
const minsEl2 = document.getElementById("min2");
const secondsEl2 = document.getElementById("seconds2");
const newYear2='19 Sep 2022'
function countdown2(){
    const newYearDate=new Date(newYear2);
    const currentDate=new Date();
    const totalsec=(newYearDate-currentDate) /1000;
    const days=Math.floor(totalsec/3600/24);
    const hours=Math.floor(totalsec/3600%24);
    const min=Math.floor(totalsec/60)%60;
    const sec=Math.floor(totalsec)%60;

    daysEl2.innerHTML = days;
    hoursEl2.innerHTML = formattime2(hours);
    minsEl2.innerHTML = formattime2(min);
    secondsEl2.innerHTML = formattime2(sec);

}

function formattime(time){
    return time<10 ?(`0${time}`): time;
}

function formattime2(time){
    return time<10 ?(`0${time}`): time;
}


countdown();
countdown2();
setInterval(countdown,1000)
setInterval(countdown2,1000)