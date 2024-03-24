function bmi() {
    var h = document.getElementById('Height').value;
    var w = document.getElementById('Weight').value;
    var bmi = w / (h / 100 * h/100);
    var total = bmi.toFixed(2);
    document.getElementById('result').innerHTML = `Your BMI is: ${total}`;
}