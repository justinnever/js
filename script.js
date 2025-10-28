
    function convertTemp() {
      let temp = document.getElementById("tempInput").value;
      let unit = document.getElementById("unit").value;
      let result = document.getElementById("result");

      // Check if input is empty
      if (temp === "") {
        result.textContent = "Please enter a temperature value.";
        return;
      }

      // Convert based on selection
      if (unit === "CtoF") {
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
      } else {
        let celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C`;
      }
    }