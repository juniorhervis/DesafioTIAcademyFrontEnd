import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarPedido = () => {
  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getPedidos = async () => {
    axios
      .get(api + "/listapedidos")
      .then((response) => {
        console.log(response.data.pedidos);
        setData(response.data.pedidos);
      })
      .catch(() => {
        console.log("Erro: Sem conexão com a API.");
      });
  };

  const apagarPedido = async (idPedido) => {
    console.log(idPedido);

    const headers = {
      "Content-type": "application/json",
    };

    await axios
      .get(api + "/excluirpedido/" + idPedido, { headers })
      .then((response) => {
        console.log(response.data.error);
        getPedidos();
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Não foi possível conetar-se a API.",
        });
      });
  };

  useEffect(() => {
    getPedidos();
  }, []);

  return (
    <div>
      <Container>
        <div className="p-2">
          {status.type === "error" ? (
            <Alert color="danger">{status.message}</Alert>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex">
          <div>
            <h1>Visualizar Pedidos</h1>
          </div>
          <div className="m-auto p-2">
            <Link
              to="/inserir-pedido"
              className="btn btn-outline-success btn-sm"
            >
              Cadastrar
            </Link>
          </div>
        </div>
        <Table striped className="text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>DataPedido</th>
              <th>ClienteId</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pedidos) => (
              <tr key={pedidos.id}>
                <th scope="row">{pedidos.id}</th>
                <td>{pedidos.dataPedido}</td>
                <td>{pedidos.ClienteId}</td>
                <td>
                  <Link
                    to={"/pedido-servico/" + pedidos.id}
                    className="btn btn-outline-primary btn-sm "
                  >
                    Consultar
                  </Link>
                  <span
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => apagarPedido(pedidos.id)}
                  >
                    Excluir
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
