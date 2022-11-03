let second = 00;
let tens = 00
let startbutton = document.getElementById('start')
let stopbutton = document.getElementById('stop')
let resetbutton = document.getElementById('reset')
let getminutes = document.getElementById('minutes')
let getseconds = document.getElementById('seconds')
let interval;

startbutton.addEventListener('click', function(){
    interval = setInterval(startTimer, 10)
})

stopbutton.addEventListener('click', function(){
    clearInterval(interval);
})

resetbutton.addEventListener('click', function(){
    clearInterval(interval);
    tens = "00"
    second = "00";
    getseconds.innerHTML = second;
    getminutes.innerHTML = second
})

function startTimer(){
   tens++;
   if(tens <= 9){
    getseconds.innerHTML = "0" + tens;
   }
   if(tens > 9){
    getseconds.innerHTML = tens;
   }
   if(tens > 99){
    second ++;
    getminutes.innerHTML = '0' + second;
    tens = 0;
    getseconds.innerHTML = "0" + 0;
   }
   if(second > 9){
    getminutes.innerHTML = second;
   }
}
 