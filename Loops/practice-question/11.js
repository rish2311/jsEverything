// Skip Multiples of 3 

for(let i = 1; i < 21; i++){
  if(i % 3 === 0) continue;
  console.log(i);
}



// Print first 5 odd numbers:
// 1 3 5 7 9

let count = 0;
for(let i = 1; i < 101; i++) {
  if(i % 2 === 1) {
    count++;
    console.log(i);
  }

  if(count === 5) break;
}

