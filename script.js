let display = document.getElementById("Display");
const btn = document.querySelector('#AC');

function updateACButton() {
    if (display.textContent === "") {
        btn.innerText = "AC";
    } else {
        btn.innerText = "C";
    }
}

function appendToDisplay(input){
    display.textContent += input;
    updateACButton();
}

function prependToDisplay(){
    display.textContent = "-" + display.textContent;
    updateACButton();
}

function percentage(){
    display.textContent = display.textContent / 100;
    updateACButton();
}

function clearDisplay(){
    display.textContent = "";
    updateACButton();
}

// Updated Calculate to handle ^
function Calculate(){
    try {
        let expression = display.textContent;

        // Replace '^' with '**' for exponentiation
        expression = expression.replace(/\^/g, "**");

        display.textContent = eval(expression).toFixed(5);
    } catch(err) {
        display.textContent = "ERROR";
    }
    updateACButton();
}

function scientific(func) {
    // Handle constants first
    if (func === 'pi') {
        if (display.textContent === "") {
            display.textContent = Math.PI.toFixed(5);
        } else {
            display.textContent = (parseFloat(display.textContent) * Math.PI).toFixed(5);
        }
        updateACButton();
        return;
    }

    if (func === 'e') {
        if (display.textContent === "") {
            display.textContent = Math.E.toFixed(5);
        } else {
            display.textContent = (parseFloat(display.textContent) * Math.E).toFixed(5);
        }
        updateACButton();
        return;
    }

    // Make sure display has a valid number
    let value = parseFloat(display.textContent);
    if (isNaN(value)) return;

    switch(func) {
        case 'sin': display.textContent = Math.sin(value*Math.PI/180).toFixed(5); break;
        case 'cos': display.textContent = Math.cos(value*Math.PI/180).toFixed(5); break;
        case 'tan': display.textContent = Math.tan(value*Math.PI/180).toFixed(5); break;
        case 'log': display.textContent = Math.log10(value).toFixed(5); break;
        case 'ln': display.textContent = Math.log(value).toFixed(5); break;
        case 'square': display.textContent = Math.pow(value, 2).toFixed(5); break;
        case 'cube': display.textContent = Math.pow(value, 3).toFixed(5); break;
        case 'asin': 
            display.textContent = (Math.asin(value) * 180 / Math.PI).toFixed(5); 
            break;
        case 'acos': 
            display.textContent = (Math.acos(value) * 180 / Math.PI).toFixed(5); 
            break;
        case 'atan': 
            display.textContent = (Math.atan(value) * 180 / Math.PI).toFixed(5); 
            break;
        case 'sqrt': display.textContent = Math.sqrt(value).toFixed(5); break;
        case 'reciprocal': display.textContent = (1/value).toFixed(5); break;
        // No more prompt needed for power, handled by ^ in Calculate()
    }
    updateACButton();
}

function changeScientific(){
    document.getElementById("Buttons").style.display = "none"
    document.getElementById("scientific-buttons").style.display = "grid"
}

function changeNormal(){
    document.getElementById("scientific-buttons").style.display = "none"
    document.getElementById("Buttons").style.display = "grid"
}
