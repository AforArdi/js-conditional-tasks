// Grade calculator
let score = Number(prompt("What's your score? "));

if (score > 100 || score < 0){
    console.log("Score must be between 0 to 100")
}
else{
    let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' :
            'F';

    console.log(grade);
}