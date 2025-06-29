// Word vs Keyword:
// Keywords have some special meaning in a language.

// Variable is kind of container.
// var = ES5 (function scoped)
// let (es6) - Block scoped 
// const - es6

var a = 12;
// starting me declare hogya to entire program me ye value accessible rhega.


var a = 10;
//redeclare hoga bich me to rewrite hogya var ka value.


var a; // var declared. Undefined value.
var a = 15; // var is initialized(first val dena) here.

// var apna value *window* me add krta hai 

// This mean jab bhi window me value hoga, that mean vo value var se create hua hai

// Var is function scoped. Can be redeclared.

// Avoid using var, kyunki kuch galat direction me jayenge to var kbhi batayega nahi.

// let and const helps us to get error early.
let a = 10;
let a = 20;

// Error: a is already been declared.

const dulha = "Lab";
const dulhan = "labby";

// This will give error.
// const dulhan = "pinki"; 

// window is an Object in JS. 

// Function scope var declaration
function abcd() {
  if(true){
    var a = 12;
  }
}
// JS me var entire fucntion scope me use ho skta hai. Jo ki baaki languages me nahi hota hai.


// global scope variable declaration (kahi bhi use)
var a = 12;


// Block scope variable declaration looks like:

{
  // yahan koi bhi var hoga
}
// But the fun fact is var pure code me use hoga kyunki, var is function scoped, aur yahan koi function bana hi nahi hai

// Always use let and const.

// let hamesha braces {} k andar use hota hai 
function abcd() {
  if(true) {
    let a = 12;
  }
}
// fucntion k andar let use ho skta hai.
// if k andar let use ho skta hai.
// let hamesha apne parent braces me use ho skta hai. {}


// Global Scope - Pure code me access
// Fucntion scope - Function k andar access
// BLOCK SCOPED - curly braces k andar

// Reassigned (value update):
var a = 12;
a = 15;

let b = 12;
b = 15;


// Redeclaration (variable name bhi likha):
var a = 32;
var a = 23; // Possible with var

let b = 14;
let b = 20; // Redeclaration will throw error for let


// Temporal dead zone (LET & CONST) only:

console.log(a); // Undefined

var a = 12;   // Var me nahi hota hai TDZ.....



console.log(v); 
// Can't access before decalaration.(Isko pta hai ki value hai) This is TDZ. 
let v = 15;

// TDZ: vo area jitne me js ko pta hai ki var exist krta hai par wo value nhi de skta.


// Hoisting: (var, let , const) teeno me hota hai
// var gives Undefined, Let and const gives refer. error 

// var a = 12 breaks in two parts:------

//  1. var declare        var a = undefined;
//  2. var initialize     a = 12;

// Var declaration se intitalization tak TDZ hota hai.


// Var function ka respect krta aur fucntion k abahar use nhi ho skta hai, let curly braces ka respect krta hai {}.

// Object.freeze ?

