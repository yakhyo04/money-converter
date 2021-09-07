const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elSelect = document.getElementById("select");
const elTitle = document.getElementById("title");


const dollar = 10696.36;
const euro = 12673.58;
const ruble = 146.01;
const somoniy = 944.05;
const dirham = 2912.17; 
const dinor = 35582.78;

let elInputValue = Number(elInput.value)

elForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(!isNaN(elInputValue)){
        if(elSelect.value === "dollar"){
            elTitle.textContent = (elInput.value / dollar).toFixed(2)+ ' $';
        }else if(elSelect.value === "euro"){
            elTitle.textContent = (elInput.value / euro).toFixed(2)+ ' euro';
        }else if(elSelect.value === "ruble"){
            elTitle.textContent = (elInput.value / ruble).toFixed(2)+ ' ruble';
        }else if(elSelect.value === "somoniy"){
            elTitle.textContent = (elInput.value / somoniy).toFixed(2)+ ' somoniy';
        }else if(elSelect.value === "dirham"){
            elTitle.textContent = (elInput.value / dirham).toFixed(2)+ ' dirham';
        }else if(elSelect.value === "dinor"){
            elTitle.textContent = (elInput.value / dinor).toFixed(2)+ ' dinor';
        }
    }else{
        elTitle.textContent = "Error";
    }
})