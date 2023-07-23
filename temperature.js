var Temperature = /** @class */ (function () {
    function Temperature() {
    }
    Temperature.calculateFahrenheit = function (y) {
        return y * 9 / 5 + 32;
    };
    Temperature.calculateCelsius = function (y) {
        return (y - 32) * (5 / 9);
    };
    return Temperature;
}());
var celsiusForm = document.getElementById("CtoF"); // celsius to fahrenheit input field
var fahrenheitForm = document.getElementById("FtoC"); // fahrenheit to celsius input field
var textF = document.getElementById("TextF"); // p tag to display fahrenheit value
var textC = document.getElementById("TextC"); // p tag to display celsius value
// reference: https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
// listens to Celsius to Fahrenheit input field
celsiusForm.addEventListener('input', function () {
    var celsiusValue = (document.getElementById("CtoF").value); // saves current value from input field
    textF.innerHTML = (Temperature.calculateFahrenheit(+celsiusValue)).toString(); // calls conversion method and shows result in p tag
    if (celsiusValue === "") {
        textF.innerHTML = ""; // if input field is empty, p tag is set to empty string
    }
});
// listens to Fahrenheit to Celsius input field
fahrenheitForm.addEventListener('input', function () {
    var fahrenheitValue = (document.getElementById("FtoC").value);
    textC.innerHTML = (Temperature.calculateCelsius(+fahrenheitValue)).toString();
    if (fahrenheitValue === "") {
        textC.innerHTML = "";
    }
});
