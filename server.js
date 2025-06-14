const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/index.js"));

app.listen(3000, () => {
  process.stdout.write("\x1Bc");
  console.log("Server is running on http://localhost:3000");
});
