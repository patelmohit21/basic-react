import React from "react";

export default function Eleven() {
  let quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The best way to predict your future is to create it.",
    "You miss 100% of the shots you don't take.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Believe you can and you're halfway there.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The only way to do great work is to love what you do.",
    "It does not matter how slowly you go as long as you do not stop.",
  ];

  let randomIndex = Math.floor(Math.random()*quotes.length)
  let quote = quotes[randomIndex]
  return (<div>
    {quote}
  </div>
  );
}
