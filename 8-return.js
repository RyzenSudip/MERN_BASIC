let user = {
    name : "sudip",
    work: function(){
        console.log("ram is working")
    }
}

user.work()

function sum (fruitsData,secondData){
   
    let result = fruitsData + secondData
    return result
    
}
console.log(sum(100,10));

let output = sum(4,5)
console.log("output",output);

/* 
let myOutput = sum(double(10), double(20))
*/

// function myOutput(){
//     let double = 10 * 10 
//     let sum = (double(10), double(20))
//     return sum
// }

// let sudip = myOutput();
// console.log(myOutput());

// let myOutput = sum(double(10), double(20))
// expected myoutput = 60


function double(value) {
    return value * 2;
}

function sum(a, b) {
    return a + b;
}

let myOutput = sum(double(10), double(20));
console.log(myOutput);
<P>
    
</P>

