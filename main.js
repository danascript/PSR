function paperScissorsRock(userChoice) {
    var choicesSelected = false;
    var computerChoice;
    var winner;
    var count = 0;

    //make all the human's options greyed out
    document.getElementById('rock').style.opacity = 0.1;
    document.getElementById('paper').style.opacity = 0.1;
    document.getElementById('scissors').style.opacity = 0.1;

    //turn human's selection back to full colour
    document.getElementById(userChoice.toLowerCase()).style.opacity = 1.0;


    var makeChoices = function () {
        count++;
        computerChoice = Math.random();
        if (computerChoice <= 0.33) {
            computerChoice = "ROCK";
        } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
            computerChoice = "PAPER";
        } else if (computerChoice > 0.66) {
            computerChoice = "SCISSORS";
        }

        //make all the computer's options greyed out
        document.getElementById('computer-rock').style.opacity = 0.1;
        document.getElementById('computer-paper').style.opacity = 0.1;
        document.getElementById('computer-scissors').style.opacity = 0.1;

        //turn computer's selection back to full colour
        document.getElementById('computer-' + computerChoice.toLowerCase()).style.opacity = 1.0;
        if (count < 10) {
            setTimeout(makeChoices, 200);
        } else {
            if (doChoicesMatch(userChoice, computerChoice)) {
                //alert("The result is a tie, you'll have to try again.")
                document.getElementById('result').innerHTML = "The result is a tie, you'll have to try again.";
            } else {
                choicesSelected = true;
                winner = compare(userChoice, computerChoice);
                //alert("The computer chose: " + computerChoice + ".\nYou chose: " + userChoice + ".\n" + winner);
                document.getElementById('result').innerHTML = "The computer chose: " + computerChoice + ".\nYou chose: " + userChoice + ".\n" + winner;

            }
        }
    }
    var doChoicesMatch = function (choice1, choice2) {
        if (choice1 === choice2) {
            return true;
        } else {
            return false;
        }
    }
    var compare = function (choice1, choice2) {


        if (choice1 === "ROCK") {
            if (choice2 === "PAPER") {
                return "Paper Wins!";
            } else if (choice2 === "SCISSORS") {
                return "Rock Wins!";
            }
        }
        if (choice1 === "PAPER") {
            if (choice2 === "ROCK") {
                return "Rock Wins!";
            } else if (choice2 === "SCISSORS") {
                return "Scissors Wins!";
            }
        }
        if (choice1 === "SCISSORS") {
            if (choice2 === "ROCK") {
                return "Rock Wins!";
            } else if (choice2 === "PAPER") {
                return "Scissors Wins!";
            }
        }

    };
    //   while (!choicesSelected) {
    makeChoices();

    //  }

}
