import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const PedidosServico = (props) => {
  //console.log(props.match.params.id)

  const [data, setData] = useState([]);

  const [id] = useState(props.match.params.id);

  useEffect(() => {
    const getPedidos = async () => {
      await axios
        .get(api + "/itempedido/pedido/" + id)
        .then((response) => {
          console.log(response.data.pedidos);
          setData(response.data.pedidos);
        })
        .catch(() => {
          console.log("Erro. Sem conexão com a API.");
        });
    };
    getPedidos();
  }, [id]);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="m-auto p-2">
            <h1>Serviços do Pedido</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-servico"
              className="btn btn-outline-success btn-sm"
            >
              Servicos
            </Link>
          </div>
          <div className="p-2">
            <Link
              to="/listar-pedido"
              className="btn btn-outline-success btn-sm"
            >
              Pedidos
            </Link>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ServiçoID</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pedidos) => (
              <tr key={pedidos.id}>
                <td>{pedidos.id}</td>
                <td>{pedidos.dataPedido}</td>
                <td>{pedidos.ClienteId}</td>
                <td>{pedidos.items_pedidos}</td>
                <td className="text-center">
                  <Link
                    to={"/listar-servico/"}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Consultar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
