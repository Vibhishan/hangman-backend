async function serializeGameSession(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters.split("");

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);

  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });

  const lives = 6 - wrongLetters.length;

  const maskedWord = [...actualWord].map((letter) => {
    if (playedSet.has(letter)) return letter;
    return "_";
  });

  return {
    id: gameSession.id,
    livesLeft: lives,
    result: !!gameSession.finishedAt,
    maskedWord: maskedWord,
  };
}

module.exports = {
  serializeGameSession,
};
