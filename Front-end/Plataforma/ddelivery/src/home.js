import React from "react";

class Home extends React.Component {
    render() {
        return (
<div>
<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">D.Delivery</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Buscar por objeto" aria-label="Search" />
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="/login">Sair</a>
    </div>
  </div>
</header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <span data-feather="home"></span>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ordens">
              <span data-feather="file"></span>
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
        <h1 className="h2">Status semanal de entrega</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            Esta semana
          </button>
        </div>
      </div>

      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

      <h2>Últimas Entregas</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>

            </div>
        )
    }

}

export default Home;