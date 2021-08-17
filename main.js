// takes in 2 numbers n produces the mod

    const num1 = window.prompt('enter 1st number');
    const num2 = window.prompt('enter 2nd number');
    const ans = num1 % num2;
    alert(ans);


// program for a simple calculator

// const number1 = parseFloat(prompt('Enter first number:'));
// const number2 = parseFloat(prompt('Enter second number:'));
// const operator = prompt("choose operator\n a for addition\n b for subtraction\n c for multiplication\n d for division")

// if (operator == 'a') {
//     answer = number1 + number2;
// }
// else if (operator == 'b') {
//     answer = number1 - number2;
// }
// else if (operator == 'c') {
//     answer = number1 * number2;
// }
// else if (operator == 'd') {
//     answer = number1 / number2;
// }
// else {
//     'enter any of the letters above'
// }
// alert(answer)

// program to show sasha after 5 counts

// let i;
// for (i =0; i <= 20; i++) {
//     alert(i);

//     if (i >= 5 && i % 5 == 0) {
//         alert('Sasha');
//     }
// }

// program for a basic login

// const name = prompt('Enter user name');
// const password = prompt('Enter user password');

// if (name == 'Darlene' && password == 'password' ){
//     alert('you have been logged into the system ');
// }
// else {
//     alert('check user name and password');
// }

// takes in 2 numbers n produces the mod

    // const num1 = window.prompt('enter 1st number');
    // const num2 = window.prompt('enter 2nd number');
    // const ans = num1 % num2;
    // alert(ans);


// program for a simple calculator

// const number1 = parseFloat(prompt('Enter first number:'));
// const number2 = parseFloat(prompt('Enter second number:'));
// const operator = prompt("choose operator\n a for addition\n b for subtraction\n c for multiplication\n d for division")

// if (operator == 'a') {
//     answer = number1 + number2;
// }
// else if (operator == 'b') {
//     answer = number1 - number2;
// }
// else if (operator == 'c') {
//     answer = number1 * number2;
// }
// else if (operator == 'd') {
//     answer = number1 / number2;
// }
// else {
//     'enter any of the letters above'
// }
// alert(answer)

// program to show sasha after 5 counts

// let i;
// for (i =0; i <= 20; i++) {
//     alert(i);

//     if (i >= 5 && i % 5 == 0) {
//         alert('Sasha');
//     }
// }

// program for a basic login

// const name = prompt('Enter user name');
// const password = prompt('Enter user password');

// if (name == 'Darlene' && password == 'password' ){
//     alert('you have been logged into the system ');
// }
// else {
//     alert('check user name and password');
// }

// today saturday 14/08/2021

// calculate the mean exercise 2

// const math = 80;
// const science = 67;
// const arabic = 65;
// const studies = 88;
// const english = 56;

// let course = [math, science, arabic, studies, english];

// const marks = [math + science + arabic + studies + english];
// let mean;
// mean = marks / course.length;
// let grade;
// grade = mean;

// if (mean >= 80){
//     grade = "A";
// }
// else if(mean >= 75){
//     grade = "B";
// }
// else if(mean >= 65){
//     grade = "C";
// }
// else if(mean >= 55){
//     grade = "D";
// }
// else{
//     grade = "F";
// }

// document.querySelector('h1').innerHTML = "The mean is " + mean
// document.querySelector('h2').innerHTML = "Your Grade is " + grade;



// change inch to centimeter exercise 3

// let inches = prompt('enter number in inches');
// let centimeter;
// centimeter = inches * 2.54;

// document.querySelector('h1').innerHTML = inches + " " + "inch" + " " + "=" + centimeter + " " + "centimeters";


// a triangle with sides a, b, c exercise 12rea of a

// let a = parseFloat(prompt("enter the angle of the first side of the triangle"));
// let b = parseFloat(prompt("enter the angle of the second side of the triangle"));
// let c = parseFloat(prompt("enter the angle of the third side of the triangle"));
// let sum;
// sum = a + b + c;
// let area;
// area = sum / 2;
// document.querySelector('h1').innerHTML = "The area of the triangle is" + " " + area;


// area and volume of a sphere exercise 5

// const radius = parseFloat(prompt("Enter radius"));
// let area = radius**2 * Math.PI * 4;

// let volume;
// volume = radius ** 3 * Math.PI * 4 / 3;

// document.querySelector('h1').innerHTML = "Area =" + " " + area + "<br>" + "volume=" + " " + volume;


// area and volume of a cylinder exercise 6

// const radius = parseFloat(prompt("Enter radius"));
// const height = parseFloat(prompt("Enter height"));
// let area = radius**2 * Math.PI * height;

// let sum;
// sum = radius + height;
// let volume;
// volume = 2 * Math.PI * radius * sum;
// document.querySelector('h1').innerHTML = "Area =" + " " + area + "<br>" + "volume=" + " " + volume;


// exercise 4 the factorial of a number

// iterative method
// const n = parseInt(prompt("Enter a positive interger: "));
// function factorial(n){
//     let answer = 1;
//        if (n == 0 || n == 1) {
//         return answer;
//     }
   
//     else {
//         for (let i = n; i >= 1; i--){
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// answer = factorial(n);
// document.querySelector('h1').innerHTML = "The factorial of" + " " + n + " " + "is" + " " + answer;

// recursive method 
// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }
// let n = 12;
// answer = factorial(n);
// document.querySelector('h1').innerHTML = "The factorial of" + " " + n + " " + "is" + " " + answer;


// counts the number of negative and positive numbers in a series of numbers entered exercise 9

// const a = parseInt(prompt("Enter a number: "));
// const b = parseInt(prompt("Enter a number: "));
// const x = parseInt(prompt("Enter a number: "));
// const y = parseInt(prompt("Enter a number: "));
// const z = parseInt(prompt("Enter a number: "));

// let posCount = 0;
// let negCount = 0;

// if (x >= 0){
//     posCount++;
// }
// else{
//     negCount++;
// }
// if (y >= 0){
//     posCount++;
// }
// else{
//     negCount++;
// }
// if (z >= 0){
//     posCount++;
// }
// else {
//     negCount++;
// }
// if (a >= 0){
//     posCount++;
// }
// else {
//     negCount++;
// }
// if (b >= 0){
//     posCount++;
// }
// else {
//     negCount++;
// }

// document.querySelector('h1').innerHTML = "Positive numbers: " + posCount;
// document.querySelector('h2').innerHTML = "Negative numbers: " + negCount;



