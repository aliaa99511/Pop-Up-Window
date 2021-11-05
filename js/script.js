

var btn=document.getElementById("btn");
var modall=document.getElementById("modall");
var close=document.getElementById("close");

btn.addEventListener("click",function(){

    modall.style="top: 17%";
})


close.addEventListener("click",function(){
    modall.style="top: -343px;";
})