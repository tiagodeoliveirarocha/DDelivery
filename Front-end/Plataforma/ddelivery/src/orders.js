import React, { useEffect, useState } from "react";
import axios from 'axios';
import url from './assets/api';
import Novaordem from "./novaOrdem";
import { BsPencilSquare } from "react-icons/bs";


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
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
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
                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal">
                  Nova ordem
                </button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Criar nova ordem de entrega</h5>
        <button type="button" className="btn-close" data-dismiss="modal">
        </button>
      </div>
      <div className="modal-body">
        
<Novaordem />

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</div>





              </div>
            </div>



            <div className="table-responsive" id="tabelinha">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Ordem</th>
                    <th scope="col">Entregador</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Itens</th>
                    <th scope="col">Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    return (
                      <tr key={index}>
                      <td>{order.ID}</td>
                      <td>{order.Entregador}</td>
                      <td>{order.Cidade}, {order.Estado}</td>
                      <td>{order.Qtd_Itens}</td>
                      <td><BsPencilSquare /></td>
                    </tr>
                    )
                    })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
}


export default Orders;