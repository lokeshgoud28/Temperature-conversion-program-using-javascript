
const text=document.getElementById("text");
const fahren=document.getElementById("fahren");
const celsius=document.getElementById("celsius");
const result=document.getElementById("result");

let temp;

function convert(){
    if(fahren.checked){
        temp=Number(text.value);
        temp=temp * 9 / 5 + 32;
        result.textContent= temp.toFixed(1) + "\u00B0F";
    }
    else if(celsius.checked){
        temp=Number(text.value); 
        temp=(temp - 32) * 5 / 9; 
        result.textContent= temp.toFixed(1) + "\u00B0 C";

    }
    else{
        result.textContent="Select a unit";
    }


}