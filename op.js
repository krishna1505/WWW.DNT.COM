// console.log("krishna");
// name = "krishna"
 //console.log(name);
//  age = 20;
 //price = 20
//  console.log(age);
//  console.log(typeof`age`);
 //console.log(price);
// x = null;// pta toh hai per khali value hai
// console.log(x);
// x = undefined;// pta nhi kya hai isme
// console.log(x);
// isFollow = false;
// console.log(isFollow);
//isUnfollow = true;
//console.log(isUnfollow);

// const coolege = {

//     FullName: "krishna",
//     age: 20,
//     branch: "IT",
//     isPass : true,
    

// };
// console.log(coolege);

//  coolege ["age"] = coolege ["age"] + 80;
//  console.log(coolege["age"]);

// const instagram = {
//     userName : "krishna ",
//     post: 20,
//     followers : "1B",
//     folowing : 0,
//     about: "coder ",
// }
// console.log(instagram);

// const Facebook ={
//     UserName : "krishna",
//     age : 20,
//     About : "coding ",
//     AddFrinds : false,
//     Location : "renukoot",
//     Education : "B. tech 2nd Year",
//     CollegeName : "IET AYODHYA"

// };
// console.log(Facebook);

// FOR CHECKING OUR OBJECT TYPE WE WILL SEARCH ON TYPEOF(OBJECT NAME);
// `typeof age`; it is also check the typr of object 

// chapter 2?

// let a = 5;
// let b = 4;
// console.log("a + b  = ", a + b );
// console.log("a - b  = ", a - b );
// console.log("a * b  = ", a * b );
// console.log("a / b  = ", a / b );
// console.log("a ** b  = ", a ** b );
// console.log("a % b  = ", a % b );
// console.log(typeof `a,b`);
// let c = 4;
// let d = 5;
// console.log("C + D = " , c + d);

// unary oprator a++ ++a .,, a-- , --a;
// a++ post icrement ,
// ++a  pre icrement,

//  let age = 26;
//  let result = age>= 18 ? "adult " : "not adult";
//   console.log(result);// simple way for if else      

//  let name = prompt("welcome sir");
//  console.log(name);
// ITS SAVE NAME WHO ENTER THE USER IN CONSOLE

// let age = 30;
// let result = age>= 18 ? "adult" : "not adult";
// console.log(result);

// exersice question 

// let num = prompt("enter a any number");
// if(num % 3 === 0 ){
//     console.log(num , "is a multipal of 3" );
// }else {
//     console.log(num , "is NOT a multipal of 3" );
// }

// let num = prompt("Enter any number :");
// if (num % 2 == 0) {
//     console.log(`${num} is even number.`);
//     } else {
//         console.log(`${num} is odd number.`);
//         }

// chapter 3 loop

// for loop

// for(let count = 1; count <= 10; count++){
// console.log("krishna king");
// }
// for(let i = 1; i<= 10; i++){
//     console.log(i,"MR  krishna king ", "mohan" );
// }


// calculate the sum of 1 to 5

//  let sum = 0;
// let n = 100;
// for(let i = 1; i<= n; i++){
//  sum = sum + i;
// }
// console.log("sum = ", sum);
//  let sum = 0;
//  let n = 10;
//  for(let i = 1; i<= n; i++){
//   sum += i;

//  }
//  console.log("sum = ", sum);


// DIFFRENTE WAY FOR WRITING A SUM = SUM + I;
// sum++;
// sum = 1+ sum;
// sum += 1;


// for(let i = 1; i <= 10; i++){
//     console.log(i ," king ");
// }

//while loop 

// let i = 1;
// while( i <= 10){
//     console.log("i = ", i);
//     i++;
// }

// do-while loop

// let i = 1;
// do {
//     console.log(" i = ", i);
//     i++;
// }while( i <= 10);

//  for of loop
// let fruits = ['apple', 'banana', 'cherry'];

// for (let fruit of fruits) {
//  console.log(fruit);
//  console.log(typeof `fruit`);
// }
// let boys = ['krishna', 'mohan', 'yadav', 'chhotu'];
// for(let boy of boys){
//     console.log(boy);
// }

// FOR IN LOOP user for object

// let sstudent = {
//     name : "krishna moahn yadav",
//     age: 19,
//     isPass : true,
//     result: "pass",
// };
// for(let key in sstudent){
//     console.log("key=", key, "value =", sstudent[key]);
// }
// code for print all even number in javascript
// for (let num = 0; num <= 100; num++){
//     if (num % 2 === 0){
//         console.log("num = ", num);
//     }
// }


//guess number game


// let gameNum = 25;
// let userNum = prompt(" Guess the game number ");
// while(userNum !=  gameNum){
// userNum = prompt("you entred a wrong numer, try again");
// }
// console.log("congratulation , you entered a right number ");
   

// let gameNum = 12;
// let userNum = prompt("Enter any number : ");
// while(userNum != gameNum){
//     userNum = prompt("you enter wron number again try : ")
//     }
//     console.log("congratutalion , you enter right number ");


 // string start here 


//   let str = "krishna mohan yadav";
//   console.log(str);
//   console.log(str.length)
//   console.log(str[2]);

// template literals 
// let specialString = `this is a new ways to write a string`;
// console.log(specialString);


// let obj = {
//     item : "pen",
//     price: 10,

// }
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");


// let FullName = prompt("enter your name without any space ");
// let userName = "@"+ FullName+ FullName.length;
// console.log(userName);


// chapter 4 aarrays

// array was a object 

// ARRAY WAS CHANGE IN PROGRAM
// BUT STRING ARE NOT CHANGE
// FOR LOOP IN ARRAYS 


// let hero = ["krishna", "mohan " , "yadav"];
// for (let idx = 0; idx< hero.length; idx++){
//     console.log(hero[idx]);
// }


// let heroes = ["krishna", "yadav", "mohan", "radha"];
// //FOR OF LOOP IN ARRAYS
// for(let hero of heroes ){
//     console.log(hero);
// }

// GIVEN A ARRAY WITH MARKS OF STUDENT -> [85, 97, 44, 37, 76, 60]
//FIND THE AVERAGE MARKS OF THE ENTIRE CLASS

// let marks = [85, 97, 88 , 69, 86];
// let sum = 0;
// for(let val of marks){
//  sum += val;   
// }

// let avg = sum / marks.length;
// console.log(`avg marks of tha class = ${avg}`);

// FOR A GIVER ARRAY WITH PRICES OF 5 ITREMS -> [250, 645, 300, 900, 50]
//ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM . CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLYING OFFERS
//      CHAPTER 5
    
// function myFunction (){
//     console.log("welcome to the krishna world");
//     console.log("we learning js");
// }
// myFunction();

// function myFunction(msg){       parameter
//     console.log(msg);
// }
// myFunction("i love siya"); argument 
// NaN means not a number 

// SUM OF TWO NUMBER USING FUNCTIONS 

// function sum (x,y){
//     console.log(x + y);
// }

// function sum (x  , y){
//     s = x + y;
//     return s;
// }
// let val = sum( 3, 5);
// console.log(val);

// return karne ke baad hmm kuch bhi likhe woh exicute nhi hoga 

// function ke parametter == local variable its have block of code in function


// aarow function

// const arrowSum = (a , b) => {
//     console.log( a + b );
// }

// const arrowMulti = (a, b) => {
//     console.log(a * b );
// return a * b;
// }

// const printHello = () => {
//     console.log("hey krishna");
// }

// CREATE A FUNCTION USING THE FUNCTION KEYWORD THAT TAKES A STRING AS AN ARGUMENTS & RETURNS THE NUMBER OF VOWELS IN THE STRING 

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }

//     }
//     console.log(count);
// }
// return count++;

// CRAETE A ARROW FUNCTION TO PERFORM THE SAME TASK

// const countVow = (str) => {
//     let count = 0;
//         for(const char of str){
//              if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u"){
//                 count++;
//             }
    
//         }
//         console.log(count);
//     }
   

// for each loop in array

// let arr = [ 1, 3,4 , 4, 5, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// let arr = ["delhi", "lucknow", "uk"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });


// let arr = ["delhi", "lucknow", "uk"];
// arr.forEach((val , idx, arr) => {
//     console.log(val.toUpperCase(), idx , arr);
// });

    //for each only use in array not in string

    // for each is a higher oder method are higher order paranetter hai 

    // FOR A GIVE ARRAY OF THE NUMBER PRINT THE SQUARE OF EACH VALUS USING THE FOREACH LOOP

    // let nums = [ 1, 3, 4, 6, 8,9 ];
    // nums.forEach((num) => {
    //     console.log(num * num );// num**2
    // });


    // other methods 

    // let nums = [ 66, 77, 88,99];
    // let calSquare = (num) => {
    //     console.log(num * num);
    // };
    // nums.forEach(calSquare);


    // MAP OR FOR EACH ARE LITTELE SAME BUT MAP ALWAYS RETUNR NEW VALUE

    // let nums = [77, 88, 66, 77];
    // let newArr = nums.map((val) =>{
    //     return val * 2;
    // });


    // filter method

    // let arr = [ 1, 4 ,5 ,6,7, 7,];
    // let evenArr = arr.filter((val) =>{
    //     return val % 2=== 0;

    // });
    // console.log(evenArr);

    // reduce  use only if we have so many input value but we want only one output

//   let arr = [2, 4, 5, 8];
//   const output = arr.reduce((prev , curr) => {
//     ///return prev > curr ? prev : curr;
//     return prev + curr ;
//   });
//   console.log(output);


// chapter 6 DOM
//
// console.dir(document .body);
// console.log(document.body);

//question 1

//  let h2 = document.querySelector("h2");
//   console.dir(h2 . innerText);
//   h2.innerText = h2.innerText + " FROM ";

// question 2

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// const student = {
//     fullName : "krishna mohan yadav",
//     marks : 98.5,
//     printMarks: function (){
//         console.log("marks =" ,this. marks);// this is new keyword
//     },
// };

// const employee = {
//     calcTax () {
//         console.log("the tax rate is 10%");
//     },
// };

// const krishna = {
//     salary : 50000,
//     calcTax ()
//     {
// console.log("the tax rate is 20%");
//     },
// };

// krishna.__proto__ = employee;


// class ToyotaCar {
//     constructor(brand , mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start (){
//         console.log("start");
//     }

//     stop (){
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brandName = brand;
//     // }
// }
// let fortuner = new ToyotaCar("fortuner" , 10);
// //fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar ("lexus" , 15);
// //lexus.setBrand("lexus");

// class parent {
//     hello() {
// console.log("hello");
//     }
// }
// class Child extends parent{}
// let obj = new Child();


// class person {
//     constructor(human){
//         console.log("enter parent conductor")
//         this.human = "human";
//     }
//     est (){
//         console.log("eat");
//     }

//     // sleep(){
//     //     console.log("sleep");
//     // }
// }

// class Engineer extends person {
//     constructor(branch){
//         console.log("enter child conductor");
//         super();
//         this.branch = branch;
//         console.log("exit child conductor")
//     }
//     work(){
//         console.log("solveproblem, build something");
//     }
// }
// let krishnaobj = new Engineer("information technology");

// class person {
//     constructor(name){
       
//         this.human = "human";
//         this.name = name;
//     }
//     eat (){
//         console.log("eat");
//     }

   
// }

// class Engineer extends person {
//     constructor(name){
       
//         super(name);
       
//     }
//     work(){
//         super.eat();
//         console.log("solveproblem, build something");
//     }
// }
// let Engineerobj = new Engineer("krishna mohan yadav");

// qs

// ERROR HANDLING

// ADVANCE PARTS OF JAVASCRIPT

// ASYNCHRONOUS PROGRAMING
// 1ts 
// function helllo (){
//     console.log("helllo");
// }
// setTimeout(helllo, 3000);

// //2nd 
// setTimeout(() => {
//     console.log("hello");
// }, 4000);


// ASYNCHRONOUS PROGRAMING

// console.log("one");
// console.log("thre");
// console.log("two");
// console.log("four");
// setTimeout(() => {
//     console.log("five");
// }, 2000);


// CALL BACK

// function sum(a,b){
//     console.log(a + b);
// }
// function calculator(a , b ,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1, 99, sum); its true
// calculator(1, 99, sum()); its not true its trough Nan

// nesting

// let age = 99;
// if(age>= 18){
//     if(age>= 60){
//         console.log("senior")
//     }
//     else{
//         console.log("middle"); 
// }
// }else{
//     console.log("child");

// }

// nested loop in for loop

// for(let i = 0; i <= 5; i++){
//     let str = " ";
//     for(let j = 0; j<= 5; j++){
//         str = str + j;
//     }
//     console.log(i , str);
// }

// data checking 

// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }



//          CALL BACKHELL

//  function getData(dataId, getNextData){
//      setTimeout(() => {
//          console.log("data", dataId);
//          if(getNextData){
//              getNextData();
//          }
//      }, 2000);
//  }
// 
//  getData(1, () => {
//     console.log("getting data2 ...");
//     getData(2, ()=> {
//     console.log("getting data3 ...");
//         getData(3);
//     });
// });

// getData(1, () => {

//     getData(2, ()=> {
//         getData(3);
//     });
// its called CALLBACK HELLL
// });

//      PROMISE 

// let promise = new Promise((resolve, reject) =>{
//     console.log("i am a coder");
//     // resolve("krishna");
//     //reject("some error");
// });


// function getData(dataId , getNextData){
//     return  new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }


// function getData(dataId , getNextData){
//     return  new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             //console.log("data", dataId);
//           //  resolve("success");
//           reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }


//       PROMISE CHANING


// function asyncFunc (){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 5000);
//     });
// }

// console.log("fatching data1 ..");
// let p1 = asyncFunc();
// p1.then((res) =>{
//     console.log(res);
// });




// function asyncFunc1 (){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 5000);
//     });
// }


// function asyncFunc2 (){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 5000);
//     });
// }
// 1 st method 
// console.log("fatching data1 ..");
// let p1 = asyncFunc();
// p1.then((res) =>{
    
// console.log("fatching data2 ..");
// let p2 = asyncFunc();
//     Path2D.then((res) => {

//     });
// });

//  2ND method CHANING

// console.log("fatching data1 ..");
// asyncFunc1().then((res) => {
//     console.log("fatching data2 ..");
//     asyncFunc2().then((res) => {

//     });
// });


//               ASYNC - AWAIT  FUNCTION

// function api (){
//     return new Promise ((resolve ,reject )=> {
//         setTimeout(() => {
//             console.log("weatherdata");
//             resolve(200);
//         }, 2000);
// });
// }

// async function getWeatherData(){
//     await api();
//     await api ();
// }

//  ASYNC AWAIT SE CALLBACK PROBLEM SOLVE


// function getData(dataId , getNextData){
//     return  new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
            
//             }
//          )} , 5000);
//     }
//     async function getAllData(){
//         console.log("fatching a data1 ");
//         await getData(1);
//         console.log("fatching a data3 ");
//       await getData(3);
//         console.log("fatching a data2 ");  
//         await getData(2);
        
//         console.log("fatching a data4 ");  
//         await getData(4);
//         await getData(5);
//     }


//      API LAST CHAPTER


