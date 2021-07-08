var express = require("express");
var router = express.Router();

const GuitarController = require("../controllers/GuitarController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/guitars", (req, res) => {
  const listGuitars = GuitarController.compileListOfGuitars();

  res.render("listGuitars", { listGuitars });
});

router.get("/guitars/add", (req, res) => {
  res.render("addGuitar");
})

router.post("/guitars/add", (req, res) => {
  const { maker, model, year, price, stock } = req.body;

  GuitarController.addGuitar(maker, model, year, price, stock);

  res.redirect("/guitars");
});

router.get("/maker", (req, res) => {
  const { maker } = req.query;

  const listGuitarMaker = GuitarController.compileListOfGuitars(maker);

  res.render("listGuitarMaker", { listGuitarMaker });
});

module.exports = router;
