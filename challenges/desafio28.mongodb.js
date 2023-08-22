use("db");

db.produtos.countDocuments(
  { ingredientes: { $size: 4 } },
);