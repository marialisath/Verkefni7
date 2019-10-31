/**
 * Verkefni 7 – Gisk leikur
 *
 */

const games = [];

function start() {
  let isPlaying = true;
  while (isPlaying) {
    let guess = play();
    games.push(guess);
    isPlaying = confirm("Viltu spila annan leik?");
  }
  alert(getResults());
}

function play() {
  const random = randomNumber(1, 100);
  let guess = 1;
  let result = prompt("Giskaðu á tölu sem er á milli 0 og 100");
  while (result != random) {
    alert(getResponse(parseGuess(result), random));
    result = prompt("Giskaðu á tölu sem er á milli 0 og 100");
    guess++;
  }
  alert(getResponse(result, random));
  return guess;
}

function getResults() {
  if (!games) {
    return "Þú spilaðir engann leik >_<";
  } else {
    let average2 = calculateAverage();
    let totalGames = games.length;

    return (
      "Þú spilaðir " +
      totalGames +
      " leiki\nMeðalfjöldi ágiskana var " +
      average2
    );
  }
}

function calculateAverage() {
  let totalGuesses = 0;
  for (let i = 0; i < games.length; i++) {
    totalGuesses += games[i];
  }
  let average = totalGuesses / games.length;
  return average.toFixed(2);
}

function parseGuess(input) {
  const n = Number(input);
  if (isNaN(n)) {
    return null;
  } else {
    return n;
  }
}

function getResponse(guess, correct) {
  const diff = Math.abs(guess - correct);

  if (guess == null || guess < 0) {
    return "Ekki rétt";
  } else {
    if (diff == 0) {
      return "Rétt";
    } else if (diff < 5) {
      return "Mjög nálægt";
    } else if (diff < 10) {
      return "Nálægt";
    } else if (diff < 20) {
      return "Frekar langt frá";
    } else if (diff < 50) {
      return "Langt frá";
    } else {
      return "Mjög langt frá";
    }
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();
