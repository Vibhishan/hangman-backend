const express = require("express");
const Router = require('./routes')
const app = express();

const PORT = 3000;

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

// we need to use express.json() to parse the body of the request
app.use(express.json());
app.use("/api", Router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
