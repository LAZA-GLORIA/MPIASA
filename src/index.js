const express = require("express");
const ireompiasaConstroller = require("./controller/ireompiasa");

const datasource = require("./db");

const app = express();

app.use(express.json());

app.post("/mpiasa", ireompiasaConstroller.create);
app.get("/mpiasajiaby", ireompiasaConstroller.read);
app.patch("/mpiasa/:id", ireompiasaConstroller.update);
app.delete("/mpiasa/:id", ireompiasaConstroller.delete);

const start = async () => {
  await datasource.initialize();

  app.listen(3000, (err) => {
    console.log(`Server is listening on 3000`);
  });
};

start();
