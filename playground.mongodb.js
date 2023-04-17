use("commerce");

db.resumoProducts.insertOne(
  { 
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocuments({})
  },
);

db.resumoProducts.find(
  {},
  { _id: 0, franquia: 1, totalProdutos: 1}
);