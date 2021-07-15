//FizzBuzz process

//Get the input

//Convert to integer

//Run loop from 1 to 100

//Determine if Fizz, Buzz, or FizzBuzz
//Fizz = number % input 1 = 0
//Buzz = number % input 2 = 0
//FizzBuzz = number % input 1 = 0 && number % input 2 = 0

//Print the results Fizz, Buzz FizzBuzz, or the number

function fizzBuzzData() {

    for (let i = 1; i <= 100; i++) {
        if ((i % fizzVal == 0) && (i % buzzVal == 0)) {
            displayData("FizzBuzz");
            return;
        } else if (i % fizzVal == 0) {
            displayData("Fizz");
            return;
        } else if (i % buzzVal == 0) {
            displayData("Buzz");
            return;
        } else {
            return displayData(i);
        }


    }


}


function displayData(fizzBuzzData) {
    //access the table bodyelement on the DOM
    let tableBody = document.getElementById("output");

    //access the template element on the DOM
    let templateRow = document.getElementById("fbTemplate");

    let fizzVal = document.getElementById("fizzVal").value;
    let buzzVal = document.getElementById("buzzVal").value;

    fizzVal = parseInt(fizzVal);
    buzzVal = parseInt(buzzVal);

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