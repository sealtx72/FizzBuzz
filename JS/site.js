//FizzBuzz process
//Get the input
function getValues(){
    let fizzVal = document.getElementById("fizzVal").value;
    let buzzVal = document.getElementById("buzzVal").value;

    //Convert to integer
    fizzVal = parseInt(fizzVal);
    buzzVal = parseInt(buzzVal);
    
    // Verify that we have numbers
    if (isNaN(fizzVal) || isNaN(buzzVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only numbers, Please try again!'
        })
        return;
    } else {
        fizzBuzzData = fizzBuzz(fizzVal, buzzVal);
        displayData(fizzBuzzData);
    }
}
function fizzBuzz(fizzVal, buzzVal) {
    let returnArray = [];
    //Run loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //Determine if Fizz, Buzz, or FizzBuzz
        if ((i % fizzVal == 0) && (i % buzzVal == 0)) {
            returnArray.push("FizzBuzz");
        } else if (i % fizzVal == 0) {
            returnArray.push("Fizz");
        } else if (i % buzzVal == 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//Print the results Fizz, Buzz FizzBuzz, or the number
function displayData(fizzBuzzData) {
    //access the table bodyelement on the DOM
    let tableBody = document.getElementById("output");

    //access the template element on the DOM
    let templateRow = document.getElementById("fbTemplate");

    //clear out any information currently in the table body (let's the code run multiple times without stacking)
    tableBody.innerHTML = '';

    //go through the supplied FB information and fill out table rows with it
    for (let index = 0; index < fizzBuzzData.length; index += 5) {

        //grab the inside of the template element, but not the template element itself
        const tableRow = document.importNode(templateRow.content, true);

        //tableRow represents the <tr> and all <td> from inside de <template>
        //we only want to interact with the <td> elements
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[index]);
        rowCols[0].textContent = fizzBuzzData[index];

        rowCols[1].classList.add(fizzBuzzData[index + 1]);
        rowCols[1].textContent = fizzBuzzData[index + 1];

        rowCols[2].classList.add(fizzBuzzData[index + 2]);
        rowCols[2].textContent = fizzBuzzData[index + 2];

        rowCols[3].classList.add(fizzBuzzData[index + 3]);
        rowCols[3].textContent = fizzBuzzData[index + 3];

        rowCols[4].classList.add(fizzBuzzData[index + 4]);
        rowCols[4].textContent = fizzBuzzData[index + 4];

        tableBody.appendChild(tableRow);
    }

}