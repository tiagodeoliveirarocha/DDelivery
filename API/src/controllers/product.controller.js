const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { teste } = req.body;
  const { rows } = await db.query(
    "INSERT INTO teste (teste) VALUES ($1)",
    [teste]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { teste }
    },
  });
};




exports.objeto = async (req, res) => {
  const response = await db.query('SELECT * FROM objeto');
  res.status(200).send(response.rows);
};

exports.ordens = async (req, res) => {
  const response = await db.query('SELECT * FROM ordens');
  res.status(200).send(response.rows);
};

exports.colaborador = async (req, res) => {
  const response = await db.query('SELECT * FROM colaborador ORDER BY date');
  res.status(200).send(response.rows);
};

//Post nas ordens

exports.createProduct = async (req, res) => {
  const { teste } = req.body;
  const { rows } = await db.query(
    "INSERT INTO teste (teste) VALUES ($1)",
    [teste]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { teste }
    },
  });
};

//post ordens

exports.adicionarOrdem = async (req, res) => {
  const { Entregador, Cliente } = req.body;
  const { rows } = await db.query(
    'INSERT INTO ordens ("Entregador", "Cliente") VALUES ($1, $2)',
    [Entregador, Cliente]
  );

  res.status(201).send({
    message: "Ordem adicionada com sucesso!",
    body: {
      Entregador: { Entregador },
      Cliente: { Cliente }
    },
  });
};

//post novo colaborador

exports.adicionarColaborador = async (req, res) => {
  const { nome, sobrenome, cidade, estado, placa, capacidade } = req.body;
  const { rows } = await db.query(
    'INSERT INTO colaborador ("nome", "sobrenome", "cidade", "estado", "placa", "capacidade") VALUES ($1, $2, $3, $4, $5, $6)',
    [nome, sobrenome, cidade, estado, placa, capacidade]
  );

  res.status(201).send({
    message: "Colaborador adicionado com sucesso!",
    body: {
      nome: { nome },
      sobrenome: { sobrenome },
      cidade: { cidade },
      estado: { estado },
      placa: { placa },
      capacidade: { capacidade }
    },
  });
};