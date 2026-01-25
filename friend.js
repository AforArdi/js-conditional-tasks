// nested if else task
const myScore = 87;
const friendScore = 40;

if (myScore >= 80){
    if (friendScore >= 80){
        console.log("Let's go for a lunch");
    }
    else if (friendScore < 80 && friendScore >= 60){
        console.log("goodluck next time");
    }
    else if (friendScore < 60 && friendScore >= 40){
        console.log("friend's message unseen");
    }
    else if (friendScore < 40){
        console.log("friend blocked");
    }
}
else{
    console.log("go home, sleep and act sad");
}