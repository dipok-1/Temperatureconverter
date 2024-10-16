const textbox = document.getElementById("text-box");
const tofharenheit = document.getElementById("tofharenheit");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");
let temp;
function convert(){
    temp = Number(textbox.value);
    if(tofharenheit.checked){ 
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }else if(tocelcius.checked){
        temp = (temp - 32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C";

    }else{
        result.textContent = "select a unit";
    }
}
function clearform(){
    tofharenheit.checked = false;
    tocelcius.checked = false;
    result.textContent = "";
    textbox.value = "0";
}