import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { ListarCliente } from "./views/Clientes/ListarCliente/index.js";
import { PedidosCliente } from "./views/Clientes/PedidosCliente/index.js";
import { ListarPedido } from "./views/Pedido/ListarPedido/index.js";
import { ListarServico } from "./views/Servico/ListarServico/index.js";
import { Menu } from "./components/Menu.js";
import { Item } from "./views/Servico/Item/index.js";
import { CadastrarServico } from "./views/Servico/Cadastrar/index.js";
import { EditarPedido } from "./views/Pedido/EditarPedido/index.js";
import { InserirCliente } from "./views/Clientes/InserirCliente/index.js";
import { InserirPedido } from "./views/Pedido/InserirPedido/index.js";
import { ItemPedido } from "./views/Pedido/ItemPedido/index.js";
import { EditarCliente } from "./views/Clientes/EditarCliente/index.js";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/editar-cliente/:id" component={EditarCliente} />
          <Route exact path="/editar-pedido/:id" component={EditarPedido} />
          <Route exact path="/inserir-cliente" component={InserirCliente} />
          <Route exact path="/listar-cliente" component={ListarCliente} />
          <Route exact path="/pedidos-cliente/:id" component={PedidosCliente} />
          <Route exact path="/inserir-pedido" component={InserirPedido} />
          <Route exact path="/pedido-servico/:id" component={ItemPedido} />
          <Route exact path="/listar-pedido" component={ListarPedido} />
          <Route exact path="/listar-servico" component={ListarServico} />
          <Route exact path="/cadastrarservico" component={CadastrarServico} />
          <Route exact path="/listar-pedido/:id" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
