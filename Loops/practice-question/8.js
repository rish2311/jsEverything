// Ask a number from user and print whether each number from 1 to that number is even or odd 


//prompt se user input leta hai
let val = prompt("Give a number");

for(let i = 1; i <= val; i++){
  if(i % 2 === 0) {
    console.log(`${i} is even`);
  } else{
    console.log(`${i} is odd`);
  }
}