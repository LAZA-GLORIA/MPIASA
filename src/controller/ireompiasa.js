const datasource = require("../db");
const Mpiasa = require("../entity/Mpiasa");

module.exports = {
  create: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("The name should have a length between 1 and 100 characters");
    }

    try {
      const created = await datasource.getRepository(Mpiasa).save(req.body);
      res.status(201).send(created);
    } catch (error) {
      console.error(error);
      res.send("error while creating mpiasa !");
    }

    // datasource
    //   .getRepository(Mpiasa)
    //   .save(req.body)
    //   .then((created) => {
    //     res.status(201).send(created);
    //   })
    //   .catch(() => {
    //     res.send("error while creating mpiasa !");
    //   });
  },
  read: async (req, res) => {
    try {
      // const mpiasajiaby = await datasource.getRepository(Mpiasa).find();
      const mpiasajiaby = await datasource
        .getRepository(Mpiasa)
        .query("SELECT * FROM mpiasa");
      res.send(mpiasajiaby);
    } catch (error) {
      console.error(error);
      res.send("error while reading mpiasa jiaby!");
    }
    // datasource
    //   .getRepository(Mpiasa)
    //   .find()
    //   .then((mpiasajiaby) => {
    //     res.send(mpiasajiaby);
    //   })
    //   .catch(() => {
    //     res.send("error while reading mpiasa jiaby!");
    //   });
  },
  update: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("The name should have a length between 1 and 100 characters");
    }
    try {
      const { affected } = await datasource
        .getRepository(Mpiasa)
        .update(req.params.id, req.body);

      if (affected) return res.send("Mpiasa updated");
      res.sendStatus(404);
    } catch (error) {
      console.error(error);
      res.send("error while updtaing mpiasa!");
    }
    // datasource
    //   .getRepository(Mpiasa)
    //   .update(req.params.id, req.body)
    //   .then(({ affected }) => {
    //     if (affected) {
    //       res.send("Mpiasa updated");
    //     } else {
    //       res.sendStatus(404);
    //     }
    //   })
    //   .catch(() => {
    //     res.send("error while updtaing mpiasa!");
    //   });
  },
  delete: async (req, res) => {
    try {
      const { affected } = await datasource
        .getRepository(Mpiasa)
        .delete(req.params.id);

      if (affected) return res.send("Mpiasa deleted");
      res.sendStatus(404);
    } catch (error) {
      console.error(error);
      res.send("error while deleting mpiasa!");
    }
    // datasource
    //   .getRepository(Mpiasa)
    //   .delete(req.params.id)
    //   .then(({ affected }) => {
    //     if (affected) {
    //       res.send("Mpiasa deleted");
    //     } else {
    //       res.sendStatus(404);
    //     }
    //   })
    //   .catch(() => {
    //     res.send("error while deleting mpiasa!");
    //   });
  },
};
