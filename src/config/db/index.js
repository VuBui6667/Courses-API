const mongoose = require("mongoose");

function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://vubui:loner123@cluster0.hetwbml.mongodb.net/Quizlet",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect success");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
