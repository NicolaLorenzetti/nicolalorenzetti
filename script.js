function convertToFahrenheit() {
  const fahrenheitInput = document.getElementById('fahrenheit-input');
  const celsiusInput = document.getElementById('celsius-input');
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = (fahrenheitValue - 32) * 5 / 9;

  if (!isNaN(fahrenheitValue)) {
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
  } else {
    celsiusInput.value = '';
  }
}

function convertToCelsius() {
  const fahrenheitInput = document.getElementById('fahrenheit-input');
  const celsiusInput = document.getElementById('celsius-input');
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = celsiusValue * 9 / 5 + 32;

  if (!isNaN(celsiusValue)) {
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
  } else {
    fahrenheitInput.value = '';
  }
}
