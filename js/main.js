"use strict"

const ul = document.querySelector("ul.list");


for(let i = 1; i <= 100; i++){

    const li = document.createElement('li')
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz');
        li.append('FizzBuzz');
        li.classList.add("fizzbuzz","box");
    }else if(i%5===0){
        console.log('Buzz');
        li.append('Buzz');
        li.classList.add("buzz","box");
    }else if(i%3===0){
        console.log('Fizz');
        li.append('Fizz');
        li.classList.add("fizz","box");
    }else{
        console.log(i);
        li.append(i);
        li.classList.add("num","box");
    }
    
    ul.append(li);
};


