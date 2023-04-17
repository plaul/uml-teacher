const umlJokes = [
  "UML is absolutely invaluable. I mean, who doesn't love spending hours upon hours creating complex diagrams that no one else will ever look at or understand? It's like a puzzle that only you get to solve, while everyone else is left scratching their heads and wondering why you're wasting your time. But hey, at least you can feel really important and knowledgeable while doing it, right?",
  "You know what they say: UML diagrams are worth a thousand words. Unfortunately, most of those words are 'what the heck am I looking at?'",
  "UML is the perfect tool for when you want to communicate your ideas in the most convoluted and confusing way possible.",
  "Why bother using plain English to explain your software design when you can just create a bunch of UML diagrams that no one will ever bother to decipher?",
  "UML is like a secret code that only a select few people in the tech industry have bothered to learn. Congrats, you're now part of the elite club of UML enthusiasts! Too bad no one else cares.",
  "UML is like a game of telephone, but instead of whispering messages to each other, you're drawing incomprehensible boxes and arrows that get progressively more confusing with each iteration. Good luck trying to understand what the final diagram actually means!",
  "They say a picture is worth a thousand words, but when it comes to UML diagrams, that picture is more like a thousand question marks.",
  "UML is the perfect way to make your code look more impressive than it actually is. Just add a bunch of fancy diagrams, and no one will notice that your actual code is a mess.",
  "UML is like a foreign language that only software developers speak. So if you ever need to communicate your ideas to a non-tech person, just show them a UML diagram and watch as their eyes glaze over.",
  "UML is like a choose-your-own-adventure book, except instead of choosing your own path, you're trying to decipher which path the software is taking based on a bunch of cryptic symbols and arrows. Good luck!"
];

export function getRandomUMLJoke() {
  const index = Math.floor(Math.random() * umlJokes.length);
  return umlJokes[index];
}

