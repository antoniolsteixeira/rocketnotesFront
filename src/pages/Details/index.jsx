import { Container } from "./styled";

import { Header } from '../../components/Header'
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <h1>Hello World!</h1>
      <span>Antonio Teixeira</span>
      <Button title="Voltar" />
    </Container>
  );
}
