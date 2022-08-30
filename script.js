let btns = document.querySelectorAll("span");
let output = document.getElementById("value");

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
       switch (this.innerHTML){
        case "Clear":output.innerHTML = "";
        break;
        case "=":output.innerHTML =eval(output.innerHTML)
        break;
        default: output.innerHTML +=btns[i].innerHTML;
       }
    })
}