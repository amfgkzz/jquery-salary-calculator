$(document).ready(readyNow)

let arrayTotal = [];

// On page load run this function
function readyNow() {

    $('#submitButton').on('click', onSubmit);
    $('.container').on('click', '.deleteButton', '.deleteClass', onDelete);
}


// Function for on click submit button
function onSubmit() {

    // Ask to input all information before running

    if ($('.inputData').val() == '') {
        alert('Please fill in any empty fields!');
    }
    else {

        // Input Variables

        const inputFirstName = $('#inputOne').val();
        const inputLastName = $('#inputTwo').val();
        const inputIDnumber = $('#inputThree').val();
        const inputJobTitle = $('#inputFour').val();
        const inputAnnualSalary = $('#inputFive').val();

        // Adding table rows

        $('.table-body').append
            (`
        <tr>
            <td class="tData">` + inputFirstName + `</td>
            <td class="tData">` + inputLastName + `</td>
            <td class="tData">` + inputIDnumber + `</td>
            <td class="tData">` + inputJobTitle + `</td>
            <td class="tDataSalary">` + `$` + inputAnnualSalary + `</td>
            <td class="deleteClass"><button class="deleteButton">Delete</button></td>
        </tr>
        `)

        // Push salary into array

        pushNewArray();

        // Delete all data stored in the inputs

        $('.inputData').val('');
    }
} // End function for on click submit button


// Function for on click delete button
function onDelete() {

    // Delete action

    $(this).closest('tr').remove();

} // End function for on click delete button


// Function that pushes salary into an empty array
function pushNewArray() {

    // Salary input variable

    const salaryInput = $('#inputFive').val();

    // Action for pushing into array

    arrayTotal.push(salaryInput);

    // Run calculate

    calculateMonthly();

} // End push function


// Function that calculates salary and converts in total monthly
function calculateMonthly() {

    let useExample = 15500;
    // Parse every string in array

    for (let i = 0; i < arrayTotal.length; i++) {
        arrayTotal[i] = parseInt(arrayTotal[i]);
    }

    // Sum all numbers in array

    newTotal = arrayTotal.reduce(function (a, b) {
        return a + b;
    })

    // Round number into whole number

    newTotal = Math.round(newTotal / 12);

    // Created new variable to store both values

    let totalMonthly = (newTotal + useExample);

    // Change color to red if more than 20000

    if (totalMonthly > 20000) {
        $('#total-amount').css('color', 'red');
    }
    else if (totalMonthly <= 20000) {
        $('#total-amount').css('color', 'black');
    }

    // Show amount on DOM

    $('#total-amount').text(totalMonthly);

} // End Function calculator
