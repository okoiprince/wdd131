let age = 16;
if (age >= 18) {
    console.log("Price: You pay full amount");
} else {
    console.log("Price: Child you get a discount");
}
let option = 1
switch (option) {
    case 1: 
        console.log("This case action one");
        break;

    case 2:
        console.log("This case action two");
        break

    default:
        console.log("This is default statement");
}

for (let i = 0; i <= 5; i++) {
    // Enter the code action here to loop
}

let count = 1;

while (count < 5) {
    console.log("Count is"+ count);
    count++;
}

let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit){
    console.log ("Fruit: " + fruit);
})