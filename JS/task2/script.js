function findSum() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);

    var sum = number1 + number2;
    var resultElement = document.getElementById("result");
    resultElement.innerText = "The sum is: " + sum;
}
