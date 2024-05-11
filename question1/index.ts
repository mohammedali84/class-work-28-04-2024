
// loop//
// do while //  condition  phely   1 dafa run hota hia condition ko bad mein check krta hai
// while (condition) {} phely condititon  if true then work else terminte 
// for // 

// for(exp1 : exp2; exp3){}


for (let x=0 ; x<5 ; x++){console.log("loop",x)};

for (let x=10;x<=40;x+=10){console.log("loop",x)};




//Question1// Write a script to log "Hello, World!" to the console.


console.log("helo, World")


//question2//  Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.

0
let temperature =33;
if (temperature<20){console.log("It's Cold")}
else {console.log("it's hot")}



//question 3  Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.


let apples=10
console.log("apples",apples-3)


//question4//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.


let firstname = "Muhammad"
let lastanme= "Ali"
let fullname= (firstname+  lastanme)
console.log(fullname)





//question5 Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".




let x=5;
let y=3;
if(x>y ){console.log("Ture")}
else{console.log("false")}




// question 6 Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.

function  calculateArea( radius2 =10){let dis =2*3.14*(radius2*radius2);
console.log(dis);}
calculateArea();

//


//question 7 Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".


for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) 
        console.log("Buzz"
)}


//question 8 Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.



let temperature_ = [26, 20, 60, 10, 30, 10, 14];
let highest = temperature_[0];
for (let p = 0; p < temperature_.length; p++) {
  if (temperature_[p] >= highest) {
    highest = temperature_[p];
  }
}
console.log("Max Temprature is", highest);




//qustion 9 C0reate a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.

let user=15
if(user<18){console.log("User is Minor and age is",user)}
    else{console.log("Adult")}


// question 10 Write a function that takes an array of numbers and returns the count of positive numbers in the array.

const number_array = [6, 2, 30, 4,20, -6, -7, -8, 0, 100];

const positive_number = (number_array: number[]) => {
  let count = 0;
  for (let i = 0; i < number_array.length; i++) {
    if (number_array[i] > 0) {
      count = count + 1;
    }
  }
  return count;
};

console.log("count", positive_number(number_array));



//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.


const wordArray: string[] = ["star", "moon", "sun", "apple"];

function wordsStartingWithA(words: string[]): string[] {

    const wordsWithA = words.filter(word => word.toLowerCase().startsWith('a'));
    return wordsWithA;
}



const wordsStartingWithAArray: string[] = wordsStartingWithA(wordArray);
console.log("Words starting with 'a':", wordsStartingWithAArray);





//Write a function calculateProduct that takes an array of numbers and returns the product of all elements in typescripts


/*const number$:number[]=[2,3,4,5]
const  product$:number = (number$)*/

function calculateProduct(numbers: number[]): number {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}


const numbers: number[] = [2, 3, 4, 5];
const product: number = calculateProduct(numbers);
console.log("Product:", product); 


//Develop a functionfilterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
//

function filterByLength(strings: string[], n: number): string[] {
  return strings.filter(str => str.length > n);
}


const stringsArray: string[] = ["apple", "banana", "orange", "kiwi", "pineapple"];
const filteredArray: string[] = filterByLength(stringsArray, 5);
console.log(filteredArray); 


//Create a function findDuplicates that finds and logs all duplicates in an array.
//


function findDuplicates<T>(array: T[]): void {
  const duplicates: T[] = [];
  const seen: { [key: string]: boolean } = {};

  array.forEach((item) => {
      if (seen.hasOwnProperty(String(item))) {
          if (!duplicates.includes(item)) {
              duplicates.push(item);
          }
      } else {
          seen[String(item)] = true;
      }
  });

  console.log("Duplicates:", duplicates);
}


const arrayWithDuplicates: number[] = [1, 2, 3, 4, 1, 5, 2, 6, 3];
findDuplicates(arrayWithDuplicates);


//Write a function incrementAll that takes an array of integers and increments each element by one.
//

function incrementAll(array: number[]): number[] {
  return array.map(num => num + 1);
}


const integersArray: number[] = [1, 2, 3, 4, 5];
const incrementedArray: number[] = incrementAll(integersArray);
console.log(incrementedArray); 


// Develop a function countOccurrences that counts how many times a specific element appears in an array.//

function countOccurrences<T>(array: T[], element: T): number {
  return array.reduce((count, current) => {
      return current === element ? count + 1 : count;
  }, 0);
}


const numbersArray1: number[] = [1, 2, 3, 4, 2, 2, 3, 5];
const countOfTwos: number = countOccurrences(numbersArray1, 2);
console.log("Count of twos:", countOfTwos); 



//Create a function isSorted that checks if an array is sorted in ascending order.//

function isSorted<T>(array: T[]): boolean {
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          return false;
      }
  }
  return true;
}


const sortedArray: number[] = [1, 2, 3, 4, 5];
const unsortedArray: number[] = [3, 1, 4, 2, 5];
console.log("Is sorted array sorted?", isSorted(sortedArray)); 
console.log("Is unsorted array sorted?", isSorted(unsortedArray)); 


//Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
//
function formatNames(names: string[]): string {
  if (names.length === 0) {
      return "";
  } else if (names.length === 1) {
      return names[0];
  } else if (names.length === 2) {
      return names.join(" and ");
  } else {
      const lastTwoNames = names.slice(-2).join(" and ");
      const otherNames = names.slice(0, -2).join(", ");
      return `${otherNames}, ${lastTwoNames}`;
  }
}


const namesArray: string[] = ["John", "Jane", "Doe", "Alice"];
console.log(formatNames(namesArray)); 


//Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.//

function convertFahrenheitToCelsius(temperaturesFahrenheit: number[]): void {
  const temperaturesCelsius: number[] = temperaturesFahrenheit.map(tempF => (tempF - 32) * 5 / 9);
  console.log("Temperatures in Celsius:", temperaturesCelsius);
}


const fahrenheitTemperatures: number[] = [32, 68, 86, 104];
convertFahrenheitToCelsius(fahrenheitTemperatures);


//Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
//


function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
  if (numbers.length === 0) {
      throw new Error("Array must not be empty");
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return { min, max, average };
}


const numbersArray: number[] = [1, 2, 3, 4, 5];
const result = minMaxAverage(numbersArray);
console.log(result); 


//Create a function swapElements that swaps two specified indices in an array...
//

function swapElements<T>(array: T[], index1: number, index2: number): void {
  if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
      throw new Error("Indices out of range");
  }

  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


const elementsArray: number[] = [1, 2, 3, 4, 5];
swapElements(elementsArray, 1, 3);
console.log(elementsArray); 


//Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
//



function countCharacterOccurrences(inputString: string, character: string): number {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
      if (inputString.charAt(i) === character) {
          count++;
      }
  }
  return count;
}

const inputString: string = "hello, world";
const characterToCount: string = "o";
const occurrencesCount: number = countCharacterOccurrences(inputString, characterToCount);
console.log(`The character "${characterToCount}" appears ${occurrencesCount} times in the string.`);



//Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
//








interface ToDoItem {
  task: string;
  completed: boolean;
}

const toDoList: ToDoItem[] = [
  { task: "Do laundry", completed: false },
  { task: "Buy groceries", completed: true },
  { task: "Call mom", completed: false },
  { task: "Finish report", completed: false }
];

function logIncompleteTasks(toDoList: ToDoItem[]): void {
  console.log("Incomplete tasks:");
  toDoList.forEach(item => {
      if (!item.completed) {
          console.log(item.task);
      }
  });
}

// Example usage:
logIncompleteTasks(toDoList);



//Write a function that takes an array of integers and sorts them from smallest to largest.//

function sortNumbers(numbers: number[]): number[] {
  return numbers.slice().sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [3, 1, 4, 2, 5];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);
console.log("Sorted numbers:", sortedNumbers);

//Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.


function logArrayInReverse<T>(array: T[]): void {
  for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
  }
}

// Example usage:
const myArray: number[] = [1, 2, 3, 4, 5];
logArrayInReverse(myArray);


// Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
//



function basicCalculator(operand1: number, operand2: number, operator: string): number {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator");
    }
}





/*
for (let table =10;table <=10;table+=10){console.log(table)}


    let table:number=1000
    for(let table10:number=1;table10<11;table10++){console.log(table+ "*"+table10+"="+table*table10)}



    


    //let table$:number=7
    for(let a:number=1;a<=10;a++){console.log(5+"X"+a+"="+5*a)}


    function multiples1(a1:number=10,b1:number=20){console.log(a1*b1)}
    const c2=multiples1()
    console.log(c2)
*/

/*
let table$$=1
for(let i=1;i<=10;i++){console.log(i)
if(i%4==0){console.log("Fizz")}
else if(i%6==0){console.log("Buzz")}}


































let table0:Number=5
for (let i=1;i<=-15;i++){console.log("Table of",table0+" x "+i+"="+table$$*i
)}





let student=921;
if (student>=90 && student<=100){console.log("Student acheived A+ and mark is",student)}
  else if(student>=80 && student<=89){console.log("Student acheived A and mark is",student)}
  else if(student>=70 && student<=79){console.log("Student acheived B and mark is",student)}
  else if(student>=60 && student<=69){console.log("Student acheived C and mark is",student)}
  else if(student>=50 && student<=59){console.log("Student acheived D and mark is",student)}
  else if(student>=33 && student<=49){console.log("Student acheived E and mark is",student)}
  else if(student>=0 && student<33){console.log("Student Failed ",student)}
  else {console.log("Please enter correct number")}


  
  let fruits=["apple","Orange","lemon","banana","Pine apple","melon"]
  console.log(fruits)
  console.log(fruits.length)
  fruits.push("water mellon")
  console.log(fruits)
  console.log(fruits.length)
  fruits.pop()
  console.log(fruits)
  console.log(fruits.length)
  fruits.unshift("kiwi")
  console.log(fruits)
  console.log(fruits[4])
  fruits.shift()
  console.log(fruits)
  fruits.splice(4,1,"grapes")
  console.log(fruits)
  fruits.slice(2)
  console.log(fruits)

  function sub(a=52,b=2){console.log}*/
