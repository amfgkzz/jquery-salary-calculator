$(document).ready(readyNow)

let arrayTotal = [];

// On page load run this function
function readyNow() {

    $('#submitButton').on('click', onSubmit);
    $('.container').on('click', '.deleteButton', onDelete);

}

// Function for on click submit button
function onSubmit() {

    // Ask to input all information before running
    if ($('.inputData').val() == '') {
        alert('Please fill in any empty fields!');
    }
    else {

        const inputFirstName = $('#inputOne').val();
        const inputLastName = $('#inputTwo').val();
        const inputIDnumber = $('#inputThree').val();
        const inputJobTitle = $('#inputFour').val();
        const inputAnnualSalary = $('#inputFive').val();

        // Adding a table row

        $('.table-body').append
            (`
        <tr>
            <td>` + inputFirstName + `</td>
            <td>` + inputLastName + `</td>
            <td>` + inputIDnumber + `</td>
            <td>` + inputJobTitle + `</td>
            <td class="salary">` + `$` + inputAnnualSalary + `</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
        `)

        // Delete all data stored in the inputs

        testFun();
        $('.inputData').val('');

        // Run totalMonthly function

        totalMonthly(inputAnnualSalary);

    }
} // End function for on click submit button

// Function for on click delete button
function onDelete() {

    $(this).closest('tr').remove();

    // Stretch Goal
    deleteMonthly();

} // End function for on click delete button

// Function for counting salary
function totalMonthly(Salary) {

    let totalAmount = 15500
    let addToMonthly = (parseInt(Salary) / 12);
    let totalAmountAfter = + Math.round(totalAmount + addToMonthly);

    // Change the total monthly color to red on DOM

    if (totalAmountAfter > 20000)
        $('#total-amount').css('color', 'red');

    // Change the total monthly on DOM to input
    $('#total-amount').text(totalAmountAfter);

} // End function for counting Salary

// Function for deleting Salary
function deleteMonthly() {

    console.log('hi');

} // End function for deleting Salary

// test function
function testFun(){

    const runThru = $('#inputFive').val();
    
    arrayTotal.push(runThru);
    
    console.log(arrayTotal);
    
    testFunner();

}

// test function two
function testFunner() {

    for (let i = 0; i < arrayTotal.length; i++) {
        const element = array[i];
        
        
    }

}
