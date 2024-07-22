
/*wap to calculate sum of 2 digits  */

/* function printSum(a, b) {
    let sum = a + b;
    console.log(` ${a} + ${b} = ${sum}`)
}


printSum(1, 2,);
printSum(5, 4,);
printSum(5, 6,);

let fruitsData = [
    {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        price: 100,
    },
    {
        name: "orange",
        scientificName: "k-xyz",
        price: 50,
    },
    {
        name: "apple",
        scientificName: "k-xyz",
        price: 150,
    },
]

console.log(fruitsData[0].name.price = {country : "canada", fruit : "apple", price : 100});

console.log("The price of" + fruitsData[0].name +  "is",fruitsData[0].price); 
console.log("The price of" + fruitsData[1].name +  "is",fruitsData[1].price);
console.log("The price of" + fruitsData[2].name +  "is",fruitsData[2].price);
 */
/* 
research on
template literal




string literal
function
basic function 
*/



/* Array Method in java 
string method
let users = ['sudip', 'aayush','ankit','amup','prakash' ]

let stringUsers = users.toString();
console.log(stringUsers);
*/

// join ()
// let peoples = ['sudip', 'aayush','ankit','amup','prakash' ]

// let stringUsers = peoples.join(' is pro ');
// console.log(stringUsers);

/* concat() combine arrays together */

// let users = ['sudip', 'aayush', 'ankit', 'amup', 'prakash']
// let user1 = ['kakarot', 'goku']

// let joined = users.concat(user1)-*
// console.log(joined);

/* splice() to add elements to array */
// let names = ['sudip', 'aayush','ankit','amup','prakash' ]
// let namesCopy = [...names];  spread syntax
//  names.splice(1,1);
//  console.log(names);
//  console.log(namesCopy);

/* 
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

let sudip = createHelloWorld();
console.log(sudip());