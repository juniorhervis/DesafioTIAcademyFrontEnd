import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { ListarCliente } from "./views/Home/Cliente/ListarCliente/index.js";
import { ListarPedido } from "./views/Home/Pedido/ListarPedido/index.js";
import { ListarServico } from "./views/Home/Servico/ListarServico/index.js";
import { Menu } from "./components/Menu.js"


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar-cliente" component={ListarCliente} />
          <Route path="/listar-pedido" component={ListarPedido} />
          <Route path="/listar-servico" component={ListarServico} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
