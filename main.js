const cards = document.querySelectorAll(".card");
const result = document.querySelector(".result");
const cardRock = document.querySelector("#card-rock");
const cardPaper = document.querySelector("#card-paper");
const cardScissors = document.querySelector("#card-scissors");
const enemyCard = document.querySelector(".enemy-card");
const randomNumber = Math.floor(Math.random() * 3);
const options = ["ROCK", "PAPER", "SCISSORS"];
var choosedEnemyCard;

cards.forEach((e) => {
    e.addEventListener("click", () => {
        chooseCard(e);
    })
});

function chooseCard(e) {
    let choosedCard = "";
    switch (e.id) {
        case "card-rock":
            cardPaper.style.backgroundColor = "var(--gray)";
            cardScissors.style.backgroundColor = "var(--gray)";
            chooseEnemyCard();
            choosedCard = "ROCK";
            theGame(choosedCard, choosedEnemyCard);
            break;
        case "card-paper":
            cardRock.style.backgroundColor = "var(--gray)";
            cardScissors.style.backgroundColor = "var(--gray)";
            chooseEnemyCard();
            choosedCard = "PAPER";
            theGame(choosedCard, choosedEnemyCard);
            break;
        case "card-scissors":
            cardRock.style.backgroundColor = "var(--gray)";
            cardPaper.style.backgroundColor = "var(--gray)";
            chooseEnemyCard();
            choosedCard = "SCISSORS";
            theGame(choosedCard, choosedEnemyCard);
            break;
    }
}

function chooseEnemyCard() {
    choosedEnemyCard = options[randomNumber];
    if (choosedEnemyCard == "ROCK") {
        enemyCard.style.backgroundColor = "var(--primary-color)";
    } else if (choosedEnemyCard == "PAPER") {
        enemyCard.style.backgroundColor = "var(--secondary-color)";
    } else {
        enemyCard.style.backgroundColor = "var(--third-color)";
    }
    enemyCard.innerHTML = choosedEnemyCard;
}

function theGame(playerCard, enemyCard) {
    console.log(playerCard);
    console.log(enemyCard);
    if (playerCard == "ROCK" && enemyCard == "ROCK" || playerCard == "PAPER" && enemyCard == "PAPER" || playerCard == "SCISSORS" && enemyCard == "SCISSORS") {
        result.innerHTML = "EMPATE";
    } else if (playerCard == "ROCK" && enemyCard == "SCISSORS" || playerCard == "PAPER" && enemyCard == "ROCK" || playerCard == "SCISSORS" && enemyCard == "PAPER") {
        result.innerHTML = "VOCÊ VENCEU";
    } else {
        result.innerHTML = "VOCÊ PERDEU";
    }
}