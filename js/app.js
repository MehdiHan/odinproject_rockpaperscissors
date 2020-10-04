const game = (rounds) => {
  // game possibility choices
  const choices = ['rock', 'paper', 'scissors'];
  let playerScore = 0;
  let computerScore = 0;
  let result = '';
  let message = '';
  // iteration for each round
  for (let i = 0; i < rounds; i++) {
    // random choice for the player
    let playerSelection = prompt(
      'Rock,Paper or Scissors ? Make your choice'
    ).toLowerCase();

    // random choice for the computer
    const computerChoice = () => {
      const index = Math.floor(Math.random() * Math.floor(choices.length));
      return choices[index];
    };
    let computerSelection = computerChoice();

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
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    result = `You Win
    You : ${playerScore} - CPU : ${computerScore}`;
  } else if (playerScore < computerScore) {
    result = `You Lose
    You : ${playerScore} - CPU : ${computerScore}`;
  } else {
    result = `Both GG !! Tie Game`;
  }
  return result;
};

console.log(game(5));
