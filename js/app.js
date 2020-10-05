const buttons = document.querySelectorAll('[data-value]');
const resultsContainer = document.getElementById('resultsContainer');
const div = document.createElement('div');
const p = document.createElement('p');
const playerScoreboard = document.getElementById('playerScoreboard');
const computerScoreboard = document.getElementById('computerScoreboard');

const game = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  let result = '';
  let choices = ['rock', 'paper', 'scissors'];

  const computerChoice = () => {
    const index = Math.floor(Math.random() * Math.floor(choices.length));
    return choices[index];
  };

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      message = `${playerSelection} against ${computerSelection} ! We have a Tie Game`;
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore += 1;
      message = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore += 1;
      message = `You Lose ! ${computerSelection} beats ${playerSelection}`;
    }
    return `${message}`;
  };

  const displayResult = (result) => {
    p.innerHTML = result;
    resultsContainer.appendChild(p);
  };

  displayRound = (round) => {
    div.innerHTML = round;
    resultsContainer.appendChild(div);
  };

  const endGame = (rounds) => {
    if (round === rounds) {
      p.innerHTML = '';
      if (playerScore > computerScore) {
        result = `You Win this Game`;
      } else if (playerScore < computerScore) {
        result = `You Lose this Game`;
      } else {
        result = `Both GG !! Tie Game`;
      }
    }

    playerScoreboard.innerText = playerScore;
    computerScoreboard.innerText = computerScore;

    console.log(playerScore, computerScore, result, round);

    displayResult(result);
  };

  buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
      if (round < rounds) {
        round++;
      } else {
        round = 0;
        playerScore = 0;
        computerScore = 0;
        result = '';
      }
      let playerSelection = event.target.dataset.value;
      let computerSelection = computerChoice();

      displayRound(playRound(playerSelection, computerSelection));
      endGame(rounds);
      console.log(round, rounds);
    });
  });
};

game(5);
