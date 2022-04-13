import React from "react";


class Novoobjeto extends React.Component {
    render() {
        return (
            <div>
        
<form>
  <p></p>
  <h2 class="h4">Objeto #LS4571567BR</h2>

  <div className="row mb-3">
  <div className="col">
      <label for="inputEntregador" className="form-label">Remetente</label>
      <select id="inputEntregador" className="form-control">
        <option selected>Selecione</option>
        <option>Mercado Livre</option>
        <option>Magazine Luiza</option>
        <option>Submarino</option>
        <option>Casas Bahia</option>
      </select>
  </div>
  <div className="col">
      <label for="inputCidade" className="form-label">Tipo de Embalagem</label>
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
      <label for="inputCliente" className="form-label">Peso</label>
      <select id="inputCliente" className="form-control">
        <option selected>Selecione</option>
        <option>Até 300g</option>
        <option>500g</option>
        <option>1kg</option>
        <option>2kg</option>
      </select>
  </div>
<p></p>
<div className="table-responsive">
<div className="row mb-4">
<div className="col">
  <label for="inputObjeto" className="form-label">Nome</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
<div className="col">
  <label for="inputObjeto" className="form-label">Sobrenome</label>
  <input type="text" className="form-control" id="novoobjeto" placeholder="Insira o código do objeto" />
</div>
   
</div>
  <div className="row mb-4">
  <div className="col">
  <label for="inputObservacao" className="form-label">Observação</label>
  <input type="text" className="form-control" id="observacao" placeholder="Insira o comentário" />
  </div>
  <div className="form-group col-md">
      <label for="inputState" className="form-label">Status</label>
      <select id="inputState" className="form-control">
        <option selected>Postado</option>
        <option>Em rota para armazém</option>
        <option>Em rota de entrega</option>
        <option>Destinatário ausente</option>
        <option>Reprogramada</option>
      </select>
  </div>
  <div className="form-group col-md">
      <label for="inputState" className="form-label">Ordem de entrega</label>
      <select id="inputState" className="form-control">
        <option selected>Selecione</option>
        <option>001</option>
        <option>002</option>
        <option>003</option>
        <option>004</option>
      </select>
  </div>
    </div>
  <p></p>
  </div>  
  </div>
</form>

            </div>
        )
    }

}

export default Novoobjeto;