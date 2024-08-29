function addNumbers() {

    // Getting the input values and converting them to numbers
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);


    // Checking if the input is a number
    if (isNaN(num1) || isNaN(num2)) {

        // Displaying an error message
        document.getElementById('result').innerHTML = 'Input must be a number';

    } else {

        // Adding the numbers and displaying the result
        let sum = num1 + num2;

    }

}

function subnumbers() {

    // Getting the input values and converting them to numbers
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    // Checking if the input is a number
    if (isNaN(num1) || isNaN(num2)) {

        // Displaying an error message
        document.getElementById('result').innerHTML = 'Input must be a number';

    } else {



        // subtracting the numbers and displaying the result
        let sub = num1 - num2;
        document.getElementById('result').innerHTML = 'Result: ' + sub;
    }
}


function multiplynumbers() {
    // Getting the input values and converting them to numbers

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    // Checking if the input is a number
    if (isNaN(num1) || isNaN(num2)) {

        // Displaying an error message
        document.getElementById('result').innerHTML = 'Input must be a number';
    }
    else {
        // multiplying the numbers and displaying the result
        let multiplying = num1 * num2;
        document.getElementById('result').innerHTML = 'Result: ' + multiplying;

    }
}

function divisionnumbers() {
    // Getting the input values and converting them to numbers

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    // Checking if the input is a number
    if (isNaN(num1) || isNaN(num2)) {

        // Displaying an error message
        document.getElementById('result').innerHTML = 'Input must be a number';
    }
    else {
        // division the numbers and displaying the result
        let division = num1 / num2;
        document.getElementById('result').innerHTML = 'Result: ' + division;

    }
}