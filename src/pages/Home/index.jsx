import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
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

                </Search>

                <Content>

                </Content>

                <NewNote>
                    <FiPlus />
                    Criar nota

                </NewNote>
            
        </Container>
    )
}