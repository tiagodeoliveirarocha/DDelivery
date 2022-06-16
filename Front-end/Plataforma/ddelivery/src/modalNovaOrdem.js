import React, {useEffect,useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
import url from './assets/api';


function ModalNovaOrdem() {

  const [equipe, setEquipe] = useState([])
  const getEquipe = async () => {
    const response = await axios.get(url+"/colaborador");
    setEquipe(response.data);
  }
  useEffect(() => {
    getEquipe();
  }, []);

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [entregador, setEntregador] = useState("");
    const [cliente, setCliente] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [status, setStatus] = useState("");
    const [observacao, setObservacao] = useState("");
  
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
      entregador, cliente, cidade, estado, observacao, status
    }
  
    axios.post('http://localhost:3001/api/adicionarordem', { 
      entregador, cliente, cidade, estado, observacao, status })
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
        <button className="btn btn-sm btn-outline-secondary" onClick={handleShow} >
          Nova ordem
        </button>
  
        <Modal show={show} onHide={handleClose} onSubmit={handleSubmit} size="xl" validated={validated}>

          <Modal.Header closeButton>
            <Modal.Title>Adicionar nova ordem de entrega</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form noValidate validated={validated}  >
<div className="row">
<div className="col">
      <label for="inputRemetente" className="form-label">Entregador</label>
      <select id="inputRemetente" className="form-control" value={entregador} onChange={(e) => setEntregador(e.target.value)} required>
        <option selected>Selecione</option>
        <option>Entregador 1</option>
        <option>Entregador 2</option>
        <option>Entregador 3</option>
        <option>Entregador 4</option>
        <option>Entregador 5</option>
      </select>
</div>

<div className="col">
      <label for="inputPeso" className="form-label">Cliente</label>
      <select id="inputPeso" className="form-control" value={cliente} onChange={(e) => setCliente(e.target.value)} required>
      <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Casas Bahia</option>
        <option>Carrefour</option>
        <option>Submarino</option>
      </select>
</div>

<p></p>
</div>
<div className="row mb-3">
<div className="col">
      <label for="inputEstado" className="form-label">Estado</label>
      <select id="inputEstado" className="form-control" value={estado} onChange={(e) => setEstado(e.target.value)} required>
        <option selected>Selecione</option>
        <option>São Paulo</option>
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
</div>
<div className="row mb-2">
  <div className="col">
      <label for="inputObservacao" className="form-label">Observação</label>
        <input type="text" className="form-control" id="inputObservacao"  value={observacao} onChange={(e) => setObservacao(e.target.value)} required />
  </div>
  <div className="col">
      <label for="inputStatus" className="form-label">Status</label>
      <select id="inputStatus" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option selected>Programada</option>
        <option>Em rota</option>
        <option>Finalizada</option>
        <option>Reprogramada</option>
        <option>Cancelada</option>
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
  
  export default ModalNovaOrdem;