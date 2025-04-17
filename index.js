const inputValue = document.getElementById('input')
const metersToFeet = document.getElementById('metersToFeet')
const feetToMeters = document.getElementById('feetToMeters')
const litersToGallons = document.getElementById('litersToGallons')
const gallonsToLiters = document.getElementById('gallonsToLiters')
const kilosToPounds = document.getElementById('kilosToPounds')
const poundsToKilos = document.getElementById('poundsToKilos')
const convertButton = document.getElementById('convert-button')
const errorMsg = document.getElementById('errorMsg');


convertButton.addEventListener('click',function convertToValue(){
    if (inputValue.value === "") {
        errorMsg.textContent = "Please enter a value before converting.";
        errorMsg.style.color = "red";
      } else {
        errorMsg.textContent = ""; 
        // Run your conversion logic here
    //length(meter/feet)
    metersToFeet.textContent = `${inputValue.value}meters  = ${(inputValue.value * 3.281).toFixed(3)}feet`;
    feetToMeters.textContent = `${inputValue.value}feet = ${(inputValue.value * 0.304).toFixed(3)}meters`;

    //Volumes(litres/gallons)
    litersToGallons.textContent = `${inputValue.value}liter = ${(inputValue.value * 0.264).toFixed(3)}gallons`;
    gallonsToLiters.textContent = `${inputValue.value}gallons = ${(inputValue.value * 3.788).toFixed(3)}liters`;

    //mass(kilgrams/pounds)
    kilosToPounds.textContent = `${inputValue.value} Kilogram = ${(inputValue.value * 2.204).toFixed(3)}pounds`;
    poundsToKilos.textContent = `${inputValue.value} pounds = ${(inputValue.value * 0.454).toFixed(3)}Kilogram`;
 }});