const emojis = [
  "🤗",
  "🥶",
  "😨",
  "🥳",
  "😭",
  "👿",
  "😈",
  "👌",
  "🔥",
  "🤑",
  "😇",
  "🌌",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function handleSum() {
  var buttonEmoji = document.getElementsByClassName("button-emoji")[0];

  const randomEmoji = emojis[getRandomInt(0, emojis.length)];
  buttonEmoji.innerHTML = randomEmoji;
}

setTimeout(handleSum(), 1000);
