import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export const InserirPedido = () => {
  const [pedido, setPedido] = useState({
    nome: "",
    nascimento: "",
  });

  const valorInput = (e) =>
    setPedido({ ...pedido, [e.target.name]: e.target.value });

  const cadPedido = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    await axios
      .post(api + "/pedido", pedido, { headers })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {
        console.log("Erro: Sem conexão com a API.");
      });
  };

  return (
    <div>
      <Container>
        <div className="d-flex">
          <h1 className="m-3">Cadastrar Pedido</h1>
          <div className="m-auto">
            <div className="p-2">
              <Link
                to="/listar-pedido"
                className="btn btn-outline-success btn-sm"
              >
                Pedidos
              </Link>
            </div>
          </div>
        </div>
        <Form className="p-2" onSubmit={cadPedido}>
          <FormGroup className="p-2">
            <Label>Data do Pedido</Label>
            <Input
              type="date"
              name="dataPedido"
              placeholder="Data do Pedido"
              required
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Id do Cliente</Label>
            <Input
              type="text"
              name="ClienteId"
              placeholder="Id do Cliente"
              required
              onChange={valorInput}
            />
          </FormGroup>
          <Button type="submit" outline color="success">
            Cadastrar
          </Button>
          <Button type="reset" outline color="warning">
            Limpar
          </Button>
        </Form>
      </Container>
    </div>
  );
};
