const database = require("../database");

const getResto = (req, res) => {
  database
    .query("select * from resto")
    .then(([restos]) => {
      res.json(restos);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getRestoById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("select * from resto where id = ?", [id])
    .then(([restos]) => {
      if (restos[0] != null) {
        res.json(restos[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postResto = (req, res) => {
  const { country, name, adress, number } = req.body;

  database
    .query(
      "INSERT INTO resto(country, name, adress, number) VALUES (?, ?, ?, ?)",
      [country, name, adress, number]
    )
    .then(([result]) => {
      res.location(`/api/restos/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the restos");
    });
};

const updateResto = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { country, name, adress, number } = req.body;

  database
    .query(
      "update games set country = ?, name = ?, adress = ?, number = ? where id = ?",
      [country, name, adress, number, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the resto");
    });
};

const deleteResto = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM resto WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows) res.sendStatus(204);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getResto,
  getRestoById,
  postResto,
  updateResto,
  deleteResto,
};
