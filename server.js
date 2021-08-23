const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

