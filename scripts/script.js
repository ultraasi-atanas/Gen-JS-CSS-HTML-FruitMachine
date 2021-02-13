'use strict';

// that line if omitted makes the cmd+z not work
//const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond

// D R Y

const a = "Apple"
const b = "Banana"
const c = "Cherry"
const d = "Diamond"

const appleWin = 2
const bananaWin = 3
const cherryWin = 4
const diamondWin = 5

// get into the habit of typing precisely and getting punctuation
const reel1=[a, b, c, d, a, b, c, d, a, b];
const reel2=Array.from(reel1)
const reel3=Array.from(reel1).sort()

let money = 100;
//flag variables - global and set to false
// p1,p2,p3 - global and initialised with a random value before the loop starts
// conditional statements inside the loop, reading the flag (true/flase) and setting p1,p2,p3 to a new value if false

let holdFlag1 = false; 
let holdFlag2 = false; 
let holdFlag3 = false;

let p1 = getRandomInt(reel1.length);
let p2 = getRandomInt(reel2.length);
let p3 = getRandomInt(reel3.length);

console.log(holdFlag1,holdFlag2,holdFlag3)

// while (money) {}
function spinReels() {
    console.log('You have £' + money )
    prompt('Press enter to spin the wheels')    
    money = money -1 // take one off money

    if (holdFlag1 == false) {p1 = getRandomInt(reel1.length)}; // if its true we do nothing
    if (holdFlag2 == false) {p2 = getRandomInt(reel2.length)};
    if (holdFlag3 == false) {p3 = getRandomInt(reel3.length)};

    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){

        console.log ('You win :o)')
        // determine the nature of the win
        if (reel1[p1]=='Apple'){
            money = money + appleWin
            console.log('£' + appleWin)
        }
        else if (reel1[p1]=='Banana'){
            money = money + bananaWin
            console.log('You win £' + bananaWin)
        }
        else if (reel1[p1]=='Cherry') {
            money = money + cherryWin
            console.log('You win £' + cherryWin)
        }
        else if (reel1[p1]=='Diamond') {
            money = money + diamondWin
            console.log('You win £' + diamondWin)
        }
    }
    let hold = prompt('Do you want to HOLD - enter 1,2 or 3');
    
    if (hold == "1") { holdFlag1 = true}
    else {holdFlag1 = false}
}

function getRandomInt(max) {
    return (Math.floor(Math.random() * Math.floor(max)));
}

function check3TheSame(p1,p2,p3) {

}