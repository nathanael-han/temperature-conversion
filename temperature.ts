class Temperature {  
    static calculateFahrenheit(y:number) {
        return y * 9/5 + 32;
    }

    static calculateCelsius(y:number) {
        return (y - 32) * (5/9);
    }
}

let celsiusForm = document.getElementById("CtoF");  // celsius to fahrenheit input field
let fahrenheitForm = document.getElementById("FtoC"); // fahrenheit to celsius input field
let textF = document.getElementById("TextF");  // p tag to display fahrenheit value
let textC = document.getElementById("TextC");  // p tag to display celsius value

// reference: https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined

// listens to Celsius to Fahrenheit input field
celsiusForm!.addEventListener('input', () => {
    let celsiusValue = ((document.getElementById("CtoF") as HTMLInputElement).value);  // saves current value from input field
    textF!.innerHTML = (Temperature.calculateFahrenheit(+celsiusValue)).toString();  // calls conversion method and shows result in p tag
    if(celsiusValue === "") {
        textF!.innerHTML = "";  // if input field is empty, p tag is set to empty string
    }
});

// listens to Fahrenheit to Celsius input field
fahrenheitForm!.addEventListener('input', () => {
    let fahrenheitValue = ((document.getElementById("FtoC") as HTMLInputElement).value);
    textC!.innerHTML = (Temperature.calculateCelsius(+fahrenheitValue)).toString();
    if(fahrenheitValue === "") {
        textC!.innerHTML = "";
    }
});
