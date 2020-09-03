"use strict"


// questions for user remember to console log answers

var identity = 'start';
var ca = 0 
identity = prompt('What is your name?')

alert('Welcome to my site, ' + identity + '!')

// questions to answer(y / n)

function question1(){

var q1 = prompt('Do you I know the muffin man?');


if (q1.toLowerCase() == "yes") {
    alert('Very good, ' + identity);
    ca++
}
if (q1.toLowerCase() == "no") {
    alert(identity + ", he lives on Drury Lane!");
}
}
question1();


function question2(){
var q2 = prompt('Does 10+12=22?')

if (q2.toLowerCase() == "yes") {
    ca++
    alert("That is correct, " + identity);

}

if (q2.toLowerCase() == "no") {
    alert("Are you sure, " + identity + "?");
}
}
question2();

function question3(){
var q3 = prompt("Do i enjoy the sun?");

if (q3.toLowerCase() == "yes") {
    alert("Vitamin D helps the brain function!");
    ca++
}

if (q3.toLowerCase() == "no") {
    alert("They say the moon is made of cheese, " + identity);
}
}
question3();

function question4(){
var q4 = prompt("Can hulk defeat superman in a battle to the death?");

if (q4.toLowerCase() == 'yes') {
    ca++
    alert("You are correct, " + identity);
    ca++
}

if (q4.toLowerCase() == "no") {
    alert('You are incorrect, ' + identity);
}
}
question4();

function question5(){
var q5 = prompt("Did you enjoy the prompts?");

if (q5.toLowerCase() == "yes") {
    alert("You may proceed, " + identity);
    ca++
}

if (q5.toLowerCase() == "no") {
    alert("Wrong answer " + identity + ", try again")
    window.location.reload();
}
}
question5();
// console.log(identity + " |" + q1 + " |" + q2 + " |" + q3 + " |" + q4 + " |" + q5)



//credit https://www.codeproject.com/Questions/1166054/How-to-properly-reload-the-ASP-page-after-js-alert for the q5 "no" troll
function question6(){
var counter = 0;
var q6 = prompt('Guess a number between 1-7');

while (counter <= 4) {
    if (counter == 4) {
        alert('To many attempts, the correct answer is 4.')
        break
    }

    if (q6 == 4) {
        alert("GOOD JOB, that is correct!");
        ca++
        break
    }
    else if (q6 <= 3) {
        counter++
        alert("Answer is to low.");
    }

    else if (q6 >= 5) {
        counter++
        alert("Answer is to high.");
    } else {
        counter++
        alert("Try a number between 1-7, please.");
    }
}
}
question6();

function question7(){
var counter1 = 0;

var userQuestion = prompt('What is the smelliest cheese?');
var cheeseArray = ['epoisse de bourgogne', 'stinking bishop', 'rouque fort']
loop1: while (counter1 < 6) {


    for (var i = 0; i < cheeseArray.length; i++) {
        if (userQuestion == cheeseArray[i]) {
            alert('Very Good.')
            ca++
            break loop1;
        }
        else {
            alert("Guess again, please.")
            break
        }

    }
    counter1++
    console.log('counter 1', counter1)
}
alert('Your options were: rouque fort, ' + 'stinking bishop, ' + 'espoisee de bourgogne.');
}
question7();

alert('You have answered, ' + ca + ' questions correctly. Good Job!')