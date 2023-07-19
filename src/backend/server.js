const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT } = require("./configs/server.config");
const { DB_URL } = require("./configs/db.config");
const bookRouter = require("./routes/book.route");

const app = express();

//request middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//MongoDB Connection
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware using url
app.use("/api/v1/books", bookRouter);

// server listening
app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
