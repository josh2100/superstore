const express = require('express');
const routes = require('./routes');
// import sequelize connection instance
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
/// Starter code above

//Turn on connection to db
const connectDb = async () => {

  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
  } catch (error) {
    console.log("error starting server");
  }
}

connectDb();

// turn on connection to db and server
// force: true allows drop if exists functionality to sequelize
// leave force on false for better performance
// .then syntax
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });

