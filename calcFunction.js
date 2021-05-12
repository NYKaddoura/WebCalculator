var memory = 0.0;

function numPressed (evt){
    disp = document.getElementById("output");
    disp.value += evt.target.value;
}
function opPressed (evt){
    disp = document.getElementById("output");
    reg = document.getElementById("register");
    reg.setAttribute("data-op", evt.target.value);

    reg.value = disp.value;
    disp.value = "";
}
function equalsPressed (evt){
    disp = document.getElementById("output");
    reg = document.getElementById("register");
    op = reg.getAttribute("data-op");

    if (op == '+'){
        disp.value = parseFloat(disp.value, 10) + parseFloat(reg.value, 10);
    } else if (op == '-'){
        disp.value = reg.value - disp.value;
    } else if (op == 'x'){
        disp.value = parseFloat(disp.value, 10) * parseFloat(reg.value, 10);
    } else if (op == '÷'){
        disp.value = reg.value / disp.value;
    } else if (op == '1/x'){
        disp.value = 1 / parseFloat(reg.value, 10);
    } else if (op == '%'){
        disp.value = parseFloat(reg.value, 10) / 100;
    }

    reg.value = "";
    reg.setAttribute("data-op", "");
}
function memButtons (evt){
    disp = document.getElementById("output");
    type = evt.target.value;

    if (type == "M+"){
        memory = memory + parseFloat(disp.value, 10);
    } else if (type == "M-"){
        memory = memory - parseFloat(disp.value, 10);
    } else if (type == "MR"){
        disp.value = memory.toString();
    } else if (type == "MC"){
        memory = 0.0;
        disp.value = memory.toString();
    }
}
function inverse (evt){
    disp.value = (disp.value * -1);
}
function squareRoot (evt){
    disp.value = Math.sqrt(parseFloat(disp.value, 10));
}
function turnHalloween (evt){
    evt.target.style.background = "black";
    evt.target.style.color = "orange";
}
function turnBack (evt){
    evt.target.style.background = "";
    evt.target.style.color = "";
}
function clearCalc (evt){
    disp = document.getElementById("output");
    disp.value = "";
}
function hasDecimal (evt){
    disp = document.getElementById("output");
    var dot = evt.target.value;

    if (!disp.value.includes(dot)){
        disp.value += dot;
    }
}

const btnNums = document.getElementsByClassName("number");

for (var btn of btnNums){
    btn.onclick = numPressed;
    btn.onmouseenter = turnHalloween;
    btn.onmouseleave = turnBack;
}

const btnOps = document.getElementsByClassName("operator");

for (var btn of btnOps){
    btn.onclick = opPressed;
    btn.onmouseenter = turnHalloween;
    btn.onmouseleave = turnBack;
}

const btnMem = document.getElementsByClassName("MEM");

for (var btn of btnMem){
    btn.onclick = memButtons;
    btn.onmouseenter = turnHalloween;
    btn.onmouseleave = turnBack;
}

document.getElementById("equals").onclick = equalsPressed;
document.getElementById("clear").onclick = clearCalc;
document.getElementById("inverse").onclick = inverse;
document.getElementById("root").onclick = squareRoot;
document.getElementById("dot").onclick = hasDecimal;
document.getElementsByClassName("MEM").onclick = memButtons;