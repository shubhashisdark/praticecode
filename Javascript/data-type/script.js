
//string types

const name ="shubhashis";
//number type
const age = 44;

console.log(typeof age)
console.log(typeof name)
//bigint type
let bigN = 55555555555n;

console.log(typeof bigN)

//undefined type
let a;
console.log(a)
//null type print object
let v = null;

console.log(typeof v)

//symbol datatype

const unque = Symbol("name");
console.log(typeof unque)


//boolean


const ispass = true
console.log(typeof ispass)




///reference datatype


//Array set of memory 
const students = ["raju","shytam","radhe","lulu"];

console.log(students[3])

//OBJECTS
const obj = {
    name:"silu",
    age:88,
    dob:"10/05/2003"
};
console.log(typeof obj)

//function reference data type 

//function is a reusable code

function greet() {
    console.log("hey how are you")
};
greet()


//parametere argruments


//dynamic function 


function sum(num1,num2){
    console.log(num1+num2);

};
sum(40,50)



let user = {
    user: "shubhashis",
age: 78,
college:"usbm"

};

console.log(user)


//function is a reusable block of code called function 

function division(num1,num2){
    console.log(num1-num2)

};
division(50,45);

//welcome


function welcome(name){
    console.log("hello "  + name)
};

welcome("shubhashis")
welcome("daniel")