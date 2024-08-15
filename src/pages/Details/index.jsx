import { Container,Links, Content } from "./styled";

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header'
import { Button } from "../../components/Button";
import { Section } from '../../components/Section';
import { Buttontext } from "../../components/Buttontext";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Buttontext title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, deleniti distinctio 
            debitis maxime ad consectetur optio quo quidem officiis reprehenderit earum culpa porro, 
            ipsa eaque nobis sed suscipit sunt voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, deleniti distinctio 
            debitis maxime ad consectetur optio quo quidem officiis reprehenderit earum culpa porro, 
            ipsa eaque nobis sed suscipit sunt voluptatem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, deleniti distinctio 
            debitis maxime ad consectetur optio quo quidem officiis reprehenderit earum culpa porro, 
            ipsa eaque nobis sed suscipit sunt voluptatem.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
