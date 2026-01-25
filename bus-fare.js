// bus fare calculator
const age = 30;
const isStudent = false;
const price = 800;

let busFare = age <= 10 ? 'Free' : isStudent ? price * 0.5 : age >= 60 ? price * .85 : price;
console.log(busFare);