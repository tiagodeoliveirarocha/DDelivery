import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form, FormGroup } from "react-bootstrap";
import {BsPencilSquare} from "react-icons/bs";


function ModalEditarColaborador(props) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nome, setNome] = useState(props.nomeColaborador);
    const [sobrenome, setSobrenome] = useState(props.sobrenomeColaborador);
    const [email, setEmail] = useState(props.emailColaborador);
    const [estado, setEstado] = useState(props.estadoColaborador);
    const [senha, setSenha] = useState(props.senhaColaborador);
    const [endereco, setEndereco] = useState(props.enderecoColaborador);
    const [cidade, setCidade] = useState(props.cidadeColaborador);
    const [cep, setCep] = useState(props.cepColaborador);
    const [veiculo, setVeiculo] = useState(props.veiculoColaborador);
    const [capacidade, setCapacidade] = useState(props.capacidadeColaborador);
    const [placa, setPlaca] = useState(props.placaColaborador);
    const [situacao, setSituacao] = useState(props.situacaoColaborador);
    const id = props.matricula;
  
    const handleValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();       
            event.stopPropagation();            
        }
        setValidated(true);
        console.log('validado')
        

      };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoColabo = {   
      nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao, id
    }
  
    axios.put('http://localhost:3001/api/colaborador', { 
      nome, sobrenome, cidade, estado, placa, capacidade, email, senha, endereco, cep, veiculo, situacao, id })
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  
    console.log("submit",{novoColabo});
    setShow(false);
    window.location.reload();


  }
  
    return (
      <>
<button className="btn btn-link btn-sm" onClick={handleShow}><BsPencilSquare /></button>
  
        <Modal show={show} onHide={handleClose} onSubmit={handleSubmit} size="xl" validated={validated}>

          <Modal.Header closeButton>
            <Modal.Title>Editar colaborador - Matricula #{props.matricula}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form noValidate validated={validated}  >
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
        <select id="inputVeiculo" className="form-control" value={veiculo} onChange={(e) => setVeiculo(e.target.value)} required>
            <option selected>Selecione</option>
            <option>Carro</option>
            <option>Moto</option>
            <option>Van</option>
        </select>
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
      <label for="inputSituacao" className="form-label">Situação</label>
      <select id="inputSituacao" className="form-control" value={situacao} onChange={(e) => setSituacao(e.target.value)} disabled > //disabled 
        <option selected>Ativo</option>
        <option>Desligado</option>
        <option>Em férias</option>
        <option>Em licença</option>
      </select>
  </div>
</div>

          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
<button className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
  
  export default ModalEditarColaborador;