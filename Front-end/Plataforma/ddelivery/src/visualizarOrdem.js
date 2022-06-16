import React, {useEffect,useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
import url from './assets/api';
import { BsEyeFill } from "react-icons/bs";



  
function VisualizarOrdem(props) {
  
  console.log(props.numerodaordem)
    
  const [colaboradorOrdem, setColaboradorordem] = useState([])
  const getColaboradorordem = async () => {
    const response = await axios.get(url+"/colaborador");
    setColaboradorordem(response.data)
  }
  useEffect(() => {
    getColaboradorordem();
  }, []);


    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [entregador, setEntregador] = useState(props.nomeentregador);
    const [cliente, setCliente] = useState(props.nomecliente);
    const [cidade, setCidade] = useState(props.ordemcidade);
    const [estado, setEstado] = useState(props.ordemestado);
    const [status, setStatus] = useState(props.ordemstatus);
    const [observacao, setObservacao] = useState(props.ordemobservacao);
  
    const handleValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();       
            event.stopPropagation();            
        }
        setValidated(true);
        console.log('validado')
        

      };
  
  const id = props.numerodaordem;
  console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoColabo = {   
      entregador, cliente, cidade, estado, observacao, status, id
    }
  
    axios.put('http://localhost:3001/api/ordens', { 
      entregador, cliente, cidade, estado, observacao, status, id })
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
<button className="btn btn-link btn-sm" onClick={handleShow}><BsEyeFill /></button>
  
        <Modal show={show} onHide={handleClose} onSubmit={handleSubmit} size="xl" validated={validated}>

          <Modal.Header closeButton>
            <Modal.Title>Detalhes ordem #{props.numerodaordem}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form noValidate validated={validated}  >
<div className="row">

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
  
  export default VisualizarOrdem;