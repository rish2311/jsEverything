// Repeat karne ko loop kehte hain
// Most used loops -> for, while, forEach (used in Array)



// Kaha se -> Kaha Tak -> Kaise Jaana Hai  (For Loop)
1 - 50
// 1 - 50 (bas ye pta hai rukna kab hai) 
// Jab pata hai 1 se 40 tak jana hai to (for loop)



// Kaha Se Jana Hai -> Kab Rukna Hai -> Kaise jaana hai
// (while loop) 

// Tb tk chalna jb tak "hello" na aa jaye - (While loop)
// While means jab tak condition true na ho jaye, tb tk chalna hai.


// for loop 
for(start; end; change){

}

// (1 - 100) 
for (let i = 1; i < 101; i++){
   // Jb jb condition true hoga value print hota rahega. 100 times condition true means 100 times value print hoga.

  // console.log("hello");      
  // 100 times hello print hojayega.
}




// while loop
start 
while(end) {
  //code
  change
}

let i = 1;
while(i < 32) {
  console.log(i);
  i++;
}
// This will print 1 to 31.



// Do while loop
let p = 12;
do{
  console.log(p);
  p++;
}
while(p < 20);

// Agar while(i < 2), while condition galat bhi likh denge to bhi do 1 bar zaroor chalega.



// break -> break the loop in between when a condition is satisfied.

for(let i = 1; i < 201; i++) {
  console.log(i);
  if(i === 32) {
    break; // yahi loop rok do, 32 tk print hoga
  }
}


// continue
for(let i = 1; i < 201; i++) {
  console.log(i);
  if(i === 32) {
    continue;
  }
  console.log(i); // 32 print nahi hoga bs, 200 tk print honge values
}
