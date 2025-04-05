async function markGameCompleted(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const wordSet = new Set([...actualWord]);
  const playedLetters = gameSession.playedLetters.split("");
  const playedSet = new Set([...playedLetters]);

  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });

  const lives = 6 - wrongLetters.length;

  const isWon = [...wordSet].reduce((acc, letter) => {
    return acc && playedSet.has(letter);
  }, true);

  if (lives == 0 || isWon) {
    gameSession.finishedAt = new Date();
    await gameSession.save();
  }
}

async function playWordInGameSession(gameSession, letter) {
  const playedLetters = gameSession.playedLetters.split("");
  const playedSet = new Set([...playedLetters]);

  if (playedSet.has(letter)) {
    return;
  }

  playedLetters.push(letter);
  gameSession.playedLetters = playedLetters.join("");
  await gameSession.save();
  await markGameCompleted(gameSession);
}

export { playWordInGameSession };
