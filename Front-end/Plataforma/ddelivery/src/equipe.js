import React, { useEffect, useState } from "react";
import axios from 'axios';
import url from './assets/api';
import Novocolaborador from "./novoColaborador";

function Equipe() {
  const [equipe, setEquipe] = useState([])
  const getEquipe = async () => {
    const response = await axios.get(url+"/colaborador");
    setEquipe(response.data);
  }
  useEffect(() => {
    getEquipe();
  }, []);

  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">D.Delivery</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Buscar por objeto" aria-label="Search" />
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
                  <a class="nav-link" href="/objetos">
                    <span data-feather="shopping-cart"></span>
                    Objetos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/equipe">
                    <span data-feather="users"></span>
                    Equipe
                  </a>
                </li>
              </ul>
            </div>
          </nav>



          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Gestão de equipe</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal">
                  Novo colaborador
                </button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Adicionar novo colaborador</h5>
        <button type="button" className="btn-close" data-dismiss="modal">
        </button>
      </div>
      <div className="modal-body">
        
<Novocolaborador />

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



            <div class="table-responsive" id="tabelinha">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Turno</th>
                    <th scope="col">Veiculo</th>
                    <th scope="col">Capacidade</th>
                    <th scope="col">Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {equipe.map((equipe, index) => {
                    return (
                      <tr key={index}>
                      <td>{equipe.ID}</td>
                      <td>{equipe.nome} {equipe.sobrenome}</td>
                      <td>{equipe.cidade}, {equipe.estado}</td>
                      <td>{equipe.turno}</td>
                      <td>{equipe.placa}</td>
                      <td>{equipe.capacidade}</td>
                      <td>{equipe.date}</td>
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


export default Equipe;