use("commerce");

db.produtos.countDocuments(
  { nome: { $regex: /mc/i } },
);