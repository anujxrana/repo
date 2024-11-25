// Element Selectors
const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const rulesButton = document.getElementById('rulesButton');
const closeRulesButton = document.getElementById('closeRulesButton');
const rulesContent = document.getElementById('rulesContent');

// Create a celebration container
const celebrationContainer = document.createElement('div');
celebrationContainer.classList.add('celebration-container');
document.body.appendChild(celebrationContainer);

// Variables
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

// Update UI with stored scores
playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

// Functions
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'tie';
  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissor' && computerChoice === 'Paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function triggerCelebration() {
  // Clear existing celebration effects
  celebrationContainer.innerHTML = '';

  // Add Confetti
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti');
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    celebrationContainer.appendChild(confettiPiece);
  }

  // Add Firework Bursts
  for (let i = 0; i < 3; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 80 + 10}%`;
    firework.style.top = `${Math.random() * 40 + 20}%`;
    celebrationContainer.appendChild(firework);
  }

  // Remove effects after 4 seconds
  setTimeout(() => {
    celebrationContainer.innerHTML = '';
  }, 4000);
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
    localStorage.setItem('playerScore', playerScore);
    playerScoreEl.textContent = playerScore;
    resultText.textContent = 'You win!';
    triggerCelebration(); // Trigger celebration animation
  } else if (winner === 'computer') {
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
    computerScoreEl.textContent = computerScore;
    resultText.textContent = 'Computer wins!';
  } else {
    resultText.textContent = "It's a tie!";
  }
}

// Event Listeners
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
  });
});

rulesButton.addEventListener('click', () => {
  rulesContent.classList.remove('hidden');
});

closeRulesButton.addEventListener('click', () => {
  rulesContent.classList.add('hidden');
});
function triggerCelebration() {
  const celebrationContainer = document.createElement('div');
  celebrationContainer.classList.add('celebration-container');
  document.body.appendChild(celebrationContainer);

  // Create glowing circle effect
  const glowingCircle = document.createElement('div');
  glowingCircle.classList.add('glowing-circle');
  celebrationContainer.appendChild(glowingCircle);

  // Create particle explosion
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('celebration-particle');
    particle.style.left = `${50 + Math.random() * 30 - 15}%`; // Spread particles near center
    particle.style.top = `${50 + Math.random() * 30 - 15}%`;
    particle.style.animationDelay = `${Math.random()}s`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    celebrationContainer.appendChild(particle);
  }

  // Remove celebration elements after animation
  setTimeout(() => {
    celebrationContainer.remove();
  }, 4000);
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
    localStorage.setItem('playerScore', playerScore);
    playerScoreEl.textContent = playerScore;
    resultText.textContent = 'You win!';
    triggerCelebration(); // Trigger celebration animation
  } else if (winner === 'computer') {
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
    computerScoreEl.textContent = computerScore;
    resultText.textContent = 'Computer wins!';
  } else {
    resultText.textContent = "It's a tie!";
  }
}
