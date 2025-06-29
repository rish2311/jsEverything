// Primitive and Reference only 2 Data Types ---

const { type } = require("os");

// Primitive - Copy krne par real value milega
// Exmple: String, Number, Boolean, Null, undefined, symbol

let a = 12;
b = a; 
// b = 12;  (apna apna value hai)
// a ka 12 me change bs a mein hoga, b mein nahi.


// Reference - Copy krne pr parents ka reference milega.
// Example: ARRAYS [], OBJECTS {}, Functions ()

// Values me bracket dikhe - Vo reference hai
let c = [1, 2, 3];
let d = c; 
// Brackets wale data types mein, copy krne par, meri value aaj se tumhari value bhi hai. B me change, a mein bhi hoga.

// So we use (spread operator) to copy the Reference types.

// null means jan bujh kar koi value nahi diya.

// Null explicitly likha jata hai, agar null nhi likhenge to undefined aa jayega uska value(by default).

// Null dete hain, undefined JS se milta hai.

// Read more about Symbol data type:
// symbol: Unique immutable value 


// Number.MAX_SAFE_INTEGER -> Sbse bada value jo var thik se hold kar payega

// Here we use big int:
let h = 90690695059405960n; // last me add n, to make it bigInt.

// Isme jo bhi calculate karnega us value k aage bhi n laga k calculation hoga.


// Reference type---------------- (Brackets wale):

a = b;
// b ko change karne par a bhi change hoga


// Js has dynamic typing means we can change the values data type.
// explicity koi data type nhi likhte hain js mein.


// Type Checking:
typeof 12 // number
typeof null // Object

NaN === NaN  // False

// Read about Quirks in JavaScript.

// Type Coercion : Ek type automatically convert ho jayega.
"5" + 1  //(add or concatenate)
// Ouput is '51'    (1 is made string)

// Ek bhi operand string hoga to concatenate, never add.(In Addition).


// When it comes to subtraction there is tricky:
"5" - 1  
// Output is 4


// Truthy and Falsy Value

// Falsy values are: 
// 0 false "" null undefined NaN document.

// Apart from them all will be convert to true. 

// to check truthy or falsy:
// !!""
// !!undefined      (!! double exclamatory symbol laga kr check.)


// Undefined machine se default milta hai, Null value manually assing hota hai