let h=0;
let m=0;
let s=0;
let interval;

function StartTimer(){
    interval= setInterval(Timer,1000);
    document.getElementById("sb").disabled=true;
}

function Timer(){
    s=s+1;
    document.getElementById("sl").innerHTML=s;
if (s==60){
    m=m+1;
    s=0;
    document.getElementById("sl").innerHTML=s;
    document.getElementById("ml").innerHTML=m;
}
if (m==60){
    h=h+1;
    m=0;
    s=0;
    document.getElementById("sl").innerHTML=s;
    document.getElementById("ml").innerHTML=m;
    document.getElementById("hl").innerHTML=h;
}
}

function StopTimer(){
    clearInterval(interval);
    document.getElementById("sb").disabled=false;
}

function ResetTimer(){
    clearInterval(interval);
    s=0;
    m=0;
    h=0;
    document.getElementById("sl").innerHTML=s;
    document.getElementById("ml").innerHTML=m;
    document.getElementById("hl").innerHTML=h;
    document.getElementById("sb").disabled=false;
}