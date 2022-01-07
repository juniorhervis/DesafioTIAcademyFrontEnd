import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { EditarCliente } from "./views/Clientes/EditarCliente/index.js";
import { InserirCliente } from "./views/Clientes/InserirCliente/index.js";
import { ListarCliente } from "./views/Clientes/ListarCliente/index.js";
import { Home } from "./views/Home/index.js";
import { EditarPedido } from "./views/Pedido/EditarPedido/index.js";
import { InserirPedido } from "./views/Pedido/InserirPedido/index.js";
import { ListarPedido } from "./views/Pedido/ListarPedido/index.js";
import { PedidosCliente } from "./views/Clientes/PedidosCliente/index.js";
import { EditarServico } from "./views/Servico/EditarServico";
import { InserirServico } from "./views/Servico/InserirServico/index.js";
import { ListarServico } from "./views/Servico/ListarServico/index.js";
import { EditarCompra } from "./views/Compra/EditarCompra/index.js";
import { InserirCompra } from "./views/Compra/InserirCompra/index.js";
import { ListarCompra } from "./views/Compra/ListarCompra/index.js";
import { EditarProduto } from "./views/Produto/EditarProduto/index.js"
import { ListarProduto } from "./views/Produto/ListarProduto/index.js";
import { InserirProduto } from "./views/Produto/InserirProduto/index.js";


import { Menu } from "./components/Menu.js";
import { Item } from "./views/Servico/Item/index.js";

import { ItemPedido } from "./views/Pedido/ItemPedido/index.js";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/editar-cliente/:id" component={EditarCliente} />
          <Route exact path="/inserir-cliente" component={InserirCliente} />
          <Route exact path="/listar-cliente" component={ListarCliente} />
          <Route exact path="/" component={Home} />
          <Route exact path="/editar-pedido/:id" component={EditarPedido} />
          <Route exact path="/inserir-pedido" component={InserirPedido} />
          <Route exact path="/listar-pedido" component={ListarPedido} />
          <Route exact path="/editar-servico/:id" component={EditarServico} />
          <Route exact path="/inserir-servico" component={InserirServico} />
          <Route exact path="/listar-servico" component={ListarServico} />
          <Route exact path="/editar-compra/:id" component={EditarCompra} />
          <Route exact path="/inserir-compra" component={InserirCompra} />
          <Route exact path="/listar-compra" component={ListarCompra} />
          <Route exact path="/editar-produto/:id" component={EditarProduto} />
          <Route exact path="/inserir-produto" component={InserirProduto}/>
          <Route exact path="/listar-produto" component={ListarProduto}/>

          <Route exact path="/pedidos-cliente/:id" component={PedidosCliente} />

          <Route exact path="/pedido-servico/:id" component={ItemPedido} />

          <Route exact path="/listar-pedido/:id" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
