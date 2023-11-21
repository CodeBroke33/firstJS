//  result = (age) ? trueValue : falseValue

// let result = (age => 18) ? 'Adult' : 'Minor' ;

// ===Revision===

// Create an array that contains 6 Elements but the first, 2 elements must be a number?
// NB: Make sure the element at possition 4 in a lowercase

let data = [2, 5, 'Nikita', 'Shawn', 'Candice', 'Matthew']

// // Create two ob

// let person1 = {
//     firstName: 'thimna'
// }

// let person2 = {
//     firstName: 'Veronique'
// }

// // Create an array

// let personDetails = []
// personDetails.push(person1)
// personDetails.push(person2)
// console.log(personDetails);
// console.log(person1);
// console.log(person2);

// // if and else statement example

// let = firstName = 'Zubair'
// if(firstName) {
//     console.log("Present");
// }
// else {
//     console.log("Absent")
// }

// // more advanced use of if or else Statements

// let firstName = 'Razeen'
// let state = 'late'
// if(state == 'present') {
//     console.log("present");
// }else if(state =)
// {
//     console.log("late")
// }else (state) {
//     console.log("absent")
// }

// // An Example of switch

// let firstName = 'Razeen'
// let state = 'late'
// switch (false) {
//     case state == 'present':
//         console.log("present");
//     break;
//     case state != '':
//         console.log("late");
//     case state != "":
//         console.log("late -> Final warning");
//     break;
//     default:
//         console.log("absent")
//         break;         
// }

// //  Alternative to Math Method

let numbers = [9, 4, 2, 5, 10] 

// function highestNumber(args) {
//     for(let number of args){
//         if(args[i] > args[i+1]) {
//             highest = args[i]
//         }
//         console.log(number);
//     }
// }
// highestNumber(numbers)

// Math Method
// the highest number
console.log(Math.max(...numbers));
// the lowest number
console.log(Math.min(...number))