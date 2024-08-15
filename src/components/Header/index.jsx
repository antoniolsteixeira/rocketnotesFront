import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styled';

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/antoniolsteixeira.png" 
                    alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Antonio Teixeira</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}