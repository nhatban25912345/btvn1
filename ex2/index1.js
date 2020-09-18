let count = document.getElementById("count");

document.getElementById("red").style.backgroundColor = "red";
document.getElementById("yellow").style.backgroundColor = "yellow";
document.getElementById("green").style.backgroundColor = "green";

count.innerHTML = 3;
const x = setInterval (function(){
    let count = document.getElementById("count");
    count.innerHTML = count.innerHTML -1;
    if (count.innerHTML == -1) {
        count.innerHTML = 10;
        // document.getElementById("red").style.backgroundColor = "gray";
        if  (document.getElementById("green").style.backgroundColor == "green"){
            document.getElementById("red").style.backgroundColor = "red";
            document.getElementById("yellow").style.backgroundColor = "white";
            document.getElementById("green").style.backgroundColor = "white";
        }
        else if  (document.getElementById("red").style.backgroundColor == "red"){
            document.getElementById("red").style.backgroundColor = "white";
            document.getElementById("yellow").style.backgroundColor = "yellow";
            document.getElementById("green").style.backgroundColor = "white";
        } 
        else if  (document.getElementById("yellow").style.backgroundColor == "yellow"){
            document.getElementById("red").style.backgroundColor = "white";
            document.getElementById("yellow").style.backgroundColor = "white";
            document.getElementById("green").style.backgroundColor = "green";
        } 
    }
}, 1000);
