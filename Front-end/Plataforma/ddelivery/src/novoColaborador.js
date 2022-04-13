import React from "react";


class Novocolaborador extends React.Component {
    render() {
        return (
            <div>
        
<form>
  <p></p>
  <h2 class="h4">Matricula #001</h2>


<div className="row mb-4">
<div className="col">
  <label for="inputObjeto" className="form-label">Nome</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
<div className="col">
  <label for="inputObjeto" className="form-label">Sobrenome</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
<p></p>
<div className="table-responsive">
<div className="col">
  <label for="inputObjeto" className="form-label">Endereço</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
</div>
</div>
<div className="row mb-4">
<div className="table-responsive">
  
<div className="row mb-4">
  <div className="col">
      <label for="inputEntregador" className="form-label">Estado</label>
      <select id="inputEntregador" className="form-control">
        <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Submarino</option>
        <option>Casas Bahia</option>
      </select>
  </div>
  <div className="col">
      <label for="inputCidade" className="form-label">Cidade</label>
      <select id="inputCidade" className="form-control">
        <option selected>Selecione</option>
        <option>Caixa Pequena</option>
        <option>Caixa Média</option>
        <option>Caixa Grande</option>
        <option>Envelope Pequeno</option>
        <option>Envelope Médio</option>
        <option>Envelope Grande</option>
      </select>
  </div>
  <div className="col">
  <label for="inputObjeto" className="form-label">Bairro</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
</div>
</div>
<div class="dropdown-divider"></div>
<p></p>
<div className="table-responsive">
  
<div className="row mb-4">
  <div className="col">
      <label for="inputEntregador" className="form-label">Veiculo</label>
      <select id="inputEntregador" className="form-control">
        <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Submarino</option>
        <option>Casas Bahia</option>
      </select>
  </div>
  <div className="col">
      <label for="inputCidade" className="form-label">Capacidade</label>
      <select id="inputCidade" className="form-control">
        <option selected>Selecione</option>
        <option>Caixa Pequena</option>
        <option>Caixa Média</option>
        <option>Caixa Grande</option>
        <option>Envelope Pequeno</option>
        <option>Envelope Médio</option>
        <option>Envelope Grande</option>
      </select>
  </div>
  <div className="col" mb-4>
  <label for="inputObjeto" className="form-label">Placa</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
</div>
</div>

  </div>
</form>

            </div>
        )
    }

}

export default Novocolaborador;