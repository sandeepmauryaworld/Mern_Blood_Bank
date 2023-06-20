const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

// dot env
dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} Mode on ${process.env.PORT}`
      .bgBlue.white
  );
});
