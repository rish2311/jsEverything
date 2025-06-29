// if   else    else-if

// switch case

// early return pattern

if(12 > 17) {
  // True hoga to if ka code chalega
} else {
  // False hoga to else ka case chalega
}


// Another example:

if(loggedIn && admin) {

} else if(loggedIn) {
// Else if k kitne bhi block bana skte
} 
else{

}


// Switch case
switch(val) {
  case 1:
    break; 
    // break har case k baad lagana kyunki aage ka code na chal jaye
  case 2:
    break;
  case 3:
    console.log("heyeush");
    break;

  default:
}

function getVal(val) {
  if(val < 25) return "D";
  else if(val < 50) return "C";
  else if(val < 75) return "B";
  else return "A";
}

getVal(69);  // OUTPUT WILL BE B.


// Example 2:

function getGrade(score) {
  if(score >= 90 && score <= 100) {
    return "A";
  }
  else if(score >= 70 && score <= 79) {
    return "B";
  }
  
  // This is also correct way of writing (early return pattern).
  else if(score >= 60 && score <= 69) return "C";
  else if(score >= 33 && score <= 59) return "D";
  else {
    return "Invalid Marks";
  }
}

getGrade(78); // Ouput will be C