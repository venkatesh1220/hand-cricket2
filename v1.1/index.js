var sc = 0;
var score = document.getElementById("score-num");

var choice1;
var choice2;
var x;
var mychoice = document.getElementById("mychoice");
var compchoice = document.getElementById("compchoice");

// console.log(score);

function choice(x) {
    mychoice.innerHTML = x;
    var y = Math.ceil((Math.random() * 10) % 6);
    compchoice.innerHTML = y;

    if (x == y) {
        alert("You are out");
        sc = 0;
    } else {
        sc += x;
        score.innerHTML = sc;

    }
}