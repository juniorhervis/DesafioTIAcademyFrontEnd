import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { api } from "../../../config";

export const EditarPedido = (props) => {
  const [id, setId] = useState(props.match.params.id);
  const [dataPedido, setDataPedido] = useState("");
  const [ClienteId, setClienteId] = useState("");
  console.log(props);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const edtPedido = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .put(api + "/pedido/" + id, { id, dataPedido, ClienteId }, { headers })
      .then((response) => {})
      .catch(() => {
        setStatus({
          type: "error",
          message: "Não foi possível conectar a API.",
        });
      });
  };

  useEffect(() => {
    const getPedido = async () => {
      await axios
        .get(api + "/pedido/" + id)
        .then((response) => {
          setId(response.data.pedido.id);
          setDataPedido(response.data.pedido.dataPedido);
          setClienteId(response.data.pedido.ClienteId);
        })
        .catch(() => {
          console.log("Erro: não foi possível se conectar a API.");
        });
    };
    getPedido();
  }, [id]);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="m-auto p-2">
            <h1>Editar Pedido</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-pedido"
              className="btn btn-outline-primary btn-sm"
            >
              Pedidos
            </Link>
          </div>
        </div>
        <hr className="m-1" />
        {status.type === "error" ? (
          <Alert color="danger">{status.message}</Alert>
        ) : (
          " "
        )}
        {status.type === "success" ? (
          <Alert color="success">{status.message}</Alert>
        ) : (
          " "
        )}

        <Form className="p-2" onSubmit={edtPedido}>
          <FormGroup className="p-2">
            <Label>ID Pedido</Label>
            <Input
              type="number"
              name="id"
              placeholder="id do pedido"
              defaultValue={id}
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Data</Label>
            <Input
              type="date"
              name="dataPedido"
              placeholder="data do pedido"
              value={dataPedido}
              onChange={(e) => setDataPedido(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>ClienteId</Label>
            <Input
              type="number"
              name="ClienteId"
              placeholder="id do cliente"
              defaultValue={ClienteId}
            />
          </FormGroup>
          <Button type="submit" outline color="success">
            Salvar
          </Button>
        </Form>
      </Container>
    </div>
  );
};
