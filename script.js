
// document.querySelector(".switch").addEventListener("click",function(){
//     var textDom= document.querySelector(".switch").textContent;
// if (textDom == "day"){
//     document.querySelector(".switch").textContent="night"
// } else {
//     document.querySelector(".switch").textContent="day"
// };
// document.querySelector(".wrapper").classList.toggle("night");
// // realTimeClock()
// });

function realTimeClock(){
let date = new Date();
let hours= date.getHours();
let minutes= date.getMinutes();
let seconds= date.getSeconds();
let session = "PM"

if(hours < 12){
    session = "AM";
} else if(hours >= 19){
    document.querySelector(".wrapper").classList.add("night");
    document.querySelector(".switch").textContent="night";
};
hours =(hours<10) ? "0"+ hours : hours;
minutes =(minutes<10) ? "0"+ minutes : minutes;
seconds =(seconds<10) ? "0"+ seconds : seconds;

let time = hours + " : " + minutes + " : " + seconds + " " +  session;
document.getElementById("clock").innerHTML= time;
let t= setTimeout(function(){
    realTimeClock()}, 1000);
}
