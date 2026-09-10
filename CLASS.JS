// // // // // // // // // // // // //for (let i = 0; i < 5; i++) {
// // // // // // // // // // // //   //console.log(i);
// // // // // // // // // // // // // //}
// // // // // // // // // // // // // let i =1;
// // // // // // // // // // // // // while(i<5 ;i) {
// // // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // // //     i++
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log("helloo code")
// // // // // // // // // // // // // let i=1;
// // // // // // // // // // // // // do{
// // // // // // // // // // // // // console.log("number",+i);
// // // // // // // // // // // // // i++; 
// // // // // // // // // // // // // } 
// // // // // // // // // // // // // while (i<=5);

// // // // // // // // // // // // // let a=5
// // // // // // // // // // // // // let b=6

// // // // // // // // // // // // // let cond1= b>a;
// // // // // // // // // // // // // let cond2= b=== 9;
// // // // // // // // // // // // // console.log("cond1 && cond2",cond1 && cond2)


// // // // // // // // // // // // // let a=5;
// // // // // // // // // // // // // let b=6;
// // // // // // // // // // // // // if (a>b){
// // // // // // // // // // // // //   console.log("a is smalller than a");
// // // // // // // // // // // // //   else {
// // // // // // // // // // // // //     console.log("b is greater than a");
// // // // // // // // // // // // // }

// // // // // // // // // // // // let age = 11;
// // // // // // // // // // // // let result = (age>= 18)? "eligible for vote" : "not eligible for vote"
// // // // // // // // // // // // console.log(result);


// // // // // // // // // // // // check the number, if the multipy 5 or 
// // // // // // // // // // // // check a number weather it is even or odd


// // // // // // // // // // // let num = 20;

// // // // // // // // // // // if (num % 5 === 0) {
// // // // // // // // // // //   console.log(num + " is a multiple of 5");
// // // // // // // // // // // } else {
// // // // // // // // // // //   console.log(num + " is not a multiple of 5");
// // // // // // // // // // // }

// // // // // // // // // // // if (num % 2 === 0) {
// // // // // // // // // // //   console.log(num + " is even");
// // // // // // // // // // // } else {
// // // // // // // // // // //   console.log(num + " is odd");
// // // // // // // // // // // }

// // // // // // // // // // // let number = prompt("Enter a number:"); // ask user for inpu
// // // // // // // // // // // number = Number(number); r

// // // // // // // // // // // if (number % 2 === 0) {
// // // // // // // // // // //   console.log(number + " is even");
// // // // // // // // // // //   alert(number + " is even");
// // // // // // // // // // // } else {
// // // // // // // // // // //   console.log(number + " is odd");
// // // // // // // // // // //   alert(number + " is odd");
// // // // // // // // // // // }

// // // // const readline = require("readline").createInterface({
// // // //   input: process.stdin,
// // // //   output: process.stdout
// // // // });

// // // // readline.question("Enter a number: ", (num) => {
// // // //   num = Number(num); // convert input to number

// // // //   if (isNaN(num)) {
// // // //     console.log("Please enter a valid number!");
// // // //   } else if (num % 2 === 0) {
// // // //     console.log(num + " is even");
// // // //   } else {
// // // //     console.log(num + " is odd");
// // // //   }

// // // //   readline.close();
// // // // });


// // // // // // // // // // // let num=50;
// // // // // // // // // // // if (num<50); {
// // // // // // // // // // // console.log("numberis vaild");
// // // // // // // // // // // } else if (num>50); {
// // // // // // // // // // // console.log("number is not vaild");
// // // // // // // // // // // }


// // // // // // // // // // //METHODS OF THE STRING

// // // // // // // // // // // String Methods - Full Demonstration
// // // // // // // // // // // console.log("-------========*******STRING METHODS DEMO************=======-----");

// // // // // // // // // // // let str = "SkillOTech Academy";

// // // // // // // // // // // // 1. length javascript class
// // // // // // // // // // // console.log("\n1. Length:", str.length);

// // // // // // // // // // // // 2. toUpperCase() javascript class
// // // // // // // // // // // console.log("\n2. toUpperCase():", str.toUpperCase());

// // // // // // // // // // // // 3. toLowerCase() javascript class
// // // // // // // // // // // console.log("\n3. toLowerCase():", str.toLowerCase());

// // // // // // // // // // // // 4. trim() javascript class
// // // // // // // // // // // let msg = "   Hello World   ";
// // // // // // // // // // // console.log("\n4. trim():", `"${msg.trim()}"`);

// // // // // // // // // // // // 5. slice(start, end) javascript class
// // // // // // // // // // // console.log("\n5. slice(0, 5):", str.slice(0, 5));
// // // // // // // // // // // console.log("   slice(-7):", str.slice(-7));

// // // // // // // // // // // // 6. substring(start, end) javascript class
// // // // // // // // // // // console.log("\n6. substring(0, 5):", str.substring(0, 5));

// // // // // // // // // // // // 7. replace(old, new) javascript class
// // // // // // // // // // // let line1 = "I love Java. Java is powerful.";
// // // // // // // // // // // console.log("\n7. replace('Java', 'JavaScript'):", line1.replace("Java", "JavaScript"));

// // // // // // // // // // // // 8. replaceAll(old, new) javascript class
// // // // // // // // // // // let line2 = "Java is fun. Java is strong.";
// // // // // // // // // // // console.log("\n8. replaceAll('Java', 'Python'):", line2.replaceAll("Java", "Python"));

// // // // // // // // // // // // 9. split(separator) javascript class
// // // // // // // // // // // let fruits = "apple,banana,grapes";
// // // // // // // // // // // console.log("\n9. split(','):", fruits.split(","));

// // // // // // // // // // // // 10. includes(value) javascript class
// // // // // // // // // // // let sentence = "Hello World";
// // // // // // // // // // // console.log("\n10. includes('World'):", sentence.includes("World"));

// // // // // // // // // // // // 11. startsWith(value) javascript class
// // // // // // // // // // // console.log("\n11. startsWith('Skill'):", str.startsWith("Skill"));

// // // // // // // // // // // // 12. endsWith(value)
// // // // // // // // // // // console.log("\n12. endsWith('Academy'):", str.endsWith("Academy"));

// // // // // // // // // // // // 13. concat(value) javascript class
// // // // // // // // // // // let a = "SkillO";
// // // // // // // // // // // let b = "Tech";
// // // // // // // // // // // console.log("\n13. concat(b):", a.concat(b));

// // // // // // // // // // // // 14. charAt(index)
// // // // // // // // // // // console.log("\n14. charAt(2):", str.charAt(2));

// // // // // // // // // // // // 15. indexOf(value)
// // // // // // // // // // // console.log("\n15. indexOf('o'):", sentence.indexOf("o"));

// // // // // // // // // // // // 16. lastIndexOf(value)
// // // // // // // // // // // console.log("\n16. lastIndexOf('o'):", sentence.lastIndexOf("o"));



// // // // // // // // // // // Array
// // // // // // // // // // // let arr = ["John", "Jane", "Jim", "Jill"];

// // // // // // // // // // // console.log( arr);
// // // // // // // // // // // for (let i of arr) {
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // // }

// // // // // // // // // // // let arr = [ 55,22,55,"John", "Jane", "Jim", "Jill"];
// // // // // // // // // // // for (let i=0; i< arr.length; i++) {
// // // // // // // // // // //     console.log(arr[i]);
// // // // // // // // // // // }


// // // // // // // // // // let arr = [ 97,42,78,50,66];
// // // // // // // // // // let a=0;
// // // // // // // // // // for (let i=0; i< arr.length; i++) {
// // // // // // // // // //     console.log("Array element at index "+ i + " is " + arr[i]);
// // // // // // // // // // }



// // // // // // // // let arr = [97, 42, 78, 50, 66];
// // // // // // // // let sum = 0;
// // // // // // // // for (let i of arr) {
// // // // // // // //     sum = sum + i;
// // // // // // // // }
// // // // // // // // console.log("sum of array is " + sum);
// // // // // // // // console.log("average of array is " + sum / arr.length);
// // // // // // // // let newmark= arr.push(88);
// // // // // // // // console.log("new array after adding mark " + arr);
// // // // // // // // let removeMark= arr.pop();
// // // // // // // // console.log("new array after removing mark " + arr);    
// // // // // // // // let shiftMark= arr.shift();
// // // // // // // // console.log("new array after removing first mark " + arr);    
// // // // // // // // let unshiftMark= arr.unshift(97);
// // // // // // // // console.log("new array after adding first mark " + arr);

// // // // // // // function greet(name) {
// // // // // // //     console.log("Hello, " + name + "!");
// // // // // // // }

// // // // // // // greet("Radhe");

// // // // // function add(a, b) {
// // // // //     return a + b;
// // // // // }   
// // // // // add(5, 10);
// // // // // console.log("Sum is: " + add(5, 10));

// // // // // let txt= "who are you";
// // // // // function text() {
// // // // //     console.log(txt);
// // // // // }
// // // // // text();
// // // function calculator(num1, num2, operator) {
// // //   let result;

// // //   if (operator === '+') {
// // //     result = num1 + num2;
// // //   } else if (operator === '-') {
// // //     result = num1 - num2;
// // //   } else if (operator === '*') {
// // //     result = num1 * num2;
// // //   } else if (operator === '/') {
// // //     if (num2 === 0) {
// // //       return "Error: Cannot divide by zero!";
// // //     }
// // //     result = num1 / num2;
// // //   } else {
// // //     return " Invalid operator Use +, -, *, or /";
// // //   }

// // //   return `Result: ${result}`;
// // // }

// // // console.log(calculator(10, 5, '+')); 
// // // console.log(calculator(10, 5, '-')); 
// // // console.log(calculator(10, 5, '*')); 
// // // console.log(calculator(10, 0, '/')); 


// // <
// //         document.getElementById("demo").innerHTML = myArray;
// //         document.getElementById("demo2").innerHTML = myArray.length;

// // ARRAT ST


// // for (let num = 2; num <= 100; num++) {
// //     let isPrime = true;

// //     for (let i = 2; i <= Math.sqrt(num); i++) {
// //         if (num % i === 0) {
// //             isPrime = false;
// //             break;
// //         }
// //     }

// //     if (isPrime) {
// //         console.log("the prime number are:" ,num);
// //     }
// // }
// // let num=5;
// // let fact=1;
// // for (let i = 1; i <= num; i++) {
// //     fact *= i;
// // }
// // console.log("factorial number is " + num , "is " + fact);
// // write a function that return the n an array
// // function sumOfArray(arr) {
// //     return arr.reduce((acc, curr) => acc + curr, 0);
// // }

// // console.log(sumOfArray([5, 5, 10])); 
// //write a function duplicates elements from an array
// function findDuplicates(arr) {
//     let duplicates = [99];
//     let newadd = new Set();
//     let added = new Set();

//     for (let item of arr) {
//         if (newadd.has(item) && added.has(item)) {
//             duplicates.push(item);
//             added.add(item);
//         }
//         newadd.add(item);
//     }

//     return duplicates;
// }

// let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
// console.log(findDuplicates(numbers)); 
