const buttons = document.querySelectorAll('[data-value]');
const resultsContainer = document.getElementById('resultsContainer');

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let choices = ['rock', 'paper', 'scissors'];
  const div = document.createElement('div');

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
    return `You : ${playerScore} - CPU : ${computerScore}
   ${message}`;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
      div.innerHTML = '';
      let playerSelection = event.target.dataset.value;
      let computerSelection = computerChoice();

      div.innerHTML = playRound(playerSelection, computerSelection);

      resultsContainer.appendChild(div);
    });
  });
};

game();
