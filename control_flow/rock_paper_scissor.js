// Logic for Rock-paper-scissor

function rps(user, computer) {
  if(user === "rock" && computer === "scissor") return "user";
  if(user === "scissor" && computer === "rock") return "computer";
  if(user === "paper" && computer === "rock") return "user";
  if(user === "rock" && computer === "paper") return "computer";
}

rps("rock", "scissor");


// For Better code practises
function rps(user, computer) {
  if(user === computer) return "draw";

  //Conditions when user wins
  if(user === "rock" && computer ==="scissor") return "user";
  if(user === "scissor" && computer ==="paper") return "user";
  if(user === "paper" && computer ==="rock") return "user";

  // Baaki saare conditions mein computer jeetega
  return "computer";
}

rps("rock", "scissor"); // (user, computer) order of value.