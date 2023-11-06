function game_winner(inputString) {
    let countA = 0;
    let countD = 0;
    for (const char of inputString) {
        if (char === 'A') {
            countA++;
        } else if (char === 'D') {
            countD++;
        }
    }

    if (countA > countD) {
        return "Aditya wins";
    } else if (countD > countA) {
        return "Danish wins";
    } else {
        return "Draw";
    }
}

const N = "ADDAAADDDDD";
const N1 = "ADDAAADD";
console.log(game_winner(N));
console.log(game_winner(N1));
