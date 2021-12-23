import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { ListarCliente } from "./views/Home/Cliente/ListarCliente/index.js";
import { ListarPedido } from "./views/Home/Pedido/ListarPedido/index.js";
import { ListarServico } from "./views/Home/Servico/ListarServico/index.js";
import { Menu } from "./components/Menu.js";
import { Item } from "./views/Home/Servico/Item";
import { CadastrarServico } from "./views/Home/Servico/Cadastrar";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listar-cliente" component={ListarCliente} />
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
