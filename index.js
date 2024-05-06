const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const bookRouter = require("./routes/book.router");

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world",
  });
});

app.use("/api/v1/books", bookRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
