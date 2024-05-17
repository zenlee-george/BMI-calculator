document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('result');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid values for weight and height.';
            return;
        }

        const bmi = calculateBMI(weight, height);

        displayBMIResult(bmi, resultDiv);
    });

    function calculateBMI(weight, height) {
        return weight / ((height / 100) ** 2);
    }

    function displayBMIResult(bmi, resultDiv) {
        if (bmi < 18.5) {
            resultDiv.textContent = "Your BMI is " + bmi.toFixed(2) + " (Underweight)";
        } else if (bmi < 25) {
            resultDiv.textContent = "Your BMI is " + bmi.toFixed(2) + " (Normal weight)";
        } else if (bmi < 30) {
            resultDiv.textContent = "Your BMI is " + bmi.toFixed(2) + " (Overweight)";
        } else {
            resultDiv.textContent = "Your BMI is " + bmi.toFixed(2) + " (Obese)";
        }
    }
});
