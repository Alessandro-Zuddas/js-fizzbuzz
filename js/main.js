"use strict";

const table = document.getElementById("table-row");

for(let i = 1; i <= 100; i++){
    // Creo elemento html e lo assegno
    const div = document.createElement('div');
    div.classList.add("col");

    if(i % 3 === 0 && i % 5 === 0){

        // Se è divisibile sia per 3 che per 5 stampo FizzBuzz
        div.classList.add("col-fizz-buzz");
        div.innerHTML = "FizzBuzz";

    }else if(i % 3 === 0){

        // Se è divisibile per 3 stampo Fizz
        div.classList.add("col-fizz");
        div.innerHTML = "Fizz";

    }else if(i % 5 === 0){

        // Se è divisibile per 5 stampo Buzz
        div.classList.add("col-buzz");
        div.innerHTML = "Buzz";

    }else{

        // Altrimenti stampo il numero contenuto in i
        div.classList.add("col-numbers");
        div.innerHTML = i;

    }

    // Inserisco l'elemento nella pagina
    table.append(div);
}