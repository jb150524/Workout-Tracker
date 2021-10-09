const mongoose = required('mongoose');
const logger = require("morgan");
const express = require('express');

const PORT = process.env.PORT || 3000;


const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// routes //
app.use(require('./routes/api.js'));
app.use(require('./routes/views.js'));


// PORT to listen Database //
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });