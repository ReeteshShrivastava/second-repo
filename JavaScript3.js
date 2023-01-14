//Code 1: Declare and print 3 students names using variables
// var name1 = "Ram";
// var name2 = "Shyam";
// var name3 = "Mohan";
// console.log(name1);
// console.log(name2);
// console.log(name3);

//Code 2: Declare and Print 3 students names using an array
// var names = ["Ram","Shyam","Tony"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

//Code 4: Find the length of the names array.
//console.log(names.length);

// Code 5: Perform the following tasks :
// 1. Create an array price.
// 2. Store the prices of 3 products in the array
// 3. Print the price of the last product.
// var price = [23,10,18];
// console.log(price[price.length-1]);

/*
How to add elements in an array?
push() function helps to insert the elements in an array.
push() always inserts at the last.
*/

//Code 6: Insert 3 movie names in the array and print .
// var movies = []; //Declare array
// movies.push("Krish");
// movies.push("Dhoom");
// movies.push("Spiderman");
// console.log(movies[0]);
// console.log(movies[1]);
// console.log(movies[2]);

// Code 7: Perform the following tasks :
// 1. Create an array superheroes
// 2. push 3 superheroes in the array
// 3. Print the array
// var superheroes = []; //Inatialise array
// superheroes.push("BatMan");
// superheroes.push("SpiderMan");
// superheroes.push("IronMan");
// console.log(superheroes);
//How to update the array?
//Suppose I want to change the first index value.
// superheroes[0] = "Thor";
// console.log(superheroes);

//Code 8: print all the elements of the array using a loop.
// var superheroes = []; //Inatialise array
// superheroes.push("BatMan");
// superheroes.push("SpiderMan");
// superheroes.push("IronMan");
// Using For Loop
// for (var i=0; i<superheroes.length; i++) {
//     console.log(superheroes[i]);
// }

// Code 9: Perform the following tasks :
// 1. Create an array of movies and actors
// 2. Print all the movies names with actors
// var movies = [];
// var actors = [];
// movies.push("Dilwale");
// movies.push("Fridy");
// movies.push("ShamShera");
// actors.push("Sharukh Khan");
// actors.push("Kartik Aryan");
// actors.push("Ranveer kapoor");
// for (var i=0;i<movies.length;i++) {
//     console.log(movies[i]+" - "+actors[i]);
// }

// How to remove elements from an array?
// To remove elements, we have a pop() function
// pop() function that will remove elements from the last.

// Code 10: pop the last 2 elements from an array
// var heros = [];
// heros.push("Govinda");
// heros.push("Mithun");
// heros.push("Salmaan");
// heros.push("RajKumar");
// console.log(heros);
// heros.pop();
// heros.pop();
// console.log(heros);

// Code 11: Perform the following tasks :
// 1. Create an array of 6 numbers
// 2. print the numbers array
// 3. delete last 3 numbers from that array
// 4. print the numbers array
//First Way
// var numbers = [];
// numbers.push(11);
// numbers.push(22);
// numbers.push(33);
// numbers.push(44);
// numbers.push(55);
// numbers.push(66);
// console.log(numbers);
// numbers.pop();
// numbers.pop();
// numbers.pop();
// console.log(numbers);
//Second Way
// var numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers);
// for(var i=1;i<=3;i++){
//     numbers.pop();
// }
// console.log(numbers);

//Code 12: Print the first 3 items in the array using a loop.
//var instructures = ["Amit","Shaf","Aryan","Ankur","Sumit"];
//First Way Using Loop
// for(var i=0;i<3;i++){
//     console.log(instructures[i]);
// }
//Second Way Using Break Statement
// for(var i=0;i<instructures.length;i++) {
//     console.log(instructures[i]);
//     if(i==2){
//         break;
//     }
// }

//Code 12: Print all movies except the third movie.
// var movies = ["Captain America","Thor","Galaxy","Hulk","Dr.Strange","Life Beyond Earth","Pessanger"];
// for(var i=0;i<movies.length;i++) {
//     if(i==2){
//         continue;
//     }
//     console.log(movies[i]);
// }

//Code 13: Print all movies except the third and fifth movies.
// var movies = ["Captain America","Thor","Galaxy","Hulk","Dr.Strange","Life Beyond Earth","Pessanger"];
// for (var i = 0; i < movies.length; i++) {
//     if (i == 2  || i == 4) {
//         continue;
//     }
//     console.log(movies[i]);
// }

//Code 14 : Print the last 3 items of an products array
// var product = ["Shampoo","Soap","Hair Oil","Cream","Loation","Body Colour"];
// var thirdLastIndex = 0;
// if (product.length > 3) {
//     thirdLastIndex = product.length-3;
// } 
// for (var i = thirdLastIndex; i < product.length; i++) {
//     console.log(product[i]);
// }

//Code 15 : For Even Array, print the second half of the array
// var num = [2,4,5,6,7,7,8,8];
// var start = num.length/2;
// for (var i = start; i < num.length; i++) {
//     console.log(num[i]);
// }

//Code 19 : Find the sum of all subject marks and average also.
// var marks = [35,37,38,23,46,12,48];
// var totalMarks = 0;
// for (var i = 0; i < marks.length; i++) {
//     totalMarks = totalMarks + marks[i];
// }
// var averageMarks = totalMarks/marks.length;
// console.log("Total Marks Obtained = "+totalMarks);
// console.log("Average Marks Obtained = "+averageMarks);

//Code 20 : Given marks, find the maximum marks
// var marks = [35,37,38,23,46,12,48];
// var maxMarks = marks[0];
// for(var i=1;i<marks.length;i++){
//     if(maxMarks<marks[i]){
//         maxMarks = marks[i];
//     }
// }
// console.log(maxMarks);

/*
Strings

1)The string is a group of characters
2)It can include a-z, A-z, 0-9, and also all special characters like #,@,$, etc
3)Each character has an index, Starting from 0 to the length of the string.

Need of Strings

1)Lots of information we stored, it actually stored as a string
2)For Example, The name of the product, Pincode, and mobile number also, Since we
will not perform any mathematical operation on mobile numbers that's why we
considered it as a string.
*/

//How to declare a String?
//String s = "Masai School"
//There is a total of 12 characters in this string.

//Code 1: Declare a string variable and print it using loop.
// var name = "Reetesh";
// console.log(name);

//Code 2: Find the length of the String.
// var name = "ReeteshShrivastava";
// console.log(name.length);

//Real-world use of String
//Code 3: Find whether the user enters the valid length password of at least 6 character.
// var password = "eotys";
// if(password.length>=6){
//     console.log("This is a Valid Password");
// }else{
//     console.log("This is not a Valid Pssword");
// }

//Code 5: Run loop on the string and add each character to the third variable and print that variable.
// var name = "Sonu";
// var copyName = "";
// for (var i = 0; i < name.length; i++) {
//     copyName=copyName+name[i];
// }
// console.log(copyName);

//Strings are immutable Once the string is declared and initialized, it cannot be updated later.
//Code 7: Update Character in String
// var name = "Masai";
// name[0] = "N";
// console.log(name); // Masai

//Code 8: Update Character in array
var name = ["M","a","s","a","i"];
name[0] = "N";
console.log(name);