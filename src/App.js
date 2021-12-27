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
import { EditarPedidoCliente } from "./views/Clientes/EditarPedidoCliente/index.js";
import { InserirCliente } from "./views/Clientes/InserirCliente/index.js";
import { InserirPedido } from "./views/Pedido/InserirPedido";
import { PedidosServico } from "./views/Pedido/PedidosServico";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Router
            exact
            path="/editar-pedido/:id"
            component={EditarPedidoCliente}
          />
          <Route exact path="/inserir-cliente" component={InserirCliente} />
          <Route exact path="/listar-cliente" component={ListarCliente} />
          <Route exact path="/pedidos-cliente/:id" component={PedidosCliente} />
          <Route exact path="/inserir-pedido" component={InserirPedido} />
          <Route exact path="/pedido-servico/:id" component={PedidosServico}/>
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
