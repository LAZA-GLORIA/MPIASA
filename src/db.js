const typeorm = require("typeorm");
const Mpiasa = require("./entity/Mpiasa");

module.exports = new typeorm.DataSource({
  type: "sqlite",
  database: "./mpiasanbdb.sqlite",
  synchronize: true,
  entities: [Mpiasa],
});
