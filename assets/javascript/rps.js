var userScore = 0;
var compScore = 0;

var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");

var scrore = document.querySelector(".score");

var result = document.querySelector(".result > p");

var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");

function computer() {
    var choice = ["r", "p", "s"];
    var random = Math.floor(Math.random() * 3);
    return choice[random];
}
// console.log((computer));

function converttoWord(letter) {
    if (letter === "r")
        return "Rock";
    if (letter === "p")
        return "Paper";
    return "Scissors";
}

function win(user, compchoice) {
    userScore++;
    // console.log("Win!");
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    // console.log(use);
    // console.log(comp);
    var smalluser = "user".fontsize(3).sub();
    var smallcomp = "comp".fontsize(3).sub();
    result.innerHTML = converttoWord(user) + smalluser + " beats " + converttoWord(compchoice) + smallcomp + " . You Win!!";
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("green-glow")
    },600);
}

function lose(user, compchoice) {
    // console.log("Loose!");
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    var smalluser = "user".fontsize(3).sub();
    var smallcomp = "comp".fontsize(3).sub();
    result.innerHTML = converttoWord(user) + smalluser + " looses to " + converttoWord(compchoice) + smallcomp + " . You Lost!!";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("red-glow")
    },600);
}
function tie(user, compchoice) {
    // console.log("Tie!");
    var smalluser = "user".fontsize(3).sub();
    var smallcomp = "comp".fontsize(3).sub();
    result.innerHTML = converttoWord(user) + smalluser + " equals " + converttoWord(compchoice) + smallcomp + " . Its a Tie!!";
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("grey-glow")
    },600);
}

function game(user) {
    // console.log(" yaya " + user);
    var compchoice = computer();
    // console.log("user choice => " + user)
    // console.log("computer choice => " + compchoice);
    if ((user === "r") && (compchoice === "s")) {
        // console.log("User Wins!");
        win(user, compchoice);
    } else if ((user === "r") && (compchoice === "p")) {
        // console.log("User Looses!");
        lose(user, compchoice);
    } else if ((user === "s") && (compchoice === "r")) {
        // console.log("User Looses!");
        lose(user, compchoice);
    } else if ((user === "s") && (compchoice === "p")) {
        // console.log("User Wins!");
        win(user, compchoice);
    } else if ((user === "p") && (compchoice === "r")) {
        // console.log("User Wins!");
        win(user, compchoice);
    } else if ((user === "p") && (compchoice === "s")) {
        // console.log("User Looses!");
        lose(user, compchoice);
    } else if (user === compchoice) {
        // console.log("Its a Tie");
        tie(user, compchoice);
    } else { console.log('hello') }

}



function main() {
    r.addEventListener("click", function () {
        // alert("you clicked rock");
        game("r");
    })
    p.addEventListener("click", function () {
        // alert("you clicked paper");
        game("p");
    })
    s.addEventListener("click", function () {
        // alert("you clicked sccisor");
        game("s");
    })
};
main();