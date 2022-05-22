import React, {useState} from "react";
import axios from "axios";

function Novocolaborador(){

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [placa, setPlaca] = useState("");
  const [situacao, setSituacao] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();

  const novoColabo = {   
    nome,
    sobrenome,
    email,
    estado,
    senha,
    endereco,
    cidade,
    cep,
    veiculo,
    capacidade,
    placa,
    situacao
  }

  axios.post('http://localhost:3001/api/adicionarcolab', { 
  nome,
  sobrenome,
  email,
  estado,
  senha,
  endereco,
  cidade,
  cep,
  veiculo,
  capacidade,
  placa,
  situacao })
  .then(res=>{
    console.log(res);
    console.log(res.data);
  })

  console.log("submit",{novoColabo});
}


        return (
<form onSubmit={handleSubmit}>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content" >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Adicionar novo colaborador</h5>
        <button type="button" className="btn-close" data-dismiss="modal">
        </button>
      </div>
      <div className="modal-body">
      


<div className="row">
<div className="col">
  <label for="inputNome" className="form-label">Nome</label>
  <input type="text" className="form-control" id="nombre" value={nome} onChange={(e) => setNome(e.target.value)} required />
</div>
<div className="col">
  <label for="inputSobrenome" className="form-label">Sobrenome</label>
  <input type="text" className="form-control" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
</div>
<p></p>
<div className="col">
  <label for="inputEmail" className="form-label">E-mail</label>
  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div className="col">
  <label for="inputSenha" className="form-label">Senha</label>
  <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
</div>
<p></p>
<div className="col">
  <label for="inputObjeto" className="form-label">Endereço</label>
  <input type="text" className="form-control" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
</div>
</div>
<p></p>
  
<div className="row mb-4">
  <div className="col">
      <label for="inputEstado" className="form-label">Estado</label>
      <select id="inputEstado" className="form-control"  value={estado} onChange={(e) => setEstado(e.target.value)} required >
        <option selected>Selecione</option>
        <option>São Paulo</option>
        <option>Rio de Janeiro</option>
        <option>Minas Gerais</option>
        <option>Santa Catarina</option>
      </select>
  </div>
  <div className="col">
      <label for="inputCidade" className="form-label">Cidade</label>
      <select id="inputCidade" className="form-control" value={cidade} onChange={(e) => setCidade(e.target.value)} required>
        <option selected>Selecione</option>
        <option>São Paulo</option>
        <option>São José dos Campos</option>
        <option>São Bernardo do Campo</option>
        <option>Santo André</option>
        <option>São Caetano</option>
      </select>
  </div>
  <div className="col">
  <label for="inputCep" className="form-label">CEP</label>
  <input type="text" className="form-control" id="cep" maxLength={"8"} value={cep} onChange={(e) => setCep(e.target.value)} required />
</div>
</div>
<div class="dropdown-divider"></div>
<p></p>
  
<div className="row mb-3">
  <div className="col">
      <label for="inputVeiculo" className="form-label">Veiculo</label>
        <input type="text" className="form-control" id="Veiculo"  value={veiculo} onChange={(e) => setVeiculo(e.target.value)} required />
  </div>
  <div className="col">
      <label for="inputCidade" className="form-label">Capacidade</label>
          <input type="text" className="form-control" id="Capacidade" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} required />
  </div>
  <div className="col" mb-4>
  <label for="inputPlaca" className="form-label">Placa</label>
  <input type="text" className="form-control" id="Placa" maxLength={"7"} value={placa} onChange={(e) => setPlaca(e.target.value)} required />
</div>
<div className="col">
      <label for="inputCidade" className="form-label">Situação</label>
      <select id="inputCidade" className="form-control" value={situacao} onChange={(e) => setSituacao(e.target.value)} > //disabled 
        <option selected>Ativo</option>
        <option>Desligado</option>
        <option>Em férias</option>
        <option>Em licença</option>
      </select>
  </div>
</div>


</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</div>
</form>
           
        )
    }


export default Novocolaborador;