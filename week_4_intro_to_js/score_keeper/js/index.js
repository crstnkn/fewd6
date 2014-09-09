var score = 0;

// reset score to zero
function reset() {
	score = 0;
	document.getElementById('result').innerHTML = score;
}

//add 5 to score

function addFive() {
	score += 5;
	document.getElementById('result').innerHTML = score;
}

//add 10 to score

function addTen() {
	score += 10;
	document.getElementById('result').innerHTML = score;
}


//subtract 1 from score
function minusOne() {
	score --;
	document.getElementById('result').innerHTML = score;
}

document.getElementById('zero').onclick = reset;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;