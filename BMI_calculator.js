function bmi(weight, height){
  return weight / (height * height);
}

console.log(bmi(64, 1.7));
console.log(bmi(64, 1.7).toFixed(2));

// bmi.toFixed(2) function me decimal k bad wali value remove kr skte hain