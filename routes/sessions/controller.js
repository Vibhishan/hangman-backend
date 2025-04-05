function CreateSession(req, res) {
    console.log(req.headers);
  const name = req.body.name;

  // TODO: We will do something with the name

  // create json object of session
  const response = {
    id: "123",
    livesLeft: 6,
    result: false,
    maskedWord: ["_", "_", "_", "_", "_"],
  };

  res.status(200).json(response);
}

function PlaySession(req, res) {
  const id = req.params.id;
  const letter = req.body.letter;

  // TODO: We will do something with the letter

  const response = {
    id: "123",
    livesLeft: 5,
    result: false,
    maskedWord: ["_", "_", "_", "_", "_"],
  };

  res.status(200).json(response);
}

module.exports = {
  CreateSession,
  PlaySession,
};
