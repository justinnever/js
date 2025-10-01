const quotes = [
  "Discipline is the bridge between goals and achievement.",
  "Success begins with self-discipline.",
  "Motivation gets you started, discipline keeps you going.",
  "The secret of your future is hidden in your daily routine.",
  "Small disciplines repeated daily lead to great achievements over time.",
  "Discipline is choosing between what you want now and what you want most.",
  "Without discipline, even the best motivation fades away.",
  "Motivation is temporary, but discipline lasts forever.",
  "Discipline is doing what needs to be done, even when you don’t feel like it.",
  "Consistency is harder when no one is watching—that’s discipline.",
  "Discipline is the silent power behind every success story.",
  "Dreams need goals, and goals need discipline.",
  "The pain of discipline is less than the pain of regret.",
  "Discipline is the foundation on which motivation grows.",
  "Stay disciplined long enough, and motivation will find you.",
  "Self-discipline is self-respect in action.",
  "Life rewards those who stay consistent and disciplined.",
  "Discipline is the art of mastering yourself.",
  "Motivation is good, but discipline is better.",
  "Great lives are built one disciplined choice at a time."
]
const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    const randomIdx=Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;

}