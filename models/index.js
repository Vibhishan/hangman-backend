const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

class GameSession extends Model {}
GameSession.init(
  {
    playerName: DataTypes.STRING,
    playedLetters: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "game_sessions" }
);

class Word extends Model {}
Word.init(
  {
    title: DataTypes.STRING,
  },
  { sequelize, modelName: "words" }
);

// Associations
GameSession.Word = GameSession.belongsTo(Word);

module.exports = {
  sequelize,
  GameSession,
  Word,
};
