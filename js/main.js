"use strict";

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        // Se è divisibile sia per 3 che per 5 stampo FizzBuzz
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        // Se è divisibile per 3 stampo Fizz
        console.log("Fizz");
    }else if(i % 5 == 0){
        // Se è divisibile per 5 stampo Buzz
        console.log("Buzz");
    }else{
        // Altrimenti stampo il numero contenuto in i
        console.log(i);
    }
}