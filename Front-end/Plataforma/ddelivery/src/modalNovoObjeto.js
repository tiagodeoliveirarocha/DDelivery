import React, {useEffect,useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
import url from './assets/api';


function ModalNovoObjeto() {

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

    const [destinatarionome, setDestinatarionome] = useState("");
    const [destinatariosobrenome, setDestinatariosobrenome] = useState("");
    const [remetente, setRemetente] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [tipo, setTipo] = useState("");
    const [status, setStatus] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [observacao, setObservacao] = useState("");
    const [peso, setPeso] = useState("");
    const [enderecodestinatario, setEnderecodestinatario] = useState("");
    const [prioridade, setPrioridade] = useState("");
  
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
      prioridade
    }
  
    axios.post('http://localhost:3001/api/adicionarobjeto', { 
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
      prioridade })
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  
    console.log("submit",{novoColabo});
    setShow(false);



  }
  
    return (
      <>
        <button className="btn btn-sm btn-outline-secondary" onClick={handleShow} >
          Novo objeto
        </button>
  
        <Modal show={show} onHide={handleClose} onSubmit={handleSubmit} size="xl" validated={validated}>

          <Modal.Header closeButton>
            <Modal.Title>Adicionar novo objeto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form noValidate validated={validated}  >
<div className="row">
<div className="col">
      <label for="inputRemetente" className="form-label">Remetente</label>
      <select id="inputRemetente" className="form-control" value={remetente} onChange={(e) => setRemetente(e.target.value)} required>
        <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Casas Bahia</option>
        <option>Carrefour</option>
        <option>Submarino</option>
      </select>
</div>
<div className="col">
      <label for="inputTipo" className="form-label">Tipo de Embalagem</label>
      <select id="inputTipo" className="form-control" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
        <option selected>Selecione</option>
        <option>Caixa Pequena</option>
        <option>Caixa Média</option>
        <option>Caixa Grande</option>
        <option>Envelope Médio</option>
        <option>Envelope Grande</option>
      </select>
</div>
<div className="col">
      <label for="inputPeso" className="form-label">Peso</label>
      <select id="inputPeso" className="form-control" value={peso} onChange={(e) => setPeso(e.target.value)} required>
        <option selected>Selecione</option>
        <option>Até 0,5 kg</option>
        <option>Entre 0,5 e 1 kg</option>
        <option>Entre 1 e 2 kg</option>
        <option>Entre 2 e 3 kg</option>
        <option>Entre 3 e 5 kg</option>
      </select>
</div>

<p></p>
<div class="dropdown-divider"></div>
<div className="col">
  <label for="inputDestinatarioNome" className="form-label">Nome do Destinatário</label>
  <input type="text" className="form-control" id="inputDestinatarioNome" value={destinatarionome} onChange={(e) => setDestinatarionome(e.target.value)} required />
</div>
<div className="col">
  <label for="inputDestinatarioSobrenome" className="form-label">Sobrenome</label>
  <input type="text" className="form-control" id="inputDestinatarioSobrenome" value={destinatariosobrenome} onChange={(e) => setDestinatariosobrenome(e.target.value)} required />
</div>
<p></p>
<div className="col">
  <label for="inputEnderecodestinatario" className="form-label">Endereço do Destinatário</label>
  <input type="text" className="form-control" id="inputEnderecodestinatario" value={enderecodestinatario} onChange={(e) => setEnderecodestinatario(e.target.value)} required />
</div>
</div>
<p></p>
  
<div className="row mb-4">
  <div className="col">
      <label for="inputEstadodestinatario" className="form-label">Estado</label>
      <select id="inputEstadodestinatario" className="form-control"  value={estado} onChange={(e) => setEstado(e.target.value)} required >
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


  
<div className="row mb-3">
  <div className="col">
      <label for="inputObservacao" className="form-label">Observação</label>
        <input type="text" className="form-control" id="inputObservacao"  value={observacao} onChange={(e) => setObservacao(e.target.value)} required />
  </div>
  <div className="col">
      <label for="inputPrioridade" className="form-label">Prioridade</label>
      <select id="inputPrioridade" className="form-control" value={prioridade} onChange={(e) => setPrioridade(e.target.value)} required>
        <option selected>Não Prioritário</option>
        <option>Prioritário</option>
      </select>
</div>
  <div className="col">
      <label for="inputStatus" className="form-label">Status de Entrega</label>
      <select id="inputStatus" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option selected>Postado</option>
        <option>Em transito para centro de distribuição</option>
        <option>Saiu para entrega</option>
        <option>Entregue</option>
        <option>Entrega reprogramada</option>
        <option>Destinatário ausente</option>
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
  
  export default ModalNovoObjeto;