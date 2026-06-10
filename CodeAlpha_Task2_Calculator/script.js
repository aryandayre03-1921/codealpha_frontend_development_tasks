const display = document.getElementById("display");

function press(btn){

    btn.classList.add("active");

    setTimeout(() => {
        btn.classList.remove("active");
    }, 150);

}

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function toggleSign(){

    if(display.value === "") return;

    if(display.value.startsWith("-")){
        display.value = display.value.substring(1);
    }else{
        display.value = "-" + display.value;
    }
}

function calculate(){

    try{

        let expression = display.value.replace(/%/g,"/100");

        display.value = eval(expression);

    }catch{

        display.value = "Error";

    }
}

