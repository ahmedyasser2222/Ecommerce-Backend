const mongoose = require("mongoose");

const connectDatabase = () => {
  //rocess.env.DATABASE
  mongoose
    .connect("mongodb://localhost:27017/project2", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
