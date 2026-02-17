document.addEventListener("DOMContentLoaded", function() {

// Задача 1 //

let first = 0;
let button = document.getElementById("button");
let clicknumber = document.getElementById("clicknumber");
let maximum = document.getElementById("maximum");

button.addEventListener("click", function (){
    ++first;
    clicknumber.textContent = first;

    if (first >=10) {
        button.disabled = true;
        maximum.textContent = "Это максимум!";
    }
});

// Задача 2 (я ее закомментирую, чтобы написать третью) //

//let second = 10;
//let timer=document.getElementById("timer");
//let again=document.getElementById("again");
//let interval;
//function startTimer(){
 //   interval=setInterval(function(){
 //       second--;
  //      timer.textContent=second;

   // if(second == 0){
  //      clearInterval(interval);
  //      timer.textContent="Время вышло";
  //  }
 //   }, 1000);
 //}

// again.addEventListener("click", function() {
   // clearInterval(interval);
   // second=10;
   // timer.textContent=second;
   // startTimer();
//})

// startTimer(); 

// Задача 3 //
let third=0;
let sectimer=document.getElementById("sectimer");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let interval; 
start.addEventListener("click", function(){
    if(!interval){
        interval=setInterval(function(){
            third++;
            sectimer.textContent=third;
        }, 1000);
    }
})

stop.addEventListener("click", function(){
    clearInterval(interval);
    interval=0;
});

reset.addEventListener("click", function(){
    clearInterval(interval);
    interval=null;
    third=0;
    sectimer.textContent=third;
});


});