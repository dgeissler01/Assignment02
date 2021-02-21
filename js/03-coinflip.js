let coinFlip = Math.round(Math.random()) + 1;
console.log(coinFlip);
let choice = window.prompt("Please choose heads or tails.");

if (coinFlip === 1) {
    let results = "heads";
    if (results === "heads" && choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
}   else if (coinFlip === 2) {
    let results = "tails";
    if (results === "tails" && choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    }   else {
        alert("The flip was tails but you chose heads...you lose!");
    }
}