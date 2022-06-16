import React, { useEffect, useState } from "react";
import axios from 'axios';
import url from './assets/api';
import { BsListTask } from "react-icons/bs";
import ModalNovaOrdem from "./modalNovaOrdem";
import ModalEditarOrdem from "./modalEditarOrdem";
import {Table} from 'react-bootstrap';
import VisualizarOrdem from "./visualizarOrdem";

function Orders() {
  const [orders, setOrders] = useState([])
  const getOrders = async () => {
    const response = await axios.get(url+"/ordens");
    setOrders(response.data);
  }
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">D.Delivery</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapsed" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span data-feather="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Buscar por objeto" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="/">Sair</a>
          </div>
        </div>
      </header>

      <div className="container-fluid">

        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="home"></span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/ordens">
                    <span data-feather="File"></span>
                    Ordens de Entrega
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/objetos">
                    <span data-feather="shopping-cart"></span>
                    Objetos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/equipe">
                    <span data-feather="users"></span>
                    Equipe
                  </a>
                </li>
              </ul>
            </div>
          </nav>



          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Gestão de ordens de entrega</h1>
              <div className="btn-toolbar mb-2 mb-md-0" id="newOrdem">
<ModalNovaOrdem />

              </div>
            </div>
<div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Sucesso!</strong> Uma nova ordem foi adicionada.
  <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">

  </button>
</div>


            <div className="table-responsive" id="tabelinha">
            <Table striped hover>
                <thead>
                  <tr>
                    <th scope="col">Ordem</th>
                    <th scope="col">Entregador</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Itens</th>
                    <th scope="col">Status</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Visualizar</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    return (
                      <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.entregador}</td>
                      <td>{order.cidade}, {order.estado}</td>
                      <td>{order.qtd_Itens}</td>
                      <td><span className="badge rounded-pill bg-success">{order.status}</span></td>
                      <td><ModalEditarOrdem ordemstatus={order.status} ordemcidade={order.cidade} ordemestado={order.estado} numerodaordem={order.id} nomeentregador={order.entregador} nomecliente={order.cliente} ordemobservacao={order.observacao}/></td>
                      <td><VisualizarOrdem numerodaordem={order.id} /></td>
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


export default Orders;