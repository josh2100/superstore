const express = require('express');
const routes = require('./routes');
// import sequelize connection instance
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Turn on connection to db
const connectDb = async () => {

  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
  } catch (error) {
    console.log("error starting server");
  }
}

connectDb();

