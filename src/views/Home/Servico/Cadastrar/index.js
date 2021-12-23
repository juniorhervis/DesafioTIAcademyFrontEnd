import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export const CadastrarServico = () => {
  return (
    <Container>
      <div className="d-flex">
        <div className="m-auto p-2">
          <h1>Cadastrar Serviço</h1>
        </div>
        <div className="p-2">
          <Link to="/listar-servico" className="btn btn-outline-success btn-sm">
            Serviços
          </Link>
        </div>
      </div>
    </Container>
  );
};
