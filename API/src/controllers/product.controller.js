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
  const response = await db.query('SELECT * FROM objeto ORDER BY id DESC');
  res.status(200).send(response.rows);
};

exports.ordens = async (req, res) => {
  const response = await db.query('SELECT * FROM ordens ORDER BY id DESC');
  res.status(200).send(response.rows);
};

exports.colaborador = async (req, res) => {
  const response = await db.query('SELECT * FROM colaborador ORDER BY id DESC');
  res.status(200).send(response.rows);
};


//Retorna os objetos onde status = entregue, usado para preencher a tabela Ultimas entregas da página inicial

exports.ultimasentregas = async (req, res) => {
  const response = await db.query("SELECT * FROM objeto WHERE status='Entregue' ORDER BY date DESC");
  res.status(200).send(response.rows);
};

// Retorna o objeto pelo ID

exports.objetoporid = async (req, res) => {
  const id = req.params["id"];
  const response = await db.query(
    "SELECT * FROM objeto WHERE id = ($1)",
    [id]
    );

  res.status(200).send(response.rows);
};

// Retorna o colaborador pelo ID

exports.colaboradorporid = async (req, res) => {
  const id = req.params["id"];
  const response = await db.query(
    'SELECT * FROM colaborador WHERE "ID" = ($1)',
    [id]
    );

  res.status(200).send(response.rows);
};

// Retorna a ordem pelo ID

exports.ordempeloid = async (req, res) => {
  const id = req.params["id"];
  const response = await db.query(
    'SELECT * FROM ordens WHERE ID = ($1)',
    [id]
    );

  res.status(200).send(response.rows);
};





//RETORNA OS VALORES ANTERIORES AO DIA ATUAL PARA COMPOSICAO DO GRAFICO DASHBOARD

exports.dashboardgrafico = async (req, res) => {
  const response = await db.query("SELECT contagementregas, to_char(date , 'DD/MM/YYYY') FROM dashboard ORDER BY date DESC LIMIT 6");
  res.status(200).send(response.rows);
};









//PUT para EDITAR A ORDEM DE ACORDO COM O ID do Modal
exports.ordenseditar = async (req, res) => {
  const { entregador, cliente, cidade, estado, observacao, status, id } = req.body;
  const { rows } = await db.query(
    "UPDATE ordens SET entregador=$1, cliente=$2, cidade=$3, estado=$4, observacao=$5, status=$6 WHERE id=$7",
    [entregador, cliente, cidade, estado, observacao, status, id]
  );

  res.status(201).send({
    message: "Colaborador adicionado com sucesso!",
    body: {
      entregador: { entregador },
      cliente: { cliente },
      cidade: { cidade },
      estado: { estado },
      observacao: { observacao },
      status: { status }
    },
  });
};

//PUT para EDITAR O COLABORADOR DE ACORDO COM O ID do Modal
exports.colaboradoreditar = async (req, res) => {
  const { nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao, id } = req.body;
  const { rows } = await db.query(
    'UPDATE colaborador SET nome=$1, sobrenome=$2, cidade=$3, estado=$4, placa=$5, capacidade=$6, email=$7, senha=$8, endereco=$9, cep=$10, veiculo=$11, situacao=$12 WHERE id=$13',
    [nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao, id]
  );

  res.status(201).send({
    message: "Colaborador editado com sucesso!",
    body: {
      nome: { nome },
      sobrenome: { sobrenome },
      cidade: { cidade },
      estado: { estado },
      placa: { placa },
      id: { id }
    },
  });
};

//PUT para EDITAR O OBJETO DE ACORDO COM O ID do Modal
exports.objetoeditar = async (req, res) => {
  const { destinatarionome, destinatariosobrenome, remetente, cidade, estado, tipo, status, cep, bairro, observacao, peso, enderecodestinatario, prioridade, ordem, id } = req.body;
  const { rows } = await db.query(
    'UPDATE objeto SET destinatarionome=$1, remetente=$3, cidade=$4, estado=$5, tipo=$6, status=$7, bairro=$9, observacao=$10, cep=$8, destinatariosobrenome=$2, peso=$11, enderecodestinatario=$12, prioridade=$13, ordem=$14 WHERE id=$15',
    [destinatarionome,
      destinatariosobrenome,
      remetente,
      cidade,
      estado,
      tipo,
      status,
      cep,
      bairro,
      observacao,
      peso,
      enderecodestinatario,
      prioridade,
      ordem,
      id]
  );

  res.status(201).send({
    message: "O objeto foi modificado com sucesso",
    body: {
      nome: { destinatarionome },
      sobrenome: { destinatariosobrenome },
      remetente: {remetente},
      cidade: { cidade },
      estado: { estado },
      observacao: { observacao },
      status: { status }
    },
  });
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

//Adicionar ordem

exports.adicionarOrdem = async (req, res) => {
  const { entregador, cliente, cidade, estado, observacao, status } = req.body;
  const { rows } = await db.query(
    'INSERT INTO ordens ("entregador", "cliente", "cidade", "estado", "observacao", "status") VALUES ($1, $2, $3, $4, $5, $6)',
    [entregador, cliente, cidade, estado, observacao, status]
  );

  res.status(201).send({
    message: "Colaborador adicionado com sucesso!",
    body: {
      entregador: { entregador },
      cliente: { cliente },
      cidade: { cidade },
      estado: { estado },
      observacao: { observacao },
      status: { status }
    },
  });
};

//post novo colaborador

exports.adicionarColaborador = async (req, res) => {
  const { nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao } = req.body;
  const { rows } = await db.query(
    'INSERT INTO colaborador ("nome", "sobrenome", "cidade", "estado", "placa", "capacidade", "email", "senha", "endereco", "cep", "veiculo", "situacao") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
    [nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao]
  );

  res.status(201).send({
    message: "Colaborador adicionado com sucesso!",
    body: {
      nome: { nome },
      sobrenome: { sobrenome },
      cidade: { cidade },
      estado: { estado },
      placa: { placa },
      capacidade: { capacidade },
      email: { email }
    },
  });
};

//post novo objeto

exports.adicionarObjeto = async (req, res) => {
  const { 
    destinatarionome,
    destinatariosobrenome,
    remetente,
    cidade,
    estado,
    tipo,
    status,
    cep,
    bairro,
    observacao,
    peso,
    enderecodestinatario,
    prioridade } = req.body;
  const { rows } = await db.query(
    'INSERT INTO objeto ("destinatarionome", "destinatariosobrenome", "remetente", "cidade", "estado", "tipo", "status", "cep", "bairro", "observacao", "peso", "enderecodestinatario", "prioridade") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    [ destinatarionome,
      destinatariosobrenome,
      remetente,
      cidade,
      estado,
      tipo,
      status,
      cep,
      bairro,
      observacao,
      peso,
      enderecodestinatario,
      prioridade]
  );

  res.status(201).send({
    message: "Objeto adicionado com sucesso!",
    body: {
      nome: { destinatarionome },
      sobrenome: { destinatariosobrenome },
      cidade: { cidade },
      estado: { estado },
      tipo: { tipo },
      status: { status },
      bairro: {bairro},
      observacao: {observacao},
      peso: {peso},
      endereco: {enderecodestinatario},
      prioridade: {prioridade}
    },
  });
};