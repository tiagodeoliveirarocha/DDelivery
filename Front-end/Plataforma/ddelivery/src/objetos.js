import React, { useEffect, useState } from "react";
import './assets/dist/css/bootstrap.css';
import './assets/dist/css/dashboard.css';
import 'https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js';
import axios from 'axios';
import url from './assets/api';
import ModalNovoObjeto from "./modalNovoObjeto";
import ModalEditarObjeto from "./modalEditarObjeto";
import {Table} from 'react-bootstrap';

function Objetos() {
  const [objeto, setObjeto] = useState([])
  const getObjeto = async () => {
    const response = await axios.get(url+"/objeto");
    setObjeto(response.data);
  }
  useEffect(() => {
    getObjeto();
  }, []);

  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">D.Delivery</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Buscar por objeto" aria-label="Search" href="/" />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Sair</a>
          </div>
        </div>
      </header>


      <div class="container-fluid">

        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <span data-feather="home"></span>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/ordens">
                    <span data-feather="file"></span>
                    Ordens de Entrega
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/objetos">
                    <span data-feather="shopping-cart"></span>
                    Objetos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/equipe">
                    <span data-feather="users"></span>
                    Equipe
                  </a>
                </li>
              </ul>
            </div>
          </nav>



          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Gestão de objetos</h1>
              <div class="btn-toolbar mb-2 mb-md-0">

<ModalNovoObjeto />

              </div>
            </div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Sucesso.</strong> Um novo objeto foi adicionado.
  <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">

  </button>
</div>


            <div class="table-responsive" id="tabelinha">
              <Table striped hover>
                <thead>
                  <tr>
                    <th scope="col">Cod. Objeto</th>
                    <th scope="col">Destinatário</th>
                    <th scope="col">Remetente</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {objeto.map((objeto, index) => {
                    return (
                      <tr key={index}>
                      <td>{objeto.id}</td>
                      <td>{objeto.destinatarionome} {objeto.destinatariosobrenome}</td>
                      <td>{objeto.remetente}</td>
                      <td>{objeto.cidade}, {objeto.estado}</td>
                      <td>{objeto.prioridade}</td>
                      <td><span className="badge bg-light text-dark">{objeto.status}</span></td>
                      <td><ModalEditarObjeto ordemObjetoEditar={objeto.ordem} objetodestinatario={objeto.enderecodestinatario} objetocep={objeto.cep} objetoprioridade={objeto.prioridade} objetoobservacao={objeto.observacao} objetostatus={objeto.status} objetopeso={objeto.peso} objetotipo={objeto.tipo}  objetocidade={objeto.cidade} objetoestado={objeto.estado} remetenteobjeto={objeto.remetente} codigoobjeto={objeto.id} nomeobjeto={objeto.destinatarionome} sobrenomeobjeto={objeto.destinatariosobrenome}/></td>
                    </tr>
                    )
                    })}
                </tbody>
              </Table>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
}


export default Objetos;