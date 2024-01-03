const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

require("./config/dbConnect");

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
