// Stop at first mutiple of 7.

//  Write a loop 1 to 100, and it stops at first multiple of 7 

for(let i = 1; i < 101; i++){
  console.log(i);

  if(i % 7 === 0) {
    break;
  }
}