//while loop that prints all even numbers from 0 to 100
let i = 0;

while (i <= 100){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}
//while loop that prints every 3rd number going backwards from 100 until we reach 0
let j = 100;

while (j >= 0){
    console.log(j);
    j-=3;
}

//for loop that prints every other number from 1 to 100
for(let k = 1; k <= 100; k+=2){
    console.log(k);
}

/*for loop that prints every number from 0 to 100, but if the 
number is divisible by 3, it prints “Hello” instead of the number, 
and if the number is divisible by 5, it prints “World” instead of the number, 
and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.
*/
for(let m = 0; m <= 100; m+=2){
    if(m % 3 == 0 && m % 5 == 0){
        console.log("HelloWorld");
    }
    else if (m % 3){
        console.log("Hello");
    }
    else if (m % 5){
        console.log("World");
    }
    else{
        console.log(m);
    }
}