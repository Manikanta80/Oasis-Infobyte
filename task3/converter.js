document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultParagraph = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperatureValue = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;

        if (!isNaN(temperatureValue)) {
            let convertedTemperature, convertedUnit;

            if (selectedUnit === "celsius") {
                convertedTemperature = (temperatureValue * 9/5) + 32;
                convertedUnit = "Fahrenheit";
            } else if (selectedUnit === "fahrenheit") {
                convertedTemperature = (temperatureValue - 32) * 5/9;
                convertedUnit = "Celsius";
            } else if (selectedUnit === "kelvin") {
                convertedTemperature = temperatureValue - 273.15;
                convertedUnit = "Celsius";
            }

            resultParagraph.innerText = `${temperatureValue.toFixed(2)} ${selectedUnit} is equal to ${convertedTemperature.toFixed(2)} ${convertedUnit}.`;
        } else {
            resultParagraph.innerText = "Please enter a valid temperature.";
        }
    });
});
