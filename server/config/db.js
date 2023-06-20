const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to mongodb database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`mongodb error ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
