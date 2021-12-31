function czas(){
    //DEC 31, 2021 00:00:00
    var data = new Date("JAN 1, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    var czas_do = data - now;
    var dzien = Math.floor(czas_do / (1000 * 60 * 60 * 24));
    var godziny = Math.floor((czas_do / (1000 * 60 * 60)) % 24);
    var minuty = Math.floor((czas_do % (1000 * 60 * 60)) / (1000 * 60));
    var sekundy = Math.floor((czas_do % (1000 * 60)) / 1000);
    
    document.getElementById("czas").innerHTML = dzien+" dni "+godziny+" godziny "+minuty+" minuty "+sekundy+" sekundy";
    if(czas_do<172800000){ //48h
        document.getElementById("czas").style.color = "orange";
    }
    if (czas_do < 1440000){ //24h
        document.getElementById("czas").style.color = "red";
    }
    if (czas_do < 0) {
        document.getElementById("czas").style.color = "red";
        document.getElementById("czas").innerHTML = "Nowy Rok!!";
      }
setTimeout("czas()",1000);
}

czas();

function teraz(){
    var data = new Date();
    var ms = data.getMilliseconds();
    var sec = data.getSeconds();
    if(sec<10){
        sec= "0"+sec;
    }
    var min = data.getMinutes();
    if(min<10){
        min="0"+min;
    }
    var h = data.getHours();
    if(h<10){
        h = "0"+h;
    }
    var day = data.getDate();
    if(day<10){
        day = "0"+day;
    }
    var msc = data.getMonth()+1;
    if(msc<10){
        msc = "0"+msc;
    }
    var rok1 = data.getFullYear();
    document.getElementById("teraz").innerHTML = rok1+"/"+msc+"/"+day+"/"+h+":"+min+":"+sec;
    setTimeout("teraz()",1000);
  
}

teraz()

