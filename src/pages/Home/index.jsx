import { FiPlus,FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Buttontext } from '../../components/Buttontext';

export function Home() {
    return (
        <Container>
               <Brand>
                    <h1>Rocketnotes</h1>
                </Brand>

                <Header />
                
                <Menu>
                    <li><Buttontext title="Todos" $isactive='true' /></li>
                    <li><Buttontext title="React" /></li>
                    <li><Buttontext title="Nodejs" /></li>
                </Menu>

                <Search>
                    <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
                </Search>

                <Content>
                    <Section title="Minhas Notas">
                        <Note  data={{
                            title: 'React',
                            tags: [
                                {id: '1', name: 'React'},
                                {id: '2', name: 'JavaScript'}
                            ]
                        }}
                        
                        />

                    </Section>

                </Content>

                <NewNote>
                    <FiPlus />
                    Criar nota

                </NewNote>
            
        </Container>
    )
}