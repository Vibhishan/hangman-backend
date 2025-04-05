const { Word, GameSession, sequelize } = require("../../models");
const { serializeGameSession } = require("../../serializers/gameSession");
const { playWordInGameSession } = require("../../services/gameSessionService");

async function CreateSession(req, res) {
  const name = req.body.name;
  const word = await Word.findOne({
    order: [sequelize.random()],
  });
  const gameSession = await GameSession.create({
    playerName: name,
    playedLetters: "",
    wordId: word.id,
    startedAt: new Date(),
    finishedAt: null,
  });

  res.status(200).json(await serializeGameSession(gameSession));
}

async function PlaySession(req, res) {
  const id = req.params.id;
  const letter = req.body.letter;
  const gameSession = await GameSession.findByPk(id);

  await playWordInGameSession(gameSession, letter);

  res.status(200).json(await serializeGameSession(gameSession));
}

module.exports = {
  CreateSession,
  PlaySession,
};
