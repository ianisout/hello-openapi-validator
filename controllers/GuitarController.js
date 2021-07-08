const GuitarModel = require("../models/GuitarModel");

exports.compileListOfGuitars = () => {
  const listGuitars = GuitarModel.returnListOfGuitars();

  return listGuitars;
};

exports.addGuitar = (maker, model, year, price, stock) => {
  GuitarModel.addGuitar(maker, model, year, price, stock);
};

/**
 * 
 o controler tem que poder ser chamado de qualquer lugar*/
