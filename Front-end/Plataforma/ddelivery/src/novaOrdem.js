import React from "react";

class Novaordem extends React.Component {
    render() {
        return (
            <div>
              
<form onSubmit={this.handleSubmit}>
  
  <p></p>
  <h2 class="h4" align="left">Ordem #123456</h2>

  <div className="form-group row">
  <div className="form-group col-md-4">
      <label for="inputEntregador" className="form-label">Entregador</label>
      <select id="inputEntregador" className="form-control">
        <option selected>Selecione</option>
        <option>Andressa Zeminian Penha</option>
        <option>Tiago de Oliveira Rocha</option>
        <option>Jéssica de Oliveira Rocha</option>
        <option>José Maria da Rocha</option>
        <option>Oracy Acacia de Oliveira Rocha</option>
      </select>
  </div>
  <div className="form-group col-md-4">
      <label for="inputCidade" className="form-label">Cidade</label>
      <select id="inputCidade" className="form-control">
        <option selected>Selecione</option>
        <option>São Paulo</option>
        <option>São Bernardo do Campo</option>
        <option>São Caetano do Sul</option>
        <option>Santo André</option>
        <option>São José dos Campos</option>
        <option>Cajamar</option>
      </select>
  </div>
  <div className="form-group col-md-4">
      <label for="inputCliente" className="form-label">Cliente</label>
      <select id="inputCliente" className="form-control">
        <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Submarino</option>
        <option>Casas Bahia</option>
      </select>
  </div>
<p></p>

    <p></p>
    <div className="table-responsive">
    <table className="table table-striped" >
  <thead className="thead-light">
    <tr>
      <th scope="col">Objeto</th>
      <th scope="col">Modalidade</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">LS123457BR</th>
      <td>Prioritário</td>
      <td><span className="badge bg-light text-dark">Postado</span></td>
    </tr>
    <tr>
      <th scope="row">LS123457BR</th>
      <td>Prioritário</td>
      <td><span className="badge bg-light text-dark">Postado</span></td>
    </tr>
  </tbody>
  </table></div>
  <p></p>
  <div className="table-responsive">
    <div className="form-group row">
  <div className="form-group col-md-8">
  <label for="inputObservacao" className="form-label">Observação</label>
  <input type="text" className="form-control" id="observacao" placeholder="Insira o comentário" />
  </div>
  <div className="form-group col-md">
      <label for="inputState" className="form-label">Status</label>
      <select id="inputState" className="form-control">
        <option selected>Selecione</option>
        <option>Finalizada</option>
        <option>Em rota de entrega</option>
        <option>Não iniciada</option>
        <option>Reprogramada</option>
      </select>
  </div>
  </div>
    </div>

</div>
</form>


            </div>
        )
    }

}

export default Novaordem;