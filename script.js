// Array of random facts about Yuvraj Singh Rathore
const facts = [
    "Yuvraj Singh Rathore is pursuing B.Tech CSE with AI specialization from Mandsaur University.",
    "As a CSE-AI student, Yuvraj is passionate about combining artificial intelligence with practical applications.",
    "Yuvraj is developing his skills in both computer science fundamentals and cutting-edge AI technologies.",
    "At Mandsaur University, Yuvraj is working towards becoming a skilled AI engineer.",
    "Yuvraj believes in the power of AI to transform the future of technology.",
    "As a B.Tech student, Yuvraj is exploring various aspects of computer science and artificial intelligence."
];

// DOM elements
const factDisplay = document.getElementById('fact-display');
const factButton = document.getElementById('fact-button');
const progressBar = document.getElementById('progress');

// Track number of facts shown
let factsShown = 0;

// Function to get random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Function to update progress bar
function updateProgress() {
    factsShown++;
    const progress = (factsShown / 10) * 100; // Complete after 10 facts
    progressBar.style.width = `${Math.min(progress, 100)}%`;
}

// Event listener for button click
factButton.addEventListener('click', () => {
    factDisplay.textContent = getRandomFact();
    updateProgress();
    
    // Add animation class
    factDisplay.classList.add('fade');
    setTimeout(() => {
        factDisplay.classList.remove('fade');
    }, 500);
});

// Initial fact
factDisplay.textContent = getRandomFact();
