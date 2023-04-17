use("commerce");

db.produtos.countDocuments({});

db.produtos.find(
  { },
  { _id:0, nome: 1, vendidos: 1 }
);