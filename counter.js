// Closures example

function counter() {
  let count = 0;
  return function(){
    count++;
    return count;
  };
}

let c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
console.log(c()); // 4

// same var c use ho rha, isliye values ko hold kr pa rha, har bar count 0 se start hi ho rha, tabhi count++ print, 1, 2, 3, 4 mil rha hai humein 

// agar new var d use kare to firse 0 se start hoga